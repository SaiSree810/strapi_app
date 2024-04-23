import { errors } from '@strapi/utils';
import type { Core, UID } from '@strapi/types';
import { getService as getContentManagerService } from '../../utils';
import { getService } from '../utils';
import { HistoryVersions } from '../../../../shared/contracts';
import { RestoreHistoryVersion } from '../../../../shared/contracts/history-versions';
import { validateRestoreVersion } from './validation/history-version';

/**
 * Parses pagination params and makes sure they're within valid ranges
 */
const getValidPagination = ({ page, pageSize }: { page: any; pageSize: any }) => {
  let pageNumber = 1;
  let pageSizeNumber = 20;

  if (page) {
    const parsedPage = parseInt(page, 10);
    pageNumber = parseInt(page, 10);

    if (!Number.isNaN(parsedPage) && parsedPage >= 1) {
      pageNumber = parsedPage;
    }
  }

  if (pageSize) {
    const parsedPageSize = parseInt(pageSize, 10);

    if (!Number.isNaN(parsedPageSize) && parsedPageSize >= 1 && parsedPageSize <= 100) {
      pageSizeNumber = parsedPageSize;
    }
  }

  return { page: pageNumber, pageSize: pageSizeNumber };
};

const createHistoryVersionController = ({ strapi }: { strapi: Core.Strapi }) => {
  return {
    async findMany(ctx) {
      const contentTypeUid = ctx.query.contentType as UID.ContentType;
      const isSingleType = strapi.getModel(contentTypeUid)?.kind === 'singleType';

      if (isSingleType && !contentTypeUid) {
        throw new errors.ForbiddenError('contentType is required');
      }

      if (!isSingleType && (!contentTypeUid || !ctx.query.documentId)) {
        throw new errors.ForbiddenError('contentType and documentId are required');
      }

      /**
       * There are no permissions specifically for history versions,
       * but we need to check that the user can read the content type
       */
      const permissionChecker = getContentManagerService('permission-checker').create({
        userAbility: ctx.state.userAbility,
        model: ctx.query.contentType,
      });

      if (permissionChecker.cannot.read()) {
        return ctx.forbidden();
      }

      const params: HistoryVersions.GetHistoryVersions.Request['query'] =
        await permissionChecker.sanitizeQuery(ctx.query);

      const { results, pagination } = await getService(strapi, 'history').findVersionsPage({
        ...params,
        ...getValidPagination({ page: params.page, pageSize: params.pageSize }),
      });

      return {
        data: await Promise.all(
          results.map(async (result) => ({
            ...result,
            data: await permissionChecker.sanitizeOutput(result.data),
          }))
        ),
        meta: { pagination },
      };
    },

    async restoreVersion(ctx) {
      const request = ctx.request as unknown as RestoreHistoryVersion.Request;

      await validateRestoreVersion(request.body, 'contentType is required');

      const permissionChecker = getContentManagerService('permission-checker').create({
        userAbility: ctx.state.userAbility,
        model: request.body.contentType,
      });

      if (permissionChecker.cannot.update()) {
        throw new errors.ForbiddenError();
      }

      const restoredDocument = await getService(strapi, 'history').restoreVersion(
        request.params.versionId
      );

      return {
        data: { documentId: restoredDocument.documentId },
      } satisfies RestoreHistoryVersion.Response;
    },
  } satisfies Core.Controller;
};

export { createHistoryVersionController };

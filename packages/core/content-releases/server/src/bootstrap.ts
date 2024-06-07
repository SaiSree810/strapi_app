/* eslint-disable @typescript-eslint/no-var-requires */
import type { Core, Data, UID } from '@strapi/types';

import { RELEASE_ACTION_MODEL_UID, RELEASE_MODEL_UID, ALLOWED_WEBHOOK_EVENTS } from './constants';
import { isEntryValid, getService } from './utils';

export const bootstrap = async ({ strapi }: { strapi: Core.Strapi }) => {
  if (strapi.ee.features.isEnabled('cms-content-releases')) {
    const contentTypesWithDraftAndPublish = Object.keys(strapi.contentTypes).filter(
      (uid: any) => strapi.contentTypes[uid]?.options?.draftAndPublish
    );

    // Clean up release-actions when an entry is deleted
    strapi.db.lifecycles.subscribe({
      models: contentTypesWithDraftAndPublish,

      async afterDelete(event) {
        try {
          const model = strapi.getModel(event.model.uid as UID.Schema);
          // @ts-expect-error TODO: lifecycles types looks like are not 100% finished
          if (model.kind === 'collectionType' && model.options?.draftAndPublish) {
            const id = event.result.id;

            const releases = await strapi.db.query(RELEASE_MODEL_UID).findMany({
              where: {
                actions: {
                  target_type: model.uid,
                  target_id: id,
                },
              },
            });

            await strapi.db.query(RELEASE_ACTION_MODEL_UID).deleteMany({
              where: {
                target_type: model.uid,
                target_id: id,
              },
            });

            // We update the status of each release after delete the actions
            for (const release of releases) {
              getService('release', { strapi }).updateReleaseStatus(release.id);
            }
          }
        } catch (error) {
          // If an error happens we don't want to block the delete entry flow, but we log the error
          strapi.log.error('Error while deleting release actions after entry delete', { error });
        }
      },
      /**
       * deleteMany hook doesn't return the deleted entries ids
       * so we need to fetch them before deleting the entries to save the ids on our state
       */
      async beforeDeleteMany(event) {
        const model = strapi.getModel(event.model.uid as UID.Schema);
        // @ts-expect-error TODO: lifecycles types looks like are not 100% finished
        if (model.kind === 'collectionType' && model.options?.draftAndPublish) {
          const { where } = event.params;
          const entriesToDelete = await strapi.db
            .query(model.uid)
            .findMany({ select: ['id'], where });
          event.state.entriesToDelete = entriesToDelete;
        }
      },
      /**
       * We delete the release actions related to deleted entries
       * We make this only after deleteMany is succesfully executed to avoid errors
       */
      async afterDeleteMany(event) {
        try {
          const { model, state } = event;
          const entriesToDelete = state.entriesToDelete;
          if (entriesToDelete) {
            const releases = await strapi.db.query(RELEASE_MODEL_UID).findMany({
              where: {
                actions: {
                  target_type: model.uid,
                  target_id: {
                    $in: (entriesToDelete as Array<{ id: Data.ID }>).map((entry) => entry.id),
                  },
                },
              },
            });

            await strapi.db.query(RELEASE_ACTION_MODEL_UID).deleteMany({
              where: {
                target_type: model.uid,
                target_id: {
                  $in: (entriesToDelete as Array<{ id: Data.ID }>).map((entry) => entry.id),
                },
              },
            });

            // We update the status of each release after delete the actions
            for (const release of releases) {
              getService('release', { strapi }).updateReleaseStatus(release.id);
            }
          }
        } catch (error) {
          // If an error happens we don't want to block the delete entry flow, but we log the error
          strapi.log.error('Error while deleting release actions after entry deleteMany', {
            error,
          });
        }
      },

      async afterUpdate(event) {
        try {
          const model = strapi.getModel(event.model.uid as UID.Schema);
          if (model.options?.draftAndPublish) {
            const result = event.result;

            const entryStatus = await isEntryValid(model.uid as UID.ContentType, result, {
              strapi,
            });

            await strapi.db.query(RELEASE_ACTION_MODEL_UID).update({
              where: {
                contentType: model.uid,
                documentId: result.documentId ?? null,
                locale: result.locale ?? null,
              },
              data: {
                isEntryValid: entryStatus,
              },
            });

            const releases = await strapi.db.query(RELEASE_MODEL_UID).findMany({
              where: {
                actions: {
                  contentType: model.uid,
                  documentId: result.documentId ?? null,
                  locale: result.locale ?? null,
                },
              },
            });

            for (const release of releases) {
              getService('release', { strapi }).updateReleaseStatus(release.id);
            }
          }
        } catch (error) {
          // If an error happens we don't want to block the update entry flow, but we log the error
          strapi.log.error('Error while updating release actions after entry update', { error });
        }
      },
    });

    getService('scheduling', { strapi })
      .syncFromDatabase()
      .catch((err: Error) => {
        strapi.log.error(
          'Error while syncing scheduled jobs from the database in the content-releases plugin. This could lead to errors in the releases scheduling.'
        );

        throw err;
      });

    Object.entries(ALLOWED_WEBHOOK_EVENTS).forEach(([key, value]) => {
      strapi.get('webhookStore').addAllowedEvent(key, value);
    });
  }
};

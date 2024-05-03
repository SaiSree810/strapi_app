import { PaperPlane } from '@strapi/icons';

import { AddToReleaseAction } from './components/AddToReleaseAction';
import { ReleaseAction } from './components/ReleaseAction';
import { Panel as ReleasesPanel } from './components/ReleasesPanel';
// import { addColumnToTableHook } from './components/ReleaseListCell';
import { PERMISSIONS } from './constants';
import { pluginId } from './pluginId';
import { releaseApi } from './services/release';
import { prefixPluginTranslations } from './utils/prefixPluginTranslations';

import type { StrapiApp } from '@strapi/admin/strapi-admin';
import type {
  BulkActionComponent,
  DocumentActionComponent,
} from '@strapi/content-manager/strapi-admin';
import type { Plugin } from '@strapi/types';

// eslint-disable-next-line import/no-default-export
const admin: Plugin.Config.AdminInput = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register(app: StrapiApp) {
    /**
     * Hook that adds the locale column in the Release Details table
     * @constant
     * @type {string}
     */
    app.createHook('ContentReleases/pages/ReleaseDetails/add-locale-in-releases');
    if (window.strapi.features.isEnabled('cms-content-releases')) {
      app.addMenuLink({
        to: `plugins/${pluginId}`,
        icon: PaperPlane,
        intlLabel: {
          id: `${pluginId}.plugin.name`,
          defaultMessage: 'Releases',
        },
        Component: () => import('./pages/App').then((mod) => ({ default: mod.App })),
        permissions: PERMISSIONS.main,
      });

      /**
       * For some reason every middleware you pass has to a function
       * that returns the actual middleware. It's annoying but no one knows why....
       */
      // @ts-expect-error – this API needs to be typed better.
      app.addMiddlewares([() => releaseApi.middleware]);

      app.addReducers({
        [releaseApi.reducerPath]: releaseApi.reducer,
      });

      // Insert the releases container into the CM's sidebar on the Edit View
      const contentManagerPluginApis = app.getPlugin('content-manager').apis;
      if (
        'addEditViewSidePanel' in contentManagerPluginApis &&
        typeof contentManagerPluginApis.addEditViewSidePanel === 'function'
      ) {
        contentManagerPluginApis.addEditViewSidePanel([ReleasesPanel]);
      }

      // Insert the "add to release" action into the CM's Edit View
      if (
        'addDocumentAction' in contentManagerPluginApis &&
        typeof contentManagerPluginApis.addDocumentAction === 'function'
      ) {
        contentManagerPluginApis.addDocumentAction((actions: DocumentActionComponent[]) => {
          const indexOfDeleteAction = actions.findIndex((action) => action.type === 'unpublish');
          actions.splice(indexOfDeleteAction, 0, AddToReleaseAction);
          return actions;
        });
      }

      // @ts-expect-error – plugins are not typed on the StrapiApp, fix this.
      app.plugins['content-manager'].apis.addBulkAction((actions: BulkActionComponent[]) => {
        // We want to add this action to just before the delete action all the time
        const deleteActionIndex = actions.findIndex((action) => action.name === 'DeleteAction');

        actions.splice(deleteActionIndex, 0, ReleaseAction);
        return actions;
      });
      // Hook that adds a column into the CM's LV table
      // app.registerHook('Admin/CM/pages/ListView/inject-column-in-table', addColumnToTableHook);
    } else if (
      !window.strapi.features.isEnabled('cms-content-releases') &&
      window.strapi?.flags?.promoteEE
    ) {
      app.addMenuLink({
        to: `/plugins/purchase-content-releases`,
        icon: PaperPlane,
        intlLabel: {
          id: `${pluginId}.plugin.name`,
          defaultMessage: 'Releases',
        },
        permissions: [],
        async Component() {
          const { PurchaseContentReleases } = await import('./pages/PurchaseContentReleases');
          return { default: PurchaseContentReleases };
        },
        lockIcon: true,
      });
    }
  },
  async registerTrads({ locales }: { locales: string[] }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, 'content-releases'),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};

// eslint-disable-next-line import/no-default-export
export default admin;

import strapiAdmin from '@strapi/admin';
import { getConfigUrls, getAbsoluteServerUrl } from '@strapi/utils';

import { getEnabledPlugins } from '../../../core/loaders/plugins/get-enabled-plugins';
import addSlash from '../../../utils/addSlash';
import strapi from '../../../index';

export const action = async ({ browser }: { browser: boolean }) => {
  const appContext = await strapi.compile();

  const strapiInstance = strapi({
    ...appContext,
    autoReload: true,
    serveAdminPanel: false,
  });

  const plugins = await getEnabledPlugins(strapiInstance, { client: true });

  const { adminPath } = getConfigUrls(strapiInstance.config, true);

  const adminPort = strapiInstance.config.get('admin.port', 8000);
  const adminHost = strapiInstance.config.get('admin.host', 'localhost');

  const backendURL = getAbsoluteServerUrl(strapiInstance.config, true);

  strapiAdmin.watchAdmin({
    appDir: appContext.appDir,
    buildDestDir: appContext.distDir,
    plugins,
    port: adminPort,
    host: adminHost,
    browser,
    options: {
      backend: backendURL,
      adminPath: addSlash(adminPath),
    },
  });
};

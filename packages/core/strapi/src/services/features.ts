/**
 * The features service is responsible for managing features within strapi,
 * including interacting with the feature configuration file to know
 * which are enabled and disabled.
 */

import type { Strapi, FeaturesService } from '@strapi/types';

type FeatureName = keyof FeaturesService['config']['future'];

const createFeaturesService = (strapi: Strapi): FeaturesService => {
  const service: FeaturesService = {
    get config() {
      return strapi.config.get<FeaturesService['config'] | undefined>('features');
    },
    future: {
      isEnabled(futureFlagName: string): boolean {
        return service.config?.future[futureFlagName as FeatureName] === true;
      },
    },
  };
  
  return service;
};

export { createFeaturesService };
export type { FeaturesService };

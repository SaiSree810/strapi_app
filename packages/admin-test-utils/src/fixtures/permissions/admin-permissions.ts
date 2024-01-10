// TODO: this should be called user
const admin = [
  {
    id: 133,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'plugin::users-permissions.user',
    properties: {
      fields: [
        'username',
        'email',
        'provider',
        'password',
        'resetPasswordToken',
        'confirmationToken',
        'confirmed',
        'blocked',
        'role',
        'picture',
      ],
    },
    conditions: [],
  },
  {
    id: 137,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::homepage.homepage',
    properties: {
      fields: ['title', 'slug', 'single', 'multiple'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 138,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::kitchensink.kitchensink',
    properties: {
      fields: [
        'short_text',
        'long_text',
        'rich_text',
        'blocks',
        'integer',
        'biginteger',
        'decimal',
        'float',
        'date',
        'datetime',
        'time',
        'timestamp',
        'boolean',
        'email',
        'password',
        'enumeration',
        'single_media',
        'multiple_media',
        'json',
        'single_compo.name',
        'single_compo.test',
        'repeatable_compo.name',
        'repeatable_compo.test',
        'dynamiczone',
        'one_way_tag',
        'one_to_one_tag',
        'one_to_many_tags',
        'many_to_one_tag',
        'many_to_many_tags',
        'many_way_tags',
        'morph_to_one',
        'morph_to_many',
        'custom_field',
        'custom_field_with_default_options',
        'cats',
      ],
    },
    conditions: [],
  },
  {
    id: 139,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::like.like',
    properties: {
      fields: ['author', 'review'],
    },
    conditions: [],
  },
  {
    id: 140,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::menu.menu',
    properties: {
      fields: ['description', 'menusections', 'restaurant'],
    },
    conditions: [],
  },
  {
    id: 141,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::menusection.menusection',
    properties: {
      fields: [
        'name',
        'dishes.name',
        'dishes.description',
        'dishes.price',
        'dishes.picture',
        'dishes.very_long_description',
        'dishes.categories',
        'menu',
      ],
    },
    conditions: [],
  },
  {
    id: 142,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::relation-locale.relation-locale',
    properties: {
      fields: [
        'categories',
        'title',
        'repeatable_relations.categories',
        'dynamic_relations',
        'single_relation.categories',
        'require_single_relation.categories',
      ],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 143,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::restaurant.restaurant',
    properties: {
      fields: [
        'name',
        'slug',
        'priceRange',
        'closingPeriod.label',
        'closingPeriod.start_date',
        'closingPeriod.end_date',
        'closingPeriod.media',
        'closingPeriod.dish.name',
        'closingPeriod.dish.description',
        'closingPeriod.dish.price',
        'closingPeriod.dish.picture',
        'closingPeriod.dish.very_long_description',
        'closingPeriod.dish.categories',
        'contactEmail',
        'stars',
        'averagePrice',
        'address',
        'cover',
        'timestamp',
        'images',
        'shortDescription',
        'since',
        'categories',
        'description',
        'services.name',
        'services.media',
        'services.is_available',
        'menu',
        'openingTimes.label',
        'openingTimes.time',
        'openingTimes.dishrep.name',
        'openingTimes.dishrep.description',
        'openingTimes.dishrep.price',
        'openingTimes.dishrep.picture',
        'openingTimes.dishrep.very_long_description',
        'openingTimes.dishrep.categories',
        'dz',
      ],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 144,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::review.review',
    properties: {
      fields: ['comment', 'rating', 'likes', 'author', 'restaurant'],
    },
    conditions: [],
  },
  {
    id: 145,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::tag.tag',
    properties: {
      fields: [
        'name',
        'many_to_one_kitchensink',
        'one_to_many_kitchensinks',
        'many_to_many_kitchensinks',
        'one_to_one_kitchensink',
      ],
    },
    conditions: [],
  },
  {
    id: 146,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::temp.temp',
    properties: {
      fields: ['name', 'category', 'categories'],
    },
    conditions: [],
  },
  {
    id: 148,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'plugin::users-permissions.user',
    properties: {
      fields: [
        'username',
        'email',
        'provider',
        'password',
        'resetPasswordToken',
        'confirmationToken',
        'confirmed',
        'blocked',
        'role',
        'picture',
      ],
    },
    conditions: [],
  },
  {
    id: 152,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::homepage.homepage',
    properties: {
      fields: ['title', 'slug', 'single', 'multiple'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 153,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::kitchensink.kitchensink',
    properties: {
      fields: [
        'short_text',
        'long_text',
        'rich_text',
        'blocks',
        'integer',
        'biginteger',
        'decimal',
        'float',
        'date',
        'datetime',
        'time',
        'timestamp',
        'boolean',
        'email',
        'password',
        'enumeration',
        'single_media',
        'multiple_media',
        'json',
        'single_compo.name',
        'single_compo.test',
        'repeatable_compo.name',
        'repeatable_compo.test',
        'dynamiczone',
        'one_way_tag',
        'one_to_one_tag',
        'one_to_many_tags',
        'many_to_one_tag',
        'many_to_many_tags',
        'many_way_tags',
        'morph_to_one',
        'morph_to_many',
        'custom_field',
        'custom_field_with_default_options',
        'cats',
      ],
    },
    conditions: [],
  },
  {
    id: 154,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::like.like',
    properties: {
      fields: ['author', 'review'],
    },
    conditions: [],
  },
  {
    id: 155,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::menu.menu',
    properties: {
      fields: ['description', 'menusections', 'restaurant'],
    },
    conditions: [],
  },
  {
    id: 156,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::menusection.menusection',
    properties: {
      fields: [
        'name',
        'dishes.name',
        'dishes.description',
        'dishes.price',
        'dishes.picture',
        'dishes.very_long_description',
        'dishes.categories',
        'menu',
      ],
    },
    conditions: [],
  },
  {
    id: 157,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::relation-locale.relation-locale',
    properties: {
      fields: [
        'categories',
        'title',
        'repeatable_relations.categories',
        'dynamic_relations',
        'single_relation.categories',
        'require_single_relation.categories',
      ],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 158,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::restaurant.restaurant',
    properties: {
      fields: [
        'name',
        'slug',
        'priceRange',
        'closingPeriod.label',
        'closingPeriod.start_date',
        'closingPeriod.end_date',
        'closingPeriod.media',
        'closingPeriod.dish.name',
        'closingPeriod.dish.description',
        'closingPeriod.dish.price',
        'closingPeriod.dish.picture',
        'closingPeriod.dish.very_long_description',
        'closingPeriod.dish.categories',
        'contactEmail',
        'stars',
        'averagePrice',
        'address',
        'cover',
        'timestamp',
        'images',
        'shortDescription',
        'since',
        'categories',
        'description',
        'services.name',
        'services.media',
        'services.is_available',
        'menu',
        'openingTimes.label',
        'openingTimes.time',
        'openingTimes.dishrep.name',
        'openingTimes.dishrep.description',
        'openingTimes.dishrep.price',
        'openingTimes.dishrep.picture',
        'openingTimes.dishrep.very_long_description',
        'openingTimes.dishrep.categories',
        'dz',
      ],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 159,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::review.review',
    properties: {
      fields: ['comment', 'rating', 'likes', 'author', 'restaurant'],
    },
    conditions: [],
  },
  {
    id: 160,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::tag.tag',
    properties: {
      fields: [
        'name',
        'many_to_one_kitchensink',
        'one_to_many_kitchensinks',
        'many_to_many_kitchensinks',
        'one_to_one_kitchensink',
      ],
    },
    conditions: [],
  },
  {
    id: 161,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::temp.temp',
    properties: {
      fields: ['name', 'category', 'categories'],
    },
    conditions: [],
  },
  {
    id: 163,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'plugin::users-permissions.user',
    properties: {
      fields: [
        'username',
        'email',
        'provider',
        'password',
        'resetPasswordToken',
        'confirmationToken',
        'confirmed',
        'blocked',
        'role',
        'picture',
      ],
    },
    conditions: [],
  },
  {
    id: 167,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::homepage.homepage',
    properties: {
      fields: ['title', 'slug', 'single', 'multiple'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 168,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::kitchensink.kitchensink',
    properties: {
      fields: [
        'short_text',
        'long_text',
        'rich_text',
        'blocks',
        'integer',
        'biginteger',
        'decimal',
        'float',
        'date',
        'datetime',
        'time',
        'timestamp',
        'boolean',
        'email',
        'password',
        'enumeration',
        'single_media',
        'multiple_media',
        'json',
        'single_compo.name',
        'single_compo.test',
        'repeatable_compo.name',
        'repeatable_compo.test',
        'dynamiczone',
        'one_way_tag',
        'one_to_one_tag',
        'one_to_many_tags',
        'many_to_one_tag',
        'many_to_many_tags',
        'many_way_tags',
        'morph_to_one',
        'morph_to_many',
        'custom_field',
        'custom_field_with_default_options',
        'cats',
      ],
    },
    conditions: [],
  },
  {
    id: 169,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::like.like',
    properties: {
      fields: ['author', 'review'],
    },
    conditions: [],
  },
  {
    id: 170,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::menu.menu',
    properties: {
      fields: ['description', 'menusections', 'restaurant'],
    },
    conditions: [],
  },
  {
    id: 171,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::menusection.menusection',
    properties: {
      fields: [
        'name',
        'dishes.name',
        'dishes.description',
        'dishes.price',
        'dishes.picture',
        'dishes.very_long_description',
        'dishes.categories',
        'menu',
      ],
    },
    conditions: [],
  },
  {
    id: 172,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::relation-locale.relation-locale',
    properties: {
      fields: [
        'categories',
        'title',
        'repeatable_relations.categories',
        'dynamic_relations',
        'single_relation.categories',
        'require_single_relation.categories',
      ],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 173,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::restaurant.restaurant',
    properties: {
      fields: [
        'name',
        'slug',
        'priceRange',
        'closingPeriod.label',
        'closingPeriod.start_date',
        'closingPeriod.end_date',
        'closingPeriod.media',
        'closingPeriod.dish.name',
        'closingPeriod.dish.description',
        'closingPeriod.dish.price',
        'closingPeriod.dish.picture',
        'closingPeriod.dish.very_long_description',
        'closingPeriod.dish.categories',
        'contactEmail',
        'stars',
        'averagePrice',
        'address',
        'cover',
        'timestamp',
        'images',
        'shortDescription',
        'since',
        'categories',
        'description',
        'services.name',
        'services.media',
        'services.is_available',
        'menu',
        'openingTimes.label',
        'openingTimes.time',
        'openingTimes.dishrep.name',
        'openingTimes.dishrep.description',
        'openingTimes.dishrep.price',
        'openingTimes.dishrep.picture',
        'openingTimes.dishrep.very_long_description',
        'openingTimes.dishrep.categories',
        'dz',
      ],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 174,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::review.review',
    properties: {
      fields: ['comment', 'rating', 'likes', 'author', 'restaurant'],
    },
    conditions: [],
  },
  {
    id: 175,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::tag.tag',
    properties: {
      fields: [
        'name',
        'many_to_one_kitchensink',
        'one_to_many_kitchensinks',
        'many_to_many_kitchensinks',
        'one_to_one_kitchensink',
      ],
    },
    conditions: [],
  },
  {
    id: 176,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::temp.temp',
    properties: {
      fields: ['name', 'category', 'categories'],
    },
    conditions: [],
  },
  {
    id: 177,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'plugin::myplugin.test',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 178,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'plugin::users-permissions.user',
    properties: {},
    conditions: [],
  },
  {
    id: 179,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::address.address',
    properties: {},
    conditions: [],
  },
  {
    id: 180,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::category.category',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 181,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::country.country',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 182,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::homepage.homepage',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 183,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::kitchensink.kitchensink',
    properties: {},
    conditions: [],
  },
  {
    id: 184,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::like.like',
    properties: {},
    conditions: [],
  },
  {
    id: 185,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::menu.menu',
    properties: {},
    conditions: [],
  },
  {
    id: 186,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::menusection.menusection',
    properties: {},
    conditions: [],
  },
  {
    id: 187,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::relation-locale.relation-locale',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 188,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::restaurant.restaurant',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 189,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::review.review',
    properties: {},
    conditions: [],
  },
  {
    id: 190,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::tag.tag',
    properties: {},
    conditions: [],
  },
  {
    id: 191,
    action: 'plugin::content-manager.explorer.delete',
    actionParameters: {},
    subject: 'api::temp.temp',
    properties: {},
    conditions: [],
  },
  {
    id: 192,
    action: 'plugin::content-manager.explorer.publish',
    actionParameters: {},
    subject: 'api::category.category',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 193,
    action: 'plugin::content-manager.explorer.publish',
    actionParameters: {},
    subject: 'api::homepage.homepage',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 194,
    action: 'plugin::content-manager.explorer.publish',
    actionParameters: {},
    subject: 'api::kitchensink.kitchensink',
    properties: {},
    conditions: [],
  },
  {
    id: 195,
    action: 'plugin::content-manager.explorer.publish',
    actionParameters: {},
    subject: 'api::relation-locale.relation-locale',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 196,
    action: 'plugin::content-manager.explorer.publish',
    actionParameters: {},
    subject: 'api::restaurant.restaurant',
    properties: {
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 197,
    action: 'plugin::content-manager.explorer.publish',
    actionParameters: {},
    subject: 'api::tag.tag',
    properties: {},
    conditions: [],
  },
  {
    id: 198,
    action: 'plugin::content-manager.explorer.publish',
    actionParameters: {},
    subject: 'api::temp.temp',
    properties: {},
    conditions: [],
  },
  {
    id: 199,
    action: 'plugin::content-manager.single-types.configure-view',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 200,
    action: 'plugin::content-manager.collection-types.configure-view',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 201,
    action: 'plugin::content-manager.components.configure-layout',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 202,
    action: 'plugin::content-type-builder.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 203,
    action: 'plugin::email.settings.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 204,
    action: 'plugin::upload.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 205,
    action: 'plugin::upload.assets.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 206,
    action: 'plugin::upload.assets.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 207,
    action: 'plugin::upload.assets.download',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 208,
    action: 'plugin::upload.assets.copy-link',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 209,
    action: 'plugin::upload.configure-view',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 210,
    action: 'plugin::upload.settings.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 211,
    action: 'plugin::documentation.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 212,
    action: 'plugin::documentation.settings.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 213,
    action: 'plugin::documentation.settings.regenerate',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 214,
    action: 'plugin::documentation.settings.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 215,
    action: 'plugin::i18n.locale.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 216,
    action: 'plugin::i18n.locale.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 217,
    action: 'plugin::i18n.locale.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 218,
    action: 'plugin::i18n.locale.delete',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 219,
    action: 'plugin::users-permissions.roles.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 220,
    action: 'plugin::users-permissions.roles.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 221,
    action: 'plugin::users-permissions.roles.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 222,
    action: 'plugin::users-permissions.roles.delete',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 223,
    action: 'plugin::users-permissions.providers.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 224,
    action: 'plugin::users-permissions.providers.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 225,
    action: 'plugin::users-permissions.email-templates.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 226,
    action: 'plugin::users-permissions.email-templates.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 227,
    action: 'plugin::users-permissions.advanced-settings.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 228,
    action: 'plugin::users-permissions.advanced-settings.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 229,
    action: 'admin::marketplace.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 230,
    action: 'admin::webhooks.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 231,
    action: 'admin::webhooks.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 232,
    action: 'admin::webhooks.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 233,
    action: 'admin::webhooks.delete',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 234,
    action: 'admin::users.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 235,
    action: 'admin::users.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 236,
    action: 'admin::users.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 237,
    action: 'admin::users.delete',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 238,
    action: 'admin::roles.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 239,
    action: 'admin::roles.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 240,
    action: 'admin::roles.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 241,
    action: 'admin::roles.delete',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 242,
    action: 'admin::api-tokens.access',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 243,
    action: 'admin::api-tokens.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 244,
    action: 'admin::api-tokens.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 245,
    action: 'admin::api-tokens.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 246,
    action: 'admin::api-tokens.regenerate',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 247,
    action: 'admin::api-tokens.delete',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 248,
    action: 'admin::project-settings.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 249,
    action: 'admin::project-settings.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 250,
    action: 'admin::transfer.tokens.access',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 251,
    action: 'admin::transfer.tokens.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 252,
    action: 'admin::transfer.tokens.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 253,
    action: 'admin::transfer.tokens.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 254,
    action: 'admin::transfer.tokens.regenerate',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 255,
    action: 'admin::transfer.tokens.delete',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 323,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::category.category',
    properties: {
      fields: ['name', 'addresses', 'temps', 'datetime', 'date', 'relation_locales'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 325,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::category.category',
    properties: {
      fields: ['name', 'addresses', 'temps', 'datetime', 'date', 'relation_locales'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 327,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::category.category',
    properties: {
      fields: ['name', 'addresses', 'temps', 'datetime', 'date', 'relation_locales'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 331,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::country.country',
    properties: {
      fields: ['name', 'code'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 332,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::country.country',
    properties: {
      fields: ['name', 'code'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 333,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::country.country',
    properties: {
      fields: ['name', 'code'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 337,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'api::address.address',
    properties: {
      fields: [
        'postal_code',
        'categories',
        'cover',
        'images',
        'city',
        'json',
        'slug',
        'notrepeat_req.name',
        'repeat_req.name',
        'repeat_req_min.name',
      ],
    },
    conditions: [],
  },
  {
    id: 338,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'api::address.address',
    properties: {
      fields: [
        'postal_code',
        'categories',
        'cover',
        'images',
        'city',
        'json',
        'slug',
        'notrepeat_req.name',
        'repeat_req.name',
        'repeat_req_min.name',
      ],
    },
    conditions: [],
  },
  {
    id: 339,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'api::address.address',
    properties: {
      fields: [
        'postal_code',
        'categories',
        'cover',
        'images',
        'city',
        'json',
        'slug',
        'notrepeat_req.name',
        'repeat_req.name',
        'repeat_req_min.name',
      ],
    },
    conditions: [],
  },
  {
    id: 347,
    action: 'admin::review-workflows.stage.transition',
    actionParameters: {
      from: 1,
    },
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 350,
    action: 'admin::review-workflows.stage.transition',
    actionParameters: {
      from: 2,
    },
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 353,
    action: 'admin::review-workflows.stage.transition',
    actionParameters: {
      from: 3,
    },
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 356,
    action: 'admin::review-workflows.stage.transition',
    actionParameters: {
      from: 4,
    },
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 359,
    action: 'admin::provider-login.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 360,
    action: 'admin::provider-login.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 361,
    action: 'admin::audit-logs.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 362,
    action: 'admin::review-workflows.create',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 363,
    action: 'admin::review-workflows.read',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 364,
    action: 'admin::review-workflows.update',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 365,
    action: 'admin::review-workflows.delete',
    actionParameters: {},
    subject: null,
    properties: {},
    conditions: [],
  },
  {
    id: 375,
    action: 'plugin::content-manager.explorer.create',
    actionParameters: {},
    subject: 'plugin::myplugin.test',
    properties: {
      fields: ['type'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 376,
    action: 'plugin::content-manager.explorer.read',
    actionParameters: {},
    subject: 'plugin::myplugin.test',
    properties: {
      fields: ['type'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
  {
    id: 377,
    action: 'plugin::content-manager.explorer.update',
    actionParameters: {},
    subject: 'plugin::myplugin.test',
    properties: {
      fields: ['type'],
      locales: ['en-GB', 'de'],
    },
    conditions: [],
  },
];

const app = {
  contentManager: {
    main: [],
    collectionTypesConfigurations: [
      {
        action: 'plugin::content-manager.collection-types.configure-view',
        subject: null,
      },
    ],
    componentsConfigurations: [
      {
        action: 'plugin::content-manager.components.configure-layout',
        subject: null,
      },
    ],
    singleTypesConfigurations: [
      {
        action: 'plugin::content-manager.single-types.configure-view',
        subject: null,
      },
    ],
  },
  marketplace: {
    main: [{ action: 'admin::marketplace.read', subject: null }],
    read: [{ action: 'admin::marketplace.read', subject: null }],
  },
  settings: {
    roles: {
      main: [
        { action: 'admin::roles.create', subject: null },
        { action: 'admin::roles.update', subject: null },
        { action: 'admin::roles.read', subject: null },
        { action: 'admin::roles.delete', subject: null },
      ],
      create: [{ action: 'admin::roles.create', subject: null }],
      delete: [{ action: 'admin::roles.delete', subject: null }],
      read: [{ action: 'admin::roles.read', subject: null }],
      update: [{ action: 'admin::roles.update', subject: null }],
    },
    users: {
      main: [
        { action: 'admin::users.create', subject: null },
        { action: 'admin::users.read', subject: null },
        { action: 'admin::users.update', subject: null },
        { action: 'admin::users.delete', subject: null },
      ],
      create: [{ action: 'admin::users.create', subject: null }],
      delete: [{ action: 'admin::users.delete', subject: null }],
      read: [{ action: 'admin::users.read', subject: null }],
      update: [{ action: 'admin::users.update', subject: null }],
    },
    webhooks: {
      main: [
        { action: 'admin::webhooks.create', subject: null },
        { action: 'admin::webhooks.read', subject: null },
        { action: 'admin::webhooks.update', subject: null },
        { action: 'admin::webhooks.delete', subject: null },
      ],
      create: [{ action: 'admin::webhooks.create', subject: null }],
      delete: [{ action: 'admin::webhooks.delete', subject: null }],
      read: [
        { action: 'admin::webhooks.read', subject: null },
        // NOTE: We need to check with the API
        { action: 'admin::webhooks.update', subject: null },
        { action: 'admin::webhooks.delete', subject: null },
      ],
      update: [{ action: 'admin::webhooks.update', subject: null }],
    },
    'api-tokens': {
      main: [{ action: 'admin::api-tokens.access', subject: null }],
      create: [{ action: 'admin::api-tokens.create', subject: null }],
      delete: [{ action: 'admin::api-tokens.delete', subject: null }],
      read: [{ action: 'admin::api-tokens.read', subject: null }],
      update: [{ action: 'admin::api-tokens.update', subject: null }],
      regenerate: [{ action: 'admin::api-tokens.regenerate', subject: null }],
    },
    'transfer-tokens': {
      main: [{ action: 'admin::transfer.tokens.access', subject: null }],
      create: [{ action: 'admin::transfer.tokens.create', subject: null }],
      delete: [{ action: 'admin::transfer.tokens.delete', subject: null }],
      read: [{ action: 'admin::transfer.tokens.read', subject: null }],
      update: [{ action: 'admin::transfer.tokens.update', subject: null }],
      regenerate: [{ action: 'admin::transfer.tokens.regenerate', subject: null }],
    },
    'project-settings': {
      read: [{ action: 'admin::project-settings.read', subject: null }],
      update: [{ action: 'admin::project-settings.update', subject: null }],
    },
  },
};

type Admin = typeof admin;
type App = typeof app;

export { admin, Admin, app, App };

module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com', '*.googleapis.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com', '*.googleapis.com'],
          'connect-src': ["'self'", 'https:', 'storage.googleapis.com', '*.googleapis.com']
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
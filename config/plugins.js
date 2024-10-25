// module.exports = ({ env }) => ({

//     upload: {
//       provider: 'google-cloud-storage',
//       providerOptions: {
//         bucketName: env('GCS_BUCKET_NAME'),
//         publicFiles: true,
//         uniform: false,
//         basePath: '',
//         serviceAccount: env('GOOGLE_APPLICATION_CREDENTIALS'),
//       },
//     },
//   });

module.exports = ({ env }) => {

      return {
        upload: {
          config: {
            provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
            providerOptions: {
              bucketName:env('GCS_BUCKET_NAME'),
              publicFiles: true,
              uniform: false,
              basePath: '',
            },
          },
        }
      }
    }

  
// module.exports = () => ({

const { checkServiceAccount } = require("strapi-provider-upload-google-cloud-storage/lib/provider")

    
//   });

module.exports = ({ env }) => {

      return {
        upload: {
          config: {
            provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
            providerOptions: {
              bucketName:env('GCS_BUCKET_NAME'),
              publicFiles: false,
              uniform: true,
              basePath: '',
            },
          },
        }
      }
    }

  
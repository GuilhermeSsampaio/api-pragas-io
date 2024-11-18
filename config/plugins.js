module.exports = ({ env }) => ({
  dashboard: {
    enabled: true,
    resolve: "./src/plugins/dashboard",
  },
  //  sentry: {
  //    enabled: true,
  //    config: {
  //      dsn: env('SENTRY_DSN'),
  //      sendMetadata: true,
  //    }
  //  },
  // upload: {//provedor de imagens - minio
  //   config: {
  //     provider: 'strapi-provider-upload-minio-ce',
  //     providerOptions: {
  //       accessKey: env('MINIO_ACCESS_KEY'),
  //       secretKey: env('MINIO_SECRET_KEY'),
  //       bucket: env('MINIO_BUCKET'),
  //       endPoint: env('MINIO_CLUSTER_ENDPOINT'),
  //       endpointSSL: env('MINIO_ENABLE_SSL', 'false'),
  //       //port: env('MINIO_PORT0'),
  //       port: env('MINIO_ENDPOINT_PORT'),
  //       useSSL: env('MINIO_ENABLE_SSL', 'false'),
  //       hostSSL: env('MINIO_ENABLE_SSL', 'false'),
  //       folder: env('MINIO_FOLDER'),
  //       private: env('MINIO_PRIVATE'), // private bucket
  //       expiry: env('MINIO_EXPIRY'), // default 7 days, unit: seconds, only work for private bucket
  //     },
  //   },
  // },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  email: {
    //provedor de email - sendgrid
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "guilherme.sampaio@estudante.ifms.edu.br",
        defaultReplyTo: "guilherme.sampaio@estudante.ifms.edu.br",
      },
    },
  },
});

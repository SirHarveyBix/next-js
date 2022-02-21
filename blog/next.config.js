const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
require('dotenv').config();

module.exports = (phase) => {
  //base path
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: process.env.USERNAME,
        mongodb_password: process.env.PASSWORD,
        mongodb_clustername: process.env.CLUSTER,
        mongodb_database: process.env.DB_DEV,
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: process.env.USERNAME,
      mongodb_password: process.env.PASSWORD,
      mongodb_clustername: process.env.CLUSTER,
      mongodb_database: process.env.DB_PROD,
    },
  };
};
// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,
//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           fs: false,
//           path: false,
//           os: false,
//         },
//       };
//       return config;
//     },
//   };
// };

// //https://stackoverflow.com/a/70267261/16937616

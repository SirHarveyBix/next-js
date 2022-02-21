const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  //base path
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'username',
        mongodb_password: 'password',
        mongodb_clustername: 'clustername',
        mongodb_database: 'db-dev',
      },
    };
  }
  return {
    reactStrictMode: true,
    //base path
    env: {
      mongodb_username: 'username',
      mongodb_password: 'password',
      mongodb_clustername: 'clustername',
      mongodb_database: 'db-prod',
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

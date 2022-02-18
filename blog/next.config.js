module.exports = {
  reactStrictMode: true,
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

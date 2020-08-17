module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src',
        },
      ],
    ],
  };
};

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         // root: ['./src'],
//         "alias": {
//           "~/*": "./src",
//           ".../*": "./",
//         },
//         "cwd": "babelrc"
//       },
//     ],
//   ],
// }

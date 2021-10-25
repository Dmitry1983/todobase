// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };
// https://dev.to/suprabhasupi/alias-in-react-native-1oej
// yarn start --reset-cache
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@state': './src/state',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};

const path = require('path');
const pak = require('../../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          // For development, we want to alias the library to the source
          [pak.name]: path.join(__dirname, '../..', pak.source),
        },
      },
    ],
  ],
};

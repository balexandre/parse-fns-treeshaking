const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  mode: 'development',
  stats: 'verbose',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      library: 'MyDateFns',
      libraryTarget: 'var',
  }
}

module.exports = config;

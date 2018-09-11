const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
    globalObject: 'window'
  },
  plugins: [new HtmlWebpackPlugin()]
};
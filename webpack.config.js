const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/javascripts/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "./javascripts/index.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/index.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html'
    }),
  ],
}

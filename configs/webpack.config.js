const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DIST_PATH = resolve(__dirname, '..',  'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: './public',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'svg']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:resolve(__dirname, '..', 'public', 'index.html'),
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        caseSensitive: true,
        collapseWhitespace: true,
      },
    })
  ]
};
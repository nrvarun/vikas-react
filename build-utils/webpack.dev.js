const commonPaths = require('./common-paths');
const webpack = require('webpack');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const port = process.env.PORT || 3000;
const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              // camelCase: true,
              sourceMap: true,
              importLoaders: 1,
              // localIdentName : '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ],
  devServer: {
    publicPath: '/',
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
    quiet: true,
    contentbase: './'
  }
};
module.exports = config;

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    // path: __dirname + '/public/js',
    path: 'dist',
    // publicPath: '/js/',
    filename: '[name].js'
  },

  // 定位到行与列
  // devtool: 'source-map',
  // 定位到行,但是编译会快
  devtool: 'eval-source-map',

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      { test: /\.json$/, loader: 'json'},
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css?minimize&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss!less')
      },
      { test: /\.jade$/, loader: 'jade-loader' },
      { test: /\.(eot|woff|ttf|svg|woff2)$/, loader: 'url-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=8192',
        query: {mimetype: 'image/png'}
      },
    ]
  },
  postcss: [autoprefixer({browsers: ['last 2 versions']})],

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './jade/index.jade',
      removeComments: true,
      collapseWhitespace: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    // 去除重复模块
    new webpack.optimize.DedupePlugin(),
    // 将模块按序号顺序排列
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('main.css'),
  ],
};

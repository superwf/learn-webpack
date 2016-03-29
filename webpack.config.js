var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: {
    app: './index.js',
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
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint',
    }],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      { test: /\.json$/, loader: 'json'},
      { test: /\.less$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss!less'},
      { test: /\.jade$/, loader: 'jade-loader' },
      { test: /\.(eot|woff|ttf|svg|woff2)$/, loader: 'url-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=8192',
        query: {mimetype: 'image/png'}
      },
    ]
  },
  // postcss: [autoprefixer({browsers: ['last 2 versions']})],
  proxy: {
    '/smartBus-Manager-v1/*': {
      target: 'http://10.12.28.64:8085',
      secure: false
    }
  },
  devServer: {
    // contentBase: './public/',
    inline: true,
    colors: true,
    // 将所有不存在文件的请求都重新定位到/index.html
    // 单页应用配置路由功能必备
    historyApiFallback: true,
  },

  plugins: [
    new NpmInstallPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './jade/index.jade'
    }),
    new webpack.SourceMapDevToolPlugin({
      exclude: /node_modules/,
    }),
    new webpack.WatchIgnorePlugin([/node_modules/])
  ],
};

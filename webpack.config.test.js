var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    testing: './test',
  },
  output: {
    // path: 'out',
    filename: '[name].js'
  },

  // 定位到行与列
  // devtool: 'source-map',
  // 定位到行,但是编译会快
  // devtool: 'cheap-module-source-map',
  devtool: 'eval-source-map',

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint',
    }],
    loaders: [
      {
        test: /Test\.js$/,
        exclude: /node_modules/,
        loader: 'mocha!babel',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      { test: /\.json$/, loader: 'json'},
      { test: /\.less$/, loader: 'null'},
      { test: /\.jade$/, loader: 'jade-loader' },
      { test: /\.(eot|woff|ttf|svg|woff2)$/, loader: 'null' },
      { test: /\.png$/, loader: 'null'},
    ]
  },
  devServer: {
    inline: true,
    colors: true,
    // 将所有不存在文件的请求都重新定位到/index.html
    // 单页应用配置路由功能必备
    historyApiFallback: true,
  },

  plugins: [
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

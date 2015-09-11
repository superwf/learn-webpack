var path = require('path'),
    webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
  new webpack.ResolverPlugin(
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main', 'less'])
  ),

  new ExtractTextPlugin('./public/css/[name].css'),

  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    React: 'react'
  })

];

var env = process.env.NODE_ENV;

// when useing karma test, CommonsChunkPlugin will cause "ReferenceError: Can't find variable: webpackJsonp"
// don`t use CommonsChunkPlugin when test
// it`s mentioned below
// https://github.com/webpack/karma-webpack/issues/24
if(env !== 'test') {
  plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', './public/js/vendor.js'));
}

if(env === 'dist') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}


module.exports = {
  entry: {
    app: './src/js/app.js',
    main: './src/js/main.js',
    style: './src/js/style.js',
    vendor: ['jquery', 'react']
  },
  output: {
    path: __dirname,
    filename: './public/js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|bower_components/,
        loader: 'eslint',
      },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css!less' )},
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.jade$/, loader: 'jade-loader' },
      { test: /\.(eot|woff|ttf|svg|woff2)$/, loader: 'url-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=8192',
        query: {mimetype: 'image/png'}
      },
    ]
  },
  //resolve: {
  //  root: [path.join(__dirname, 'public/js/bower_components')]
  //},
  plugins: plugins,
  //externals: {
  //  jquery: 'jQuery'
  //}
};

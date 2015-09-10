var path = require('path'),
    webpack = require('webpack');
module.exports = {
  entry: {
    index: './src/coffee/index.coffee',
    test: './test/indexSpec.coffee'
  },
  output: {
    path: __dirname,
    filename: './public/js/[name].js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.jade$/, loader: 'jade-loader' },
      { test: /\.(eot|woff|ttf|svg|woff2)$/, loader: 'url-loader' },
      { test: /\.png$/, loader: 'url-loader',
        query: {mimetype: 'image/png'}
      },
    ]
  },
  //resolve: {
  //  root: [path.join(__dirname, 'public/js/bower_components')]
  //},
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main', 'less'])
    )
  ]
};

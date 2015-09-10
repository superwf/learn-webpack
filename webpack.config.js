var path = require('path'),
    webpack = require('webpack');
module.exports = {
  entry: {
    app1: './src/js/index.js',
    app2: './src/js/main.js'
  },
  output: {
    path: __dirname,
    filename: './public/js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
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
    ),
    //new webpack.optimize.CommonsChunkPlugin('./public/js/vendor.js')

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: './public/js/vendor.js'
    })

    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //})
  ]
};

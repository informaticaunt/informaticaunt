var path = require('path');
const webpack = require('webpack');

module.exports = {
     entry: './src/js/app.js',
     devtool: '#cheap-module-source-map',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js'
     },


module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
  ,

plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]


 };
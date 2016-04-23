var path = require('path')
var webpack = require('webpack')

console.log("webpack logic")
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1']
        }
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      }
    ]
  }
}

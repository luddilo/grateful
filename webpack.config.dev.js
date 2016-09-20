var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/browser/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, ''),
        path.join(__dirname, 'src/store.js'),
        path.join(__dirname, 'src/actions'),
        path.join(__dirname, 'src/browser'),
        path.join(__dirname, 'src/reducers'),
        path.join(__dirname, 'config/')
      ]
    },
    // CSS
    {
      test: /\.css$/,
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader'
    }
    ]
  }
};

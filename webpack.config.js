const path = require('path');
 
module.exports = {
  entry: path.join(__dirname, '/index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // ここを追記
  devServer: {
    contentBase: 'public',
    port: 4000,
    inline: true,
    host: '0.0.0.0'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'production') {
  module.exports = {
    // If production, add Babel polyfies
    entry: ['./client/main.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      // Define globals in app
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          comparisons: false
        },
        mangle: {
          safari10: true
        },
        output: {
          comments: false,
          ascii_only: true
        },
        sourceMap: true,
      }),
    ]
  };
} else if (NODE_ENV === 'development') {

} else {
  throw new Error('NODE_ENV not provided')
}

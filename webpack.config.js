const validate = require('webpack-validator');
const {resolve} = require('path');

module.exports = env => {
  return validate({
    entry: ['babel-polyfill', './client/main.js'],
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    devServer: {
      host: '0.0.0.0',
      contentBase: 'dist',
      noInfo: true,
    },
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }]
    }
  });
}

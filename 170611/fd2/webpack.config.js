const path = require('path');

module.exports = {
  entry: path.resolve('src/main.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader:'eslint-loader',
      exclude : '/node_modules/',
      enforce:'pre'
    }, {
        test: /\.css$/,
        exclude : '/node_modules/',
        loader:'css-loader'
    }, {
      test: /\.js$/,
      exclude : '/node_modules/',
      loader: 'babel-loader'
    },{
        test: /\.hbs$/,
        loader:'handlebars-loader'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
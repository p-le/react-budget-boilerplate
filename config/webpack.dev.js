const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.noDeprecation = true;

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './index.js'
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [ /node_modules/ ],
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1}
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                require('autoprefixer');
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 10000,
    host: '0.0.0.0',
    compress: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
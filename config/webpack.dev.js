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
    filename: '[name].[chunkhash].js'
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
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 }
        }]
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }]
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }]
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }]
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }]
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
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
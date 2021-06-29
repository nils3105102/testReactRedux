const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');


const mode = process.env.ENV || 'development';

module.exports = {
  mode,
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js'
  },
  devServer: {
    port: 8000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      favicon: false,
      showErrors: true,
      cache: true,
      template: path.resolve(__dirname, './src/index.html')
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  optimization: {
      minimizer: [
          new CssMinimizerPlugin()
      ]
  }
}
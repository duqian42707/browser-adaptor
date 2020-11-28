const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const packageInfo = require('./package.json');

module.exports = {
  entry: './src/browser-adaptor.ts',
  output: {
    filename: 'browser-adaptor.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'source-map',
  //插件
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin(`browser-adaptor v${packageInfo.version} | (c) 2020 by duqian`),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          esModule: true,
        },
      },
      {test: /\.ts$/, use: "ts-loader"},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.svg$/, use: 'svg-url-loader'},
    ]
  },
  resolve: {
    extensions: ['.html', '.js', '.ts', '.less', '.css', '.svg']
  }
};

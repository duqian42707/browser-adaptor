const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/browser-adaptor.ts',
  output: {
    filename: 'browser-adaptor.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  //插件
  plugins: [
    new CleanWebpackPlugin(),
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

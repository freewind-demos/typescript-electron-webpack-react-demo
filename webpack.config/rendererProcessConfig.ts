import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const rendererProcessConfig: Configuration = {
  mode: 'development',
  target: 'electron-renderer',
  entry: path.resolve(__dirname, '../src/renderer/index.ts'),
  output: {
    path: path.resolve(__dirname, '../dist/renderer'),
    filename: 'index.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
      ],
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/renderer/index.html'),
    }),
  ],
};

export default rendererProcessConfig;

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css']
  },
  entry: ['@babel/polyfill', './server/index.js'],

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['isomorphic-style-loader', { loader: 'css-loader' }]
      },
      {
        test: /\.(js|(j|t)sx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            '@babel/preset-typescript',
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  }
};

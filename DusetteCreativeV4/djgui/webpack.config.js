const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src / js'),
  PUBLIC: path.resolve(__dirname, 'public'),
}

const config = {
  entry: path.resolve(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['/node_modules/', '.js', '.jsx', '.scss', '.css']
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? 'style.bundle.css' : 'style.[hash].bundle.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js($|\?)|\.jsx($|\?)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.((s[ac]|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
            }
          }
        ]
      }
    ]
  }
}

module.exports = config;
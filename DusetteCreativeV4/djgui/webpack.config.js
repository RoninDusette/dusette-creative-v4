const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AutoPrefixer = require('autoprefixer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker')

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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
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
                AutoPrefixer({
                  browsers: [
                    'last 3 versions'
                  ]
                })
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
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot|ttc)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|bmp|ico|svg)$/,
        loader: 'url-loader'
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.bundle.css',
    }),
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
}

module.exports = config;
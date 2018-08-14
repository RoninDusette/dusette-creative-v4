const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AutoPrefixer = require('autoprefixer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker')
const CopyWebpackPlugin =require('copy-webpack-plugin')

const paths = {
  DIST: path.resolve(__dirname, 'dist/DCv4'),
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
  PUBLIC: path.resolve(__dirname, 'public'),
}

const config = {
  entry: path.resolve(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
    publicPath: '/static/DCv4/'
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
          loader: 'babel-loader',
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
        use: [
          {
            loader: 'url-loader'
          },
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|bmp|ico|svg)$/,
        use: [
          {
            loader: 'url-loader'
          },
          {
            loader: 'file-loader'
          }
        ]
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.bundle.css',
    }),
    new webpack.ProvidePlugin({
      underscore: "underscore"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleTracker({filename: './webpack-stats.json'}),
    new CopyWebpackPlugin([{
      from: path.resolve(paths.SRC, 'assets/img'), to: path.resolve(paths.DIST, 'img')
    }]),
  ],
}

module.exports = config;
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const isDev = process.env.NODE_ENV === 'development'
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
// console.log(isDev)
const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{
    extensions:['*','.vue','.js','.jsx'],
    alias:{
      'vue$':'vue/dist/vue.common.js',
      '@':path.resolve(__dirname, 'src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          //提取vue文件中的样式
          extractCSS: !isDev
        }
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              name:'[name]-[hash:base64:8].[ext]'
            }
          }
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filenmae: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev? JSON.stringify('development') : JSON.stringify('production')
      }
    }),
  ]
}

if (isDev) {
  //开发者模式
  config.devtool = "cheap-module-eval-source-map"
  config.devServer = {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    inline: true
    //open:true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]

    }
  )
}
else {
  //生产模式
  config.entry = {
    app: path.resolve(__dirname,'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name]-[chunkhash:8].js'
  config.plugins.push(
    
    new ExtractTextWebpackPlugin('style-[contentHash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )

  config.module.rules.push(
    {
      test: /\.scss$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      })

    }
  )

}

module.exports = config
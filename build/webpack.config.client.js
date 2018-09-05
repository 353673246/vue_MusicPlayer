const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
// console.log(isDev)
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

let config;
const defaultOptions = {
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filenmae: "index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: isDev
          ? JSON.stringify("development")
          : JSON.stringify("production")
      }
    })
  ]
};

if (isDev) {
  //开发者模式

  config = merge(baseConfig, defaultOptions, {
    devtool: "cheap-module-eval-source-map",
    devServer: {
      contentBase: "../dist",
      port: 8080,
      host: "0.0.0.0",
      hot: true,
      inline: true,
      //open:true
      historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                // modules: true,
                // // camelCase: true
                // localIdentName: "[path]-[name]-[hash:base64:5]",
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  });
} else {
  //生产模式
  config = merge(baseConfig, defaultOptions, {
    entry: {
      app: path.resolve(__dirname, "../src/index.js"),
      vendor: ["vue"]
    },
    output: {
      filename: "[name]-[chunkhash:8].js"
    },
    plugins: [
      new ExtractTextWebpackPlugin("style-[contentHash:8].css"),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor"
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "runtime"
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    }
  });
}

module.exports = config;

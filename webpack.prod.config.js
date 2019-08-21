const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    app: [`${__dirname}/src/index.jsx`, `${__dirname}/src/css/styles.css`],
    vendor: ["babel-polyfill", "React"]
  },
  output: {
    path: path.resolve("./dist/js/"),
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "[id].[chunkhash:8].js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              "transform-object-rest-spread",
              "transform-class-properties",
              "syntax-dynamic-import"
            ]
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "env"],
            plugins: [
              "transform-object-rest-spread",
              "transform-class-properties",
              "syntax-dynamic-import"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                url: false
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                url: false
              }
            },
            "sass-loader"
          ]
        })
      }
      // {
      //  test: /\.scss$/,
      //  use: [
      //    "style-loader",
      //    {
      //      loader: "css-loader",
      //      options: {
      //        url: false
      //      }
      //    },
      //    "sass-loader"
      //  ]
      // },
      // {
      //  test: /\.css$/,
      //  use: [
      //    "style-loader",
      //    {
      //      loader: "css-loader",
      //      options: {
      //        url: false
      //      }
      //    }
      //  ]
      // }
    ]
  },
  devtool: "source-map",
  resolve: { extensions: [".js", ".jsx"] },

  plugins: [
    new ExtractTextPlugin({
      filename: "../css/styles.css"
    }),
    new webpack.optimize.CommonsChunkPlugin({ names: ["vendor", "manifest"] }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head",
      filename: "../index.html"
    })
  ]
};

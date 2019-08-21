module.exports = {
  entry: [`${__dirname}/src/index.jsx`, `${__dirname}/src/css/styles.css`],
  output: {
    path: `${__dirname}/dist/js`,
    filename: "bundle.js",
    publicPath: "/js",
    chunkFilename: "[name].chunk.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
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
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
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
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  watch: true,

  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },

  devtool: "source-map",

  resolve: { extensions: [".js", ".jsx"] }
};
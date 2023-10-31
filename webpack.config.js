const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: {
    index: path.resolve("./src/index.tsx")
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node-modules/
      }, {
        use: ['style-loader', 'css-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [tailwindcss, autoprefixer]
            },
          },
        }],
        test: /\.css$/i,
      }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: path.resolve('src/manifest.json'), to: path.resolve('dist')},
      ],
    }),
    new HtmlPlugin({
      title: "Webpack App",
      filename: "index.html",
      chunks: ['index']
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: "[name].js"
  }
}

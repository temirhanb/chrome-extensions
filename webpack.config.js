const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: {
    index: path.resolve("./src/app/index.tsx"),
    background: path.resolve("./src/background/background.ts"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node-modules/
      },
      {
        type: "static/",
        test: /\.(png|svg|jpeg|jpg|woff|woff2|tff)$/,
      },
      {
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
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist')},
      ],
    }),
    ...getHtmlChunks([
      'index'
    ]),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: "[name].js"
  },
}

function getHtmlChunks(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: "Webpack App",
    filename: `${chunk}.html`,
    chunks: [chunk]
  }))
}

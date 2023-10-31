module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [{
      use: "ts-loader",
      test: /\.tsx$/,
      exclude: /node-modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: "index.js"
  }
}

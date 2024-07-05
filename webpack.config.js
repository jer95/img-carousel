const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img-carousel.html", to: "index.html" },
        { from: "src/styles.css", to: "styles.css" },
        { from: "src/imgs", to: "imgs" },
      ],
    }),
  ],
};

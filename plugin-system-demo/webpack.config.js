const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     inject: false, // Removes extra script in head
  //     template: "./index.html",
  //   }),
  // ],
};

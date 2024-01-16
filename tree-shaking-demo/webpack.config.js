const path = require("path");

module.exports = {
  mode: "production", // Set mode to 'production' for Tree Shaking to work
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

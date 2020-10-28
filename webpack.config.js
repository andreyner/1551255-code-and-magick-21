const path = require("path");

module.exports = {
  entry:
    [
      "./js/util.js",
      "./js/debounce.js",
      "./js/wizard.js",
      "./js/render.js",
      "./js/backend.js",
      "./js/stat.js",
      "./js/dialog.js",
      "./js/move.js",
      "./js/setup.js",
      "./js/game.js"
    ],
  output: {
    filename: "bandle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};

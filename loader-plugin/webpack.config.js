const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  // 处理loader路径
  resolveLoader: {
    modules: ["node_modules", "./myLoaders"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "firstLoader",
            // loader: path.resolve(__dirname, "./myLoader2/index.js"),
          },
          {
            loader: "asyncLoader",
            options: {
              name: "myloader",
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["styleLoader", "lessLoader"],
      },
    ],
  },
};

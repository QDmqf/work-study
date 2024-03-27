const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },

  devtool: "source-map",
  devServer: {
    hot: true,
    hotOnly: true,
    static: [
      {
        directory: path.join(__dirname, "./dist"),
      },
    ],
    proxy: [
      {
        "/api": {
          target: "http://localhost:9000",
          changeOrigin: true,
        },
      },
    ],
    open: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./src"),
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, "./src"),
        use: [
          "style-loader",
          // MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg)$/,
        include: path.resolve(__dirname, "./src"),
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              limit: 4 * 1024,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { corejs: 2, useBuiltIns: "usage" }],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "webpack首页",
    }),
    // new MiniCssExtractPlugin({
    //   filename: "css/[name].css",
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

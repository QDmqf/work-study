// 执行webpack构建入口
const options = require("./webpack.config.js");
const webpack = require("./lib/webpack.js");

new webpack(options).run();

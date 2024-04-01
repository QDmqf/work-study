const { defineConfig } = require("@vue/cli-service");
const { setGitVersionToMeta } = require("./git-info-plugin/index.js");
const GitMatePlugin = require("./my-plugin/index.js");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    // new GitMatePlugin(config);
    setGitVersionToMeta(config);
  },
  configureWebpack: {
    plugins: [new GitMatePlugin()],
    devtool: "source-map", // 启用source map以便于调试
    stats: "verbose",
  },
});

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.bpmn$/,
          type: "asset/source",
        },
      ],
    },
  },
});

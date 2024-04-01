class GitMatePlugin {
  constructor(params) {
    console.log("这是我的plugin1");
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "MyExampleWebpackPlugin",
      (compilation, callback) => {
        console.log("这是一个示例插件！");
        console.log(
          "这里表示了资源的单次构建的 `compilation` 对象：",
          compilation
        );

        callback();
      }
    );
  }
}
module.exports = GitMatePlugin;

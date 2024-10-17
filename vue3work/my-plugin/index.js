class GitMatePlugin {
  constructor(params) {
    this.config = params;
    debugger;
    console.log(this.config);
  }
  apply(compiler) {
    // 异步串行
    compiler.hooks.emit.tapAsync("GitMatePlugin", (compilation, callback) => {
      // console.log(this.config.plugin["html"]);
      debugger;
      // 获取资源文件，过滤js，html，css文件
      // 遍历文件，添加内容
      const extensions = ["html"];
      const assets = Object.keys(compilation.assets).filter((item) => {
        const arr = item.split(".");
        const fileType = arr[arr.length - 1];
        return extensions.includes(fileType);
      });
      // assets.forEach(item=>{
      //   const source = compilation.assets[item]
      // })
      console.log(assets, "assets");
      // debugger;

      callback();
    });
  }
}
module.exports = GitMatePlugin;

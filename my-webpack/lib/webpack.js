const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAstSync } = require("@babel/core");

module.exports = class webpack {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }
  run() {
    // 处理入口模块
    const info = this.parse(this.entry);
    this.modules.push(info);
    // 递归处理其他模块
    for (let index = 0; index < this.modules.length; index++) {
      const element = this.modules[index];
      const { dependencies } = element;
      if (dependencies) {
        for (const key in dependencies) {
          if (Object.hasOwnProperty.call(dependencies, key)) {
            const element = dependencies[key];
            this.modules.push(this.parse(element));
          }
        }
      }
    }

    const obj = {};
    this.modules.forEach((item) => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code,
      };
    });
    // 生成打包文件
    this.file(obj);
  }
  parse(entryFile) {
    const content = fs.readFileSync(entryFile, "utf-8");
    const ast = parser.parse(content, {
      sourceType: "module",
    });
    const dependencies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        const newPathName =
          "./" + path.join(path.dirname(entryFile), node.source.value);
        dependencies[node.source.value] = newPathName;
      },
    });

    const { code } = transformFromAstSync(ast, null, {
      presets: ["@babel/preset-env"],
    });

    return { entryFile, dependencies, code };
  }
  file(obj) {
    // 创建自运行函数，处理require，module，exports
    // 生成 打包后的文件
    const filePath = path.join(this.output.path, this.output.filename);
    const code = JSON.stringify(obj);
    const bundle = `(function(graph){
      function require(module){
        function reRequire(relativePath){
          return graph[module].dependencies[relativePath]
        }
        var exports = {};
        (function(require,exports,code){
          eval(code)
        })(reRequire,exports,graph[module].code)
        return exports
      }
      require('${this.entry}')
    })(${code})`;
    fs.writeFileSync(filePath, bundle, "utf-8");
  }
};

const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

module.exports = class webpack {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
  }
  run() {
    this.parse(this.entry);
  }
  parse(entryFile) {
    const content = fs.readFileSync(entryFile, "utf-8");
    const ast = parser.parse(content, {
      sourceType: "module",
    });
    traverse(ast, {
      ImportDeclaration({ node }) {
        console.log(node.source.value, "node");
      },
    });
    // console.log(module.program.body);
  }
};

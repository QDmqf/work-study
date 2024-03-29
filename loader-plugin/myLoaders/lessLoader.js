const less = require("less");

module.exports = function (source) {
  less.render(source, (e, output) => {
    const callback = this.async();

    callback(e, output.css);
  });
};

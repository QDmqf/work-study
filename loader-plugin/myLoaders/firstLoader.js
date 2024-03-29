module.exports = function (source) {
  const callback = this.async();
  const result = source.replace("myloader", "测试");
  console.log(result);
  callback(null, result);
};

module.exports = function (source) {
  //loader处理模块
  //多个loader是有顺序的
  //一定要有返回值
  // console.log(this, this.query, result);
  // 处理异步
  const callback = this.async();
  const result = source.replace("hello", this.query.name);
  // setTimeout(() => {

  //   callback(null, result);
  // }, 1000);
  // 同步
  callback(null, result);
};

module.exports = function (source) {
  const style = `const ele = document.createElement('style')
    ele.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(ele)
  `;
  const callback = this.async();
  callback(null, style);
};

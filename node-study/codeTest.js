function once(fn) {
  let flag = false;
  let result = null;
  return (...arg) => {
    if (!flag) {
      result = fn(...arg);
      flag = true;
      return result;
    }
    return result;
  };
}

function test(a, b) {
  console.log(a + b);
}

// 防抖
function debounce(fn, wait) {
  let timer = null;
  return function () {
    let that = this;
    let arg = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(that, arg);
    }, wait);
  };
}

// 节流
function throttle(fun, wait) {
  let timer = null;
  return function () {
    let that = this;
    let arg = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fun.apply(that, arg);
      });
    }
  };
}

// bind
function myBind(context) {
  const that = this;
  const fn = function (...newArgs) {
    that.apply(context, newArgs);
  };

  return fn;
}

// deepclone 深拷贝
function deepClone(params) {
  const result = Array.isArray(params) ? [] : {};
  for (key in params) {
    if (params.hasOwnProperty(key)) {
      if (typeof key === "object") {
        result[key] = deepClone(params[key]);
      } else {
        result[key] = params[key];
      }
    }
  }

  return result;
}

// new
function myNew(constructor, ...arg) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  const result = constructor.apply(obj, ...arg);

  if (typeof result === "object") {
    return result;
  }
  return obj;
}

function parent() {
  this.name = "par";
}

parent.prototype.say = function () {
  console.log("1111");
};

function name(params) {
  this.age = 12;
}

name.prototype = myNew(parent);

const child = myNew(name);

console.log(child.name);

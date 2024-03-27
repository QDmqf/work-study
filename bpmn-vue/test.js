// const add = (a, b, c) => a + b + c;

// function currencying(fn, ...arg) {
//   console.log(fn);
//   const fnArgumentLength = fn.length;
//   let newArgs = [...arg];

//   const newFun = (...newArg) => {
//     newArgs = [...newArgs, ...newArg];
//     if (newArgs.length === fnArgumentLength) {
//       return fn(...newArgs);
//     } else {
//       return newFun;
//     }
//   };

//   return newFun;
// }

// const a1 = currencying(add, 1);
// const a2 = a1(2);
// const a3 = a2(3);
// console.log(a3);

function fun1() {
  console.log(a1, "=");
  var a1 = 1;
  console.log(a1, "-");
  function a1() {}
  console.log(a1);
}
fun1();

const arr = ["ale", "apple", "monkey", "plea"];
const s = "adpcplea";

function fun(source, list) {
  let left = 0;
  let right = 0;
  let str = "";

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    left = 0;
    right = 0;

    while (left < source.length && right < list.length) {
      if (source[left] === element[right]) {
        right++;
      }
      if (right === element.length) {
        if (
          str.length < element.length ||
          (str.length === element.length && str > element)
        ) {
          str = element;
        }
      }

      left++;
    }
  }
  return str;
}

console.log(fun(s, arr));

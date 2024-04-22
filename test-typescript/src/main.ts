import { a } from "./a";
console.log("tsss", a);

const arr: Array<string> = [];

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(34, 66), arr);

let obj: Partial<{ name: string; age: number }>;
// 测试
obj = {
  name: "xxx",
};

enum Gender {
  male = 0,
  female = 1,
}

let i: { name: string; gender: Gender; [xxx: string]: any };
i = {
  name: "xxx",
  gender: Gender.male,
  xxxx: 2222,
};

console.log(Gender.female, "---");

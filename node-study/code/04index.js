const buf1 = Buffer.from("12312");
const buf2 = Buffer.alloc(10);

const fs = require("fs");
const path = require("path");

// const resMp4 = fs.createReadStream("./luping.mov");

// resMp4.on("data", (chunk) => {
//   console.log(chunk.length);
// });

// resMp4.on("end", () => {
//   console.log("读取完成");
// });

fs.readFile(path.resolve(__dirname, "./cdn.json"), (err, res) => {
  jsonStr = JSON.parse(res.toString());

  // const jsonStr = JSON.stringify(res.toString()).replaceAll("\r\n");
  console.log(jsonStr.sdafsdfasdf);
});

// const ws = fs.createWriteStream("./观书有感.txt");
// ws.write("aaaaaa\r\n");
// ws.write("bbbbbb");
// ws.close();
// fs.appendFile("./座右铭.txt", "\r\n争取早日找到工作", (err) => {
//   if (err) {
//     console.log("写入失败");
//   } else {
//     console.log("写入成功");
//   }
// });

// fs.writeFile("./座右铭.txt", "这是我的node学习", (err) => {
//   if (err) {
//     console.log("写入失败");
//   } else {
//     console.log("写入成功");
//   }
// });

// fs.writeFileSync("./test.txt", "这是我的node学习1", (err) => {
//   if (err) {
//     console.log("写入失败");
//   } else {
//     console.log("写入成功");
//   }
// });

// console.log(JSON.stringify(buf1));

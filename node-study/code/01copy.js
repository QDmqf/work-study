const fs = require("fs");

// 同步读取
const data = fs.readFileSync("./luping.mov");

fs.writeFileSync("./lupingCopy.mp4", data);

// 流式读取
const dataRes = fs.createReadStream("./luping.mov");

const writeFn = fs.createWriteStream("./lupingCopy2.mp4");

dataRes.on("data", (chunk) => {
  writeFn.write(chunk);
});

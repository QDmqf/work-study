const fs = require("fs");

// fs.stat("./luping.mov", (err, data) => {
//   console.log(data);
// });

// fs.readdir("./", (err, data) => {
//   console.log(data);
// });

fs.writeFileSync("/index.html", "isLover");

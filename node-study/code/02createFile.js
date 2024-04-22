const fs = require("fs");

// fs.mkdir("./html", (err) => {
//   console.log(err);
// });

fs.mkdir("./htmls/html/", { recursive: true }, (err) => {
  console.log(err);
});

// fs.readdir("./", (err, data) => {
//   console.log(data);
// });

// fs.rmdir("./html", (err) => {
//   console.log(err);
// });

fs.rm("./htmls", { recursive: true }, (err) => {
  console.log(err);
});

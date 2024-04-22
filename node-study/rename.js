const fs = require("fs");

// fs.rename("./座右铭.txt", "./论语.txt", (err) => {
//   console.log(err);
// });

// fs.unlink("./观书有感.txt", (err) => {
//   console.log(err);
// });

// const files = fs.readdir("./code", (err, data) => {
//   console.log(data);
//   data.forEach((item) => {
//     const name = "test-" + item;
//     fs.renameSync(`./code/${item}`, `./code/${name}`);
//   });
// });

const files = fs.readdir("./code", (err, data) => {
  console.log(data);
  data.forEach((item, index) => {
    const [name, fileName] = item.split("-");
    let newName = "";
    if (index < 9) {
      newName = `0${index + 1}`;
    } else {
      newName = index + 1;
    }
    const newFileName = `${newName}${fileName}`;
    console.log(newFileName);
    fs.renameSync(`./code/${item}`, `./code/${newFileName}`);
  });
});

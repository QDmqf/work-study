import css from "./css/index.less";
import newImage from "./images/big.jpg";
import smallImage from "./images/small.jpg";
import axios from "axios";
import "@babel/polyfill";

// axios.get("/api/info").then((res) => {
//   console.log(res, "res");
// });
// let ele = `<div class=${css.ele}>这是css model</div>`;
const imgsele = new Image();
imgsele.src = newImage;
const smallImageEle = new Image();
smallImageEle.src = smallImage;

// document.write(ele);
const imgDom = document.querySelector("#images");
console.log(imgDom, "imgDOm");
imgDom.appendChild(imgsele);
imgDom.appendChild(smallImageEle);

const arr = [new Promise(() => {}), new Promise(() => {})];
arr.map((item) => {
  console.log(item);
});

// console.log("css", css);
console.log("img", newImage);
console.log("启动页");

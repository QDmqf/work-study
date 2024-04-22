const http = require("http");

const serve = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8");
  response.end("Hellow, HttpServe,你好");
});

serve.listen(9000, () => {
  console.log("服务已启动");
});

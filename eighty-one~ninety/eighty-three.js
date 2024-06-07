// 문제 83 : Node.js에서 HTTP 서버를 생성하는 코드를 작성해보세요.

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
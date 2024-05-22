// 문제 85 : Express.js를 사용해 HTTP 서버를 생성하는 코드를 작성하세요.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
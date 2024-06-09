// 문제 94 : Node.js에서 npm 패키지를 설치하고 사용하는 코드를 작성해보세요.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// npm install express
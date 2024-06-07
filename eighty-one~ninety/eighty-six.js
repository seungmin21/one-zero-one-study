// 문제 86 : Express.js에서 라우팅을 처리하는 코드를 작성해보세요.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/sub", (req, res) => {
  res.send("test page");
});

app.post("/post", (res, req) => {
  if (method === "POST" && url === "/post") {
    res.send("post success");
  } else {
    console.error("post failed")
  }
})
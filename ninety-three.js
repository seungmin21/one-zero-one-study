// 문제 93 : Express.js에서 정적 파일을 호스팅하는 방법을 설명하고 예를 들어보세요.

const express = require("express");
const app = express();

app.use(express.static("public"));
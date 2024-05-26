// 문제 89 : Node.js에서 비동기 함수를 사용하는 예를 작성해보세요.

const fs = require("fs");

fs.readFile("eighty-eight.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
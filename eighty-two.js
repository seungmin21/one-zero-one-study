// 문제 82 : Node.js에서 파일을 읽는 코드를 작성해보세요.

const fs = require("fs");

fs.readFile("app.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(data);
});
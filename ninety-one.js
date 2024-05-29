// 문제 91 : Node.js에서 fs 모듈을 사용하여 디렉토리를 생성하는 코드를 작성해보세요.

const fs = require("fs");

fs.writeFile('test.js', "make test file success.", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("test 디렉토리가 생성되었습니다.");
});
// 문제 92 : Node.js에서 path 모듈을 사용하여 파일 경로를 조작하는 코드를 작성해보세요.

const path = require("path");

// join : 경로 합치기
console.log(path.join(__dirname, "ninety.js"));

// resolve : 절대 경로
console.log(path.resolve(__dirname, "ninety-one.js"));

// relative : 첫번째 경로에서 두번째 경로로 가는 방법
console.log(path.relative(__dirname, "ninety-two.js"));
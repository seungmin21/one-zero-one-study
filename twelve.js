// 문제 12: "use strict"는 무엇이고, 어떻게 사용하는지 설명하세요.
// 에러에 대해서 더 정확히 파악하고 수정할 수 있다.
// 느슨 모드 해제
"use strict";

const value = "hello world"
console.log(value);

x = 3.14
console.log(x)

function strict() {
  "use strict";
  function nested() {
    
    return "And so am I!"
  }
  return "Hi I'm a strict mode function! " + nested();
}

function notStrict() {
  return "I'm not strict."
}
// 문제 9: const, let, var의 차이점을 설명하세요.

// const로 선언한 변수는 다시 사용할 수 없다.
const age = 19
let age = 10

// 중복 선언이 가능
var value = 12
var value = 13

// 값이 초기화되는 형태
let x = 2

if (x === 2) {
  let x = 1;
  console.log(x);
}

console.log(x);
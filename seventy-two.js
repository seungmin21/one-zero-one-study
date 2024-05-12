// 문제 72 : async / await와 promise의 차이점을 설명하세요.

// async / await는 promise를 기반으로 만들어진 문법이다.
// promise는 기본 조건을 기반으로 약속의 형태를 의미한다.

// 정답
// async / await는 비동기를 동기식으로 적용할 수 있게 하는 것
// promise는 비동기식으로 작업하고 처리할 수 있는 객체

function add() {
  return new Promise(function(resolve, reject) {
    resolve("성공")
    reject("실패")
  })
}
console.log(add())
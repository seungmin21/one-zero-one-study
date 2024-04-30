// 문제 63 : JSON 객체를 사용해 JSON 문자열을 객체로 변환하는 코드를 작성하세요.

const obj = {
  name : "홍길동",
  age : 18,
  sub : "pc"
}

console.log(JSON.parse(JSON.stringify(obj)));
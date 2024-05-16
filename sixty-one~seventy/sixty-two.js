// 문제 62 : JSON 객체를 사용해 객체를 JSON 문자열로 변환하는 코드를 작성하세요.

console.log(JSON.stringify({ x: 5, y: 6 }));

const obj = {
  name : "홍길동",
  age : 18,
  sub : "pc"
}

console.log(JSON.stringify(obj));
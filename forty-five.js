// 문제 45 : 함수 표현식과 함수 선언식의 차이점을 설명하세요.
// 함수 선언식은 함수를 자체를 선언해서 작성하는 방식
// 함수 표현식은 변수에 함수를 저장해서 사용하는 방식

// 함수 선언식
function add (x) {
  x = "hello world!"
  return x
}

// 함수 표현식
const plus = function(x, y) {
  return x + y
}


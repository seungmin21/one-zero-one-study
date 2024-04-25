// 문제 48 : 클로저에 대해 설명하고 예를 들어 보세요.
// 클로저란 외부 함수에서 선언된 변수에 접근할 수 있는 함수를 말합니다.

function add() {
  return function(x, y) {
    return x + y;
  }
}

function say(x) {
  let hello = "hello world";
  x = hello
  function func() {
    console.log(x);
  }

  return func
}

const sayHello = say();

sayHello();
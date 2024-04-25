// 문제 47 : 콜백함수를 사용하는 코드를 작성하세요.

// x + y를 콜백 함수로 지정해서 x + y를 호출하는 함수
function add (x, y, callback) {
  return callback(x + y)
}

add(5, 10, function plus(result) {
  console.log(result)
})

// 변수를 선언하고 그 변수에 매개변수를 할당한 것을 콜백 함수로 부르는 것
function say(name, callback) {
  const words = '안녕하세요 내 이름은 ' + name + ' 입니다.';
  return callback(words)
}

say('홍길동', function hello(name) {
  console.log(name)
})

// x와 y만 콜백함수로 지정해서 언제든지 두개의 매개변수를 사용할 수 있는 형태
function func(x, y, callback) {
  return callback(x, y)
}

const index = func(5, 10, function(x, y) {
  return x + y
})

console.log(index)
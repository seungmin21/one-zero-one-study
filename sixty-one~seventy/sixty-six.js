// 문제 66 : 동기와 비동기에 대해 비유를 들어 차이점을 설명하세요.

// 동기는 순차적으로 실행되는 것
// 동기는 파이프에 연결 시켜 배관으로 부터 연결되는 곳을 지나 배출되는 것

// 비동기는 동시에 실행되는 것
// 비동기로는 pc를 예로 들 수 있다 전원 버튼을 눌렀을 때 pc의 모든 부품이 한번에 작동한다.

// 동기 로직

function add(a, b) {
  return a + b;
}

const result = add(3, 5)
console.log(result)

// 비동기 로직

function asyncAdd(x, y, callback) {
  setTimeout(() => {
    const plus = x + y;
    callback(plus)
  }, 2000)
}

function handle(parameterOne, parameterTwo) {
  console.log(parameterOne, parameterTwo)
}

asyncAdd(5, 3, (parameterOne) => {
  asyncAdd(2, 8, (parameterTwo) => {
    handle(parameterOne, parameterTwo);
  })
})

setTimeout(() => {
  console.log("3초 경과")
}, 3000)
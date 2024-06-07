// 문제 73 : promise.all을 사용해 여러 promise를 동시에 실행하는 코드를 작성해보세요.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const promiseValue = Promise.resolve(5);
const value = new Promise((resolve, reject) => {
  resolve("hello")
})

Promise.all([promiseValue, value]).then((values) => {
  console.log(values)
})


// Promise.all([promise1, promise2, promise3]).then((values) => {
  // console.log(values);
// });
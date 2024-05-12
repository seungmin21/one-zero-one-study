// 문제 75 : proxy를 사용해 객체를 생성하는 코드를 작성해보세요.
// proxy는 객체의 대리인

const target = {
  say : "hello",
  hi : "world",
};

const handle = {};

const proxy = new Proxy(target, handle);

console.log(proxy);
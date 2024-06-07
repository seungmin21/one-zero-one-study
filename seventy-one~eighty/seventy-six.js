// 문제 76 : proxy를 사용해 객체의 속성에 대한 접근을 제어하는 코드를 작성해보세요.

const obj = {
  name : "홍길동",
  age : 18
}

// 객체를 프록시가 가로채서 실행할 동작을 정의
const handler = {
  // get으로 속성 제어를 위한
  get: function(target, prop) {
    console.log(`Getting property ${prop}`);
    return target[prop];
  },
  // set: function(target, prop, value) {
    // console.log(`Setting property ${prop} to ${value}`);
    // target[prop] = value;
    // return true;
  // }
};

const proxy = new Proxy(obj, handler);

// 대상, 속성
// function(target, prop)
console.log(proxy.name)
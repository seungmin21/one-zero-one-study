// 문제 84 : Node.js에서 이벤트를 발생시키고 그것을 처리하는 코드를 작성해보세요.

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// 'event'라는 이름의 이벤트 리스너를 등록합니다.
myEmitter.on('event', () => {
  console.log('이벤트가 발생했습니다!');
});

// 'event' 이벤트를 발생시킵니다.
myEmitter.emit('event');
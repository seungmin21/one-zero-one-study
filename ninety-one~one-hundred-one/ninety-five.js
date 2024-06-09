// 문제 95 : JavaScript에서 프로토타입 기반 상속을 구현하는 코드를 작성해보세요.

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};
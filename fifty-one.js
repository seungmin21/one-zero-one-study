// 문제 51 : 생성자를 가진 클래스를 선언하는 코드를 작성하세요.

class Add {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Add("salmon", 26);

console.log(person);
// 문제 52 : 메서드를 가진 클래스를 선언하는 코드를 작성하세요.

class add {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`나는 ${this.name}이고 나이는 ${this.age} 입니다.`)
  }
}

const person = new add("salmon", 24)
person.say()
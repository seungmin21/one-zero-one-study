// 문제 54 : 클래스의 인스턴스(instance)를 생성하는 코드를 작성하세요.

//  클래스 = 설계도
class Add {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 이게 인스턴스
const person = new Add("salmon", 26);
// 문제 36 : this 키워드에 대해 설명하고 사용 예를 만드세요.

const obj = {
  prop : 42,
  func : function () {
    return this.prop
  }
}

console.log(obj.func());
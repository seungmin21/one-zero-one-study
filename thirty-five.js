// 문제 35 : 객체의 모든 속성을 순회하며 출력하는 코드를 작성하세요.

const obj = { name : "대덕대로", age : 182, sub : "컴퓨터" }

// for in 방식
for (let key in obj) {
  console.log(key)
}

// forEach 방식
Object.keys(obj).forEach(function (key) {
  console.log(key)
})

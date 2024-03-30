// 문제 33 : 객체의 속성을 삭제하는 코드를 작성하세요.

const obj = { name : "대덕대로", age : 182, sub : "컴퓨터" }
delete obj.sub;
console.log(obj)

const { age, ...rest} = obj;
console.log(rest)
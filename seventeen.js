// 문제 17 : 자바스크립트에서 ==와 ===의 차이점을 설명하세요.
// == 동일이라는 말로 문장과 숫자를 구분하지 않음
// === 일치이라는 말로 문장과 숫자를 구분함

let str = "100"
let num = 100
const same = str == num
console.log(same)

const result = str === num
console.log(result)
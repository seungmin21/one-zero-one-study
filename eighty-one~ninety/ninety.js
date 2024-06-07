// 문제 90 : JavaScript에서 map, filter, reduce 함수를 사용하는 예를 들어보세요.

const list = ["list", "array", "object", "string", "number"]

console.log(list.map(item => item.length))
console.log(list.filter(item => item.length > 4))
console.log(list.reduce((acc, cur) => acc + cur.length, 0))
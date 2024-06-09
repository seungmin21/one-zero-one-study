// 문제 101 : JavaScript에서 배열을 얕은복사와 깊은복사에 대한 예를 들어보세요.

const arr = [1, 2, 3, 4, 5];
const arr2 = arr;
const arr3 = [...arr];
// 얕은 복사
const arr4 = arr.slice();
// 깊은 복사
const arr5 = arr.concat();
// 문제 29 : break문을 사용해 반복문을 중단하는 코드를 작성하세요.

let number = ["1", "2", "3", "4", "5"]

for (let i = 0; number.length; i++) {
  if (number[i] === undefined) {
    break;
  }
}
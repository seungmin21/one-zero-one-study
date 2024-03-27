// 문제 28 : continue 문을 사용해 짝수만 출력하는 코드를 작성하세요.

for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// 문제 69 : promise가 해결(fulfilled)되거나 거부된(rejected) 경우를 제작하세요.
function checkPositiveNumber(number) {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve("양수입니다.");
    } else {
      reject(new Error("음수 또는 0입니다."));
    }
  });
}

// fulfilled 되는 경우의 로직
checkPositiveNumber(10)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("에러 발생:", error.message);
  });

  // rejected 되는 경우의 로직
checkPositiveNumber(-5)
.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.error("에러 발생:", error.message);
});


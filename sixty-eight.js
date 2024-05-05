// 문제 68 : promise를 선언하고 사용하는 코드를 작성해보세요.

function simple() {
  return new Promise((resolve, reject) => {
    let randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve("성공" + randomNum);
    } else {
      reject("실패" + randomNum);
    }
  });
}

simple()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
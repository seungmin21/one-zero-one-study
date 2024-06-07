// 문제 79 : DOM 요소에 이벤트 리스너를 추가하는 코드를 작성하세요.

const root = document.getElementById("root");

root.addEventListener("click", () => {
  console.log("Hello, world!");
});
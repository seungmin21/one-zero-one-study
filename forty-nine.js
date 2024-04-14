// 문제 49 : 함수 매개변수 기본값을 설정하는 코드를 작성하세요.

// x와 y가 둘 다 10을 대입한 것이 아니라 y에만 10을 대입한 것
function add(x, y = 10) {
  return x + y;
}

console.log(add(1));

// y의 기본값이 할당되어있지만 다시 할당하기 때문에 기본값은 덮어쓰기 된다.
console.log(add(1, 1));
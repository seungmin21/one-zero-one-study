// 문제 26 : switch문을 사용해 변수가 어떤 값인지 분기하는 코드를 작성 하세요.

// 테스트를 위해 변수를 설정합니다.
var testVariable = 3;

// switch문을 사용하여 변수에 대한 분기를 수행합니다.
switch(testVariable) {
    case 1:
        console.log("첫 번째 값입니다.");
        break;
    case 2:
        console.log("두 번째 값입니다.");
        break;
    case 3:
        console.log("세 번째 값입니다.");
        break;
    case 4:
        console.log("네 번째 값입니다.");
        break;
    default:
        console.log("잘못된 값입니다.");
}

let x = 1;

switch(x) {
  case 1:
    console.log("첫번째 값입니다.");
    break;
    default:
      console.log("잘못된 값입니다.");
}
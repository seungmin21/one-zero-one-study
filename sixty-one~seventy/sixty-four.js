// 문제 64 : set 객체를 사용해 JSON 문자열을 객체로 변환하는 코드를 작성하세요.

const setting = new Set();
setting.add(28)
setting.add('홍길동')
const settingArray = Array.from(setting);

console.log(JSON.parse(JSON.stringify(settingArray)));
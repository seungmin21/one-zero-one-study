// 문제 81 : Local Storage에 데이터를 저장하고 검색하는 코드를 작성해보세요.

// 데이터 저장
localStorage.setItem('username', 'JohnDoe');

// 데이터 검색
const username = localStorage.getItem('username');
console.log(username);
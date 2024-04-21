// 문제 55 : 모듈을 만들고 그것을 내보내는 코드를 작성하세요.

function add(x, y, callback) {
  return callback(x, y)
}

module.exports = add
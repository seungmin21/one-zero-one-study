// 문제 74 : 비동기 함수에서 예외를 처리하는 방법을 설명하고 예를 들어 보세요.

// async function add() {
  // console.log("hello")
  // await setTimeout((message) => {
    // message = "world"
    // console.log(message)
  // }, 2000)
// }
// 
// console.log(add())

async function add() {
  try {
    console.log("hello")
    await setTimeout((message) => {
      message = "world"
      console.log(message)
    }, 2000)
  } catch (error) {
    console.error("실패했습니다.:", error)
  }
}
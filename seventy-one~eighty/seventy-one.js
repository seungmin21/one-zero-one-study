// 문제 71 : async / await를 사용해 비동기 코드를 처리하는 목적을 설명하세요.

async function add(meassge) {
  meassge = "hello world!"
  return meassge
}

async function remove() {
  console.log("Reloading")
  const value = await add()
  console.log(value)
}

// printData 함수 호출
remove().catch(error => {
  console.error('데이터를 가져오는 도중 오류가 발생했습니다:', error);
});

function add(number) {
  return new Promise((resolve, reject) => {
    if(number) {
      resolve("양수입니다." + number)
    } else {
      reject(new Error("음수입니다." + number))
    }
  })
}

add(2) 
  .then((message) => {
     console.log(message)
  })
  .catch((err) => {
    console.log(err)
  })
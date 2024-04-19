// 문제 53 : get과 set 접근자에 대해 설명하고 사용 예를 들어 보세요.

// get은 set으로 저장된 세팅을 가져와서 사용하는 것
// set은 외부에서 사용할 수 없게 내부에서만 사용할 수 있게 설정하는 것

const user = {
  get name() {
    return this._name
  },

  set name(value) {
    if (value.length < 4) {
      console.error("네 글자를 입력해야합니다.")
    } else {
      console.log(this._name = value)
    }
  }
};


user.name = "독고수저";
//user.name = "독저";



// [엘리먼트 변수]
// 여기에 querySelector를 이용해 상호작용을 해야 하는 모든 엘리먼트를 전역변수로 지정하세요
const btnSignup = document.querySelector('#btn-signup')

// [이벤트 핸들러]
function handleBtnSignupClick() {
  console.log('회원가입 버튼을 클릭했군요!')

  /*

  버튼을 클릭했을 때, 작동해야하는 시나리오의 예시를 소개합니다.
  예를 들어, 아이디가 8자 이상인지 확인하려면,

  1. 아이디 input box를 변수로 지정한다
  2. input box에 적힌 값을 얻어온다
  3. input 값을 함수를 이용해 검증한다
  4. 함수 리턴값 (true 또는 false)을 통해 유효성을 검증하여 로직을 분기한다
  5. 유효하다면, 정상적으로 로그인했다고 alert 창을 띄운다
  6. 유효하지 않다면
    6-1. 아이디 입력창 옆에 오류 메시지를 표시한다
    6-2. 아이디 입력창에 붉은색의 스타일을 적용한다

  */
}

// [유효성 검증 함수]
// 필요에 따라서 여러분들이 사용할 유효성 검증 함수를 추가하세요.
function moreThanLength(str, n) {
  return str.length >= n; // 항상 true 또는 false로 리턴하게 만드는 게 좋습니다.
}

// [시각적 피드백]
function displayErrorMessage() {
  // 직접 작성하세요
  // alert('insufficient requirements to register')
}


// [엘리먼트와 이벤트 핸들러의 연결]
btnSignup.onclick = handleBtnSignupClick;
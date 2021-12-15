// [엘리먼트 변수]
const elErrorMessage = document.querySelector('#invalid-message');

// [유효성 검증 함수]: n개의 글자 이상
function moreThanLength(str, n) {
  return str.length >= n;
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// 휴대폰 번호 검증 함수 
function phoneNumber(str) {
  return /^\d{3}-\d{3,4}-\d{4}$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

// [시각적 피드백]: 에러메시지를 띄웁니다
function displayErrorMessage(message) {
  elErrorMessage.classList.add('show');
  elErrorMessage.textContent = message;
}

const inputform = document.body.querySelectorAll("label");

inputform[0].addEventListener( "input", (el)=> {

  if( elErrorMessage.className ){
    elErrorMessage.classList.remove('show');
  }

  const inputText = el.target.closest('input[type="text"]').value;
  if(!inputText) return;

  if( moreThanLength( inputText, 8) && onlyNumberAndEnglish(inputText) ){
    const classLength = inputform[0].classList.length;

  for(let i = 0; i < classLength; i++){

    if( inputform[0].classList.item(i) === "invalid" ){
      inputform[0].classList.remove("invalid");
    }

  }
  inputform[0].classList.add("valid");
  }
  else{
    const classLength = inputform[0].classList.length;

  for(let i = 0; i < classLength; i++){

    if( inputform[0].classList.item(i) === "valid" ){
      inputform[0].classList.remove("valid");
    }

  }
  inputform[0].classList.add("invalid");
  }

});

inputform[1].addEventListener( "input", (el)=> {
  const inputText = el.target.closest('input[type="text"]').value;
  if(!inputText) return;

  if( elErrorMessage.className ){
    elErrorMessage.classList.remove('show');
  }
  
  if( phoneNumber(inputText) ){
    const classLength = inputform[1].classList.length;

  for(let i = 0; i < classLength; i++){

    if( inputform[1].classList.item(i) === "invalid" ){
      inputform[1].classList.remove("invalid");
    }

  }
  inputform[1].classList.add("valid");
  }
  else{
    const classLength = inputform[1].classList.length;

  for(let i = 0; i < classLength; i++){

    if( inputform[1].classList.item(i) === "valid" ){
      inputform[1].classList.remove("valid");
    }

  }
  inputform[1].classList.add("invalid");
  }

});

inputform[2].addEventListener( "input", (el)=> {
  const inputText = el.target.closest('input[type="text"]').value;
  if(!inputText) return;

  if( elErrorMessage.className ){
    elErrorMessage.classList.remove('show');
  }
  
  if( strongPassword(inputText) ){
    const classLength = inputform[2].classList.length;

  for(let i = 0; i < classLength; i++){

    if( inputform[2].classList.item(i) === "invalid" ){
      inputform[2].classList.remove("invalid");
    }

  }
  inputform[2].classList.add("valid");
  const spanClass =  inputform[2].querySelector(".message");
  // spanClass.textContent = "";
  const iClass =  inputform[2].querySelector("i");

  for(let i = 0; i < iClass.classList.length; i++){
    if( iClass.classList.item(i) === "fa-times" ){
      iClass.classList.remove("fa-times");
      iClass.classList.add("fa-check-circle");
      iClass.nextSibling.textContent = "";
    }
  }    

  }
  else{
    const classLength = inputform[2].classList.length;

  for(let i = 0; i < classLength; i++){

    if( inputform[2].classList.item(i) === "valid" ){
      inputform[2].classList.remove("valid");
    }

  }
  inputform[2].classList.add("invalid");
  }

});

const formTag = document.querySelector("form");
formTag.addEventListener( "submit", (el) => {
    el.preventDefault();
   // console.dir(el);
   // console.dir(el.target.form.input[0].value);
   //const inputBox = el.target;
   //console.dir(inputBox);

   // 담긴다.
   let textBox = document.body.querySelectorAll('input[type="text"]');
   
   if( moreThanLength( textBox[0].value, 8) && onlyNumberAndEnglish(textBox[0].value) && phoneNumber(textBox[1].value) && strongPassword( textBox[2].value) ){
    displayErrorMessage(' Successfully registered 👍 ');
    for(let i=0; i<textBox.length; i++){
      textBox[i].value = "";
    }
   }
   else{
    displayErrorMessage('insufficient requirements to register 😥');
   }

});






// //////////////////////// 이벤트 위임을 이용한 방법
// 그러나, 태그마다 넘겨줘야 될 정규표현식 함수가 달라서, 실패했다.

// const container = document.body.querySelector("div.form");

// container.addEventListener( "input", (el)=> {
//   const inputText = el.target.closest('input[type="text"]').value;
//   if(!inputText) return;

//   const label = el.target.closest('input[type="text"]').parentElement;

//   console.log( inputText );

//   console.log( label );

//   ////////////////////

//   if( moreThanLength( inputText, 8) && onlyNumberAndEnglish(inputText) ){
//     // if 절이 통과가 되면, 여기로
//     const classLength = label.classList.length;

//   for(let i = 0; i < classLength; i++){

//     if( label.classList.item(i) === "invalid" ){
//         label.classList.remove("invalid");
//     }

//   }
//     label.classList.add("valid");
//   }
//   else{
//     // 아니면, 여기로
//     const classLength = label.classList.length;

//   for(let i = 0; i < classLength; i++){

//     if( label.classList.item(i) === "valid" ){
//         label.classList.remove("valid");
//     }

//   }
//     label.classList.add("invalid");
//   }

// });

// [테스트 코드]  6이나 11 이상이 되어야 되는구나
// console.log('`codestates`는 6글자 이상이므로', moreThanLength('codestates', 6))
// console.log('`codestates`는 11글자 이하이므로', moreThanLength('codestates', 11))
// console.log('`codestates`는 영어만 포함하므로', onlyNumberAndEnglish('codestates'))
// console.log('`김coding`은 영어 외의 다른 글자도 포함하므로', onlyNumberAndEnglish('김coding'))
// console.log('`김코딩`은 영어 외의 다른 글자도 포함하므로', onlyNumberAndEnglish('김코딩'))
// console.log('`qwerty`는 충분히 강력하지 않은 암호이므로', strongPassword('qwerty'))
// console.log('`q1w2e3r4`는 특수문자를 포함하지 않으므로', strongPassword('q1w2e3r4'))
// console.log('`q1w2e3r4!`는 조건을 충족하므로', strongPassword('q1w2e3r4!'))

// displayErrorMessage('insufficient requirements to register')

import getType from "./getType";
import random from "./getRandom";

//javascript에서 제공하는 데이터타입 확인하는 법
console.log('==javascript에서 제공하는 데이터타입 확인하는 법==');
console.log(typeof "hello");
console.log(typeof 123);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

//getType 함수 생성 후 데이터타입 확인
console.log('==getType 함수 생성==');
console.log(getType("hello"));
console.log(getType(123));
console.log(getType(false));
console.log(getType(undefined));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));

// 조건문 (If Statement)
console.log('==조건문 (If Statement)==');
const a = random();

if(a === 0){
  console.log('a is 0');
}else if(a === 2){
  console.log('a is 2');
}else{
  console.log('rest...');
}

//조건문 (Switch Statement)
console.log('==조건문 (Switch Statement)==');
switch(a) {
  case 0:
    console.log('a is 0');
    break;
  case 2:
    console.log('a is 2');
    break;
  default:
    console.log('rest...');
    break;
}

//반복문 (For Statement)
console.log('==반복문 (For Statement)==');
const ulEl = document.querySelector('ul');

for(let i = 0 ; i < 10 ; i++){
  const li = document.createElement('li');
  li.textContent = `list-${i + 1}`;

  //생성한 li변수에 클릭 이벤트 추가
  li.addEventListener('click', function() {
    console.log(li.textContent);
  });

  ulEl.appendChild(li)
}

//변수 유효범위(Variable Scope)
// var : 함수레벨 유효범위(사용권장 x)
// let, const : 블록레벨 유효범위

console.log('==변수 유효범위(Variable Scope)==');

function scope(){
  if(true) {
    const constVl = 123;
    var varVl = 345;
    console.log(constVl);
  }
  console.log(varVl);
}
scope();

//형 변환(Type conversion)
const cvsA = 1;
const cvsB = '1';

console.log(cvsA === cvsB);
console.log(cvsA == cvsB);

//Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

//Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if('false') {
  console.log('Truthy(참 같은 값)');
}

if(false) {
  console.log('Falsy(거짓 같은 값)');
}


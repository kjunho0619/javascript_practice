# javascript에서 제공하는 데이터타입 확인하는 법
### typeof함수

```javascript
console.log(typeof "hello");
console.log(typeof 123);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null); //object
console.log(typeof {}); //object
console.log(typeof []); //object
```

# getType 함수 생성 후 데이터타입 확인
### getType.js
```javascript
export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8,-1);
};
```
### main.js
```javascript
import getType from "./getType";

console.log(typeof "hello");
console.log(typeof 123);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null); //null
console.log(typeof {}); //object
console.log(typeof []); //Array
```

# 조건문 (If Statement)

### getRandom.js
```javascript
export default function random() {
  return Math.floor(Math.random() * 10);
}
```
### main.js
```javascript
const a = random();

if(a === 0){
  console.log('a is 0');
}else if(a === 2){
  console.log('a is 2');
}else{
  console.log('rest...');
}
```

# 조건문 (Switch Statement)
```javascript
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
```

# 반복문 (For Statement)
### html
```html
<body>
    <ul></ul>
</body>
```

### main.js
```javascript
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
```

# 변수 유효범위(Variable Scope)
### var : 함수레벨 유효범위(사용권장 x)
### let, const : 블록레벨 유효범위
```javascript
function scope(){
  if(true) {
    const constVl = 123;
    var varVl = 345;
    console.log(constVl);
  }
  console.log(varVl);
}
scope();
```

# 형 변환(Type conversion)
### 일치 연산자와 동등 연산자 차이
```javascript
const cvsA = 1;  
const cvsB = '1';

console.log(cvsA === cvsB); // 일치 연산자  
console.log(cvsA == cvsB); // 동등 연산자
```

### Truthy(참 같은 값)  
```
true, {}, [], 1, 2, 'false', -12, '3.14' ...
```

### Falsy(거짓 같은 값)  
```
false, '', null, undefined, 0, -0, NaN
```
### Truthy, Falsy Check
```javascript
if('false') {
  console.log('Truthy(참 같은 값)');
}

if(false) {
  console.log('Falsy(거짓 같은 값)');
}
```
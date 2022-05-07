import getType from "./getType"

//javascript에서 제공하는 데이터타입 확인하는 법
console.log(typeof "hello");
console.log(typeof 123);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

//getType 함수 생성
console.log(getType("hello"));
console.log(getType(123));
console.log(getType(false));
console.log(getType(undefined));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));


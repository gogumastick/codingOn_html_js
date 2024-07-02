// 하나의 모듈 파일에 여러개의 모듈 만들기

// module2.js copy

// 방법1
// function add(x,y) {
//     return x+y;
// }
// function subtract(x,y) {
//     return x-y;
// }
// function multiply(x,y) {
//     return x*y;
// }

// 화살표함수는 한 줄로 입력시 {return} 생략가능
// const add = (x,y) => x+y; 
// const subtract = (x,y) => x-y; 
// const multiply = (x,y) => x*y;

// es6문법에서는 화살표함수로해도 export의 위치는 위아래 상관 없음
// 이유 : es6는 모든 export와 import문이 로드 시점에 한번에 평가되고 처리되기 때문에
// 함수 선언이나 변수선언의 위치와 무관하게 작동
// export{add,subtract,multiply} ; // 여기가 변경

// 방법2
// export function add(x,y) {
//     return x+y;
// }
// export function subtract(x,y) {
//     return x-y;
// }
// export function multiply(x,y) {
//     return x*y;
// }

// 방법2의 화살표버전
// export const add = (x,y) => x+y; 
// export const subtract = (x,y) => x-y; 
// export const multiply = (x,y) => x*y;

// 방법3 한번에 내보내기
const add = (x,y) => x+y; 
const subtract = (x,y) => x-y; 
const multiply = (x,y) => x*y;

// 하나의 객체 변수로!
const values = {add, subtract, multiply};
export default values;

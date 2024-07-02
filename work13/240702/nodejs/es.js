import connect from './module3.js';
const result = connect();
console.log(result);

// 여러가지 모듈 방법1, 방법2
// import{add, subtract, multiply} from './module4.js';
// console.log(add(5,6));
// console.log(subtract(10,2));
// console.log(multiply(6,7));

// 여러가지 모듈 방법3
import calculator  from './module4.js';
console.log(calculator.add(5,6));
console.log(calculator.subtract(10,2));
console.log(calculator.multiply(6,7));
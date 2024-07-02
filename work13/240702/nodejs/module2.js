// 하나의 모듈 파일에 여러개의 모듈 만들기
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
// const subtract = (x,y) => x-y; 

// module.exports={ add, subtract, multiply };
// function이라는 키워드가 있을 때는 module.exports의 위치가 상단위치도 가능
// 화살표 함수에서는 항상 함수 하단 위치

// 방법2
module.exports.add = function(x,y) {
    return x+y;
}
module.exports.subtract = (x,y) => {
    return x-y;
}
module.exports.multiply = function(x,y) {
    return x*y;
}

// 방법2의 생략버전(module삭제)
exports.add = function(x,y) {
    return x+y;
}
exports.subtract = (x,y) => {
    return x-y;
}
exports.multiply = function(x,y) {
    return x*y;
}


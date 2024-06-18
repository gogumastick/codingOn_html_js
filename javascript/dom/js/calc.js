// alert("test");

function calc(){
let v1=document.getElementById("v1");
let v2=document.getElementById("v2");
let op=document.getElementById("op");
let res=document.getElementById("res");
console.log(v1,v2,op);
console.log(typeof(v1),typeof(v2));

let v1Val=v1.value;
let v2Val=v2.value;
let opVal=op.value;
// let resVal=res.value;
console.log(v1Val,v2Val,opVal);
// input value가 string(문자)임
console.log(typeof(v1Val),typeof(v2Val));

// 숫자로 형변환
v1Val=Number(v1Val);
v2Val=Number(v2Val);

let result=0; // 계산 결과값
switch (opVal) {
    case '+':
       result=v1Val+v2Val; 
        break;
    case '-':
       result=v1Val-v2Val; 
        break;
    case '/':
       result=v1Val/v2Val; 
        break;
    case '*':
       result=v1Val*v2Val; 
        break;

    default:
        break;
}
console.log(result);

// 계산된 결과(result) 결과 input에 출력
res.value=result;
}

// 취소하기 함수 정의(초기화)
function reset(){
    document.getElementById("v1").value="";
    document.getElementById("v2").value="";
    document.getElementById("op").value="";
    document.getElementById("res").value="";
}
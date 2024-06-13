/*
    if(조건식1){
    조건식1이 true면 실행(true)
    }else if(조건식2){
    조건식2가 true면 실행(true)
    }else{
    조건식1,2가 false면실행(false)
    }
*/
// alert("test")
// 나이별 입장료 계산
let age=prompt("올해 춘추가 어찌되십니까?","25");
let charge=0; // 입장료

if(age<8){
    document.write("미취학 아동 입니다.<br>");
    charge=1000;
}else if(age>=8 && age<14){
    document.write("초등학생 입니다.<br>");
    charge=2000;    
}else if(age>=14 && age<20){
    document.write("중/고등학생 입니다.<br>");
    charge=3000;    
}else{
    document.write("일반인 입니다.<br>");
    charge=4000;    
}
    document.write("입장료는 <span class='access'>",charge,"원</span> 입니다")
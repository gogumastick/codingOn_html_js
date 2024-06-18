// alert("test")
let today=new Date();

const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const day1 = today.getDay(); // 요일은 index기준으로 표기(일:0,월:1,...토:6)
console.log(day1);

let day2=""; // 빈문자로 초기화하면 문자 변수임
switch(day1){
    case 0:
        day2="일요일"; break;
    case 1:
        day2="월요일"; break;
    case 2:
        day2="화요일"; break;
    case 3:
        day2="수요일"; break;
    case 4:
        day2="목요일"; break;
    case 5:
        day2="금요일"; break;
    case 6:
        day2="토요일"; break;

}

// displayDate 변수 선언
let dispalyDate=document.getElementById("today");
    // innerHTML 속성은 태그와 문자를 저장할 수 있음
    dispalyDate.innerHTML=`${year}년 ${month}월 ${date}일 ${day2}`;

    // 시간 추출
    // now 객체 새로 생성
    let clock = function(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    

    hours = (hours<10) ? "0" + hours : hours;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;
    half = (hours<=12) ? "오전" : "오후";

    // displayTime 변수 선언
    let dispalyTime=document.getElementById("clock");
        // innerHTML 속성은 태그와 문자를 저장할 수 있음
        dispalyTime.innerHTML=`${half} ${hours}시 ${minutes}분 ${seconds}초`;
}

setInterval(clock);

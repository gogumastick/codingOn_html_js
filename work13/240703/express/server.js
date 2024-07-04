const express = require('express');
const app = express();
const PORT = 8000;

// 뷰템플릿
app.set('view engine', 'ejs');
app.set('views', './views'); // views폴더는 디폴트 값이라 views폴더있는 경우 생략 가능하나 다른 폴더명으로 생성한 경우 생략 불가

// app.use(미들)는 라우터 상단 어디든 위치해야함
// 정적파일 세팅
app.use('/public', express.static(__dirname+'/public'));

// 시간 값 출력
app.use((req,res,next)=>{
    console.log('Time: ', Date.now());
    // next를 입력해야 
    next();
});

// 라우터(도메인 설정)
// 하단에 기재한 슬러쉬(/)는 http://localhost:8000
app.get('/', (req, res)=>{
    // send() 클라이언트에 응답 데이터를 보낼때. 중괄호는 객체 형태로 보내는 경우
    res.send({ name:'KDT gg??'});

});

// 라우터로 "/kdt"는 http://localhost:8000/kdt
app.get('/kdt', (req, res)=>{
    // render() 뷰 템플릿 랜더딩, 템플릿 이름과 랜더링이름이 동일해야 함
    // 중괄호로 데이터를 넣어 보낼수 있다
    res.render('test', {age:20});
});

// "/gugu" http://localhost:8000/gugu
app.get('/gugu',(req,res)=>{
    res.render('gugudan', {dan:3});
});

// "/fruit" http://localhost:8000/fruit
app.get('/fruit',(req,res)=>{
    res.render('fruit',{
        fruit:[
            {name:'apple',kor:'사과'},
            {name:'banana',kor:'바나나'},
            {name:'grapes',kor:'포도'},
            {name:'peach',kor:'복숭아'},
            
        ],
    })
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});




const express = require('express');
const app = express();
const PORT = 8000;

// 뷰엔진(미들웨어 개념 아님. 셋팅일뿐)
app.set('view engine','ejs');
app.set('views','./views');

// 미들웨어 body-parser
app.use(express.urlencoded({ extended : true}));
// extended : true : qs모듈 사용 body 데이터를 해석
// extended : false : 내장된 querystring 모듈 사용


// 라우터
app.get('/',(req,res)=>{
    res.render('form');
});

app.get('/form',(req,res)=>{
    res.render('index');
});
// get방식
app.get('/getForm',(req,res)=>{
    console.log(req.query);
    res.render("result",{title:'GET요청결과', userInfo: req.query});
});
// post방식
app.post('/postForm',(req,res)=>{
    console.log(req.body);
    res.render("result",{title:'post요청결과', userInfo: req.body});
});

// 서버 실행
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});


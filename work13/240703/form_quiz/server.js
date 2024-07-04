const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({ extended : true}));

// 라우터
app.get('/',(req,res)=>{
    res.render('index');
});

// get방식
app.get('/getForm',(req,res)=>{
    console.log(req.query);
    res.render('result',{title:'GET요청결과를 받아라', userInfo: req.query});
});
// post방식
app.post('/postForm',(req,res)=>{
    console.log(req.body);
    res.render('result copy',{title:'post요청결과를 받아라', userInfo: req.body});
});

// 서버 실행
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
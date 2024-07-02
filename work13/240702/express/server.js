const express = require('express');
const app = express();
const PORT = 8000;

// 뷰템플릿
app.set('view engine', 'ejs');
app.set('views','./views') // 뷰파일들의 위치 알려줌(명시적 경로)
// 뷰파일을 views폴더에 넣을때는 생략이 가능
// views폴더 외 지정하고 싶을때
// app.set('views','./template') >> 생략불가
// const path = require('path');
// app.set('views', path.join(__dirname,'template'))

//
app.get('/',(req,res)=>{
    res.send('good day');
});
app.get('/test',(req,res)=>{
    res.render('test',{name:'고길동', age:38});
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
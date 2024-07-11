const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// 임시DB
const comments =[
    {
        id:1,
        userid:'spring',
        date: '2024-07-01',
        comment:'따숲',
    },{
        id:2,
        userid:'summer',
        date: '2024-07-01',
        comment:'핫핫',
    },{
        id:3,
        userid:'winter',
        date: '2024-07-01',
        comment:'필굿',
    },{
        id:4,
        userid:'fall',
        date: '2024-07-01',
        comment: '망필',
    }
]

//router
//=======페이지
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/comments', (req, res) => {
    res.render('comments', { list: comments });
});

// : 콜론 뒤에는 원하는 변수명 / 변수값은 {변수명:"값"} 형태
app.get('/comment/:id', (req, res) => {
    //console.log('h1');
    console.log(req.params);
    console.log(req.params.id);
    console.log(typeof req.params.id);
    const page = Number(req.params.id);
    // comment 배열에 접근
    res.render('comment',{data: comments[id-1]});
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
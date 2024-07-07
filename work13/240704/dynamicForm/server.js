const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

//router
// ====페이지
app.get('/', (req, res) => {
    res.render('index');
});

// render() : 뷰페이지렌더링, render(뷰페이지이름, 데이터(선택))
// send() : 모든 타입 데이터 전송(문자열, 배열, 객체, 숫자 등)
// json() : 객체타입 데이터 전송

// ====요청과 응답
// ajax
// index url과 동일해야함
app.get('/ajax', (req,res)=>{ 
    console.log('get 요청값', req.query);
    const {myName, myEmail} =req.query;
    // 응답 데이터(프론트로 보내는 데이터)
    res.send({user: `${myName}님`, email: `이메일주소는 ${myEmail}`});
});

app.post('/ajax', (req,res)=>{ 
    console.log('post 요청값', req.body);
    const {myName, myEmail} =req.body;
    // 응답
    const data = {
        user:`${myName}님`,
        email: `이메일주소는 ${myEmail}`,
    };
    res.send(data);
    
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
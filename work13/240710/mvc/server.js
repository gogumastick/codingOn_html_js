const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');

// router
// index는 생략가능해서 하단과 동일 const commentRouter = require('./routes/index');
const commentRouter = require('./routes');
// '/' 중요하다고? '/'뒤에 붙는 텍스트 url주소가 되는거리서?
app.use('/',commentRouter);
const userRouter =require('./routes/user');
app.use('/user', userRouter);



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

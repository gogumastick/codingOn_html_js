const express = require('express');
const app = express();
const PORT = 8000;

// 셋
app.use('view engine', 'ejs');
app.use(express.json());


// 라우터
const postRouter=require('.routes/post');
app.use('api/post',postRouter);

// 404
app.use('*', (req,res)=>{
    res.status(404), res.render('404');
});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
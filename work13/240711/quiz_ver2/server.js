const express= require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());


// 페이지 라우터
const pageRouter = require('./routes/page');
app.use('/', pageRouter);



const kdtuserRouger = require('./routes/kdtuser');
app.use('api/kdtuser',kdtuserRouger);

/*
// 404
app.use('*', (req, res)=>{
    res.status(404),res.render('404');
});
*/

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
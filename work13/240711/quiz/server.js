const express= require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

// 라우터





app.use('*', (req, res)=>{
    res.status(404),res.render('404');
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
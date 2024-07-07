const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

//router
//=======페이지
app.get('/', (req, res) => {
    res.render('index');
});


//axios
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    const { username, email } = req.query;
    //응답
    const value = {
        result: true,
        username,
        email,
    };
    res.json(value);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
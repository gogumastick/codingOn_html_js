require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

//router
let test;
app.get('/', (req, res) => {
    // console.log(process.env);
    console.log(process.env.MYNAME);
    console.log(process.env.KDT);
    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV==='production'){
        console.log('라이브서버임');
        test= process.env.MYNAME;
    } else if(process.env.NODE_ENV==='development'){
        console.log('개발용서버임');
        test= process.env.KDT;
    }
    console.log(`접속한 사람은 ${test}입니다`);
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

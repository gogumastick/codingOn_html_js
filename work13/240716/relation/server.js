const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

app.use(express.json());

// 라우터
const memberRouter = require('./routes/member');
app.use('/api/member', memberRouter);
//404
app.use('*', (req, res)=>{
    res.status(404),send('페이지 못 찾음');
});

db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,() =>{
        console.log(`http://localhost:${PORT}`);
    });
});
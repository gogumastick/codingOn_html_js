require('dotenv').config();
const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

app.use(express.json());
app.set('view engine', 'ejs');

//라우터
const pageRouter = require('./routes/page');
app.use('/', pageRouter);
const memberRouter = require('./routes/member');
app.use('/api/member', memberRouter);

/*
let sign = ''; // 전역변수로 패스워드를 저장(db에 저장된 값이라고 저장)
app.post('/sign', (req, res) => {
  const { pw } = req.body;
  sign = bcryptPassword(pw);
  res.json({ result: sign });
});
app.post('/verify',(req,res)=>{
    const {pw}= req.body;
    const result = comparePassword(pw, sign);
    res.json({result});
})
*/

//404
app.use('*', (req, res) => {
    res.status(404).send('페이지를 찾을 수 없습니다');
});

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

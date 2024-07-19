const express = require('express');
const crypto = require('crypto');
const app = require();
const PORT = 8000;

app.use(express.json());

// 라우터
app.post('/sign', (req,res)=>{
    const { pw } = req.body;
    // const sign =createHashedPassword(String(pw)); 해시
    
    
    
    const sign = createPdkdf(pw);
    res.json({result:sign});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// 단방향
// 해시함수
const createHashedPassword =(password) =>{
    // createHash 알고리즘.update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha256').update(password).digest('base64');
};

// pdkdf2함수
const salt = crypto.randomBytes(16).toString('base64'); //솔트생성
const iterations = 1000;
const keylen = 64;
const digest = 'sha256';


const createPdkdf = (password) =>{
    console.log(salt);
    // Pdkdf2
    const sign = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    console.log(sign);
    return sign.toString('base64');

};
const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 8000;

app.use(express.json());


let sign = ''; // 전역변수로 패스워드를 저장(db에 저장된 값이라고 저장)
// 라우터
app.post('/sign', (req, res) => {
  const { pw } = req.body;
  // 해시 함수
  // const sign = createHashedPw(String(pw));

  // pdkdf
  //const sign = createPbkdf(pw);
  // sign = createPbkdf(pw);
  sign = bcryptPassword(pw);
  res.json({ result: sign });
});
app.post('/verify',(req,res)=>{
    const {pw}= req.body;
    // const result = verifyPassword(pw, sign);
    const result = comparePassword(pw, sign);
    res.json({result});
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 단방향
// 해시 함수 -> 값은 값이면 암호화 값도 같은 경우가 있어 안씀
const createHashedPw = (password) => {
  // createHash(알고리즘).update(암호화 할 값).digest(인코딩 방식)
  return crypto.createHash('sha256').update(password).digest('base64');
};

// pdkdf2함수
const salt = crypto.randomBytes(16).toString('base64'); //솔트 생성
const iterations = 1000; //반복 횟수
const keylen = 64; //생성할 키의 길의
const digest = 'sha256'; //알고리즘

// 암호화 생성
const createPbkdf = (password) => {
  console.log(salt);
  // pdkdf2함수(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)으로 생성. 반환은 buffer 값
  const sign = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
  console.log(sign);
  return sign.toString('base64');


};

// 암호 비교
const verifyPassword = (password, dbpassword)=>{
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
    if(compare === dbpassword){
        return true;
    } else {
        return false;
    }

};

// bcrypt
const saltNumber = 10;
// 암호화
const bcryptPassword = (password)=>{
    return bcrypt.hashSync(password, saltNumber);

};
// 비교
const comparePassword = (password, dbpassword)=>{
    return bcrypt.compareSync(password, dbpassword);
};
/* 
// 양방향
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32);
const iv =crypto.randomBytes(16);


const cipherEncrypt = (word) =>{
    const cipher= crypto.createCipheriv(algorithm, key, iv);
    let encryptedData =cipher.update(word,'utf-8', 'base64');
    encryptedData = cipher.final('base64');
    return encryptedData;
};

const decipher = (data)
*/
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');

//정적파일설정
//http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));


// multer 설정
const storage= multer.diskStorage({
    // destination: 업로드한 파일을 저장할 폴더 지정
    destination:(req,file, done) => {
        done(null,'uploads/')
    },
    // filename : 파일이름 결정(요청객체 업로드된 파일객체, 콜백함수)
    filename:(req,file, done)=>{
        // 확장자 추출
        const ext = path.extname(file.originalname);

        // 파일이름 추출
        const newName = path.basename(file.originalname, ext)+Date.now()+ext;

        done(null, newName);

    },
});

// 파일용량 제한
const limits = {fileSize: 1024 * 1024 * 5} // 5mb제한
const upload = multer({ storage, limits:limits});

// 라우터
app.get('/', (req,res)=>{
    res.render('index');
})

// 요청, 응답 데이터
// inde.ejs에 data.append('userfile', file); userfile과
// single 뒤에 userfile이 동일해야한다

app.post('/upload',upload.single('userfile'), (req, res) => {
    // 요청 받은 데이터
    console.log('file :', req.file);
    console.log('data :', req.body);
    const {id,pw,myName,age} = req.body

    // 응답 데이터
    res.json({ filename: req.file.path, id, pw, myName, age });
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
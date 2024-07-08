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


app.get('/', (req,res)=>{
    res.render('index');
})


//multer세부설정
const uploadDetail = multer({
    //storage: 저장할 공간에 대한 정보
    //diskStroage: 파일을 저장하기 위한 모든 제어기능 제공(파일 저장관련 설정)
    storage: multer.diskStorage({
        //destination :업로드한 파일을 저장할 폴더 지정
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        //filename: 파일이름 결정(요청객체, 업로드된파일객체, 콜백함수)
        filename(req, file, done) {
            //확장자 추출
            const ext = path.extname(file.originalname);
            //파일이름 추출
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),
    //limits:파일 용량 제한

    limits: { fileSize: 1024 * 1024 * 10 }, //10mb제한

});

//동적
app.post('/upload/axios', uploadDetail.single('userfile'), (req, res) => {
    res.json({ file: req.file, title: req.body });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
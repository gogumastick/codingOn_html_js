const http = require('http');
const fs = require('fs');
const PORT = 8000;

const server = http.createServer((req,res)=>{

    // 파일 전송
    fs.readFile('index.html', (err,data)=>{
        // 에러는 상단에 입력 > 에러 발생시 어떻게 할지 판단하기 위함
        if(err){
            console.log(error);
            res.writeHead(404);
            res.end(err.message);
            return;
        }
        res.writeHead(200);
        res.write(data);
        res.end('<div>END</div>');
    });
});

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
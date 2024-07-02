const http = require('http'); // common
// import http from 'http >> es6문법 방식

const server = http.createServer((req,res) =>{
    res.writeHead(200);
    res.write('<h1> good day </h1>');
    res.end('<p> END </p>');
});

// on() : server 객체에 이벤트를 등록
server.on('request',() =>{
    console.log('요청이벤트');
});
server.on('connection',() =>{
    console.log('접속이벤트');
});

// listen() : 서버를 실행
server.listen(8000,()=>{
    console.log(`http://localhost:8000`);
});
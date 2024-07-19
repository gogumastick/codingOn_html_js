require('dotenv').config();
const mysql = require('mysql2/promise');
//mysql연결
//createConnection: 단일연결
//요청할때마다 새로운 연결을 생성
//적은수의 동시연결이나 단순한 데이터베이스 쿼리일때 사용
//createPool: 다중연결
//연결 풀을생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
//요청이 들어오면 연결 풀에서 사용가능한 연결을 제공. 작업완료 후 해당연결을 반환
//연결이 필요하지 않을경우 자동으로 반환, 풀의 연결 수를 제한하고 관리를 최적화
//일반적인 웹서비스에 적합
const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.DATA,
    connectionLimit: 20, //최대연결수(기본값10)
});

const signup = async (userid, name, pw) => {
    //회원정보의 id를 조회
    //if(id값이 존재한다면) {가입을 불가}
    //else{ 회원가입 }
    const query = 'insert into user_mvc (userid, name, pw) values (?,?,?)';
    const [result] = await conn.query(query, [userid, name, pw]);
    return result;
};
const login = async (userid, pw) => {
    const query = 'select * from user_mvc where userid = ? and pw = ?';
    const [rows] = await conn.query(query, [userid, pw]);
    return rows;
};

const info = async (id) => {
    const query = 'select * from user_mvc where id=?';
    const [rows] = await conn.query(query, [id]);
    return rows;
};

const update = async (id, name, pw) => {
    const query = 'update user_mvc set name=?, pw=? where id=? ';
    const [result] = await conn.query(query, [name, pw, id]);
    return result;
};

const deleteFunc = async (id) => {
    const query = 'delete from user_mvc where id=?';
    const [result] = await conn.query(query, [id]);
    return result;
};

const all = async () => {
    const query = 'select id, userid, name from user_mvc';
    const [rows, _] = await conn.query(query);
    console.log('roooow', rows);
    return rows;
};

module.exports = { signup, login, info, update, deleteFunc, all };

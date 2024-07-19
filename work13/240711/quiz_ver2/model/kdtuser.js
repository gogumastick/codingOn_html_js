require('dotenv').config();
const mysql = require('mysql2/promise');

// mySQL연결
const getConn = async()=>{
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    });
};

// 쿼리문
const allKdtuser = async()=>{
    const conn = await getConn(); // mySQL접속
    const query = 'SELECT * FROM kdt_user';
    const [row] = await conn.query(query);
    console.log('model:', row);
    await conn.end();
    return row;
};

// 하나 조회
const getKdtuser = async(id) => {
    const conn = await getConn();
    const query = 'SELECT * FROM Kdt_user WHERE id = ?';
    
    const [row] = await conn.query(query, [id]);
    console.log('model : ',row);
    await conn.end();
    return row; 
};

const postKdtuser =async (userid, name, pw) => {
    const conn = await getConn();
    // INSERT INTO Kdtuser (name, comment) VALUES(값1, 값2)
    const query= 'INSERT INTO Kdt_user (userid, name, pw) VALUES (?,?,?)';
    const [result] =await conn.query(query,[userid, name, pw]);
    // console.log('model:', row);
    await conn.end();
    return result;
};


const patchKdtuser = async(id, userid, name, pw)=>{
    const conn = await getConn();
    const query = 'UPDATE Kdt_user SET userid=?,  name =?, pw=? WHERE id=?'
    const [result] = await conn. query(query,[userid, name, pw, id]);
    console.log('result :', result);
    await conn.end();
    return result;
};

const deleteKdtuser = async(id, userid, name, pw)=>{
    const conn = await getConn();
    const query = 'DELETE FROM Kdt_user WHERE id=?'
    const [result] = await conn. query(query,[id]);
    console.log('result :', result);
    await conn.end();
    return result;
};


module.exports = {allKdtuser, getKdtuser, postKdtuser,patchKdtuser, deleteKdtuser}

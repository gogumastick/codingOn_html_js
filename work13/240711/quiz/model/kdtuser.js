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
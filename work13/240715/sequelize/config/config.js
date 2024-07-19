require('dotenv').config();

module.exports={
  development:{
    username : process.env.DBUSER,
    password : process.env.PASSWORD,
    database : process.env.DATA,
    host : process.env.HOST,
    dialect:"mysql",
  },
  production:{
    username : process.env.DBUSER,
    password : process.env.PASSWORD,
    database : process.env.NEWDATA,
    host : process.env.HOST,
    dialect:"mysql",
  }
}

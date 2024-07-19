const userInfo = require('../model/kdtuser')


const main= (req,res)=>{
    res.render('index');
};

const resultPost = (req, res) => {
    console.log('요청값? : ', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (userInfo.allKdtuser[0].userid === reqId  && userInfo.allKdtuser[0].pw === reqPw) {
        
        res.json({ result: true, userId: userInfo.allKdtuser[0].userid });
    } else {
        res.json({ result: false, userId: null });
    };
   
};


/*
const register= (req,res)=>{
    res.render('register');
};
*/



const pageKdtuser= (req,res)=>{
    res.render('kdtuser');
};


module.exports = {main, resultPost, /*register,*/ pageKdtuser};
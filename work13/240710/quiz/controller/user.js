
const userInfo = require('../model/user');

const main = (req, res) => {
    res.render('index');
};

const get = (req, res) => {
    res.render('get');
};

const post = (req, res) => {
    res.render('post');
};

const resultGet = (req, res) => {
    console.log('요청값', req.query);
    // const abc = {
    //     response: req.query,
    // };
    res.json({ response: req.query });
};

const resultPost = (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (userInfo[0].id === reqId && userInfo[0].pw === reqPw) {
        res.json({ result: true, userId: userInfo[0].id });
    } else {
        res.json({ result: false, userId: null });
    }
};

module.exports = {main, get, post, resultGet, resultPost};
const commentModel = require('../model/comment');

/*
// 방법1
exports.main = () => {}


// 방법2
const main = () => {};
module.exports ={main};
*/

exports.main = (req, res) => {
    res.render('index');
}

exports.comments = (req, res) => {
    res.render('comments', { list: commentModel });
}

exports.comment = (req, res) => {
    //console.log('h1');
    console.log(req.params);
    console.log(req.params.id);
    console.log(typeof req.params.id);
    const page = Number(req.params.id);
    // comments 배열에 접근
    res.render('comment',{data: commentModel [id-1]});
}
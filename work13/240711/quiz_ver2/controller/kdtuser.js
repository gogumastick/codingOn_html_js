const kdtuserModel = require('../model/kdtuser');



// 전체 방명록 조회
// async 비동기로 만들기 위해?응 await랑 같이 쓰는것 같아
const allKdtuser = async(req, res) =>{
    const data = await kdtuserModel.allKdtuser();
    console.log('controller :', data);
    res.json({ result: data});
};

// 방명록 하나 조회
const getKdtuser = async(req,res)=>{
    console.log(req.params.id);
    const data= await kdtuserModel.getKdtuser(req.params.id);
    console.log(data);
    res.json({result:data});
};

// 방명록 하나 작성
const postKdtuser = async (req,res) =>{
    console.log(req.body);
    const {userid, name, pw} = req.body;
    const data = await kdtuserModel.postKdtuser(userid, name, pw);
    
    console.log('data :', data);
    const result ={
        result:true,
        id: data.insertId,
        userid,
        name,
        pw,
    };
    res.json(result);
};

// 방명록 하나 수정
const patchKdtuser = async(req, res) =>{
    console.log(req.body);
    const{id,userid, name, pw} = req.body;
    const data = await kdtuserModel.patchKdtuser(id, userid, name, pw);
    if( data.affecteddRows === 0){
        res.json({ result : false });
    } else {
        res.json({ result : true });
    };
       
};

// 방명록 하나 삭제
const deleteKdtuser = async(req, res) =>{
    console.log(req.body);
    const data = await kdtuserModel.deleteKdtuser(req.body.id);
    if( data.affecteddRows === 0){
        res.json({ result : false });
    } else {
        res.json({ result : true });
    };
}

module.exports = {allKdtuser, getKdtuser, postKdtuser, patchKdtuser, deleteKdtuser};
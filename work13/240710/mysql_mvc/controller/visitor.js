const visitorModel = require('../model/visitor');

// 전체 방명록 조회
// async 비동기로 만들기 위해?응 await랑 같이 쓰는것 같아
const allVisitor = async(req, res) =>{
    const data = await visitorModel.allVisitor();
    console.log('controller :', data);
    res.json({ result: data});
};

// 방명록 하나 조회
const getVisitor = async(req,res)=>{
    console.log(req.params.id);
    const data= await visitorModel.getVisitor(req.params.id);
    console.log(data);
    res.json({result:data}); // 배열 방식이 (어떻게해서or)어디있다는거지?
};

// 방명록 하나 작성
const postVisitor = async (req,res) =>{
    console.log(req.body);
    const {name, comment} = req.body;
    const data = await visitorModel.postVisitor(name, comment);
    
    console.log('data :', data);
    const result ={
        result:true,
        id: data.insertId,
        name,
        comment,
    };
    res.json(result);
};

// 방명록 하나 수정
const patchVisitor = async(req, res) =>{
    console.log(req.body);
    const{id,name,comment} = req.body;
    const data = await visitorModel.patchVisitor(id,name,comment);
    if( data.affecteddRows === 0){
        res.json({ result : false });
    } else {
        res.json({ result : true });
    };
       
};

// 방명록 하나 삭제
const deleteVisitor = async(req, res) =>{
    console.log(req.body);
    const data = await visitorModel.deleteVisitor(req.body.id);
    if( data.affecteddRows === 0){
        res.json({ result : false });
    } else {
        res.json({ result : true });
    };
}

module.exports = {allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor};
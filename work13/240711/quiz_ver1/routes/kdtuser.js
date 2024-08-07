const express = require('express');
const controller = require('../controller/kdtuser');

const router = express.Router();

//localhost:8000/api/user
/*
//POST /signup 회원가입
router.post('/signup', ?);
*/

//POST /login  로그인
router.post('/login', controller.main);

/*
//GET /info 회원정보
router.get('/info/:id', controller.getKdtuser);

//PATCH /update 회원수정
router.patch('/update', controller.patchKdtuser);

//DELETE /delete 회원삭제
router.delete('/delete', controller.deleteKdtuser);

//GET /all 회원전체정보
router.get('/all', controller.allKdtuser);
*/

module.exports = router;
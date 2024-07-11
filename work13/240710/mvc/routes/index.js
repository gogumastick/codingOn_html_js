const express = require('express');
const controller =require('../controller/comment')
const router = express.Router();


//router
//=======페이지
router.get("/test", () => {
    
})
router.get('/', controller.main);
router.get('/comments', controller.comments);

// : 콜론 뒤에는 원하는 변수명 / 변수값은 {변수명:"값"} 형태
router.get('/comment/:id', controller.comment);

module.exports = router;
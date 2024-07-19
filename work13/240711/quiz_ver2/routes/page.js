const express = require('express');
const controller = require('../controller/page')
const router = express.Router();

// localhost:8000
router.get('/', controller.main);

// router.post('/resultpost', resultPost);
// router.post >> index에 넣어뒀으니깐 작업 안해도 돼?

// router.get('/register', register);

router.get('/kdtuser', controller.pageKdtuser);

router.get('/kdtuser/:id', controller.pageKdtuser)

module.exports = router;
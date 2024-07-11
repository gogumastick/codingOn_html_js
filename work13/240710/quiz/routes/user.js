const express = require('express');
const controller = require('../controller/user');
const router = express.Router();

//router
//=======페이지
router.get('/', controller.main);
router.get('/get', controller.get);
router.get('/post', controller.main);

module.exports =router;
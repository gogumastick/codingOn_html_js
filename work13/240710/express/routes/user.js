const express = require('express');
const controller = require('../controller/user');
const router = express.Router();

//localhost:8000/user
router.get('/', controller.main); // 여길 모르겠다 /user가 어딨는거지? controller.main가 user라는건가?
router.post('/register', controller.register);

module.exports = router;

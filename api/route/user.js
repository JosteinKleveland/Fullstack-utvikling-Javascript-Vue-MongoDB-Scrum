const express = require('express');
const router = express.Router();
const userAPI = require('../controller/userApi');


router.post('/signUp', userAPI.signUp);
router.get('/signIn', userAPI.signIn);
router.get('/getUser/:_id', userAPI.fetchUser);



module.exports = router;
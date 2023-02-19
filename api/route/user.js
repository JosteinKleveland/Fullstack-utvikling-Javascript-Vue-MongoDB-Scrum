const express = require('express');
const router = express.Router();
const {signin} = require('../controller/user');

router.post('/signin', signin);

module.exports = router;
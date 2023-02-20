const express = require('express');
const router = express.Router();
const {toolApi} = require('../controller/toolApi');

router.post('/regTool', toolApi.regTool);
router.get('/getTool/:_id', toolApi.getToolId);
router.get('/getTool/all', toolApi.getToolAll);
router.del('/delTool/:_id', toolApi.delTool);
router.post('/rentTool/:_id/:_renterEmail', toolApi.rentTool);
router.post('/editTool/:_id/:_editList', toolApi.editTool);

module.exports = router;
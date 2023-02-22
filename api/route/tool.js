const express = require('express');
const router = express.Router();
const toolApi = require('../controller/toolApi');

router.post('/regTool', toolApi.regTool);
router.get('/getTool/id/:_id', toolApi.getToolId);
router.get('/getTool/all', toolApi.getToolAll);
router.delete('/delTool/:_id', toolApi.delTool);
router.post('/rentTool/:_id/:renterEmail', toolApi.rentTool);
router.post('/editTool/:_id', toolApi.editTool);

module.exports = router;
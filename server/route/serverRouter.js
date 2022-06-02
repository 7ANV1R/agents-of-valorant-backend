const express = require('express');
const router = express.Router();
const agentController = require('../controller/agentController');




// App route
router.get('/allagents', agentController.listofagents)


module.exports = router;
const express = require('express');
const router = express.Router();
const { getRoomMessages } = require('../controllers/messageController');
const { optionalAuth } = require('../middleware/authMiddleware');

router.get('/:roomId', optionalAuth, getRoomMessages);

module.exports = router;

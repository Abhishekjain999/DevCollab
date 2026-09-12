const express = require('express');
const router = express.Router();
const { runCode, submitCode } = require('../controllers/codeController');
const { protect, optionalAuth } = require('../middleware/authMiddleware');
const { executionRateLimiter } = require('../middleware/rateLimitMiddleware');

// Run Code: public / optionalAuth (to test sample cases freely)
router.post('/run', executionRateLimiter, optionalAuth, runCode);

// Submit Code: protected (requires authentication to record submission)
router.post('/submit', executionRateLimiter, protect, submitCode);

module.exports = router;


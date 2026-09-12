const express = require('express');
const router = express.Router();
const {
  getSubmissions,
  getSubmissionById,
  getRoomSubmissions,
} = require('../controllers/submissionController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getSubmissions);
router.get('/:id', protect, getSubmissionById);
router.get('/room/:roomId', protect, getRoomSubmissions);

module.exports = router;

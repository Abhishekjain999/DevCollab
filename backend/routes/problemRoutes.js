const express = require('express');
const router = express.Router();
const {
  getProblems,
  getCategoriesSummary,
  getProblemsByCategory,
  getProblemBySlugOrId,
  createProblem,
  updateProblem,
  deleteProblem,
  getProblemTestCases,
} = require('../controllers/problemController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

// Public routes
router.get('/', getProblems);
router.get('/categories', getCategoriesSummary);
router.get('/category/:category', getProblemsByCategory);
router.get('/:slugOrId', getProblemBySlugOrId);

// Admin-only management routes
router.post('/', protect, authorize('ADMIN'), createProblem);
router.put('/:id', protect, authorize('ADMIN'), updateProblem);
router.delete('/:id', protect, authorize('ADMIN'), deleteProblem);
router.get('/:id/test-cases', protect, authorize('ADMIN'), getProblemTestCases);

module.exports = router;

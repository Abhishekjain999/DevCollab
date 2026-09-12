const express = require('express');
const router = express.Router();
const {
  createRoom,
  getRooms,
  getRoomByRoomId,
  joinRoom,
  leaveRoom,
  updateRoom,
  closeRoom,
  createSnapshot,
  getSnapshots,
  restoreSnapshot,
} = require('../controllers/roomController');
const { protect, optionalAuth } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createRoom)
  .get(optionalAuth, getRooms);

router.route('/:roomId')
  .get(optionalAuth, getRoomByRoomId)
  .put(protect, updateRoom)
  .delete(protect, closeRoom);

router.post('/:roomId/join', protect, joinRoom);
router.post('/:roomId/leave', protect, leaveRoom);

// Snapshot routes
router.route('/:roomId/snapshots')
  .post(protect, createSnapshot)
  .get(protect, getSnapshots);

router.post('/:roomId/snapshots/:snapshotId/restore', protect, restoreSnapshot);

module.exports = router;

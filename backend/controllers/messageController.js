const Message = require('../models/Message');
const Room = require('../models/Room');

/**
 * @route   GET /api/messages/:roomId
 * @desc    Get chat message history for a coding room
 * @access  Public / Private
 */
const getRoomMessages = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const cleanRoomId = roomId.trim().toUpperCase();

    const room = await Room.findOne({ roomId: cleanRoomId });
    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found',
      });
    }

    const messages = await Message.find({ room: room._id })
      .populate('sender', 'name email role profileImage')
      .sort({ createdAt: 1 })
      .limit(100);

    return res.status(200).json({
      success: true,
      data: {
        messages,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getRoomMessages };

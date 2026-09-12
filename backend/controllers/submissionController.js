const Submission = require('../models/Submission');
const Room = require('../models/Room');

/**
 * @route   GET /api/submissions
 * @desc    Get user's submission history
 * @access  Private
 */
const getSubmissions = async (req, res, next) => {
  try {
    const { problemId, status, page = 1, limit = 20 } = req.query;
    const query = { user: req.user._id };

    if (problemId) query.problem = problemId;
    if (status) query.status = status.toUpperCase();

    const pageNumber = Math.max(1, parseInt(page, 10));
    const pageSize = Math.min(50, Math.max(1, parseInt(limit, 10)));
    const skip = (pageNumber - 1) * pageSize;

    const [submissions, total] = await Promise.all([
      Submission.find(query)
        .populate('problem', 'title slug difficulty category')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(pageSize),
      Submission.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        submissions,
        pagination: {
          total,
          page: pageNumber,
          pages: Math.ceil(total / pageSize),
          limit: pageSize,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/submissions/:id
 * @desc    Get single submission details (Safely sanitized)
 * @access  Private
 */
const getSubmissionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const submission = await Submission.findById(id)
      .populate('user', 'name email profileImage')
      .populate('problem', 'title slug difficulty category description');

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission record not found',
      });
    }

    // Authorization check: User can view their own; Recruiters/Admins can view if room belongs to them
    const isOwner = submission.user._id.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'ADMIN';
    const isRecruiter = req.user.role === 'RECRUITER';

    if (!isOwner && !isAdmin && !isRecruiter) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to view this submission',
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        submission,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/submissions/room/:roomId
 * @desc    Get all submissions made in a specific room (for Recruiters/Interviewers)
 * @access  Private
 */
const getRoomSubmissions = async (req, res, next) => {
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

    const submissions = await Submission.find({ room: room._id })
      .populate('user', 'name email role profileImage')
      .populate('problem', 'title slug difficulty category')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: {
        roomId: cleanRoomId,
        count: submissions.length,
        submissions,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSubmissions,
  getSubmissionById,
  getRoomSubmissions,
};

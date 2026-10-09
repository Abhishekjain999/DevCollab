const Room = require('../models/Room');
const Problem = require('../models/Problem');
const User = require('../models/User');
const generateRoomId = require('../utils/generateRoomId');
const { allProblems } = require('../seed/problemsData');

/**
 * @route   POST /api/rooms
 * @desc    Create a new coding room (Practice or Interview)
 * @access  Private
 */
const createRoom = async (req, res, next) => {
  try {
    const {
      name,
      description,
      problemId,
      language = 'javascript',
      visibility = 'PUBLIC',
      permission = 'COLLABORATIVE',
      type = 'PRACTICE',
      customCode,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a room name',
      });
    }

    // Find problem (by MongoDB _id, by slug, or by title)
    let problem = null;
    if (problemId) {
      if (typeof problemId === 'string' && problemId.match(/^[0-9a-fA-F]{24}$/)) {
        problem = await Problem.findById(problemId);
      }
      if (!problem) {
        problem = await Problem.findOne({ slug: String(problemId).toLowerCase() });
      }
      if (!problem) {
        problem = await Problem.findOne({ title: new RegExp(`^${problemId}$`, 'i') });
      }
    }

    // Default to two-sum if no problem selected
    if (!problem) {
      problem = await Problem.findOne({ slug: 'two-sum' });
    }

    // Auto-recovery: if DB is unseeded or missing problem, auto-seed it on the fly
    if (!problem && allProblems && allProblems.length > 0) {
      const match = allProblems.find(
        (p) =>
          p.slug === String(problemId || '').toLowerCase() ||
          p.title?.toLowerCase() === String(problemId || '').toLowerCase()
      ) || allProblems[0];

      if (match) {
        let existing = await Problem.findOne({ slug: match.slug });
        if (!existing) {
          existing = await Problem.create(match);
        }
        problem = existing;
      }
    }

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found to initialize room',
      });
    }

    // Determine initial code from starter code or customCode
    const langKey = language.toLowerCase();
    const initialCode = customCode || problem.starterCode?.[langKey] || '// Write your solution here\n';

    // Generate unique room ID
    const prefix = type === 'INTERVIEW' ? 'INT' : 'DEV';
    const roomId = await generateRoomId(prefix);

    // Initial participant role
    const ownerRole = type === 'INTERVIEW' ? 'RECRUITER' : 'OWNER';

    const room = await Room.create({
      roomId,
      name: name.trim(),
      description: description || '',
      owner: req.user._id,
      participants: [
        {
          user: req.user._id,
          role: ownerRole,
          joinedAt: new Date(),
        },
      ],
      problem: problem._id,
      language: langKey,
      visibility: visibility.toUpperCase() === 'PRIVATE' ? 'PRIVATE' : 'PUBLIC',
      permission: permission.toUpperCase(),
      code: initialCode,
      type: type.toUpperCase() === 'INTERVIEW' ? 'INTERVIEW' : 'PRACTICE',
      isActive: true,
    });

    // Update user stats
    await User.findByIdAndUpdate(req.user._id, {
      $inc: { 'stats.roomsCreated': 1 },
    });

    // Populate problem and owner for response
    const populatedRoom = await Room.findById(room._id)
      .populate('owner', 'name email profileImage role')
      .populate('problem', 'title slug difficulty category description constraints examples starterCode supportedLanguages visibleTestCases tags')
      .populate('participants.user', 'name email profileImage role');

    return res.status(201).json({
      success: true,
      message: 'Room created successfully',
      data: {
        room: populatedRoom,
        roomId: populatedRoom.roomId,
        shareUrl: `/room/${populatedRoom.roomId}`,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/rooms
 * @desc    Get active public rooms or user's rooms
 * @access  Public / Private
 */
const getRooms = async (req, res, next) => {
  try {
    const { myRooms, type, search, page = 1, limit = 20 } = req.query;
    const query = { isActive: true };

    if (myRooms === 'true' && req.user) {
      query.$or = [{ owner: req.user._id }, { 'participants.user': req.user._id }];
    } else {
      query.visibility = 'PUBLIC';
    }

    if (type) {
      query.type = type.toUpperCase();
    }

    if (search) {
      query.name = { $regex: search.trim(), $options: 'i' };
    }

    const pageNumber = Math.max(1, parseInt(page, 10));
    const pageSize = Math.min(50, Math.max(1, parseInt(limit, 10)));
    const skip = (pageNumber - 1) * pageSize;

    const [rooms, total] = await Promise.all([
      Room.find(query)
        .populate('owner', 'name email profileImage role')
        .populate('problem', 'title slug difficulty category tags')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(pageSize),
      Room.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        rooms,
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
 * @route   GET /api/rooms/:roomId
 * @desc    Get room details by Room ID (e.g. DEV-8F3K2A)
 * @access  Public / Private
 */
const getRoomByRoomId = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const cleanRoomId = roomId.trim().toUpperCase();

    const room = await Room.findOne({ roomId: cleanRoomId })
      .populate('owner', 'name email profileImage role bio stats')
      .populate('problem', 'title slug difficulty category description constraints examples starterCode supportedLanguages visibleTestCases tags')
      .populate('participants.user', 'name email profileImage role');

    if (!room) {
      return res.status(404).json({
        success: false,
        message: `Coding room '${cleanRoomId}' not found`,
      });
    }

    if (!room.isActive) {
      return res.status(410).json({
        success: false,
        message: 'This coding room has ended or is no longer active',
        data: { room },
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        room,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/rooms/:roomId/join
 * @desc    Join an active coding room
 * @access  Private
 */
const joinRoom = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const cleanRoomId = roomId.trim().toUpperCase();

    const room = await Room.findOne({ roomId: cleanRoomId });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: `Coding room '${cleanRoomId}' not found`,
      });
    }

    if (!room.isActive) {
      return res.status(410).json({
        success: false,
        message: 'This coding room has ended',
      });
    }

    // Check if user is already in participants
    const isAlreadyParticipant = room.participants.some(
      (p) => p.user.toString() === req.user._id.toString()
    );

    if (!isAlreadyParticipant) {
      let participantRole = 'COLLABORATOR';
      if (room.type === 'INTERVIEW') {
        participantRole = req.user.role === 'RECRUITER' ? 'RECRUITER' : 'CANDIDATE';
      } else if (room.permission === 'VIEW_ONLY') {
        participantRole = 'OBSERVER';
      }

      room.participants.push({
        user: req.user._id,
        role: participantRole,
        joinedAt: new Date(),
      });

      await room.save();

      // Update user stats
      await User.findByIdAndUpdate(req.user._id, {
        $inc: { 'stats.roomsJoined': 1 },
      });
    }

    const populatedRoom = await Room.findById(room._id)
      .populate('owner', 'name email profileImage role')
      .populate('problem', 'title slug difficulty category description constraints examples starterCode supportedLanguages visibleTestCases tags')
      .populate('participants.user', 'name email profileImage role');

    return res.status(200).json({
      success: true,
      message: 'Joined room successfully',
      data: {
        room: populatedRoom,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/rooms/:roomId/leave
 * @desc    Leave coding room
 * @access  Private
 */
const leaveRoom = async (req, res, next) => {
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

    // Filter out user from participants if not owner
    if (room.owner.toString() !== req.user._id.toString()) {
      room.participants = room.participants.filter(
        (p) => p.user.toString() !== req.user._id.toString()
      );
      await room.save();
    }

    return res.status(200).json({
      success: true,
      message: 'Left room successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   PUT /api/rooms/:roomId
 * @desc    Update room settings, code, or active problem
 * @access  Private (Owner / Collaborator depending on permissions)
 */
const updateRoom = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const { name, description, language, permission, code, problemId } = req.body;
    const cleanRoomId = roomId.trim().toUpperCase();

    const room = await Room.findOne({ roomId: cleanRoomId });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found',
      });
    }

    const isOwner = room.owner.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'ADMIN';

    // If updating code only and permission is COLLABORATIVE, allow participants
    const isCodeOnlyUpdate = code !== undefined && !name && !problemId && !permission;

    if (!isOwner && !isAdmin) {
      if (!isCodeOnlyUpdate || room.permission === 'OWNER_ONLY' || room.permission === 'VIEW_ONLY') {
        return res.status(403).json({
          success: false,
          message: 'You do not have permission to modify this room',
        });
      }
    }

    if (name) room.name = name.trim();
    if (description !== undefined) room.description = description;
    if (language) room.language = language.toLowerCase();
    if (permission && (isOwner || isAdmin)) room.permission = permission.toUpperCase();
    if (code !== undefined) room.code = code;

    if (problemId && (isOwner || isAdmin)) {
      let problemDoc = null;
      if (problemId.match(/^[0-9a-fA-F]{24}$/)) {
        problemDoc = await Problem.findById(problemId);
      } else {
        problemDoc = await Problem.findOne({ slug: problemId.toLowerCase() });
      }
      if (problemDoc) {
        room.problem = problemDoc._id;
        // Optionally load starter code if requested
        if (req.body.resetCodeToStarter) {
          const lang = room.language || 'javascript';
          room.code = problemDoc.starterCode?.[lang] || '';
        }
      }
    }

    await room.save();

    const updatedRoom = await Room.findById(room._id)
      .populate('owner', 'name email profileImage role')
      .populate('problem', 'title slug difficulty category description constraints examples starterCode supportedLanguages visibleTestCases tags')
      .populate('participants.user', 'name email profileImage role');

    return res.status(200).json({
      success: true,
      message: 'Room updated successfully',
      data: {
        room: updatedRoom,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   DELETE /api/rooms/:roomId
 * @desc    End/Close coding room (Owner or Admin)
 * @access  Private
 */
const closeRoom = async (req, res, next) => {
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

    const isOwner = room.owner.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'ADMIN';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Only the room owner can end this coding room',
      });
    }

    room.isActive = false;
    room.endedAt = new Date();
    await room.save();

    return res.status(200).json({
      success: true,
      message: 'Coding room ended successfully',
      data: {
        room,
      },
    });
  } catch (error) {
    next(error);
  }
};

const CodeSnapshot = require('../models/CodeSnapshot');

/**
 * @route   POST /api/rooms/:roomId/snapshots
 * @desc    Save a manual code snapshot version
 * @access  Private
 */
const createSnapshot = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const { code, language, description } = req.body;
    const cleanRoomId = roomId.trim().toUpperCase();

    const room = await Room.findOne({ roomId: cleanRoomId });
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    // Determine next version number
    const lastSnapshot = await CodeSnapshot.findOne({ room: room._id }).sort({ version: -1 });
    const nextVersion = lastSnapshot ? lastSnapshot.version + 1 : 1;

    const snapshot = await CodeSnapshot.create({
      room: room._id,
      user: req.user._id,
      language: language || room.language,
      code: code !== undefined ? code : room.code,
      version: nextVersion,
      description: description || `Version ${nextVersion}`,
    });

    const populatedSnapshot = await CodeSnapshot.findById(snapshot._id).populate('user', 'name email profileImage');

    return res.status(201).json({
      success: true,
      message: `Snapshot version ${nextVersion} saved successfully`,
      data: { snapshot: populatedSnapshot },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/rooms/:roomId/snapshots
 * @desc    Get all snapshots for a room
 * @access  Private
 */
const getSnapshots = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const cleanRoomId = roomId.trim().toUpperCase();

    const room = await Room.findOne({ roomId: cleanRoomId });
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    const snapshots = await CodeSnapshot.find({ room: room._id })
      .populate('user', 'name email profileImage')
      .sort({ version: -1 });

    return res.status(200).json({
      success: true,
      data: { snapshots },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/rooms/:roomId/snapshots/:snapshotId/restore
 * @desc    Restore a code snapshot to current room code
 * @access  Private
 */
const restoreSnapshot = async (req, res, next) => {
  try {
    const { roomId, snapshotId } = req.params;
    const cleanRoomId = roomId.trim().toUpperCase();

    const [room, snapshot] = await Promise.all([
      Room.findOne({ roomId: cleanRoomId }),
      CodeSnapshot.findById(snapshotId),
    ]);

    if (!room || !snapshot) {
      return res.status(404).json({ success: false, message: 'Room or snapshot not found' });
    }

    room.code = snapshot.code;
    room.language = snapshot.language;
    await room.save();

    return res.status(200).json({
      success: true,
      message: `Restored room code to Version ${snapshot.version}`,
      data: {
        code: room.code,
        language: room.language,
        version: snapshot.version,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
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
};


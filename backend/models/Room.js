const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    role: {
      type: String,
      enum: ['OWNER', 'COLLABORATOR', 'OBSERVER', 'CANDIDATE', 'RECRUITER'],
      default: 'COLLABORATOR',
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const roomSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: [true, 'Room ID is required'],
      unique: true,
      uppercase: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: [true, 'Room name is required'],
      trim: true,
      maxlength: [80, 'Room name cannot exceed 80 characters'],
    },
    description: {
      type: String,
      default: '',
      maxlength: [300, 'Description cannot exceed 300 characters'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    participants: {
      type: [participantSchema],
      default: [],
    },
    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problem',
      required: true,
      index: true,
    },
    language: {
      type: String,
      enum: ['javascript', 'python', 'java', 'cpp', 'c'],
      default: 'javascript',
    },
    visibility: {
      type: String,
      enum: ['PUBLIC', 'PRIVATE'],
      default: 'PUBLIC',
      index: true,
    },
    permission: {
      type: String,
      enum: ['COLLABORATIVE', 'OWNER_ONLY', 'VIEW_ONLY'],
      default: 'COLLABORATIVE',
    },
    code: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      enum: ['PRACTICE', 'INTERVIEW'],
      default: 'PRACTICE',
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    endedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;

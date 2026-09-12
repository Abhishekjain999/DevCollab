const mongoose = require('mongoose');

const codingSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Session must belong to a user'],
      index: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Session must reference a room'],
      index: true,
    },
    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problem',
      required: [true, 'Session must reference a problem'],
      index: true,
    },
    language: {
      type: String,
      required: true,
      enum: ['javascript', 'python', 'java', 'cpp', 'c'],
    },
    code: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 0, // Duration in seconds
    },
    status: {
      type: String,
      enum: ['SAVED', 'IN_PROGRESS', 'COMPLETED', 'ABANDONED'],
      default: 'SAVED',
      index: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    notes: {
      type: String,
      default: '',
      maxlength: [1000, 'Notes cannot exceed 1000 characters'],
    },
  },
  {
    timestamps: true,
  }
);

const CodingSession = mongoose.model('CodingSession', codingSessionSchema);

module.exports = CodingSession;

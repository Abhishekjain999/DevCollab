const mongoose = require('mongoose');

const safeTestResultSchema = new mongoose.Schema(
  {
    testNumber: { type: Number, required: true },
    passed: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ['PASSED', 'FAILED', 'TIME_LIMIT_EXCEEDED', 'RUNTIME_ERROR'],
      default: 'PASSED',
    },
    runtime: { type: Number, default: 0 },
    // Notice: Raw hidden input and expectedOutput are deliberately NOT stored here
  },
  { _id: false }
);

const submissionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Submission must belong to a user'],
      index: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      default: null,
      index: true,
    },
    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problem',
      required: [true, 'Submission must reference a problem'],
      index: true,
    },
    language: {
      type: String,
      required: true,
      enum: ['javascript', 'python', 'java', 'cpp', 'c'],
    },
    code: {
      type: String,
      required: [true, 'Submitted code is required'],
    },
    status: {
      type: String,
      enum: [
        'ACCEPTED',
        'WRONG_ANSWER',
        'RUNTIME_ERROR',
        'COMPILE_ERROR',
        'TIME_LIMIT_EXCEEDED',
        'MEMORY_LIMIT_EXCEEDED',
        'EXECUTION_ERROR',
      ],
      required: true,
      index: true,
    },
    passedTests: {
      type: Number,
      required: true,
      default: 0,
    },
    totalTests: {
      type: Number,
      required: true,
      default: 0,
    },
    runtime: {
      type: Number,
      default: 0, // Execution runtime in ms
    },
    memory: {
      type: Number,
      default: 0, // Memory in KB
    },
    errorMessage: {
      type: String,
      default: null,
    },
    testResults: {
      type: [safeTestResultSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for user problem submission history queries
submissionSchema.index({ user: 1, problem: 1, createdAt: -1 });

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;

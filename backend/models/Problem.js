const mongoose = require('mongoose');

const problemExampleSchema = new mongoose.Schema(
  {
    input: { type: String, required: true },
    output: { type: String, required: true },
    explanation: { type: String, default: '' },
  },
  { _id: false }
);

const testCaseSchema = new mongoose.Schema(
  {
    input: { type: mongoose.Schema.Types.Mixed, required: true },
    expectedOutput: { type: mongoose.Schema.Types.Mixed, required: true },
    explanation: { type: String, default: '' },
  },
  { _id: true }
);

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Problem title is required'],
      trim: true,
      unique: true,
      maxlength: [120, 'Title cannot exceed 120 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Problem slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    difficulty: {
      type: String,
      required: [true, 'Difficulty is required'],
      enum: ['EASY', 'MEDIUM', 'HARD'],
      uppercase: true,
      index: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Arrays',
        'Strings',
        'Dynamic Programming',
        'Graphs',
        'Trees',
        'HashMap / HashSet',
        'Sliding Window',
        'Other',
      ],
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    constraints: {
      type: [String],
      default: [],
    },
    examples: {
      type: [problemExampleSchema],
      default: [],
    },
    starterCode: {
      javascript: { type: String, default: '' },
      python: { type: String, default: '' },
      java: { type: String, default: '' },
      cpp: { type: String, default: '' },
      c: { type: String, default: '' },
    },
    supportedLanguages: {
      type: [String],
      default: ['javascript', 'python', 'java', 'cpp', 'c'],
    },
    visibleTestCases: {
      type: [testCaseSchema],
      default: [],
    },
    hiddenTestCases: {
      type: [testCaseSchema],
      default: [],
      select: false, // CRITICAL SECURITY: Never return hidden test cases by default
    },
    tags: {
      type: [String],
      index: true,
      default: [],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Method to get problem with hidden test cases explicitly for evaluation engine / admin
problemSchema.statics.findWithHiddenTests = function (filter) {
  return this.findOne(filter).select('+hiddenTestCases');
};

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;

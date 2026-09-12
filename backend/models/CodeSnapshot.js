const mongoose = require('mongoose');

const codeSnapshotSchema = new mongoose.Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Snapshot must be associated with a room'],
      index: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Snapshot must have a creator user'],
    },
    language: {
      type: String,
      required: true,
      enum: ['javascript', 'python', 'java', 'cpp', 'c'],
    },
    code: {
      type: String,
      required: [true, 'Code content is required for a snapshot'],
    },
    version: {
      type: Number,
      required: [true, 'Version number is required'],
    },
    description: {
      type: String,
      default: 'Manual Snapshot',
      maxlength: [200, 'Description cannot exceed 200 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Compound index to ensure uniqueness of version per room
codeSnapshotSchema.index({ room: 1, version: 1 }, { unique: true });

const CodeSnapshot = mongoose.model('CodeSnapshot', codeSnapshotSchema);

module.exports = CodeSnapshot;

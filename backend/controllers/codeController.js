const Problem = require('../models/Problem');
const Room = require('../models/Room');
const Submission = require('../models/Submission');
const User = require('../models/User');
const {
  evaluateVisibleTests,
  evaluateSubmission,
} = require('../services/evaluationService');

/**
 * @route   POST /api/code/run
 * @desc    Execute code against sample/visible test cases only
 * @access  Public / Private
 */
const runCode = async (req, res, next) => {
  try {
    const { problemId, language = 'javascript', code } = req.body;

    if (!problemId) {
      return res.status(400).json({
        success: false,
        message: 'Please specify a problem to run against',
      });
    }

    if (!code || !code.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Code cannot be empty',
      });
    }

    // Lookup problem
    let query = { slug: problemId };
    if (problemId.match(/^[0-9a-fA-F]{24}$/)) {
      query = { _id: problemId };
    }

    const problem = await Problem.findOne(query);
    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
    }

    const result = await evaluateVisibleTests(problem, language, code);

    return res.status(200).json({
      success: true,
      message: result.allPassed ? 'All sample tests passed!' : 'Some sample tests failed',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/code/submit
 * @desc    Submit solution & evaluate against visible + hidden test suites
 * @access  Private
 */
const submitCode = async (req, res, next) => {
  try {
    const { problemId, roomId, language = 'javascript', code } = req.body;

    if (!problemId) {
      return res.status(400).json({
        success: false,
        message: 'Please specify a problem to submit for',
      });
    }

    if (!code || !code.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Code cannot be empty',
      });
    }

    // Lookup problem
    let problemQuery = { slug: problemId };
    if (problemId.match(/^[0-9a-fA-F]{24}$/)) {
      problemQuery = { _id: problemId };
    }
    const problem = await Problem.findOne(problemQuery);
    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
    }

    // Optional Room lookup
    let roomDoc = null;
    if (roomId) {
      const cleanRoomId = roomId.trim().toUpperCase();
      roomDoc = await Room.findOne({ roomId: cleanRoomId });
    }

    // Evaluate against complete hidden test cases
    const evaluation = await evaluateSubmission(problem._id, language, code);

    // Save Submission to Database
    const submission = await Submission.create({
      user: req.user?._id,
      room: roomDoc ? roomDoc._id : null,
      problem: problem._id,
      language: language.toLowerCase(),
      code,
      status: evaluation.status,
      passedTests: evaluation.passedTests,
      totalTests: evaluation.totalTests,
      runtime: evaluation.runtime,
      memory: evaluation.memory,
      errorMessage: evaluation.errorMessage,
      testResults: evaluation.testResults,
    });

    // Update User Stats
    if (req.user?._id) {
      const isAccepted = evaluation.status === 'ACCEPTED';
      await User.findByIdAndUpdate(req.user._id, {
        $inc: {
          'stats.totalSubmissions': 1,
          'stats.acceptedSubmissions': isAccepted ? 1 : 0,
          'stats.problemsSolved': isAccepted ? 1 : 0,
        },
      });
    }

    return res.status(201).json({
      success: true,
      message: `Submission evaluated: ${evaluation.status}`,
      data: {
        submissionId: submission._id,
        status: evaluation.status,
        passedTests: evaluation.passedTests,
        totalTests: evaluation.totalTests,
        runtime: evaluation.runtime,
        memory: evaluation.memory,
        errorMessage: evaluation.errorMessage,
        testResults: evaluation.testResults,
        createdAt: submission.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  runCode,
  submitCode,
};

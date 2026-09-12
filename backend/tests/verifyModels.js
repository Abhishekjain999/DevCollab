const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {
  User,
  Problem,
  Room,
  Message,
  CodingSession,
  CodeSnapshot,
  Submission,
} = require('../models');

dotenv.config();

const verifyModels = async () => {
  console.log('--- Starting Phase 2 Database Models Verification ---');
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devcollab');
    console.log('✓ Connected to MongoDB');

    // 1. Verify User Model & Password Hashing
    console.log('\n[1/7] Testing User Model...');
    const testEmail = `test_${Date.now()}@devcollab.io`;
    const user = new User({
      name: 'Abhishek Jain',
      email: testEmail,
      password: 'SuperSecretPassword123!',
      role: 'ADMIN',
    });
    await user.save();
    console.log(`✓ User created with ID: ${user._id}`);
    
    // Verify password is not plain text
    if (user.password === 'SuperSecretPassword123!') {
      throw new Error('Password was not hashed!');
    }
    console.log('✓ Password properly hashed with bcrypt');

    // Verify matchPassword method
    const isMatch = await user.matchPassword('SuperSecretPassword123!');
    if (!isMatch) {
      throw new Error('matchPassword failed for correct password');
    }
    console.log('✓ matchPassword method verified');

    // Verify toJSON removes password and __v
    const userJson = user.toJSON();
    if (userJson.password) {
      throw new Error('toJSON leaked password hash!');
    }
    console.log('✓ toJSON safely stripped password hash');

    // 2. Verify Problem Model & Hidden Test Case Protection
    console.log('\n[2/7] Testing Problem Model...');
    const problem = new Problem({
      title: `Two Sum Sample ${Date.now()}`,
      slug: `two-sum-${Date.now()}`,
      difficulty: 'EASY',
      category: 'Arrays',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9'],
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
        },
      ],
      starterCode: {
        javascript: 'function twoSum(nums, target) {\n  \n}',
        python: 'def twoSum(nums, target):\n    pass',
      },
      visibleTestCases: [
        {
          input: { nums: [2, 7, 11, 15], target: 9 },
          expectedOutput: [0, 1],
        },
      ],
      hiddenTestCases: [
        {
          input: { nums: [3, 2, 4], target: 6 },
          expectedOutput: [1, 2],
        },
        {
          input: { nums: [3, 3], target: 6 },
          expectedOutput: [0, 1],
        },
      ],
      tags: ['Array', 'Hash Table'],
      createdBy: user._id,
    });
    await problem.save();
    console.log(`✓ Problem created with ID: ${problem._id}`);

    // Verify standard find excludes hidden test cases
    const fetchedProblem = await Problem.findById(problem._id);
    if (fetchedProblem.hiddenTestCases && fetchedProblem.hiddenTestCases.length > 0) {
      throw new Error('CRITICAL SECURITY FLAW: hiddenTestCases returned by default findById!');
    }
    console.log('✓ Default Problem query strictly excludes hiddenTestCases');

    // Verify findWithHiddenTests retrieves hidden test cases for evaluation engine
    const problemWithHidden = await Problem.findWithHiddenTests({ _id: problem._id });
    if (!problemWithHidden.hiddenTestCases || problemWithHidden.hiddenTestCases.length !== 2) {
      throw new Error('findWithHiddenTests failed to load hidden test cases');
    }
    console.log('✓ findWithHiddenTests correctly loads hidden test cases for internal engine');

    // 3. Verify Room Model
    console.log('\n[3/7] Testing Room Model...');
    const roomId = `DEV-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const room = new Room({
      roomId: roomId,
      name: 'Interview Prep Room',
      owner: user._id,
      problem: problem._id,
      language: 'javascript',
      permission: 'COLLABORATIVE',
      participants: [{ user: user._id, role: 'OWNER' }],
      code: 'function twoSum(nums, target) {\n  // live code here\n}',
    });
    await room.save();
    console.log(`✓ Room created with roomId: ${room.roomId}`);

    // 4. Verify Message Model
    console.log('\n[4/7] Testing Message Model...');
    const message = new Message({
      room: room._id,
      sender: user._id,
      message: "Let's use a HashMap for O(n) lookup time.",
    });
    await message.save();
    console.log(`✓ Message created with ID: ${message._id}`);

    // 5. Verify CodeSnapshot Model
    console.log('\n[5/7] Testing CodeSnapshot Model...');
    const snapshot = new CodeSnapshot({
      room: room._id,
      user: user._id,
      language: 'javascript',
      code: 'function twoSum(nums, target) { const map = new Map(); }',
      version: 1,
      description: 'Initial hash map draft',
    });
    await snapshot.save();
    console.log(`✓ CodeSnapshot created for version: ${snapshot.version}`);

    // 6. Verify CodingSession Model
    console.log('\n[6/7] Testing CodingSession Model...');
    const session = new CodingSession({
      user: user._id,
      room: room._id,
      problem: problem._id,
      language: 'javascript',
      code: 'function twoSum(nums, target) { return [0, 1]; }',
      duration: 180,
      status: 'SAVED',
      participants: [user._id],
      notes: 'Completed in 3 minutes using hash map approach.',
    });
    await session.save();
    console.log(`✓ CodingSession created with ID: ${session._id}`);

    // 7. Verify Submission Model
    console.log('\n[7/7] Testing Submission Model...');
    const submission = new Submission({
      user: user._id,
      room: room._id,
      problem: problem._id,
      language: 'javascript',
      code: 'function twoSum(nums, target) { const map = new Map(); for (let i = 0; i < nums.length; i++) { const diff = target - nums[i]; if (map.has(diff)) return [map.get(diff), i]; map.set(nums[i], i); } }',
      status: 'ACCEPTED',
      passedTests: 10,
      totalTests: 10,
      runtime: 38,
      memory: 14200,
      testResults: [
        { testNumber: 1, passed: true, status: 'PASSED', runtime: 12 },
        { testNumber: 2, passed: true, status: 'PASSED', runtime: 15 },
      ],
    });
    await submission.save();
    console.log(`✓ Submission created with ID: ${submission._id} (${submission.status})`);

    // Clean up test documents
    console.log('\nCleaning up verification records...');
    await Submission.findByIdAndDelete(submission._id);
    await CodingSession.findByIdAndDelete(session._id);
    await CodeSnapshot.findByIdAndDelete(snapshot._id);
    await Message.findByIdAndDelete(message._id);
    await Room.findByIdAndDelete(room._id);
    await Problem.findByIdAndDelete(problem._id);
    await User.findByIdAndDelete(user._id);
    console.log('✓ Cleanup completed');

    console.log('\n==================================================');
    console.log('  ALL 7 MONGOOSE MODELS VERIFIED SUCCESSFULLY! 🎉');
    console.log('==================================================');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Verification Failed:', error);
    process.exit(1);
  }
};

verifyModels();

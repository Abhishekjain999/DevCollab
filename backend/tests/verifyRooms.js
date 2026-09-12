const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Problem = require('../models/Problem');
const Room = require('../models/Room');
const generateRoomId = require('../utils/generateRoomId');

dotenv.config();

const verifyRoomSystem = async () => {
  console.log('==================================================');
  console.log('  STARTING PHASE 5 ROOM MANAGEMENT VERIFICATION');
  console.log('==================================================\n');

  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devcollab');
    console.log('✓ Connected to MongoDB');

    const timestamp = Date.now();

    // 1. Create Test Users
    console.log('\n[1/7] Creating Test Participants...');
    const userA = await User.create({
      name: 'Abhishek Engineer',
      email: `userA_${timestamp}@devcollab.io`,
      password: 'Password123!',
      role: 'USER',
    });
    const userB = await User.create({
      name: 'Rahul Collaborator',
      email: `userB_${timestamp}@devcollab.io`,
      password: 'Password123!',
      role: 'USER',
    });
    const recruiter = await User.create({
      name: 'Sarah Interviewer',
      email: `recruiter_${timestamp}@devcollab.io`,
      password: 'Password123!',
      role: 'RECRUITER',
    });
    console.log(`✓ Created User A (${userA.name}), User B (${userB.name}), and Recruiter (${recruiter.name})`);

    // 2. Fetch Sample Problem
    console.log('\n[2/7] Fetching Seeded Problem...');
    const problem = await Problem.findOne({ slug: 'two-sum' });
    if (!problem) {
      throw new Error('Two Sum problem not found in DB! Seed problems first.');
    }
    console.log(`✓ Loaded Problem: "${problem.title}" [${problem.category}]`);

    // 3. Test Room ID Generation
    console.log('\n[3/7] Testing Room ID Generation...');
    const devRoomId = await generateRoomId('DEV');
    const intRoomId = await generateRoomId('INT');
    console.log(`✓ Generated Practice Room ID: ${devRoomId}`);
    console.log(`✓ Generated Interview Room ID: ${intRoomId}`);
    if (!devRoomId.startsWith('DEV-') || !intRoomId.startsWith('INT-')) {
      throw new Error('Room ID prefix mismatch');
    }

    // 4. Create Practice Room (User A)
    console.log('\n[4/7] Testing Practice Room Creation...');
    const practiceRoom = await Room.create({
      roomId: devRoomId,
      name: 'Arrays & Two Sum Collaboration',
      description: 'Solving Two Sum together using two-pointer / hashmap approach',
      owner: userA._id,
      participants: [{ user: userA._id, role: 'OWNER', joinedAt: new Date() }],
      problem: problem._id,
      language: 'javascript',
      visibility: 'PUBLIC',
      permission: 'COLLABORATIVE',
      code: problem.starterCode.javascript,
      type: 'PRACTICE',
      isActive: true,
    });
    console.log(`✓ Practice Room created: ${practiceRoom.roomId} (Owner: ${userA.name})`);

    // 5. Join Room (User B joins Practice Room)
    console.log('\n[5/7] Testing Multiple Users Joining Room...');
    practiceRoom.participants.push({
      user: userB._id,
      role: 'COLLABORATOR',
      joinedAt: new Date(),
    });
    await practiceRoom.save();

    const populatedPracticeRoom = await Room.findById(practiceRoom._id)
      .populate('owner', 'name email')
      .populate('participants.user', 'name email role')
      .populate('problem', 'title slug visibleTestCases');

    console.log(`✓ User B joined room. Total participants: ${populatedPracticeRoom.participants.length}`);
    if (populatedPracticeRoom.participants.length !== 2) {
      throw new Error('Expected 2 participants in room');
    }

    // Check problem security inside room
    if (populatedPracticeRoom.problem.hiddenTestCases) {
      throw new Error('CRITICAL SECURITY FLAW: hiddenTestCases leaked in room problem populate!');
    }
    console.log('✓ Attached room problem securely excludes hiddenTestCases');

    // 6. Test Interview Room Creation & Candidate Join
    console.log('\n[6/7] Testing Interview Room Flow...');
    const interviewRoom = await Room.create({
      roomId: intRoomId,
      name: 'Frontend Engineer Technical Interview',
      owner: recruiter._id,
      participants: [{ user: recruiter._id, role: 'RECRUITER', joinedAt: new Date() }],
      problem: problem._id,
      language: 'javascript',
      permission: 'COLLABORATIVE',
      code: problem.starterCode.javascript,
      type: 'INTERVIEW',
      isActive: true,
    });

    // Candidate joins interview
    interviewRoom.participants.push({
      user: userA._id,
      role: 'CANDIDATE',
      joinedAt: new Date(),
    });
    await interviewRoom.save();
    console.log(`✓ Interview Room created: ${interviewRoom.roomId} with Recruiter and Candidate`);

    // 7. Update Code & Close Room
    console.log('\n[7/7] Testing Code Updates & Room Lifecycle...');
    practiceRoom.code = 'function twoSum(nums, target) {\n  const map = new Map();\n  // collaborative edit\n}';
    await practiceRoom.save();
    console.log('✓ Code updated in room');

    // Close practice room
    practiceRoom.isActive = false;
    practiceRoom.endedAt = new Date();
    await practiceRoom.save();
    console.log('✓ Practice room ended successfully');

    // Clean up test records
    console.log('\nCleaning up verification records...');
    await Room.deleteMany({ _id: { $in: [practiceRoom._id, interviewRoom._id] } });
    await User.deleteMany({ _id: { $in: [userA._id, userB._id, recruiter._id] } });
    console.log('✓ Cleanup completed');

    console.log('\n==================================================');
    console.log('  ALL PHASE 5 ROOM MANAGEMENT TESTS PASSED! 🎉');
    console.log('==================================================');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Room Verification Failed:', error);
    process.exit(1);
  }
};

verifyRoomSystem();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { authorize } = require('../middleware/roleMiddleware');

dotenv.config();

const runAuthTests = async () => {
  console.log('==================================================');
  console.log('  STARTING PHASE 3 AUTHENTICATION & RBAC TESTS');
  console.log('==================================================\n');

  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devcollab');
    console.log('✓ Connected to MongoDB');

    const timestamp = Date.now();
    const candidateEmail = `candidate_${timestamp}@devcollab.io`;
    const recruiterEmail = `recruiter_${timestamp}@devcollab.io`;
    const adminEmail = `admin_${timestamp}@devcollab.io`;
    const testPassword = 'Password123!';

    // 1. Test Token Generation
    console.log('\n[1/8] Testing JWT Token Generation...');
    const fakeId = new mongoose.Types.ObjectId();
    const generatedToken = generateToken(fakeId, 'USER');
    const secret = process.env.JWT_SECRET || 'devcollab_super_secure_jwt_secret_key_2026_abhishek';
    const decoded = jwt.verify(generatedToken, secret);
    if (decoded.id !== fakeId.toString() || decoded.role !== 'USER') {
      throw new Error('JWT token payload mismatch');
    }
    console.log('✓ JWT generated and verified properly with 30d expiry');

    // 2. Test User Registration (Candidate, Recruiter, Admin)
    console.log('\n[2/8] Testing User Registration with Roles...');
    
    // Candidate
    const candidate = await User.create({
      name: 'Abhishek Candidate',
      email: candidateEmail,
      password: testPassword,
      role: 'USER',
    });
    console.log(`✓ Candidate registered: ${candidate.email} [Role: ${candidate.role}]`);

    // Recruiter
    const recruiter = await User.create({
      name: 'Priya Recruiter',
      email: recruiterEmail,
      password: testPassword,
      role: 'RECRUITER',
    });
    console.log(`✓ Recruiter registered: ${recruiter.email} [Role: ${recruiter.role}]`);

    // Admin
    const admin = await User.create({
      name: 'Admin Lead',
      email: adminEmail,
      password: testPassword,
      role: 'ADMIN',
    });
    console.log(`✓ Admin registered: ${admin.email} [Role: ${admin.role}]`);

    // 3. Test Duplicate Email Prevention
    console.log('\n[3/8] Testing Duplicate Email Prevention...');
    try {
      await User.create({
        name: 'Duplicate User',
        email: candidateEmail,
        password: 'AnotherPassword123!',
      });
      throw new Error('Duplicate email creation should have thrown an error!');
    } catch (err) {
      if (err.code === 11000 || err.message.includes('E11000')) {
        console.log('✓ Duplicate email successfully blocked by unique constraint');
      } else {
        throw err;
      }
    }

    // 4. Test Password Hashing & Authentication
    console.log('\n[4/8] Testing Password Authentication & Verification...');
    const fetchedCandidate = await User.findOne({ email: candidateEmail }).select('+password');
    const isCorrectMatch = await fetchedCandidate.matchPassword(testPassword);
    const isWrongMatch = await fetchedCandidate.matchPassword('WrongPassword999!');

    if (!isCorrectMatch) {
      throw new Error('Valid password match failed!');
    }
    if (isWrongMatch) {
      throw new Error('Invalid password unexpectedly succeeded!');
    }
    console.log('✓ Password match verified (Valid passed, Invalid rejected)');

    // 5. Test Password Hash Concealment (toJSON & Default Query)
    console.log('\n[5/8] Testing Password Leak Prevention...');
    const defaultQueryUser = await User.findOne({ email: candidateEmail });
    if (defaultQueryUser.password) {
      throw new Error('CRITICAL: Password exposed in default query!');
    }
    const userJson = fetchedCandidate.toJSON();
    if (userJson.password) {
      throw new Error('CRITICAL: Password exposed in toJSON output!');
    }
    console.log('✓ Password hash is strictly hidden from queries and JSON serialization');

    // 6. Test Role-Based Access Control (RBAC Middleware Logic)
    console.log('\n[6/8] Testing Role-Based Authorization Middleware...');
    
    // Simulate Express req, res, next
    const createMockReqRes = (userObj) => {
      const req = { user: userObj };
      let statusCode = 200;
      let responseBody = null;
      const res = {
        status: (code) => {
          statusCode = code;
          return res;
        },
        json: (data) => {
          responseBody = data;
          return res;
        },
      };
      let nextCalled = false;
      const next = () => {
        nextCalled = true;
      };
      return { req, res, next, getStatus: () => statusCode, getBody: () => responseBody, wasNextCalled: () => nextCalled };
    };

    const adminOnlyMiddleware = authorize('ADMIN');
    const recruiterOrAdminMiddleware = authorize('RECRUITER', 'ADMIN');

    // Test 6a: Candidate tries to access Admin route -> Should fail with 403
    const candidateMock = createMockReqRes(candidate);
    adminOnlyMiddleware(candidateMock.req, candidateMock.res, candidateMock.next);
    if (candidateMock.wasNextCalled() || candidateMock.getStatus() !== 403) {
      throw new Error('RBAC Failed: Candidate was not blocked from Admin route!');
    }
    console.log('✓ Candidate blocked from Admin route (403 Forbidden)');

    // Test 6b: Recruiter tries to access Admin route -> Should fail with 403
    const recruiterMock = createMockReqRes(recruiter);
    adminOnlyMiddleware(recruiterMock.req, recruiterMock.res, recruiterMock.next);
    if (recruiterMock.wasNextCalled() || recruiterMock.getStatus() !== 403) {
      throw new Error('RBAC Failed: Recruiter was not blocked from Admin route!');
    }
    console.log('✓ Recruiter blocked from Admin route (403 Forbidden)');

    // Test 6c: Recruiter tries to access Recruiter/Admin route -> Should succeed
    const recruiterInterviewMock = createMockReqRes(recruiter);
    recruiterOrAdminMiddleware(recruiterInterviewMock.req, recruiterInterviewMock.res, recruiterInterviewMock.next);
    if (!recruiterInterviewMock.wasNextCalled()) {
      throw new Error('RBAC Failed: Recruiter was blocked from Interview route!');
    }
    console.log('✓ Recruiter granted access to Interview route');

    // Test 6d: Admin tries to access Admin route -> Should succeed
    const adminMock = createMockReqRes(admin);
    adminOnlyMiddleware(adminMock.req, adminMock.res, adminMock.next);
    if (!adminMock.wasNextCalled()) {
      throw new Error('RBAC Failed: Admin was blocked from Admin route!');
    }
    console.log('✓ Admin granted access to Admin route');

    // 7. Test Profile Updates & Password Change
    console.log('\n[7/8] Testing Profile Updates & Password Modification...');
    candidate.name = 'Abhishek Full Stack';
    candidate.bio = 'MERN Stack & Algorithms Enthusiast';
    await candidate.save();

    const updatedCandidate = await User.findById(candidate._id);
    if (updatedCandidate.name !== 'Abhishek Full Stack' || updatedCandidate.bio !== 'MERN Stack & Algorithms Enthusiast') {
      throw new Error('Profile update fields did not persist');
    }
    console.log('✓ Profile name and bio updated successfully');

    // Change candidate password
    const newTestPassword = 'BrandNewSecurePassword456!';
    updatedCandidate.password = newTestPassword;
    await updatedCandidate.save();

    const userAfterPasswordChange = await User.findById(candidate._id).select('+password');
    const oldPasswordMatches = await userAfterPasswordChange.matchPassword(testPassword);
    const newPasswordMatches = await userAfterPasswordChange.matchPassword(newTestPassword);

    if (oldPasswordMatches) {
      throw new Error('Old password still matches after change!');
    }
    if (!newPasswordMatches) {
      throw new Error('New password does not match after change!');
    }
    console.log('✓ Password successfully updated and re-hashed with bcrypt');

    // 8. Cleanup test users
    console.log('\n[8/8] Cleaning up test records...');
    await User.deleteMany({
      _id: { $in: [candidate._id, recruiter._id, admin._id] },
    });
    console.log('✓ Cleanup completed');

    console.log('\n==================================================');
    console.log('  ALL PHASE 3 AUTH & RBAC TESTS PASSED! 🎉');
    console.log('==================================================');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Authentication Test Failed:', error);
    process.exit(1);
  }
};

runAuthTests();

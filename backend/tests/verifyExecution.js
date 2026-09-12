const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Problem = require('../models/Problem');
const Submission = require('../models/Submission');
const {
  evaluateVisibleTests,
  evaluateSubmission,
} = require('../services/evaluationService');

dotenv.config();

const verifyCodeExecutionAndSubmission = async () => {
  console.log('==================================================');
  console.log('  STARTING PHASE 9 & 10 CODE EXECUTION & SUBMISSION TESTS');
  console.log('==================================================\n');

  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devcollab');
    console.log('✓ Connected to MongoDB');

    const timestamp = Date.now();
    const user = await User.create({
      name: 'Algorithm Tester',
      email: `tester_${timestamp}@devcollab.io`,
      password: 'Password123!',
      role: 'USER',
    });

    const problem = await Problem.findOne({ slug: 'two-sum' });
    if (!problem) throw new Error('Two Sum problem not found in database');
    console.log(`✓ Loaded Target Problem: "${problem.title}"`);

    // 1. Test RUN CODE with Correct JavaScript Solution (Visible Tests)
    console.log('\n[1/6] Testing "Run Code" with Correct Two Sum Solution (JavaScript)...');
    const correctCodeJS = `
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
`;

    const visibleResult = await evaluateVisibleTests(problem, 'javascript', correctCodeJS);
    console.log(`  • Execution Status : ${visibleResult.status}`);
    console.log(`  • Sample Tests     : ${visibleResult.passedTests} / ${visibleResult.totalTests} Passed`);
    console.log(`  • Runtime          : ${visibleResult.runtime} ms`);

    if (!visibleResult.allPassed || visibleResult.passedTests !== visibleResult.totalTests) {
      throw new Error('Correct Two Sum solution failed sample visible tests!');
    }
    console.log('✓ Run Code correctly evaluated visible test cases as PASSED');

    // 2. Test RUN CODE with Incorrect Solution
    console.log('\n[2/6] Testing "Run Code" with Incorrect Solution...');
    const wrongCodeJS = `
function twoSum(nums, target) {
  return [0, 0]; // Intentional wrong answer
}
`;
    const wrongVisibleResult = await evaluateVisibleTests(problem, 'javascript', wrongCodeJS);
    console.log(`  • Result Status: ${wrongVisibleResult.status} (${wrongVisibleResult.passedTests}/${wrongVisibleResult.totalTests} passed)`);
    if (wrongVisibleResult.allPassed) {
      throw new Error('Incorrect solution unexpectedly passed visible tests!');
    }
    console.log('✓ Run Code correctly flagged incorrect solution');

    // 3. Test SUBMISSION with Full Evaluation (Visible + Hidden Test Cases)
    console.log('\n[3/6] Testing "Submit Solution" with Complete Hidden Test Cases...');
    const submissionResult = await evaluateSubmission(problem._id, 'javascript', correctCodeJS);
    console.log(`  • Submission Status: ${submissionResult.status}`);
    console.log(`  • Total Tests Passed: ${submissionResult.passedTests} / ${submissionResult.totalTests}`);
    console.log(`  • Runtime          : ${submissionResult.runtime} ms`);

    if (submissionResult.status !== 'ACCEPTED') {
      throw new Error(`Expected ACCEPTED submission status, got ${submissionResult.status}`);
    }
    console.log('✓ Full test suite evaluated successfully: Status ACCEPTED');

    // 4. Test DOUBLE-BLIND Security Guard
    console.log('\n[4/6] Verifying Double-Blind Hidden Test Case Protection...');
    for (const tr of submissionResult.testResults) {
      if (tr.input !== undefined || tr.expectedOutput !== undefined || tr.actualOutput !== undefined) {
        throw new Error('CRITICAL SECURITY FLAW: Raw input/output data leaked in submission response!');
      }
    }
    console.log('✓ Double-blind security verified: Frontend receives only safe pass/fail test status metrics');

    // 5. Test Python Solution Evaluation
    console.log('\n[5/6] Testing Python 3 Solution Execution...');
    const correctCodePython = `
def twoSum(nums, target):
    lookup = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in lookup:
            return [lookup[diff], i]
        lookup[num] = i
    return []
`;
    const pythonResult = await evaluateVisibleTests(problem, 'python', correctCodePython);
    console.log(`  • Python Result: ${pythonResult.status} (${pythonResult.passedTests}/${pythonResult.totalTests} passed)`);
    if (!pythonResult.allPassed) {
      throw new Error('Python Two Sum solution failed visible tests');
    }
    console.log('✓ Python 3 execution verified successfully');

    // 6. Test Submission Record Persistence in MongoDB
    console.log('\n[6/6] Testing Submission Document Creation...');
    const subDoc = await Submission.create({
      user: user._id,
      problem: problem._id,
      language: 'javascript',
      code: correctCodeJS,
      status: submissionResult.status,
      passedTests: submissionResult.passedTests,
      totalTests: submissionResult.totalTests,
      runtime: submissionResult.runtime,
      memory: submissionResult.memory,
      testResults: submissionResult.testResults,
    });

    console.log(`✓ Submission persisted in DB with ID: ${subDoc._id}`);

    // Cleanup
    await Submission.findByIdAndDelete(subDoc._id);
    await User.findByIdAndDelete(user._id);
    console.log('\n✓ Cleanup completed');

    console.log('\n==================================================');
    console.log('  ALL PHASE 9 & 10 EXECUTION TESTS PASSED! 🎉');
    console.log('==================================================');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Execution Test Failed:', error);
    process.exit(1);
  }
};

verifyCodeExecutionAndSubmission();

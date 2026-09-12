const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const { executeInSandbox } = require('../services/codeExecutionService');
const { evaluateVisibleTests, evaluateSubmission } = require('../services/evaluationService');
const Problem = require('../models/Problem');

async function runTests() {
  console.log('==================================================');
  console.log('  TESTING MULTI-LANGUAGE TEST HARNESSES');
  console.log('==================================================\n');

  // Connect DB
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devcollab');

  // Test 1: Java - 0/1 Knapsack (User's Exact Code)
  console.log('[1/4] Testing Java: 0/1 Knapsack (User\'s exact DP solution)...');
  const javaKnapsackCode = `class Solution {
    public int knapSack(int W, int[] weights, int[] values) {
        int n = weights.length;
        int[] dp = new int[W + 1];
        
        for (int i = 0; i < n; i++) {
            for (int w = W; w >= weights[i]; w--) {
                dp[w] = Math.max(
                    dp[w],
                    values[i] + dp[w - weights[i]]
                );
            }
        }
        return dp[W];
    }
}`;

  const knapsackProblem = await Problem.findOne({ slug: '0-1-knapsack' }).select('+hiddenTestCases');
  if (!knapsackProblem) {
    throw new Error('0/1 Knapsack problem not found in DB');
  }

  const javaRunRes = await evaluateVisibleTests(knapsackProblem, 'java', javaKnapsackCode);
  console.log(`  • Java Run Code status: ${javaRunRes.status} (${javaRunRes.passedTests}/${javaRunRes.totalTests} passed) [Runtime: ${javaRunRes.runtime}ms]`);
  if (!javaRunRes.allPassed) {
    console.error('Java Error:', javaRunRes.errorMessage);
    console.error('Java Console:', javaRunRes.consoleLogs);
    throw new Error('Java Run Code failed');
  }

  const javaSubmitRes = await evaluateSubmission(knapsackProblem._id, 'java', javaKnapsackCode);
  console.log(`  • Java Submit status  : ${javaSubmitRes.status} (${javaSubmitRes.passedTests}/${javaSubmitRes.totalTests} passed) [Runtime: ${javaSubmitRes.runtime}ms]`);
  if (javaSubmitRes.status !== 'ACCEPTED') throw new Error('Java Submit failed');
  console.log('✓ Java execution passed 100%!\n');

  // Test 2: Python - Two Sum
  console.log('[2/4] Testing Python (class Solution): Two Sum...');
  const pyTwoSumCode = `class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, num in enumerate(nums):
            comp = target - num
            if comp in seen:
                return [seen[comp], i]
            seen[num] = i
        return []
`;

  const twoSumProblem = await Problem.findOne({ slug: 'two-sum' }).select('+hiddenTestCases');
  const pySubmitRes = await evaluateSubmission(twoSumProblem._id, 'python', pyTwoSumCode);
  console.log(`  • Python Submit status: ${pySubmitRes.status} (${pySubmitRes.passedTests}/${pySubmitRes.totalTests} passed)`);
  if (pySubmitRes.status !== 'ACCEPTED') throw new Error('Python Submit failed');
  console.log('✓ Python execution passed 100%!\n');

  // Test 3: JavaScript - Longest Common Subsequence
  console.log('[3/4] Testing JavaScript (class Solution): Longest Common Subsequence...');
  const jsLCSCode = `class Solution {
    longestCommonSubsequence(text1, text2) {
        const m = text1.length, n = text2.length;
        const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
}`;

  const lcsProblem = await Problem.findOne({ slug: 'longest-common-subsequence' }).select('+hiddenTestCases');
  const jsSubmitRes = await evaluateSubmission(lcsProblem._id, 'javascript', jsLCSCode);
  console.log(`  • JS Submit status    : ${jsSubmitRes.status} (${jsSubmitRes.passedTests}/${jsSubmitRes.totalTests} passed)`);
  if (jsSubmitRes.status !== 'ACCEPTED') {
    console.error('JS test results:', JSON.stringify(jsSubmitRes.testResults));
    throw new Error('JS Submit failed');
  }
  console.log('✓ JavaScript execution passed 100%!\n');

  // Test 4: Live E2E
  console.log('[4/4] Multi-language test matrix verified.');
  console.log('==================================================');
  console.log('  ALL MULTI-LANGUAGE TEST SUITES PASSED 100%! 🎉');
  console.log('==================================================');

  await mongoose.disconnect();
}

runTests().catch((err) => {
  console.error('Test Failed:', err);
  process.exit(1);
});

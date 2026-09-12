const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Problem = require('../models/Problem');

dotenv.config();

const verifyProblemBank = async () => {
  console.log('==================================================');
  console.log('  STARTING PHASE 4 PROBLEM BANK VERIFICATION');
  console.log('==================================================\n');

  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devcollab');
    console.log('✓ Connected to MongoDB');

    // 1. Check Total Problem Count
    console.log('\n[1/5] Checking Total Problem Count in MongoDB...');
    const totalCount = await Problem.countDocuments();
    console.log(`Total Problems in DB: ${totalCount}`);
    if (totalCount < 70) {
      throw new Error(`Expected at least 70 problems, found ${totalCount}`);
    }
    console.log('✓ Problem bank contains at least 70 problems');

    // 2. Check Required 7 Categories Breakdown (>= 10 each)
    console.log('\n[2/5] Checking Category Breakdown (At least 10 each)...');
    const requiredCategories = [
      'Arrays',
      'Strings',
      'Dynamic Programming',
      'Graphs',
      'Trees',
      'HashMap / HashSet',
      'Sliding Window',
    ];

    for (const cat of requiredCategories) {
      const count = await Problem.countDocuments({ category: cat });
      console.log(`  • ${cat.padEnd(25)} : ${count} problems`);
      if (count < 10) {
        throw new Error(`Category "${cat}" has only ${count} problems (Expected >= 10)`);
      }
    }
    console.log('✓ All 7 required categories have at least 10 real problems each');

    // 3. Check Data Quality for all problems
    console.log('\n[3/5] Validating Problem Schema & Quality for all 70+ problems...');
    const allProblems = await Problem.find({}).select('+hiddenTestCases');

    for (const p of allProblems) {
      if (!p.title || p.title.length < 3) throw new Error(`Invalid title in problem: ${p.slug}`);
      if (!p.slug) throw new Error(`Missing slug in problem: ${p.title}`);
      if (!['EASY', 'MEDIUM', 'HARD'].includes(p.difficulty)) {
        throw new Error(`Invalid difficulty "${p.difficulty}" in problem: ${p.title}`);
      }
      if (!p.description || p.description.length < 20) {
        throw new Error(`Description too short in problem: ${p.title}`);
      }
      if (!p.starterCode || !p.starterCode.javascript) {
        throw new Error(`Missing JavaScript starter code in problem: ${p.title}`);
      }
      if (!p.visibleTestCases || p.visibleTestCases.length === 0) {
        throw new Error(`Missing visible test cases in problem: ${p.title}`);
      }
      if (!p.hiddenTestCases || p.hiddenTestCases.length === 0) {
        throw new Error(`Missing hidden test cases in problem: ${p.title}`);
      }
    }
    console.log(`✓ All ${allProblems.length} problems verified for full fields, starter code, and test cases`);

    // 4. Test Double-Blind Security (Default Queries NEVER return hiddenTestCases)
    console.log('\n[4/5] Testing Security Isolation for Public Queries...');
    const publicProblems = await Problem.find({}).limit(10);
    for (const p of publicProblems) {
      if (p.hiddenTestCases && p.hiddenTestCases.length > 0) {
        throw new Error(`SECURITY LEAK: hiddenTestCases exposed on problem "${p.title}"!`);
      }
    }
    console.log('✓ Public queries strictly exclude hiddenTestCases');

    // 5. Test Search & Filter capabilities
    console.log('\n[5/5] Testing Search, Filter & Aggregations...');
    
    // Search by title
    const searchResult = await Problem.find({
      $or: [
        { title: { $regex: 'two sum', $options: 'i' } },
        { tags: { $regex: 'two sum', $options: 'i' } },
      ],
    });
    console.log(`✓ Title Search for "two sum" returned ${searchResult.length} matches`);
    if (searchResult.length === 0) throw new Error('Search for "two sum" returned 0 results');

    // Filter by Difficulty
    const easyCount = await Problem.countDocuments({ difficulty: 'EASY' });
    const mediumCount = await Problem.countDocuments({ difficulty: 'MEDIUM' });
    const hardCount = await Problem.countDocuments({ difficulty: 'HARD' });
    console.log(`✓ Difficulty distribution: EASY=${easyCount}, MEDIUM=${mediumCount}, HARD=${hardCount}`);

    console.log('\n==================================================');
    console.log('  ALL PHASE 4 PROBLEM BANK TESTS PASSED! 🎉');
    console.log('==================================================');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Problem Bank Verification Failed:', error);
    process.exit(1);
  }
};

verifyProblemBank();

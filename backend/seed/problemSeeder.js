const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Problem = require('../models/Problem');
const { allProblems, categoryCounts } = require('./problemsData');

dotenv.config();

const seedProblems = async (shouldExit = true) => {
  console.log('==================================================');
  console.log('  DEV COLLAB — DSA PROBLEM BANK SEEDER');
  console.log('  Tagline: "Code together. Build together."');
  console.log('  Author: Abhishek Jain');
  console.log('==================================================\n');

  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/devcollab';
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(mongoUri);
      console.log(`[Seeder] Connected to MongoDB: ${mongoUri}`);
    }

    console.log('[Seeder] Cleaning existing problems in database...');
    await Problem.deleteMany({});
    console.log('[Seeder] Existing problems cleared.');

    console.log(`[Seeder] Inserting ${allProblems.length} real DSA problems...`);
    const inserted = await Problem.insertMany(allProblems);
    console.log(`[Seeder] Successfully inserted ${inserted.length} problems!`);

    console.log('\n--------------------------------------------------');
    console.log('  CATEGORY BREAKDOWN:');
    console.log('--------------------------------------------------');
    Object.entries(categoryCounts).forEach(([cat, count]) => {
      console.log(`  • ${cat.padEnd(25)} : ${count} problems`);
    });
    console.log('--------------------------------------------------');
    console.log(`  TOTAL PROBLEMS SEEDED     : ${inserted.length}`);
    console.log('==================================================\n');

    if (shouldExit) {
      process.exit(0);
    }
    return inserted;
  } catch (error) {
    console.error('[Seeder] ❌ Error seeding problems:', error);
    if (shouldExit) {
      process.exit(1);
    }
    throw error;
  }
};

if (require.main === module) {
  seedProblems(true);
}

module.exports = seedProblems;

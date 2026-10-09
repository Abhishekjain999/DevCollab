const mongoose = require('mongoose');
const seedProblems = require('./problemSeeder');
const seedUsers = require('./userSeeder');

const runMasterSeed = async () => {
  try {
    console.log('[Seed] Starting DEV COLLAB Master Database Seeder...');
    await seedProblems(false);
    await seedUsers();
    console.log('[Seed] Master database seeding completed successfully!');
  } catch (error) {
    console.error('[Seed] Master seeding failed:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

runMasterSeed();

const seedProblems = require('./problemSeeder');

const runMasterSeed = async () => {
  console.log('[Seed] Starting DEV COLLAB Master Database Seeder...');
  await seedProblems(true);
};

runMasterSeed();

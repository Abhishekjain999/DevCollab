const User = require('../models/User');

const demoUsers = [
  {
    name: 'Abhishek Jain',
    email: 'abhishek@devcollab.io',
    password: 'Password123!',
    role: 'USER',
    bio: 'Full-stack engineer & competitive programmer.',
  },
  {
    name: 'Tech Recruiter',
    email: 'recruiter@devcollab.io',
    password: 'Password123!',
    role: 'RECRUITER',
    bio: 'Technical Recruiter hosting live coding rounds.',
  },
  {
    name: 'System Admin',
    email: 'admin@devcollab.io',
    password: 'Password123!',
    role: 'ADMIN',
    bio: 'Platform administrator for DEV COLLAB.',
  },
];

const seedUsers = async () => {
  try {
    console.log('[Seed] Checking demo users in MongoDB...');
    for (const userData of demoUsers) {
      const existing = await User.findOne({ email: userData.email.toLowerCase() });
      if (!existing) {
        await User.create(userData);
        console.log(`[Seed] ✓ Created demo user: ${userData.email} (${userData.role})`);
      } else {
        console.log(`[Seed] - Demo user already exists: ${userData.email}`);
      }
    }
    console.log('[Seed] Demo users verified successfully.');
  } catch (error) {
    console.error('[Seed] Error seeding demo users:', error.message);
  }
};

module.exports = seedUsers;

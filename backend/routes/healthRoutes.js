const express = require('express');
const router = express.Router();
const { getDBStatus } = require('../config/db');

/**
 * @route   GET /api/health
 * @desc    Get API health status, database connection, and uptime
 * @access  Public
 */
router.get('/', (req, res) => {
  const dbStatus = getDBStatus();

  res.status(200).json({
    success: true,
    platform: 'DEV COLLAB',
    tagline: 'Code together. Build together.',
    author: 'Abhishek Jain',
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development',
    database: {
      status: dbStatus.state,
      connected: dbStatus.isConnected,
      name: dbStatus.name,
    },
    version: '1.0.0',
  });
});

module.exports = router;

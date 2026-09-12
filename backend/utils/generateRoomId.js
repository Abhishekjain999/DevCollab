const Room = require('../models/Room');

/**
 * Generate a unique Room ID (e.g. DEV-8F3K2A or INT-93KD21)
 * @param {string} prefix - 'DEV' for Practice or 'INT' for Interview
 * @returns {Promise<string>} Unique Room ID
 */
const generateRoomId = async (prefix = 'DEV') => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Avoid ambiguous chars 0/O, 1/I
  const cleanPrefix = prefix.toUpperCase() === 'INT' ? 'INT' : 'DEV';
  let isUnique = false;
  let roomId = '';
  let attempts = 0;

  while (!isUnique && attempts < 10) {
    attempts++;
    let randomPart = '';
    for (let i = 0; i < 6; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    roomId = `${cleanPrefix}-${randomPart}`;

    const existingRoom = await Room.findOne({ roomId });
    if (!existingRoom) {
      isUnique = true;
    }
  }

  if (!isUnique) {
    roomId = `${cleanPrefix}-${Date.now().toString(36).toUpperCase()}`;
  }

  return roomId;
};

module.exports = generateRoomId;

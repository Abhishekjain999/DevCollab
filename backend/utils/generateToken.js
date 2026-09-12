const jwt = require('jsonwebtoken');

/**
 * Generate a signed JWT token
 * @param {string} id - User ObjectId string
 * @param {string} role - User role (USER, RECRUITER, ADMIN)
 * @returns {string} JWT Token
 */
const generateToken = (id, role = 'USER') => {
  const secret = process.env.JWT_SECRET || 'devcollab_super_secure_jwt_secret_key_2026_abhishek';
  return jwt.sign({ id, role }, secret, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;

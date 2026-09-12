/**
 * High-performance, lightweight in-memory sliding window rate limiter
 */
const rateLimitMap = new Map();

// Periodic cleanup of stale IPs every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (now - record.windowStart > 60000 * 10) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Factory for creating custom rate limiting middlewares
 * @param {Object} options - { windowMs: 60000, max: 20, message: 'Too many requests' }
 */
const createRateLimiter = ({
  windowMs = 60 * 1000,
  max = 30,
  message = 'Too many requests, please try again later.',
} = {}) => {
  return (req, res, next) => {
    // Disable rate limiting in test mode
    if (process.env.NODE_ENV === 'test') {
      return next();
    }

    const key = req.user?._id?.toString() || req.ip || req.headers['x-forwarded-for'] || 'global';
    const now = Date.now();

    let record = rateLimitMap.get(key);

    if (!record || now - record.windowStart > windowMs) {
      record = {
        windowStart: now,
        count: 1,
      };
      rateLimitMap.set(key, record);
      return next();
    }

    record.count += 1;

    if (record.count > max) {
      const retryAfter = Math.ceil((record.windowStart + windowMs - now) / 1000);
      res.setHeader('Retry-After', retryAfter);
      return res.status(429).json({
        success: false,
        status: 'RATE_LIMIT_EXCEEDED',
        message,
        retryAfterSeconds: retryAfter,
      });
    }

    next();
  };
};

// Rate limiter specifically for heavy code execution & submission endpoints (15 reqs/minute)
const executionRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 20,
  message: 'Code execution rate limit reached (max 20 executions/min). Please wait a few seconds before retrying.',
});

// General API rate limiter (120 reqs/minute)
const generalRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 120,
  message: 'Too many API requests. Please slow down.',
});

module.exports = {
  createRateLimiter,
  executionRateLimiter,
  generalRateLimiter,
};

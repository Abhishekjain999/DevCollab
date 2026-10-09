const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const { notFoundHandler, errorHandler } = require('./middleware/errorMiddleware');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');
const problemRoutes = require('./routes/problemRoutes');
const roomRoutes = require('./routes/roomRoutes');
const messageRoutes = require('./routes/messageRoutes');
const codeRoutes = require('./routes/codeRoutes');
const submissionRoutes = require('./routes/submissionRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Configure Dynamic CORS (Supports all local dev ports 5173/5174/..., Vercel previews, and custom CLIENT_URL)
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

const isOriginAllowed = (origin) => {
  if (!origin) return true; // Mobile apps, Postman, curl
  if (origin === clientUrl) return true;
  if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  if (/^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)) return true;
  if (/^https:\/\/.*\.vercel\.app$/.test(origin)) return true;
  return false;
};

const corsOptions = {
  origin: (origin, callback) => {
    if (isOriginAllowed(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      if (isOriginAllowed(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  },
});

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Basic root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to DEV COLLAB API Server',
    tagline: 'Code together. Build together.',
    author: 'Abhishek Jain',
    docs: '/api/health',
  });
});

// Mount Routes
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/code', codeRoutes);
app.use('/api/submissions', submissionRoutes);

// Initialize Socket.IO Handler
const { initSocket } = require('./socket/socketHandler');
initSocket(io);

// Centralized Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server & Connect Database
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  server.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`  DEV COLLAB Backend Server`);
    console.log(`  Tagline: "Code together. Build together."`);
    console.log(`  Author: Abhishek Jain`);
    console.log(`  Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`  HTTP Port: http://localhost:${PORT}`);
    console.log(`  Health Check: http://localhost:${PORT}/api/health`);
    console.log(`==================================================`);
  });
};

if (process.env.NODE_ENV !== 'test') {
  startServer();
}

module.exports = { app, server, io };

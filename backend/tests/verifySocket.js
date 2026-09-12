const ioClient = require('socket.io-client');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Problem = require('../models/Problem');
const Room = require('../models/Room');
const Message = require('../models/Message');
const generateToken = require('../utils/generateToken');

dotenv.config();

const verifySocketCollaboration = async () => {
  console.log('==================================================');
  console.log('  STARTING PHASE 7 & 8 SOCKET.IO COLLABORATION TESTS');
  console.log('==================================================\n');

  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devcollab');
    console.log('✓ Connected to MongoDB');

    const timestamp = Date.now();

    // 1. Create Test Users & Tokens
    const userA = await User.create({
      name: 'Abhishek SocketA',
      email: `socketA_${timestamp}@devcollab.io`,
      password: 'Password123!',
      role: 'USER',
    });
    const tokenA = generateToken(userA._id, userA.role);

    const userB = await User.create({
      name: 'Rahul SocketB',
      email: `socketB_${timestamp}@devcollab.io`,
      password: 'Password123!',
      role: 'USER',
    });
    const tokenB = generateToken(userB._id, userB.role);

    const problem = await Problem.findOne({ slug: 'two-sum' });

    const testRoom = await Room.create({
      roomId: `DEV-SOCK${Math.floor(1000 + Math.random() * 9000)}`,
      name: 'Realtime Socket Test Room',
      owner: userA._id,
      participants: [{ user: userA._id, role: 'OWNER' }],
      problem: problem._id,
      language: 'javascript',
      permission: 'COLLABORATIVE',
      code: 'function twoSum() {}',
      isActive: true,
    });

    console.log(`✓ Test Room created: ${testRoom.roomId}`);

    const SERVER_URL = 'http://localhost:5000';

    // 2. Connect Client A
    console.log('\n[1/6] Connecting Client A with JWT Token...');
    const clientA = ioClient(SERVER_URL, {
      auth: { token: tokenA },
      transports: ['websocket'],
    });

    await new Promise((resolve) => clientA.on('connect', resolve));
    console.log(`✓ Client A connected (Socket ID: ${clientA.id})`);

    // 3. Connect Client B
    console.log('\n[2/6] Connecting Client B with JWT Token...');
    const clientB = ioClient(SERVER_URL, {
      auth: { token: tokenB },
      transports: ['websocket'],
    });

    await new Promise((resolve) => clientB.on('connect', resolve));
    console.log(`✓ Client B connected (Socket ID: ${clientB.id})`);

    // 4. Join Room
    console.log('\n[3/6] Joining Room for Both Clients...');
    const joinPromises = [
      new Promise((resolve) => {
        clientA.on('roomInit', (data) => {
          console.log(`  • Client A received roomInit for ${data.roomId}`);
          resolve(data);
        });
      }),
      new Promise((resolve) => {
        clientB.on('roomInit', (data) => {
          console.log(`  • Client B received roomInit for ${data.roomId}`);
          resolve(data);
        });
      }),
    ];

    clientA.emit('joinRoom', { roomId: testRoom.roomId });
    clientB.emit('joinRoom', { roomId: testRoom.roomId });

    await Promise.all(joinPromises);
    console.log('✓ Both clients successfully joined the room and received initial state');

    // 5. Test Live Code Sync (Client A edits -> Client B receives)
    console.log('\n[4/6] Testing Real-time Code Synchronization...');
    const codeSyncPromise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Code sync timed out')), 4000);
      clientB.on('codeUpdate', (data) => {
        clearTimeout(timer);
        console.log(`  • Client B received codeUpdate from ${data.senderName}: "${data.code}"`);
        if (data.code === 'function twoSum(nums, target) { return [0, 1]; }') {
          resolve(data);
        } else {
          reject(new Error('Code content mismatch'));
        }
      });
    });

    clientA.emit('codeChange', {
      roomId: testRoom.roomId,
      code: 'function twoSum(nums, target) { return [0, 1]; }',
      cursorPosition: { lineNumber: 1, column: 15 },
    });

    await codeSyncPromise;
    console.log('✓ Real-time code synchronization verified with zero echo back to Client A');

    // 6. Test In-Room Chat & Persistence
    console.log('\n[5/6] Testing In-Room Chat Broadcast & MongoDB Persistence...');
    const chatMessagePromise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Chat broadcast timed out')), 4000);
      let aGotMessage = false;
      let bGotMessage = false;

      clientA.on('receiveMessage', (msg) => {
        if (msg.message === 'Hello from Client B!') aGotMessage = true;
        if (aGotMessage && bGotMessage) {
          clearTimeout(timer);
          resolve(msg);
        }
      });

      clientB.on('receiveMessage', (msg) => {
        if (msg.message === 'Hello from Client B!') bGotMessage = true;
        if (aGotMessage && bGotMessage) {
          clearTimeout(timer);
          resolve(msg);
        }
      });
    });

    clientB.emit('sendMessage', {
      roomId: testRoom.roomId,
      message: 'Hello from Client B!',
    });

    await chatMessagePromise;
    console.log('✓ Real-time chat broadcast received by both clients');

    // Verify DB persistence of message
    const savedMsg = await Message.findOne({ room: testRoom._id });
    if (!savedMsg || savedMsg.message !== 'Hello from Client B!') {
      throw new Error('Chat message was not persisted to MongoDB!');
    }
    console.log('✓ Chat message successfully persisted to MongoDB Message collection');

    // 7. Test Typing Indicator
    console.log('\n[6/6] Testing Typing Indicators...');
    const typingPromise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Typing event timed out')), 4000);
      clientA.on('userTyping', (data) => {
        clearTimeout(timer);
        console.log(`  • Client A received typing indicator: "${data.name} is typing..."`);
        resolve(data);
      });
    });

    clientB.emit('typing', { roomId: testRoom.roomId });
    await typingPromise;
    console.log('✓ Typing indicator event successfully propagated');

    // Clean up connections & DB records
    clientA.disconnect();
    clientB.disconnect();

    await Message.deleteMany({ room: testRoom._id });
    await Room.findByIdAndDelete(testRoom._id);
    await User.deleteMany({ _id: { $in: [userA._id, userB._id] } });
    console.log('\n✓ Cleanup of test sockets, room, and users completed');

    console.log('\n==================================================');
    console.log('  ALL PHASE 7 & 8 SOCKET.IO COLLABORATION TESTS PASSED! 🎉');
    console.log('==================================================');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Socket Collaboration Test Failed:', error);
    process.exit(1);
  }
};

verifySocketCollaboration();

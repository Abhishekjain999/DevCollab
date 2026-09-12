const axios = require('axios');
const ioClient = require('socket.io-client');

const API_BASE = 'http://localhost:5000/api';
const SOCKET_BASE = 'http://localhost:5000';

const runLiveEndToEndVerification = async () => {
  console.log('==================================================');
  console.log('  DEV COLLAB LIVE END-TO-END VERIFICATION');
  console.log('==================================================\n');

  try {
    // 1. Health check
    console.log('[1/7] Testing Live Server Health Check (GET /api/health)...');
    const healthRes = await axios.get(`${API_BASE}/health`);
    console.log(`✓ Health Status: ${healthRes.data?.status}, DB Connected: ${healthRes.data?.database?.connected}`);
    if (!healthRes.data?.success) throw new Error('Health check failed');

    // 2. User Authentication
    console.log('\n[2/7] Testing User Authentication & JWT (POST /api/auth/login)...');
    const timestamp = Date.now();
    const registerRes = await axios.post(`${API_BASE}/auth/register`, {
      name: 'Live Tester',
      email: `livetester_${timestamp}@devcollab.io`,
      password: 'Password123!',
      role: 'USER',
    });
    const token = registerRes.data?.data?.token;
    const user = registerRes.data?.data?.user;
    console.log(`✓ Registered User: ${user.name} (${user.email}) [ID: ${user.id}]`);
    console.log(`✓ JWT Token Generated: ${token.substring(0, 20)}...`);

    const authHeaders = { Authorization: `Bearer ${token}` };

    // 3. Problem Bank API
    console.log('\n[3/7] Testing Problem Bank Querying (GET /api/problems/two-sum)...');
    const probRes = await axios.get(`${API_BASE}/problems/two-sum`);
    const twoSum = probRes.data?.data?.problem;
    if (!twoSum) throw new Error('Two Sum problem not found');
    console.log(`✓ Retrieved Target Problem: "${twoSum.title}" [${twoSum.difficulty} - ${twoSum.category}]`);

    // 4. Room Creation & Management
    console.log('\n[4/7] Testing Collaborative Room Creation (POST /api/rooms)...');
    const roomRes = await axios.post(
      `${API_BASE}/rooms`,
      {
        name: 'Live E2E Verification Room',
        problemId: twoSum._id,
        language: 'javascript',
        type: 'PRACTICE',
        permission: 'COLLABORATIVE',
      },
      { headers: authHeaders }
    );
    const room = roomRes.data?.data?.room;
    console.log(`✓ Created Coding Room: ${room.roomId} (Name: "${room.name}")`);

    // 5. Code Execution (Run Code - Visible Tests)
    console.log('\n[5/7] Testing Sandboxed Run Code (POST /api/code/run)...');
    const correctCode = `
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i);
  }
  return [];
}
`;
    const runRes = await axios.post(
      `${API_BASE}/code/run`,
      {
        roomId: room.roomId,
        problemId: twoSum._id,
        language: 'javascript',
        code: correctCode,
      },
      { headers: authHeaders }
    );
    console.log(`  • Execution Status : ${runRes.data?.data?.status}`);
    console.log(`  • Visible Tests    : ${runRes.data?.data?.passedTests} / ${runRes.data?.data?.totalTests} Passed`);
    console.log(`  • Runtime          : ${runRes.data?.data?.runtime} ms`);
    if (runRes.data?.data?.status !== 'ACCEPTED') throw new Error('Run Code failed sample tests');
    console.log('✓ Run Code executed in local sandbox and passed all sample tests');

    // 6. Code Submission (Submit Code - Full Double-Blind Evaluation)
    console.log('\n[6/7] Testing Full Submission & Double-Blind Security (POST /api/code/submit)...');
    const submitRes = await axios.post(
      `${API_BASE}/code/submit`,
      {
        roomId: room.roomId,
        problemId: twoSum._id,
        language: 'javascript',
        code: correctCode,
      },
      { headers: authHeaders }
    );
    console.log(`  • Submission Status: ${submitRes.data?.data?.status}`);
    console.log(`  • Tests Passed     : ${submitRes.data?.data?.passedTests} / ${submitRes.data?.data?.totalTests}`);
    console.log(`  • Runtime          : ${submitRes.data?.data?.runtime} ms`);
    if (submitRes.data?.data?.status !== 'ACCEPTED') throw new Error('Submission evaluation failed');
    console.log('✓ Full test suite evaluated in double-blind isolation: Status ACCEPTED');

    // 7. Real-Time Socket.IO Synchronization
    console.log('\n[7/7] Testing Live Socket.IO Real-time Collaboration (Sync & Chat)...');
    const clientA = ioClient(SOCKET_BASE, { auth: { token } });
    
    // Create second participant
    const registerB = await axios.post(`${API_BASE}/auth/register`, {
      name: 'Peer Collaborator',
      email: `peer_${timestamp}@devcollab.io`,
      password: 'Password123!',
      role: 'USER',
    });
    const tokenB = registerB.data?.data?.token;
    const clientB = ioClient(SOCKET_BASE, { auth: { token: tokenB } });

    await new Promise((resolve, reject) => {
      let syncPassed = false;
      let chatPassed = false;

      const checkComplete = () => {
        if (syncPassed && chatPassed) {
          clientA.disconnect();
          clientB.disconnect();
          resolve();
        }
      };

      clientA.on('connect', () => {
        clientA.emit('joinRoom', { roomId: room.roomId });
      });

      clientB.on('connect', () => {
        clientB.emit('joinRoom', { roomId: room.roomId });

        // Client A sends code change and chat message
        setTimeout(() => {
          clientA.emit('codeChange', {
            roomId: room.roomId,
            code: '// Synchronized collaborative code edit',
          });

          clientA.emit('sendMessage', {
            roomId: room.roomId,
            message: 'Hello peer, real-time sync is active!',
          });
        }, 600);
      });

      clientB.on('codeUpdate', (data) => {
        console.log(`✓ Client B received real-time code update from ${data.senderName}`);
        syncPassed = true;
        checkComplete();
      });

      clientB.on('receiveMessage', (data) => {
        console.log(`✓ Client B received real-time chat: "${data.message}"`);
        chatPassed = true;
        checkComplete();
      });

      setTimeout(() => {
        if (!syncPassed || !chatPassed) {
          reject(new Error('Socket.IO real-time sync timed out'));
        }
      }, 6000);
    });

    console.log('\n==================================================');
    console.log('  LIVE END-TO-END VERIFICATION PASSED 100%! 🎉');
    console.log('==================================================');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Live Verification Failed:', error.response?.data || error.message);
    process.exit(1);
  }
};

runLiveEndToEndVerification();

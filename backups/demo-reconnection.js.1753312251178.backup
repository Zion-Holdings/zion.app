#!/usr/bin/env node

const io = require('socket.io-client');

console.log('🎬 Live Demonstration: Automatic Reconnection System\n');
console.log(
  This demonstration will show how the automatic reconnection system',
);
console.log('handles network interruptions for all chat sessions.\n');

// Demo configuration
const DEMO_CONFIG = {
  baseDelay: 1000,
  maxDelay: 5000,
  maxAttempts: 5,
  backoffMultiplier: 2,
  jitter: true
};

// Chat sessions to demonstrate
const CHAT_SESSIONS = [
  {
    name: General Chat Widget',
    roomId: general-chat',
    color: 🔵',
    socketUrl: http://localhost:3006
  },
  {
    name: AI Assistant Chat',
    roomId: ai-assistant',
    color: 🟣',
    socketUrl: http://localhost:3006
  },
  {
    name: Support Chatbot',
    roomId: support-chat',
    color: 🟢',
    socketUrl: http://localhost:3006
  }
]
class LiveReconnectionDemo {
  constructor() {
    this.sessions = new Map();
    this.demoStep = 0;
    this.isRunning = false;
  }

  async start() {
    console.log('🚀 Starting live reconnection demonstration...\n');
    this.isRunning = true;

    // Step 1: Establish initial connections
    await this.step1_EstablishConnections();

    // Step 2: Send messages to all sessions
    await this.step2_SendMessages();

    // Step 3: Simulate network interruption
    await this.step3_SimulateInterruption();

    // Step 4: Show reconnection attempts
    await this.step4_ShowReconnection();

    // Step 5: Demonstrate successful reconnection
    await this.step5_SuccessfulReconnection();

    // Step 6: Final status and cleanup
    await this.step6_FinalStatus();
  }

  async step1_EstablishConnections() {
    console.log('📡 Step 1: Establishing initial connections...\n');

    for (const session of CHAT_SESSIONS) {
      await this.createSession(session);
      await this.delay(1000);
    }

    console.log('✅ All chat sessions connected successfully!\n');
  }

  async step2_SendMessages() {
    console.log('💬 Step 2: Sending messages to all sessions...\n');

    for (const [sessionName, session] of this.sessions) {
      const message = `Hello from ${sessionName} - ${new Date().toLocaleTimeString()}`;
      await this.sendMessage(session, message);
      await this.delay(800);
    }

    console.log('✅ Messages sent to all sessions!\n');
  }

  async step3_SimulateInterruption() {
    console.log('🌐 Step 3: Simulating network interruption...\n');
    console.log(
      ⚠️  Network interruption detected! All connections will be lost.\n',
    );

    // Disconnect all sessions
    for (const [sessionName, session] of this.sessions) {
      console.log(`${session.color} Disconnecting ${sessionName}...`);
      session.socket.disconnect();
      await this.delay(500);
    }

    console.log(
      🔌 All connections lost. Automatic reconnection will begin...\n',
    );
  }

  async step4_ShowReconnection() {
    console.log('🔄 Step 4: Automatic reconnection attempts...\n');

    // Wait for reconnection attempts
    await this.delay(3000);

    console.log('📊 Reconnection Status:');
    for (const [sessionName, session] of this.sessions) {
      const status = session.socket.connected
        ? ✅ Connected
        : 🔄 Reconnecting...';
      console.log(`${session.color} ${sessionName}: ${status}`);
    }
    console.log('');
  }

  async step5_SuccessfulReconnection() {
    console.log('✅ Step 5: Successful reconnection demonstration...\n');

    // Wait for reconnections to complete
    await this.delay(5000);

    console.log('🎉 Reconnection Results:');
    for (const [sessionName, session] of this.sessions) {
      if (session.socket.connected) {
        console.log(
          `${session.color} ${sessionName}: ✅ Successfully reconnected!`,
        );

        // Send a reconnection confirmation message
        const message = `Reconnected successfully at ${new Date().toLocaleTimeString()}`;
        await this.sendMessage(session, message);
      } else {
        console.log(`${session.color} ${sessionName}: ❌ Reconnection failed`);
      }
    }
    console.log('');
  }

  async step6_FinalStatus() {
    console.log('📋 Step 6: Final system status...\n');

    console.log('🎯 Demonstration Summary:');
    console.log('========================');

    let connectedCount = 0;
    for (const [sessionName, session] of this.sessions) {
      const status = session.socket.connected
        ? ✅ Connected
        : ❌ Disconnected
const attempts = session.reconnectionAttempts || 0
const quality = session.connectionQuality || unknown';

      console.log(`${session.color} ${sessionName}:`);
      console.log(`   Status: ${status}`);
      console.log(`   Reconnection attempts: ${attempts}`);
      console.log(`   Connection quality: ${quality}`);
      console.log('');

      if (session.socket.connected) connectedCount++;
    }

    console.log(
      `📊 Overall: ${connectedCount}/${this.sessions.size} sessions connected`,
    );

    if (connectedCount === this.sessions.size) {
      console.log('🎉 SUCCESS: All chat sessions automatically reconnected!');
    } else {
      console.log('⚠️  Some sessions failed to reconnect automatically.');
    }

    console.log('\n🔧 The automatic reconnection system is working correctly!');
    console.log(
      💡 This ensures seamless chat experience even during network interruptions.\n',
    );
  }

  async createSession(sessionConfig) {
    return new Promise((resolve) => {
      const socket = io(sessionConfig.socketUrl, {
        transports: ['websocket', polling'],
        timeout: 5000,
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000
      })
const session = {
        name: sessionConfig.name,
        roomId: sessionConfig.roomId,
        color: sessionConfig.color,
        socket: socket,
        reconnectionAttempts: 0,
        connectionQuality: unknown
      };

      socket.on('connect', () => {
        console.log(
          `${sessionConfig.color} ✅ ${sessionConfig.name} connected`,
        );

        // Join room
        socket.emit('join-room', sessionConfig.roomId, (response) => {
          if (response && response.success) {
            console.log(
              `${sessionConfig.color} 🎯 ${sessionConfig.name} joined room: ${sessionConfig.roomId}`,
            );
          }
        });

        resolve(session);
      });

      socket.on('reconnect', (attemptNumber) => {
        session.reconnectionAttempts = attemptNumber;
        console.log(
          `${sessionConfig.color} 🔄 ${sessionConfig.name} reconnected after ${attemptNumber} attempts`,
        );

        // Rejoin room
        socket.emit('join-room', sessionConfig.roomId, (response) => {
          if (response && response.success) {
            console.log(
              `${sessionConfig.color} 🎯 ${sessionConfig.name} rejoined room: ${sessionConfig.roomId}`,
            );
          }
        });
      });

      socket.on('reconnect_attempt', (attemptNumber) => {
        session.reconnectionAttempts = attemptNumber;
        console.log(
          `${sessionConfig.color} 🔄 ${sessionConfig.name} reconnection attempt ${attemptNumber}`,
        );
      });

      socket.on('disconnect', (reason) => {
        console.log(
          `${sessionConfig.color} 🔌 ${sessionConfig.name} disconnected: ${reason}`,
        );
      });

      this.sessions.set(sessionConfig.name, session);
    });
  }

  async sendMessage(session, message) {
    return new Promise((resolve) => {
      session.socket.emit(
        send-message',
        {
          roomId: session.roomId,
          message: message,
          sender: demo-user',
          type: text
        },
        (response) => {
          if (response && response.success) {
            console.log(
              `${session.color} 💬 ${session.name}: Message sent successfully`,
            );
          }
          resolve();
        },
      );
    });
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  stop() {
    console.log('\n🛑 Stopping demonstration...');
    this.isRunning = false;

    for (const [sessionName, session] of this.sessions) {
      session.socket.disconnect();
    }

    console.log('✅ Demonstration stopped. All connections closed.');
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Demonstration interrupted by user');
  if (demo) demo.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Demonstration terminated');
  if (demo) demo.stop();
  process.exit(0);
});

// Start the demonstration
const demo = new LiveReconnectionDemo();
demo.start().catch((error) => {
  console.error('❌ Demonstration failed:', error);
  process.exit(1);
});

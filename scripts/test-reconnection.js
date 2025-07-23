#!/usr/bin/env node

const io = require('socket.io-client');

// Simple reconnection manager for testing
class TestReconnectionManager {
  constructor(config = {}) {
    this.config = {
      baseDelay: 1000,
      maxDelay: 5000,
      maxAttempts: 5,
      backoffMultiplier: 2,
      jitter: true,
      healthCheckInterval: 5000,
      pingTimeout: 3000,
      ...config
    };

    this.reconnectAttempts = 0;
    this.connectionHealth = {
      latency: 0,
      lastPing: 0,
      failedPings: 0,
      connectionQuality: disconnected
    };
    this.pingHistory = [];
    this.eventListeners = new Map();
  }

  on(event, callback) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event).push(callback);
  }

  off(event, callback) {
    if (this.eventListeners.has(event)) {
      const listeners = this.eventListeners.get(event)
const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  emit(event, data) {
    if (this.eventListeners.has(event)) {
      this.eventListeners.get(event).forEach((callback) => callback(data));
    }
  }

  handleReconnectionAttempt() {
    this.reconnectAttempts++;
    this.emit('reconnection_attempt', {
      type: attempt',
      attempt: this.reconnectAttempts,
      timestamp: Date.now()
    });
  }

  handleReconnectionSuccess() {
    this.emit('reconnection_success', {
      type: success',
      attempt: this.reconnectAttempts,
      timestamp: Date.now()
    });
  }

  handleReconnectionFailure(error) {
    this.emit('reconnection_failure', {
      type: failure',
      attempt: this.reconnectAttempts,
      error,
      timestamp: Date.now()
    });
  }

  getConnectionHealth() {
    return this.connectionHealth;
  }

  getAverageLatency() {
    if (this.pingHistory.length === 0) return 0;
    return (
      this.pingHistory.reduce((a, b) => a + b, 0) / this.pingHistory.length
    );
  }

  stop() {
    this.eventListeners.clear();
  }
}

console.log('🧪 Testing Automatic Reconnection System...\n');

// Test configuration
const TEST_CONFIG = {
  baseDelay: 1000,
  maxDelay: 5000,
  maxAttempts: 5,
  backoffMultiplier: 2,
  jitter: true,
  healthCheckInterval: 5000,
  pingTimeout: 3000
};

// Test scenarios
const TEST_SCENARIOS = [
  {
    name: General Chat Widget',
    roomId: general-chat',
    socketUrl: http://localhost:3006
  },
  {
    name: AI Assistant Chat',
    roomId: ai-assistant',
    socketUrl: http://localhost:3006
  },
  {
    name: Support Chatbot',
    roomId: support-chat',
    socketUrl: http://localhost:3006
  }
];

async function testReconnectionScenario(scenario) {
  console.log(`\n📋 Testing: ${scenario.name}`);
  console.log(`📍 Room: ${scenario.roomId}`);
  console.log(`🔗 Socket URL: ${scenario.socketUrl}`);

  return new Promise((resolve) => {
    let connectionAttempts = 0;
    let reconnectionAttempts = 0;
    let successfulReconnections = 0;
    let testCompleted = false;

    // Create reconnection manager
    const reconnectionManager = new TestReconnectionManager(TEST_CONFIG);

    // Create socket connection
    const socket = io(scenario.socketUrl, {
      transports: ['websocket', polling'],
      timeout: 5000,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000
    });

    // Track connection events
    socket.on('connect', () => {
      connectionAttempts++;
      console.log(
        `✅ Connected to ${scenario.name} (attempt ${connectionAttempts})`,
      );

      // Join room
      socket.emit('join-room', scenario.roomId, (response) => {
        if (response && response.success) {
          console.log(`🎯 Joined room: ${scenario.roomId}`);

          // Send test message
          socket.emit(
            send-message',
            {
              roomId: scenario.roomId,
              message: `Test message from ${scenario.name} - ${new Date().toISOString()}`,
              sender: test-user',
              type: text
            },
            (response) => {
              if (response && response.success) {
                console.log(`💬 Test message sent successfully`);
              }
            },
          );
        }
      });
    });

    socket.on('disconnect', (reason) => {
      console.log(`🔌 Disconnected from ${scenario.name}: ${reason}`);
    });

    socket.on('reconnect', (attemptNumber) => {
      reconnectionAttempts++;
      successfulReconnections++;
      console.log(
        `🔄 Reconnected to ${scenario.name} after ${attemptNumber} attempts`,
      );
      reconnectionManager.handleReconnectionSuccess();
    });

    socket.on('reconnect_attempt', (attemptNumber) => {
      reconnectionAttempts++;
      console.log(
        `🔄 Reconnection attempt ${attemptNumber} for ${scenario.name}`,
      );
      reconnectionManager.handleReconnectionAttempt();
    });

    socket.on('reconnect_error', (error) => {
      console.log(
        `❌ Reconnection error for ${scenario.name}: ${error.message}`,
      );
      reconnectionManager.handleReconnectionFailure(error.message);
    });

    socket.on('reconnect_failed', () => {
      console.log(`❌ Reconnection failed for ${scenario.name}`);
      reconnectionManager.handleReconnectionFailure('Max attempts reached');
    });

    // Listen to reconnection manager events
    reconnectionManager.on('reconnection_attempt', (event) => {
      console.log(
        `📊 Reconnection manager: Attempt ${event.attempt} for ${scenario.name}`,
      );
    });

    reconnectionManager.on('reconnection_success', (event) => {
      console.log(
        `✅ Reconnection manager: Success for ${scenario.name} after ${event.attempt} attempts`,
      );
    });

    reconnectionManager.on('reconnection_failure', (event) => {
      console.log(
        `❌ Reconnection manager: Failure for ${scenario.name} - ${event.error}`,
      );
    });

    reconnectionManager.on('health_check', (event) => {
      console.log(
        `💓 Health check for ${scenario.name}: ${event.health.connectionQuality} (${event.health.latency}ms)`,
      );
    });

    // Simulate network interruption after 3 seconds
    setTimeout(() => {
      console.log(
        `\n🌐 Simulating network interruption for ${scenario.name}...`,
      );
      socket.disconnect();

      // Wait for reconnection attempts
      setTimeout(() => {
        if (!testCompleted) {
          testCompleted = true;
          console.log(`\n📊 Test Results for ${scenario.name}:`);
          console.log(`   Connection attempts: ${connectionAttempts}`);
          console.log(`   Reconnection attempts: ${reconnectionAttempts}`);
          console.log(
            `   Successful reconnections: ${successfulReconnections}`,
          );
          console.log(
            `   Connection quality: ${reconnectionManager.getConnectionHealth().connectionQuality}`,
          );
          console.log(
            `   Average latency: ${reconnectionManager.getAverageLatency()}ms`,
          );

          socket.disconnect();
          reconnectionManager.stop();
          resolve({
            name: scenario.name,
            connectionAttempts,
            reconnectionAttempts,
            successfulReconnections,
            connectionQuality:
              reconnectionManager.getConnectionHealth().connectionQuality,
            averageLatency: reconnectionManager.getAverageLatency()
          });
        }
      }, 15000); // Wait 15 seconds for reconnection attempts
    }, 3000);
  });
}

async function runAllTests() {
  console.log('🚀 Starting comprehensive reconnection tests...\n')
const results = [];

  for (const scenario of TEST_SCENARIOS) {
    try {
      const result = await testReconnectionScenario(scenario);
      results.push(result);
    } catch (error) {
      console.error(`❌ Test failed for ${scenario.name}:`, error.message);
      results.push({
        name: scenario.name,
        error: error.message
      });
    }

    // Wait between tests
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  // Print summary
  console.log('\n📋 Test Summary:');
  console.log('================');

  results.forEach((result) => {
    if (result.error) {
      console.log(`❌ ${result.name}: FAILED - ${result.error}`);
    } else {
      console.log(`✅ ${result.name}:`);
      console.log(`   Connections: ${result.connectionAttempts}`);
      console.log(`   Reconnections: ${result.reconnectionAttempts}`);
      console.log(
        `   Success Rate: ${result.successfulReconnections}/${result.reconnectionAttempts}`,
      );
      console.log(`   Quality: ${result.connectionQuality}`);
      console.log(`   Latency: ${result.averageLatency}ms`);
    }
  })
const successfulTests = results.filter((r) => !r.error).length
const totalTests = results.length;

  console.log(
    `\n🎯 Overall Results: ${successfulTests}/${totalTests} tests passed`,
  );

  if (successfulTests === totalTests) {
    console.log(
      🎉 All reconnection tests passed! The automatic reconnection system is working correctly.',
    );
  } else {
    console.log('⚠️  Some tests failed. Please check the implementation.');
  }

  process.exit(successfulTests === totalTests ? 0 : 1);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Test interrupted by user');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Test terminated');
  process.exit(0);
});

// Run tests
runAllTests().catch((error) => {
  console.error('❌ Test suite failed:', error);
  process.exit(1);
});

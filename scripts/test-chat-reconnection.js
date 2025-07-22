#!/usr/bin/env node

/**
 * Test Script for Automated Chat Reconnection System
 *
 * This script tests the chat reconnection system by:
 * - Connecting to the chat server
 * - Sending test messages
 * - Simulating multiple computers
 * - Testing reconnection scenarios
 */

const WebSocket = require('ws')
const http = require('http');

// Configuration
const CONFIG = {
  CHAT_SERVER: 'http://localhost:3009',
  WEBSOCKET_URL: 'ws://localhost:3009',
  TEST_MESSAGES: [
    'Hello from test computer!',
    'Testing chat functionality',
    'Checking reconnection capabilities',
    'System health check',
    'Performance test message',
  ],
}
class ChatReconnectionTester {
  constructor() {
    this.connections = [];
    this.messageCount = 0;
    this.testResults = {
      httpTests: [],
      websocketTests: [],
      reconnectionTests: [],
    };
  }

  async runAllTests() {
    console.log('🧪 Starting Chat Reconnection System Tests...\n');

    try {
      await this.testHttpEndpoints();
      await this.testWebSocketConnections();
      await this.testReconnectionScenarios();
      await this.testMultiComputerSimulation();

      this.printTestResults();
    } catch (error) {
      console.error('❌ Test failed:', error.message);
    }
  }

  async testHttpEndpoints() {
    console.log('📡 Testing HTTP Endpoints...');

    // Test status endpoint
    try {
      const status = await this.makeHttpRequest('/status');
      this.testResults.httpTests.push({
        test: 'Status Endpoint',
        success: true,
        data: status,
      });
      console.log('✅ Status endpoint working');
    } catch (error) {
      this.testResults.httpTests.push({
        test: 'Status Endpoint',
        success: false,
        error: error.message,
      });
      console.log('❌ Status endpoint failed:', error.message);
    }

    // Test computers endpoint
    try {
      const computers = await this.makeHttpRequest('/computers');
      this.testResults.httpTests.push({
        test: 'Computers Endpoint',
        success: true,
        data: computers,
      });
      console.log('✅ Computers endpoint working');
    } catch (error) {
      this.testResults.httpTests.push({
        test: 'Computers Endpoint',
        success: false,
        error: error.message,
      });
      console.log('❌ Computers endpoint failed:', error.message);
    }

    // Test chat endpoint
    try {
      const chatResponse = await this.makeHttpRequest('/chat', 'POST', {
        message: 'Test message from HTTP',
        category: 'test',
      });
      this.testResults.httpTests.push({
        test: 'Chat Endpoint',
        success: true,
        data: chatResponse,
      });
      console.log('✅ Chat endpoint working');
    } catch (error) {
      this.testResults.httpTests.push({
        test: 'Chat Endpoint',
        success: false,
        error: error.message,
      });
      console.log('❌ Chat endpoint failed:', error.message);
    }
  }

  async testWebSocketConnections() {
    console.log('\n🔌 Testing WebSocket Connections...');

    // Test single connection
    try {
      const ws = await this.createWebSocketConnection('test-computer-1');
      this.testResults.websocketTests.push({
        test: 'Single WebSocket Connection',
        success: true,
      });
      console.log('✅ Single WebSocket connection working');

      // Send test message
      ws.send(
        JSON.stringify({
          type: 'chat',
          message: 'Test message from WebSocket',
          room: 'test',
        }),
      );

      setTimeout(() => {
        ws.close();
      }, 1000);
    } catch (error) {
      this.testResults.websocketTests.push({
        test: 'Single WebSocket Connection',
        success: false,
        error: error.message,
      });
      console.log('❌ Single WebSocket connection failed:', error.message);
    }

    // Test multiple connections
    try {
      const connections = [];
      for (let i = 0; i < 3; i++) {
        const ws = await this.createWebSocketConnection(
          `test-computer-${i + 1}`,
        );
        connections.push(ws);
      }

      this.testResults.websocketTests.push({
        test: 'Multiple WebSocket Connections',
        success: true,
        count: connections.length,
      });
      console.log(
        `✅ Multiple WebSocket connections working (${connections.length} connections)`,
      );

      // Send messages from all connections
      connections.forEach((ws, index) => {
        ws.send(
          JSON.stringify({
            type: 'chat',
            message: `Message from computer ${index + 1}`,
            room: 'test',
          }),
        );
      });

      setTimeout(() => {
        connections.forEach((ws) => ws.close());
      }, 2000);
    } catch (error) {
      this.testResults.websocketTests.push({
        test: 'Multiple WebSocket Connections',
        success: false,
        error: error.message,
      });
      console.log('❌ Multiple WebSocket connections failed:', error.message);
    }
  }

  async testReconnectionScenarios() {
    console.log('\n🔄 Testing Reconnection Scenarios...');

    try {
      // Create connection
      const ws = await this.createWebSocketConnection('reconnection-test');

      // Simulate connection loss
      console.log('🔌 Simulating connection loss...');
      ws.close();

      // Wait and try to reconnect
      setTimeout(async () => {
        try {
          const newWs =
            await this.createWebSocketConnection('reconnection-test');
          this.testResults.reconnectionTests.push({
            test: 'Reconnection After Loss',
            success: true,
          });
          console.log('✅ Reconnection after loss working');

          setTimeout(() => {
            newWs.close();
          }, 1000);
        } catch (error) {
          this.testResults.reconnectionTests.push({
            test: 'Reconnection After Loss',
            success: false,
            error: error.message,
          });
          console.log('❌ Reconnection after loss failed:', error.message);
        }
      }, 2000);
    } catch (error) {
      this.testResults.reconnectionTests.push({
        test: 'Reconnection After Loss',
        success: false,
        error: error.message,
      });
      console.log('❌ Reconnection test failed:', error.message);
    }
  }

  async testMultiComputerSimulation() {
    console.log('\n🖥️ Testing Multi-Computer Simulation...')
const computers = []
const computerCount = 5;

    try {
      // Create multiple simulated computers
      for (let i = 0; i < computerCount; i++) {
        const computer = {
          id: `simulated-computer-${i + 1}`,
          name: `Computer ${i + 1}`,
          platform: i % 2 === 0 ? 'darwin' : 'win32',
          connection: null,
        };

        computer.connection = await this.createWebSocketConnection(computer.id);
        computers.push(computer);

        // Send registration message
        computer.connection.send(
          JSON.stringify({
            type: 'register',
            computerId: computer.id,
            capabilities: {
              platform: computer.platform,
              arch: 'x64',
              nodeVersion: process.version,
            },
          }),
        );
      }

      this.testResults.websocketTests.push({
        test: 'Multi-Computer Simulation',
        success: true,
        computerCount: computers.length,
      });
      console.log(
        `✅ Multi-computer simulation working (${computers.length} computers)`,
      );

      // Send messages from all computers
      computers.forEach((computer, index) => {
        setTimeout(() => {
          computer.connection.send(
            JSON.stringify({
              type: 'chat',
              message: `Hello from ${computer.name}!`,
              room: 'general',
            }),
          );
        }, index * 500);
      });

      // Clean up after 5 seconds
      setTimeout(() => {
        computers.forEach((computer) => {
          if (computer.connection.readyState === WebSocket.OPEN) {
            computer.connection.close();
          }
        });
        console.log('🧹 Cleaned up simulated computers');
      }, 5000);
    } catch (error) {
      this.testResults.websocketTests.push({
        test: 'Multi-Computer Simulation',
        success: false,
        error: error.message,
      });
      console.log('❌ Multi-computer simulation failed:', error.message);
    }
  }

  async makeHttpRequest(path, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, CONFIG.CHAT_SERVER)
const options = {
        hostname: url.hostname,
        port: url.port,
        path: url.pathname,
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      }
const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            resolve(data);
          }
        });
      });

      req.on('error', reject);

      if (body) {
        req.write(JSON.stringify(body));
      }
      req.end();
    });
  }

  async createWebSocketConnection(computerId) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(CONFIG.WEBSOCKET_URL);

      ws.on('open', () => {
        resolve(ws);
      });

      ws.on('message', (data) => {
        try {
          const message = JSON.parse(data);
          this.handleWebSocketMessage(message, computerId);
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      });

      ws.on('error', reject);

      // Timeout after 5 seconds
      setTimeout(() => {
        reject(new Error('WebSocket connection timeout'));
      }, 5000);
    });
  }

  handleWebSocketMessage(message, computerId) {
    this.messageCount++;
    console.log(
      `📨 [${computerId}] Received: ${message.type} - ${message.message || 'No message'}`,
    );
  }

  printTestResults() {
    console.log('\n📊 Test Results Summary');
    console.log('========================')
const allTests = [
      ...this.testResults.httpTests,
      ...this.testResults.websocketTests,
      ...this.testResults.reconnectionTests,
    ]
const passed = allTests.filter((test) => test.success).length
const total = allTests.length;

    console.log(`✅ Passed: ${passed}/${total}`);
    console.log(`❌ Failed: ${total - passed}/${total}`);
    console.log(`📈 Success Rate: ${((passed / total) * 100).toFixed(1)}%`);

    console.log('\n📋 Detailed Results:');
    allTests.forEach((test) => {
      const status = test.success ? '✅' : '❌';
      console.log(`${status} ${test.test}`);
      if (!test.success && test.error) {
        console.log(`   Error: ${test.error}`);
      }
    });

    console.log(`\n💬 Total Messages Received: ${this.messageCount}`);
    console.log('🎉 Test completed!');
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  const tester = new ChatReconnectionTester();
  tester.runAllTests();
}

module.exports = ChatReconnectionTester;

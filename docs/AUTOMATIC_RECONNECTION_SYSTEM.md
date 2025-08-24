# Automatic Reconnection System for Chat Sessions

## Overview

This document describes the comprehensive automatic reconnection system implemented for all chat sessions on the current computer. The system ensures persistent WebSocket connectivity across network interruptions, providing a seamless user experience.

## System Architecture

### Core Components

1. **WebSocket Reconnection Manager** (`src/utils/websocketReconnectionManager.ts`)
   - Centralized reconnection logic with exponential backoff and jitter
   - Connection health monitoring and quality assessment
   - Event-driven architecture for reconnection events

2. **Enhanced WebSocket Hook** (`src/hooks/useWebSocket.ts`)
   - React hook encapsulating Socket.IO client with automatic reconnection
   - Heartbeat pings and latency measurement
   - Connection quality monitoring and state management

3. **Chat Components Integration**
   - `ChatWidget.tsx` - General chat with reconnection support
   - `ChatAssistant.tsx` - AI assistant chat with reconnection
   - `SupportChatbot.tsx` - Support chat with aggressive reconnection

4. **Socket.IO Server** (`pages/api/socket.ts`)
   - Server-side socket management with reconnection handling
   - Room management and message broadcasting
   - Connection health monitoring

## Features

### Automatic Reconnection

- **Exponential Backoff**: Intelligent retry delays (1s, 2s, 4s, 8s, 16s)
- **Jitter**: Random delay variation to prevent thundering herd
- **Max Attempts**: Configurable maximum reconnection attempts (default: 5)
- **Health Monitoring**: Continuous connection quality assessment

### Connection Quality Assessment

- **Excellent**: < 50ms latency (🟢)
- **Good**: 50-100ms latency (🟡)
- **Poor**: 100-200ms latency (🟠)
- **Disconnected**: > 200ms or failed connections (🔴)

### Real-time Monitoring

- **Heartbeat Pings**: Regular latency measurement
- **Connection Status**: Visual indicators in UI
- **Health Checks**: Periodic connection quality updates
- **Event Logging**: Comprehensive reconnection event tracking

## Implementation Details

### Reconnection Manager Configuration

```typescript
const config = {
  baseDelay: 1000, // Initial delay in ms
  maxDelay: 5000, // Maximum delay in ms
  maxAttempts: 5, // Maximum reconnection attempts
  backoffMultiplier: 2, // Exponential backoff multiplier
  jitter: true, // Enable jitter for randomization
  healthCheckInterval: 5000, // Health check frequency
  pingTimeout: 3000, // Ping timeout in ms
};
```

### WebSocket Hook Usage

```typescript
const {
  socket,
  connectionState,
  rooms,
  messages,
  joinRoom,
  sendMessage,
  reconnect,
} = useWebSocket({
  autoConnect: true,
  enableConnectionQuality: true,
  onReconnect: (attemptNumber) => {
    console.log('Reconnected after', attemptNumber, 'attempts');
  },
  onConnectionQualityChange: (quality) => {
    console.log('Connection quality:', quality);
  },
});
```

### Chat Component Integration

```typescript
// Initialize reconnection manager
const reconnectionManager = getGlobalReconnectionManager({
  maxAttempts: 10, // More aggressive for support chat
  baseDelay: 500, // Faster initial retry
});

// Listen to reconnection events
useEffect(() => {
  reconnectionManager.on('reconnection_attempt', handleReconnectionAttempt);
  reconnectionManager.on('reconnection_success', handleReconnectionSuccess);
  reconnectionManager.on('health_check', handleHealthCheck);

  return () => {
    reconnectionManager.off('reconnection_attempt', handleReconnectionAttempt);
    reconnectionManager.off('reconnection_success', handleReconnectionSuccess);
    reconnectionManager.off('health_check', handleHealthCheck);
  };
}, [reconnectionManager]);
```

## Testing

### Test Scripts

1. **Basic Connection Test** (`scripts/test-reconnection.js`)
   - Tests initial connection establishment
   - Verifies room joining and message sending
   - Basic disconnection simulation

2. **Comprehensive Reconnection Test** (`scripts/test-reconnection-comprehensive.js`)
   - Full reconnection cycle testing
   - Network interruption simulation
   - Reconnection success verification

3. **Test Socket Server** (`scripts/test-socket-server.js`)
   - Isolated socket server for testing
   - Complete Socket.IO event handling
   - Health check endpoints

### Running Tests

```bash
# Start test socket server
node scripts/test-socket-server.js &

# Run comprehensive reconnection tests
node scripts/test-reconnection-comprehensive.js

# Check automated chat system status
npm run chat:status
```

## Chat Session Types

### 1. General Chat Widget

- **Room**: `general-chat`
- **Features**: Standard reconnection, typing indicators, read receipts
- **Reconnection**: Standard exponential backoff

### 2. AI Assistant Chat

- **Room**: `ai-assistant`
- **Features**: AI response simulation, connection quality display
- **Reconnection**: Enhanced with AI processing awareness

### 3. Support Chatbot

- **Room**: `support-chat`
- **Features**: Keyword-based responses, aggressive reconnection
- **Reconnection**: Faster retry intervals for critical support

## Production Deployment

### Environment Variables

```bash
# Socket.IO Configuration
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
NEXT_PUBLIC_SOCKET_PATH=/api/socket

# Reconnection Settings
NEXT_PUBLIC_RECONNECTION_MAX_ATTEMPTS=5
NEXT_PUBLIC_RECONNECTION_BASE_DELAY=1000
NEXT_PUBLIC_RECONNECTION_MAX_DELAY=5000
```

### Netlify Configuration

The system is configured for Netlify deployment with:

- Automatic environment variable management
- WebSocket support through Netlify Functions
- CORS configuration for cross-origin requests

## Monitoring and Logging

### Connection Events

```typescript
// Reconnection attempt
reconnectionManager.on('reconnection_attempt', (event) => {
  console.log(`Attempt ${event.attempt} at ${event.timestamp}`);
});

// Successful reconnection
reconnectionManager.on('reconnection_success', (event) => {
  console.log(`Reconnected after ${event.attempt} attempts`);
});

// Reconnection failure
reconnectionManager.on('reconnection_failure', (event) => {
  console.error(`Failed after ${event.attempt} attempts: ${event.error}`);
});

// Health check
reconnectionManager.on('health_check', (event) => {
  console.log(
    `Health: ${event.health.connectionQuality} (${event.health.latency}ms)`,
  );
});
```

### Health Metrics

- **Connection Quality**: Real-time quality assessment
- **Latency**: Average ping response time
- **Reconnection Success Rate**: Percentage of successful reconnections
- **Uptime**: Total connection time vs. downtime

## Troubleshooting

### Common Issues

1. **Connection Not Establishing**
   - Check socket server is running
   - Verify CORS configuration
   - Check network connectivity

2. **Reconnection Not Working**
   - Verify reconnection manager is initialized
   - Check reconnection configuration
   - Monitor reconnection events

3. **Poor Connection Quality**
   - Check network latency
   - Verify server performance
   - Monitor connection health metrics

### Debug Commands

```bash
# Check socket server status
curl http://localhost:3001/health

# Monitor reconnection system
npm run chat:status

# Test reconnection manually
node scripts/test-reconnection-comprehensive.js
```

## Performance Considerations

### Optimization Strategies

1. **Connection Pooling**: Reuse connections when possible
2. **Message Batching**: Batch messages during reconnection
3. **State Persistence**: Maintain chat state across reconnections
4. **Progressive Enhancement**: Graceful degradation for poor connections

### Resource Usage

- **Memory**: Minimal overhead for reconnection management
- **CPU**: Low impact from health checks and ping monitoring
- **Network**: Efficient heartbeat mechanism with configurable intervals

## Future Enhancements

### Planned Features

1. **Multi-Server Support**: Load balancing across multiple socket servers
2. **Advanced Analytics**: Detailed connection performance metrics
3. **Predictive Reconnection**: AI-powered reconnection timing
4. **Offline Support**: Message queuing during disconnections

### Scalability Improvements

1. **Horizontal Scaling**: Support for multiple socket server instances
2. **Redis Integration**: Shared state across server instances
3. **Message Persistence**: Database storage for message history
4. **Rate Limiting**: Prevent abuse during reconnection attempts

## Conclusion

The automatic reconnection system provides robust, reliable chat connectivity across all sessions on the current computer. With comprehensive testing, monitoring, and graceful error handling, the system ensures a seamless user experience even during network interruptions.

The implementation follows best practices for WebSocket reconnection, includes comprehensive testing, and is ready for production deployment with full monitoring and logging capabilities.

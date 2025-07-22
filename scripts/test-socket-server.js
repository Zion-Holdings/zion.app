#!/usr/bin/env node

const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors');

console.log('🚀 Starting Test Socket Server...')
const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:3006',
      'http://localhost:3007',
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  },
  transports: ['websocket', 'polling'],
});

// Store active connections
const activeConnections = new Map();

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log(`✅ Client connected: ${socket.id}`);

  socket.on('error', (err) => {
    console.error(`❌ Socket error for ${socket.id}:`, err);
  });

  // Store connection info
  activeConnections.set(socket.id, {
    id: socket.id,
    connectedAt: Date.now(),
    reconnectAttempts: 0,
    lastActivity: Date.now(),
    rooms: new Set(),
  });

  // Handle room joining
  socket.on('join-room', (roomId, callback) => {
    try {
      socket.join(roomId)
const connection = activeConnections.get(socket.id);
      if (connection) {
        connection.rooms.add(roomId);
        connection.lastActivity = Date.now();
      }

      // Notify others in room
      socket.to(roomId).emit('user-joined', {
        userId: socket.id,
        timestamp: new Date().toISOString(),
      });

      if (callback) callback({ success: true, roomId });
      console.log(`🎯 User ${socket.id} joined room: ${roomId}`);
    } catch (error) {
      console.error('Error joining room:', error);
      if (callback) callback({ success: false, error: error.message });
    }
  });

  // Handle room leaving
  socket.on('leave-room', (roomId, callback) => {
    try {
      socket.leave(roomId)
const connection = activeConnections.get(socket.id);
      if (connection) {
        connection.rooms.delete(roomId);
        connection.lastActivity = Date.now();
      }

      // Notify others in room
      socket.to(roomId).emit('user-left', {
        userId: socket.id,
        timestamp: new Date().toISOString(),
      });

      if (callback) callback({ success: true, roomId });
      console.log(`👋 User ${socket.id} left room: ${roomId}`);
    } catch (error) {
      console.error('Error leaving room:', error);
      if (callback) callback({ success: false, error: error.message });
    }
  });

  // Handle chat messages
  socket.on('send-message', (data, callback) => {
    try {
      const { roomId, message, sender, type = 'text', metadata } = data
const messageData = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        roomId,
        message,
        sender,
        type,
        metadata,
        timestamp: new Date().toISOString(),
        delivered: true,
      };

      // Broadcast to room
      socket.to(roomId).emit('new-message', messageData);

      // Update connection activity
      const connection = activeConnections.get(socket.id);
      if (connection) {
        connection.lastActivity = Date.now();
      }

      // Send delivery confirmation
      if (callback) callback({ success: true, messageId: messageData.id });
      console.log(
        `💬 Message sent in room ${roomId}: ${message.substring(0, 50)}...`,
      );
    } catch (error) {
      console.error('Error sending message:', error);
      if (callback) callback({ success: false, error: error.message });
    }
  });

  // Handle typing indicators
  socket.on('start-typing', (data) => {
    socket.to(data.roomId).emit('user-typing', {
      userId: socket.id,
      roomId: data.roomId,
      isTyping: true,
      timestamp: new Date().toISOString(),
    });
  });

  socket.on('stop-typing', (data) => {
    socket.to(data.roomId).emit('user-typing', {
      userId: socket.id,
      roomId: data.roomId,
      isTyping: false,
      timestamp: new Date().toISOString(),
    });
  });

  // Handle read receipts
  socket.on('mark-read', (data) => {
    socket.to(data.roomId).emit('messages-read', {
      userId: socket.id,
      roomId: data.roomId,
      messageIds: data.messageIds,
      timestamp: new Date().toISOString(),
    });
  });

  // Handle connection health check
  socket.on('ping', (callback) => {
    const connection = activeConnections.get(socket.id);
    if (connection) {
      connection.lastActivity = Date.now();
    }
    if (callback) callback({ timestamp: Date.now() });
  });

  // Handle reconnection
  socket.on('reconnect', (attemptNumber) => {
    console.log(
      `🔄 Client reconnected: ${socket.id}, attempt: ${attemptNumber}`,
    )
const connection = activeConnections.get(socket.id);
    if (connection) {
      connection.reconnectAttempts = attemptNumber;
      connection.lastActivity = Date.now();
    }
  });

  // Handle reconnection attempts
  socket.on('reconnect_attempt', (attemptNumber) => {
    console.log(
      `🔄 Reconnection attempt ${attemptNumber} for client: ${socket.id}`,
    )
const connection = activeConnections.get(socket.id);
    if (connection) {
      connection.reconnectAttempts = attemptNumber;
    }
  });

  // Handle disconnection
  socket.on('disconnect', (reason) => {
    console.log(`🔌 Client disconnected: ${socket.id}, reason: ${reason}`)
const connection = activeConnections.get(socket.id);
    if (connection) {
      // Notify all rooms that user is offline
      connection.rooms.forEach((roomId) => {
        socket.to(roomId).emit('user-offline', {
          userId: socket.id,
          timestamp: new Date().toISOString(),
        });
      });
    }

    activeConnections.delete(socket.id);
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    message: 'Socket.IO server is running',
    activeConnections: activeConnections.size,
    timestamp: new Date().toISOString(),
  });
});

// Socket status endpoint
app.get('/api/socket', (req, res) => {
  res.json({
    status: 'running',
    message: 'Socket.IO server is running',
    activeConnections: activeConnections.size,
    timestamp: new Date().toISOString(),
  });
})
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`✅ Test Socket Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 Socket API: http://localhost:${PORT}/api/socket`);
  console.log(`📊 Active connections: ${activeConnections.size}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down test socket server...');
  server.close(() => {
    console.log('✅ Test socket server stopped');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Terminating test socket server...');
  server.close(() => {
    console.log('✅ Test socket server stopped');
    process.exit(0);
  });
});

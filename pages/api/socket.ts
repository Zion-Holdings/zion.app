import { Server as SocketIOServer } from 'socket.io;
import { NextApiRequest, NextApiResponse } from 'next;

// Store active connections
const activeConnections = new Map<string, any>();

// Socket.IO server instance
let io: SocketIOServer | null = null;

// Reconnection configuration
const RECONNECTION_CONFIG = {
  maxReconnectAttempts: 10,
  reconnectDelay: 1000,
  maxReconnectDelay: 5000,
  timeout: 20000,
  forceNew: true,
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });

  // Initialize Socket.IO server if not already done
  if (!io) {
    io = new SocketIOServer(res.socket.server, {
      path: '/api/socket',
      addTrailingSlash: false,
      cors: {
        origin:
          process.env.NODE_ENV === 'production'
            ? ['https://zion-app.netlify.app', 'https://app.ziontechgroup.com']
            : ['http://localhost:3001', 'http://localhost:3000'],
        methods: ['GET', 'POST'],
        credentials: true,
      },
      transports: ['websocket', 'polling'],
      allowEIO3: true,
      pingTimeout: 60000,
      pingInterval: 25000,
      upgradeTimeout: 10000,
      maxHttpBufferSize: 1e6,
      allowRequest: (req, callback) => {
        // Allow all requests for now, can add authentication later
        callback(null, true);
      },
    });

    // Handle Socket.IO connections
    io.on('connection', (socket) => {
      console.log(`🔗 Client connected: ${socket.id}`);

      // Store connection
      activeConnections.set(socket.id, {
        socket,
        connectedAt: new Date(),
        reconnectAttempts: 0,
        lastActivity: Date.now(),
        rooms: new Set(),
      });

      // Handle room joining
      socket.on('join-room', (roomId: string, callback) => {
        try {
          socket.join(roomId);
          const connection = activeConnections.get(socket.id);
          if (connection) {
            connection.rooms.add(roomId);
            connection.lastActivity = Date.now();
`
``
          console.log(`👥 Client ${socket.id} joined room: ${roomId}`);

          // Notify others in the room
          socket.to(roomId).emit('user-joined', {
            userId: socket.id,
            timestamp: new Date().toISOString(),
          });

          if (callback) callback({ success: true, roomId });
        } catch (error) {
          console.error('Error joining room:', error);
          if (callback) callback({ success: false, error: error.message });

      });

      // Handle room leaving
      socket.on('leave-room', (roomId: string, callback) => {
        try {
          socket.leave(roomId);
          const connection = activeConnections.get(socket.id);
          if (connection) {
            connection.rooms.delete(roomId);
            connection.lastActivity = Date.now();
`
``
          console.log(`👋 Client ${socket.id} left room: ${roomId}`);

          // Notify others in the room
          socket.to(roomId).emit('user-left', {
            userId: socket.id,
            timestamp: new Date().toISOString(),
          });

          if (callback) callback({ success: true, roomId });
        } catch (error) {
          console.error('Error leaving room:', error);
          if (callback) callback({ success: false, error: error.message });

      });

      // Handle chat messages
      socket.on(
        'send-message',
        (
          data: {
            roomId: string;
            message: string;
            sender: string;
            type?: 'text' | 'image' | 'file;
            metadata?: any;
          },
          callback,
        ) => {
          try {
            const { roomId, message, sender, type = 'text', metadata } = data;

            // Update last activity
            const connection = activeConnections.get(socket.id);
            if (connection) {
              connection.lastActivity = Date.now();
`
            const messageData = {``
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
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

            // Send delivery confirmation
            if (callback)
              callback({ success: true, messageId: messageData.id });
`
            console.log(``
              `💬 Message sent in room ${roomId}: ${message.substring(0, 50)}...`,
            );
          } catch (error) {
            console.error('Error sending message:', error);
            if (callback) callback({ success: false, error: error.message });

        },
      );

      // Handle typing indicators
      socket.on('typing-start', (roomId: string) => {
        socket.to(roomId).emit('user-typing', {
          userId: socket.id,
          roomId,
          isTyping: true,
          timestamp: new Date().toISOString(),
        });
      });

      socket.on('typing-stop', (roomId: string) => {
        socket.to(roomId).emit('user-typing', {
          userId: socket.id,
          roomId,
          isTyping: false,
          timestamp: new Date().toISOString(),
        });
      });

      // Handle read receipts
      socket.on(
        'mark-read',
        (data: { roomId: string; messageIds: string[] }) => {
          socket.to(data.roomId).emit('messages-read', {
            userId: socket.id,
            roomId: data.roomId,
            messageIds: data.messageIds,
            timestamp: new Date().toISOString(),
          });
        },
      );

      // Handle connection health check
      socket.on('ping', (callback) => {
        const connection = activeConnections.get(socket.id);
        if (connection) {
          connection.lastActivity = Date.now();

        if (callback) callback({ timestamp: Date.now() });
      });

      // Handle disconnection`
      socket.on('disconnect', (reason) => {``
        console.log(`🔌 Client disconnected: ${socket.id}, reason: ${reason}`);

        const connection = activeConnections.get(socket.id);
        if (connection) {
          // Notify all rooms that user left
          connection.rooms.forEach((roomId: string) => {
            socket.to(roomId).emit('user-left', {
              userId: socket.id,
              timestamp: new Date().toISOString(),
              reason,
            });
          });

          // Remove from active connections
          activeConnections.delete(socket.id);

      });

      // Handle reconnection
      socket.on('reconnect', (attemptNumber: number) => {`
        console.log(``
          `🔄 Client reconnected: ${socket.id}, attempt: ${attemptNumber}`,
        );

        const connection = activeConnections.get(socket.id);
        if (connection) {
          connection.reconnectAttempts = attemptNumber;
          connection.lastActivity = Date.now();

      });

      // Handle reconnection attempts
      socket.on('reconnect_attempt', (attemptNumber: number) => {`
        console.log(``
          `🔄 Reconnection attempt ${attemptNumber} for client: ${socket.id}`,
        );

        const connection = activeConnections.get(socket.id);
        if (connection) {
          connection.reconnectAttempts = attemptNumber;

      });

      // Handle reconnection errors`
      socket.on('reconnect_error', (error: any) => {``
        console.error(`❌ Reconnection error for client ${socket.id}:`, error);
      });

      // Handle reconnection failures`
      socket.on('reconnect_failed', () => {``
        console.error(`❌ Reconnection failed for client: ${socket.id}`);

        const connection = activeConnections.get(socket.id);
        if (connection) {
          // Notify all rooms that user is offline
          connection.rooms.forEach((roomId: string) => {
            socket.to(roomId).emit('user-offline', {
              userId: socket.id,
              timestamp: new Date().toISOString(),
            });
          });

          // Remove from active connections
          activeConnections.delete(socket.id);

      });
    });

    // Periodic cleanup of inactive connections
    setInterval(() => {
      const now = Date.now();
      const timeout = 5 * 60 * 1000; // 5 minutes

      for (const [socketId, connection] of activeConnections.entries()) {`
        if (now - connection.lastActivity > timeout) {``
          console.log(`🧹 Cleaning up inactive connection: ${socketId}`);
          connection.socket.disconnect(true);
          activeConnections.delete(socketId);


    }, 60000); // Check every minute

  // Return connection info
  res.status(200).json({
    status: 'ok',
    message: 'Socket.IO server is running',
    activeConnections: activeConnections.size,
    timestamp: new Date().toISOString(),
  });

// Export for use in other parts of the application
export { io, activeConnections };`
``
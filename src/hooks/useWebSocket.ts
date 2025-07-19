import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { io, Socket } from 'socket.io-client';

export interface WebSocketMessage {
  id: string;
  roomId: string;
  message: string;
  sender: string;
  type?: 'text' | 'image' | 'file';
  metadata?: any;
  timestamp: string;
  delivered: boolean;
}

export interface WebSocketRoomState {
  isJoined: boolean;
  typingUsers: string[];
  unreadCount: number;
  lastActivity: Date;
}

export interface WebSocketConnectionState {
  isConnected: boolean;
  isConnecting: boolean;
  isReconnecting: boolean;
  reconnectAttempts: number;
  lastConnected: Date | null;
  lastDisconnected: Date | null;
  error: string | null;
  connectionQuality: 'excellent' | 'good' | 'poor' | 'disconnected';
  latency: number | null;
}

export interface UseWebSocketOptions {
  autoConnect?: boolean;
  autoReconnect?: boolean;
  maxReconnectAttempts?: number;
  reconnectDelay?: number;
  reconnectDelayMax?: number;
  timeout?: number;
  enableHeartbeat?: boolean;
  heartbeatInterval?: number;
  enableConnectionQuality?: boolean;
  onConnect?: () => void;
  onDisconnect?: (reason: string) => void;
  onReconnect?: (attemptNumber: number) => void;
  onReconnectAttempt?: (attemptNumber: number) => void;
  onReconnectError?: (error: any) => void;
  onReconnectFailed?: () => void;
  onError?: (error: any) => void;
  onConnectionQualityChange?: (quality: WebSocketConnectionState['connectionQuality']) => void;
}

export interface UseWebSocketReturn {
  connectionState: WebSocketConnectionState;
  rooms: Map<string, WebSocketRoomState>;
  messages: Map<string, WebSocketMessage[]>;
  joinRoom: (roomId: string) => Promise<boolean>;
  leaveRoom: (roomId: string) => void;
  sendMessage: (roomId: string, message: string, type?: 'text' | 'image' | 'file', metadata?: any) => Promise<boolean>;
  startTyping: (roomId: string) => void;
  stopTyping: (roomId: string) => void;
  markMessagesAsRead: (roomId: string, messageIds: string[]) => void;
  connect: () => void;
  disconnect: () => void;
  reconnect: () => void;
  ping: () => Promise<number>;
  socket: Socket | null;
}

const DEFAULT_OPTIONS: UseWebSocketOptions = {
  autoConnect: true,
  autoReconnect: true,
  maxReconnectAttempts: 10,
  reconnectDelay: 1000,
  reconnectDelayMax: 5000,
  timeout: 20000,
  enableHeartbeat: true,
  heartbeatInterval: 30000,
  enableConnectionQuality: true,
};

export function useWebSocket(options: UseWebSocketOptions = {}): UseWebSocketReturn {
  const config = { ...DEFAULT_OPTIONS, ...options };
  
  // Refs
  const socketRef = useRef<Socket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const connectionQualityIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastPingTimeRef = useRef<number>(0);
  const pingLatenciesRef = useRef<number[]>([]);
  
  // State
  const [connectionState, setConnectionState] = useState<WebSocketConnectionState>({
    isConnected: false,
    isConnecting: false,
    isReconnecting: false,
    reconnectAttempts: 0,
    lastConnected: null,
    lastDisconnected: null,
    error: null,
    connectionQuality: 'disconnected',
    latency: null,
  });
  
  const [rooms, setRooms] = useState<Map<string, WebSocketRoomState>>(new Map());
  const [messages, setMessages] = useState<Map<string, WebSocketMessage[]>>(new Map());
  
  // Memoized socket URL
  const socketUrl = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host;
    return `${protocol}//${host}`;
  }, []);
  
  // Calculate exponential backoff delay
  const getReconnectDelay = useCallback((attempt: number): number => {
    const baseDelay = config.reconnectDelay || 1000;
    const maxDelay = config.reconnectDelayMax || 5000;
    const delay = Math.min(baseDelay * Math.pow(2, attempt), maxDelay);
    // Add jitter to prevent thundering herd
    return delay + Math.random() * 1000;
  }, [config.reconnectDelay, config.reconnectDelayMax]);
  
  // Update connection quality based on latency
  const updateConnectionQuality = useCallback((latency: number) => {
    let quality: WebSocketConnectionState['connectionQuality'] = 'excellent';
    
    if (latency > 200) quality = 'poor';
    else if (latency > 100) quality = 'good';
    
    setConnectionState(prev => {
      if (prev.connectionQuality !== quality) {
        config.onConnectionQualityChange?.(quality);
        return { ...prev, connectionQuality: quality, latency };
      }
      return { ...prev, latency };
    });
  }, [config.onConnectionQualityChange]);
  
  // Perform ping to measure latency
  const performPing = useCallback(async (): Promise<number> => {
    if (!socketRef.current?.connected) {
      throw new Error('Not connected');
    }
    
    return new Promise((resolve) => {
      const startTime = Date.now();
      lastPingTimeRef.current = startTime;
      
      socketRef.current!.emit('ping', (response: any) => {
        const latency = Date.now() - startTime;
        pingLatenciesRef.current.push(latency);
        
        // Keep only last 10 ping results
        if (pingLatenciesRef.current.length > 10) {
          pingLatenciesRef.current.shift();
        }
        
        // Calculate average latency
        const avgLatency = pingLatenciesRef.current.reduce((a, b) => a + b, 0) / pingLatenciesRef.current.length;
        updateConnectionQuality(avgLatency);
        
        console.log(`🏓 Ping: ${latency}ms (avg: ${Math.round(avgLatency)}ms)`);
        resolve(latency);
      });
    });
  }, [updateConnectionQuality]);
  
  // Start heartbeat monitoring
  const startHeartbeat = useCallback(() => {
    if (!config.enableHeartbeat || heartbeatIntervalRef.current) return;
    
    heartbeatIntervalRef.current = setInterval(async () => {
      if (socketRef.current?.connected) {
        try {
          await performPing();
        } catch (error) {
          console.error('Heartbeat failed:', error);
          // If heartbeat fails, trigger reconnection
          if (socketRef.current) {
            socketRef.current.disconnect();
          }
        }
      }
    }, config.heartbeatInterval);
  }, [config.enableHeartbeat, config.heartbeatInterval, performPing]);
  
  // Stop heartbeat monitoring
  const stopHeartbeat = useCallback(() => {
    if (heartbeatIntervalRef.current) {
      clearInterval(heartbeatIntervalRef.current);
      heartbeatIntervalRef.current = null;
    }
  }, []);
  
  // Start connection quality monitoring
  const startConnectionQualityMonitoring = useCallback(() => {
    if (!config.enableConnectionQuality || connectionQualityIntervalRef.current) return;
    
    connectionQualityIntervalRef.current = setInterval(async () => {
      if (socketRef.current?.connected) {
        try {
          await performPing();
        } catch (error) {
          console.error('Connection quality check failed:', error);
        }
      }
    }, 60000); // Check every minute
  }, [config.enableConnectionQuality, performPing]);
  
  // Stop connection quality monitoring
  const stopConnectionQualityMonitoring = useCallback(() => {
    if (connectionQualityIntervalRef.current) {
      clearInterval(connectionQualityIntervalRef.current);
      connectionQualityIntervalRef.current = null;
    }
  }, []);
  
  // Initialize socket
  const initializeSocket = useCallback(() => {
    if (!socketUrl || socketRef.current) return;
    
    console.log('🔌 Initializing WebSocket connection...');
    
    socketRef.current = io(socketUrl, {
      path: '/api/socket',
      transports: ['websocket', 'polling'],
      autoConnect: config.autoConnect,
      reconnection: config.autoReconnect,
      reconnectionAttempts: config.maxReconnectAttempts,
      reconnectionDelay: config.reconnectDelay,
      reconnectionDelayMax: config.reconnectDelayMax,
      timeout: config.timeout,
      forceNew: true,
      // Enhanced reconnection options
      reconnectionAttempts: config.maxReconnectAttempts,
      reconnectionDelay: config.reconnectDelay,
      reconnectionDelayMax: config.reconnectDelayMax,
      maxReconnectionAttempts: config.maxReconnectAttempts,
    });
    
    const socket = socketRef.current;
    
    // Connection events
    socket.on('connect', () => {
      console.log('✅ WebSocket connected');
      setConnectionState(prev => ({
        ...prev,
        isConnected: true,
        isConnecting: false,
        isReconnecting: false,
        reconnectAttempts: 0,
        lastConnected: new Date(),
        error: null,
        connectionQuality: 'excellent',
      }));
      
      // Start monitoring
      startHeartbeat();
      startConnectionQualityMonitoring();
      
      config.onConnect?.();
    });
    
    socket.on('disconnect', (reason: string) => {
      console.log('🔌 WebSocket disconnected:', reason);
      setConnectionState(prev => ({
        ...prev,
        isConnected: false,
        isConnecting: false,
        isReconnecting: reason === 'io server disconnect',
        lastDisconnected: new Date(),
        connectionQuality: 'disconnected',
      }));
      
      // Stop monitoring
      stopHeartbeat();
      stopConnectionQualityMonitoring();
      
      config.onDisconnect?.(reason);
    });
    
    socket.on('connect_error', (error: any) => {
      console.error('❌ WebSocket connection error:', error);
      setConnectionState(prev => ({
        ...prev,
        isConnecting: false,
        error: error.message,
        connectionQuality: 'disconnected',
      }));
      
      config.onError?.(error);
    });
    
    // Reconnection events
    socket.on('reconnect', (attemptNumber: number) => {
      console.log('🔄 WebSocket reconnected after', attemptNumber, 'attempts');
      setConnectionState(prev => ({
        ...prev,
        isConnected: true,
        isReconnecting: false,
        reconnectAttempts: attemptNumber,
        lastConnected: new Date(),
        error: null,
        connectionQuality: 'excellent',
      }));
      
      // Rejoin all rooms
      rooms.forEach((roomState, roomId) => {
        if (roomState.isJoined) {
          socket.emit('join-room', roomId, (response: any) => {
            if (response.success) {
              console.log(`🔄 Rejoined room: ${roomId}`);
            }
          });
        }
      });
      
      // Restart monitoring
      startHeartbeat();
      startConnectionQualityMonitoring();
      
      config.onReconnect?.(attemptNumber);
    });
    
    socket.on('reconnect_attempt', (attemptNumber: number) => {
      console.log('🔄 WebSocket reconnection attempt:', attemptNumber);
      setConnectionState(prev => ({
        ...prev,
        isReconnecting: true,
        reconnectAttempts: attemptNumber,
        connectionQuality: 'disconnected',
      }));
      
      config.onReconnectAttempt?.(attemptNumber);
    });
    
    socket.on('reconnect_error', (error: any) => {
      console.error('❌ WebSocket reconnection error:', error);
      setConnectionState(prev => ({
        ...prev,
        error: error.message,
        connectionQuality: 'disconnected',
      }));
      
      config.onReconnectError?.(error);
    });
    
    socket.on('reconnect_failed', () => {
      console.error('❌ WebSocket reconnection failed');
      setConnectionState(prev => ({
        ...prev,
        isReconnecting: false,
        error: 'Reconnection failed after maximum attempts',
        connectionQuality: 'disconnected',
      }));
      
      config.onReconnectFailed?.();
    });
    
    // Room events
    socket.on('user-joined', (data: { userId: string; timestamp: string }) => {
      console.log('👥 User joined:', data.userId);
      // Update room state if needed
    });
    
    socket.on('user-left', (data: { userId: string; timestamp: string; reason?: string }) => {
      console.log('👋 User left:', data.userId, data.reason);
      // Update room state if needed
    });
    
    socket.on('user-offline', (data: { userId: string; timestamp: string }) => {
      console.log('📴 User went offline:', data.userId);
      // Update room state if needed
    });
    
    // Message events
    socket.on('new-message', (message: WebSocketMessage) => {
      console.log('💬 New message received:', message);
      setMessages(prev => {
        const newMessages = new Map(prev);
        const roomMessages = newMessages.get(message.roomId) || [];
        newMessages.set(message.roomId, [...roomMessages, message]);
        return newMessages;
      });
      
      // Update unread count
      setRooms(prev => {
        const newRooms = new Map(prev);
        const room = newRooms.get(message.roomId);
        if (room) {
          newRooms.set(message.roomId, {
            ...room,
            unreadCount: room.unreadCount + 1,
          });
        }
        return newRooms;
      });
    });
    
    // Typing events
    socket.on('user-typing', (data: { userId: string; roomId: string; isTyping: boolean; timestamp: string }) => {
      setRooms(prev => {
        const newRooms = new Map(prev);
        const room = newRooms.get(data.roomId);
        if (room) {
          const typingUsers = data.isTyping
            ? [...room.typingUsers, data.userId]
            : room.typingUsers.filter(id => id !== data.userId);
          
          newRooms.set(data.roomId, {
            ...room,
            typingUsers,
          });
        }
        return newRooms;
      });
    });
    
    // Read receipt events
    socket.on('messages-read', (data: { userId: string; roomId: string; messageIds: string[]; timestamp: string }) => {
      console.log('✅ Messages marked as read:', data.messageIds);
      // Update message delivery status if needed
    });
    
  }, [socketUrl, config, rooms, startHeartbeat, stopHeartbeat, startConnectionQualityMonitoring, stopConnectionQualityMonitoring]);
  
  // Connect function
  const connect = useCallback(() => {
    if (!socketRef.current) {
      initializeSocket();
    } else if (!socketRef.current.connected) {
      socketRef.current.connect();
    }
  }, [initializeSocket]);
  
  // Disconnect function
  const disconnect = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
  }, []);
  
  // Reconnect function with exponential backoff
  const reconnect = useCallback(() => {
    if (socketRef.current) {
      const currentAttempts = connectionState.reconnectAttempts;
      const delay = getReconnectDelay(currentAttempts);
      
      console.log(`🔄 Manual reconnection attempt ${currentAttempts + 1} in ${delay}ms`);
      
      socketRef.current.disconnect();
      
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      
      reconnectTimeoutRef.current = setTimeout(() => {
        socketRef.current?.connect();
      }, delay);
    }
  }, [connectionState.reconnectAttempts, getReconnectDelay]);
  
  // Join room function
  const joinRoom = useCallback(async (roomId: string): Promise<boolean> => {
    if (!socketRef.current?.connected) {
      console.error('Cannot join room: not connected');
      return false;
    }
    
    return new Promise((resolve) => {
      socketRef.current!.emit('join-room', roomId, (response: any) => {
        if (response.success) {
          setRooms(prev => {
            const newRooms = new Map(prev);
            newRooms.set(roomId, {
              isJoined: true,
              typingUsers: [],
              unreadCount: 0,
              lastActivity: new Date(),
            });
            return newRooms;
          });
          
          console.log(`✅ Joined room: ${roomId}`);
          resolve(true);
        } else {
          console.error('Failed to join room:', response.error);
          resolve(false);
        }
      });
    });
  }, []);
  
  // Leave room function
  const leaveRoom = useCallback((roomId: string) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('leave-room', roomId);
    }
    
    setRooms(prev => {
      const newRooms = new Map(prev);
      newRooms.delete(roomId);
      return newRooms;
    });
    
    console.log(`👋 Left room: ${roomId}`);
  }, []);
  
  // Send message function
  const sendMessage = useCallback(async (
    roomId: string,
    message: string,
    type: 'text' | 'image' | 'file' = 'text',
    metadata?: any
  ): Promise<boolean> => {
    if (!socketRef.current?.connected) {
      console.error('Cannot send message: not connected');
      return false;
    }
    
    return new Promise((resolve) => {
      socketRef.current!.emit('send-message', {
        roomId,
        message,
        sender: 'user', // This should come from user context
        type,
        metadata,
      }, (response: any) => {
        if (response.success) {
          // Add message to local state
          const newMessage: WebSocketMessage = {
            id: response.messageId,
            roomId,
            message,
            sender: 'user',
            type,
            metadata,
            timestamp: new Date().toISOString(),
            delivered: true,
          };
          
          setMessages(prev => {
            const newMessages = new Map(prev);
            const roomMessages = newMessages.get(roomId) || [];
            newMessages.set(roomId, [...roomMessages, newMessage]);
            return newMessages;
          });
          
          console.log(`✅ Message sent: ${message.substring(0, 50)}...`);
          resolve(true);
        } else {
          console.error('Failed to send message:', response.error);
          resolve(false);
        }
      });
    });
  }, []);
  
  // Typing functions
  const startTyping = useCallback((roomId: string) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('typing-start', roomId);
    }
  }, []);
  
  const stopTyping = useCallback((roomId: string) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('typing-stop', roomId);
    }
  }, []);
  
  // Mark messages as read
  const markMessagesAsRead = useCallback((roomId: string, messageIds: string[]) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('mark-read', { roomId, messageIds });
      
      // Update unread count
      setRooms(prev => {
        const newRooms = new Map(prev);
        const room = newRooms.get(roomId);
        if (room) {
          newRooms.set(roomId, {
            ...room,
            unreadCount: 0,
          });
        }
        return newRooms;
      });
    }
  }, []);
  
  // Ping function
  const ping = useCallback(async (): Promise<number> => {
    return performPing();
  }, [performPing]);
  
  // Initialize on mount
  useEffect(() => {
    if (config.autoConnect) {
      initializeSocket();
    }
    
    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (pingIntervalRef.current) {
        clearInterval(pingIntervalRef.current);
      }
      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
      }
      if (connectionQualityIntervalRef.current) {
        clearInterval(connectionQualityIntervalRef.current);
      }
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [config.autoConnect, initializeSocket]);
  
  return {
    connectionState,
    rooms,
    joinRoom,
    leaveRoom,
    sendMessage,
    messages,
    startTyping,
    stopTyping,
    markMessagesAsRead,
    connect,
    disconnect,
    reconnect,
    ping,
    socket: socketRef.current,
  };
} 
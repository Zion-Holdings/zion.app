import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useAnalytics } from './useAnalytics';

interface CollaborationUser {
  id: string;
  name: string;
  avatar?: string;
  color: string;
  isOnline: boolean;
  lastSeen: Date;
  cursor?: {
    x: number;
    y: number;
    element?: string;
  };
  selection?: {
    start: number;
    end: number;
    text: string;
  };
}

interface CollaborationMessage {
  id: string;
  type: 'cursor_move' | 'selection_change' | 'text_change' | 'user_join' | 'user_leave' | 'presence_update';
  userId: string;
  timestamp: Date;
  payload: any;
  metadata?: {
    sessionId: string;
    version: number;
    conflictResolution?: 'client' | 'server';
  };
}

interface CollaborationState {
  users: Map<string, CollaborationUser>;
  messages: CollaborationMessage[];
  isConnected: boolean;
  connectionStatus: 'connecting' | 'connected' | 'disconnected' | 'reconnecting';
  lastActivity: Date;
  conflicts: Array<{
    id: string;
    type: string;
    resolution: 'pending' | 'resolved' | 'ignored';
    timestamp: Date;
  }>;
}

interface CollaborationOptions {
  roomId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  enablePresence?: boolean;
  enableCursors?: boolean;
  enableSelection?: boolean;
  enableTextSync?: boolean;
  conflictResolution?: 'client' | 'server';
  reconnectAttempts?: number;
  reconnectDelay?: number;
  heartbeatInterval?: number;
  messageRetention?: number;
}

interface WebSocketConfig {
  url: string;
  protocols?: string | string[];
  options?: {
    maxReconnectAttempts?: number;
    reconnectInterval?: number;
    heartbeatInterval?: number;
    connectionTimeout?: number;
  };
}

export const useRealTimeCollaboration = (
  options: CollaborationOptions,
  wsConfig?: WebSocketConfig
) => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [state, setState] = useState<CollaborationState>({
    users: new Map(),
    messages: [],
    isConnected: false,
    connectionStatus: 'disconnected',
    lastActivity: new Date(),
    conflicts: []
  });

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const messageQueueRef = useRef<CollaborationMessage[]>([]);
  const presenceUpdateRef = useRef<NodeJS.Timeout | null>(null);

  // Generate user color
  const generateUserColor = useCallback((userId: string) => {
    const colors = [
      '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
      '#06B6D4', '#F97316', '#84CC16', '#EC4899', '#6366F1'
    ];
    const hash = userId.split('').reduce((a, b) => {
      a = ((a << 5) - a + b.charCodeAt(0)) & 0xffffffff;
      return a;
    }, 0);
    return colors[Math.abs(hash) % colors.length];
  }, []);

  // Initialize WebSocket connection
  const initializeConnection = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    try {
      const wsUrl = wsConfig?.url || `wss://your-websocket-server.com/collaboration/${options.roomId}`;
      wsRef.current = new WebSocket(wsUrl, wsConfig?.protocols);

      wsRef.current.onopen = () => {
        setState(prev => ({
          ...prev,
          isConnected: true,
          connectionStatus: 'connected'
        }));

        // Send user join message
        sendMessage({
          type: 'user_join',
          userId: options.userId,
          payload: {
            name: options.userName,
            avatar: options.userAvatar,
            color: generateUserColor(options.userId),
            timestamp: new Date()
          }
        });

        // Start heartbeat
        startHeartbeat();

        // Start presence updates
        if (options.enablePresence) {
          startPresenceUpdates();
        }

        trackEvent('collaboration', 'connection_established', 'websocket_connected');
      };

      wsRef.current.onmessage = (event) => {
        try {
          const message: CollaborationMessage = JSON.parse(event.data);
          handleIncomingMessage(message);
        } catch (error) {
          console.error('Failed to parse collaboration message:', error);
        }
      };

      wsRef.current.onclose = (event) => {
        setState(prev => ({
          ...prev,
          isConnected: false,
          connectionStatus: 'disconnected'
        }));

        stopHeartbeat();
        stopPresenceUpdates();

        // Attempt reconnection
        if (reconnectAttemptsRef.current < (options.reconnectAttempts || 5)) {
          scheduleReconnection();
        }

        trackEvent('collaboration', 'connection_lost', 'websocket_disconnected', undefined, { 
          code: event.code, 
          reason: event.reason 
        });
      };

      wsRef.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        trackEvent('collaboration', 'connection_error', 'websocket_error', undefined, { error: error.toString() });
      };

    } catch (error) {
      console.error('Failed to initialize WebSocket connection:', error);
      trackEvent('collaboration', 'connection_failed', 'websocket_init_failed', undefined, { 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  }, [options, wsConfig, generateUserColor, trackEvent]);

  // Send message through WebSocket
  const sendMessage = useCallback((message: Omit<CollaborationMessage, 'id' | 'timestamp'>) => {
    const fullMessage: CollaborationMessage = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    };

    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(fullMessage));
      trackEvent('collaboration', 'message_sent', message.type, undefined, { messageId: fullMessage.id });
    } else {
      // Queue message for later
      messageQueueRef.current.push(fullMessage);
      trackEvent('collaboration', 'message_queued', message.type, undefined, { messageId: fullMessage.id });
    }
  }, [trackEvent]);

  // Handle incoming messages
  const handleIncomingMessage = useCallback((message: CollaborationMessage) => {
    setState(prev => {
      const newState = { ...prev };
      newState.lastActivity = new Date();

      switch (message.type) {
        case 'user_join':
          handleUserJoin(message);
          break;
        case 'user_leave':
          handleUserLeave(message);
          break;
        case 'presence_update':
          handlePresenceUpdate(message);
          break;
        case 'cursor_move':
          handleCursorMove(message);
          break;
        case 'selection_change':
          handleSelectionChange(message);
          break;
        case 'text_change':
          handleTextChange(message);
          break;
      }

      // Add message to history
      newState.messages = [...prev.messages, message].slice(-(options.messageRetention || 1000));

      return newState;
    });

    trackEvent('collaboration', 'message_received', message.type, undefined, { 
      messageId: message.id,
      userId: message.userId 
    });
  }, [options.messageRetention, trackEvent]);

  // Handle user join
  const handleUserJoin = useCallback((message: CollaborationMessage) => {
    setState(prev => {
      const newUsers = new Map(prev.users);
      newUsers.set(message.userId, {
        id: message.userId,
        name: message.payload.name,
        avatar: message.payload.avatar,
        color: message.payload.color,
        isOnline: true,
        lastSeen: new Date()
      });
      return { ...prev, users: newUsers };
    });
  }, []);

  // Handle user leave
  const handleUserLeave = useCallback((message: CollaborationMessage) => {
    setState(prev => {
      const newUsers = new Map(prev.users);
      const user = newUsers.get(message.userId);
      if (user) {
        newUsers.set(message.userId, { ...(user as CollaborationUser), isOnline: false, lastSeen: new Date() });
      }
      return { ...prev, users: newUsers };
    });
  }, []);

  // Handle presence update
  const handlePresenceUpdate = useCallback((message: CollaborationMessage) => {
    setState(prev => {
      const newUsers = new Map(prev.users);
      const user = newUsers.get(message.userId);
      if (user) {
        newUsers.set(message.userId, { ...(user as CollaborationUser), lastSeen: new Date() });
      }
      return { ...prev, users: newUsers };
    });
  }, []);

  // Handle cursor movement
  const handleCursorMove = useCallback((message: CollaborationMessage) => {
    if (!options.enableCursors) return;

    setState(prev => {
      const newUsers = new Map(prev.users);
      const user = newUsers.get(message.userId);
      if (user) {
        newUsers.set(message.userId, {
          ...(user as CollaborationUser),
          cursor: message.payload
        });
      }
      return { ...prev, users: newUsers };
    });
  }, [options.enableCursors]);

  // Handle selection change
  const handleSelectionChange = useCallback((message: CollaborationMessage) => {
    if (!options.enableSelection) return;

    setState(prev => {
      const newUsers = new Map(prev.users);
      const user = newUsers.get(message.userId);
      if (user) {
        newUsers.set(message.userId, {
          ...(user as CollaborationUser),
          selection: message.payload
        });
      }
      return { ...prev, users: newUsers };
    });
  }, [options.enableSelection]);

  // Handle text change
  const handleTextChange = useCallback((message: CollaborationMessage) => {
    if (!options.enableTextSync) return;

    // Handle conflict resolution
    if (message.metadata?.conflictResolution) {
      setState(prev => ({
        ...prev,
        conflicts: [...prev.conflicts, {
          id: message.id,
          type: 'text_change',
          resolution: 'pending',
          timestamp: new Date()
        }]
      }));
    }

    // Emit text change event
    const event = new CustomEvent('collaborationTextChange', {
      detail: { message, userId: message.userId }
    });
    window.dispatchEvent(event);
  }, [options.enableTextSync]);

  // Start heartbeat
  const startHeartbeat = useCallback(() => {
    if (heartbeatIntervalRef.current) return;

    heartbeatIntervalRef.current = setInterval(() => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        sendMessage({
          type: 'presence_update',
          userId: options.userId,
          payload: { timestamp: new Date() }
        });
      }
    }, options.heartbeatInterval || 30000);
  }, [options.userId, options.heartbeatInterval, sendMessage]);

  // Stop heartbeat
  const stopHeartbeat = useCallback(() => {
    if (heartbeatIntervalRef.current) {
      clearInterval(heartbeatIntervalRef.current);
      heartbeatIntervalRef.current = null;
    }
  }, []);

  // Start presence updates
  const startPresenceUpdates = useCallback(() => {
    if (presenceUpdateRef.current) return;

    presenceUpdateRef.current = setInterval(() => {
      sendMessage({
        type: 'presence_update',
        userId: options.userId,
        payload: { timestamp: new Date() }
      });
    }, 10000);
  }, [options.userId, sendMessage]);

  // Stop presence updates
  const stopPresenceUpdates = useCallback(() => {
    if (presenceUpdateRef.current) {
      clearInterval(presenceUpdateRef.current);
      presenceUpdateRef.current = null;
    }
  }, []);

  // Schedule reconnection
  const scheduleReconnection = useCallback(() => {
    if (reconnectTimeoutRef.current) return;

    reconnectAttemptsRef.current++;
    setState(prev => ({ ...prev, connectionStatus: 'reconnecting' }));

    reconnectTimeoutRef.current = setTimeout(() => {
      initializeConnection();
      reconnectTimeoutRef.current = null;
    }, (options.reconnectDelay || 1000) * Math.pow(2, reconnectAttemptsRef.current - 1));
  }, [options.reconnectDelay, initializeConnection]);

  // Public API methods
  const updateCursor = useCallback((x: number, y: number, element?: string) => {
    if (!options.enableCursors) return;

    sendMessage({
      type: 'cursor_move',
      userId: options.userId,
      payload: { x, y, element }
    });
  }, [options.enableCursors, options.userId, sendMessage]);

  const updateSelection = useCallback((start: number, end: number, text: string) => {
    if (!options.enableSelection) return;

    sendMessage({
      type: 'selection_change',
      userId: options.userId,
      payload: { start, end, text }
    });
  }, [options.enableSelection, options.userId, sendMessage]);

  const syncTextChange = useCallback((change: any) => {
    if (!options.enableTextSync) return;

    sendMessage({
      type: 'text_change',
      userId: options.userId,
      payload: change,
      metadata: {
        sessionId: options.roomId,
        version: Date.now(),
        conflictResolution: options.conflictResolution
      }
    });
  }, [options.enableTextSync, options.userId, options.roomId, options.conflictResolution, sendMessage]);

  const resolveConflict = useCallback((conflictId: string, resolution: 'resolved' | 'ignored') => {
    setState(prev => ({
      ...prev,
      conflicts: prev.conflicts.map(conflict =>
        conflict.id === conflictId
          ? { ...conflict, resolution }
          : conflict
      )
    }));

    trackEvent('collaboration', 'conflict_resolved', resolution, undefined, { conflictId });
  }, [trackEvent]);

  const disconnect = useCallback(() => {
    if (wsRef.current) {
      sendMessage({
        type: 'user_leave',
        userId: options.userId,
        payload: { timestamp: new Date() }
      });

      wsRef.current.close();
      wsRef.current = null;
    }

    stopHeartbeat();
    stopPresenceUpdates();

    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }

    setState(prev => ({
      ...prev,
      isConnected: false,
      connectionStatus: 'disconnected'
    }));

    trackEvent('collaboration', 'user_disconnected', 'manual_disconnect');
  }, [options.userId, sendMessage, stopHeartbeat, stopPresenceUpdates, trackEvent]);

  // Initialize connection on mount
  useEffect(() => {
    initializeConnection();

    return () => {
      disconnect();
    };
  }, [initializeConnection, disconnect]);

  // Process queued messages when connection is restored
  useEffect(() => {
    if (state.isConnected && messageQueueRef.current.length > 0) {
      const queuedMessages = [...messageQueueRef.current];
      messageQueueRef.current = [];

      queuedMessages.forEach(message => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          wsRef.current.send(JSON.stringify(message));
        }
      });

      trackEvent('collaboration', 'queued_messages_sent', 'batch_send', queuedMessages.length);
    }
  }, [state.isConnected, trackEvent]);

  // Computed values
  const onlineUsers = useMemo(() => {
    return Array.from(state.users.values()).filter((user): user is CollaborationUser => {
      return typeof user === 'object' && user !== null && 'isOnline' in user && (user as CollaborationUser).isOnline;
    });
  }, [state.users]);

  const offlineUsers = useMemo(() => {
    return Array.from(state.users.values()).filter((user): user is CollaborationUser => {
      return typeof user === 'object' && user !== null && 'isOnline' in user && !(user as CollaborationUser).isOnline;
    });
  }, [state.users]);

  const activeCursors = useMemo(() => {
    return Array.from(state.users.values())
      .filter((user): user is CollaborationUser => {
        return typeof user === 'object' && user !== null && 'isOnline' in user && (user as CollaborationUser).isOnline && 'cursor' in user && !!(user as CollaborationUser).cursor;
      })
      .map(user => ({ ...(user as CollaborationUser).cursor!, user }));
  }, [state.users]);

  const activeSelections = useMemo(() => {
    return Array.from(state.users.values())
      .filter((user): user is CollaborationUser => {
        return typeof user === 'object' && user !== null && 'isOnline' in user && (user as CollaborationUser).isOnline && 'selection' in user && !!(user as CollaborationUser).selection;
      })
      .map(user => ({ ...(user as CollaborationUser).selection!, user }));
  }, [state.users]);

  return {
    // State
    state,
    onlineUsers,
    offlineUsers,
    activeCursors,
    activeSelections,
    
    // Actions
    updateCursor,
    updateSelection,
    syncTextChange,
    resolveConflict,
    disconnect,
    
    // Connection management
    initializeConnection,
    sendMessage,
    
    // Utilities
    isConnected: state.isConnected,
    connectionStatus: state.connectionStatus,
    lastActivity: state.lastActivity
  };
};
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';
import type { WebSocketMessage } from '../hooks/useWebSocket';
import { getGlobalReconnectionManager } from '../utils/websocketReconnectionManager';

interface ChatWidgetProps {
  roomId: string;
  title?: string;
  onClose?: () => void;
  className?: string;
  autoJoin?: boolean;
  showConnectionStatus?: boolean;
  maxHeight?: string;
}

export default function ChatWidget({
  roomId,
  title = 'Chat',
  onClose,
  className = '',
  autoJoin = true,
  showConnectionStatus = true,
  maxHeight = '400px',
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get global reconnection manager
  const reconnectionManager = getGlobalReconnectionManager();

  // WebSocket hook
  const {
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
  } = useWebSocket({
    autoConnect: true,
    autoReconnect: true,
    maxReconnectAttempts: 10,
    reconnectDelay: 1000,
    reconnectDelayMax: 5000,
    enableHeartbeat: true,
    heartbeatInterval: 30000,
    enableConnectionQuality: true,
    onConnect: () => {
      console.log('ChatWidget: Connected to WebSocket');
      reconnectionManager.handleReconnectionSuccess();
      if (autoJoin && isOpen) {
        joinRoom(roomId);
      }
    },
    onDisconnect: (reason) => {
      console.log('ChatWidget: Disconnected from WebSocket:', reason);
      // Start reconnection process
      if (socket) {
        reconnectionManager.startReconnection(socket, reason);
      }
    },
    onReconnect: (attemptNumber) => {
      console.log('ChatWidget: Reconnected after', attemptNumber, 'attempts');
      reconnectionManager.handleReconnectionSuccess();
      if (autoJoin && isOpen) {
        joinRoom(roomId);
      }
    },
    onReconnectFailed: () => {
      console.error('ChatWidget: Reconnection failed');
      reconnectionManager.handleReconnectionFailure('Max attempts reached');
    },
    onConnectionQualityChange: (quality) => {
      console.log('ChatWidget: Connection quality changed to', quality);
    },
  });

  // Get socket reference
  const socket = useWebSocket().socket;

  // Set up reconnection manager event listeners
  useEffect(() => {
    const handleReconnectionAttempt = (event: any) => {
      console.log(`🔄 Reconnection attempt ${event.attempt} for chat widget`);
    };

    const handleReconnectionSuccess = (event: any) => {
      console.log('✅ Chat widget reconnection successful');
    };

    const handleReconnectionFailure = (event: any) => {
      console.error('❌ Chat widget reconnection failed:', event.error);
    };

    const handleHealthCheck = (event: any) => {
      if (event.health && !event.health.isHealthy) {
        console.warn('⚠️ Chat widget connection health degraded');
      }
    };

    const handleConnectionQualityChange = (event: any) => {
      console.log(
        `📊 Chat widget connection quality: ${event.previous} → ${event.current}`,
      );
    };

    // Add event listeners
    reconnectionManager.on('reconnection_attempt', handleReconnectionAttempt);
    reconnectionManager.on('reconnection_success', handleReconnectionSuccess);
    reconnectionManager.on('reconnection_failure', handleReconnectionFailure);
    reconnectionManager.on('health_check', handleHealthCheck);
    reconnectionManager.on(
      'connection_quality_change',
      handleConnectionQualityChange,
    );

    // Start health monitoring if socket is available
    if (socket) {
      reconnectionManager.startHealthMonitoring(socket);
    }

    // Cleanup
    return () => {
      reconnectionManager.off(
        'reconnection_attempt',
        handleReconnectionAttempt,
      );
      reconnectionManager.off(
        'reconnection_success',
        handleReconnectionSuccess,
      );
      reconnectionManager.off(
        'reconnection_failure',
        handleReconnectionFailure,
      );
      reconnectionManager.off('health_check', handleHealthCheck);
      reconnectionManager.off(
        'connection_quality_change',
        handleConnectionQualityChange,
      );
    };
  }, [reconnectionManager, socket]);

  // Auto-join room when widget opens
  useEffect(() => {
    if (isOpen && autoJoin && connectionState.isConnected) {
      joinRoom(roomId);
    }
  }, [isOpen, autoJoin, connectionState.isConnected, roomId, joinRoom]);

  // Leave room when widget closes
  useEffect(() => {
    if (!isOpen && rooms.has(roomId)) {
      leaveRoom(roomId);
    }
  }, [isOpen, roomId, leaveRoom, rooms]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mark messages as read when widget is open
  useEffect(() => {
    if (isOpen && messages.has(roomId)) {
      const roomMessages = messages.get(roomId) || [];
      const unreadMessageIds = roomMessages
        .filter((msg) => !msg.delivered && msg.sender !== 'user')
        .map((msg) => msg.id);

      if (unreadMessageIds.length > 0) {
        markMessagesAsRead(roomId, unreadMessageIds);
      }
    }
  }, [isOpen, messages, roomId, markMessagesAsRead]);

  // Handle typing indicator
  useEffect(() => {
    if (isTyping) {
      startTyping(roomId);
      setShowTypingIndicator(true);
    } else {
      stopTyping(roomId);
      setShowTypingIndicator(false);
    }
  }, [isTyping, roomId, startTyping, stopTyping]);

  // Handle typing timeout
  const handleTypingTimeout = useCallback(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  }, []);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
    setIsTyping(true);
    handleTypingTimeout();
  };

  // Handle send message
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !connectionState.isConnected) return;

    const message = inputMessage.trim();
    setInputMessage('');
    setIsTyping(false);

    const success = await sendMessage(roomId, message);
    if (!success) {
      console.error('Failed to send message');
      // Could show a toast notification here
    }
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle widget toggle
  const handleToggle = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen && !connectionState.isConnected) {
      connect();
    }
  };

  // Handle manual reconnect
  const handleReconnect = () => {
    console.log('🔄 Manual reconnection triggered for chat widget');
    reconnect();
  };

  // Get room state
  const roomState = rooms.get(roomId);
  const roomMessages = messages.get(roomId) || [];
  const isJoined = roomState?.isJoined || false;
  const typingUsers = roomState?.typingUsers || [];
  const unreadCount = roomState?.unreadCount || 0;

  // Get connection health
  const connectionHealth = reconnectionManager.getConnectionHealth();

  // Connection status component
  const ConnectionStatus = () => {
    if (!showConnectionStatus) return null;

    const getStatusColor = () => {
      if (connectionState.isConnected) {
        switch (connectionHealth.connectionQuality) {
          case 'excellent':
            return 'text-green-500';
          case 'good':
            return 'text-yellow-500';
          case 'poor':
            return 'text-orange-500';
          default:
            return 'text-green-500';
        }
      }
      if (connectionState.isReconnecting) return 'text-yellow-500';
      return 'text-red-500';
    };

    const getStatusText = () => {
      if (connectionState.isConnected) {
        const quality = connectionHealth.connectionQuality;
        const latency = connectionHealth.latency;
        if (latency > 0) {
          return `${quality.charAt(0).toUpperCase() + quality.slice(1)} (${latency}ms)`;
        }
        return quality.charAt(0).toUpperCase() + quality.slice(1);
      }
      if (connectionState.isConnecting) return 'Connecting...';
      if (connectionState.isReconnecting)
        return `Reconnecting (${connectionState.reconnectAttempts})`;
      return 'Disconnected';
    };

    const getStatusIcon = () => {
      if (connectionState.isConnected) {
        switch (connectionHealth.connectionQuality) {
          case 'excellent':
            return '🟢';
          case 'good':
            return '🟡';
          case 'poor':
            return '🟠';
          default:
            return '🟢';
        }
      }
      if (connectionState.isReconnecting) return '🔄';
      return '🔴';
    };

    return (
      <div className={`flex items-center gap-2 text-xs ${getStatusColor()}`}>
        <span>{getStatusIcon()}</span>
        <span>{getStatusText()}</span>
        {!connectionState.isConnected && (
          <button
            onClick={handleReconnect}
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Reconnect
          </button>
        )}
      </div>
    );
  };

  // Typing indicator component
  const TypingIndicator = () => {
    if (!showTypingIndicator || typingUsers.length === 0) return null;

    return (
      <div className="flex items-center gap-2 text-gray-500 text-sm italic p-2">
        <div className="flex gap-1">
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
        <span>
          {typingUsers.length === 1
            ? 'Someone is typing...'
            : `${typingUsers.length} people are typing...`}
        </span>
      </div>
    );
  };

  // Message component
  const Message = ({ message }: { message: WebSocketMessage }) => {
    const isOwnMessage = message.sender === 'user';
    const messageTime = new Date(message.timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    return (
      <div
        className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-2`}
      >
        <div
          className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
            isOwnMessage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          <div className="text-sm">{message.message}</div>
          <div
            className={`text-xs mt-1 ${
              isOwnMessage ? 'text-blue-100' : 'text-gray-500'
            }`}
          >
            {messageTime}
            {message.delivered && isOwnMessage && (
              <span className="ml-1">✓</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat Widget Button */}
      <button
        onClick={handleToggle}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div className="relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-800">{title}</h3>
              {isJoined && (
                <span
                  className="w-2 h-2 bg-green-500 rounded-full"
                  title="Connected to room"
                />
              )}
            </div>
            <div className="flex items-center gap-2">
              <ConnectionStatus />
              {onClose && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close chat"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Messages */}
          <div
            className="p-4 overflow-y-auto"
            style={{ maxHeight, minHeight: '200px' }}
          >
            {!connectionState.isConnected ? (
              <div className="text-center text-gray-500 py-8">
                <div className="text-sm mb-2">Connecting to chat...</div>
                <button
                  onClick={handleReconnect}
                  className="text-blue-500 hover:text-blue-600 underline text-sm"
                >
                  Retry connection
                </button>
              </div>
            ) : !isJoined ? (
              <div className="text-center text-gray-500 py-8">
                <div className="text-sm">Joining chat room...</div>
              </div>
            ) : roomMessages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <div className="text-sm">
                  No messages yet. Start the conversation!
                </div>
              </div>
            ) : (
              <>
                {roomMessages.map((message) => (
                  <Message key={message.id} message={message} />
                ))}
                <TypingIndicator />
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input */}
          {connectionState.isConnected && isJoined && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={!connectionState.isConnected}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={
                    !inputMessage.trim() || !connectionState.isConnected
                  }
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

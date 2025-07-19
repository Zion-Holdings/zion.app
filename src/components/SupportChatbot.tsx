import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';
import type { WebSocketMessage } from '../hooks/useWebSocket';
import { getGlobalReconnectionManager } from '../utils/websocketReconnectionManager';

interface SupportChatbotProps {
  roomId?: string;
  title?: string;
  onClose?: () => void;
  className?: string;
  autoConnect?: boolean;
  showConnectionStatus?: boolean;
  maxHeight?: string;
  placeholder?: string;
  supportEnabled?: boolean;
}

export default function SupportChatbot({
  roomId = 'support-chat',
  title = 'Support Chat',
  onClose,
  className = '',
  autoConnect = true,
  showConnectionStatus = true,
  maxHeight = '500px',
  placeholder = 'How can I help you today?',
  supportEnabled = true
}: SupportChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const processingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
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
    ping
  } = useWebSocket({
    autoConnect,
    autoReconnect: true,
    maxReconnectAttempts: 15, // More attempts for support
    reconnectDelay: 500, // Faster reconnection for support
    reconnectDelayMax: 3000,
    enableHeartbeat: true,
    heartbeatInterval: 20000, // More frequent heartbeat for support
    enableConnectionQuality: true,
    onConnect: () => {
      console.log('SupportChatbot: Connected to WebSocket');
      reconnectionManager.handleReconnectionSuccess();
      if (autoConnect && isOpen) {
        joinRoom(roomId);
      }
    },
    onDisconnect: (reason) => {
      console.log('SupportChatbot: Disconnected from WebSocket:', reason);
      // Start reconnection process
      if (socket) {
        reconnectionManager.startReconnection(socket, reason);
      }
    },
    onReconnect: (attemptNumber) => {
      console.log('SupportChatbot: Reconnected after', attemptNumber, 'attempts');
      reconnectionManager.handleReconnectionSuccess();
      if (autoConnect && isOpen) {
        joinRoom(roomId);
      }
    },
    onReconnectFailed: () => {
      console.error('SupportChatbot: Reconnection failed');
      reconnectionManager.handleReconnectionFailure('Max attempts reached');
    },
    onConnectionQualityChange: (quality) => {
      console.log('SupportChatbot: Connection quality changed to', quality);
    }
  });

  // Get socket reference
  const socket = useWebSocket().socket;

  // Set up reconnection manager event listeners
  useEffect(() => {
    const handleReconnectionAttempt = (event: any) => {
      console.log(`🔄 Reconnection attempt ${event.attempt} for support chatbot`);
    };

    const handleReconnectionSuccess = (event: any) => {
      console.log('✅ Support chatbot reconnection successful');
    };

    const handleReconnectionFailure = (event: any) => {
      console.error('❌ Support chatbot reconnection failed:', event.error);
    };

    const handleHealthCheck = (event: any) => {
      if (event.health && !event.health.isHealthy) {
        console.warn('⚠️ Support chatbot connection health degraded');
      }
    };

    const handleConnectionQualityChange = (event: any) => {
      console.log(`📊 Support chatbot connection quality: ${event.previous} → ${event.current}`);
    };

    // Add event listeners
    reconnectionManager.on('reconnection_attempt', handleReconnectionAttempt);
    reconnectionManager.on('reconnection_success', handleReconnectionSuccess);
    reconnectionManager.on('reconnection_failure', handleReconnectionFailure);
    reconnectionManager.on('health_check', handleHealthCheck);
    reconnectionManager.on('connection_quality_change', handleConnectionQualityChange);

    // Start health monitoring if socket is available
    if (socket) {
      reconnectionManager.startHealthMonitoring(socket, 15000); // More frequent monitoring for support
    }

    // Cleanup
    return () => {
      reconnectionManager.off('reconnection_attempt', handleReconnectionAttempt);
      reconnectionManager.off('reconnection_success', handleReconnectionSuccess);
      reconnectionManager.off('reconnection_failure', handleReconnectionFailure);
      reconnectionManager.off('health_check', handleHealthCheck);
      reconnectionManager.off('connection_quality_change', handleConnectionQualityChange);
    };
  }, [reconnectionManager, socket]);

  // Auto-join room when chatbot opens
  useEffect(() => {
    if (isOpen && autoConnect && connectionState.isConnected) {
      joinRoom(roomId);
    }
  }, [isOpen, autoConnect, connectionState.isConnected, roomId, joinRoom]);

  // Leave room when chatbot closes
  useEffect(() => {
    if (!isOpen && rooms.has(roomId)) {
      leaveRoom(roomId);
    }
  }, [isOpen, roomId, leaveRoom, rooms]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mark messages as read when chatbot is open
  useEffect(() => {
    if (isOpen && messages.has(roomId)) {
      const roomMessages = messages.get(roomId) || [];
      const unreadMessageIds = roomMessages
        .filter(msg => !msg.delivered && msg.sender !== 'user')
        .map(msg => msg.id);
      
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

  // Generate support response based on keywords
  const generateSupportResponse = useCallback(async (userMessage: string) => {
    setIsProcessing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
    
    const message = userMessage.toLowerCase();
    let response = '';
    
    // Keyword-based responses
    if (message.includes('help') || message.includes('support')) {
      response = "I'm here to help! What specific issue are you experiencing? I can assist with technical problems, account issues, or general questions.";
    } else if (message.includes('error') || message.includes('bug') || message.includes('issue')) {
      response = "I understand you're experiencing an issue. Could you please provide more details about the error message or problem you're encountering? This will help me assist you better.";
    } else if (message.includes('account') || message.includes('login') || message.includes('password')) {
      response = "For account-related issues, I can help you with password resets, account verification, or login problems. What specific account issue are you facing?";
    } else if (message.includes('payment') || message.includes('billing') || message.includes('charge')) {
      response = "I can help you with payment and billing questions. Please provide your order number or transaction details so I can assist you more effectively.";
    } else if (message.includes('feature') || message.includes('function') || message.includes('how to')) {
      response = "I'd be happy to explain how to use our features! Which specific feature or function would you like to learn more about?";
    } else if (message.includes('contact') || message.includes('speak') || message.includes('human')) {
      response = "I understand you'd like to speak with a human agent. I can escalate your case to our support team. Please provide a brief description of your issue so I can route you to the right specialist.";
    } else {
      response = "Thank you for reaching out! I'm here to help with any questions or issues you might have. Could you please provide more details about what you need assistance with?";
    }
    
    // Send support response
    await sendMessage(roomId, response, 'text', { 
      type: 'support-response',
      processingTime: Date.now(),
      keywords: userMessage.toLowerCase().split(' ')
    });
    
    setIsProcessing(false);
  }, [roomId, sendMessage]);

  // Handle send message
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !connectionState.isConnected || isProcessing) return;

    const message = inputMessage.trim();
    setInputMessage('');
    setIsTyping(false);

    // Send user message
    const success = await sendMessage(roomId, message);
    if (!success) {
      console.error('Failed to send message');
      return;
    }

    // If support is enabled, generate response
    if (supportEnabled) {
      generateSupportResponse(message);
    }
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle chatbot toggle
  const handleToggle = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen && !connectionState.isConnected) {
      connect();
    }
  };

  // Handle manual reconnect
  const handleReconnect = () => {
    console.log('🔄 Manual reconnection triggered for support chatbot');
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
          case 'excellent': return 'text-green-500';
          case 'good': return 'text-yellow-500';
          case 'poor': return 'text-orange-500';
          default: return 'text-green-500';
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
      if (connectionState.isReconnecting) return `Reconnecting (${connectionState.reconnectAttempts})`;
      return 'Disconnected';
    };

    const getStatusIcon = () => {
      if (connectionState.isConnected) {
        switch (connectionHealth.connectionQuality) {
          case 'excellent': return '🟢';
          case 'good': return '🟡';
          case 'poor': return '🟠';
          default: return '🟢';
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
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <span>{typingUsers.length === 1 ? 'Support agent is typing...' : `${typingUsers.length} agents are typing...`}</span>
      </div>
    );
  };

  // Support processing indicator component
  const SupportProcessingIndicator = () => {
    if (!isProcessing) return null;

    return (
      <div className="flex items-center gap-2 text-green-500 text-sm italic p-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
        </div>
        <span>Finding the best solution for you...</span>
      </div>
    );
  };

  // Message component
  const Message = ({ message }: { message: WebSocketMessage }) => {
    const isOwnMessage = message.sender === 'user';
    const isSupportResponse = message.metadata?.type === 'support-response';
    const messageTime = new Date(message.timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    return (
      <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-2`}>
        <div className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
          isOwnMessage 
            ? 'bg-blue-500 text-white' 
            : isSupportResponse
            ? 'bg-green-100 text-green-800 border border-green-200'
            : 'bg-gray-200 text-gray-800'
        }`}>
          <div className="text-sm">{message.message}</div>
          <div className={`text-xs mt-1 ${
            isOwnMessage ? 'text-blue-100' : isSupportResponse ? 'text-green-600' : 'text-gray-500'
          }`}>
            {isSupportResponse && '🛟 '}
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
      {/* Support Chatbot Button */}
      <button
        onClick={handleToggle}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        aria-label={isOpen ? 'Close support chat' : 'Open support chat'}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
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
                <span className="w-2 h-2 bg-green-500 rounded-full" title="Connected to room" />
              )}
            </div>
            <div className="flex items-center gap-2">
              <ConnectionStatus />
              {onClose && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close support chat"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                <div className="text-sm mb-2">Connecting to support...</div>
                <button
                  onClick={handleReconnect}
                  className="text-blue-500 hover:text-blue-600 underline text-sm"
                >
                  Retry connection
                </button>
              </div>
            ) : !isJoined ? (
              <div className="text-center text-gray-500 py-8">
                <div className="text-sm">Joining support chat room...</div>
              </div>
            ) : roomMessages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <div className="text-sm">Hello! I'm here to help with any questions or issues you might have.</div>
              </div>
            ) : (
              <>
                {roomMessages.map((message) => (
                  <Message key={message.id} message={message} />
                ))}
                <TypingIndicator />
                <SupportProcessingIndicator />
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
                  placeholder={placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={!connectionState.isConnected || isProcessing}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || !connectionState.isConnected || isProcessing}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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

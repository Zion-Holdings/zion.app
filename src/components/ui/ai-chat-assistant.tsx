import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  X, 
  Minimize2,
  Maximize2,
  Mic,
  MicOff,
  Settings,
  Brain,
  Paperclip,
  Smile
} from 'lucide-react';
import { Button } from './button';

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  status: 'sending' | 'sent' | 'error';
  metadata?: {
    confidence?: number;
    suggestions?: string[];
    relatedTopics?: string[];
  };
}

interface AIChatAssistantProps {
  enabled?: boolean;
  className?: string;
  onMessageSend?: (message: string) => void;
  onAssistantResponse?: (response: string) => void;
}

export function AIChatAssistant({ 
  enabled = true,
  className = "",
  onMessageSend,
  onAssistantResponse
}: AIChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m Zion AI Assistant. I can help you with technology solutions, business insights, and answer any questions about our services. How can I assist you today?',
      timestamp: new Date(),
      status: 'sent',
      metadata: {
        confidence: 0.95,
        suggestions: ['Tell me about your AI services', 'What cloud solutions do you offer?', 'How can I get started?']
      }
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Simulate AI typing
  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  // Generate AI response
  const generateAIResponse = (_userMessage: string) => {
    setIsTyping(true);

    // Simulate API call delay
    const timer = setTimeout(() => {
      // Mock AI responses based on user input
      const responses = [
        {
          content: "That's a great question! Zion Tech Group specializes in cutting-edge AI solutions that can transform your business operations. Our AI services include machine learning models, natural language processing, and predictive analytics.",
          suggestions: ['Tell me more about AI pricing', 'What industries do you serve?', 'Can you provide a demo?']
        },
        {
          content: "Our cloud solutions are designed for scalability and security. We offer AWS, Azure, and Google Cloud expertise with custom migration strategies and cost optimization.",
          suggestions: ['What about security?', 'How long does migration take?', 'Do you provide 24/7 support?']
        },
        {
          content: "Cybersecurity is our top priority. We implement enterprise-grade security measures including threat detection, data encryption, and compliance management.",
          suggestions: ['What compliance standards?', 'How do you handle breaches?', 'Security audit process?']
        },
        {
          content: "Getting started is easy! We begin with a free consultation to understand your needs, then create a customized roadmap for your digital transformation journey.",
          suggestions: ['Schedule consultation', 'View case studies', 'Meet the team']
        }
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'assistant',
        content: randomResponse.content,
        timestamp: new Date(),
        status: 'sent',
        metadata: {
          confidence: 0.85 + Math.random() * 0.1,
          suggestions: randomResponse.suggestions
        }
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      onAssistantResponse?.(aiMessage.content);
    }, 1500 + Math.random() * 1000);

    return () => clearTimeout(timer);
  };

  // Send message
  const sendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    onMessageSend?.(userMessage.content);
    
    // Generate AI response
    generateAIResponse(userMessage.content);
  };

  // Handle enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Toggle voice input
  const toggleVoiceInput = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would start/stop speech recognition
  };

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: string) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  }, []);

  // Clear chat
  const clearChat = () => {
    setMessages([messages[0]]); // Keep welcome message
  };

  if (!enabled) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-40 ${className}`}>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="AI Chat Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Panel */}
            <motion.div
              className={`absolute bottom-4 right-4 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl overflow-hidden ${
                isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
              }`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/30 bg-zion-blue/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Zion AI Assistant</h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isTyping ? 'bg-zion-cyan animate-pulse' : 'bg-green-400'}`} />
                      <span className="text-zinc-400 text-xs">
                        {isTyping ? 'Typing...' : 'Online'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-zinc-400 hover:text-white p-2"
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-zinc-400 hover:text-white p-2"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 hover:text-white p-2"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && !isMinimized && (
                  <motion.div
                    className="p-4 border-b border-zion-blue-light/30 bg-zion-blue/10"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-300 text-sm">Voice Input</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={toggleVoiceInput}
                          className={`p-2 ${isRecording ? 'text-zion-cyan' : 'text-zinc-400'}`}
                        >
                          {isRecording ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-300 text-sm">Clear Chat</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={clearChat}
                          className="text-zinc-400 hover:text-red-400 p-2"
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Messages */}
              {!isMinimized && (
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {message.type === 'assistant' && (
                        <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      )}
                      
                      <div className={`max-w-[280px] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div className={`p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-zion-purple text-white'
                            : 'bg-zion-blue/20 text-zinc-200'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        
                        {/* Message metadata */}
                        {message.metadata && (
                          <div className="mt-2 space-y-2">
                            {/* Confidence score */}
                            {message.metadata.confidence && (
                              <div className="flex items-center gap-2 text-xs text-zinc-400">
                                <Brain className="w-3 h-3" />
                                <span>Confidence: {(message.metadata.confidence * 100).toFixed(0)}%</span>
                              </div>
                            )}
                            
                            {/* Suggestions */}
                            {message.metadata.suggestions && (
                              <div className="flex flex-wrap gap-1">
                                {message.metadata.suggestions.map((suggestion, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="px-2 py-1 bg-zion-blue/30 hover:bg-zion-blue/50 border border-zion-blue-light/30 rounded text-xs text-zinc-300 hover:text-white transition-all duration-200"
                                  >
                                    {suggestion}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* Timestamp */}
                        <div className="text-xs text-zinc-500 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                      
                      {message.type === 'user' && (
                        <div className="w-8 h-8 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="p-3 rounded-lg bg-zion-blue/20">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              )}

              {/* Input Area */}
              {!isMinimized && (
                <div className="p-4 border-t border-zion-blue-light/30">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-zinc-400 hover:text-white p-2"
                    >
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-zinc-400 hover:text-white p-2"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                    
                    <div className="flex-1 relative">
                        <input
                          ref={inputRef}
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Ask me anything..."
                          className="w-full px-4 py-3 bg-zion-blue/20 border border-zion-blue-light/30 text-white placeholder-zinc-400 pr-20 rounded-lg focus:outline-none focus:border-zion-cyan/50 transition-colors duration-200"
                          disabled={isTyping}
                        />
                        
                        {/* Voice input indicator */}
                        {isRecording && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                          </div>
                        )}
                      </div>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={toggleVoiceInput}
                      className={`p-2 ${isRecording ? 'text-red-400' : 'text-zinc-400'} hover:text-white`}
                    >
                      {isRecording ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                    </Button>
                    
                    <Button
                      onClick={sendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['AI Services', 'Cloud Solutions', 'Cybersecurity', 'Get Started'].map((action) => (
                      <button
                        key={action}
                        onClick={() => handleSuggestionClick(action)}
                        className="px-3 py-1 bg-zion-blue/20 hover:bg-zion-blue/30 border border-zion-blue-light/30 rounded-full text-xs text-zinc-300 hover:text-white transition-all duration-200"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
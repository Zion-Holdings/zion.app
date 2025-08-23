import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI concierge. How can I help you explore our revolutionary 2044 technology today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = useCallback(async () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        'That\'s an excellent question! Our AI consciousness platform can definitely help with that.',
        'I\'d be happy to connect you with our quantum computing specialists for that inquiry.',
        'Our space technology division has exactly what you\'re looking for. Let me schedule a demo.',
        'That\'s a fascinating use case! Our autonomous business intelligence system would be perfect.',
        'I can see you\'re interested in cutting-edge technology. Let me show you our latest innovations.',
        'Great question! Our quantum cybersecurity platform addresses exactly those concerns.'
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  }, [inputText]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setIsMinimized(false);
    }
  }, [isOpen]);

  const toggleMinimize = useCallback(() => {
    setIsMinimized(prev => !prev);
  }, []);

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open live chat"
      >
        <MessageCircle className="w-8 h-8 text-white mx-auto" />
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-h-[600px] bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/30 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI Concierge</h3>
                    <p className="text-xs text-cyan-300">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMinimize}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                    aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleChat}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="flex flex-col h-96"
                >
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                            : 'bg-gray-800/60 text-gray-200 border border-gray-700/50'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="bg-gray-800/60 border border-gray-700/50 px-4 py-2 rounded-2xl">
                          <div className="flex items-center space-x-1">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                            <span className="text-xs text-gray-400 ml-2">AI is typing...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-gray-700/50">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about our revolutionary technology..."
                        className="flex-1 px-4 py-2 bg-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                        disabled={isTyping}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim() || isTyping}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChatWidget;
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, X, Send, Bot, User, Phone, Mail, 
  Clock, CheckCircle, AlertCircle, Minimize2, Maximize2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

interface ChatSupportProps {
  className?: string;
}

const RealTimeChatSupport: React.FC<ChatSupportProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your AI assistant from Zion Tech Group. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [
        ...prev.map(msg => 
          msg.id === userMessage.id 
            ? { ...msg, status: 'sent' as const }
            : msg
        ),
        botResponse
      ]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('pricing') || input.includes('cost')) {
      return 'Our pricing is competitive and transparent. We offer flexible plans starting from $99/month. Would you like me to show you our detailed pricing structure?';
    } else if (input.includes('ai') || input.includes('artificial intelligence')) {
      return 'We specialize in cutting-edge AI solutions including AI consciousness evolution, quantum neural networks, and autonomous business intelligence. What specific AI capabilities are you looking for?';
    } else if (input.includes('quantum') || input.includes('quantum computing')) {
      return 'Our quantum computing solutions are revolutionary! We offer quantum cybersecurity, quantum cloud infrastructure, and quantum neural ecosystems. Would you like to learn more about any specific quantum technology?';
    } else if (input.includes('space') || input.includes('space technology')) {
      return 'We\'re pioneers in space technology! From space resource intelligence to interplanetary communication platforms, we\'re building the future of space exploration. What interests you most?';
    } else if (input.includes('contact') || input.includes('support')) {
      return 'You can reach our team at kleber@ziontechgroup.com or call us at +1-302-464-0950. We\'re available 24/7 for enterprise clients. How can I assist you further?';
    } else if (input.includes('demo') || input.includes('trial')) {
      return 'Absolutely! We offer free demos and trials of our services. I can schedule a personalized demo for you. What service would you like to see in action?';
    } else {
      const responses = [
        'That\'s a great question! Let me connect you with our expert team.',
        'I\'d be happy to help with that. Could you provide more details?',
        'That\'s exactly what we specialize in! Let me show you our solutions.',
        'Great inquiry! We have several options that might be perfect for you.',
        'I\'m here to help! Let me get you the information you need.'
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    'Tell me about AI services',
    'What are your pricing options?',
    'Show me quantum computing solutions',
    'I need space technology info',
    'Schedule a demo'
  ];

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 ${className}`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Zion Tech Support</h3>
                  <p className="text-blue-100 text-sm">AI-Powered Assistance</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 text-white/80 hover:text-white transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto max-h-80">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`p-2 rounded-full ${
                            message.type === 'user' 
                              ? 'bg-blue-600' 
                              : message.type === 'bot' 
                                ? 'bg-purple-600' 
                                : 'bg-gray-600'
                          }`}>
                            {message.type === 'user' ? (
                              <User className="w-4 h-4 text-white" />
                            ) : message.type === 'bot' ? (
                              <Bot className="w-4 h-4 text-white" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className={`p-3 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-800 text-gray-100'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs opacity-70">
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                              {message.type === 'user' && (
                                <div className="flex items-center space-x-1">
                                  {message.status === 'sending' && (
                                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  )}
                                  {message.status === 'sent' && (
                                    <CheckCircle className="w-3 h-3 text-green-400" />
                                  )}
                                  {message.status === 'error' && (
                                    <AlertCircle className="w-3 h-3 text-red-400" />
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-start space-x-2">
                          <div className="p-2 rounded-full bg-purple-600">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="p-3 rounded-2xl bg-gray-800">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 pb-3">
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {reply}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RealTimeChatSupport;
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, X, Minimize2, Maximize2, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ChatMessage, Message } from './ChatMessage';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'bot',
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
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! How can I assist you with your business needs today?';
    }
    
    if (input.includes('service') || input.includes('help')) {
      return 'I can help you with our AI services, cloud solutions, cybersecurity, and more. What specific area are you interested in?';
    }
    
    if (input.includes('price') || input.includes('cost')) {
      return 'Our pricing varies based on your specific needs. Would you like me to connect you with our sales team for a personalized quote?';
    }
    
    if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return 'You can reach us at +1 (302) 464-0950 or kleber@ziontechgroup.com. I can also schedule a consultation for you.';
    }
    
    if (input.includes('ai') || input.includes('artificial intelligence')) {
      return 'We offer cutting-edge AI solutions including machine learning platforms, predictive analytics, and intelligent automation. Would you like to learn more?';
    }
    
    if (input.includes('cloud') || input.includes('infrastructure')) {
      return 'Our cloud infrastructure services include migration, optimization, and management. We work with AWS, Azure, and Google Cloud.';
    }
    
    if (input.includes('security') || input.includes('cyber')) {
      return 'We provide comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and incident response.';
    }
    
    return 'Thank you for your message. I\'d be happy to help you with that. Could you provide more details about what you\'re looking for?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) {
    return (
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 w-96 bg-zion-blue-dark/95 backdrop-blur-lg border border-zion-blue-light/30 rounded-2xl shadow-2xl z-50 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-zion-cyan to-zion-purple p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">AI Assistant</h3>
              <p className="text-white/80 text-xs">Zion Tech Group</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMinimize}
              className="text-white hover:bg-white/20 p-1"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChat}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-8 h-8 rounded-full bg-zion-cyan flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-zion-blue-dark/50 text-white px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zion-blue-light/20">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-zion-slate-light mt-2 text-center">
                Ask me about our services, pricing, or schedule a consultation
              </p>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatAssistant;
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'quick-reply';
}

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! Welcome to Zion Tech Group. I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickReplies = [
    "Tell me about your services",
    "Get a quote",
    "Schedule a demo",
    "Technical support",
    "Speak to a human"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('offer')) {
      return "We offer cutting-edge AI solutions, quantum computing services, cybersecurity, cloud infrastructure, data analytics, and blockchain solutions. Which area interests you most?";
    } else if (input.includes('quote') || input.includes('price') || input.includes('cost')) {
      return "I'd be happy to help you get a quote! We have a service calculator on our homepage, or I can connect you with our sales team for a personalized consultation.";
    } else if (input.includes('demo') || input.includes('demonstration')) {
      return "Great choice! Our demos typically last 30-45 minutes and can be customized to your specific needs. When would be a good time for you?";
    } else if (input.includes('support') || input.includes('help') || input.includes('issue')) {
      return "I'm here to help! For technical issues, I can create a support ticket or connect you with our technical team. What's the nature of your issue?";
    } else if (input.includes('human') || input.includes('person') || input.includes('agent')) {
      return "I understand you'd prefer to speak with a human. Let me connect you with one of our specialists. They'll be with you in just a moment.";
    } else {
      return "That's interesting! I'd love to learn more about your needs. Could you tell me a bit more about what you're looking for?";
    }
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputText);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open live chat"
      >
        <MessageCircle className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold">Zion Tech Group Support</h3>
                    <p className="text-sm text-cyan-100">AI Assistant • Online</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    aria-label="Minimize chat"
                  >
                    <span className="text-lg">−</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-900 h-80">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-cyan-500 text-white'
                              : 'bg-gray-700 text-gray-100'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-cyan-100' : 'text-gray-400'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 py-3 bg-gray-800 border-t border-gray-700">
                    <p className="text-xs text-gray-400 mb-2">Quick replies:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded-full transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Input */}
                <div className="p-4 bg-gray-800 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                    <button
                      onClick={() => handleSendMessage(inputText)}
                      disabled={!inputText.trim()}
                      className="p-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
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

export default LiveChatWidget;
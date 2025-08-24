import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface AIChatbotProps {
  className?: string;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m Zion AI, your intelligent assistant. How can I help you today? I can help with:\n\n• AI & Quantum Computing Services\n• Business Solutions\n• Technical Support\n• Pricing Information\n• Service Comparisons',
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

  // AI response simulation
  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = [
      "That's a great question! Let me help you with that. Our AI solutions are designed to transform your business operations and drive innovation.",
      "I understand you're interested in our services. We offer cutting-edge AI, quantum computing, and autonomous solutions that can revolutionize your business.",
      "Excellent choice! Our quantum computing platform provides unprecedented computational power for complex problem-solving and optimization.",
      "I'd be happy to connect you with our team of experts. They can provide detailed information about our services and help you find the perfect solution.",
      "That's exactly what we specialize in! Our autonomous systems can streamline your operations and provide 24/7 intelligent monitoring.",
      "Great question! Our pricing is competitive and we offer flexible plans to meet your specific needs. Let me get you in touch with our sales team."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Add some context-aware responses
    let finalResponse = randomResponse;
    if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost')) {
      finalResponse = "Our pricing varies based on your specific needs. We offer flexible plans starting from $799/month. Would you like me to connect you with our pricing specialist?";
    } else if (userMessage.toLowerCase().includes('ai') || userMessage.toLowerCase().includes('artificial intelligence')) {
      finalResponse = "Our AI services include consciousness evolution, emotional intelligence, autonomous research, and predictive analytics. Each solution is designed to drive business transformation. Which area interests you most?";
    } else if (userMessage.toLowerCase().includes('quantum')) {
      finalResponse = "Our quantum computing solutions cover neural networks, cybersecurity, materials discovery, and financial intelligence. These cutting-edge technologies can solve problems that classical computers cannot. What specific quantum application are you exploring?";
    }
    
    return finalResponse;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Generate AI response
    const aiResponse = await generateAIResponse(userMessage.content);
    
    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Tell me about AI services",
    "Quantum computing pricing",
    "Business solutions",
    "Contact sales team",
    "Technical support"
  ];

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-96 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Zion AI Assistant</h3>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-300">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <>
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.type === 'bot' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                            : 'bg-white/10 text-gray-100 border border-white/20'
                        }`}
                      >
                        <div className="whitespace-pre-line text-sm">{message.content}</div>
                        <div className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-cyan-100' : 'text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>

                      {message.type === 'user' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 justify-start"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white/10 border border-white/20 rounded-2xl p-3">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-cyan-400 font-medium">Quick Questions</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs text-gray-300 hover:text-white transition-all duration-200"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
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
    </div>
  );
};

export default AIChatbot;
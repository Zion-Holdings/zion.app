import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  X, 
  Minimize2, 
  Maximize2,
  Loader2,
  Sparkles
} from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  metadata?: {
    confidence?: number;
    intent?: string;
    entities?: string[];
    suggestions?: string[];
  };
}

interface ChatbotConfig {
  welcomeMessage?: string;
  maxMessages?: number;
  enableSuggestions?: boolean;
  enableContext?: boolean;
  responseDelay?: number;
}

export const AIChatbot: React.FC<ChatbotConfig> = ({
  welcomeMessage = "Hello! I'm Zion Tech Group's AI assistant. How can I help you today?",
  maxMessages = 50,
  enableSuggestions = true,
  enableContext = true,
  responseDelay = 1000
}) => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize chatbot
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(welcomeMessage, {
        intent: 'greeting',
        confidence: 1.0,
        suggestions: [
          "Tell me about your services",
          "How can I get a quote?",
          "What technologies do you use?",
          "Contact information"
        ]
      });
    }
  }, [isOpen, messages.length, welcomeMessage]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Track chatbot interactions
  const trackChatbotInteraction = useCallback((action: string, metadata?: any) => {
    trackEvent('chatbot', action, 'chatbot_interaction', undefined, metadata);
  }, [trackEvent]);

  // Add message to chat
  const addMessage = useCallback((message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    };

    setMessages(prev => {
      const updated = [...prev, newMessage];
      // Keep only the last maxMessages
      return updated.slice(-maxMessages);
    });

    // Update conversation context
    if (enableContext && message.content.length > 10) {
      // setConversationContext(prev => [...prev.slice(-4), message.content]); // This line was removed
    }

    return newMessage;
  }, [maxMessages, enableContext]);

  // Add bot message with typing effect
  const addBotMessage = useCallback((content: string, metadata?: ChatMessage['metadata']) => {
    const message = addMessage({
      type: 'bot',
      content,
      metadata
    });

    // Track bot response
    trackChatbotInteraction('bot_response', { 
      messageId: message.id, 
      intent: metadata?.intent,
      confidence: metadata?.confidence 
    });

    return message;
  }, [addMessage, trackChatbotInteraction]);

  // Simulate AI processing
  const simulateAIProcessing = useCallback(async (userInput: string): Promise<string> => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, responseDelay));

    // Simple AI logic - in production, this would connect to a real AI service
    const input = userInput.toLowerCase();
    
    // Intent recognition
    if (input.includes('service') || input.includes('offer')) {
      return "We offer a comprehensive range of services including AI & Machine Learning, Cybersecurity, Cloud Infrastructure, and Digital Transformation. What specific area are you interested in?";
    }
    
    if (input.includes('quote') || input.includes('price') || input.includes('cost')) {
      return "I'd be happy to help you get a quote! Could you tell me more about your project requirements? This will help me provide a more accurate estimate.";
    }
    
    if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return "You can reach us at:\n📧 kleber@ziontechgroup.com\n📞 +1 (302) 464-0950\n🌐 https://ziontechgroup.com\n\nWhen would be the best time to call you?";
    }
    
    if (input.includes('technology') || input.includes('tech') || input.includes('stack')) {
      return "We work with cutting-edge technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, and more. What technology stack are you currently using?";
    }
    
    if (input.includes('experience') || input.includes('portfolio') || input.includes('work')) {
      return "We have extensive experience across various industries including healthcare, finance, e-commerce, and enterprise solutions. Would you like me to share some case studies?";
    }
    
    // Default response with suggestions
    return "I understand you're asking about '" + userInput + "'. Let me help you better. Could you provide more details about what you're looking for?";
  }, [responseDelay]);

  // Handle user input
  const handleUserInput = useCallback(async (input: string) => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = addMessage({
      type: 'user',
      content: input.trim()
    });

    // Track user input
    trackChatbotInteraction('user_input', { 
      messageId: userMessage.id, 
      inputLength: input.length 
    });

    // Clear input
    setInputValue('');
    setIsTyping(true);

    try {
      // Get AI response
      const response = await simulateAIProcessing(input);
      
      // Add bot response
      addBotMessage(response, {
        intent: 'response',
        confidence: 0.9,
        suggestions: [
          "Tell me more",
          "Get a quote",
          "View services",
          "Contact sales"
        ]
      });

      // Track successful interaction
      trackChatbotInteraction('conversation_success', { 
        userInput: input,
        responseLength: response.length 
      });

    } catch (error) {
      // Handle error
      addBotMessage("I apologize, but I'm experiencing some technical difficulties. Please try again or contact our team directly.", {
        intent: 'error',
        confidence: 0.8
      });

      trackChatbotInteraction('conversation_error', { 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    } finally {
      setIsTyping(false);
    }
  }, [addMessage, addBotMessage, simulateAIProcessing, trackChatbotInteraction]);

  // Handle form submission
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    handleUserInput(inputValue);
  }, [inputValue, handleUserInput]);

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: string) => {
    handleUserInput(suggestion);
    trackChatbotInteraction('suggestion_clicked', { suggestion });
  }, [handleUserInput, trackChatbotInteraction]);

  // Toggle chatbot
  const toggleChatbot = useCallback(() => {
    setIsOpen(!isOpen);
    trackChatbotInteraction('chatbot_toggled', { action: !isOpen ? 'opened' : 'closed' });
  }, [isOpen, trackChatbotInteraction]);

  // Minimize/maximize
  const toggleMinimize = useCallback(() => {
    setIsMinimized(!isMinimized);
    trackChatbotInteraction('chatbot_minimized', { action: !isMinimized ? 'minimized' : 'maximized' });
  }, [isMinimized, trackChatbotInteraction]);

  // Clear conversation
  const clearConversation = useCallback(() => {
    setMessages([]);
    // setConversationContext([]); // This line was removed
    trackChatbotInteraction('conversation_cleared');
  }, [trackChatbotInteraction]);

  // Get typing indicator
  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
    >
      <Bot className="w-5 h-5 text-blue-500" />
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">AI is typing...</span>
    </motion.div>
  );

  // Get message suggestions
  const MessageSuggestions = ({ suggestions }: { suggestions: string[] }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2 mt-3"
    >
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => handleSuggestionClick(suggestion)}
          className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
        >
          {suggestion}
        </button>
      ))}
    </motion.div>
  );

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open AI chatbot"
      >
        <MessageCircle className="w-6 h-6" />
        {messages.length > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {Math.min(messages.length, 9)}
          </div>
        )}
      </motion.button>

      {/* Chatbot Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed bottom-24 right-6 z-40 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden ${
              isMinimized ? 'h-16' : 'h-[500px]'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  <span className="font-semibold">AI Assistant</span>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                    <span className="text-xs">Powered by AI</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMinimize}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    aria-label={isMinimized ? 'Maximize' : 'Minimize'}
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleChatbot}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    aria-label="Close chatbot"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-80">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${
                        message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                        }`}>
                          {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        
                        <div className={`rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          
                          {/* Message Metadata */}
                          {message.metadata && (
                            <div className="mt-2 text-xs opacity-70">
                              {message.metadata.confidence && (
                                <span className="mr-2">Confidence: {Math.round(message.metadata.confidence * 100)}%</span>
                              )}
                              {message.metadata.intent && (
                                <span>Intent: {message.metadata.intent}</span>
                              )}
                            </div>
                          )}
                          
                          {/* Suggestions */}
                          {message.type === 'bot' && message.metadata?.suggestions && enableSuggestions && (
                            <MessageSuggestions suggestions={message.metadata.suggestions} />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && <TypingIndicator />}
                  
                  {/* Scroll anchor */}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      disabled={isTyping}
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isTyping}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg transition-colors disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isTyping ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </form>
                  
                  {/* Quick Actions */}
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <button
                      onClick={clearConversation}
                      className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      Clear chat
                    </button>
                    <span>{messages.length} messages</span>
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
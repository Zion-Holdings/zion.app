import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { MessageCircle, Bot, User, Send, Mic, MicOff, Settings, Sparkles, X, Minimize2, Maximize2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
  confidence?: number;
  suggestions?: string[];
}

interface AIChatAssistantProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
}

export const AIChatAssistant: React.FC<AIChatAssistantProps> = ({
  isOpen = false,
  onToggle,
  className = ''
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // AI Knowledge Base for Zion Tech Group
  const aiKnowledgeBase = {
    services: [
      'Web Development', 'AI Solutions', 'Cybersecurity', 'Cloud Services', 
      'Digital Transformation', 'IT Consulting', 'Mobile Development'
    ],
    pricing: [
      'Project-based pricing', 'Hourly rates', 'Retainer packages', 'Custom quotes available'
    ],
    contact: [
      'Phone: +1 (555) 123-4567', 'Email: info@ziontechgroup.com', 
      'Support: support@ziontechgroup.com', '24/7 availability'
    ],
    features: [
      'AI-powered talent matching', 'Secure payment processing', 'Real-time collaboration tools',
      'Advanced analytics dashboard', 'Multi-platform support'
    ]
  };

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        content: `Hello! I'm Zion AI, your intelligent assistant. I can help you with:

• Information about our services
• Pricing and packages
• Technical support
• General inquiries

How can I assist you today?`,
        sender: 'ai',
        timestamp: new Date(),
        suggestions: ['Tell me about your services', 'What are your pricing options?', 'I need technical support']
      };
      setMessages([welcomeMessage]);
    }
  }, [messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // AI Response Generator
  const generateAIResponse = async (userMessage: string): Promise<ChatMessage> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple AI logic - in production, this would connect to a real AI service
    let response = '';
    let confidence = 0.8;
    let suggestions: string[] = [];

    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      response = `Zion Tech Group offers comprehensive technology solutions including:

🔹 **Web Development**: Custom websites and web applications
🔹 **AI Solutions**: Machine learning and automation services  
🔹 **Cybersecurity**: Protection and security consulting
🔹 **Cloud Services**: AWS, Azure, and Google Cloud expertise
🔹 **Digital Transformation**: Business process optimization

Would you like me to elaborate on any specific service?`;
      suggestions = ['Tell me about AI solutions', 'What about cybersecurity?', 'Pricing information']
    }
    else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      response = `Our pricing is flexible and tailored to your needs:

💰 **Project-Based**: Custom quotes for specific projects
⏰ **Hourly Rates**: $150-300/hour depending on expertise
📋 **Retainer Packages**: Monthly plans starting at $2,500
🎯 **Enterprise Solutions**: Custom pricing for large organizations

I can connect you with our sales team for a detailed quote. Would you like that?`;
      suggestions = ['Get a quote', 'Tell me about retainer packages', 'What about hourly rates?']
    }
    else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      response = `Here's how you can reach us:

📞 **Phone**: +1 (555) 123-4567
📧 **Email**: info@ziontechgroup.com
🆘 **Support**: support@ziontechgroup.com
🌐 **Website**: ziontechgroup.com
⏰ **Hours**: 24/7 availability

Our team is always ready to help!`;
      suggestions = ['Schedule a call', 'Send an email', 'Live chat support']
    }
    else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('problem')) {
      response = `I'm here to help! For technical support:

🔧 **Technical Issues**: support@ziontechgroup.com
📱 **Live Chat**: Available 24/7 on our website
📞 **Phone Support**: +1 (555) 123-4567
📋 **Support Tickets**: Create one through our portal

What specific issue are you experiencing?`;
      suggestions = ['Create a support ticket', 'Live chat with agent', 'Call support team']
    }
    else if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      response = `Our AI capabilities are cutting-edge:

🤖 **Machine Learning**: Custom ML models for your business
🔍 **Data Analytics**: Advanced insights and predictions
📊 **Process Automation**: Streamline operations with AI
🎯 **Predictive Analytics**: Forecast trends and opportunities
🔄 **Natural Language Processing**: Chatbots and text analysis

We've helped companies increase efficiency by 40%+ with AI solutions!`;
      suggestions = ['AI case studies', 'Implementation process', 'ROI examples']
    }
    else {
      response = `I understand you're asking about "${userMessage}". While I'm still learning, I can help with:

• Our services and solutions
• Pricing and packages  
• Contact information
• Technical support
• General company information

Could you rephrase your question or ask about one of these topics?`;
      confidence = 0.6;
      suggestions = ['Tell me about services', 'What are your prices?', 'How can I contact you?']
    }

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    return {
      id: Date.now().toString(),
      content: response,
      sender: 'ai',
      timestamp: new Date(),
      confidence,
      suggestions
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsAIThinking(true);

    // Generate AI response
    const aiResponse = await generateAIResponse(inputValue);
    setMessages(prev => [...prev, aiResponse]);
    setIsAIThinking(false);

    // Save to chat history
    setChatHistory(prev => [...prev, userMessage, aiResponse]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    // Auto-send suggestion
    setTimeout(() => {
      setInputValue(suggestion);
      handleSendMessage();
    }, 100);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition not supported in this browser.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const clearChat = () => {
    setMessages([]);
    setChatHistory([]);
  };

  if (!isOpen) return null;

  return (
    <div className={`ai-chat-assistant ${className}`}>
      <Card className="chat-window">
        <CardHeader className="chat-header">
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-blue-600" />
            <span>Zion AI Assistant</span>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </CardTitle>
          <div className="chat-controls">
            <button onClick={clearChat} className="control-btn" title="Clear chat">
              <X className="h-4 w-4" />
            </button>
            <button onClick={toggleMinimize} className="control-btn" title="Minimize">
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="chat-messages">
              {messages.map(message => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-avatar">
                    {message.sender === 'user' ? (
                      <User className="h-6 w-6 text-blue-600" />
                    ) : (
                      <Bot className="h-6 w-6 text-green-600" />
                    )}
                  </div>
                  <div className="message-content">
                    <div className="message-text">{message.content}</div>
                    {message.suggestions && message.suggestions.length > 0 && (
                      <div className="message-suggestions">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion-btn"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString()}
                      {message.confidence && (
                        <span className="confidence-score">
                          Confidence: {Math.round(message.confidence * 100)}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isAIThinking && (
                <div className="message ai">
                  <div className="message-avatar">
                    <Bot className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span>Zion AI is thinking</span>
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </CardContent>

            <div className="chat-input">
              <div className="input-container">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Zion Tech Group..."
                  className="message-input"
                  disabled={isAIThinking}
                />
                <button
                  onClick={handleVoiceInput}
                  className={`voice-btn ${isListening ? 'listening' : ''}`}
                  title="Voice input"
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </button>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isAIThinking}
                className="send-btn"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
      </Card>

      <style jsx>{`
        .ai-chat-assistant {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 400px;
          z-index: 1000;
        }
        
        .chat-window {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
          overflow: hidden;
        }
        
        .chat-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 20px;
          border-bottom: none;
        }
        
        .chat-header h3 {
          color: white;
          margin: 0;
        }
        
        .chat-controls {
          display: flex;
          gap: 8px;
        }
        
        .control-btn {
          padding: 4px;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          border-radius: 6px;
          transition: background-color 0.2s;
        }
        
        .control-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .chat-messages {
          height: 400px;
          overflow-y: auto;
          padding: 20px;
          background: #f8fafc;
        }
        
        .message {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .message.user {
          flex-direction: row-reverse;
        }
        
        .message-avatar {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .message-content {
          flex: 1;
          max-width: 280px;
        }
        
        .message.user .message-content {
          text-align: right;
        }
        
        .message-text {
          background: white;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.4;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          word-wrap: break-word;
        }
        
        .message.user .message-text {
          background: #2563eb;
          color: white;
        }
        
        .message.ai .message-text {
          background: white;
          color: #374151;
        }
        
        .message-suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        
        .suggestion-btn {
          background: #f3f4f6;
          color: #374151;
          border: 1px solid #d1d5db;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .suggestion-btn:hover {
          background: #e5e7eb;
          border-color: #9ca3af;
        }
        
        .message-time {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;
          font-size: 11px;
          color: #9ca3af;
        }
        
        .confidence-score {
          background: #10b981;
          color: white;
          padding: 2px 6px;
          border-radius: 8px;
          font-size: 10px;
        }
        
        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
          font-style: italic;
        }
        
        .typing-dots {
          display: flex;
          gap: 4px;
        }
        
        .typing-dots span {
          width: 6px;
          height: 6px;
          background: #9ca3af;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }
        
        .typing-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        
        .chat-input {
          padding: 20px;
          background: white;
          border-top: 1px solid #e5e7eb;
        }
        
        .input-container {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .message-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 24px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        
        .message-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .message-input:disabled {
          background: #f3f4f6;
          cursor: not-allowed;
        }
        
        .voice-btn {
          padding: 12px;
          background: #f3f4f6;
          color: #6b7280;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .voice-btn:hover {
          background: #e5e7eb;
        }
        
        .voice-btn.listening {
          background: #ef4444;
          color: white;
          border-color: #ef4444;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .send-btn {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 24px;
          cursor: pointer;
          transition: background-color 0.2s;
          font-weight: 500;
        }
        
        .send-btn:hover:not(:disabled) {
          background: #1d4ed8;
        }
        
        .send-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }
        
        @media (max-width: 480px) {
          .ai-chat-assistant {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
          }
          
          .message-content {
            max-width: 220px;
          }
        }
      `}</style>
    </div>
  );
};

export default AIChatAssistant;
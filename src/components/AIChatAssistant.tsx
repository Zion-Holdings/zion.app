import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Mic, MicOff, Send, Bot, User, Sparkles, X, Minimize2, Maximize2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const mockAIResponses = [
  "I'd be happy to help you with that! Let me provide you with some information about our AI development services.",
  "That's a great question! Our cloud infrastructure solutions are designed to scale with your business needs.",
  "Based on your requirements, I'd recommend starting with our cybersecurity assessment package.",
  "We have extensive experience in that area. Let me connect you with one of our specialists.",
  "I can help you understand our pricing structure and find the best solution for your budget."
];

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm Zion AI, your personal technology consultant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: randomResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleVoiceInput = () => {
    if (!isListening) {
      setIsListening(true);
      // Simulate voice recognition
      setTimeout(() => {
        const voiceText = "I'm interested in your AI development services";
        setInputValue(voiceText);
        setIsListening(false);
      }, 2000);
    } else {
      setIsListening(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (isOpen) {
      setIsMinimized(!isMinimized);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        title="Chat with Zion AI"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-emerald rounded-full animate-pulse"></div>
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-zion-emerald rounded-full animate-pulse"></div>
            <span className="text-sm text-zion-slate">Zion AI is online</span>
            <button
              onClick={toggleChat}
              className="text-zion-slate-light hover:text-zion-slate transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-zion-emerald rounded-full animate-pulse"></div>
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-zion-cyan" />
            <span className="font-semibold text-zion-slate">Zion AI Assistant</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleChat}
            className="text-zion-slate-light hover:text-zion-slate transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-zion-slate-light hover:text-zion-slate transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.type === 'assistant' && (
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                  : 'bg-zion-slate-light/10 text-zion-slate border border-zion-slate-light/20'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <span className="text-xs opacity-70 mt-2 block">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            {message.type === 'user' && (
              <div className="w-8 h-8 bg-gradient-to-r from-zion-slate to-zion-slate-light rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-zion-slate-light/10 p-3 rounded-lg border border-zion-slate-light/20">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-zion-slate-light">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
            {inputValue && (
              <button
                onClick={() => setInputValue('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-slate"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <button
            onClick={handleVoiceInput}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-zion-slate-light/20 text-zion-slate hover:bg-zion-cyan hover:text-white'
            }`}
            title={isListening ? 'Listening...' : 'Voice Input'}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
          
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="p-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Send Message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-2 mt-2 text-xs text-zion-slate-light">
          <Sparkles className="w-3 h-3" />
          <span>Powered by Zion AI • Always learning</span>
        </div>
      </div>
    </div>
  );
}
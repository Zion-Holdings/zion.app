import React, { useState } from 'react';

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI assistant. How can I help you today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: inputValue
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot' as const,
        content: 'Thank you for your message! Our team will get back to you soon. In the meantime, feel free to explore our services or contact us directly.'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan/90 transition-colors flex items-center justify-center text-2xl"
        aria-label="Open chat assistant"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="bg-zion-cyan text-zion-blue-dark p-4 rounded-t-lg flex items-center justify-between">
        <h3 className="font-semibold">AI Assistant</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-zion-blue-dark hover:text-zion-blue-dark/80"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-zion-blue text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-zion-blue-light">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 bg-zion-blue border border-zion-blue-light rounded text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-zion-cyan text-white rounded hover:bg-zion-cyan/90 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
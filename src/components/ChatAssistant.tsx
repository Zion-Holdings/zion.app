import React, { useState } from 'react';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m here to help you with any questions about Zion Tech Group services.',
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: 'Thank you for your message! Our team will get back to you soon. For immediate assistance, please call us at +1 302 464 0950.',
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-light transition-colors z-50"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-xl z-50">
          <div className="bg-zion-blue p-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Zion Tech Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zion-slate-light hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>
          
          <div className="h-64 overflow-y-auto p-3 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.isBot
                      ? 'bg-zion-slate text-white'
                      : 'bg-zion-cyan text-white'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-zion-blue-light">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-white/10 border border-zion-blue-light rounded text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-zion-cyan text-white rounded hover:bg-zion-cyan-light transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
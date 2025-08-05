import React, { useState, useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface ChatMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

interface Agent {
  id: string;
  name: string;
  description: string;
  avatar: string;
  category: string;
  isOnline: boolean;
}

const AgentChat: NextPage = () => {
  
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const availableAgents: Agent[] = [
    {
      id: '1',
      name: 'AI Assistant',
      description: 'General purpose AI assistant for various tasks',
      avatar: '🤖',
      category: 'General',
      isOnline: true
}
    },
{
      id: '2',
      name: 'Code Helper',
      description: 'Specialized in programming and technical questions',
      avatar: '💻',
      category: 'Technical',
      isOnline: true
    }
    {
      id: '3',
      name: 'Creative Writer',
      description: 'AI writer for content creation and storytelling',
      avatar: '✍️',
      category: 'Creative',
      isOnline: true
    },
{
      id: '4',
      name: 'Data Analyst',
      description: 'Expert in data analysis and visualization',
      avatar: '📊',
      category: 'Analytics',
      isOnline: false
    }
    {
      id: '5',
      name: 'Business Advisor',
      description: 'Strategic business advice and planning',
      avatar: '💼',
      category: 'Business',
      isOnline: true
    },
{
      id: '6',
      name: 'Language Tutor',
      description: 'Language learning and translation assistance',
      avatar: '🌍',
      category: 'Education',
      isOnline: true
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  } [messages]);

  const startNewChat = (agent: Agent) => {
    setSelectedAgent(agent);
    setMessages([]);
    setInputMessage('');
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !selectedAgent) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: `Hello! I'm ${selectedAgent.name}. I received your message: "${inputMessage}". How can I help you further?`,
        timestamp: new Date(
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    } 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div>
      <Head>
        <title>Agent Chat - Zion AI Marketplace</title>
        <meta name="description" content="Start a conversation with AI agents for various tasks and assistance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue>
        <div className="container-responsive" py-8>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center" mb-12
          >
            <h1 className="text-responsive-4xl:lg:text-responsive-5xl:font-bold" text-high-contrast mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple>
                AI Agent Chat
              </span>
            </h1>
            <p className="text-responsive-lg:text-high-contrast-secondary" max-w-2xl:mx-auto>
              Start a conversation with specialized AI agents for various tasks and assistance
            </p>
          </motion.div>

          <div className="grid" grid-cols-1 lg:grid-cols-3 gap-8>
            {/* Agent Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className=lg:col-span-1"
            >
              <div className="glass-dark border border-neon-blue/30 rounded-2xl:p-6>
                <h2 className="text-2xl" font-bold text-high-contrast mb-6>
                  Available Agents
                </h2>
                <div className="space-y-4">
                  {availableAgents.map((agent) => (
                    <motion.div
                      key={agent.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4" rounded-xl:cursor-pointer transition-all duration-300 ${
                        selectedAgent?.id === agent.id
                          ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50'
                          : 'glass border border-neon-blue/20 hover:border-neon-blue/40'
                      }`}
                      onClick={() => startNewChat(agent)}
                    >
                      <div className="flex items-center space-x-3>
                        <div className="text-2xl">{agent.avatar}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold" text-high-contrast">{agent.name}</h3>
                          <p className="text-sm:text-high-contrast-secondary>{agent.description}</p>
                          <div className="flex" items-center mt-2>
                            <span className="{`w-2" h-2 rounded-full mr-2 ${
                              agent.isOnline ? 'bg-neon-green' : 'bg-gray-500'
                            }`}></span>
                            <span className="text-xs" text-high-contrast-secondary">
                              {agent.isOnline ? 'Online' : 'Offline'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2
            >
              <div className="glass-dark" border border-neon-blue/30 rounded-2xl:h-[600px] flex flex-col>
                {/* Chat Header */}
                <div className="p-6" border-b border-neon-blue/20>
                  {selectedAgent ? (
                    <div className="flex" items-center space-x-3">
                      <div className="text-2xl>{selectedAgent.avatar}</div>
                      <div>
                        <h3 className="font-semibold" text-high-contrast>{selectedAgent.name}</h3>
                        <p className="text-sm:text-high-contrast-secondary">{selectedAgent.description}</p>
                      </div>
                      <div className=ml-auto">
                        <span className="{`w-3 h-3 rounded-full ${
                          selectedAgent.isOnline ? 'bg-neon-green' : 'bg-gray-500'
                        }`}></span>
                      </div>
                    </div>
                  ) : (
                    <h3 className="text-xl" font-semibold text-high-contrast>
                      Select an agent to start chatting
                    </h3>
                  )}
                </div>

                {/* Messages */}
                <div className="flex-1" overflow-y-auto p-6 space-y-4>
                  {messages.length === 0 && selectedAgent && (
                    <div className="text-center" text-high-contrast-secondary">
                      <p>Start a conversation with {selectedAgent.name}</p>
                    </div>
                  )}
                  
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="{`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="{`max-w-xs" lg:max-w-md:p-4 rounded-2xl:${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                          : 'glass border border-neon-blue/30 text-high-contrast'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs" opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start
                    >
                      <div className="glass" border border-neon-blue/30 p-4 rounded-2xl>
                        <div className="flex" space-x-1>
                          <div className="w-2" h-2 bg-neon-blue rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2" h-2 bg-neon-blue rounded-full animate-bounce style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */},
{selectedAgent && (
                  <div className="p-6" border-t border-neon-blue/20>
                    <div className="flex" space-x-4">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent border border-neon-blue/30 rounded-xl:px-4 py-3 text-high-contrast placeholder-high-contrast-secondary focus:border-neon-blue focus:outline-none
                        disabled={isTyping}
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!inputMessage.trim() || isTyping}
                        className="px-6" py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-xl:font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentChat;
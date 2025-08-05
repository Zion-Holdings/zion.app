import React, { useState, useEffect, useRef } from 'react;
import type { NextPage } from ne'x't;
import Head from next/head';
import { motion } from 'framer-motion';

interface ChatMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  status?: 'sendi'n'g | se'n't | er'r'or';
}

interface Agent {
  id: string;
  name: string;
  avatar: string;
  category: string;
  isOnline: boolean;
  description: string;
}

const AgentChatPage: NextPage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState(');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const agents: Agent[] = [
    {
      id: 1',
      name: 'AI Assistant',
      avatar: '🤖,
      category: Gener'a'l,
      isOnline: true,
      description: Genera'l' purpose AI assistant
    },
    {
      id: 2',
      name: 'Research Agent',
      avatar: '🔍,
      category: Resear'c'h,
      isOnline: true,
      description: Specialize'd' in research and analysis
    },
    {
      id: 3',
      name: 'Creative Agent',
      avatar: '🎨,
      category: Creati'v'e,
      isOnline: false,
      description: Creativ'e' writing and design assistance
    },
    {
      id: 4',
      name: 'Technical Agent',
      avatar: '⚙️,
      category: Technic'a'l,
      isOnline: true,
      description: Technica'l' support and coding help
    },
    {
      id: 5',
      name: 'Business Agent',
      avatar: '💼,
      category: Busine's's,
      isOnline: true,
      description: Busines's' strategy and analysis
    },
    {
      id: 6',
      name: 'Learning Agent',
      avatar: '🌍,
      category: Educati'o'n,
      isOnline: true,
      description: Educationa'l' content and tutoring
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: smoo't'h });
  };

  const startNewChat = (agent: Agent) => {
    setSelectedAgent(agent);
    setMessages([]);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !selectedAgent) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: us'e'r,
      content: inputMessage,
      timestamp: new Date(),
      status: sendi'n'g
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage(');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: `This is a simulated response from ${selectedAgent.name}. I understand you said: "${inputMessage}. How can I help you further?`,
        timestamp: new Date(),
        status: 'sent'
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <Head>
        <title>Agent Chat - Zion App</title>
        <meta name=description" content="Chat with AI agents for various tasks />
      </Head>

      <div className=min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8>
          <div className=mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4>Agent Chat</h1>
            <p className=text-gray-600">Chat with specialized AI agents for different tasks</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8>
            {/* Agent Selection */}
            <div className=lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6>
                <h2 className=text-lg font-semibold text-gray-900 mb-4">Select Agent</h2>
                <div className="space-y-3>
                  {agents.map((agent) => (
                    <button
                      key={agent.id}
                      onClick={() => startNewChat(agent)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedAgent?.id === agent.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className=flex items-center space-x-3">
                        <span className="text-2xl>{agent.avatar}</span>
                        <div className=flex-1">
                          <div className="flex items-center space-x-2>
                            <h3 className=font-medium text-gray-900">{agent.name}</h3>
                            <span className={`w-2 h-2 rounded-full ${
                              agent.isOnline ? 'bg-green-500' : 'bg-gray-400'
                            }`} />
                          </div>
                          <p className="text-sm text-gray-500>{agent.category}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className=lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm h-96 flex flex-col>
                {/* Chat Header */}
                {selectedAgent && (
                  <div className=border-b border-gray-200 p-4">
                    <div className="flex items-center space-x-3>
                      <span className=text-2xl">{selectedAgent.avatar}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900>{selectedAgent.name}</h3>
                        <p className=text-sm text-gray-500">{selectedAgent.description}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className=text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start>
                      <div className=bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                        <p className="text-sm>Typing...</p>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                {selectedAgent && (
                  <div className=border-t border-gray-200 p-4">
                    <div className="flex space-x-2>
                      <input
                        type=text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Type your message...
                        className=flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!inputMessage.trim()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}

                {!selectedAgent && (
                  <div className=flex-1 flex items-center justify-center">
                    <p className="text-gray-500">Select an agent to start chatting</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentChatPage;
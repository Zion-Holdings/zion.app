import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

interface Message {
  id: string
  sender: string
  content: string
  timestamp: Date
  type: 'user' | 'ai' | 'service-provider'
  avatar?: string
}

interface ChatRoom {
  id: string
  name: string
  participants: string[]
  lastMessage?: string
  lastMessageTime?: Date
  unreadCount: number
}

const RealTimeChatPage: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [selectedRoom, setSelectedRoom] = useState<string>('general')
  const [isTyping, setIsTyping] = useState(false)
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([
    {
      id: 'general',
      name: 'General Chat',
      participants: ['All Users'],
      lastMessage: 'Welcome to Zion Marketplace!',
      lastMessageTime: new Date(),
      unreadCount: 0
    },
    {
      id: 'ai-support',
      name: 'AI Support',
      participants: ['AI Assistant'],
      lastMessage: 'How can I help you today?',
      lastMessageTime: new Date(),
      unreadCount: 0
    },
    {
      id: 'service-providers',
      name: 'Service Providers',
      participants: ['IT Consultants', 'AI Experts'],
      lastMessage: 'Professional services available',
      lastMessageTime: new Date(),
      unreadCount: 2
    },
    {
      id: 'marketplace',
      name: 'Marketplace Discussion',
      participants: ['Buyers', 'Sellers'],
      lastMessage: 'Latest marketplace updates',
      lastMessageTime: new Date(),
      unreadCount: 5
    }
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Simulate real-time messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance of new message
        const mockMessages = [
          'Anyone looking for AI development services?',
          'Great experience with the cloud migration service!',
          'Just completed a blockchain project. Amazing results!',
          'Looking for quantum computing experts.',
          'The AI assistant helped me find the perfect solution.',
          'Marketplace is getting better every day!',
          'Anyone tried the new security auditing service?',
          'Edge computing solutions are in high demand.',
          'Great community here at Zion!',
          'The talent directory is fantastic.'
        ]
        
        const randomMessage = mockMessages[Math.floor(Math.random() * mockMessages.length)]
        const senders = ['Sarah Chen', 'Alex Rodriguez', 'Dr. Michael Kim', 'Emma Thompson', 'James Wilson']
        const randomSender = senders[Math.floor(Math.random() * senders.length)]
        
        const newMessage: Message = {
          id: Date.now().toString(),
          sender: randomSender,
          content: randomMessage,
          timestamp: new Date(),
          type: 'user',
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSender}`
        }
        
        setMessages(prev => [...prev, newMessage])
        
        // Update chat room last message
        setChatRooms(prev => prev.map(room => 
          room.id === selectedRoom 
            ? { ...room, lastMessage: randomMessage, lastMessageTime: new Date() }
            : room
        ))
      }
    }, 5000) // Check every 5 seconds

    return () => clearInterval(interval)
  }, [selectedRoom])

  const handleSendMessage = useCallback(async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'You',
      content: inputMessage,
      timestamp: new Date(),
      type: 'user',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You'
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        'That\'s a great question! Let me help you with that.',
        'I can connect you with the right expert for that.',
        'Based on your needs, I recommend checking our AI services.',
        'We have several providers who specialize in that area.',
        'Let me search our marketplace for the best options.',
        'I\'ll help you find the perfect solution for your project.',
        'That\'s exactly what our marketplace is designed for!',
        'I can see you\'re looking for high-quality services.',
        'Let me introduce you to some expert providers.',
        'Our AI matching system will find the perfect fit.'
      ]
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'AI Assistant',
        content: randomResponse,
        timestamp: new Date(),
        type: 'ai',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AI'
      }
      
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000) // Random delay between 1-3 seconds
  }, [inputMessage])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const getRoomName = (roomId: string) => {
    const room = chatRooms.find(r => r.id === roomId)
    return room?.name || 'Unknown Room'
  }

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Real-Time Chat - Zion Marketplace</title>
        <meta name="description" content="Connect with users, service providers, and AI assistants in real-time on Zion Marketplace" />
        <meta name="keywords" content="real-time chat, marketplace communication, AI assistant, Zion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Talents
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </Link>
              <Link href="/ai-virtual-assistant" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                AI Assistant
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time Chat
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with users, service providers, and AI assistants in real-time. Get instant support, discuss projects, and build your network.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 h-[600px]">
            {/* Chat Rooms Sidebar */}
            <div className="bg-black/20 border-r border-white/10 p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Chat Rooms</h3>
              <div className="space-y-2">
                {chatRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      selectedRoom === room.id
                        ? 'bg-purple-600/20 border border-purple-500/30 text-white'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">{room.name}</div>
                        <div className="text-sm opacity-75">
                          {room.participants.join(', ')}
                        </div>
                        {room.lastMessage && (
                          <div className="text-xs opacity-60 truncate mt-1">
                            {room.lastMessage}
                          </div>
                        )}
                      </div>
                      {room.unreadCount > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {room.unreadCount}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="lg:col-span-3 flex flex-col">
              {/* Chat Header */}
              <div className="bg-black/20 border-b border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {getRoomName(selectedRoom)}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {chatRooms.find(r => r.id === selectedRoom)?.participants.join(', ')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">Online</span>
                  </div>
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-400 py-8">
                    <div className="text-6xl mb-4">💬</div>
                    <p className="text-lg">Start a conversation!</p>
                    <p className="text-sm">Messages will appear here</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex max-w-xs lg:max-w-md ${message.sender === 'You' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="flex-shrink-0">
                          <img
                            src={message.avatar}
                            alt={message.sender}
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div className={`ml-3 ${message.sender === 'You' ? 'mr-3' : ''}`}>
                          <div className={`rounded-lg px-4 py-2 ${
                            message.sender === 'You'
                              ? 'bg-purple-600 text-white'
                              : message.type === 'ai'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-700 text-white'
                          }`}>
                            <div className="text-sm font-medium mb-1">{message.sender}</div>
                            <div className="text-sm">{message.content}</div>
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex max-w-xs lg:max-w-md">
                      <div className="flex-shrink-0">
                        <img
                          src="https://api.dicebear.com/7.x/bottts/svg?seed=AI"
                          alt="AI Assistant"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="bg-blue-600 text-white rounded-lg px-4 py-2">
                          <div className="text-sm font-medium mb-1">AI Assistant</div>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="bg-black/20 border-t border-white/10 p-4">
                <div className="flex space-x-4">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-white mb-3">AI Assistant</h3>
            <p className="text-gray-300">
              Get instant help from our AI assistant. Ask questions, get recommendations, and find the perfect services.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-white mb-3">Community</h3>
            <p className="text-gray-300">
              Connect with other users, share experiences, and build your professional network in real-time.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-white mb-3">Service Providers</h3>
            <p className="text-gray-300">
              Chat directly with service providers, discuss projects, and get instant quotes for your needs.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Connect?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users already connecting, collaborating, and building amazing projects together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Join Zion Now
              </Link>
              <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealTimeChatPage 
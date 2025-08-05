import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'marketplace' | 'service' | 'talent' | 'payment';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    url: string;
  };
  icon?: string;
}

const NotificationsPage: NextPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading notifications
    setTimeout(() => {
      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'marketplace',
          title: 'New Service Available',
          message: 'AI Development service is now available in your area. This service includes custom AI model development, machine learning implementation, and data science consulting.',
          timestamp: new Date(Date.now() - 5 * 60 * 1000),
          read: false,
          action: {
            label: 'View Service',
            url: '/services/ai-model-development'
          },
          icon: '🤖'
        },
        {
          id: '2',
          type: 'talent',
          title: 'Talent Match Found',
          message: 'Dr. Sarah Chen matches your project requirements for quantum computing expertise. Review their profile and connect directly.',
          timestamp: new Date(Date.now() - 15 * 60 * 1000),
          read: false,
          action: {
            label: 'View Profile',
            url: '/talents'
          },
          icon: '👨‍💻'
        },
        {
          id: '3',
          type: 'payment',
          title: 'Payment Successful',
          message: 'Your payment of $2,500 for Cloud Migration Services has been processed successfully. You will receive a receipt via email.',
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          read: true,
          action: {
            label: 'View Receipt',
            url: '/dashboard'
          },
          icon: '💰'
        },
        {
          id: '4',
          type: 'service',
          title: 'Quote Request Accepted',
          message: 'Your quote request for Cloud Migration has been accepted by Alex Rodriguez. They will contact you within 24 hours.',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          read: false,
          action: {
            label: 'View Details',
            url: '/quote-request'
          },
          icon: '📋'
        },
        {
          id: '5',
          type: 'info',
          title: 'System Update',
          message: 'New features have been added to the marketplace including real-time chat, enhanced search, and improved AI matching.',
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
          read: true,
          action: {
            label: 'Learn More',
            url: '/about'
          },
          icon: '🔔'
        },
        {
          id: '6',
          type: 'marketplace',
          title: 'New Equipment Available',
          message: 'High-performance GPU clusters are now available for AI training and machine learning workloads.',
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
          read: false,
          action: {
            label: 'View Equipment',
            url: '/equipment'
          },
          icon: '⚙️'
        },
        {
          id: '7',
          type: 'service',
          title: 'Service Provider Online',
          message: 'Emma Thompson is now available for blockchain development consultations and smart contract audits.',
          timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
          read: true,
          action: {
            label: 'Chat Now',
            url: '/real-time-chat'
          },
          icon: '👨‍💼'
        },
        {
          id: '8',
          type: 'talent',
          title: 'New Talent Joined',
          message: 'Dr. Michael Kim has joined the marketplace as a quantum computing expert with 10+ years of experience.',
          timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
          read: false,
          action: {
            label: 'View Profile',
            url: '/talents'
          },
          icon: '🎯'
        },
        {
          id: '9',
          type: 'payment',
          title: 'Payment Reminder',
          message: 'Your premium subscription will renew in 3 days. Update your payment method if needed.',
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
          read: true,
          action: {
            label: 'Manage Billing',
            url: '/dashboard'
          },
          icon: '💳'
        },
        {
          id: '10',
          type: 'warning',
          title: 'Security Alert',
          message: 'We detected a login attempt from a new device. If this was you, no action is needed.',
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          read: true,
          action: {
            label: 'Review Activity',
            url: '/dashboard'
          },
          icon: '🔒'
        }
      ];

      setNotifications(mockNotifications);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || 
      (filter === 'unread' && !notification.read) || 
      (filter === 'read' && notification.read);
    
    const matchesType = typeFilter === 'all' || notification.type === typeFilter;
    
    const matchesSearch = searchTerm === '' || 
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesType && matchesSearch;
  });

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(n => 
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (notificationId: string) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  const getNotificationIcon = (type: string, customIcon?: string) => {
    if (customIcon) return customIcon;
    
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'marketplace': return '🏪';
      case 'service': return '🔧';
      case 'talent': return '👨‍💻';
      case 'payment': return '💰';
      default: return '🔔';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-green-500 bg-green-500/10';
      case 'error': return 'border-red-500 bg-red-500/10';
      case 'warning': return 'border-yellow-500 bg-yellow-500/10';
      case 'info': return 'border-blue-500 bg-blue-500/10';
      case 'marketplace': return 'border-purple-500 bg-purple-500/10';
      case 'service': return 'border-orange-500 bg-orange-500/10';
      case 'talent': return 'border-indigo-500 bg-indigo-500/10';
      case 'payment': return 'border-green-500 bg-green-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Notifications - Zion Marketplace</title>
        <meta name="description" content="Manage your notifications and stay updated with marketplace activities" />
        <meta name="keywords" content="notifications, marketplace updates, Zion" />
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
              <Link href="/real-time-chat" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Live Chat
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
            Notifications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with marketplace activities, service updates, and important announcements
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{notifications.length}</div>
            <div className="text-gray-300">Total</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{unreadCount}</div>
            <div className="text-gray-300">Unread</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{notifications.filter(n => n.read).length}</div>
            <div className="text-gray-300">Read</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{notifications.filter(n => n.type === 'marketplace').length}</div>
            <div className="text-gray-300">Marketplace</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Filter by Status */}
            <div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as 'all' | 'unread' | 'read')}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="all">All Notifications</option>
                <option value="unread">Unread Only</option>
                <option value="read">Read Only</option>
              </select>
            </div>

            {/* Filter by Type */}
            <div>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="all">All Types</option>
                <option value="marketplace">Marketplace</option>
                <option value="service">Service</option>
                <option value="talent">Talent</option>
                <option value="payment">Payment</option>
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="success">Success</option>
                <option value="error">Error</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={markAllAsRead}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Mark all as read
            </button>
            <div className="text-sm text-gray-400">
              {filteredNotifications.length} of {notifications.length} notifications
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-lg font-medium">Loading notifications...</span>
              </div>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold text-white mb-2">No notifications found</h3>
              <p className="text-gray-400">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <AnimatePresence>
              {filteredNotifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                    !notification.read ? 'border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl flex-shrink-0">
                      {getNotificationIcon(notification.type, notification.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {notification.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-400">
                            {formatTime(notification.timestamp)}
                          </span>
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            notification.type === 'marketplace' ? 'bg-purple-500/20 text-purple-300' :
                            notification.type === 'service' ? 'bg-orange-500/20 text-orange-300' :
                            notification.type === 'talent' ? 'bg-indigo-500/20 text-indigo-300' :
                            notification.type === 'payment' ? 'bg-green-500/20 text-green-300' :
                            'bg-gray-500/20 text-gray-300'
                          }`}>
                            {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                          </span>
                          {!notification.read && (
                            <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        {notification.action && (
                          <Link
                            href={notification.action.url}
                            onClick={() => markAsRead(notification.id)}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                          >
                            {notification.action.label}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Never miss important updates about services, talents, and marketplace activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Explore Marketplace
              </Link>
              <Link href="/real-time-chat" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Start Chatting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationsPage 
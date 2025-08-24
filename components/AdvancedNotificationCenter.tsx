import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  XCircle, 
  Settings, 
  Filter,
  Search,
  Archive,
  Trash2,
  Eye,
  EyeOff,
  Clock,
  Star,
  MessageSquare,
  Volume2,
  VolumeX
} from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
  priority: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  read: boolean;
  archived: boolean;
  category: string;
  actionUrl?: string;
  metadata?: Record<string, any>;
}

interface AdvancedNotificationCenterProps {
  maxNotifications?: number;
  autoDismiss?: boolean;
  dismissDelay?: number;
  showUnreadCount?: boolean;
  enableSound?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const AdvancedNotificationCenter: React.FC<AdvancedNotificationCenterProps> = ({
  maxNotifications = 50,
  autoDismiss = true,
  dismissDelay = 5000,
  showUnreadCount = true,
  enableSound = false,
  position = 'top-right'
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'unread' | 'high-priority'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showArchived, setShowArchived] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(enableSound);

  // Generate mock notifications
  const generateMockNotifications = useCallback(() => {
    const types: Notification['type'][] = ['success', 'warning', 'error', 'info'];
    const priorities: Notification['priority'][] = ['low', 'medium', 'high', 'critical'];
    const categories = ['System', 'Security', 'Performance', 'User', 'Integration', 'Backup'];
    
    const mockNotifications: Notification[] = [];
    
    for (let i = 0; i < 15; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const priority = priorities[Math.floor(Math.random() * priorities.length)];
      const category = categories[Math.floor(Math.random() * categories.length)];
      
      mockNotifications.push({
        id: `notification-${i}`,
        title: `${category} Update`,
        message: `This is a ${type} notification with ${priority} priority level.`,
        type,
        priority,
        timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000),
        read: Math.random() > 0.3,
        archived: Math.random() > 0.8,
        category,
        actionUrl: Math.random() > 0.5 ? `https://example.com/action-${i}` : undefined,
        metadata: {
          source: 'system',
          userId: Math.floor(Math.random() * 1000),
          sessionId: `session-${Math.random().toString(36).substr(2, 9)}`
        }
      });
    }
    
    return mockNotifications.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, []);

  useEffect(() => {
    setNotifications(generateMockNotifications());
  }, [generateMockNotifications]);

  // Auto-dismiss notifications
  useEffect(() => {
    if (!autoDismiss) return;
    
    const interval = setInterval(() => {
      setNotifications(prev => 
        prev.filter(notification => {
          const timeDiff = Date.now() - notification.timestamp.getTime();
          return timeDiff < dismissDelay || notification.priority === 'critical';
        })
      );
    }, 1000);
    
    return () => clearInterval(interval);
  }, [autoDismiss, dismissDelay]);

  // Add new notification
  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp' | 'read' | 'archived'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notification-${Date.now()}`,
      timestamp: new Date(),
      read: false,
      archived: false
    };
    
    setNotifications(prev => [newNotification, ...prev.slice(0, maxNotifications - 1)]);
    
    if (soundEnabled) {
      // Play notification sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
      audio.play().catch(() => {}); // Ignore errors
    }
  }, [maxNotifications, soundEnabled]);

  // Mark notification as read
  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }, []);

  // Archive notification
  const archiveNotification = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, archived: true } : notification
      )
    );
  }, []);

  // Delete notification
  const deleteNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Mark all as read
  const markAllAsRead = useCallback(() => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  }, []);

  // Clear all notifications
  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  // Filter notifications
  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread' && notification.read) return false;
    if (filter === 'high-priority' && !['high', 'critical'].includes(notification.priority)) return false;
    if (searchQuery && !notification.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !notification.message.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (!showArchived && notification.archived) return false;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;
  const highPriorityCount = notifications.filter(n => ['high', 'critical'].includes(n.priority)).length;

  const getPriorityColor = (priority: Notification['priority']) => {
    switch (priority) {
      case 'critical': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'high': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'error': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'info': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'top-4 right-4';
    }
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-50`}>
      {/* Notification Bell */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg border border-gray-600 transition-colors"
      >
        <Bell className="w-6 h-6 text-white" />
        {showUnreadCount && unreadCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
          >
            {unreadCount > 99 ? '99+' : unreadCount}
          </motion.div>
        )}
        {highPriorityCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-gray-800"
          />
        )}
      </motion.button>

      {/* Notification Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-96 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-700 bg-gray-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Notifications</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className={`p-2 rounded-md transition-colors ${
                      soundEnabled ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Search and Filters */}
              <div className="mt-3 space-y-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search notifications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as any)}
                    className="flex-1 px-3 py-1 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="high-priority">High Priority</option>
                  </select>
                  
                  <button
                    onClick={() => setShowArchived(!showArchived)}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      showArchived ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    {showArchived ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Notification List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredNotifications.length === 0 ? (
                <div className="p-8 text-center text-gray-400">
                  <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No notifications found</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-700">
                  {filteredNotifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`p-4 hover:bg-gray-800 transition-colors ${
                        !notification.read ? 'bg-gray-800/50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {getTypeIcon(notification.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h4 className="text-sm font-medium text-white truncate">
                              {notification.title}
                            </h4>
                            <div className="flex items-center gap-1">
                              <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(notification.priority)}`}>
                                {notification.priority}
                              </span>
                              <span className="text-xs text-gray-400">
                                {notification.timestamp.toLocaleTimeString()}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                              {notification.category}
                            </span>
                            
                            {notification.actionUrl && (
                              <a
                                href={notification.actionUrl}
                                className="text-xs text-blue-400 hover:text-blue-300 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Details
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-3">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            Mark as read
                          </button>
                        )}
                        
                        <button
                          onClick={() => archiveNotification(notification.id)}
                          className="text-xs text-gray-400 hover:text-gray-300 hover:underline"
                        >
                          Archive
                        </button>
                        
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-xs text-red-400 hover:text-red-300 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            {filteredNotifications.length > 0 && (
              <div className="p-4 border-t border-gray-700 bg-gray-800">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {unreadCount} unread • {highPriorityCount} high priority
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={markAllAsRead}
                      className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
                    >
                      Mark all read
                    </button>
                    
                    <button
                      onClick={clearAll}
                      className="text-sm text-red-400 hover:text-red-300 hover:underline"
                    >
                      Clear all
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedNotificationCenter;
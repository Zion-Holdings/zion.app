import React, { useState, useEffect, useRef } from 'react';
import { Bell, X, CheckCircle, AlertTriangle, Info, XCircle, Settings, Filter, Search, MoreVertical, Archive, Trash2, Eye, EyeOff } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'system' | 'project' | 'security' | 'performance' | 'user';
  timestamp: Date;
  isRead: boolean;
  isArchived: boolean;
  actions?: Array<{
    label: string;
    action: () => void;
    variant: 'primary' | 'secondary' | 'danger';
  }>;
  metadata?: Record<string, any>;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Project Milestone Achieved',
    message: 'AI E-commerce Platform has reached 75% completion milestone',
    type: 'success',
    priority: 'medium',
    category: 'project',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    isRead: false,
    isArchived: false,
    actions: [
      { label: 'View Details', action: () => console.log('View project'), variant: 'primary' },
      { label: 'Archive', action: () => console.log('Archive'), variant: 'secondary' }
    ]
  },
  {
    id: '2',
    title: 'Security Alert',
    message: 'Unusual login attempt detected from new IP address',
    type: 'warning',
    priority: 'high',
    category: 'security',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    isRead: false,
    isArchived: false,
    actions: [
      { label: 'Review Activity', action: () => console.log('Review security'), variant: 'primary' },
      { label: 'Dismiss', action: () => console.log('Dismiss'), variant: 'secondary' }
    ]
  },
  {
    id: '3',
    title: 'Performance Issue Detected',
    message: 'API response time increased by 200% in the last hour',
    type: 'error',
    priority: 'critical',
    category: 'performance',
    timestamp: new Date(Date.now() - 1000 * 60 * 2), // 2 minutes ago
    isRead: false,
    isArchived: false,
    actions: [
      { label: 'Investigate', action: () => console.log('Investigate'), variant: 'primary' },
      { label: 'Acknowledge', action: () => console.log('Acknowledge'), variant: 'secondary' }
    ]
  },
  {
    id: '4',
    title: 'System Update Available',
    message: 'New version v2.1.0 is ready for deployment',
    type: 'info',
    priority: 'low',
    category: 'system',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    isRead: true,
    isArchived: false,
    actions: [
      { label: 'Deploy Now', action: () => console.log('Deploy'), variant: 'primary' },
      { label: 'Schedule', action: () => console.log('Schedule'), variant: 'secondary' }
    ]
  }
];

export function AdvancedNotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showRead, setShowRead] = useState(true);
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.isRead).length);
  }, [notifications]);

  const filteredNotifications = notifications.filter(notification => {
    const typeMatch = filterType === 'all' || notification.type === filterType;
    const priorityMatch = filterPriority === 'all' || notification.priority === filterPriority;
    const categoryMatch = filterCategory === 'all' || notification.category === filterCategory;
    const searchMatch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    const readMatch = showRead || !notification.isRead;
    
    return typeMatch && priorityMatch && categoryMatch && searchMatch && readMatch;
  });

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const archiveNotification = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, isArchived: true } : n
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-zion-emerald" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-zion-gold" />;
      case 'error': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'info': return <Info className="w-5 h-5 text-zion-cyan" />;
      default: return <Info className="w-5 h-5 text-zion-slate" />;
    }
  };

  const getPriorityColor = (priority: Notification['priority']) => {
    switch (priority) {
      case 'low': return 'border-l-zion-emerald';
      case 'medium': return 'border-l-zion-cyan';
      case 'high': return 'border-l-zion-gold';
      case 'critical': return 'border-l-red-500';
      default: return 'border-l-zion-slate';
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const groupedNotifications = groupByCategory 
    ? filteredNotifications.reduce((groups, notification) => {
        const category = notification.category;
        if (!groups[category]) groups[category] = [];
        groups[category].push(notification);
        return groups;
      }, {} as Record<string, Notification[]>)
    : { 'All': filteredNotifications };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-36 p-3 bg-zion-emerald hover:bg-zion-emerald-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 relative"
        title="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-36 z-50">
        <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-zion-emerald rounded-full animate-pulse"></div>
            <span className="text-sm text-zion-slate">
              {unreadCount > 0 ? `${unreadCount} unread notifications` : 'No new notifications'}
            </span>
            <button
              onClick={() => setIsMinimized(false)}
              className="text-zion-slate-light hover:text-zion-slate transition-colors"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 flex flex-col" ref={containerRef}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-zion-emerald/10 to-zion-cyan/10">
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-zion-emerald" />
          <span className="font-semibold text-zion-slate">Notifications</span>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {unreadCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={markAllAsRead}
            className="text-xs text-zion-cyan hover:text-zion-cyan-light transition-colors"
          >
            Mark all read
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="text-zion-slate-light hover:text-zion-slate transition-colors"
          >
            <EyeOff className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-zion-slate-light hover:text-zion-slate transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 border-b border-zion-slate-light bg-zion-slate-light/5">
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-emerald focus:border-transparent text-sm"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-2 py-1 border border-zion-slate-light rounded text-xs bg-white dark:bg-zion-slate text-zion-slate focus:ring-1 focus:ring-zion-emerald focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              <option value="info">Info</option>
            </select>
            
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-2 py-1 border border-zion-slate-light rounded text-xs bg-white dark:bg-zion-slate text-zion-slate focus:ring-1 focus:ring-zion-emerald focus:border-transparent"
            >
              <option value="all">All Priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
            
            <button
              onClick={() => setShowRead(!showRead)}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                showRead 
                  ? 'bg-zion-emerald text-white' 
                  : 'bg-zion-slate-light/20 text-zion-slate hover:bg-zion-slate-light/30'
              }`}
            >
              {showRead ? 'Hide Read' : 'Show Read'}
            </button>
            
            <button
              onClick={() => setGroupByCategory(!groupByCategory)}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                groupByCategory 
                  ? 'bg-zion-cyan text-white' 
                  : 'bg-zion-slate-light/20 text-zion-slate hover:bg-zion-slate-light/30'
              }`}
            >
              {groupByCategory ? 'Ungroup' : 'Group'}
            </button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto">
        {Object.entries(groupedNotifications).map(([category, categoryNotifications]) => (
          <div key={category}>
            {groupByCategory && (
              <div className="px-4 py-2 bg-zion-slate-light/10 border-b border-zion-slate-light">
                <h3 className="text-sm font-medium text-zion-slate capitalize">{category}</h3>
              </div>
            )}
            
            {categoryNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`border-l-4 ${getPriorityColor(notification.priority)} ${
                  !notification.isRead ? 'bg-zion-emerald/5' : 'bg-white dark:bg-zion-slate'
                } hover:bg-zion-slate-light/5 transition-colors`}
              >
                <div className="p-4 border-b border-zion-slate-light/20">
                  <div className="flex items-start gap-3">
                    {getTypeIcon(notification.type)}
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className={`text-sm font-medium ${
                          !notification.isRead ? 'text-zion-slate' : 'text-zion-slate-light'
                        }`}>
                          {notification.title}
                        </h4>
                        <div className="flex items-center gap-1">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            notification.priority === 'low' ? 'bg-zion-emerald/20 text-zion-emerald' :
                            notification.priority === 'medium' ? 'bg-zion-cyan/20 text-zion-cyan' :
                            notification.priority === 'high' ? 'bg-zion-gold/20 text-zion-gold' :
                            'bg-red-500/20 text-red-500'
                          }`}>
                            {notification.priority}
                          </span>
                          <span className="text-xs text-zion-slate-light">
                            {getTimeAgo(notification.timestamp)}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-zion-slate-light mb-3 line-clamp-2">
                        {notification.message}
                      </p>
                      
                      {/* Actions */}
                      {notification.actions && (
                        <div className="flex items-center gap-2">
                          {notification.actions.map((action, index) => (
                            <button
                              key={index}
                              onClick={action.action}
                              className={`px-3 py-1 text-xs rounded transition-colors ${
                                action.variant === 'primary' ? 'bg-zion-emerald text-white hover:bg-zion-emerald-light' :
                                action.variant === 'secondary' ? 'bg-zion-slate-light/20 text-zion-slate hover:bg-zion-slate-light/30' :
                                'bg-red-500 text-white hover:bg-red-600'
                              }`}
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Notification Actions */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-zion-slate-light/20">
                    <div className="flex items-center gap-2">
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-zion-cyan hover:text-zion-cyan-light transition-colors"
                        >
                          Mark as read
                        </button>
                      )}
                      <button
                        onClick={() => archiveNotification(notification.id)}
                        className="text-xs text-zion-slate-light hover:text-zion-slate transition-colors"
                      >
                        Archive
                      </button>
                    </div>
                    
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="text-xs text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        
        {filteredNotifications.length === 0 && (
          <div className="p-8 text-center">
            <Bell className="w-12 h-12 text-zion-slate-light mx-auto mb-4" />
            <p className="text-zion-slate-light">No notifications found</p>
          </div>
        )}
      </div>
    </div>
  );
}
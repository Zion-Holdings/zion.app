import React, { useState, useEffect, useRef } from 'react';
import { Bell, X, Check, AlertTriangle, Info, Clock, Settings, Filter, Trash2, Archive } from 'lucide-react';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'system';
  category: 'general' | 'project' | 'security' | 'billing' | 'system' | 'user';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  isRead: boolean;
  isArchived: boolean;
  createdAt: string;
  expiresAt?: string;
  actions?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
  }[];
  metadata?: Record<string, any>;
  sender?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export interface NotificationCenterProps {
  notifications: Notification[];
  onNotificationRead?: (notificationId: string) => void;
  onNotificationArchive?: (notificationId: string) => void;
  onNotificationDelete?: (notificationId: string) => void;
  onMarkAllRead?: () => void;
  onClearAll?: () => void;
  maxNotifications?: number;
  showUnreadCount?: boolean;
  showCategories?: boolean;
  showPriority?: boolean;
  showActions?: boolean;
  showSender?: boolean;
  showExpiry?: boolean;
  className?: string;
}

const notificationTypeConfig = {
  info: { icon: Info, color: 'text-blue-500', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
  success: { icon: Check, color: 'text-green-500', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
  warning: { icon: AlertTriangle, color: 'text-yellow-500', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' },
  error: { icon: X, color: 'text-red-500', bgColor: 'bg-red-50', borderColor: 'border-red-200' },
  system: { icon: Settings, color: 'text-gray-500', bgColor: 'bg-gray-50', borderColor: 'border-gray-200' }
};

const priorityConfig = {
  low: { color: 'text-gray-500', bgColor: 'bg-gray-100' },
  medium: { color: 'text-blue-500', bgColor: 'bg-blue-100' },
  high: { color: 'text-orange-500', bgColor: 'bg-orange-100' },
  urgent: { color: 'text-red-500', bgColor: 'bg-red-100' }
};

const categoryConfig = {
  general: { color: 'bg-gray-100 text-gray-700' },
  project: { color: 'bg-blue-100 text-blue-700' },
  security: { color: 'bg-red-100 text-red-700' },
  billing: { color: 'bg-green-100 text-green-700' },
  system: { color: 'bg-purple-100 text-purple-700' },
  user: { color: 'bg-orange-100 text-orange-700' }
};

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  onNotificationRead,
  onNotificationArchive,
  onNotificationDelete,
  onMarkAllRead,
  onClearAll,
  maxNotifications = 50,
  showUnreadCount = true,
  showCategories = true,
  showPriority = true,
  showActions = true,
  showSender = true,
  showExpiry = true,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterType, setFilterType] = useState<Notification['type'] | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState<Notification['category'] | 'all'>('all');
  const [filterPriority, setFilterPriority] = useState<Notification['priority'] | 'all'>('all');
  const [showRead, setShowRead] = useState(true);
  const [showArchived, setShowArchived] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'priority' | 'type'>('date');
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredNotifications = notifications
    .filter(notification => {
      if (filterType !== 'all' && notification.type !== filterType) return false;
      if (filterCategory !== 'all' && notification.category !== filterCategory) return false;
      if (filterPriority !== 'all' && notification.priority !== filterPriority) return false;
      if (!showRead && notification.isRead) return false;
      if (!showArchived && notification.isArchived) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    })
    .slice(0, maxNotifications);

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const unreadUrgentCount = notifications.filter(n => !n.isRead && n.priority === 'urgent').length;

  const handleNotificationClick = (notification: Notification) => {
    if (!notification.isRead) {
      onNotificationRead?.(notification.id);
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const isExpired = (notification: Notification) => {
    if (!notification.expiresAt) return false;
    return new Date() > new Date(notification.expiresAt);
  };

  const renderNotification = (notification: Notification) => {
    const typeConfig = notificationTypeConfig[notification.type];
    const priorityConfig = priorityConfig[notification.priority];
    const categoryConfig = categoryConfig[notification.category];
    const Icon = typeConfig.icon;
    const isExpiredNotification = isExpired(notification);

    return (
      <div
        key={notification.id}
        className={`border rounded-lg p-4 transition-all duration-200 ${
          notification.isRead
            ? 'bg-white border-gray-200'
            : `${typeConfig.bgColor} ${typeConfig.borderColor} border-l-4 border-l-${typeConfig.color.split('-')[1]}-500`
        } ${isExpiredNotification ? 'opacity-60' : ''}`}
        onClick={() => handleNotificationClick(notification)}
      >
        {/* Notification Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Icon className={`w-5 h-5 ${typeConfig.color}`} />
            <h4 className={`font-medium text-sm ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}`}>
              {notification.title}
            </h4>
          </div>
          
          <div className="flex items-center space-x-2">
            {showPriority && (
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityConfig.bgColor} ${priorityConfig.color}`}>
                {notification.priority}
              </span>
            )}
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNotificationArchive?.(notification.id);
              }}
              className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-400 hover:text-gray-600"
            >
              <Archive className="w-4 h-4" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNotificationDelete?.(notification.id);
              }}
              className="p-1 hover:bg-red-100 rounded transition-colors text-gray-400 hover:text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Notification Message */}
        <p className={`text-sm mb-3 ${notification.isRead ? 'text-gray-600' : 'text-gray-700'}`}>
          {notification.message}
        </p>

        {/* Notification Metadata */}
        <div className="space-y-2">
          {/* Categories and Sender */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {showCategories && (
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${categoryConfig.color}`}>
                  {notification.category}
                </span>
              )}
              
              {showSender && notification.sender && (
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  {notification.sender.avatar ? (
                    <img
                      src={notification.sender.avatar}
                      alt={notification.sender.name}
                      className="w-4 h-4 rounded-full"
                    />
                  ) : (
                    <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">
                        {notification.sender.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span>{notification.sender.name}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{formatTimeAgo(notification.createdAt)}</span>
              
              {showExpiry && notification.expiresAt && (
                <>
                  <span>•</span>
                  <span className={isExpiredNotification ? 'text-red-500' : ''}>
                    {isExpiredNotification ? 'Expired' : `Expires ${formatTimeAgo(notification.expiresAt)}`}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Actions */}
          {showActions && notification.actions && notification.actions.length > 0 && (
            <div className="flex space-x-2 pt-2 border-t border-gray-100">
              {notification.actions.map((action, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick();
                  }}
                  className={`px-3 py-1 text-xs rounded-md transition-colors ${
                    action.variant === 'danger'
                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
                      : action.variant === 'primary'
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`relative ${className}`} ref={notificationRef}>
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Bell className="w-6 h-6" />
        
        {showUnreadCount && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadUrgentCount > 0 ? '!' : unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
          {/* Panel Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            
            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <button
                  onClick={onMarkAllRead}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Mark all read
                </button>
              )}
              
              <button
                onClick={onClearAll}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Clear all
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="p-4 border-b border-gray-200 space-y-3">
            {/* Filter Controls */}
            <div className="flex items-center space-x-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as Notification['type'] | 'all')}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Types</option>
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="system">System</option>
              </select>
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value as Notification['category'] | 'all')}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="general">General</option>
                <option value="project">Project</option>
                <option value="security">Security</option>
                <option value="billing">Billing</option>
                <option value="system">System</option>
                <option value="user">User</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'priority' | 'type')}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="date">Sort by Date</option>
                <option value="priority">Sort by Priority</option>
                <option value="type">Sort by Type</option>
              </select>
            </div>
            
            {/* Toggle Controls */}
            <div className="flex items-center space-x-4 text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showRead}
                  onChange={(e) => setShowRead(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Show read</span>
              </label>
              
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showArchived}
                  onChange={(e) => setShowArchived(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Show archived</span>
              </label>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto p-4 space-y-3">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(renderNotification)
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Bell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No notifications to display</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
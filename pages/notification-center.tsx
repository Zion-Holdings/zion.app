import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'system' | 'automation';
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  timestamp: Date;
  read: boolean;
  actionRequired: boolean;
  source: string;
  metadata?: any;
  expiresAt?: Date;
}

interface NotificationFilters {
  type: string[];
  priority: string[];
  category: string[];
  read: boolean | null;
  actionRequired: boolean | null;
  dateRange: string;
}

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filters, setFilters] = useState<NotificationFilters>({
    type: [],
    priority: [],
    category: [],
    read: null,
    actionRequired: null,
    dateRange: 'all'
  });
  const [selectedNotifications, setSelectedNotifications] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'timestamp' | 'priority' | 'type' | 'category'>('timestamp');
  const [viewMode, setViewMode] = useState<'all' | 'unread' | 'action'>('all');

  // Mock notifications data
  const mockNotifications: Notification[] = [
    {
      id: '1',
      title: 'Workflow Execution Completed',
      message: 'Data processing pipeline successfully completed with 100% success rate.',
      type: 'success',
      priority: 'medium',
      category: 'Automation',
      timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
      read: false,
      actionRequired: false,
      source: 'Workflow Orchestrator',
      metadata: { workflowId: 'wf-123', executionTime: '2.3s', steps: 4 }
    },
    {
      id: '2',
      title: 'Performance Alert',
      message: 'CPU usage exceeded 85% threshold. Consider scaling resources.',
      type: 'warning',
      priority: 'high',
      category: 'System',
      timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
      read: false,
      actionRequired: true,
      source: 'Health Monitor',
      metadata: { cpu: 87, memory: 72, disk: 45 }
    },
    {
      id: '3',
      title: 'Content Generation Failed',
      message: 'AI content generator encountered an error during blog post creation.',
      type: 'error',
      priority: 'high',
      category: 'Content',
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      read: true,
      actionRequired: true,
      source: 'AI Content Generator',
      metadata: { error: 'API rate limit exceeded', retryCount: 3 }
    },
    {
      id: '4',
      title: 'New Analytics Report Available',
      message: 'Weekly performance report has been generated and is ready for review.',
      type: 'info',
      priority: 'low',
      category: 'Analytics',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      read: false,
      actionRequired: false,
      source: 'Analytics Engine',
      metadata: { reportId: 'rep-456', period: 'weekly', metrics: 15 }
    },
    {
      id: '5',
      title: 'System Maintenance Scheduled',
      message: 'Planned maintenance window scheduled for tomorrow at 2:00 AM UTC.',
      type: 'system',
      priority: 'medium',
      category: 'System',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      read: true,
      actionRequired: false,
      source: 'System Admin',
      metadata: { maintenanceWindow: '2:00-4:00 AM UTC', duration: '2 hours' }
    },
    {
      id: '6',
      title: 'Automation Health Check',
      message: 'All automation systems are running optimally with 98% uptime.',
      type: 'success',
      priority: 'low',
      category: 'Automation',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      read: true,
      actionRequired: false,
      source: 'Health Monitor',
      metadata: { uptime: 98, activeWorkflows: 12, avgResponseTime: '1.2s' }
    },
    {
      id: '7',
      title: 'Security Alert',
      message: 'Multiple failed login attempts detected from suspicious IP address.',
      type: 'error',
      priority: 'critical',
      category: 'Security',
      timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
      read: false,
      actionRequired: true,
      source: 'Security Monitor',
      metadata: { ip: '192.168.1.100', attempts: 15, location: 'Unknown' }
    },
    {
      id: '8',
      title: 'Database Backup Completed',
      message: 'Daily database backup completed successfully. Backup size: 2.3 GB.',
      type: 'success',
      priority: 'low',
      category: 'System',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      read: true,
      actionRequired: false,
      source: 'Backup Service',
      metadata: { size: '2.3 GB', duration: '15m 32s', tables: 45 }
    }
  ];

  const availableTypes = ['info', 'success', 'warning', 'error', 'system', 'automation'];
  const availablePriorities = ['low', 'medium', 'high', 'critical'];
  const availableCategories = ['System', 'Automation', 'Content', 'Analytics', 'Security', 'Performance'];

  useEffect(() => {
    setNotifications(mockNotifications);
  }, []);

  const filteredNotifications = notifications.filter(notification => {
    // Type filter
    const typeMatch = filters.type.length === 0 || filters.type.includes(notification.type);
    
    // Priority filter
    const priorityMatch = filters.priority.length === 0 || filters.priority.includes(notification.priority);
    
    // Category filter
    const categoryMatch = filters.category.length === 0 || filters.category.includes(notification.category);
    
    // Read status filter
    const readMatch = filters.read === null || notification.read === filters.read;
    
    // Action required filter
    const actionMatch = filters.actionRequired === null || notification.actionRequired === filters.actionRequired;
    
    // Date range filter
    const dateMatch = filters.dateRange === 'all' || 
                     (filters.dateRange === 'hour' && isWithinHours(notification.timestamp, 1)) ||
                     (filters.dateRange === 'day' && isWithinDays(notification.timestamp, 1)) ||
                     (filters.dateRange === 'week' && isWithinDays(notification.timestamp, 7));
    
    return typeMatch && priorityMatch && categoryMatch && readMatch && actionMatch && dateMatch;
  });

  const sortedNotifications = [...filteredNotifications].sort((a, b) => {
    switch (sortBy) {
      case 'timestamp':
        return b.timestamp.getTime() - a.timestamp.getTime();
      case 'priority':
        const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      case 'type':
        return a.type.localeCompare(b.type);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const isWithinHours = (date: Date, hours: number) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    return diffHours <= hours;
  };

  const isWithinDays = (date: Date, days: number) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= days;
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - timestamp.getTime());
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: 'bg-gray-100 text-gray-800',
      medium: 'bg-blue-100 text-blue-800',
      high: 'bg-yellow-100 text-yellow-800',
      critical: 'bg-red-100 text-red-800'
    };
    return colors[priority as keyof typeof colors] || colors.low;
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      info: 'ℹ️',
      success: '✅',
      warning: '⚠️',
      error: '❌',
      system: '⚙️',
      automation: '🤖'
    };
    return icons[type as keyof typeof icons] || 'ℹ️';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      info: 'border-blue-500 bg-blue-50',
      success: 'border-green-500 bg-green-50',
      warning: 'border-yellow-500 bg-yellow-50',
      error: 'border-red-500 bg-red-50',
      system: 'border-purple-500 bg-purple-50',
      automation: 'border-indigo-500 bg-indigo-50'
    };
    return colors[type as keyof typeof colors] || colors.info;
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const deleteSelected = () => {
    setNotifications(prev => prev.filter(notif => !selectedNotifications.has(notif.id)));
    setSelectedNotifications(new Set());
  };

  const toggleSelection = (id: string) => {
    const newSelected = new Set(selectedNotifications);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedNotifications(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedNotifications.size === filteredNotifications.length) {
      setSelectedNotifications(new Set());
    } else {
      setSelectedNotifications(new Set(filteredNotifications.map(n => n.id)));
    }
  };

  const getUnreadCount = () => notifications.filter(n => !n.read).length;
  const getActionRequiredCount = () => notifications.filter(n => n.actionRequired).length;

  return (
    <>
      <Head>
        <title>Notification Center - Zion App</title>
        <meta name="description" content="Advanced notification management with intelligent filtering and real-time alerts" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🔔 Notification Center</h1>
              <p className="mt-2 text-gray-600">Manage and monitor all system notifications and alerts</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Unread:</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {getUnreadCount()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Action Required:</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                  {getActionRequiredCount()}
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {showFilters ? 'Hide' : 'Show'} Filters
                </button>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">View:</span>
                  <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value as any)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="action">Action Required</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="timestamp">Time</option>
                    <option value="priority">Priority</option>
                    <option value="type">Type</option>
                    <option value="category">Category</option>
                  </select>
                </div>

                <button
                  onClick={markAllAsRead}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Mark All Read
                </button>
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Type Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Notification Type</h4>
                    <div className="space-y-2">
                      {availableTypes.map(type => (
                        <label key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.type.includes(type)}
                            onChange={(e) => {
                              const newTypes = e.target.checked
                                ? [...filters.type, type]
                                : filters.type.filter(t => t !== type);
                              setFilters(prev => ({ ...prev, type: newTypes }));
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Priority Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Priority Level</h4>
                    <div className="space-y-2">
                      {availablePriorities.map(priority => (
                        <label key={priority} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.priority.includes(priority)}
                            onChange={(e) => {
                              const newPriorities = e.target.checked
                                ? [...filters.priority, priority]
                                : filters.priority.filter(p => p !== priority);
                              setFilters(prev => ({ ...prev, priority: newPriorities }));
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700 capitalize">{priority}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
                    <div className="space-y-2">
                      {availableCategories.map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.category.includes(category)}
                            onChange={(e) => {
                              const newCategories = e.target.checked
                                ? [...filters.category, category]
                                : filters.category.filter(c => c !== category);
                              setFilters(prev => ({ ...prev, category: newCategories }));
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Status Filters */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Status</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.read === false}
                          onChange={(e) => setFilters(prev => ({ ...prev, read: e.target.checked ? false : null }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Unread only</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.actionRequired === true}
                          onChange={(e) => setFilters(prev => ({ ...prev, actionRequired: e.target.checked ? true : null }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Action required</span>
                      </label>
                    </div>
                  </div>

                  {/* Date Range */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Date Range</h4>
                    <select
                      value={filters.dateRange}
                      onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value }))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    >
                      <option value="all">All Time</option>
                      <option value="hour">Last Hour</option>
                      <option value="day">Last 24 Hours</option>
                      <option value="week">Last Week</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Notifications List */}
          <div className="bg-white rounded-lg shadow">
            {/* List Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedNotifications.size === filteredNotifications.length && filteredNotifications.length > 0}
                      onChange={toggleSelectAll}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Select All</span>
                  </label>
                  
                  {selectedNotifications.size > 0 && (
                    <span className="text-sm text-gray-600">
                      {selectedNotifications.size} selected
                    </span>
                  )}
                </div>

                {selectedNotifications.size > 0 && (
                  <button
                    onClick={deleteSelected}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete Selected
                  </button>
                )}
              </div>
            </div>

            {/* Notifications */}
            <div className="divide-y divide-gray-200">
              {sortedNotifications.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <div className="text-6xl mb-4">🔔</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No notifications found</h3>
                  <p className="text-gray-600">Try adjusting your filters or check back later for new notifications.</p>
                </div>
              ) : (
                sortedNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-6 py-4 hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Selection Checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedNotifications.has(notification.id)}
                        onChange={() => toggleSelection(notification.id)}
                        className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />

                      {/* Notification Icon */}
                      <div className={`p-2 rounded-full ${getTypeColor(notification.type)}`}>
                        <span className="text-lg">{getTypeIcon(notification.type)}</span>
                      </div>

                      {/* Notification Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className={`text-sm font-medium ${
                                !notification.read ? 'text-gray-900' : 'text-gray-700'
                              }`}>
                                {notification.title}
                              </h3>
                              
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(notification.priority)}`}>
                                {notification.priority}
                              </span>
                              
                              {notification.actionRequired && (
                                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                                  Action Required
                                </span>
                              )}
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>Source: {notification.source}</span>
                              <span>Category: {notification.category}</span>
                              <span>{formatTimestamp(notification.timestamp)}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center space-x-2 ml-4">
                            {!notification.read && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
                              >
                                Mark Read
                              </button>
                            )}
                            
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </div>

                        {/* Metadata */}
                        {notification.metadata && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-600 mb-2">Additional Information:</div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {Object.entries(notification.metadata).map(([key, value]) => (
                                <div key={key} className="text-xs">
                                  <span className="font-medium text-gray-700">{key}:</span>
                                  <span className="ml-1 text-gray-600">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCenter;
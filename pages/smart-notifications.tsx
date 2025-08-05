import: type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';;
import { useState, useEffect, useMemo }  from 'react';;
import Link  from 'next/link';;

interface SmartNotification {
  id: string;
  type: 'message' | 'project' | 'payment' | 'system' | 'recommendation' | 'alert' | 'reminder' | 'update';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  title: string;
  message: string;
  sender?: string;
  recipient: string;
  category: string;
  actionUrl?: string;
  actionText?: string;
  read: boolean;
  archived: boolean;
  createdAt: Date;
  expiresAt?: Date;
metadata: {;
    projectId?: string;
    serviceId?: string;
    paymentId?: string;
    userId?: string;
    amount?: number;,
    currency?: string;}
    status?: string;}
  };
smartFeatures: {;
    aiAnalyzed: boolean;
    personalized: boolean;,
    predictive: boolean;}
    automated: boolean;}
  };
}
interface: NotificationStats {;
  totalNotifications: number;
  unreadCount: number;
  urgentCount: number;
  todayCount: number;
  weeklyCount: number;
  monthlyCount: number;
  readRate: number;
  responseRate: number;,
}
interface: NotificationPreferences {;
  email: boolean;
  push: boolean;
  sms: boolean;
  inApp: boolean;
categories: {;
    messages: boolean;
    projects: boolean;
    payments: boolean;
    system: boolean;
    recommendations: boolean;
    alerts: boolean;,
    reminders: boolean;}
    updates: boolean;}
  };
priority: {;
    low: boolean;
    medium: boolean;,
    high: boolean;}
    urgent: boolean;}
  };
quietHours: {;
    enabled: boolean;,
    start: string;}
    end: string;}
  };
}

const SmartNotificationsPage: NextPage = () => {;,
  const [notifications, setNotifications] = useState<SmartNotification[]>([]);
  const [stats, setStats] = useState<NotificationStats | null>(null);
  const [preferences, setPreferences] = useState<NotificationPreferences>({
email: true,
    push: true,
    sms: false,
    inApp: true,
    categories: {,
      messages: true,
      projects: true,
      payments: true,
      system: true,
      recommendations: true,
      alerts: true,
      reminders: true,}
      updates: true}
    },
    priority: {,
      low: true,
      medium: true,
      high: true,}
      urgent: true}
    },
    quietHours: {,
      enabled: false,
      start: '22:00',};
      end: '08:00'};
    };
  });
  const: [selectedTab, setSelectedTab] = useState<'all' | 'unread' | 'urgent' | 'smart' | 'settings'>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'priority' | 'unread' | 'smart'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading smart notifications data
    setTimeout(() => {
      const mockNotifications: SmartNotification[] = [
        {,
id: '1',
          type: 'project',
          priority: 'high',
          title: 'Project: Milestone Completed',
          message: 'AI-Powered: E-commerce Platform has reached 65% completion. The AI recommendation system has been successfully integrated.',
          sender: 'Project: Manager',
          recipient: 'user-1',
          category: 'Project: Updates',
          actionUrl: '/project-management',
          actionText: 'View: Project',
          read: false,
          archived: false,
          createdAt: new: Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
          metadata: {,
            projectId: 'proj-1',}
            status: 'milestone-completed'}
          },
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,
            predictive: false,}
            automated: true}
          }
        },
        {
          id: '2',
          type: 'payment',
          priority: 'urgent',
          title: 'Payment: Received',
          message: 'Payment: of $2,500 has been received for AI Model Development service. Funds are now available in your account.',
          sender: 'Payment: System',
          recipient: 'user-1',
          category: 'Financial',
          actionUrl: '/payment-processing',
          actionText: 'View: Payment',
          read: false,
          archived: false,
          createdAt: new: Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          metadata: {,
            paymentId: 'pay-123',
            amount: 2500,
            currency: 'USD',}
            status: 'completed'}
          },
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,
            predictive: true,}
            automated: true}
          }
        },
        {
          id: '3',
          type: 'recommendation',
          priority: 'medium',
          title: 'Smart: Recommendation',
          message: 'Based: on your project history, we recommend Dr. Sarah Chen for your upcoming blockchain development project.',
          sender: 'AI: Assistant',
          recipient: 'user-1',
          category: 'Recommendations',
          actionUrl: '/talent-directory',
          actionText: 'View: Profile',
          read: true,
          archived: false,
          createdAt: new: Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
          metadata: {,
            userId: 'user-sarah-chen',}
            serviceId: 'blockchain-dev'}
          },
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,
            predictive: true,}
            automated: true}
          }
        },
        {
          id: '4',
          type: 'message',
          priority: 'medium',
          title: 'New: Message from Client',
          message: 'TechCorp: Inc. has sent you a new message regarding the e-commerce platform project requirements.',
          sender: 'TechCorp: Inc.',
          recipient: 'user-1',
          category: 'Communication',
          actionUrl: '/real-time-chat',
          actionText: 'Reply',
          read: false,
          archived: false,
          createdAt: new: Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
          metadata: {}
            projectId: 'proj-1'}
          },
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,
            predictive: false,}
            automated: false}
          }
        },
        {
          id: '5',
          type: 'alert',
          priority: 'high',
          title: 'System: Alert',
          message: 'Your: project deadline is approaching. Mobile Banking App project is due in 3 days.',
          sender: 'System',
          recipient: 'user-1',
          category: 'Alerts',
          actionUrl: '/project-management',
          actionText: 'View: Project',
          read: false,
          archived: false,
          createdAt: new: Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
          metadata: {,
            projectId: 'proj-2',}
            status: 'deadline-approaching'}
          },
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,
            predictive: true,}
            automated: true}
          }
        },
        {
          id: '6',
          type: 'reminder',
          priority: 'low',
          title: 'Weekly: Review Reminder',
          message: 'It\'s: time for your weekly project review. Review your progress and update project status.',
          sender: 'System',
          recipient: 'user-1',
          category: 'Reminders',
          actionUrl: '/analytics-dashboard',
          actionText: 'Review',
          read: true,
          archived: false,
          createdAt: new: Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
          metadata: {}
            status: 'weekly-review'}
          },
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,
            predictive: true,}
            automated: true}
          }
        },
        {
          id: '7',
          type: 'update',
          priority: 'medium',
          title: 'Service: Update',
          message: 'New: AI development services have been added to the marketplace. Explore the latest offerings.',
          sender: 'Marketplace',
          recipient: 'user-1',
          category: 'Updates',
          actionUrl: '/service-marketplace',
          actionText: 'Explore',
          read: true,
          archived: false,
          createdAt: new: Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
          metadata: {}
            serviceId: 'ai-dev-services'}
          },
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,
            predictive: false,}
            automated: true}
          }
        },
        {
          id: '8',
          type: 'system',
          priority: 'low',
          title: 'Profile: Update',
          message: 'Your: profile has been successfully updated with new skills and certifications.',
          sender: 'System',
          recipient: 'user-1',
          category: 'System',
          actionUrl: '/user-profiles',
          actionText: 'View: Profile',
          read: true,
          archived: false,
          createdAt: new: Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          metadata: {,
            userId: 'user-1',}
            status: 'profile-updated'}
          },
          smartFeatures: {,
            aiAnalyzed: false,
            personalized: true,
            predictive: false,}
            automated: true};
          };
        };
      ];

      const mockStats: NotificationStats: = {,
totalNotifications: 156,
        unreadCount: 23,
        urgentCount: 5,
        todayCount: 12,
        weeklyCount: 45,
        monthlyCount: 156,;
        readRate: 85.3,;
        responseRate: 78.2;,
      };

      setNotifications(mockNotifications);
      setStats(mockStats);
      setLoading(false);
    }, 1000);
  }, []);
const: filteredNotifications = useMemo(() => {
    let filtered = notifications.filter(notification => {)
      // Tab filter);
      if (selectedTab === 'unread' && notification.read) return false;
      if (selectedTab === 'urgent' && notification.priority !== 'urgent') return false;
      if (selectedTab === 'smart' && !notification.smartFeatures.aiAnalyzed) return false;
      
      // Type filter
      if (filterType !== 'all' && notification.type !== filterType) return false;
      
      // Priority filter
      if (filterPriority !== 'all' && notification.priority !== filterPriority) return false;
      
      // Search term filter
      if (searchTerm && !notification.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !notification.message.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });

    // Sort notifications
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1: };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'unread':
          if (a.read !== b.read) return a.read ? 1 : -1;
          return: new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'smart':
          const aScore = (a.smartFeatures.aiAnalyzed ? 1 : 0) + (a.smartFeatures.personalized ? 1 : 0) + (a.smartFeatures.predictive ? 1 : 0);
          const bScore = (b.smartFeatures.aiAnalyzed ? 1 : 0) + (b.smartFeatures.personalized ? 1 : 0) + (b.smartFeatures.predictive ? 1 : 0);
          return: bScore - aScore;
        case 'recent':
default: ;
          return: new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();,
      }
    });

    return filtered;
  }, [notifications, selectedTab, filterType, filterPriority, searchTerm, sortBy]);

  const markAsRead = (notificationId: string) => {
    setNotifications(prev: => 
      prev.map(notification => 
        notification.id === notificationId ,
          ? { ...notification, read: true: })
          : notification)
      );
    );
  };

  const archiveNotification = (notificationId: string) => {
    setNotifications(prev: => 
      prev.map(notification => 
        notification.id === notificationId ,
          ? { ...notification, archived: true: })
          : notification)
      );
    );
  };

  const getTypeIcon = (type: string) => {
    switch: (type) {;
      case 'message': return: '💬';
      case 'project': return: '📁';
      case 'payment': return: '💰';
      case 'system': return: '⚙️';
      case 'recommendation': return: '🤖';
      case 'alert': return: '⚠️';
      case 'reminder': return: '⏰';
      case 'update': return: '🔄';
      default: return: '📢';,
    }
  };

  const getPriorityColor = (priority: string) => {
    switch: (priority) {;
      case 'urgent': return: 'text-red-400 bg-red-500/20';
      case 'high': return: 'text-orange-400 bg-orange-500/20';
      case 'medium': return: 'text-yellow-400 bg-yellow-500/20';
      case 'low': return: 'text-green-400 bg-green-500/20';
      default: return: 'text-gray-400 bg-gray-500/20';,
    }
  };

  const getTypeColor = (type: string) => {
    switch: (type) {;
      case 'message': return: 'text-blue-400 bg-blue-500/20';
      case 'project': return: 'text-purple-400 bg-purple-500/20';
      case 'payment': return: 'text-green-400 bg-green-500/20';
      case 'system': return: 'text-gray-400 bg-gray-500/20';
      case 'recommendation': return: 'text-pink-400 bg-pink-500/20';
      case 'alert': return: 'text-red-400 bg-red-500/20';
      case 'reminder': return: 'text-yellow-400 bg-yellow-500/20';
      case 'update': return: 'text-cyan-400 bg-cyan-500/20';
      default: return: 'text-gray-400 bg-gray-500/20';,
    }
  };

  const formatTimeAgo = (date: Date) => {;
    const: now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';,
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length: 400%_400%] animate-holographic-shift  opacity-10"></div>
        </div>
      
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-12 w-12 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0: 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading Smart Notifications...</span>
          </div>
        </div>
      </div>;
    );,
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>Smart Notifications - Zion</title>
        <meta name="description" content="Intelligent notification system with AI-powered alerts, personalized recommendations, and automated notification management" />
        <meta name="keywords" content="smart notifications, AI alerts, personalized notifications, notification management, Zion" />
        <link rel="icon" href=" favicon.ico"  />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg px-8">
          <div: className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex  items-center space-x-8">
              <Link href="/project-management" className="text-gray-300 hover:text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="/service-categories" className="text-gray-300 hover:text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Categories
              </Link>
              <Link href="/quote-requests" className="text-gray-300 hover:text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Quotes
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">,
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md: text-5xl  font-bold text-white mb-4">
            Smart Notifications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
            Intelligent notification system with AI-powered alerts, personalized recommendations, 
            and automated notification management for enhanced user experience.
          </p>
        </div>

        {/* Stats Overview */}
        {stats && (
          <div className="grid grid-cols-1 md: grid-cols-4  gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center">,
              <div className="text-3xl font-bold text-white mb-2">{stats.totalNotifications}</div>
              <p className="text-blue-300 text-sm">Total Notifications</p>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.unreadCount}</div>
              <p className="text-red-300 text-sm">Unread</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.urgentCount}</div>
              <p className="text-orange-300 text-sm">Urgent</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.readRate}%</div>
              <p className="text-green-300 text-sm">Read Rate</p>
            </div>
          </div>
        )}

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'all', name: 'All', icon: '📢' },
              { id: 'unread', name: 'Unread', icon: '📬' },
              { id: 'urgent', name: 'Urgent', icon: '⚠️' },
              { id: 'smart', name: 'Smart', icon: '🤖' },
              { id: 'settings', name: 'Settings', icon: '⚙️' }
            ].map((tab) => (
              <button: key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover: text-white hover:bg-white/10',
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search: and Filters */}
        {selectedTab !== 'settings' && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 lg: grid-cols-4  gap-4">
              <div className="lg col-span-2">
                <input: type="text"
                  placeholder="Search notifications...",
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus: outline-none focus:border-purple-500  transition-colors"
                />
              </div>
              
              <div>
                <select,
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus: outline-none focus:border-purple-500  transition-colors"
                >
                  <option value="all">All Types</option>
                  <option value="message">Messages</option>
                  <option value="project">Projects</option>
                  <option value="payment">Payments</option>
                  <option value="system">System</option>
                  <option value="recommendation">Recommendations</option>
                  <option value="alert">Alerts</option>
                  <option value="reminder">Reminders</option>
                  <option value="update">Updates</option>
                </select>
              </div>
              
              <div>
                <select,
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus: outline-none focus:border-purple-500  transition-colors"
                >
                  <option value="recent">Sort by Recent</option>
                  <option value="priority">Sort by Priority</option>
                  <option value="unread">Sort by Unread</option>
                  <option value="smart">Sort by Smart</option>
                </select>
              </div>
            </div>
          </div>,
        )}

        {/* Notifications List */}
        {selectedTab !== 'settings' && (
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover: bg-gradient-to-br hover:from-white/10 hover:to-white/20: ${
                  !notification.read ? 'border-purple-500/30 bg-purple-500/5' : '',
                }`}
              >
                <div: className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="text-2xl">{getTypeIcon(notification.type)}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h3 className={`text-lg font-semibold ${!notification.read ? 'text-white' : 'text-gray-300'}`}>
                          {notification.title}
                        </h3>
                        {!notification.read: && (
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                          {notification.priority.toUpperCase()}
                        </span>
                        <span className={`px-4 py-3 rounded-full text-xs font-medium ${getTypeColor(notification.type)}`}>
                          {notification.type.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-3">{notification.message}</p>

                    {/* Smart Features */}
                    <div className="flex items-center space-x-4 mb-4">
                      {notification.smartFeatures.aiAnalyzed && (
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-4 py-3 rounded border border-blue-500/30">
                          AI Analyzed
                        </span>
                      )}
                      {notification.smartFeatures.personalized && (
                        <span className="text-xs bg-green-500/20 text-green-300 px-4 py-3 rounded border border-green-500/30">
                          Personalized
                        </span>
                      )}
                      {notification.smartFeatures.predictive && (
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-4 py-3 rounded border border-purple-500/30">
                          Predictive
                        </span>
                      )}
                      {notification.smartFeatures.automated && (
                        <span className="text-xs bg-orange-500/20 text-orange-300 px-4 py-3 rounded border border-orange-500/30">
                          Automated
                        </span>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        {notification.sender && (
                          <span>From: {notification.sender}</span>
                        )}
                        <span>{formatTimeAgo(notification.createdAt)}</span>
                      </div>
                      <div: className="flex items-center space-x-2">
                        {notification.actionUrl && notification.actionText && (
                          <Link 
                            href={notification.actionUrl}
                            className="text-purple-400 hover: text-purple-300  transition-colors"
                          >,
                            {notification.actionText}
                          </Link>
                        )}
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-gray-400 hover: text-white  transition-colors"
                        >
                          Mark as Read
                        </button>
                        <button,
                          onClick={() => archiveNotification(notification.id)}
                          className="text-gray-400 hover: text-white  transition-colors"
                        >
                          Archive
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>,
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {selectedTab === 'settings' && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Notification Preferences</h2>
            
            <div className="space-y-6">
              {/* Delivery Methods */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Delivery Methods</h3>
                <div className="grid grid-cols-1 md: grid-cols-2  gap-4">
                  {[,
                    { key: 'email', label: 'Email Notifications', description: 'Receive: notifications via email' },
                    { key: 'push', label: 'Push Notifications', description: 'Receive: push notifications on device' },
                    { key: 'sms', label: 'SMS Notifications', description: 'Receive: notifications via SMS' },
                    { key: 'inApp', label: 'In-App Notifications', description: 'Receive: notifications within the app' }
                  ].map((method) => (
                    <label key={method.key} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={preferences[method.key as keyof NotificationPreferences] as boolean}
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,)
                          [method.key]: e.target.checked)
                        }))}
                        className="rounded border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500"
                      />
                      <div>,
                        <p: className="text-white font-medium">{method.label}</p>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Notification Categories</h3>
                <div className="grid grid-cols-1 md: grid-cols-2  gap-4">,
                  {Object.entries(preferences.categories).map(([category, enabled]) => (
                    <label key={category} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,
categories: {,
                            ...prev.categories,}
                            [category]: e.target.checked})
                          })
                        }))}
                        className="rounded border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500"
                      />,
                      <span: className="text-white capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Priority Levels */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Priority Levels</h3>
                <div className="grid grid-cols-1 md: grid-cols-2  gap-4">,
                  {Object.entries(preferences.priority).map(([priority, enabled]) => (
                    <label key={priority} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,
                          priority: {,
                            ...prev.priority,}
                            [priority]: e.target.checked})
                          })
                        }))}
                        className="rounded border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500"
                      />,
                      <span: className="text-white capitalize">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quiet Hours */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quiet Hours</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={preferences.quietHours.enabled}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        quietHours: {,
                          ...prev.quietHours,}
                          enabled: e.target.checked})
                        })
                      }))}
                      className="rounded border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500"
                    />
                    <span: className="text-white">Enable Quiet Hours</span>
                  </label>
                  
                  {preferences.quietHours.enabled && (
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Start Time</label>
                        <input
                          type="time",
                          value={preferences.quietHours.start}
                          onChange={(e) => setPreferences(prev => ({
                            ...prev,
                            quietHours: {,
                              ...prev.quietHours,}
                              start: e.target.value})
                            })
                          }))}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus: outline-none focus:border-purple-500  transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">End Time</label>
                        <input
                          type="time",
                          value={preferences.quietHours.end}
                          onChange={(e) => setPreferences(prev => ({
                            ...prev,
                            quietHours: {,
                              ...prev.quietHours,}
                              end: e.target.value})
                            })
                          }))}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus: outline-none focus:border-purple-500  transition-colors"
                        />
                      </div>
                    </div>,
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Connected with Smart Notifications
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get intelligent alerts, personalized recommendations, and automated notifications 
              to enhance your marketplace experience and stay updated on important activities.
            </p>
            <div className="flex flex-col sm: flex-row  gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover scale-105">
                Configure: Notifications
              </button>
              <Link href="/project-management" className="border border-white/20 text-white hover:bg-white/10  px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>
),
};
;
export default SmartNotificationsPage;
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface SupportTicket {
  id: string;
  title: string;
  description: string;
  category: 'technical' | 'billing' | 'account' | 'service' | 'general' | 'bug' | 'feature-request';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed' | 'escalated';
  customer: {
    id: string;
    name: string;
    email: string;
    plan: string;
    joinDate: Date;
  };
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  aiAssisted: boolean;
  satisfactionScore?: number;
  tags: string[];
  messages: {
    id: string;
    sender: 'customer' | 'agent' | 'ai';
    content: string;
    timestamp: Date;
    aiGenerated: boolean;
  }[];
}

interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  tags: string[];
  views: number;
  helpful: number;
  notHelpful: number;
  lastUpdated: Date;
  aiGenerated: boolean;
  status: 'published' | 'draft' | 'archived';
}

interface SupportAgent {
  id: string;
  name: string;
  email: string;
  role: 'agent' | 'senior-agent' | 'supervisor' | 'manager';
  status: 'online' | 'offline' | 'busy' | 'away';
  activeTickets: number;
  resolvedToday: number;
  avgResponseTime: number;
  satisfactionScore: number;
  aiEnabled: boolean;
  specializations: string[];
}

interface SupportAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;
  improvement: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

const AIPoweredCustomerSupportPage: NextPage = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [articles, setArticles] = useState<KnowledgeArticle[]>([]);
  const [agents, setAgents] = useState<SupportAgent[]>([]);
  const [analytics, setAnalytics] = useState<SupportAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'tickets' | 'knowledge' | 'agents' | 'analytics'>('overview');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'priority' | 'satisfaction' | 'response-time'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered customer support data
    setTimeout(() => {
      const mockTickets: SupportTicket[] = [
        {
          id: '1',
          title: 'Payment Processing Issue',
          description: 'Unable to complete payment transaction. Getting error message.',
          category: 'billing',
          priority: 'high',
          status: 'in-progress',
          customer: {
            id: 'cust-001',
            name: 'Sarah Johnson',
            email: 'sarah.johnson@email.com',
            plan: 'Premium',
            joinDate: new Date('2024-01-15')
          },
          assignedTo: 'agent-001',
          createdAt: new Date('2024-01-20T14:30:00'),
          updatedAt: new Date('2024-01-20T15:45:00'),
          aiAssisted: true,
          satisfactionScore: 4,
          tags: ['payment', 'error', 'transaction'],
          messages: [
            {
              id: 'msg-1',
              sender: 'customer',
              content: 'I\'m trying to make a payment but getting an error message.',
              timestamp: new Date('2024-01-20T14:30:00'),
              aiGenerated: false
            },
            {
              id: 'msg-2',
              sender: 'ai',
              content: 'I can help you with this payment issue. Let me check your transaction details.',
              timestamp: new Date('2024-01-20T14:32:00'),
              aiGenerated: true
            },
            {
              id: 'msg-3',
              sender: 'agent',
              content: 'I can see the issue. Let me resolve this for you.',
              timestamp: new Date('2024-01-20T15:45:00'),
              aiGenerated: false
            }
          ]
        },
        {
          id: '2',
          title: 'Account Login Problem',
          description: 'Cannot log into my account. Password reset not working.',
          category: 'account',
          priority: 'urgent',
          status: 'open',
          customer: {
            id: 'cust-002',
            name: 'Mike Chen',
            email: 'mike.chen@email.com',
            plan: 'Basic',
            joinDate: new Date('2024-01-10')
          },
          assignedTo: undefined,
          createdAt: new Date('2024-01-20T16:15:00'),
          updatedAt: new Date('2024-01-20T16:15:00'),
          aiAssisted: true,
          satisfactionScore: undefined,
          tags: ['login', 'password', 'account'],
          messages: [
            {
              id: 'msg-4',
              sender: 'customer',
              content: 'I cannot log into my account. Password reset is not working.',
              timestamp: new Date('2024-01-20T16:15:00'),
              aiGenerated: false
            },
            {
              id: 'msg-5',
              sender: 'ai',
              content: 'I understand your login issue. Let me help you reset your password securely.',
              timestamp: new Date('2024-01-20T16:17:00'),
              aiGenerated: true
            }
          ]
        },
        {
          id: '3',
          title: 'Feature Request: Dark Mode',
          description: 'Would like to request dark mode feature for better user experience.',
          category: 'feature-request',
          priority: 'low',
          status: 'open',
          customer: {
            id: 'cust-003',
            name: 'Alex Rodriguez',
            email: 'alex.rodriguez@email.com',
            plan: 'Premium',
            joinDate: new Date('2024-01-05')
          },
          assignedTo: undefined,
          createdAt: new Date('2024-01-20T13:20:00'),
          updatedAt: new Date('2024-01-20T13:20:00'),
          aiAssisted: true,
          satisfactionScore: undefined,
          tags: ['feature-request', 'dark-mode', 'ui'],
          messages: [
            {
              id: 'msg-6',
              sender: 'customer',
              content: 'I would like to request a dark mode feature for better user experience.',
              timestamp: new Date('2024-01-20T13:20:00'),
              aiGenerated: false
            },
            {
              id: 'msg-7',
              sender: 'ai',
              content: 'Thank you for your feature request! I\'ve logged this for our development team.',
              timestamp: new Date('2024-01-20T13:22:00'),
              aiGenerated: true
            }
          ]
        },
        {
          id: '4',
          title: 'Service Integration Issue',
          description: 'Having trouble integrating third-party service with our platform.',
          category: 'technical',
          priority: 'medium',
          status: 'resolved',
          customer: {
            id: 'cust-004',
            name: 'Emily Davis',
            email: 'emily.davis@email.com',
            plan: 'Enterprise',
            joinDate: new Date('2024-01-12')
          },
          assignedTo: 'agent-002',
          createdAt: new Date('2024-01-20T10:30:00'),
          updatedAt: new Date('2024-01-20T12:15:00'),
          resolvedAt: new Date('2024-01-20T12:15:00'),
          aiAssisted: true,
          satisfactionScore: 5,
          tags: ['integration', 'api', 'technical'],
          messages: [
            {
              id: 'msg-8',
              sender: 'customer',
              content: 'I\'m having trouble integrating a third-party service.',
              timestamp: new Date('2024-01-20T10:30:00'),
              aiGenerated: false
            },
            {
              id: 'msg-9',
              sender: 'ai',
              content: 'I can help you with the integration. Let me check your API configuration.',
              timestamp: new Date('2024-01-20T10:32:00'),
              aiGenerated: true
            },
            {
              id: 'msg-10',
              sender: 'agent',
              content: 'I\'ve resolved the integration issue. Your service should work now.',
              timestamp: new Date('2024-01-20T12:15:00'),
              aiGenerated: false
            }
          ]
        },
        {
          id: '5',
          title: 'Billing Question',
          description: 'Need clarification on recent billing charges.',
          category: 'billing',
          priority: 'medium',
          status: 'closed',
          customer: {
            id: 'cust-005',
            name: 'David Wilson',
            email: 'david.wilson@email.com',
            plan: 'Basic',
            joinDate: new Date('2024-01-08')
          },
          assignedTo: 'agent-001',
          createdAt: new Date('2024-01-20T09:00:00'),
          updatedAt: new Date('2024-01-20T11:30:00'),
          resolvedAt: new Date('2024-01-20T11:30:00'),
          aiAssisted: true,
          satisfactionScore: 4,
          tags: ['billing', 'charges', 'clarification'],
          messages: [
            {
              id: 'msg-11',
              sender: 'customer',
              content: 'I need clarification on my recent billing charges.',
              timestamp: new Date('2024-01-20T09:00:00'),
              aiGenerated: false
            },
            {
              id: 'msg-12',
              sender: 'ai',
              content: 'I can help you understand your billing. Let me pull up your account details.',
              timestamp: new Date('2024-01-20T09:02:00'),
              aiGenerated: true
            },
            {
              id: 'msg-13',
              sender: 'agent',
              content: 'I\'ve explained your billing charges. Is there anything else you need?',
              timestamp: new Date('2024-01-20T11:30:00'),
              aiGenerated: false
            }
          ]
        }
      ];

      const mockArticles: KnowledgeArticle[] = [
        {
          id: '1',
          title: 'How to Reset Your Password',
          category: 'Account Management',
          content: 'Step-by-step guide to reset your password securely...',
          tags: ['password', 'security', 'account'],
          views: 1250,
          helpful: 89,
          notHelpful: 5,
          lastUpdated: new Date('2024-01-18'),
          aiGenerated: true,
          status: 'published'
        },
        {
          id: '2',
          title: 'Payment Processing Guide',
          category: 'Billing',
          content: 'Complete guide to payment processing and troubleshooting...',
          tags: ['payment', 'billing', 'transactions'],
          views: 890,
          helpful: 67,
          notHelpful: 3,
          lastUpdated: new Date('2024-01-17'),
          aiGenerated: true,
          status: 'published'
        },
        {
          id: '3',
          title: 'API Integration Tutorial',
          category: 'Technical',
          content: 'Comprehensive tutorial for integrating third-party services...',
          tags: ['api', 'integration', 'technical'],
          views: 567,
          helpful: 45,
          notHelpful: 2,
          lastUpdated: new Date('2024-01-16'),
          aiGenerated: true,
          status: 'published'
        },
        {
          id: '4',
          title: 'Service Marketplace Overview',
          category: 'Getting Started',
          content: 'Complete overview of our service marketplace features...',
          tags: ['marketplace', 'services', 'overview'],
          views: 2340,
          helpful: 156,
          notHelpful: 8,
          lastUpdated: new Date('2024-01-15'),
          aiGenerated: true,
          status: 'published'
        },
        {
          id: '5',
          title: 'Troubleshooting Common Issues',
          category: 'Technical',
          content: 'Guide to resolving common technical issues...',
          tags: ['troubleshooting', 'technical', 'issues'],
          views: 1780,
          helpful: 123,
          notHelpful: 12,
          lastUpdated: new Date('2024-01-14'),
          aiGenerated: true,
          status: 'published'
        }
      ];

      const mockAgents: SupportAgent[] = [
        {
          id: 'agent-001',
          name: 'Jennifer Smith',
          email: 'jennifer.smith@zion.com',
          role: 'senior-agent',
          status: 'online',
          activeTickets: 3,
          resolvedToday: 8,
          avgResponseTime: 2.5,
          satisfactionScore: 4.8,
          aiEnabled: true,
          specializations: ['billing', 'account-management', 'technical']
        },
        {
          id: 'agent-002',
          name: 'Robert Johnson',
          email: 'robert.johnson@zion.com',
          role: 'agent',
          status: 'busy',
          activeTickets: 5,
          resolvedToday: 6,
          avgResponseTime: 3.2,
          satisfactionScore: 4.6,
          aiEnabled: true,
          specializations: ['technical', 'integration', 'api']
        },
        {
          id: 'agent-003',
          name: 'Maria Garcia',
          email: 'maria.garcia@zion.com',
          role: 'supervisor',
          status: 'online',
          activeTickets: 2,
          resolvedToday: 12,
          avgResponseTime: 1.8,
          satisfactionScore: 4.9,
          aiEnabled: true,
          specializations: ['escalation', 'complex-issues', 'management']
        },
        {
          id: 'agent-004',
          name: 'James Wilson',
          email: 'james.wilson@zion.com',
          role: 'agent',
          status: 'away',
          activeTickets: 0,
          resolvedToday: 4,
          avgResponseTime: 4.1,
          satisfactionScore: 4.4,
          aiEnabled: true,
          specializations: ['general-support', 'feature-requests']
        }
      ];

      const mockAnalytics: SupportAnalytics[] = [
        {
          id: '1',
          metric: 'Response Time',
          current: 2.8,
          target: 2.0,
          improvement: -40.0,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '2',
          metric: 'Customer Satisfaction',
          current: 4.6,
          target: 4.8,
          improvement: -4.2,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '3',
          metric: 'Resolution Rate',
          current: 92.5,
          target: 95.0,
          improvement: -2.6,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '4',
          metric: 'AI Assistance Rate',
          current: 78.3,
          target: 85.0,
          improvement: -7.9,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '5',
          metric: 'First Contact Resolution',
          current: 68.7,
          target: 75.0,
          improvement: -8.4,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '6',
          metric: 'Ticket Volume',
          current: 245,
          target: 200,
          improvement: -22.5,
          trend: 'down',
          period: 'This Month'
        }
      ];

      setTickets(mockTickets);
      setArticles(mockArticles);
      setAgents(mockAgents);
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredTickets = useMemo(() => {
    let filtered = tickets.filter(ticket => {
      // Category filter
      if (filterCategory !== 'all' && ticket.category !== filterCategory) return false;
      
      // Status filter
      if (filterStatus !== 'all' && ticket.status !== filterStatus) return false;
      
      // Search term filter
      if (searchTerm && !ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !ticket.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });

    // Sort tickets
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { 'urgent': 4, 'high': 3, 'medium': 2, 'low': 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'satisfaction':
          return (b.satisfactionScore || 0) - (a.satisfactionScore || 0);
        case 'response-time':
          return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
        case 'recent':
        default:
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

    return filtered;
  }, [tickets, filterCategory, filterStatus, searchTerm, sortBy]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-red-400 bg-red-500/20';
      case 'in-progress': return 'text-blue-400 bg-blue-500/20';
      case 'resolved': return 'text-green-400 bg-green-500/20';
      case 'closed': return 'text-gray-400 bg-gray-500/20';
      case 'escalated': return 'text-orange-400 bg-orange-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical': return '🔧';
      case 'billing': return '💰';
      case 'account': return '👤';
      case 'service': return '🛠️';
      case 'general': return '❓';
      case 'bug': return '🐛';
      case 'feature-request': return '💡';
      default: return '📋';
    }
  };

  const getAgentStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-400 bg-green-500/20';
      case 'busy': return 'text-orange-400 bg-orange-500/20';
      case 'away': return 'text-yellow-400 bg-yellow-500/20';
      case 'offline': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading AI-Powered Customer Support...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Customer Support - Zion</title>
        <meta name="description" content="Intelligent customer service, ticket management, knowledge base, and AI-driven support analytics" />
        <meta name="keywords" content="AI customer support, ticket management, knowledge base, support analytics, Zion" />
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
              <Link href="/ai-powered-testing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testing
              </Link>
              <Link href="/ai-powered-security" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Security
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
            AI-Powered Customer Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent customer service, ticket management, knowledge base, 
            and AI-driven support analytics with automated customer assistance.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'tickets', name: 'Tickets', icon: '🎫' },
              { id: 'knowledge', name: 'Knowledge Base', icon: '📚' },
              { id: 'agents', name: 'Agents', icon: '👥' },
              { id: 'analytics', name: 'Analytics', icon: '📈' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedView === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Overview */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {analytics.map((metric) => (
              <div key={metric.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                  <span className="text-2xl">{getTrendIcon(metric.trend)}</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-2">{metric.current}</div>
                  <p className="text-sm text-gray-400">Target: {metric.target}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className={`${metric.improvement > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.improvement > 0 ? '+' : ''}{metric.improvement.toFixed(1)}%
                  </span>
                  <span className="text-gray-400">{metric.period}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search and Filters */}
        {selectedView === 'tickets' && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              
              <div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="all">All Categories</option>
                  <option value="technical">Technical</option>
                  <option value="billing">Billing</option>
                  <option value="account">Account</option>
                  <option value="service">Service</option>
                  <option value="general">General</option>
                  <option value="bug">Bug</option>
                  <option value="feature-request">Feature Request</option>
                </select>
              </div>
              
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="recent">Sort by Recent</option>
                  <option value="priority">Sort by Priority</option>
                  <option value="satisfaction">Sort by Satisfaction</option>
                  <option value="response-time">Sort by Response Time</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Support Tickets */}
        {selectedView === 'tickets' && (
          <div className="space-y-6">
            {filteredTickets.map((ticket) => (
              <div key={ticket.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{getCategoryIcon(ticket.category)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{ticket.title}</h3>
                      <p className="text-gray-300 text-sm">by {ticket.customer.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(ticket.priority)} bg-opacity-20`}>
                        {ticket.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-300 mb-2">{ticket.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {ticket.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Customer</p>
                    <p className="text-lg font-semibold text-white">{ticket.customer.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Plan</p>
                    <p className="text-lg font-semibold text-blue-400">{ticket.customer.plan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Messages</p>
                    <p className="text-lg font-semibold text-green-400">{ticket.messages.length}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Satisfaction</p>
                    <p className="text-lg font-semibold text-orange-400">
                      {ticket.satisfactionScore ? `${ticket.satisfactionScore}/5` : 'N/A'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">AI Assisted:</span>
                    <span className={ticket.aiAssisted ? 'text-green-400' : 'text-red-400'}>
                      {ticket.aiAssisted ? '✅ Yes' : '❌ No'}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    Updated: {ticket.updatedAt.toLocaleString()}
                  </span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Details
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Knowledge Base */}
        {selectedView === 'knowledge' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">📚</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(article.status)}`}>
                    {article.status.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{article.category}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-400">Views</p>
                    <p className="text-white font-semibold">{article.views}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Helpful</p>
                    <p className="text-green-400 font-semibold">{article.helpful}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Not Helpful</p>
                    <p className="text-red-400 font-semibold">{article.notHelpful}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>AI Generated: {article.aiGenerated ? '✅' : '❌'}</span>
                  <span>Updated: {article.lastUpdated.toLocaleDateString()}</span>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Article
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Edit Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Agents */}
        {selectedView === 'agents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{agent.name}</h3>
                    <p className="text-gray-300 text-sm">{agent.email}</p>
                    <p className="text-gray-400 text-sm capitalize">{agent.role.replace('-', ' ')}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAgentStatusColor(agent.status)}`}>
                      {agent.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${agent.aiEnabled ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {agent.aiEnabled ? 'AI ENABLED' : 'AI DISABLED'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Active Tickets</p>
                    <p className="text-lg font-semibold text-white">{agent.activeTickets}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Resolved Today</p>
                    <p className="text-lg font-semibold text-green-400">{agent.resolvedToday}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Avg Response</p>
                    <p className="text-lg font-semibold text-blue-400">{agent.avgResponseTime}h</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Satisfaction</p>
                    <p className="text-lg font-semibold text-orange-400">{agent.satisfactionScore}/5</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Specializations:</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.specializations.map((spec, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Profile
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Assign Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Support with AI Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage intelligent customer support to provide exceptional service with AI-driven 
              ticket management, knowledge base, and automated customer assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Create Ticket
              </button>
              <Link href="/service-marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredCustomerSupportPage 
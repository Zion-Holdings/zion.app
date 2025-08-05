import type { NextPage }  from 'next';;import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';;
import { useState, useEffect }  from 'react';;
import Link  from 'next/link';;
import { motion, AnimatePresence }  from 'framer-motion';;

interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed' | 'pending';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'technical' | 'billing' | 'account' | 'feature-request' | 'bug-report' | 'general';
  customer: {
    id: string;
    name: string;
    email: string;
    plan: string;
  };
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  tags: string[];
  attachments: number;
  responses: TicketResponse[];
}

interface TicketResponse {
  id: string;
  author: {
    id: string;
    name: string;
    type: 'customer' | 'support-agent' | 'admin';
  };
  content: string;
  createdAt: Date;
  isInternal: boolean;
}

interface SupportAgent {
  id: string;
  name: string;
  email: string;
  role: 'agent' | 'senior-agent' | 'supervisor' | 'manager';
  status: 'online' | 'offline' | 'busy' | 'away';
  activeTickets: number;
  avgResponseTime: number;
  satisfactionScore: number;
  specialties: string[];
}

interface SupportCategory {
  id: string;
  name: string;
  description: string;
  ticketCount: number;
  avgResolutionTime: number;
  satisfactionScore: number;
}

const HelpDeskSupport: NextPage = () => {
  const [activeTab, setActiveTab] = useState<'tickets' | 'agents' | 'analytics' | 'categories'>('tickets')
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterPriority, setFilterPriority] = useState<string>('all')
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [agents, setAgents] = useState<SupportAgent[]>([])
  const [categories, setCategories] = useState<SupportCategory[]>([])

  useEffect(() => {
    const mockTickets: SupportTicket[] = [
      {
        id: '1',
        title: 'Payment Processing Issue',
        description: 'Unable to complete payment transaction. Getting error code 500.',
        status: 'in-progress',
        priority: 'high',
        category: 'billing',
        customer: {
          id: '1',
          name: 'John Smith',
          email: 'john@example.com',
          plan: 'premium'
        },
        assignedTo: 'agent-1',
        createdAt: new Date(Date.now() - 3600000),
        updatedAt: new Date(Date.now() - 1800000),
        tags: ['payment', 'error-500'],
        attachments: 2,
        responses: [
          {
            id: '1',
            author: {
              id: '1',
              name: 'John Smith',
              type: 'customer'
            },
            content: 'I\'m still experiencing the payment issue. Can you help?',
            createdAt: new Date(Date.now() - 3600000),
            isInternal: false
          },
          {
            id: '2',
            author: {
              id: 'agent-1',
              name: 'Sarah Johnson',
              type: 'support-agent'
            },
            content: 'I\'m investigating this issue. Please check your payment method.',
            createdAt: new Date(Date.now() - 1800000),
            isInternal: false
          }
        ]
      },
      {
        id: '2',
        title: 'Feature Request: Dark Mode',
        description: 'Would like to request dark mode theme for the mobile app.',
        status: 'open',
        priority: 'medium',
        category: 'feature-request',
        customer: {
          id: '2',
          name: 'Alice Brown',
          email: 'alice@example.com',
          plan: 'basic'
        },
        createdAt: new Date(Date.now() - 7200000),
        updatedAt: new Date(Date.now() - 7200000),
        tags: ['feature-request', 'dark-mode', 'mobile'],
        attachments: 0,
        responses: [
          {
            id: '3',
            author: {
              id: '2',
              name: 'Alice Brown',
              type: 'customer'
            },
            content: 'This would greatly improve the user experience.',
            createdAt: new Date(Date.now() - 7200000),
            isInternal: false
          }
        ]
      }
    ]

    const mockAgents: SupportAgent[] = [
      {
        id: 'agent-1',
        name: 'Sarah Johnson',
        email: 'sarah@ziontech.com',
        role: 'senior-agent',
        status: 'online',
        activeTickets: 3,
        avgResponseTime: 2.5,
        satisfactionScore: 4.8,
        specialties: ['billing', 'technical', 'account']
      },
      {
        id: 'agent-2',
        name: 'Mike Chen',
        email: 'mike@ziontech.com',
        role: 'agent',
        status: 'busy',
        activeTickets: 5,
        avgResponseTime: 4.2,
        satisfactionScore: 4.5,
        specialties: ['technical', 'bug-report']
      }
    ]

    const mockCategories: SupportCategory[] = [
      {
        id: '1',
        name: 'Technical Support',
        description: 'Technical issues and troubleshooting',
        ticketCount: 45,
        avgResolutionTime: 3.2,
        satisfactionScore: 4.6
      },
      {
        id: '2',
        name: 'Billing & Payments',
        description: 'Payment processing and billing inquiries',
        ticketCount: 23,
        avgResolutionTime: 2.1,
        satisfactionScore: 4.8
      }
    ]

    setTickets(mockTickets)
    setAgents(mockAgents)
    setCategories(mockCategories)
    setLoading(false)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'resolved':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'closed':
        return 'bg-gray-500/20 text-high-contrast-tertiary border-gray-500/30'
      case 'pending':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      default:
        return 'bg-gray-500/20 text-high-contrast-tertiary border-gray-500/30'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'high':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority
    const matchesCategory = filterCategory === 'all' || ticket.category === filterCategory
    return matchesSearch && matchesStatus && matchesPriority && matchesCategory
  })

  if (loading) {
    return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>Help Desk & Support Ticket System - Zion Tech Group</title>
        <meta name="description" content="Comprehensive help desk and support ticket system for customer support management" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                Zion Tech Group
              </Link>
            </div>
            <nav className="hidden md flex space-x-8">
              <Link href="/" className="text-gray-300 hover text-white transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover text-white transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Help Desk & Support Ticket System
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl">
            Comprehensive customer support management with ticket tracking, priority management, 
            and support team coordination. Manage customer inquiries efficiently and provide excellent service.
          </p>
        </div>

        <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-high-contrast-tertiary text-sm">Total Tickets</p>
                <p className="text-2xl font-bold text-white">{tickets.length}</p>
              </div>
              <div className="text-3xl">🎫</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Open Tickets</p>
                <p className="text-2xl font-bold text-white">{tickets.filter(t => t.status === 'open').length}</p>
              </div>
              <div className="text-3xl">🔓</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Support Agents</p>
                <p className="text-2xl font-bold text-white">{agents.length}</p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg Response Time</p>
                <p className="text-2xl font-bold text-white">2.8h</p>
              </div>
              <div className="text-3xl">⏱️</div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'tickets', name: 'Support Tickets', icon: '🎫' },
            { id: 'agents', name: 'Support Agents', icon: '👥' },
            { id: 'analytics', name: 'Analytics', icon: '📊' },
            { id: 'categories', name: 'Categories', icon: '📂' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-4 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'tickets' && (
            <motion.div
              key="tickets"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-4 items-center">
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus ring-white/20"
                />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus ring-white/20"
                >
                  <option value="all">All Status</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </select>
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                  className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus ring-white/20"
                >
                  <option value="all">All Priorities</option>
                  <option value="urgent">Urgent</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus ring-white/20"
                >
                  <option value="all">All Categories</option>
                  <option value="technical">Technical</option>
                  <option value="billing">Billing</option>
                  <option value="account">Account</option>
                  <option value="feature-request">Feature Request</option>
                  <option value="bug-report">Bug Report</option>
                </select>
              </div>

              <div className="space-y-4">
                {filteredTickets.map((ticket) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{ticket.title}</h3>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                            {ticket.status}
                          </span>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{ticket.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>Customer: {ticket.customer.name}</span>
                          <span>Plan: {ticket.customer.plan}</span>
                          <span>Created: {ticket.createdAt.toLocaleString()}</span>
                          {ticket.assignedTo && <span>Assigned: {ticket.assignedTo}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                          {ticket.tags.map((tag) => (
                            <span key={tag} className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {ticket.attachments > 0 && (
                          <span className="text-gray-400 text-sm">📎 {ticket.attachments} attachments</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">{ticket.responses.length} responses</span>
                        <button className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white hover bg-white/20 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'agents' && (
            <motion.div
              key="agents"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
                {agents.map((agent) => (
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                        <p className="text-gray-400 text-sm">{agent.email}</p>
                      </div>
                      <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                        agent.status === 'online' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        agent.status === 'busy' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        'bg-gray-500/20 text-gray-400 border-gray-500/30'
                      }`}>
                        {agent.status}
                      </span>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Role:</span>
                        <span className="text-white capitalize">{agent.role}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Active Tickets:</span>
                        <span className="text-white">{agent.activeTickets}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Response:</span>
                        <span className="text-white">{agent.avgResponseTime}h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Satisfaction:</span>
                        <span className="text-white">{agent.satisfactionScore}/5.0</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty) => (
                          <span key={specialty} className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Ticket Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Tickets:</span>
                      <span className="text-white font-medium">{tickets.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Open Tickets:</span>
                      <span className="text-white font-medium">{tickets.filter(t => t.status === 'open').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">In Progress:</span>
                      <span className="text-white font-medium">{tickets.filter(t => t.status === 'in-progress').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Resolved:</span>
                      <span className="text-white font-medium">{tickets.filter(t => t.status === 'resolved').length}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Avg Response Time:</span>
                      <span className="text-white font-medium">2.8 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Avg Resolution Time:</span>
                      <span className="text-white font-medium">4.2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Customer Satisfaction:</span>
                      <span className="text-white font-medium">4.6/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">First Response SLA:</span>
                      <span className="text-white font-medium">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'categories' && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Ticket Count:</span>
                        <span className="text-white">{category.ticketCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Resolution:</span>
                        <span className="text-white">{category.avgResolutionTime}h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Satisfaction:</span>
                        <span className="text-white">{category.satisfactionScore}/5.0</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default HelpDeskSupport 
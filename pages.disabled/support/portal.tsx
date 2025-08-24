import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Ticket, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Star, 
  ArrowRight,
  ExternalLink,
  FileText,
  Code,
  Shield,
  Brain,
  Cloud,
  Rocket,
  Users,
  BarChart3,
  Download
} from 'lucide-react';

const SupportPortalPage: React.FC = () => {
  const supportTickets = [
    {
      id: 'TKT-2024-001',
      title: 'API Authentication Issue',
      status: 'Open',
      priority: 'High',
      category: 'Technical',
      createdAt: '2024-01-15',
      lastUpdated: '2024-01-16',
      assignedTo: 'Tech Support Team',
      description: 'Unable to authenticate with the REST API using the provided credentials.'
    },
    {
      id: 'TKT-2024-002',
      title: 'Billing Question',
      status: 'In Progress',
      priority: 'Medium',
      category: 'Billing',
      createdAt: '2024-01-14',
      lastUpdated: '2024-01-15',
      assignedTo: 'Billing Team',
      description: 'Need clarification on the new pricing structure and billing cycle.'
    },
    {
      id: 'TKT-2024-003',
      title: 'Feature Request: AI Model Export',
      status: 'Under Review',
      priority: 'Low',
      category: 'Feature Request',
      createdAt: '2024-01-13',
      lastUpdated: '2024-01-14',
      assignedTo: 'Product Team',
      description: 'Requesting ability to export trained AI models in multiple formats.'
    }
  ];

  const ticketStatuses = [
    { status: 'Open', count: 5, color: 'from-red-500 to-orange-500' },
    { status: 'In Progress', count: 3, color: 'from-yellow-500 to-orange-500' },
    { status: 'Under Review', count: 2, color: 'from-blue-500 to-indigo-500' },
    { status: 'Resolved', count: 12, color: 'from-green-500 to-teal-500' }
  ];

  const quickActions = [
    { title: 'Create New Ticket', icon: <Ticket className="w-6 h-6" />, href: '/support/new-ticket', color: 'from-blue-500 to-indigo-500' },
    { title: 'View Knowledge Base', icon: <FileText className="w-6 h-6" />, href: '/support/help', color: 'from-green-500 to-teal-500' },
    { title: 'Download Resources', icon: <Download className="w-6 h-6" />, href: '/resources', color: 'from-purple-500 to-pink-500' },
    { title: 'Contact Support', icon: <MessageCircle className="w-6 h-6" />, href: '/contact', color: 'from-orange-500 to-red-500' }
  ];

  const supportMetrics = [
    { metric: 'Average Response Time', value: '2.3 hours', icon: <Clock className="w-6 h-6" />, color: 'from-blue-500 to-indigo-500' },
    { metric: 'Resolution Rate', value: '94.2%', icon: <CheckCircle className="w-6 h-6" />, color: 'from-green-500 to-teal-500' },
    { metric: 'Customer Satisfaction', value: '4.8/5.0', icon: <Star className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
    { metric: 'Active Tickets', value: '8', icon: <Ticket className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' }
  ];

  const recentActivity = [
    { action: 'Ticket Updated', description: 'TKT-2024-001 status changed to In Progress', time: '2 hours ago', type: 'update' },
    { action: 'New Response', description: 'Support team responded to TKT-2024-002', time: '4 hours ago', type: 'response' },
    { action: 'Ticket Resolved', description: 'TKT-2024-004 marked as resolved', time: '1 day ago', type: 'resolve' },
    { action: 'Knowledge Base Updated', description: 'New article added: API Rate Limiting', time: '2 days ago', type: 'kb' }
  ];

  return (
    <Layout 
      title="Support Portal - Zion Tech Group"
      description="Customer support portal for managing tickets, accessing resources, and getting help with Zion Tech Group services."
      keywords="support portal, customer support, tickets, help desk, Zion Tech Group, support management"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-red-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Settings className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                  Support Portal
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Welcome to your customer support portal. Manage tickets, access resources, 
                and get the help you need to succeed with Zion Tech Group solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Create New Ticket
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View All Tickets
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Support Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Track your support metrics and see how we're performing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {metric.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                  <p className="text-3xl font-bold text-purple-400">{metric.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Actions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get help quickly with these common support actions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {action.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ticket Status Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ticket Status Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Track the status of your support tickets across different categories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ticketStatuses.map((status, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${status.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Ticket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{status.status}</h3>
                  <p className="text-4xl font-bold text-purple-400">{status.count}</p>
                  <p className="text-gray-400">Tickets</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Support Tickets */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recent Support Tickets
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                View and manage your recent support tickets.
              </p>
            </motion.div>

            <div className="space-y-6">
              {supportTickets.map((ticket, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Ticket Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{ticket.title}</h3>
                        <span className="text-sm text-gray-400">#{ticket.id}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{ticket.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ticket.status === 'Open' ? 'bg-red-500/20 text-red-300' :
                          ticket.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300' :
                          ticket.status === 'Under Review' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-green-500/20 text-green-300'
                        }`}>
                          {ticket.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ticket.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                          ticket.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-green-500/20 text-green-300'
                        }`}>
                          {ticket.priority} Priority
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                          {ticket.category}
                        </span>
                      </div>
                    </div>

                    {/* Ticket Details */}
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Created</h4>
                          <p className="text-white">{ticket.createdAt}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Last Updated</h4>
                          <p className="text-white">{ticket.lastUpdated}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Assigned To</h4>
                          <p className="text-white">{ticket.assignedTo}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Actions</h4>
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-xs hover:bg-purple-500/30 transition-colors">
                              View
                            </button>
                            <button className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-xs hover:bg-blue-500/30 transition-colors">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recent Activity
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated on the latest support activities and updates.
              </p>
            </motion.div>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activity.type === 'update' ? 'bg-blue-500/20' :
                    activity.type === 'response' ? 'bg-green-500/20' :
                    activity.type === 'resolve' ? 'bg-purple-500/20' :
                    'bg-orange-500/20'
                  }`}>
                    {activity.type === 'update' ? <Clock className="w-6 h-6 text-blue-400" /> :
                     activity.type === 'response' ? <MessageCircle className="w-6 h-6 text-green-400" /> :
                     activity.type === 'resolve' ? <CheckCircle className="w-6 h-6 text-purple-400" /> :
                     <FileText className="w-6 h-6 text-orange-400" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{activity.action}</h4>
                    <p className="text-gray-300 text-sm">{activity.description}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Additional Support?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Can't find what you're looking for in the portal? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Support Team
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SupportPortalPage;
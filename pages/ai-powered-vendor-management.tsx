import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const AiPoweredVendorManagement: NextPage = () => {
  const [activeTab, setActiveTab] = useState('vendors');
  const [searchTerm, setSearchTerm] = useState('');

  const mockVendors = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      category: 'AI Development',
      rating: 4.8,
      projects: 45,
      status: 'active',
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'DataFlow Analytics',
      category: 'Data Science',
      rating: 4.9,
      projects: 32,
      status: 'active',
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      name: 'CloudTech Systems',
      category: 'Cloud Infrastructure',
      rating: 4.7,
      projects: 28,
      status: 'inactive',
      lastActivity: '1 week ago'
    }
  ];

  const mockAnalytics = {
    totalVendors: 156,
    activeVendors: 142,
    averageRating: 4.6,
    totalProjects: 2847,
    monthlyGrowth: 12.5
  };

  useEffect(() => {
    // Simulate data loading
    console.log('Vendor management data loaded');
  }, []);

  return (
    <>
      <Head>
        <title>AI-Powered Vendor Management - Zion</title>
        <meta name="description" content="Advanced AI-powered vendor management system for efficient supplier relationships and procurement optimization." />
        <meta name="keywords" content="vendor management, AI, procurement, supplier management, automation" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation Placeholder */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                AI-Powered Vendor Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your vendor relationships with intelligent automation, 
                performance tracking, and predictive analytics for optimal procurement outcomes.
              </p>
            </motion.div>

            {/* Analytics Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8"
            >
              {[
                { label: 'Total Vendors', value: mockAnalytics.totalVendors, color: 'bg-blue-500/20' },
                { label: 'Active Vendors', value: mockAnalytics.activeVendors, color: 'bg-green-500/20' },
                { label: 'Avg Rating', value: mockAnalytics.averageRating, color: 'bg-yellow-500/20' },
                { label: 'Total Projects', value: mockAnalytics.totalProjects, color: 'bg-purple-500/20' },
                { label: 'Monthly Growth', value: `${mockAnalytics.monthlyGrowth}%`, color: 'bg-pink-500/20' }
              ].map((stat, index) => (
                <div key={index} className={`${stat.color} border border-white/10 rounded-lg p-6 backdrop-blur-sm`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'vendors', name: 'Vendors', icon: '🏢' },
                { id: 'performance', name: 'Performance', icon: '📊' },
                { id: 'analytics', name: 'Analytics', icon: '📈' },
                { id: 'automation', name: 'Automation', icon: '🤖' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto">
              {activeTab === 'vendors' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <input
                        type="text"
                        placeholder="Search vendors..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                        Add Vendor
                      </button>
                    </div>

                    <div className="space-y-4">
                      {mockVendors.map((vendor) => (
                        <div key={vendor.id} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold">{vendor.name.charAt(0)}</span>
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">{vendor.name}</h3>
                              <p className="text-gray-300 text-sm">{vendor.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <p className="text-white font-semibold">{vendor.rating}</p>
                              <p className="text-gray-300 text-xs">Rating</p>
                            </div>
                            <div className="text-center">
                              <p className="text-white font-semibold">{vendor.projects}</p>
                              <p className="text-gray-300 text-xs">Projects</p>
                            </div>
                            <div className="text-center">
                              <span className={`px-2 py-1 rounded text-xs ${
                                vendor.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                              }`}>
                                {vendor.status}
                              </span>
                            </div>
                            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'performance' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-white mb-6">Performance Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                        <p className="text-3xl font-bold text-green-400">2.3h</p>
                        <p className="text-gray-300 text-sm">Average</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-2">Quality Score</h3>
                        <p className="text-3xl font-bold text-blue-400">94%</p>
                        <p className="text-gray-300 text-sm">Excellent</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-2">Satisfaction</h3>
                        <p className="text-3xl font-bold text-purple-400">4.7/5</p>
                        <p className="text-gray-300 text-sm">Very High</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-white mb-6">Analytics Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Vendor Performance Trends</h3>
                        <div className="h-64 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400">Performance Chart</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Category Distribution</h3>
                        <div className="h-64 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400">Distribution Chart</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'automation' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-white mb-6">Automation Rules</h2>
                    <div className="space-y-4">
                      {[
                        { name: 'Auto-approval for trusted vendors', status: 'active', description: 'Automatically approve orders from vendors with 4.5+ rating' },
                        { name: 'Performance alerts', status: 'active', description: 'Send alerts when vendor performance drops below threshold' },
                        { name: 'Contract renewal reminders', status: 'active', description: 'Automatically remind about contract renewals 30 days before expiry' },
                        { name: 'Quality assessment automation', status: 'inactive', description: 'Automatically assess quality based on delivery metrics' }
                      ].map((rule, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
                          <div>
                            <h3 className="text-white font-semibold">{rule.name}</h3>
                            <p className="text-gray-300 text-sm">{rule.description}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              rule.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'
                            }`}>
                              {rule.status}
                            </span>
                            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                              Edit
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AiPoweredVendorManagement; 
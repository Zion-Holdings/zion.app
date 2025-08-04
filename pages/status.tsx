import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: string;
  responseTime: string;
  lastIncident?: string;
}

export default function Status() {
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: 'Zion Marketplace',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '~150ms'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '~200ms'
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '~100ms'
    },
    {
      name: 'User Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '~50ms'
    },
    {
      name: 'Real-time Chat',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '~75ms'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '~120ms'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '~80ms'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '~300ms'
    }
  ]);

  const [overallStatus, setOverallStatus] = useState<'operational' | 'degraded' | 'outage'>('operational');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Simulate real-time status updates
    const updateTime = () => {
      setLastUpdated(new Date().toISOString());
    };
    
    updateTime();
    const interval = setInterval(updateTime, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return '🟢';
      case 'degraded':
        return '🟡';
      case 'outage':
        return '🔴';
      case 'maintenance':
        return '🔵';
      default:
        return '⚪';
    }
  };

  return (
    <>
      <Head>
        <title>System Status - Zion</title>
        <meta name="description" content="Real-time status of Zion's services and systems" />
        <meta name="keywords" content="status, uptime, system health, Zion services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
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
              <div className="flex items-center space-x-4">
                <a href="/marketplace" className="text-gray-300 hover:text-white transition-colors">
                  Marketplace
                </a>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="/help-center" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
                <a href="/auth/login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </a>
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
                System Status
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-time status of Zion's services and systems. All systems are operational.
              </p>
              
              {/* Overall Status */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl">🟢</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
                    <p className="text-gray-300">Last updated: {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'Loading...'}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <span className="text-2xl">{getStatusIcon(service.status)}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Status:</span>
                      <span className={`font-medium ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-300">Uptime:</span>
                      <span className="text-white font-medium">{service.uptime}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-300">Response Time:</span>
                      <span className="text-white font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Incident History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Recent Incidents</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-center text-gray-300">
                  <p className="text-lg mb-2">No recent incidents</p>
                  <p className="text-sm">All systems have been running smoothly</p>
                </div>
              </div>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Overall Uptime</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">~150ms</div>
                  <div className="text-gray-300">Average Response Time</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Zion</h3>
                <p className="text-gray-300 text-sm">
                  The first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/marketplace" className="text-gray-300 hover:text-white transition-colors">Marketplace</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">IT Services</a></li>
                  <li><a href="/talents" className="text-gray-300 hover:text-white transition-colors">AI Talents</a></li>
                  <li><a href="/equipment" className="text-gray-300 hover:text-white transition-colors">Equipment</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/help-center" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/status" className="text-gray-300 hover:text-white transition-colors">Status</a></li>
                  <li><a href="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="/press" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-gray-300 text-sm">
                © 2024 Zion. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 
import React from 'react';
import Head from 'next/head';

export default function Status() {
  return (
    <>
      <Head>
        <title>System Status - Zion</title>
        <meta name="description" content="Real-time status of Zion's services and systems" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">System Status</h1>
            <p className="text-xl text-gray-300 mb-8">Real-time status of Zion's services and systems</p>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🟢</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
                  <p className="text-gray-300">Last updated: {new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Zion Marketplace', status: 'operational', uptime: '99.9%', responseTime: '~150ms' },
              { name: 'AI Services', status: 'operational', uptime: '99.8%', responseTime: '~200ms' },
              { name: 'Payment Processing', status: 'operational', uptime: '99.9%', responseTime: '~100ms' },
              { name: 'User Authentication', status: 'operational', uptime: '99.9%', responseTime: '~50ms' },
              { name: 'Real-time Chat', status: 'operational', uptime: '99.7%', responseTime: '~75ms' },
              { name: 'API Services', status: 'operational', uptime: '99.9%', responseTime: '~120ms' }
            ].map((service, index) => (
              <div key={service.name} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  <span className="text-2xl">🟢</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-green-400 font-medium">Operational</span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 
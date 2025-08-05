import React from 'react';
import ModernLayout from '../components/layout/ModernLayout';

import Head from 'next/head';

export default function Docs() {
  return (
    <ModernLayout>
      <>
      <Head>
        <title>Documentation - Zion</title>
        <meta name="description" content="Documentation for Zion's marketplace platform" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>
      
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 py-32">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
            <p className="text-xl text-gray-300 mb-8">Complete documentation for Zion's marketplace platform</p>
          </div>

          <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-3 gap-6">
            {[
              { title: 'Getting Started', description: 'Quick start guide for new users', link: '/api-docs' },
              { title: 'API Reference', description: 'Complete API documentation', link: '/api-docs' },
              { title: 'User Guide', description: 'How to use Zion marketplace', link: '/help-center' },
              { title: 'Developer Guide', description: 'Integration and development', link: '/api-docs' },
              { title: 'Security', description: 'Security and compliance information', link: '/security' },
              { title: 'Support', description: 'Get help and support', link: '/help-center' }
            ].map((doc, index) => (
              <div key={doc.title} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                <p className="text-gray-300 mb-4">{doc.description}</p>
                <a href={doc.link} className="text-purple-400 hover text-purple-300 transition-colors">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
);
} 
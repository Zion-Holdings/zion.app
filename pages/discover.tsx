import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Discover: React.FC = () => {
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      icon: '🤖',
      title: 'Autonomous Automation',
      description: 'Self-running systems that operate 24/7 without human intervention',
      benefits: ['Zero downtime', 'Continuous optimization', 'Self-healing capabilities']
    },
    {
      icon: '☁️',
      title: 'Cloud-Native Architecture',
      description: 'Built for the cloud with scalability and resilience at its core',
      benefits: ['Auto-scaling', 'Global distribution', 'Fault tolerance']
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security with comprehensive threat detection and prevention',
      benefits: ['SOC 2 compliance', 'Real-time monitoring', 'Automated threat response']
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Deep insights into system performance and user behavior',
      benefits: ['Real-time metrics', 'Predictive analytics', 'Custom dashboards']
    }
  ];

  const technologies = [
    { name: 'Next.js', description: 'React framework for production', category: 'Frontend' },
    { name: 'TypeScript', description: 'Typed JavaScript for better development', category: 'Language' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework', category: 'Styling' },
    { name: 'PM2', description: 'Process manager for Node.js applications', category: 'Runtime' },
    { name: 'GitHub Actions', description: 'CI/CD automation platform', category: 'DevOps' },
    { name: 'Docker', description: 'Containerization platform', category: 'Infrastructure' }
  ];

  const tabs = [
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'tech', label: 'Technology Stack', icon: '⚡' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Head>
        <title>Discover - bolt.new.zion.app</title>
        <meta name="description" content="Discover the powerful features, technology stack, and architecture of bolt.new.zion.app" />
        <meta name="keywords" content="discover, features, technology, architecture, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover bolt.new.zion.app
            </h1>
            <p className="text-xl text-gray-600">
              Explore the cutting-edge features, technologies, and architecture that power our autonomous platform
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tech' && (
              <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">{tech.name}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {tech.category}
                        </span>
                      </div>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">System Architecture Overview</h3>
                  <div className="bg-gray-100 rounded-lg p-8">
                    <div className="text-6xl mb-4">🏗️</div>
                    <p className="text-gray-600 text-lg">
                      Our architecture follows a microservices pattern with comprehensive redundancy systems
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🔄</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Redundancy Layer</h4>
                    <p className="text-gray-600">Multiple instances ensure 99.9% uptime</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🔍</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Monitoring Layer</h4>
                    <p className="text-gray-600">Real-time health checks and alerts</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">⚡</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Performance Layer</h4>
                    <p className="text-gray-600">Optimized for speed and efficiency</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ready to Explore More?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Interactive Demo</h3>
                <p className="text-gray-600 mb-4">
                  Experience our platform in action with a hands-on demonstration.
                </p>
                <Link href="/automation" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Try Demo
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Technical Deep Dive</h3>
                <p className="text-gray-600 mb-4">
                  Dive deeper into our technical implementation and best practices.
                </p>
                <Link href="/api-documentation" className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  View API Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const AIPoweredDataAnalytics: NextPage = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalDatasets: 1247,
    processedRecords: 15420000,
    accuracy: 96.8,
    insights: 892
  })

  const [datasets, setDatasets] = useState([
    { id: 1, name: 'Customer Behavior', size: '2.4GB', records: 1250000, lastUpdated: '2 hours ago' },
    { id: 2, name: 'Sales Performance', size: '1.8GB', records: 890000, lastUpdated: '1 hour ago' },
    { id: 3, name: 'Product Analytics', size: '3.2GB', records: 2100000, lastUpdated: '30 min ago' },
    { id: 4, name: 'Market Trends', size: '1.5GB', records: 750000, lastUpdated: '15 min ago' }
  ])

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Data Analytics Platform | Zion</title>
        <meta name="description" content="Advanced AI-powered data analytics with machine learning, predictive modeling, and real-time insights." />
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
            
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Data Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform raw data into actionable insights with advanced AI analytics, 
              machine learning, and predictive modeling capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🤖 Machine Learning</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📊 Predictive Analytics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">⚡ Real-time Processing</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🎯 Intelligent Insights</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-powered-data-analytics" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Start Analytics
              </Link>
              <Link href="/ai-powered-data-analytics" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Analytics Dashboard
            </h2>
            <p className="text-lg text-gray-300">
              Real-time data processing and AI-powered insights
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">{analyticsData.totalDatasets.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Total Datasets</div>
              <div className="text-green-400 text-sm mt-2">+12% this month</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">{analyticsData.processedRecords.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Records Processed</div>
              <div className="text-green-400 text-sm mt-2">+8% increase</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">{analyticsData.accuracy}%</div>
              <div className="text-gray-400 text-sm">AI Accuracy</div>
              <div className="text-green-400 text-sm mt-2">+2.1% improvement</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">{analyticsData.insights.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Insights Generated</div>
              <div className="text-green-400 text-sm mt-2">+15% this week</div>
            </div>
          </div>
          
          {/* Active Datasets */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Active Datasets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {datasets.map((dataset) => (
                <div key={dataset.id} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold text-white">{dataset.name}</div>
                    <div className="text-sm text-gray-400">{dataset.lastUpdated}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Size</div>
                      <div className="text-white font-semibold">{dataset.size}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Records</div>
                      <div className="text-white font-semibold">{dataset.records.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Analytics Features
            </h2>
            <p className="text-lg text-gray-300">
              Powerful tools for data-driven decision making
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-300 text-sm">
                Advanced ML algorithms for pattern recognition and predictive modeling
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Visualization</h3>
              <p className="text-gray-300 text-sm">
                Interactive charts and graphs for comprehensive data analysis
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Processing</h3>
              <p className="text-gray-300 text-sm">
                Live data streaming and instant analytics processing
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Predictive Insights</h3>
              <p className="text-gray-300 text-sm">
                AI-powered forecasting and trend prediction for strategic planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Analytics Applications
            </h2>
            <p className="text-lg text-gray-300">
              How AI-powered analytics transforms different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Intelligence</h3>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive analytics for business performance and strategic decision making
              </p>
              <div className="text-sm text-purple-400">Improve efficiency by 40%</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-white mb-2">E-commerce Analytics</h3>
              <p className="text-gray-300 text-sm mb-4">
                Customer behavior analysis and sales optimization with predictive modeling
              </p>
              <div className="text-sm text-purple-400">Increase revenue by 35%</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold text-white mb-2">Healthcare Analytics</h3>
              <p className="text-gray-300 text-sm mb-4">
                Patient data analysis and treatment outcome prediction for healthcare providers
              </p>
              <div className="text-sm text-purple-400">Improve outcomes by 25%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Data-Driven Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start leveraging AI-powered analytics today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </h3>
              <p className="text-gray-300 text-sm">
                The First Free AI-Powered Marketplace
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/marketplace" className="hover:text-white transition-colors">Browse All</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/talents" className="hover:text-white transition-colors">Talents</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/auth/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link href="/profile" className="hover:text-white transition-colors">Profile</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Zion. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AIPoweredDataAnalytics 
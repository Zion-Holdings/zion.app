import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const AIPoweredBusinessIntelligence: NextPage = () => {
  const [metrics, setMetrics] = useState({
    revenue: 1250000,
    growth: 23.5,
    customers: 15420,
    satisfaction: 94.2
  })

  const [insights, setInsights] = useState([
    { id: 1, title: 'Revenue Growth Trend', value: '+23.5%', trend: 'up', confidence: 92 },
    { id: 2, title: 'Customer Acquisition Cost', value: '$45', trend: 'down', confidence: 88 },
    { id: 3, title: 'Customer Lifetime Value', value: '$2,450', trend: 'up', confidence: 95 },
    { id: 4, title: 'Churn Rate', value: '2.1%', trend: 'down', confidence: 89 }
  ])

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Business Intelligence & Analytics | Zion</title>
        <meta name="description" content="Advanced AI-powered business intelligence system with predictive analytics, real-time insights, and data-driven decision making." />
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
              AI-Powered Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with AI-powered business intelligence. 
              Get predictive analytics, real-time dashboards, and intelligent reporting.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📊 Predictive Analytics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🤖 AI Insights</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📈 Real-time Dashboards</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📋 Intelligent Reporting</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-powered-business-intelligence" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Start Analytics
              </Link>
              <Link href="/ai-powered-business-intelligence" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Business Intelligence Dashboard
            </h2>
            <p className="text-lg text-gray-300">
              Real-time insights and predictive analytics powered by AI
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">${(metrics.revenue / 1000000).toFixed(1)}M</div>
              <div className="text-gray-400 text-sm">Total Revenue</div>
              <div className="text-green-400 text-sm mt-2">+{metrics.growth}% vs last year</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">{metrics.customers.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Active Customers</div>
              <div className="text-green-400 text-sm mt-2">+12% this month</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">{metrics.satisfaction}%</div>
              <div className="text-gray-400 text-sm">Customer Satisfaction</div>
              <div className="text-green-400 text-sm mt-2">+2.1% improvement</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">94.2%</div>
              <div className="text-gray-400 text-sm">AI Accuracy</div>
              <div className="text-green-400 text-sm mt-2">+1.8% improvement</div>
            </div>
          </div>
          
          {/* AI Insights */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">AI-Generated Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.map((insight) => (
                <div key={insight.id} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-white">{insight.title}</div>
                    <div className={`text-sm px-2 py-1 rounded-full ${
                      insight.trend === 'up' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                    }`}>
                      {insight.trend === 'up' ? '↗' : '↘'} {insight.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    AI Confidence: {insight.confidence}%
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
              Advanced BI Features
            </h2>
            <p className="text-lg text-gray-300">
              Powerful tools for data-driven decision making
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h3>
              <p className="text-gray-300 text-sm">
                AI-powered forecasting and trend prediction for strategic planning
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Dashboards</h3>
              <p className="text-gray-300 text-sm">
                Live data visualization with interactive charts and KPI tracking
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Insights</h3>
              <p className="text-gray-300 text-sm">
                Automated insights and recommendations based on data patterns
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Reporting</h3>
              <p className="text-gray-300 text-sm">
                Automated report generation with intelligent formatting and insights
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
              Business Applications
            </h2>
            <p className="text-lg text-gray-300">
              How AI-powered BI transforms different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive BI solutions for large organizations with multi-department analytics
              </p>
              <div className="text-sm text-purple-400">Improve efficiency by 35%</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-white mb-2">E-commerce</h3>
              <p className="text-gray-300 text-sm mb-4">
                Customer behavior analysis and sales optimization with predictive modeling
              </p>
              <div className="text-sm text-purple-400">Increase sales by 28%</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold text-white mb-2">Healthcare</h3>
              <p className="text-gray-300 text-sm mb-4">
                Patient outcome prediction and resource optimization for healthcare providers
              </p>
              <div className="text-sm text-purple-400">Reduce costs by 22%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Data-Driven Decisions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start leveraging AI-powered business intelligence today
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

export default AIPoweredBusinessIntelligence 
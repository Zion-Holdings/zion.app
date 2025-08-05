import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const AIPoweredAutomation: NextPage = () => {
  const [automationStatus, setAutomationStatus] = useState({
    workflows: 12,
    active: 8,
    completed: 156,
    efficiency: 87
  })

  const [workflows, setWorkflows] = useState([
    { id: 1, name: 'Data Processing Pipeline', status: 'active', efficiency: 94, lastRun: '2 min ago' },
    { id: 2, name: 'Email Marketing Automation', status: 'active', efficiency: 89, lastRun: '5 min ago' },
    { id: 3, name: 'Customer Support Bot', status: 'active', efficiency: 92, lastRun: '1 min ago' },
    { id: 4, name: 'Inventory Management', status: 'paused', efficiency: 78, lastRun: '1 hour ago' }
  ])

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Automation System | Zion</title>
        <meta name="description" content="Advanced AI-powered automation system with workflow orchestration, intelligent process management, and automated decision making." />
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
              AI-Powered Automation System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business operations with intelligent automation powered by advanced AI. 
              Streamline workflows, reduce manual tasks, and boost productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🤖 AI Workflows</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">⚡ Smart Automation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📊 Process Analytics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🔄 Intelligent Orchestration</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-powered-automation/" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Start Automation
              </Link>
              <Link href="/ai-powered-automation/" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Templates
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
              Automation Dashboard
            </h2>
            <p className="text-lg text-gray-300">
              Monitor and manage your AI-powered automation workflows
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">{automationStatus.workflows}</div>
              <div className="text-gray-400 text-sm">Total Workflows</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">{automationStatus.active}</div>
              <div className="text-gray-400 text-sm">Active Workflows</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">{automationStatus.completed}</div>
              <div className="text-gray-400 text-sm">Completed Tasks</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">{automationStatus.efficiency}%</div>
              <div className="text-gray-400 text-sm">Efficiency Rate</div>
            </div>
          </div>
          
          {/* Workflows List */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Active Workflows</h3>
            <div className="space-y-4">
              {workflows.map((workflow) => (
                <div key={workflow.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      workflow.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                    <div>
                      <div className="font-semibold text-white">{workflow.name}</div>
                      <div className="text-sm text-gray-400">Last run: {workflow.lastRun}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">{workflow.efficiency}%</div>
                    <div className="text-sm text-gray-400">Efficiency</div>
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
              Automation Features
            </h2>
            <p className="text-lg text-gray-300">
              Powerful tools to streamline your business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Workflows</h3>
              <p className="text-gray-300 text-sm">
                Intelligent workflow automation with AI-powered decision making and process optimization
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Triggers</h3>
              <p className="text-gray-300 text-sm">
                Event-driven automation with intelligent triggers and conditional logic
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive analytics and performance monitoring for all automation workflows
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-white mb-2">Integration</h3>
              <p className="text-gray-300 text-sm">
                Seamless integration with existing tools and third-party services
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
              Popular Use Cases
            </h2>
            <p className="text-lg text-gray-300">
              See how AI automation is transforming businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Marketing</h3>
              <p className="text-gray-300 text-sm mb-4">
                Automated email campaigns with personalized content and smart segmentation
              </p>
              <div className="text-sm text-purple-400">Save 15 hours/week</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-white mb-2">E-commerce</h3>
              <p className="text-gray-300 text-sm mb-4">
                Automated inventory management and order processing workflows
              </p>
              <div className="text-sm text-purple-400">Reduce errors by 90%</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-white mb-2">Customer Support</h3>
              <p className="text-gray-300 text-sm mb-4">
                AI-powered chatbots and automated ticket routing systems
              </p>
              <div className="text-sm text-purple-400">Handle 80% of queries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building intelligent workflows that work for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Browse Templates
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

export default AIPoweredAutomation 
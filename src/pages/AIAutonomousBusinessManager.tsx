import React from 'react';
import { Link } from 'react-router-dom';

const AIAutonomousBusinessManager: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Business Manager
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The future of business operations is here. Our AI Autonomous Business Manager 
              handles every aspect of your business operations with zero human intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Autonomous Business Operations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Decision Making</h3>
              <p className="text-gray-300">
                Advanced AI algorithms make real-time business decisions based on market data, 
                performance metrics, and strategic objectives.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Performance Analytics</h3>
              <p className="text-gray-300">
                Continuous monitoring and analysis of all business metrics with automated 
                reporting and predictive insights.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Process Automation</h3>
              <p className="text-gray-300">
                End-to-end automation of business processes from customer acquisition 
                to service delivery and support.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Financial Management</h3>
              <p className="text-gray-300">
                Automated budgeting, expense tracking, revenue optimization, and 
                financial forecasting with AI-driven insights.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Team Management</h3>
              <p className="text-gray-300">
                AI-powered HR functions including recruitment, performance management, 
                training, and team optimization.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Growth Optimization</h3>
              <p className="text-gray-300">
                Continuous optimization of business strategies, market expansion, 
                and revenue growth through AI analysis and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Starter</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$2,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Basic AI Operations</li>
                <li>✓ Process Automation</li>
                <li>✓ Performance Analytics</li>
                <li>✓ Email Support</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-400/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Professional</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$5,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Advanced AI Operations</li>
                <li>✓ Full Process Automation</li>
                <li>✓ Predictive Analytics</li>
                <li>✓ Financial Management</li>
                <li>✓ Priority Support</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$12,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Full AI Autonomy</li>
                <li>✓ Complete Business Management</li>
                <li>✓ Advanced Analytics & ML</li>
                <li>✓ Custom Integrations</li>
                <li>✓ 24/7 Dedicated Support</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of business operations with our AI Autonomous Business Manager. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessManager;
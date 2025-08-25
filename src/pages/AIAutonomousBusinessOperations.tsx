import React from 'react';
import { Link } from 'react-router-dom';

const AIAutonomousBusinessOperations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Business Operations
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with fully autonomous operations powered by AI. 
              From day-to-day tasks to strategic decision-making, our AI systems handle 
              everything with precision and efficiency.
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

      {/* Operations Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Complete Business Operations Automation
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Autonomous Operations</h3>
              <p className="text-lg text-gray-300 mb-8">
                Our AI systems operate your business 24/7 with zero human intervention. 
                From customer service to financial management, every aspect of your 
                business runs autonomously and efficiently.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Continuous Monitoring</h4>
                    <p className="text-gray-300">AI systems monitor all business operations in real-time</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Intelligent Decision Making</h4>
                    <p className="text-gray-300">AI makes decisions based on data analysis and business rules</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Automated Execution</h4>
                    <p className="text-gray-300">All decisions are automatically executed and monitored</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30">
              <h4 className="text-2xl font-bold text-cyan-400 mb-6">Key Benefits</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 Business Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Zero Human Error</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Scalable Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Cost Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Core Operations Modules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Financial Operations</h3>
              <p className="text-gray-300 mb-6">
                Automated financial management including budgeting, expense tracking, 
                revenue optimization, and financial forecasting.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Automated Budgeting</li>
                <li>• Expense Management</li>
                <li>• Revenue Optimization</li>
                <li>• Financial Reporting</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">HR Operations</h3>
              <p className="text-gray-300 mb-6">
                AI-powered human resources management including recruitment, performance 
                tracking, and team optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Automated Recruitment</li>
                <li>• Performance Management</li>
                <li>• Training Optimization</li>
                <li>• Team Analytics</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Customer Operations</h3>
              <p className="text-gray-300 mb-6">
                Autonomous customer service, support, and relationship management 
                with AI-powered personalization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Customer Support</li>
                <li>• Relationship Management</li>
                <li>• Personalization</li>
                <li>• Feedback Analysis</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Marketing Operations</h3>
              <p className="text-gray-300 mb-6">
                Automated marketing campaigns, lead generation, and customer acquisition 
                with AI-driven optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Campaign Automation</li>
                <li>• Lead Generation</li>
                <li>• Content Optimization</li>
                <li>• ROI Tracking</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">IT Operations</h3>
              <p className="text-gray-300 mb-6">
                Autonomous IT infrastructure management, security monitoring, and 
                system optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Infrastructure Management</li>
                <li>• Security Monitoring</li>
                <li>• System Optimization</li>
                <li>• Incident Response</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Process Operations</h3>
              <p className="text-gray-300 mb-6">
                End-to-end process automation with intelligent workflow management 
                and continuous optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Workflow Automation</li>
                <li>• Process Optimization</li>
                <li>• Quality Control</li>
                <li>• Performance Metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Seamless Integration
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous operations integrate seamlessly with your existing systems 
              and tools, ensuring a smooth transition to AI-powered business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                <span className="text-3xl">💼</span>
              </div>
              <h4 className="text-lg font-bold text-white">ERP Systems</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                <span className="text-3xl">📧</span>
              </div>
              <h4 className="text-lg font-bold text-white">CRM Platforms</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                <span className="text-3xl">☁️</span>
              </div>
              <h4 className="text-lg font-bold text-white">Cloud Services</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                <span className="text-3xl">🔌</span>
              </div>
              <h4 className="text-lg font-bold text-white">APIs</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Operations Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Basic Operations</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$2,499<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Core Operations Modules</li>
                <li>✓ Basic Automation</li>
                <li>✓ Standard Analytics</li>
                <li>✓ Email Support</li>
                <li>✓ 3 User Licenses</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-400/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Professional Operations</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$4,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Full Operations Suite</li>
                <li>✓ Advanced Automation</li>
                <li>✓ Predictive Analytics</li>
                <li>✓ Priority Support</li>
                <li>✓ 15 User Licenses</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Operations</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$9,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Complete Operations</li>
                <li>✓ Custom AI Training</li>
                <li>✓ Advanced Integrations</li>
                <li>✓ Dedicated Support</li>
                <li>✓ Unlimited Users</li>
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
            Ready for Autonomous Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with AI-powered autonomous operations. 
            Start your free trial today and experience the future of business management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessOperations;
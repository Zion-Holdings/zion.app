import React from 'react';
import { Link } from 'react-router-dom';

const AIAutonomousBusinessPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Business Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The complete platform for autonomous business operations. From decision-making 
              to execution, our AI platform handles every aspect of your business with 
              unprecedented intelligence and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Platform Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Complete Business Autonomy Platform
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Platform Architecture</h3>
              <p className="text-lg text-gray-300 mb-8">
                Our platform is built on a modular architecture that allows businesses to 
                implement autonomous operations at their own pace. Each module is designed 
                to work independently or as part of the complete ecosystem.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Core AI Engine</h4>
                    <p className="text-gray-300">Advanced machine learning algorithms that power all autonomous decisions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Business Logic Layer</h4>
                    <p className="text-gray-300">Customizable business rules and workflows for your industry</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Integration Hub</h4>
                    <p className="text-gray-300">Seamless connection with existing systems and third-party services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30">
              <h4 className="text-2xl font-bold text-cyan-400 mb-6">Platform Benefits</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 Autonomous Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time Decision Making</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Scalable Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Customizable Workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Advanced Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Core Platform Modules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Decision Engine</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI algorithms that analyze data and make real-time business decisions 
                based on your company's goals and market conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Predictive Analytics</li>
                <li>• Risk Assessment</li>
                <li>• Opportunity Detection</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Process Automation</h3>
              <p className="text-gray-300 mb-6">
                End-to-end automation of business processes with intelligent workflow 
                management and optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Workflow Automation</li>
                <li>• Process Optimization</li>
                <li>• Quality Control</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Business Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive analytics and reporting that provide deep insights into 
                business performance and opportunities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Real-time Dashboards</li>
                <li>• Custom Reports</li>
                <li>• Performance Metrics</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Financial Management</h3>
              <p className="text-gray-300 mb-6">
                Automated financial operations including budgeting, forecasting, 
                and optimization of revenue streams.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Budget Automation</li>
                <li>• Revenue Optimization</li>
                <li>• Cost Control</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Human Resources</h3>
              <p className="text-gray-300 mb-6">
                AI-powered HR functions including recruitment, performance management, 
                and team optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Talent Acquisition</li>
                <li>• Performance Tracking</li>
                <li>• Training Optimization</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Security & Compliance</h3>
              <p className="text-gray-300 mb-6">
                Enterprise-grade security with automated compliance monitoring 
                and regulatory adherence.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Threat Detection</li>
                <li>• Compliance Monitoring</li>
                <li>• Data Protection</li>
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
              Our platform integrates seamlessly with your existing systems and tools, 
              ensuring a smooth transition to autonomous operations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                <span className="text-3xl">📧</span>
              </div>
              <h4 className="text-lg font-bold text-white">Email & CRM</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                <span className="text-3xl">💼</span>
              </div>
              <h4 className="text-lg font-bold text-white">ERP Systems</h4>
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
            Platform Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Starter Platform</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$3,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Core AI Engine</li>
                <li>✓ Basic Process Automation</li>
                <li>✓ Standard Analytics</li>
                <li>✓ Email Support</li>
                <li>✓ 5 User Licenses</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-400/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Professional Platform</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$7,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Full AI Platform</li>
                <li>✓ Advanced Automation</li>
                <li>✓ Predictive Analytics</li>
                <li>✓ Financial Management</li>
                <li>✓ Priority Support</li>
                <li>✓ 25 User Licenses</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Platform</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$15,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Complete Platform</li>
                <li>✓ Custom AI Training</li>
                <li>✓ Advanced Integrations</li>
                <li>✓ Dedicated Support</li>
                <li>✓ Unlimited Users</li>
                <li>✓ Custom Development</li>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the autonomous business revolution. Start your free trial today and 
            experience the power of AI-driven business operations.
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

export default AIAutonomousBusinessPlatform;
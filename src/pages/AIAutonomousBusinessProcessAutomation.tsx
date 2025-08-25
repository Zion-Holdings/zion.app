import React from 'react';
import { Link } from 'react-router-dom';

const AIAutonomousBusinessProcessAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Business Process Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your business processes with AI-powered automation. 
              Our intelligent systems analyze, optimize, and execute business processes 
              with unprecedented efficiency and accuracy.
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

      {/* Process Automation Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Intelligent Process Automation
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">AI-Powered Process Management</h3>
              <p className="text-lg text-gray-300 mb-8">
                Our AI systems don't just automate processes—they understand them, 
                optimize them, and continuously improve them. Every business process 
                becomes more efficient, accurate, and cost-effective.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Process Discovery</h4>
                    <p className="text-gray-300">AI analyzes existing processes to identify automation opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Intelligent Design</h4>
                    <p className="text-gray-300">AI designs optimal process workflows based on business goals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Continuous Optimization</h4>
                    <p className="text-gray-300">Processes automatically improve based on performance data</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30">
              <h4 className="text-2xl font-bold text-cyan-400 mb-6">Key Benefits</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">90% Process Efficiency Increase</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">75% Cost Reduction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Zero Human Error</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 Operation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Automated Process Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Communication Processes</h3>
              <p className="text-gray-300 mb-6">
                Automated email campaigns, customer notifications, and internal 
                communications with intelligent personalization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Email Automation</li>
                <li>• Customer Notifications</li>
                <li>• Internal Communications</li>
                <li>• Response Management</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Data Processing</h3>
              <p className="text-gray-300 mb-6">
                Automated data collection, analysis, and reporting with 
                real-time insights and predictive analytics.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Data Collection</li>
                <li>• Analysis Automation</li>
                <li>• Report Generation</li>
                <li>• Insight Delivery</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Sales Processes</h3>
              <p className="text-gray-300 mb-6">
                End-to-end sales automation from lead generation to 
                deal closure with intelligent qualification and nurturing.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Lead Generation</li>
                <li>• Qualification</li>
                <li>• Nurturing</li>
                <li>• Deal Management</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">HR Processes</h3>
              <p className="text-gray-300 mb-6">
                Automated recruitment, onboarding, performance management, 
                and employee lifecycle processes.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Recruitment</li>
                <li>• Onboarding</li>
                <li>• Performance Reviews</li>
                <li>• Employee Management</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Financial Processes</h3>
              <p className="text-gray-300 mb-6">
                Automated invoicing, expense management, budget tracking, 
                and financial reporting processes.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Invoicing</li>
                <li>• Expense Management</li>
                <li>• Budget Tracking</li>
                <li>• Financial Reporting</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">IT Operations</h3>
              <p className="text-gray-300 mb-6">
                Automated system monitoring, incident response, 
                and infrastructure management processes.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• System Monitoring</li>
                <li>• Incident Response</li>
                <li>• Infrastructure Management</li>
                <li>• Security Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Advanced Technology Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">AI & Machine Learning</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Process Mining & Discovery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Predictive Process Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Intelligent Decision Making</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Continuous Learning</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">Automation Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">RPA Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Workflow Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">API Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Process Automation Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Basic Automation</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$1,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ 5 Process Automations</li>
                <li>✓ Basic AI Features</li>
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
              <h3 className="text-2xl font-bold mb-4 text-white">Professional Automation</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$3,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ 20 Process Automations</li>
                <li>✓ Advanced AI Features</li>
                <li>✓ Predictive Analytics</li>
                <li>✓ Priority Support</li>
                <li>✓ 10 User Licenses</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Automation</h3>
              <div className="text-4xl font-bold mb-6 text-cyan-400">$7,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Unlimited Automations</li>
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
            Ready to Automate Your Processes?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with AI-powered process automation. 
            Start your free trial today and see the difference automation can make.
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

export default AIAutonomousBusinessProcessAutomation;
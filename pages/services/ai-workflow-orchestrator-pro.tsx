import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Users, Zap, Shield, TrendingUp,
  ArrowRight, Play, Clock, Award, Globe, Cpu, Brain
} from 'lucide-react';

export default function AIWorkflowOrchestratorPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Workflow Orchestrator Pro - Intelligent Workflow Automation | Zion Tech Group"
        description="Advanced AI-powered workflow orchestration platform that automatically optimizes processes, predicts bottlenecks, and adapts workflows in real-time. Transform your business operations with intelligent automation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Workflow Orchestrator Pro
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              Intelligent workflow automation with AI-powered decision making and optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold">
                $299/month
              </div>
              <div className="text-blue-200 text-lg">
                21-day free trial • Setup in 3-5 days
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary AI-Powered Features
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Transform your workflows with cutting-edge AI that learns, adapts, and optimizes in real-time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Powered Workflow Optimization",
                description: "Machine learning algorithms continuously analyze and optimize your workflows for maximum efficiency"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Predictive Bottleneck Detection",
                description: "Identify potential workflow bottlenecks before they impact your operations"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Dynamic Workflow Adaptation",
                description: "Automatically adjust workflows based on real-time performance data and business rules"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Real-Time Performance Analytics",
                description: "Comprehensive dashboards showing workflow performance, efficiency metrics, and optimization opportunities"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Intelligent Resource Allocation",
                description: "AI automatically assigns resources based on workload, priority, and availability"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Advanced Error Handling",
                description: "Smart error detection and recovery with automated fallback mechanisms"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Experience unprecedented efficiency and agility with AI-powered workflow orchestration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                {[
                  "Increase operational efficiency by 40-60%",
                  "Reduce process bottlenecks by 70%",
                  "Automate complex decision-making processes",
                  "Real-time workflow optimization and adaptation",
                  "Predictive analytics for proactive management",
                  "Seamless integration with existing systems"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-lg text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Key Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Efficiency Improvement</span>
                  <span className="text-2xl font-bold text-green-400">40-60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Bottleneck Reduction</span>
                  <span className="text-2xl font-bold text-green-400">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Setup Time</span>
                  <span className="text-2xl font-bold text-blue-400">3-5 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Customer Rating</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-yellow-400 mr-2">4.8</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Enterprise-grade technology stack ensuring reliability, scalability, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Python", description: "Core AI/ML engine" },
              { name: "TensorFlow", description: "Machine learning framework" },
              { name: "Apache Airflow", description: "Workflow orchestration" },
              { name: "Redis", description: "High-performance caching" },
              { name: "PostgreSQL", description: "Reliable data storage" },
              { name: "React", description: "Modern user interface" },
              { name: "Node.js", description: "Scalable backend" },
              { name: "Docker", description: "Containerized deployment" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-blue-200">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Start transforming your workflows today with our comprehensive AI-powered platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-400/50"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">AI Workflow Orchestrator Pro</h3>
                <div className="text-5xl font-bold text-white mb-2">$299</div>
                <div className="text-xl text-blue-200">per month</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {[
                      "Unlimited workflow automation",
                      "AI-powered optimization",
                      "Real-time analytics dashboard",
                      "Advanced error handling",
                      "Multi-tenant support",
                      "API access",
                      "24/7 support",
                      "Regular updates and improvements"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-blue-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Additional Benefits:</h4>
                  <ul className="space-y-3">
                    {[
                      "21-day free trial",
                      "Setup in 3-5 days",
                      "Training and onboarding",
                      "Custom integrations",
                      "Performance optimization",
                      "Scalability planning",
                      "Compliance support",
                      "Dedicated success manager"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-blue-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <p className="text-blue-200 mt-4">No credit card required • Cancel anytime</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Get in touch with our team to learn how AI Workflow Orchestrator Pro can revolutionize your business operations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-blue-200">+1 302 464 0950</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-blue-200">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-blue-200">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-400/50">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-blue-200">Proven track record with 23+ customers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-200">Industry-leading AI technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-blue-200">Enterprise-grade security and compliance</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-blue-200">Dedicated support and success team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span className="text-blue-200">Rapid implementation and onboarding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-blue-200">Continuous innovation and updates</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
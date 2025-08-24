import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Zap, Shield, Globe, Brain, BarChart3 } from 'lucide-react';

const AutonomousCustomerSuccess2043: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Autonomous Customer Success 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Autonomous
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Customer Success
                </span>
                Platform
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize customer success with AI-powered autonomous systems. 
                Proactive engagement, predictive insights, and personalized experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-pink-500/30 text-pink-400 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Customer Success Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced capabilities that transform customer relationships and drive success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI-Powered Insights",
                  description: "Deep learning algorithms that predict customer needs and behavior patterns",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Proactive Engagement",
                  description: "Automated outreach and engagement before customers even realize they need help",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Response",
                  description: "Instant customer support and issue resolution with autonomous systems",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Personalized Experiences",
                  description: "Tailored customer journeys and recommendations based on individual preferences",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Predictive Analytics",
                  description: "Forecast customer churn and identify expansion opportunities",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Support",
                  description: "24/7 multilingual customer support across all time zones",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Success Dashboard Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/10 to-purple-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Customer Success Dashboard
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real-time customer success metrics and autonomous engagement monitoring
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { metric: "Customer Satisfaction", value: "96.8%", change: "+2.3%", color: "text-green-400" },
                  { metric: "Retention Rate", value: "94.2%", change: "+1.8%", color: "text-blue-400" },
                  { metric: "Response Time", value: "<30s", change: "-15s", color: "text-purple-400" },
                  { metric: "Success Score", value: "92.5%", change: "+3.1%", color: "text-pink-400" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl">
                    <p className="text-gray-400 text-sm mb-2">{stat.metric}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-green-400 text-sm">{stat.change}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-4">Autonomous customer success monitoring with proactive engagement</p>
                <button className="px-6 py-3 bg-pink-500/20 border border-pink-500/30 text-pink-400 rounded-lg hover:bg-pink-500/30 transition-all duration-300">
                  View Customer Dashboard
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Customer Relationships
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary use cases that drive customer success and loyalty
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "SaaS Customer Success",
                  description: "Automated onboarding, feature adoption tracking, and proactive support for SaaS customers",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Enterprise Support",
                  description: "Large-scale customer success management with AI-powered insights and automation",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "E-commerce Success",
                  description: "Personalized shopping experiences, order tracking, and customer retention optimization",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Financial Services",
                  description: "Proactive financial advice, risk management, and personalized banking experiences",
                  color: "from-orange-500 to-red-500"
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} mb-6`}>
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Customer Success?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the autonomous customer success revolution. Start your transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="px-8 py-4 border border-pink-500/30 text-pink-400 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutonomousCustomerSuccess2043;
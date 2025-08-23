import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Heart, Users, Target, TrendingUp, Shield, Globe, Cpu, Zap, CheckCircle, Star } from 'lucide-react';

const AICustomerSuccess2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-red-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm mb-6">
                <Heart className="w-4 h-4" />
                AI Customer Success 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
                AI Customer Success 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered customer success platform with emotional intelligence and predictive insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                  Transform Customer Success
                </button>
                <button className="px-8 py-4 border border-pink-500/30 text-pink-300 rounded-2xl hover:bg-pink-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Customer Success Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced AI capabilities that revolutionize customer success and retention
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Emotional Intelligence",
                  description: "AI that understands customer emotions and responds with empathy"
                },
                {
                  icon: <Target className="w-8 h-8 text-red-400" />,
                  title: "Predictive Insights",
                  description: "Anticipate customer needs and prevent churn before it happens"
                },
                {
                  icon: <Users className="w-8 h-8 text-orange-400" />,
                  title: "Personalized Support",
                  description: "Tailored customer experiences based on individual preferences"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                  title: "Success Automation",
                  description: "Automated workflows that drive customer success outcomes"
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Proactive Monitoring",
                  description: "Continuous monitoring of customer health and satisfaction"
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-400" />,
                  title: "Global Reach",
                  description: "Multi-language and cultural customer success support"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-pink-500/20 rounded-2xl hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Metrics
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Measurable improvements in customer success and business outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Customer Retention",
                  description: "Increase customer lifetime value and reduce churn rates significantly",
                  icon: <Star className="w-12 h-12 text-pink-400" />
                },
                {
                  title: "Success Automation",
                  description: "Automate routine tasks and focus on high-value customer interactions",
                  icon: <Zap className="w-12 h-12 text-red-400" />
                },
                {
                  title: "Predictive Insights",
                  description: "Identify at-risk customers and opportunities for growth",
                  icon: <TrendingUp className="w-12 h-12 text-orange-400" />
                },
                {
                  title: "Customer Satisfaction",
                  description: "Improve NPS scores and customer happiness metrics",
                  icon: <CheckCircle className="w-12 h-12 text-emerald-400" />
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-pink-500/20 rounded-2xl hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{metric.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{metric.title}</h3>
                  <p className="text-gray-400 text-lg">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Customer Success?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy AI-powered customer success that drives real business results
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AICustomerSuccess2041;
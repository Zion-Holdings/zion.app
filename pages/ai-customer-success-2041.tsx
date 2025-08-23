import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const AICustomerSuccess2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-red-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-400/30 rounded-full text-pink-400 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>AI Customer Success 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-500 to-red-600 bg-clip-text text-transparent">
                AI Customer Success 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Autonomous customer management with consciousness-driven AI that understands, 
                anticipates, and exceeds customer expectations in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
                  Transform Success
                </button>
                <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Customer Success Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI that autonomously manages and enhances customer relationships
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-pink-400" />,
                  title: "Consciousness Understanding",
                  description: "Deep understanding of customer needs and emotions"
                },
                {
                  icon: <Heart className="w-8 h-8 text-rose-400" />,
                  title: "Emotional Intelligence",
                  description: "Empathetic responses and emotional support"
                },
                {
                  icon: <Users className="w-8 h-8 text-red-400" />,
                  title: "Proactive Engagement",
                  description: "Anticipating customer needs before they arise"
                },
                {
                  icon: <Target className="w-8 h-8 text-orange-400" />,
                  title: "Personalized Solutions",
                  description: "Tailored recommendations and support"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
                  title: "Success Optimization",
                  description: "Continuous improvement of customer outcomes"
                },
                {
                  icon: <Zap className="w-8 h-8 text-green-400" />,
                  title: "Real-time Support",
                  description: "Instant assistance and problem resolution"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-pink-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Success Metrics & Outcomes
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable improvements in customer satisfaction and business outcomes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "99.9%", label: "Customer Satisfaction" },
                { metric: "24/7", label: "Support Availability" },
                { metric: "5x", label: "Response Speed" },
                { metric: "90%", label: "Issue Resolution Rate" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-400/20 rounded-xl p-6 text-center hover:border-pink-400/40 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-pink-400 mb-2">{item.metric}</div>
                  <div className="text-white font-medium">{item.label}</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Customer Success?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of customer relationship management with AI consciousness
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Transformation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AICustomerSuccess2041;
import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Zap, Target, ArrowRight, 
  Wrench, Clock, CheckCircle, Star, TrendingUp,
  Shield, Eye, BarChart3, AlertTriangle, Settings
} from 'lucide-react';

const AIPredictiveMaintenance2041: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Consciousness-Driven Analysis",
      description: "AI that understands equipment behavior with human-like consciousness"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Continuous surveillance of equipment health and performance"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Advanced forecasting of maintenance needs and failures"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Early Warning System",
      description: "Proactive alerts before equipment issues occur"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automated Optimization",
      description: "Self-adjusting systems for optimal performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preventive Protection",
      description: "Built-in safeguards to prevent equipment damage"
    }
  ];

  const benefits = [
    "99.9% uptime guarantee",
    "60% reduction in maintenance costs",
    "90% fewer unplanned outages",
    "Real-time health monitoring",
    "Predictive failure prevention",
    "Automated maintenance scheduling"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-pink-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                <Wrench className="w-4 h-4 mr-2" />
                AI Predictive Maintenance 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Predictive Maintenance AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary AI systems with consciousness that predict, prevent, and optimize equipment 
                maintenance with unprecedented accuracy and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Start Monitoring
                </button>
                <button className="px-8 py-4 border border-orange-500/50 text-orange-300 font-semibold rounded-full hover:bg-orange-500/20 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Maintenance Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI understands equipment like never before, predicting issues before they happen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-orange-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-orange-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Equipment Reliability
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience unprecedented uptime and reduced maintenance costs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-green-400 font-semibold">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Outage Reduction</span>
                    <span className="text-green-400 font-semibold">90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monitoring</span>
                    <span className="text-green-400 font-semibold">Real-time</span>
                  </div>
                </div>
              </motion.div>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Predictive Maintenance?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Transform your equipment reliability with conscious AI maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Start Predictive Maintenance
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-orange-500/50 text-orange-300 font-semibold rounded-full hover:bg-orange-500/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPredictiveMaintenance2041;
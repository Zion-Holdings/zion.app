import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Settings, Brain, Zap, Target, Award, Clock, TrendingUp, Eye,
  Shield, Star, CheckCircle, Database, AlertTriangle, BarChart3
} from 'lucide-react';

const AIPredictiveMaintenancePlatform: React.FC = () => {
  const platformFeatures = [
    {
      title: "Predictive Analytics",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      description: "Advanced AI algorithms that predict equipment failures before they occur",
      features: [
        "Machine learning failure prediction",
        "Real-time sensor data analysis",
        "Historical pattern recognition",
        "Anomaly detection algorithms"
      ]
    },
    {
      title: "Maintenance Optimization",
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      description: "Intelligent scheduling and resource allocation for maintenance operations",
      features: [
        "Optimal maintenance scheduling",
        "Resource allocation optimization",
        "Cost-benefit analysis",
        "Preventive maintenance planning"
      ]
    },
    {
      title: "Real-time Monitoring",
      icon: <Eye className="w-8 h-8 text-green-400" />,
      description: "Continuous monitoring of equipment health and performance metrics",
      features: [
        "24/7 equipment monitoring",
        "Performance metrics tracking",
        "Alert and notification systems",
        "Dashboard visualization"
      ]
    },
    {
      title: "Data Integration",
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      description: "Seamless integration with existing systems and data sources",
      features: [
        "IoT sensor integration",
        "ERP system connectivity",
        "Cloud data storage",
        "API integrations"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full">
                  <Settings className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI Predictive Maintenance Platform
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered platform that predicts equipment failures, 
                optimizes maintenance schedules, and maximizes operational efficiency.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Explore Platform
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Platform Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our predictive maintenance platform combines cutting-edge AI with comprehensive monitoring 
                to revolutionize how you maintain and optimize your equipment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformative Benefits
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience unprecedented improvements in equipment reliability, 
                maintenance efficiency, and operational cost savings.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Reduced Downtime",
                  description: "Minimize unexpected equipment failures and maximize operational uptime with predictive insights."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Cost Optimization",
                  description: "Reduce maintenance costs by optimizing schedules and preventing costly breakdowns."
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Enhanced Safety",
                  description: "Improve workplace safety by identifying potential equipment hazards before they become dangerous."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Maintenance Operations?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in the future of predictive maintenance. Maximize equipment reliability, 
                minimize costs, and optimize your operations with AI-powered insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPredictiveMaintenancePlatform;
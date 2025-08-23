import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Users, Zap, Globe, Cpu, CheckCircle, Star, Stethoscope, TrendingUp } from 'lucide-react';

const HealthcareSolutions: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-900/20 to-pink-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-red-300 text-sm mb-6">
                <Heart className="w-4 h-4" />
                Healthcare Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered healthcare technology that transforms patient care and medical outcomes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300">
                  Transform Healthcare
                </button>
                <button className="px-8 py-4 border border-red-500/30 text-red-300 rounded-2xl hover:bg-red-500/10 transition-all duration-300">
                  View Solutions
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
                Healthcare Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced AI capabilities that revolutionize healthcare delivery and patient outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-red-400" />,
                  title: "AI Diagnosis",
                  description: "Advanced AI-powered diagnostic systems with high accuracy"
                },
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Patient Monitoring",
                  description: "Real-time patient monitoring and health tracking"
                },
                {
                  icon: <Shield className="w-8 h-8 text-purple-400" />,
                  title: "Data Security",
                  description: "HIPAA-compliant healthcare data protection"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Care Coordination",
                  description: "Seamless coordination between healthcare providers"
                },
                {
                  icon: <Zap className="w-8 h-8 text-cyan-400" />,
                  title: "Predictive Analytics",
                  description: "Predict patient outcomes and prevent complications"
                },
                {
                  icon: <Globe className="w-8 h-8 text-emerald-400" />,
                  title: "Telemedicine",
                  description: "Advanced remote healthcare delivery systems"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-red-500/20 rounded-2xl hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform healthcare delivery with AI-powered solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Improved Patient Outcomes",
                  description: "Better diagnosis and treatment through AI-powered insights",
                  icon: <Heart className="w-12 h-12 text-red-400" />
                },
                {
                  title: "Reduced Costs",
                  description: "Lower healthcare costs through efficient AI systems",
                  icon: <TrendingUp className="w-12 h-12 text-pink-400" />
                },
                {
                  title: "Enhanced Efficiency",
                  description: "Streamlined healthcare workflows and processes",
                  icon: <Zap className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Better Access",
                  description: "Improved healthcare access through telemedicine",
                  icon: <Globe className="w-12 h-12 text-blue-400" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-red-500/20 rounded-2xl hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg">{benefit.description}</p>
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
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy AI-powered healthcare solutions that improve patient outcomes
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareSolutions;

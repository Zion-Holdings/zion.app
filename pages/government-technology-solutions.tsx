import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Building, Shield, Users, Globe, Zap, Cpu, CheckCircle, Star, Lock, Target } from 'lucide-react';

const GovernmentTechnologySolutions: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-indigo-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Building className="w-4 h-4" />
                Government Technology Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered technology solutions that transform government operations and citizen services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                  Transform Government
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-300 rounded-2xl hover:bg-blue-500/10 transition-all duration-300">
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
                Government Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced AI capabilities that revolutionize government operations and citizen services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Cybersecurity",
                  description: "Advanced government-grade security and threat protection"
                },
                {
                  icon: <Users className="w-8 h-8 text-indigo-400" />,
                  title: "Citizen Services",
                  description: "AI-powered citizen engagement and service delivery"
                },
                {
                  icon: <Building className="w-8 h-8 text-purple-400" />,
                  title: "Infrastructure Management",
                  description: "Intelligent management of government infrastructure"
                },
                {
                  icon: <Globe className="w-8 h-8 text-cyan-400" />,
                  title: "Digital Transformation",
                  description: "Complete digital transformation of government operations"
                },
                {
                  icon: <Zap className="w-8 h-8 text-emerald-400" />,
                  title: "Process Automation",
                  description: "Automated government processes and workflows"
                },
                {
                  icon: <Lock className="w-8 h-8 text-orange-400" />,
                  title: "Compliance",
                  description: "Regulatory compliance and governance systems"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform government operations with AI-powered solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Improved Efficiency",
                  description: "Streamlined government operations and reduced costs",
                  icon: <Zap className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Better Citizen Services",
                  description: "Enhanced citizen engagement and service delivery",
                  icon: <Users className="w-12 h-12 text-indigo-400" />
                },
                {
                  title: "Enhanced Security",
                  description: "Advanced cybersecurity and threat protection",
                  icon: <Shield className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Data Insights",
                  description: "Better decision-making through AI-powered analytics",
                  icon: <Target className="w-12 h-12 text-cyan-400" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
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
                Ready to Transform Government?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy AI-powered government solutions that improve operations
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GovernmentTechnologySolutions;

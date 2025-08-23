import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Building, Users, Globe, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap,
  Cloud, Database, Lock, BarChart3, Award
} from 'lucide-react';

const GovernmentSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Government Security & Compliance",
      description: "FISMA, FedRAMP, and state-level compliance solutions",
      features: ["FISMA compliance", "FedRAMP authorization", "State security standards", "Threat intelligence"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Secure Cloud Infrastructure",
      description: "Government-grade cloud solutions with enhanced security",
      features: ["Government cloud", "Data sovereignty", "Encryption at rest", "Access controls"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Data Management & Analytics",
      description: "Secure data solutions for government operations",
      features: ["Data governance", "Privacy protection", "Analytics platforms", "Compliance reporting"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Citizen Services Platform",
      description: "Digital transformation for government services",
      features: ["Online portals", "Mobile applications", "Process automation", "User experience"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const compliance = [
    {
      icon: Award,
      title: "FISMA",
      description: "Federal Information Security Management Act compliance"
    },
    {
      icon: Shield,
      title: "FedRAMP",
      description: "Federal Risk and Authorization Management Program"
    },
    {
      icon: Lock,
      title: "State Standards",
      description: "State-specific security and compliance requirements"
    },
    {
      icon: CheckCircle,
      title: "SOC 2",
      description: "Service Organization Control 2 compliance"
    }
  ];

  const sectors = [
    {
      name: "Federal Government",
      description: "Agencies and departments at the federal level",
      services: ["Defense", "Healthcare", "Transportation", "Energy"]
    },
    {
      name: "State Government",
      description: "State agencies and departments",
      services: ["Education", "Public Safety", "Healthcare", "Transportation"]
    },
    {
      name: "Local Government",
      description: "Cities, counties, and municipalities",
      services: ["Public Works", "Public Safety", "Administration", "Community Services"]
    },
    {
      name: "Public Utilities",
      description: "Government-owned utility services",
      services: ["Water", "Electricity", "Gas", "Telecommunications"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Building className="w-4 h-4 mr-2" />
                Government Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Secure, compliant, and innovative technology solutions designed specifically for 
                government agencies and public sector organizations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government-Focused Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Technology solutions that meet the unique requirements of government organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meeting the highest standards of government security and compliance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {compliance.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                    <item.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Sectors Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Serving All Government Sectors
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions across federal, state, and local government
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{sector.name}</h3>
                  <p className="text-gray-300 mb-6">{sector.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {sector.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Government Technology?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our government solutions can improve efficiency, security, and citizen services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="border border-gray-600 hover:border-green-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
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

export default GovernmentSolutionsPage;
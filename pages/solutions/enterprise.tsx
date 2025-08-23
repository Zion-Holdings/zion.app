import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Shield, Users, Globe, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap,
  Cloud, Database, Lock, BarChart3
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Cloud,
      title: "Enterprise Cloud Infrastructure",
      description: "Scalable, secure cloud solutions for large organizations",
      features: ["Multi-cloud management", "Hybrid cloud solutions", "Cloud security", "Cost optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Comprehensive security solutions meeting enterprise standards",
      features: ["Zero-trust architecture", "SOC2 compliance", "Threat detection", "Data protection"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Enterprise Data Management",
      description: "Advanced data solutions for enterprise-scale operations",
      features: ["Data governance", "Big data analytics", "Data quality", "Master data management"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Enterprise AI & Automation",
      description: "AI-powered solutions for enterprise efficiency",
      features: ["Process automation", "AI analytics", "Machine learning", "Intelligent workflows"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Solutions that grow with your business"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security and compliance"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support"
    },
    {
      icon: Star,
      title: "Expert Team",
      description: "Experienced enterprise specialists"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Building className="w-4 h-4 mr-2" />
                Enterprise Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Enterprise Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your enterprise with cutting-edge technology solutions designed for scale, 
                security, and performance. Built for organizations that demand excellence.
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
                Comprehensive Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are designed to meet the unique challenges of large organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
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
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise solutions that drive real business value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
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
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our enterprise solutions can drive innovation and growth in your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
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

export default EnterpriseSolutionsPage;
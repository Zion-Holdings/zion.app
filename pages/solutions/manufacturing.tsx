import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Users, Shield, Cpu, Database, Globe, Zap, Target, 
  TrendingUp, BarChart3, Lock, Cloud, Server, Network, Settings, Brain,
  Factory, Cog, Wrench, Gauge
} from 'lucide-react';

const ManufacturingSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Manufacturing AI & Machine Learning",
      description: "AI-powered manufacturing optimization with predictive maintenance and quality control",
      icon: <Brain className="w-8 h-8" />,
      features: ["Predictive maintenance", "Quality control automation", "Production optimization", "Supply chain intelligence"],
      href: "/services?category=ai-ml"
    },
    {
      title: "Manufacturing Cybersecurity",
      description: "Industrial-grade security for manufacturing environments",
      icon: <Shield className="w-8 h-8" />,
      features: ["OT security", "Industrial IoT protection", "Compliance automation", "Threat detection"],
      href: "/services?category=security"
    },
    {
      title: "Manufacturing Cloud Infrastructure",
      description: "Cloud solutions designed for manufacturing operations",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Industrial cloud platforms", "Edge computing", "Data integration", "Scalable infrastructure"],
      href: "/services?category=cloud"
    },
    {
      title: "Manufacturing Analytics & BI",
      description: "Real-time manufacturing analytics and business intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Performance analytics", "Predictive insights", "Executive dashboards"],
      href: "/services?category=bi"
    }
  ];

  const benefits = [
    {
      title: "Efficiency",
      description: "Optimize production processes",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: "Quality",
      description: "Improve product quality",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Automation",
      description: "Reduce manual processes",
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: "Insights",
      description: "Data-driven decisions",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Manufacturing Solutions - Zion Tech Group"
      description="Advanced technology solutions for manufacturing. AI, cybersecurity, cloud infrastructure, and analytics designed for the manufacturing sector."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Manufacturing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your manufacturing operations with cutting-edge technology solutions designed for 
                efficiency, quality, and innovation. Built for the future of manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Manufacturing Technology Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for manufacturing operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <Zap className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group for Manufacturing Solutions?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Manufacturing-grade solutions with the innovation and agility of a startup
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our manufacturing technology solutions can drive efficiency and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ManufacturingSolutionsPage;
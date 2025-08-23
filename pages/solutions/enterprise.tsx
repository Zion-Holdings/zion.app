import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Users, Shield, Cpu, Database, Globe, Zap, Target, 
  TrendingUp, BarChart3, Lock, Cloud, Server, Network, Settings, Brain
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Enterprise AI & Machine Learning",
      description: "Scalable AI solutions for large enterprises with advanced machine learning capabilities",
      icon: <Brain className="w-8 h-8" />,
      features: ["Custom AI model development", "Enterprise ML pipelines", "AI governance & compliance", "Scalable AI infrastructure"],
      href: "/services?category=ai-ml"
    },
    {
      title: "Enterprise Cybersecurity",
      description: "Comprehensive security solutions for enterprise environments",
      icon: <Shield className="w-8 h-8" />,
      features: ["Zero-trust architecture", "Advanced threat detection", "Compliance automation", "Security operations center"],
      href: "/services?category=security"
    },
    {
      title: "Enterprise Cloud Infrastructure",
      description: "Robust cloud solutions designed for enterprise scale",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Multi-cloud management", "Enterprise DevOps", "Cost optimization", "High availability"],
      href: "/services?category=cloud"
    },
    {
      title: "Enterprise Business Intelligence",
      description: "Advanced analytics and business intelligence for enterprise decision-making",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time analytics", "Predictive modeling", "Data governance", "Executive dashboards"],
      href: "/services?category=bi"
    }
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "Solutions that grow with your enterprise",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Security",
      description: "Enterprise-grade security and compliance",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Integration",
      description: "Seamless integration with existing systems",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Support",
      description: "24/7 enterprise support and maintenance",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions designed for large-scale organizations. AI, cybersecurity, cloud infrastructure, and business intelligence."
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
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your enterprise with cutting-edge technology solutions designed for scale, 
                security, and innovation. Built for the future, deployed today.
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
              <h2 className="text-4xl font-bold mb-4">Enterprise Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for enterprise-scale organizations
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
              <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enterprise-grade solutions with the innovation and agility of a startup
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
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our enterprise solutions can drive innovation and growth in your organization
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

export default EnterpriseSolutionsPage;
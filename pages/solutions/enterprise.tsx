import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Cloud, 
  Database, 
  Lock, 
  Zap, 
  TrendingUp,
  Globe,
  Cpu,
  Server,
  Network,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';

const EnterpriseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise AI & Machine Learning',
      description: 'Scalable AI solutions designed for large enterprises with complex data requirements.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Custom AI Model Development', 'Enterprise Data Integration', 'Scalable ML Infrastructure', 'AI Governance & Compliance'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Enterprise Cybersecurity',
      description: 'Comprehensive security solutions protecting enterprise assets and data.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Zero Trust Architecture', 'Advanced Threat Detection', 'Compliance Management', 'Security Automation'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Enterprise Cloud Infrastructure',
      description: 'Robust cloud solutions designed for enterprise-scale operations.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-Cloud Management', 'Hybrid Cloud Solutions', 'Cloud Security', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Data Management',
      description: 'Advanced data solutions for enterprise analytics and insights.',
      icon: <Database className="w-8 h-8" />,
      features: ['Big Data Processing', 'Real-time Analytics', 'Data Governance', 'Business Intelligence'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Enterprise DevOps & Automation',
      description: 'Streamlined development and deployment processes for enterprise teams.',
      icon: <Zap className="w-8 h-8" />,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Automated Testing'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Enterprise Digital Transformation',
      description: 'Comprehensive digital transformation strategies for modern enterprises.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Legacy System Modernization', 'Process Automation', 'Digital Strategy', 'Change Management'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    'Scalable solutions for enterprise growth',
    '24/7 enterprise support and monitoring',
    'Compliance with industry standards',
    'Custom integration capabilities',
    'Advanced security and data protection',
    'Performance optimization and monitoring'
  ];

  return (
    <Layout>
      <SEO 
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise technology solutions designed for large-scale operations, including AI, cybersecurity, cloud infrastructure, and digital transformation."
        keywords={["enterprise solutions", "enterprise technology", "enterprise AI", "enterprise cybersecurity", "enterprise cloud", "digital transformation"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your enterprise with cutting-edge technology solutions designed for scale, 
                security, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are designed to meet the complex challenges of modern businesses, 
                providing scalable, secure, and innovative technology platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise-grade solutions with the innovation and agility of a startup.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our enterprise solutions can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Download Brochure
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
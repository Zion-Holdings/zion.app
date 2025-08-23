import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building, Users, Shield, Database, Cloud, Brain, Atom, Rocket, 
  Target, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Globe
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const enterpriseSolutions = [
    {
      title: 'AI-Powered Enterprise Operations',
      description: 'Transform your enterprise with autonomous AI systems that optimize every aspect of your business operations.',
      features: ['Intelligent Process Automation', 'Predictive Analytics', 'Real-time Decision Making', 'Scalable AI Infrastructure'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      href: '/ai-autonomous-business-intelligence-2045'
    },
    {
      title: 'Quantum-Secure Infrastructure',
      description: 'Future-proof your enterprise with quantum-resistant security and next-generation infrastructure solutions.',
      features: ['Quantum Encryption', 'Zero-Trust Architecture', 'Advanced Threat Detection', 'Compliance Automation'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      href: '/quantum-cybersecurity-platform-2045'
    },
    {
      title: 'Autonomous DevOps Platform',
      description: 'Streamline your development and operations with AI-powered automation and intelligent orchestration.',
      features: ['Continuous Integration/Deployment', 'Infrastructure as Code', 'Performance Monitoring', 'Incident Response'],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      href: '/autonomous-devops-platform-2045'
    },
    {
      title: 'Enterprise Data Intelligence',
      description: 'Unlock the full potential of your data with advanced analytics, AI insights, and autonomous data management.',
      features: ['Big Data Analytics', 'AI-Powered Insights', 'Data Governance', 'Real-time Processing'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      href: '/ai-autonomous-business-intelligence-2045'
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Leverage quantum computing power for complex enterprise problems and advanced simulations.',
      features: ['Quantum Algorithms', 'Hybrid Computing', 'Optimization Problems', 'Financial Modeling'],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      href: '/quantum-ai-hybrid-computing-platform-2045'
    },
    {
      title: 'Space Technology Integration',
      description: 'Integrate cutting-edge space technology solutions for enterprise applications and innovation.',
      features: ['Satellite Communications', 'Space Data Analytics', 'Orbital Computing', 'Resource Intelligence'],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      href: '/space-resource-intelligence-platform-2045'
    }
  ];

  const enterpriseBenefits = [
    {
      title: 'Scalability',
      description: 'Our solutions scale with your business, from startup to enterprise, ensuring growth without compromise.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security with quantum-resistant encryption and advanced threat protection.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock AI-powered support and human expertise when you need it most.',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance frameworks for SOC2, GDPR, HIPAA, and industry-specific regulations.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'AI-powered trading, risk management, and compliance automation for banks and fintech companies.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Healthcare',
      description: 'Advanced diagnostics, patient care automation, and secure health data management solutions.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Manufacturing',
      description: 'Smart factory automation, predictive maintenance, and supply chain optimization.',
      icon: <Building className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Retail & E-commerce',
      description: 'AI-powered customer insights, inventory optimization, and personalized shopping experiences.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Transform your enterprise with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions designed for large-scale business operations."
      keywords="enterprise solutions, enterprise technology, AI enterprise, quantum computing enterprise, autonomous business, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Revolutionary technology solutions designed for enterprise-scale operations, 
                powered by AI consciousness and quantum computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Enterprise Demo
                </Link>
                <Link
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200 hover:scale-105"
                >
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise-Grade Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform enterprise operations 
                and drive business innovation at scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={solution.href} className="block">
                    <div className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {solution.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enterprise-grade solutions with the innovation and reliability your business demands.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored technology solutions designed for your specific industry challenges and opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join leading enterprises worldwide who are already leveraging Zion Tech Group's 
                revolutionary technology solutions to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Schedule Enterprise Consultation
                </Link>
                <Link
                  href="/quote"
                  className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200 hover:scale-105"
                >
                  Get Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnterpriseSolutionsPage;
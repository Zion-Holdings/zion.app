import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Cloud, 
  Database, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Rocket,
  Zap,
  Brain,
  Target,
  BarChart3
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const EnterpriseSolutionsPage: React.FC = () => {
  const enterpriseSolutions = [
    {
      title: 'Enterprise AI Platform',
      description: 'Scalable AI solutions for large enterprises with advanced machine learning capabilities',
      icon: <Brain className="w-8 h-8" />,
      features: ['Custom ML Models', 'Enterprise Security', 'Scalable Infrastructure', '24/7 Support'],
      href: '/services/enterprise-ai-platform',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Enterprise Cloud Infrastructure',
      description: 'Robust cloud solutions designed for enterprise-scale operations',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-Cloud Strategy', 'Enterprise Security', 'Compliance Ready', 'Global CDN'],
      href: '/services/enterprise-cloud-infrastructure',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Cybersecurity',
      description: 'Comprehensive security solutions for enterprise environments',
      icon: <Shield className="w-8 h-8" />,
      features: ['Zero Trust Architecture', 'Threat Intelligence', 'Compliance Management', 'Incident Response'],
      href: '/services/enterprise-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Enterprise Data Management',
      description: 'Advanced data solutions for enterprise data governance and analytics',
      icon: <Database className="w-8 h-8" />,
      features: ['Data Governance', 'Real-time Analytics', 'Compliance Tools', 'Data Security'],
      href: '/services/enterprise-data-management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Enterprise Process Automation',
      description: 'Intelligent automation solutions for enterprise workflows',
      icon: <Zap className="w-8 h-8" />,
      features: ['RPA Implementation', 'Workflow Automation', 'Integration APIs', 'Process Analytics'],
      href: '/services/enterprise-process-automation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Enterprise Business Intelligence',
      description: 'Advanced analytics and reporting for enterprise decision making',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Custom Dashboards', 'Real-time Reports', 'Data Visualization', 'KPI Tracking'],
      href: '/services/enterprise-business-intelligence',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'Scalability',
      description: 'Built to handle enterprise-scale operations and growth',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with compliance certifications',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Support',
      description: '24/7 dedicated support with enterprise SLAs',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Integration',
      description: 'Seamless integration with existing enterprise systems',
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Enterprise Clients', value: '500+', icon: <Building className="w-6 h-6" /> },
    { label: 'Global Presence', value: '50+ Countries', icon: <Globe className="w-6 h-6" /> },
    { label: 'Uptime Guarantee', value: '99.99%', icon: <Star className="w-6 h-6" /> },
    { label: 'Support Response', value: '< 15 min', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Enterprise Solutions - Zion Tech Group | Large-Scale Enterprise Technology Solutions" 
          description="Transform your enterprise with Zion Tech Group's comprehensive enterprise solutions including AI platforms, cloud infrastructure, cybersecurity, and data management." 
          canonical="https://ziontechgroup.com/solutions/enterprise/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Enterprise Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your enterprise with our cutting-edge technology solutions designed for large-scale operations, security, and growth.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Enterprise Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are built with scalability, security, and reliability in mind, ensuring your business can grow without limitations.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enterprise Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise Solutions Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of enterprise-grade technology solutions designed to drive innovation and growth.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className={`flex justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{solution.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={solution.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our enterprise solutions can drive innovation and growth in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default EnterpriseSolutionsPage;
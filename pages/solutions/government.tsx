import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Building, 
  Users, 
  Lock, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Cloud,
  Database,
  Brain,
  Target,
  BarChart3
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const GovernmentSolutionsPage: React.FC = () => {
  const governmentSolutions = [
    {
      title: 'Government Cybersecurity',
      description: 'Comprehensive security solutions meeting government compliance requirements',
      icon: <Shield className="w-8 h-8" />,
      features: ['FedRAMP Compliance', 'Zero Trust Architecture', 'Threat Intelligence', 'Incident Response'],
      href: '/services/government-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Government Cloud Infrastructure',
      description: 'Secure cloud solutions designed for government operations',
      icon: <Cloud className="w-8 h-8" />,
      features: ['FedRAMP Authorized', 'Multi-Region Deployment', 'Data Sovereignty', 'Compliance Monitoring'],
      href: '/services/government-cloud-infrastructure',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Government Data Management',
      description: 'Secure data governance and analytics for government agencies',
      icon: <Database className="w-8 h-8" />,
      features: ['Data Classification', 'Access Controls', 'Audit Logging', 'Compliance Reporting'],
      href: '/services/government-data-management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Government AI Solutions',
      description: 'AI-powered solutions for government efficiency and citizen services',
      icon: <Brain className="w-8 h-8" />,
      features: ['Ethical AI', 'Transparency', 'Bias Detection', 'Explainable AI'],
      href: '/services/government-ai-solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Government Process Automation',
      description: 'Intelligent automation for government workflows and citizen services',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Workflow Automation', 'Document Processing', 'Citizen Portal', 'Service Optimization'],
      href: '/services/government-process-automation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Government Analytics Platform',
      description: 'Data-driven insights for government decision making',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Performance Metrics', 'Citizen Satisfaction', 'Resource Optimization', 'Policy Impact'],
      href: '/services/government-analytics-platform',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const governmentFeatures = [
    {
      title: 'Compliance Ready',
      description: 'Built to meet government security and compliance requirements',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security with government-level protection',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Scalable',
      description: 'Solutions that scale with government agency needs',
      icon: <Building className="w-6 h-6" />
    },
    {
      title: 'Citizen Focused',
      description: 'Designed to improve citizen services and government efficiency',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Government Agencies', value: '100+', icon: <Building className="w-6 h-6" /> },
    { label: 'Compliance Standards', value: '25+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Security Certifications', value: '15+', icon: <Shield className="w-6 h-6" /> },
    { label: 'Citizens Served', value: '10M+', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Government Solutions - Zion Tech Group | Secure Technology Solutions for Government Agencies" 
          description="Transform government operations with Zion Tech Group's secure, compliant technology solutions including cybersecurity, cloud infrastructure, AI, and process automation." 
          canonical="https://ziontechgroup.com/solutions/government/" 
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
              Government Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform government operations with our secure, compliant technology solutions designed to improve citizen services and government efficiency.
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

        {/* Government Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Government Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our government solutions are built with security, compliance, and citizen service in mind, ensuring your agency can operate efficiently and securely.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {governmentFeatures.map((feature, index) => (
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

        {/* Government Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Government Solutions Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of government-grade technology solutions designed to enhance security, compliance, and citizen services.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {governmentSolutions.map((solution, index) => (
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Government Operations?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our government solutions can enhance security, compliance, and citizen services in your agency.
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

export default GovernmentSolutionsPage;
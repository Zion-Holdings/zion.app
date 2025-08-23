import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  Database, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Cloud,
  BarChart3,
  Target,
  Zap,
  FileText
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const HealthcareSolutionsPage: React.FC = () => {
  const healthcareSolutions = [
    {
      title: 'Healthcare AI Platform',
      description: 'AI-powered solutions for diagnosis, treatment planning, and patient care',
      icon: <Brain className="w-8 h-8" />,
      features: ['Diagnostic AI', 'Treatment Planning', 'Patient Monitoring', 'Predictive Analytics'],
      href: '/services/healthcare-ai-platform',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Healthcare Cybersecurity',
      description: 'HIPAA-compliant security solutions for healthcare organizations',
      icon: <Shield className="w-8 h-8" />,
      features: ['HIPAA Compliance', 'Patient Data Protection', 'Threat Detection', 'Incident Response'],
      href: '/services/healthcare-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Healthcare Data Management',
      description: 'Secure patient data management and analytics platform',
      icon: <Database className="w-8 h-8" />,
      features: ['Patient Records', 'Data Analytics', 'Compliance Tools', 'Interoperability'],
      href: '/services/healthcare-data-management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Healthcare Process Automation',
      description: 'Automate healthcare workflows for improved efficiency',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Workflow Automation', 'Appointment Scheduling', 'Billing Automation', 'Patient Communication'],
      href: '/services/healthcare-process-automation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Healthcare Analytics Platform',
      description: 'Data-driven insights for healthcare decision making',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Patient Outcomes', 'Resource Optimization', 'Quality Metrics', 'Performance Tracking'],
      href: '/services/healthcare-analytics-platform',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Telehealth Platform',
      description: 'Secure telehealth solutions for remote patient care',
      icon: <Users className="w-8 h-8" />,
      features: ['Video Consultations', 'Secure Messaging', 'Patient Portal', 'Mobile Access'],
      href: '/services/telehealth-platform',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const healthcareFeatures = [
    {
      title: 'HIPAA Compliant',
      description: 'Built to meet healthcare security and privacy requirements',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Patient Focused',
      description: 'Designed to improve patient care and outcomes',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Secure',
      description: 'Enterprise-grade security for sensitive healthcare data',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Interoperable',
      description: 'Seamless integration with existing healthcare systems',
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Healthcare Organizations', value: '500+', icon: <Heart className="w-6 h-6" /> },
    { label: 'Patients Served', value: '2M+', icon: <Users className="w-6 h-6" /> },
    { label: 'Compliance Standards', value: '20+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Uptime Guarantee', value: '99.99%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Healthcare Solutions - Zion Tech Group | AI-Powered Healthcare Technology Solutions" 
          description="Transform healthcare delivery with Zion Tech Group's AI-powered, HIPAA-compliant technology solutions including AI platforms, cybersecurity, data management, and telehealth." 
          canonical="https://ziontechgroup.com/solutions/healthcare/" 
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
              Healthcare Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform healthcare delivery with our AI-powered, HIPAA-compliant technology solutions designed to improve patient care and outcomes.
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

        {/* Healthcare Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Healthcare Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our healthcare solutions are built with patient care, security, and compliance in mind, ensuring your organization can deliver better healthcare outcomes.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {healthcareFeatures.map((feature, index) => (
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

        {/* Healthcare Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Healthcare Solutions Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of healthcare technology solutions designed to enhance patient care, improve outcomes, and streamline operations.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {healthcareSolutions.map((solution, index) => (
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Healthcare Delivery?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our healthcare solutions can improve patient care, enhance outcomes, and streamline your operations.
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

export default HealthcareSolutionsPage;
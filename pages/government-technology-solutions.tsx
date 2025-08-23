import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Database, 
  Cloud, 
  Activity, 
  Users,
  Smartphone,
  Monitor,
  Zap,
  Target,
  BarChart3,
  Building2,
  Globe,
  FileText,
  Cpu,
  Network
} from 'lucide-react';
import Link from 'next/link';

const governmentSolutions = [
  {
    title: 'Cybersecurity & Compliance',
    description: 'FedRAMP, FISMA, and CMMC compliant security solutions',
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    features: [
      'Zero Trust security architecture',
      'Threat intelligence platforms',
      'Incident response automation',
      'Compliance monitoring tools'
    ],
    href: '/zero-trust-security-platform'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Secure, scalable cloud solutions for government agencies',
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    features: [
      'Multi-cloud management',
      'Hybrid cloud solutions',
      'Disaster recovery',
      'Performance optimization'
    ],
    href: '/quantum-secure-cloud-infrastructure'
  },
  {
    title: 'Data Analytics & AI',
    description: 'Advanced analytics and AI solutions for government intelligence',
    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    features: [
      'Predictive analytics',
      'Machine learning models',
      'Data visualization',
      'Real-time insights'
    ],
    href: '/ai-business-intelligence'
  },
  {
    title: 'Digital Transformation',
    description: 'Modernization of legacy systems and digital services',
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    features: [
      'Legacy system migration',
      'API development',
      'Microservices architecture',
      'DevOps automation'
    ],
    href: '/digital-transformation-services'
  },
  {
    title: 'Citizen Services Platform',
    description: 'Enhanced citizen engagement and service delivery',
    icon: <Users className="w-8 h-8 text-orange-400" />,
    features: [
      'Citizen portals',
      'Mobile applications',
      'Service automation',
      'Feedback systems'
    ],
    href: '/citizen-services-platform'
  },
  {
    title: 'Network & Infrastructure',
    description: 'Secure networking and infrastructure solutions',
    icon: <Network className="w-8 h-8 text-red-400" />,
    features: [
      '5G network solutions',
      'SD-WAN implementation',
      'Network security',
      'Performance monitoring'
    ],
    href: '/5g-enterprise-solutions'
  }
];

const GovernmentTechnologySolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Government Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Secure, compliant, and innovative technology solutions for government agencies, defense, and public sector organizations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/pricing" 
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Government Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cybersecurity to digital transformation, we provide secure and compliant technology solutions for government agencies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <Zap className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  Learn More
                  <Target className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Government Compliance & Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions meet the highest standards for government security and compliance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'FedRAMP', icon: <Shield className="w-12 h-12 text-blue-400" /> },
                { name: 'FISMA', icon: <Lock className="w-12 h-12 text-green-400" /> },
                { name: 'CMMC', icon: <Database className="w-12 h-12 text-purple-400" /> },
                { name: 'SOC 2', icon: <FileText className="w-12 h-12 text-orange-400" /> }
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Modernize Government?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to transform government technology with secure, compliant, and innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/resources" 
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentTechnologySolutions;
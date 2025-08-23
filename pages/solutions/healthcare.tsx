import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Shield, 
  Database, 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  CheckCircle, 
  Star,
  Lock,
  BarChart3,
  Globe,
  Phone,
  Video,
  FileText,
  Activity,
  Microscope
} from 'lucide-react';
import Layout from '../../components/layout/Layout';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Electronic Health Records (EHR)',
      description: 'Modern, secure, and interoperable EHR systems that streamline patient care and improve clinical workflows.',
      icon: FileText,
      features: [
        'HIPAA-compliant data storage',
        'Interoperability standards',
        'Clinical decision support',
        'Patient portal integration',
        'Mobile accessibility',
        'Advanced reporting'
      ],
      benefits: ['Improved patient care', 'Reduced errors', 'Better compliance', 'Enhanced efficiency']
    },
    {
      title: 'Telemedicine Platforms',
      description: 'Comprehensive virtual care solutions that connect patients with healthcare providers remotely.',
      icon: Video,
      features: [
        'Secure video consultations',
        'Remote monitoring',
        'Prescription management',
        'Insurance verification',
        'Multi-platform support',
        'Analytics dashboard'
      ],
      benefits: ['Increased access', 'Cost reduction', 'Patient convenience', 'Provider efficiency']
    },
    {
      title: 'AI-Powered Diagnostics',
      description: 'Advanced AI algorithms that assist healthcare providers in diagnosis and treatment planning.',
      icon: Brain,
      features: [
        'Medical image analysis',
        'Predictive diagnostics',
        'Natural language processing',
        'Clinical decision support',
        'Risk assessment',
        'Treatment recommendations'
      ],
      benefits: ['Faster diagnosis', 'Improved accuracy', 'Better outcomes', 'Cost savings']
    },
    {
      title: 'Healthcare IoT & Wearables',
      description: 'Connected devices and sensors that monitor patient health in real-time.',
      icon: Activity,
      features: [
        'Remote patient monitoring',
        'Vital signs tracking',
        'Medication adherence',
        'Fall detection',
        'Sleep monitoring',
        'Data integration'
      ],
      benefits: ['Proactive care', 'Early intervention', 'Patient engagement', 'Reduced hospitalizations']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Intelligent supply chain solutions that ensure critical medical supplies are always available.',
      icon: Globe,
      features: [
        'Inventory management',
        'Demand forecasting',
        'Supplier management',
        'Quality control',
        'Cost optimization',
        'Compliance tracking'
      ],
      benefits: ['Reduced waste', 'Cost savings', 'Better availability', 'Improved quality']
    },
    {
      title: 'Healthcare Analytics',
      description: 'Data-driven insights that improve patient outcomes and operational efficiency.',
      icon: BarChart3,
      features: [
        'Population health analytics',
        'Clinical performance metrics',
        'Financial analytics',
        'Patient satisfaction',
        'Quality indicators',
        'Predictive modeling'
      ],
      benefits: ['Better decisions', 'Improved outcomes', 'Cost optimization', 'Quality improvement']
    }
  ];

  const compliance = [
    {
      title: 'HIPAA Compliance',
      description: 'Full compliance with Health Insurance Portability and Accountability Act requirements.',
      icon: Lock,
      features: ['Data encryption', 'Access controls', 'Audit trails', 'Breach notification']
    },
    {
      title: 'FDA Regulations',
      description: 'Compliance with Food and Drug Administration regulations for medical devices and software.',
      icon: Shield,
      features: ['Software validation', 'Risk management', 'Quality assurance', 'Documentation']
    },
    {
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2 certification ensuring security and availability.',
      icon: CheckCircle,
      features: ['Security controls', 'Availability monitoring', 'Processing integrity', 'Confidentiality']
    }
  ];

  const useCases = [
    {
      title: 'Hospitals & Health Systems',
      description: 'Comprehensive solutions for large healthcare organizations.',
      icon: Users,
      solutions: ['EHR integration', 'Clinical workflows', 'Financial management', 'Patient engagement']
    },
    {
      title: 'Specialty Clinics',
      description: 'Tailored solutions for specialized medical practices.',
      icon: Microscope,
      solutions: ['Specialty-specific workflows', 'Patient management', 'Billing optimization', 'Quality metrics']
    },
    {
      title: 'Telehealth Providers',
      description: 'Complete virtual care platforms for remote healthcare delivery.',
      icon: Phone,
      solutions: ['Video consultations', 'Remote monitoring', 'Patient portals', 'Care coordination']
    },
    {
      title: 'Medical Device Companies',
      description: 'IoT and connectivity solutions for medical device manufacturers.',
      icon: Cpu,
      solutions: ['Device connectivity', 'Data analytics', 'Remote monitoring', 'Compliance support']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Healthcare{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transforming healthcare delivery with innovative technology solutions that improve 
                patient outcomes and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Healthcare Quote
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Healthcare Technology Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our healthcare solutions are designed to address the unique challenges of modern 
                healthcare delivery while ensuring compliance and security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Compliance & Security
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our healthcare solutions meet the highest standards of compliance and security 
                to protect patient data and ensure regulatory adherence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {compliance.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Healthcare Use Cases
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our solutions are designed to meet the diverse needs of healthcare organizations 
                across different specialties and sizes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Solutions:</h4>
                    <div className="space-y-2">
                      {useCase.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our healthcare technology solutions can improve patient care, 
                enhance operational efficiency, and ensure compliance for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Healthcare Consultation
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Healthcare Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareSolutionsPage;
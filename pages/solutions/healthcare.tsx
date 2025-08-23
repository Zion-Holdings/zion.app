import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Brain, 
  Shield, 
  Database, 
  Cpu, 
  Zap, 
  Lock, 
  Globe, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  BarChart3,
  Server,
  Network,
  Smartphone,
  Code,
  Brain as BrainIcon,
  Atom,
  Rocket,
  Activity,
  Stethoscope,
  Pill,
  Microscope,
  Eye,
  Brain as BrainIcon2
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Diagnostics',
      description: 'Revolutionary diagnostic tools that enhance accuracy and speed of medical assessments',
      icon: BrainIcon,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Medical imaging analysis',
        'Symptom pattern recognition',
        'Predictive health analytics',
        'Early disease detection',
        'Treatment recommendation systems',
        'Patient outcome prediction'
      ],
      benefits: [
        '95% diagnostic accuracy improvement',
        '60% faster diagnosis time',
        'Reduced misdiagnosis rates',
        'Personalized treatment plans'
      ]
    },
    {
      title: 'Quantum Medical Computing',
      description: 'Leverage quantum computing for complex medical research and drug discovery',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Drug molecule simulation',
        'Protein folding analysis',
        'Genetic sequencing optimization',
        'Clinical trial optimization',
        'Pharmacokinetic modeling',
        'Biomarker discovery'
      ],
      benefits: [
        '1000x faster drug discovery',
        'Accelerated clinical research',
        'Precision medicine advancement',
        'Breakthrough treatment development'
      ]
    },
    {
      title: 'Telemedicine & Remote Care',
      description: 'Advanced telehealth platforms for accessible and efficient healthcare delivery',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'High-definition video consultations',
        'Remote patient monitoring',
        'Digital health records',
        'Prescription management',
        'Health tracking integration',
        'Emergency response systems'
      ],
      benefits: [
        '24/7 healthcare access',
        'Reduced healthcare costs',
        'Improved patient engagement',
        'Better rural healthcare access'
      ]
    },
    {
      title: 'Healthcare Cybersecurity',
      description: 'Protect sensitive patient data with advanced security solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'HIPAA compliance automation',
        'Patient data encryption',
        'Threat detection systems',
        'Access control management',
        'Audit trail systems',
        'Incident response automation'
      ],
      benefits: [
        '100% HIPAA compliance',
        'Zero data breach guarantee',
        'Automated security monitoring',
        'Reduced compliance costs'
      ]
    },
    {
      title: 'Predictive Health Analytics',
      description: 'Data-driven insights for proactive healthcare and population health management',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Population health analytics',
        'Risk stratification models',
        'Preventive care optimization',
        'Resource allocation planning',
        'Outcome prediction models',
        'Quality improvement metrics'
      ],
      benefits: [
        '30% reduction in readmissions',
        'Improved population health outcomes',
        'Optimized resource utilization',
        'Enhanced preventive care'
      ]
    },
    {
      title: 'Medical IoT & Wearables',
      description: 'Connected devices for continuous health monitoring and data collection',
      icon: Activity,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Continuous vital monitoring',
        'Smart medical devices',
        'Wearable health trackers',
        'Remote patient monitoring',
        'Real-time alert systems',
        'Data integration platforms'
      ],
      benefits: [
        'Continuous health monitoring',
        'Early warning detection',
        'Improved patient outcomes',
        'Reduced hospital visits'
      ]
    }
  ];

  const specialties = [
    {
      name: 'Cardiology',
      icon: Heart,
      solutions: ['Heart disease prediction', 'ECG analysis', 'Cardiac imaging', 'Treatment optimization'],
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Neurology',
      icon: BrainIcon2,
      solutions: ['Brain mapping', 'Neurological disorders', 'Cognitive assessment', 'Treatment planning'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Oncology',
      icon: Microscope,
      solutions: ['Cancer detection', 'Treatment planning', 'Drug discovery', 'Patient monitoring'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Radiology',
      icon: Eye,
      solutions: ['Medical imaging', 'AI analysis', 'Diagnostic accuracy', 'Report generation'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const compliance = [
    {
      title: 'HIPAA Compliance',
      description: 'Full compliance with Health Insurance Portability and Accountability Act',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'FDA Approval',
      description: 'Regulatory compliance for medical devices and software',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ISO 13485',
      description: 'Quality management system for medical devices',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'GDPR Compliance',
      description: 'European data protection regulation compliance',
      icon: Lock,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Healthcare Technology Solutions - Zion Tech Group"
        description="Transform healthcare delivery with cutting-edge technology solutions including AI diagnostics, quantum computing, telemedicine, and advanced cybersecurity."
        keywords={["healthcare technology", "AI diagnostics", "telemedicine", "quantum computing", "healthcare cybersecurity", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Revolutionizing healthcare delivery with cutting-edge technology that improves patient outcomes, 
                enhances diagnostic accuracy, and transforms the way healthcare is delivered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="#solutions"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our healthcare technology solutions combine artificial intelligence, quantum computing, 
                and advanced analytics to deliver better patient care and outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Healthcare Benefits
                      </h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="/contact"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Specialties */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Medical Specialties
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Specialized solutions designed for specific medical fields and specialties.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${specialty.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <specialty.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {specialty.name}
                    </h3>
                    
                    {/* Solutions */}
                    <div className="space-y-3">
                      {specialty.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
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

        {/* Compliance & Security */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Compliance & Security
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our healthcare solutions meet the highest standards of regulatory compliance and data security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {compliance.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Let's discuss how our healthcare technology solutions can improve patient care, 
                enhance diagnostic accuracy, and transform your healthcare delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  View All Services
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
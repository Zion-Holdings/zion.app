import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Globe,
  Code,
  FileText,
  BarChart3,
  Eye,
  Lock,
  Zap
} from 'lucide-react';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Healthcare AI & Machine Learning',
      description: 'AI-powered solutions for diagnosis, treatment, and patient care',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Medical image analysis',
        'Predictive diagnostics',
        'Treatment optimization',
        'Patient outcome prediction'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Healthcare Cybersecurity',
      description: 'HIPAA-compliant security solutions for healthcare organizations',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'HIPAA compliance',
        'Patient data protection',
        'Threat detection',
        'Security training'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Healthcare Cloud Infrastructure',
      description: 'Secure cloud solutions designed for healthcare workloads',
      icon: <Cloud className="w-8 h-8" />,
      features: [
        'HIPAA-compliant cloud',
        'Data backup & recovery',
        'Scalable infrastructure',
        'Cost optimization'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Healthcare Data Management',
      description: 'Comprehensive data solutions for healthcare organizations',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Electronic Health Records',
        'Data interoperability',
        'Real-time analytics',
        'Data quality assurance'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Telemedicine Platforms',
      description: 'Modern telemedicine solutions for remote patient care',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Video consultations',
        'Patient portals',
        'Mobile applications',
        'Integration capabilities'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Healthcare Process Automation',
      description: 'Automation solutions to improve healthcare efficiency',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Appointment scheduling',
        'Billing automation',
        'Inventory management',
        'Patient communication'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const compliance = [
    'HIPAA',
    'HITECH',
    'SOC 2 Type II',
    'ISO 27001',
    'NIST Cybersecurity Framework',
    'FDA Compliance'
  ];

  const benefits = [
    'HIPAA compliance expertise',
    'Healthcare industry experience',
    '24/7 support',
    'Proven healthcare track record',
    'Scalable solutions',
    'Cost-effective implementation'
  ];

  const caseStudies = [
    {
      organization: 'Regional Medical Center',
      project: 'AI Diagnostic Platform',
      result: 'Improved diagnosis accuracy by 25%',
      description: 'Implemented AI-powered medical image analysis system'
    },
    {
      organization: 'Healthcare Network',
      project: 'Telemedicine Platform',
      result: 'Increased patient access by 300%',
      description: 'Modern telemedicine solution for remote patient care'
    },
    {
      organization: 'Specialty Clinic',
      project: 'Process Automation',
      result: 'Reduced administrative overhead by 40%',
      description: 'Automated appointment scheduling and patient communication'
    }
  ];

  return (
    <Layout 
      title="Healthcare Solutions - Zion Tech Group"
      description="HIPAA-compliant technology solutions for healthcare organizations. AI diagnostics, cybersecurity, cloud infrastructure, and telemedicine platforms."
      keywords="healthcare solutions, healthcare AI, healthcare cybersecurity, HIPAA, telemedicine, healthcare cloud, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-teal-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-16 h-16 text-green-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                  Healthcare Solutions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                HIPAA-compliant technology solutions designed specifically for healthcare organizations. 
                From AI diagnostics to telemedicine, we help improve patient care and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Healthcare Inquiry
                </button>
                <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  HIPAA Compliance Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare-Focused Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our healthcare solutions are built with HIPAA compliance, security, and patient care in mind. 
                Each solution is designed to improve healthcare delivery and operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest levels of healthcare compliance and security certifications 
                to ensure patient data remains protected and your organization stays compliant.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {compliance.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{cert}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Healthcare Organizations Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the unique challenges of healthcare technology and deliver 
                solutions that improve patient care while maintaining compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how healthcare organizations have improved patient care with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{story.organization}</h3>
                  <p className="text-green-400 mb-2">{story.project}</p>
                  <p className="text-2xl font-bold text-green-400 mb-4">{story.result}</p>
                  <p className="text-gray-300">{story.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Healthcare Organization?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our healthcare solutions can improve patient care, 
                operational efficiency, and compliance while reducing costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Healthcare Team
                </button>
                <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Download Healthcare Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareSolutionsPage;
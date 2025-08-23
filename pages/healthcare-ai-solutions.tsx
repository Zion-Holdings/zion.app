import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Heart, Stethoscope, Microscope, Shield, 
  Users, TrendingUp, CheckCircle, ArrowRight, 
  Activity, Zap, Target, Star, Clock, Globe
} from 'lucide-react';
import Link from 'next/link';

const HealthcareAISolutions: React.FC = () => {
  const solutions = [
    {
      id: 'diagnostic-ai',
      title: 'AI-Powered Diagnostic Systems',
      description: 'Advanced diagnostic tools that analyze medical images, lab results, and patient data to provide accurate diagnoses.',
      icon: <Stethoscope className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Medical Image Analysis (X-rays, MRIs, CT scans)',
        'Lab Result Interpretation',
        'Symptom Analysis & Pattern Recognition',
        'Early Disease Detection',
        'Diagnostic Accuracy Validation',
        'Real-time Decision Support'
      ],
      benefits: [
        '95% accuracy in diagnostic predictions',
        '60% faster diagnosis times',
        'Reduced misdiagnosis rates',
        'Improved patient outcomes'
      ]
    },
    {
      id: 'treatment-planning',
      title: 'Personalized Treatment Planning',
      description: 'AI-driven treatment recommendations based on patient history, genetics, and current medical research.',
      icon: <Target className="w-12 h-12" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Patient History Analysis',
        'Genetic Profile Integration',
        'Treatment Efficacy Prediction',
        'Drug Interaction Checking',
        'Personalized Dosage Calculation',
        'Treatment Outcome Forecasting'
      ],
      benefits: [
        '30% improvement in treatment success rates',
        'Reduced adverse drug reactions',
        'Optimized medication dosages',
        'Better patient compliance'
      ]
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Health Analytics',
      description: 'Machine learning models that predict health risks and disease progression before symptoms appear.',
      icon: <TrendingUp className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Risk Factor Analysis',
        'Disease Progression Modeling',
        'Population Health Insights',
        'Preventive Care Recommendations',
        'Epidemiological Pattern Recognition',
        'Health Trend Forecasting'
      ],
      benefits: [
        'Early intervention opportunities',
        'Preventive care optimization',
        'Population health management',
        'Cost reduction through prevention'
      ]
    },
    {
      id: 'patient-monitoring',
      title: 'Intelligent Patient Monitoring',
      description: 'Real-time monitoring systems that track patient vital signs and alert healthcare providers to potential issues.',
      icon: <Activity className="w-12 h-12" />,
      color: 'from-orange-500 to-red-500',
      features: [
        'Real-time Vital Sign Monitoring',
        'Predictive Alert Systems',
        'Remote Patient Monitoring',
        'Fall Detection & Prevention',
        'Medication Adherence Tracking',
        'Emergency Response Automation'
      ],
      benefits: [
        '24/7 patient surveillance',
        'Early warning detection',
        'Reduced hospital readmissions',
        'Improved patient safety'
      ]
    },
    {
      id: 'drug-discovery',
      title: 'AI-Enhanced Drug Discovery',
      description: 'Accelerated drug development through AI-powered molecular modeling and clinical trial optimization.',
      icon: <Microscope className="w-12 h-12" />,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Molecular Structure Analysis',
        'Drug-Target Interaction Modeling',
        'Clinical Trial Optimization',
        'Side Effect Prediction',
        'Drug Repurposing Analysis',
        'Manufacturing Process Optimization'
      ],
      benefits: [
        '50% faster drug development',
        'Reduced development costs',
        'Improved drug safety profiles',
        'Better target identification'
      ]
    },
    {
      id: 'healthcare-automation',
      title: 'Healthcare Process Automation',
      description: 'Streamlined healthcare operations through intelligent automation of administrative and clinical processes.',
      icon: <Zap className="w-12 h-12" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Appointment Scheduling Optimization',
        'Medical Record Management',
        'Billing & Claims Processing',
        'Inventory Management',
        'Staff Scheduling',
        'Quality Assurance Automation'
      ],
      benefits: [
        '40% reduction in administrative overhead',
        'Improved operational efficiency',
        'Enhanced patient experience',
        'Cost savings through automation'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Hospital Systems',
      description: 'Comprehensive AI solutions for large hospital networks, improving patient care and operational efficiency.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Primary Care Clinics',
      description: 'AI-powered diagnostic tools and patient management systems for primary care providers.',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Specialty Practices',
      description: 'Specialized AI solutions for cardiology, oncology, radiology, and other medical specialties.',
      icon: <Stethoscope className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Research Institutions',
      description: 'Advanced AI tools for medical research, clinical trials, and breakthrough discoveries.',
      icon: <Microscope className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Pharmaceutical Companies',
      description: 'AI-powered drug discovery and development platforms for pharmaceutical research.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Health Insurance',
      description: 'Intelligent claims processing and fraud detection systems for health insurance providers.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { number: '95%', label: 'Diagnostic Accuracy', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '60%', label: 'Faster Diagnosis', icon: <Clock className="w-8 h-8" /> },
    { number: '30%', label: 'Improved Outcomes', icon: <TrendingUp className="w-8 h-8" /> },
    { number: '40%', label: 'Cost Reduction', icon: <Star className="w-8 h-8" /> }
  ];

  const complianceFeatures = [
    {
      title: 'HIPAA Compliance',
      description: 'Full compliance with Health Insurance Portability and Accountability Act requirements.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'FDA Approval',
      description: 'Solutions designed to meet FDA regulatory requirements for medical devices and software.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'GDPR Compliance',
      description: 'European data protection compliance for international healthcare operations.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'SOC 2 Type II',
      description: 'Security and availability controls certified by independent auditors.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Healthcare AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionizing healthcare delivery with artificial intelligence. 
              From diagnosis to treatment, we're making healthcare smarter, faster, and more effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#solutions" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Solutions
              </Link>
              <Link href="/contact" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Brain className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Heart className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Stethoscope className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions that transform every aspect of healthcare delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Solution ID</div>
                      <div className="text-cyan-400 font-mono text-sm">{solution.id}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed for diverse healthcare environments and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {useCase.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-300 text-sm text-center">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with healthcare-grade security and regulatory compliance in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured approach ensures successful AI implementation in healthcare environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive evaluation of current systems, workflows, and AI readiness
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Design</h3>
              <p className="text-gray-300 text-sm">
                Custom AI solution design tailored to your specific healthcare needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm">
                Phased deployment with comprehensive testing and validation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
              <p className="text-gray-300 text-sm">
                Continuous monitoring, feedback integration, and performance optimization
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations that are already using AI to improve patient care, 
              reduce costs, and enhance operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareAISolutions;
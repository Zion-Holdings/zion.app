import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Clock,
  TrendingUp,
  Activity,
  Pill,
  Stethoscope,
  Microscope
} from 'lucide-react';

export default function HealthcareSolutionsPage() {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Diagnostic Platform',
      description: 'Advanced AI consciousness system for accurate disease diagnosis and treatment recommendations.',
      features: [
        '99.7% diagnostic accuracy',
        'Real-time image analysis',
        'Predictive health insights',
        'Automated report generation'
      ],
      benefits: [
        'Reduce misdiagnosis by 60%',
        'Speed up diagnosis by 3x',
        'Lower healthcare costs by 40%',
        'Improve patient outcomes'
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Predictive Health Analytics',
      description: 'Quantum-enhanced AI platform for predicting health risks and preventive care recommendations.',
      features: [
        'Early disease detection',
        'Risk factor analysis',
        'Personalized prevention plans',
        'Population health insights'
      ],
      benefits: [
        'Prevent 70% of avoidable conditions',
        'Reduce emergency visits by 50%',
        'Improve population health metrics',
        'Enable proactive care models'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Healthcare Security & Compliance',
      description: 'Quantum-secure platform ensuring HIPAA compliance and protecting sensitive patient data.',
      features: [
        'Quantum encryption',
        'Zero-trust architecture',
        'Automated compliance monitoring',
        'Real-time threat detection'
      ],
      benefits: [
        '100% HIPAA compliance',
        'Zero data breaches',
        'Automated audit trails',
        'Reduced compliance costs'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Patient Experience Platform',
      description: 'AI-driven platform enhancing patient engagement and satisfaction through personalized care.',
      features: [
        'Personalized care plans',
        'Virtual health assistants',
        'Smart appointment scheduling',
        'Patient education tools'
      ],
      benefits: [
        'Increase patient satisfaction by 80%',
        'Reduce no-shows by 45%',
        'Improve treatment adherence',
        'Enhance patient outcomes'
      ]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Remote Patient Monitoring',
      description: 'IoT and AI-powered system for continuous health monitoring and early intervention.',
      features: [
        'Real-time vital monitoring',
        'AI alert systems',
        'Mobile health integration',
        'Care team notifications'
      ],
      benefits: [
        'Reduce hospital readmissions by 30%',
        'Enable early intervention',
        'Improve chronic disease management',
        'Lower healthcare costs'
      ]
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Medical Research & Drug Discovery',
      description: 'Quantum AI platform accelerating medical research and pharmaceutical development.',
      features: [
        'Molecular simulation',
        'Drug interaction analysis',
        'Clinical trial optimization',
        'Research data analytics'
      ],
      benefits: [
        'Accelerate drug discovery by 5x',
        'Reduce research costs by 60%',
        'Improve clinical trial success',
        'Enable personalized medicine'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Hospital Systems',
      description: 'Comprehensive AI solutions for large hospital networks and healthcare systems.',
      icon: <Stethoscope className="w-6 h-6" />,
      examples: ['Patient flow optimization', 'Resource allocation', 'Quality improvement', 'Cost reduction']
    },
    {
      title: 'Specialty Clinics',
      description: 'Specialized AI solutions for cardiology, oncology, radiology, and other specialties.',
      icon: <Heart className="w-6 h-6" />,
      examples: ['Specialized diagnostics', 'Treatment planning', 'Outcome tracking', 'Research integration']
    },
    {
      title: 'Primary Care',
      description: 'AI-powered tools for family medicine and general practitioners.',
      icon: <Users className="w-6 h-6" />,
      examples: ['Preventive care', 'Chronic disease management', 'Patient education', 'Care coordination']
    },
    {
      title: 'Research Institutions',
      description: 'Advanced AI and quantum computing for medical research and clinical trials.',
      icon: <Microscope className="w-6 h-6" />,
      examples: ['Drug discovery', 'Clinical research', 'Data analysis', 'Publication support']
    }
  ];

  const successMetrics = [
    {
      metric: '99.7%',
      label: 'Diagnostic Accuracy',
      description: 'AI-powered diagnosis matching or exceeding expert physician accuracy'
    },
    {
      metric: '60%',
      label: 'Reduced Misdiagnosis',
      description: 'Significant reduction in diagnostic errors and missed conditions'
    },
    {
      metric: '3x',
      label: 'Faster Diagnosis',
      description: 'Dramatically reduced time from symptoms to diagnosis'
    },
    {
      metric: '40%',
      label: 'Cost Reduction',
      description: 'Lower healthcare costs through improved efficiency and prevention'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Healthcare Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionizing healthcare with AI consciousness, quantum computing, and autonomous systems. 
              Improving patient outcomes while reducing costs and enhancing the care experience.
            </p>
            <div className="flex items-center justify-center gap-4 text-cyan-400">
              <Heart className="w-8 h-8" />
              <span className="text-lg font-semibold">Better Health Through Technology</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare solutions deliver measurable improvements in accuracy, efficiency, and patient outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{item.label}</div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Solutions */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and quantum computing solutions designed specifically for healthcare challenges.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-cyan-400">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed to address the unique challenges of different healthcare environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-400 text-xs flex items-start">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering our healthcare solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: 'AI Consciousness',
                description: 'Advanced AI systems with emotional intelligence and understanding capabilities.',
                features: ['Natural language processing', 'Emotional recognition', 'Contextual understanding', 'Learning adaptation']
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Quantum Computing',
                description: 'Quantum-enhanced algorithms for complex medical calculations and simulations.',
                features: ['Molecular modeling', 'Drug interaction analysis', 'Optimization algorithms', 'Secure data processing']
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Security & Compliance',
                description: 'Enterprise-grade security ensuring HIPAA compliance and data protection.',
                features: ['Quantum encryption', 'Zero-trust architecture', 'Automated compliance', 'Audit trails']
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2 text-sm">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful deployment and adoption of healthcare AI solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'Comprehensive evaluation of current systems and strategic planning for AI integration.'
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Custom design of AI solutions tailored to specific healthcare needs and workflows.'
              },
              {
                step: '03',
                title: 'Implementation & Training',
                description: 'Phased deployment with comprehensive training for healthcare professionals.'
              },
              {
                step: '04',
                title: 'Optimization & Support',
                description: 'Continuous monitoring, optimization, and ongoing support for optimal performance.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transform Your Healthcare Organization
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading healthcare institutions already leveraging our AI and quantum computing 
              solutions to improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
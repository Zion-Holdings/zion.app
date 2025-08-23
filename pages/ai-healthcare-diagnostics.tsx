import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Eye, Shield, Clock, Users, 
  CheckCircle, ArrowRight, Zap, Target, Award,
  Activity, FileText, MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

const AIHealthcareDiagnostics: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Advanced AI Diagnostics',
      description: 'State-of-the-art machine learning algorithms with 99.2% diagnostic accuracy'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Medical Imaging Analysis',
      description: 'Comprehensive analysis of X-rays, MRIs, CT scans, and ultrasound images'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Cardiovascular Assessment',
      description: 'AI-powered heart disease detection and cardiovascular risk analysis'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with full HIPAA compliance and data encryption'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-time Results',
      description: 'Instant diagnostic results with detailed analysis and recommendations'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-specialty Support',
      description: 'Coverage across radiology, cardiology, neurology, and more'
    }
  ];

  const diagnosticCapabilities = [
    {
      specialty: 'Radiology',
      conditions: ['Lung cancer', 'Breast cancer', 'Fractures', 'Pneumonia', 'Tuberculosis'],
      accuracy: '99.4%',
      processingTime: '< 30 seconds'
    },
    {
      specialty: 'Cardiology',
      conditions: ['Heart disease', 'Arrhythmias', 'Heart failure', 'Coronary artery disease'],
      accuracy: '98.9%',
      processingTime: '< 45 seconds'
    },
    {
      specialty: 'Neurology',
      conditions: ['Brain tumors', 'Stroke', 'Multiple sclerosis', 'Alzheimer\'s disease'],
      accuracy: '99.1%',
      processingTime: '< 60 seconds'
    },
    {
      specialty: 'Ophthalmology',
      conditions: ['Diabetic retinopathy', 'Glaucoma', 'Macular degeneration', 'Cataracts'],
      accuracy: '99.6%',
      processingTime: '< 20 seconds'
    }
  ];

  const useCases = [
    {
      title: 'Early Disease Detection',
      description: 'Identify diseases at their earliest stages for better treatment outcomes',
      benefits: ['Up to 40% earlier detection', 'Improved survival rates', 'Reduced treatment costs']
    },
    {
      title: 'Rural Healthcare Access',
      description: 'Bring expert diagnostic capabilities to underserved areas',
      benefits: ['Remote diagnosis support', 'Reduced travel time', 'Expert consultation access']
    },
    {
      title: 'Emergency Medicine',
      description: 'Rapid diagnosis in critical care situations',
      benefits: ['Faster treatment decisions', 'Improved patient outcomes', 'Reduced wait times']
    },
    {
      title: 'Preventive Care',
      description: 'Proactive health monitoring and risk assessment',
      benefits: ['Early intervention opportunities', 'Lifestyle recommendations', 'Preventive screenings']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$499',
      period: '/month',
      description: 'Perfect for small clinics and individual practitioners',
      features: [
        'Up to 100 scans/month',
        'Basic AI diagnostics',
        'Standard reporting',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for medium-sized hospitals and medical centers',
      features: [
        'Up to 500 scans/month',
        'Advanced AI algorithms',
        'Custom reporting',
        'Priority support',
        'Advanced analytics',
        'Multi-specialty support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large healthcare networks',
      features: [
        'Unlimited scans',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated support team',
        'Advanced analytics',
        'API integration',
        'Custom compliance frameworks'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "The AI diagnostic platform has revolutionized our radiology department. We're detecting conditions earlier and with greater accuracy.",
      author: "Dr. Emily Chen",
      position: "Chief of Radiology",
      company: "Metro General Hospital"
    },
    {
      quote: "Our rural clinic now has access to expert-level diagnostics. The AI platform has been a game-changer for our patients.",
      author: "Dr. James Wilson",
      position: "Medical Director",
      company: "Rural Health Clinic"
    },
    {
      quote: "The speed and accuracy of the AI diagnostics have significantly improved our emergency response times and patient outcomes.",
      author: "Dr. Sarah Rodriguez",
      position: "Emergency Medicine Chief",
      company: "City Emergency Center"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                AI-Powered Healthcare
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Healthcare Diagnostics
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform healthcare delivery with AI-powered medical imaging analysis and diagnostic support. 
                Achieve higher accuracy, faster results, and better patient outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Request Demo
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Healthcare AI Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Cutting-edge artificial intelligence designed specifically for medical diagnostics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Diagnostic Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive AI diagnostics across multiple medical specialties
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {diagnosticCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {capability.specialty}
                    </h3>
                    <div className="text-right">
                      <div className="text-cyan-400 font-bold">{capability.accuracy}</div>
                      <div className="text-gray-400 text-sm">Accuracy</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-medium mb-2">Conditions Detected:</h4>
                    <div className="flex flex-wrap gap-2">
                      {capability.conditions.map((condition, conditionIndex) => (
                        <span key={conditionIndex} className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded">
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Processing Time:</span>
                    <span className="text-white font-medium">{capability.processingTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover how AI diagnostics can transform healthcare delivery across various settings
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Flexible pricing options designed for healthcare organizations of all sizes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 ${
                    plan.popular 
                      ? 'border-cyan-400/40 bg-cyan-400/5' 
                      : 'border-cyan-400/20'
                  } hover:border-cyan-400/40 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Healthcare Professionals Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from medical professionals using our AI diagnostic platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-cyan-400 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading healthcare organizations using AI to improve patient care and outcomes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Request Demo
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Sales Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIHealthcareDiagnostics;
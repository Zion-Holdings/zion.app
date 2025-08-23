import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Cloud, 
  Target, 
  Users, 
  Star,
  Sparkles,
  Zap,
  Heart,
  Eye,
  Infinity,
  TrendingUp,
  Award,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Code,
  Database,
  Server,
  Lock,
  Cpu,
  Network
} from 'lucide-react';

const GetStartedPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai');

  const quickStartServices = [
    {
      id: 'ai',
      name: 'AI Consciousness Platform',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Get started with AI consciousness development and emotional intelligence systems',
      timeToDeploy: '2-4 weeks',
      complexity: 'Advanced',
      pricing: 'Custom',
      features: [
        'AI consciousness framework setup',
        'Emotional intelligence algorithms',
        'Ethical AI guidelines',
        'Consciousness testing tools',
        'Integration APIs',
        '24/7 expert support'
      ]
    },
    {
      id: 'quantum',
      name: 'Quantum Computing Solutions',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      description: 'Deploy quantum computing solutions for complex optimization and simulation problems',
      timeToDeploy: '4-8 weeks',
      complexity: 'Expert',
      pricing: 'Enterprise',
      features: [
        'Quantum algorithm development',
        'Qiskit/Cirq integration',
        'Quantum error correction',
        'Performance optimization',
        'Scalability planning',
        'Quantum security protocols'
      ]
    },
    {
      id: 'space',
      name: 'Space Technology Platform',
      icon: Rocket,
      color: 'from-pink-500 to-rose-500',
      description: 'Launch space technology solutions for resource intelligence and satellite operations',
      timeToDeploy: '6-12 weeks',
      complexity: 'Expert',
      pricing: 'Custom',
      features: [
        'Satellite system design',
        'Orbital mechanics optimization',
        'Resource detection algorithms',
        'Ground station integration',
        'Mission planning tools',
        'Space data analytics'
      ]
    },
    {
      id: 'security',
      name: 'Quantum Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Implement quantum-resistant security solutions for future-proof protection',
      timeToDeploy: '3-6 weeks',
      complexity: 'Advanced',
      pricing: 'Professional',
      features: [
        'Post-quantum cryptography',
        'Threat detection systems',
        'Security assessment',
        'Compliance frameworks',
        'Incident response',
        'Security training'
      ]
    },
    {
      id: 'cloud',
      name: 'Autonomous Cloud Infrastructure',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      description: 'Build self-managing cloud infrastructure with AI-powered optimization',
      timeToDeploy: '2-6 weeks',
      complexity: 'Intermediate',
      pricing: 'Professional',
      features: [
        'Auto-scaling systems',
        'AI-powered monitoring',
        'Cost optimization',
        'Disaster recovery',
        'Multi-cloud management',
        'Performance analytics'
      ]
    },
    {
      id: 'business',
      name: 'AI Business Intelligence',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      description: 'Transform your business with autonomous AI decision-making and analytics',
      timeToDeploy: '4-8 weeks',
      complexity: 'Intermediate',
      pricing: 'Professional',
      features: [
        'Predictive analytics',
        'Autonomous reporting',
        'Business process automation',
        'ROI optimization',
        'Custom dashboards',
        'Integration services'
      ]
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current technology stack and business requirements to recommend the optimal solution.',
      duration: '1-2 weeks',
      deliverables: ['Technology assessment report', 'Solution architecture', 'Implementation roadmap'],
      icon: Eye
    },
    {
      step: 2,
      title: 'Proof of Concept',
      description: 'We build a working prototype to demonstrate the solution and validate the approach.',
      duration: '2-4 weeks',
      deliverables: ['Working prototype', 'Performance metrics', 'User feedback'],
      icon: Lightbulb
    },
    {
      step: 3,
      title: 'Development & Integration',
      description: 'Full development and integration of the solution with your existing systems.',
      duration: '4-12 weeks',
      deliverables: ['Production-ready solution', 'Integration documentation', 'Testing results'],
      icon: Code
    },
    {
      step: 4,
      title: 'Deployment & Training',
      description: 'Production deployment and comprehensive training for your team.',
      duration: '1-2 weeks',
      deliverables: ['Live deployment', 'Training materials', 'Support handover'],
      icon: Rocket
    },
    {
      step: 5,
      title: 'Ongoing Support',
      description: 'Continuous monitoring, optimization, and support to ensure optimal performance.',
      duration: 'Ongoing',
      deliverables: ['24/7 monitoring', 'Performance reports', 'Continuous optimization'],
      icon: Heart
    }
  ];

  const successStories = [
    {
      company: 'Global Healthcare Corp',
      industry: 'Healthcare',
      solution: 'AI Consciousness Platform',
      results: '40% improvement in patient outcomes, 60% reduction in diagnostic errors',
      timeline: '6 weeks',
      rating: 5.0
    },
    {
      company: 'Quantum Financial Services',
      industry: 'Fintech',
      solution: 'Quantum Computing Solutions',
      results: '1000x faster risk calculations, 25% increase in trading efficiency',
      timeline: '8 weeks',
      rating: 5.0
    },
    {
      company: 'Space Resource Mining Inc',
      industry: 'Space Technology',
      solution: 'Space Technology Platform',
      results: '90% accuracy in resource detection, 3x faster mission planning',
      timeline: '10 weeks',
      rating: 4.9
    }
  ];

  const selectedServiceData = quickStartServices.find(s => s.id === selectedService);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout
      title="Get Started - Zion Tech Group"
      description="Start your journey with Zion Tech Group's revolutionary technology solutions. Quick start guides and onboarding for AI consciousness, quantum computing, and autonomous solutions."
      keywords="get started, onboarding, quick start, AI consciousness, quantum computing, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Get Started Today
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Begin your journey with revolutionary AI consciousness, quantum computing, 
                and autonomous solutions that transform your business
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our expert team will guide you through every step, from initial assessment 
                to full deployment and ongoing support
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Services Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Choose Your Solution
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Select from our revolutionary technology solutions and get started immediately
              </p>
            </motion.div>

            {/* Service Selection */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {quickStartServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-xl border transition-all duration-300 text-center ${
                    selectedService === service.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-700 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-300'
                  }`}
                >
                  <service.icon className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-xs font-medium">{service.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Selected Service Details */}
            {selectedServiceData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl p-8 border border-gray-700/50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-br ${selectedServiceData.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <selectedServiceData.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {selectedServiceData.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {selectedServiceData.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-400">Deployment</div>
                        <div className="text-lg font-semibold text-white">{selectedServiceData.timeToDeploy}</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-400">Complexity</div>
                        <div className="text-lg font-semibold text-white">{selectedServiceData.complexity}</div>
                      </div>
                      <div className="text-center">
                        <DollarSign className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-400">Pricing</div>
                        <div className="text-lg font-semibold text-white">{selectedServiceData.pricing}</div>
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">What's Included</h4>
                    <div className="space-y-3">
                      {selectedServiceData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Onboarding Process Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Onboarding Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We've streamlined the process to get you up and running quickly with minimal disruption
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 h-full hidden lg:block" />
              
              <div className="space-y-12">
                {onboardingSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    variants={fadeInUp}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:text-left text-center`}
                  >
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <span className="text-xl font-bold text-white">{step.step}</span>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-cyan-400 mb-4">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{step.duration}</span>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Deliverables:</h4>
                          <ul className="space-y-1">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                                <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full border-4 border-black shadow-lg hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how organizations are transforming their operations with our revolutionary solutions
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(story.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">{story.rating}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {story.company}
                  </h3>
                  <p className="text-sm text-cyan-400 mb-3">{story.industry}</p>
                  <p className="text-gray-300 mb-4">{story.solution}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Results:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{story.results}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Timeline: {story.timeline}</span>
                    <span className="text-cyan-400 font-medium">Success</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the revolution and start building the future today. Our team of experts 
                is ready to guide you through every step of your transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Schedule a Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GetStartedPage;
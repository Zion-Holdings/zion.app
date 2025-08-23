import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Brain, Atom, Shield, Rocket, 
  Star, TrendingUp, CheckCircle, Phone, Mail, MapPin,
  ArrowRight, Zap, Cpu, Database, Cloud, Palette,
  Play, FileText, Video, Download, Calendar, Clock,
  CheckCircle as Success, ArrowRight as Next, ArrowLeft as Previous, Code
} from 'lucide-react';
import Link from 'next/link';

const GetStartedPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPath, setSelectedPath] = useState('');

  const paths = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      description: 'Get started with our AI consciousness and machine learning platforms',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      steps: [
        'Schedule AI consultation call',
        'Review current AI infrastructure',
        'Define AI implementation goals',
        'Receive customized AI roadmap',
        'Begin AI platform deployment'
      "
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      description: 'Explore quantum computing solutions for your organization',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      steps: [
        'Quantum readiness assessment',
        'Identify quantum use cases',
        'Quantum infrastructure planning',
        'Quantum algorithm development',
        'Quantum solution deployment'
      "
    },
    {
      id: 'space',
      name: 'Space Technology',
      description: 'Leverage space technology for resource intelligence and exploration',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      steps: [
        'Space technology consultation',
        'Resource intelligence assessment',
        'Satellite system planning',
        'Space data integration',
        'Space platform deployment'
      "
    },
    {
      id: 'enterprise',
      name: 'Enterprise IT Solutions',
      description: 'Transform your enterprise IT infrastructure and operations',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      steps: [
        'IT infrastructure audit',
        'Digital transformation planning',
        'Technology stack modernization',
        'Security implementation',
        'Full deployment and training'
      "
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Schedule a free consultation with our technology experts to discuss your needs and goals.',
      duration: '30 minutes',
      icon: <Phone className="w-6 h-6" />,
      actions: [
        'Book consultation call',
        'Prepare questions and goals',
        'Review current technology stack'
      "
    },
    {
      step: 2,
      title: 'Assessment & Planning',
      description: 'We conduct a comprehensive assessment of your current infrastructure and create a customized implementation plan.',
      duration: '1-2 weeks',
      icon: <Target className="w-6 h-6" />,
      actions: [
        'Infrastructure review',
        'Requirements gathering',
        'Custom roadmap creation'
      "
    },
    {
      step: 3,
      title: 'Solution Design',
      description: 'Our team designs a tailored solution architecture that meets your specific business requirements.',
      duration: '2-3 weeks',
      icon: <Cpu className="w-6 h-6" />,
      actions: [
        'Architecture design',
        'Technology selection',
        'Integration planning'
      "
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'We deploy your solution with minimal disruption to your operations, ensuring a smooth transition.',
      duration: '4-8 weeks',
      icon: <Rocket className="w-6 h-6" />,
      actions: [
        'Phased deployment',
        'Testing and validation',
        'Performance optimization'
      "
    },
    {
      step: 5,
      title: 'Training & Support',
      description: 'Comprehensive training for your team and ongoing support to ensure long-term success.',
      duration: '1-2 weeks',
      icon: <Users className="w-6 h-6" />,
      actions: [
        'Team training sessions',
        'Documentation delivery',
        'Ongoing support setup'
      "
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Comprehensive guide to implementing Zion Tech Group solutions',
      type: 'PDF',
      icon: <FileText className="w-6 h-6" />,
      download: true
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common implementation tasks',
      type: 'Video Series',
      icon: <Video className="w-6 h-6" />,
      download: false
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      type: 'Web',
      icon: <Code className="w-6 h-6" />,
      download: false
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices and implementation recommendations',
      type: 'Guide',
      icon: <Star className="w-6 h-6" />,
      download: true
    }
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Get Started Today
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Begin your transformation journey with Zion Tech Group. We'll guide you through 
                every step of implementing our revolutionary AI, quantum, and space technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#paths" className="btn-primary">
                  <Play className="w-5 h-5 mr-2" />
                  Choose Your Path
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to an Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Paths */}
        <section id="paths" className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Choose Your Technology Path
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Select the technology area that aligns with your business goals and objectives
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {paths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer ${
                    selectedPath === path.id ? 'border-cyan-500/50 bg-cyan-500/10' : ''
                  }`}
                  onClick={() => setSelectedPath(path.id)}
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${path.color} rounded-xl flex items-center justify-center text-white`}>
                    {path.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">{path.name}</h3>
                  <p className="text-gray-300 text-center mb-6">{path.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white mb-3">Implementation Steps:</h4>
                    {path.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-cyan-400 text-xs font-bold">{stepIndex + 1}</span>
                        </div>
                        <span className="text-gray-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  {selectedPath === path.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 pt-6 border-t border-gray-700/50"
                    >
                      <Link href="/contact" className="btn-primary w-full">
                        Start {path.name} Journey
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding Process */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Your Onboarding Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A structured 5-step process to ensure successful implementation and adoption
              </p>
            </motion.div>
            
            {/* Step Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Previous className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {onboardingSteps.map((step) => (
                    <button
                      key={step.step}
                      onClick={() => setCurrentStep(step.step)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentStep === step.step
                          ? 'bg-cyan-400 scale-125'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextStep}
                  disabled={currentStep === 5}
                  className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Next className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Current Step Display */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {onboardingSteps.map((step) => (
                step.step === currentStep && (
                  <div key={step.step} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Step {step.step}: {step.title}
                    </h3>
                    
                    <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                      {step.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 mb-8">
                      <Clock className="w-4 h-4" />
                      Duration: {step.duration}
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
                      <h4 className="text-lg font-semibold text-white mb-4">What You'll Do:</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {step.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </motion.div>
          </div>
        </section>

        {/* Resources & Downloads */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Resources & Downloads
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access comprehensive resources to help you get started and succeed
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {resource.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 text-center">{resource.title}</h3>
                  <p className="text-gray-400 text-sm text-center mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    {resource.download && (
                      <Download className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>
                  
                  <button className="w-full btn-primary text-sm">
                    {resource.download ? 'Download' : 'Access'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Options */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Quick Start Options
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the approach that works best for your timeline and needs
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <Clock className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Express Start</h3>
                <p className="text-gray-300 mb-6">
                  Get up and running in 2-4 weeks with our rapid deployment option for urgent needs.
                </p>
                <Link href="/contact" className="btn-primary">
                  Start Express
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <Target className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Standard Implementation</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive implementation over 8-12 weeks with full customization and training.
                </p>
                <Link href="/contact" className="btn-primary">
                  Start Standard
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Scale</h3>
                <p className="text-gray-300 mb-6">
                  Large-scale deployment over 12-16 weeks with dedicated team and custom development.
                </p>
                <Link href="/contact" className="btn-primary">
                  Start Enterprise
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's start transforming your business with cutting-edge technology. 
                Our experts are ready to guide you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Link>
                <a href="tel:+13024640950" className="btn-secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
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
import React from 'react';
import Layout from '../../components/layout/Layout';
<<<<<<< HEAD
import { 
  Heart, Brain, Shield, Zap, BarChart3, Cpu, Users, Target,
  CheckCircle, ArrowRight, Star, TrendingUp, Award, Clock
} from 'lucide-react';
=======
import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Heart, Activity } from 'lucide-react';
import Link from 'next/link';
>>>>>>> origin/clean-website-enhancement

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
<<<<<<< HEAD
      title: 'AI-Powered Diagnostics',
      description: 'Advanced diagnostic systems using artificial intelligence',
      icon: Brain,
      features: [
        'Medical image analysis',
        'Symptom assessment',
        'Disease prediction',
        'Treatment recommendations'
      ]
    },
    {
      title: 'Healthcare Automation',
      description: 'Streamline healthcare operations with intelligent automation',
      icon: Cpu,
      features: [
        'Patient management systems',
        'Appointment scheduling',
        'Medical record automation',
        'Billing optimization'
      ]
    },
    {
      title: 'Data Security & Compliance',
      description: 'HIPAA-compliant healthcare data protection',
      icon: Shield,
      features: [
        'Patient data encryption',
        'Access control systems',
        'Audit trails',
        'Compliance monitoring'
      ]
    },
    {
      title: 'Telemedicine Platforms',
      description: 'Advanced virtual healthcare delivery systems',
      icon: Users,
      features: [
        'Video consultations',
        'Remote monitoring',
        'Digital prescriptions',
        'Health tracking apps'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Improved Accuracy',
      description: 'AI-powered diagnostics reduce human error',
      icon: Target
    },
    {
      title: 'Faster Results',
      description: 'Quick diagnosis and treatment planning',
      icon: Zap
    },
    {
      title: 'Cost Reduction',
      description: 'Lower healthcare costs through efficiency',
      icon: TrendingUp
    },
    {
      title: 'Better Outcomes',
      description: 'Enhanced patient care and recovery',
      icon: Award
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white relative z-10">

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Heart className="mx-auto h-20 w-20 text-red-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Healthcare & Biotech
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Revolutionizing healthcare with AI-powered solutions that improve 
                diagnosis, treatment, and patient outcomes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Transform Healthcare
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Healthcare Demo
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions for modern healthcare
=======
      name: 'AI-Powered Medical Diagnosis 2045',
      description: 'Advanced AI medical diagnosis with consciousness and emotional intelligence',
      href: '/ai-powered-medical-diagnosis-2045',
      icon: Brain,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Quantum Bio-Computing Platform 2045',
      description: 'Quantum computing integrated with biological systems for medical research',
      href: '/quantum-bio-computing-platform-2045',
      icon: Heart,
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Autonomous Drug Discovery AI 2045',
      description: 'Fully autonomous AI drug discovery with consciousness integration',
      href: '/autonomous-drug-discovery-ai-2045',
      icon: Activity,
      color: 'from-purple-500 to-blue-500'
    },
    {
      name: 'Personalized Medicine Intelligence 2045',
      description: 'AI-powered personalized medicine with consciousness and genomics',
      href: '/personalized-medicine-intelligence-2045',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const features = [
    { icon: Brain, title: "AI Diagnosis", description: "Intelligent medical diagnosis" },
    { icon: Heart, title: "Bio-Computing", description: "Quantum biological integration" },
    { icon: Activity, title: "Drug Discovery", description: "Autonomous pharmaceutical research" },
    { icon: Zap, title: "Personalized Care", description: "Individualized treatment plans" }
  ];

  const stats = [
    { number: "99.9%", label: "Diagnosis Accuracy", icon: CheckCircle },
    { number: "1000x", label: "Research Speed", icon: Zap },
    { number: "24/7", label: "Monitoring", icon: Clock },
    { number: "50+", label: "Medical Partners", icon: Users }
  ];

  return (
    <Layout 
      title="Healthcare & Biotech Solutions - Zion Tech Group"
      description="Revolutionary healthcare solutions with AI consciousness, quantum bio-computing, and autonomous drug discovery. Leading the future of medical innovation."
      keywords="healthcare solutions, AI medical diagnosis, quantum bio-computing, drug discovery, personalized medicine, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Healthcare & Biotech
                <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Revolution Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of healthcare with AI consciousness, quantum bio-computing, 
                and autonomous drug discovery for unprecedented medical breakthroughs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Healthcare
                  <Heart className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Healthcare Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our healthcare platform delivers unprecedented medical capabilities with AI consciousness, 
                quantum bio-computing, and autonomous research systems.
>>>>>>> origin/clean-website-enhancement
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-red-500/20 rounded-xl mr-4">
                      <solution.icon className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
>>>>>>> origin/clean-website-enhancement
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real improvements that impact patient care
=======
        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered healthcare and biotech solutions.
>>>>>>> origin/clean-website-enhancement
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-red-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <benefit.icon className="h-10 w-10 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={solution.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <solution.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                        {solution.name}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mt-6 flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-300">
                        <span className="font-semibold">Learn More</span>
                        <Heart className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
>>>>>>> origin/clean-website-enhancement
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the healthcare revolution and improve patient outcomes with 
              cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Healthcare Journey
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Healthcare Assessment
              </button>
            </div>
=======
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the healthcare revolution with AI consciousness and quantum bio-computing. 
                Transform medical care with the future of healthcare innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Healthcare
                  <Heart className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
>>>>>>> origin/clean-website-enhancement
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareSolutionsPage;
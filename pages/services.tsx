import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Globe, Shield, Cpu, Database,
  Cloud, BarChart3, Settings, Zap, ArrowRight,
  CheckCircle, Star, Users, TrendingUp, Target
} from 'lucide-react';
import Link from 'next/link';

const Services: React.FC = () => {
  const mainServices = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions including consciousness evolution, neural networks, and predictive analytics.',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Consciousness Development',
        'Machine Learning Models',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'AI Ethics & Governance'
      ],
      link: '/ai-services'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem-solving and optimization.',
      icon: <Cpu className="w-12 h-12" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Quantum Algorithms',
        'Quantum Machine Learning',
        'Optimization Problems',
        'Cryptography Solutions',
        'Quantum Simulation',
        'Quantum Hardware Integration'
      ],
      link: '/quantum-computing'
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      description: 'Cutting-edge space exploration and satellite technology for resource discovery and monitoring.',
      icon: <Rocket className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Satellite Systems',
        'Space Resource Intelligence',
        'Earth Observation',
        'Space Data Analytics',
        'Orbital Mechanics',
        'Space Mining Technology'
      ],
      link: '/space-tech'
    },
    {
      id: 'metaverse',
      title: 'Metaverse Development',
      description: 'Immersive virtual world creation and augmented reality experiences for the future of digital interaction.',
      icon: <Globe className="w-12 h-12" />,
      color: 'from-orange-500 to-red-500',
      features: [
        '3D World Building',
        'VR/AR Experiences',
        'Digital Twin Creation',
        'Virtual Commerce',
        'Social VR Platforms',
        'Metaverse Infrastructure'
      ],
      link: '/metaverse-development'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions including AI-powered threat detection and quantum-resistant encryption.',
      icon: <Shield className="w-12 h-12" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'AI Threat Detection',
        'Quantum Encryption',
        'Zero Trust Security',
        'Incident Response',
        'Security Auditing',
        'Compliance Solutions'
      ],
      link: '/cybersecurity'
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform',
      description: 'Scalable cloud infrastructure with AI-powered management and quantum-secure environments.',
      icon: <Cloud className="w-12 h-12" />,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'AI-Powered Management',
        'Quantum-Secure Cloud',
        'Multi-Cloud Solutions',
        'Edge Computing',
        'Serverless Architecture',
        'Cloud Migration'
      ],
      link: '/cloud-platform'
    }
  ];

  const specializedServices = [
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Advanced data processing and business intelligence solutions powered by AI and machine learning.',
      icon: <BarChart3 className="w-10 h-10" />,
      color: 'from-teal-500 to-cyan-500',
      link: '/data-analytics'
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation',
      description: 'Streamlined development operations with AI-powered automation and continuous integration.',
      icon: <Settings className="w-10 h-10" />,
      color: 'from-rose-500 to-pink-500',
      link: '/devops-automation'
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI',
      description: 'AI-powered healthcare solutions for diagnosis, treatment planning, and patient care.',
      icon: <Users className="w-10 h-10" />,
      color: 'from-emerald-500 to-green-500',
      link: '/healthcare-ai-solutions'
    },
    {
      id: 'financial-solutions',
      title: 'Financial Solutions',
      description: 'AI and quantum computing solutions for financial modeling, risk assessment, and trading.',
      icon: <TrendingUp className="w-10 h-10" />,
      color: 'from-amber-500 to-yellow-500',
      link: '/financial-solutions'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, treatment planning, and patient care optimization',
      icon: <Users className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500'
    },
    {
      name: 'Finance',
      description: 'Quantum computing for risk assessment, fraud detection, and algorithmic trading',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      name: 'Manufacturing',
      description: 'AI-driven predictive maintenance, quality control, and supply chain optimization',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Retail',
      description: 'Personalized customer experiences, inventory management, and demand forecasting',
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Education',
      description: 'Adaptive learning platforms, virtual classrooms, and AI-powered tutoring',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Government',
      description: 'Secure infrastructure, data analytics, and citizen service optimization',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> },
    { number: '$50M+', label: 'Value Delivered', icon: <TrendingUp className="w-8 h-8" /> },
    { number: '25+', label: 'Industries Served', icon: <Users className="w-8 h-8" /> }
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Cutting-edge technology solutions that transform businesses and drive innovation. 
              From AI consciousness to quantum computing, we're building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#main-services" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
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
            <Rocket className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Cpu className="w-14 h-14" />
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

      {/* Main Services */}
      <section id="main-services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that define the cutting edge of technology innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href={service.link}
                      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Service ID</div>
                      <div className="text-cyan-400 font-mono text-sm">{service.id}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-specific technology solutions tailored to your unique business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm text-center mb-4">
                  {service.description}
                </p>
                
                <Link
                  href={service.link}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming businesses across diverse sectors with innovative technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {industry.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {industry.name}
                </h3>
                
                <p className="text-gray-300 text-sm text-center">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We're at the forefront of emerging technologies, constantly pushing boundaries and exploring new possibilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of world-class engineers, scientists, and industry experts with decades of combined experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Results Driven</h3>
              <p className="text-gray-300">
                We focus on delivering measurable business outcomes and ROI for our clients through innovative technology solutions.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative technology solutions can drive growth, 
              efficiency, and competitive advantage for your organization.
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

export default Services;
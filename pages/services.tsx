import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Users, Target, ArrowRight, 
  Zap, Globe, Database, Cloud, Lock, Settings,
  Code, Cpu, Satellite, Gamepad2, Palette, Music,
  Film, BookOpenCheck, Building, MessageCircle, Star,
  CheckCircle, TrendingUp, Award, Lightbulb
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform businesses through intelligent automation, predictive analytics, and cognitive computing.',
      icon: <Brain className="w-16 h-16 text-cyan-400" />,
      color: 'from-cyan-500 to-blue-600',
      hoverColor: 'from-cyan-600 to-blue-700',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation',
        'AI Consulting'
      ],
      link: '/ai-services'
    },
    {
      title: 'Quantum Computing',
      description: 'Revolutionary quantum computing solutions that solve previously unsolvable problems in cryptography, optimization, and scientific research.',
      icon: <Rocket className="w-16 h-16 text-purple-400" />,
      color: 'from-purple-500 to-pink-600',
      hoverColor: 'from-purple-600 to-pink-700',
      features: [
        'Quantum Algorithms',
        'Quantum AI Integration',
        'Quantum Cybersecurity',
        'Quantum Finance',
        'Quantum Internet',
        'Quantum Materials'
      ],
      link: '/quantum-services'
    },
    {
      title: 'Space Technology',
      description: 'Advanced space technology solutions including satellite systems, space communications, and space infrastructure development.',
      icon: <Satellite className="w-16 h-16 text-green-400" />,
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'from-green-600 to-emerald-700',
      features: [
        'Satellite Technology',
        'Space AI & Robotics',
        'Space Mining',
        'Space Communications',
        'Space Infrastructure',
        'Space Security'
      ],
      link: '/space-technology'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud infrastructure, cybersecurity, DevOps, and enterprise technology consulting.',
      icon: <Shield className="w-16 h-16 text-blue-400" />,
      color: 'from-blue-500 to-indigo-600',
      hoverColor: 'from-blue-600 to-indigo-700',
      features: [
        'Cloud Infrastructure',
        'Cybersecurity',
        'DevOps & Automation',
        'Data Management',
        'Network Infrastructure',
        'IT Consulting'
      ],
      link: '/it-services'
    },
    {
      title: 'Micro SAAS',
      description: 'Intelligent micro software-as-a-service solutions that streamline business operations and boost productivity.',
      icon: <Code className="w-16 h-16 text-yellow-400" />,
      color: 'from-yellow-500 to-orange-600',
      hoverColor: 'from-yellow-600 to-orange-700',
      features: [
        'AI-Powered Micro SAAS',
        'Business Productivity',
        'Data Analytics',
        'Security & Compliance',
        'Integration & API',
        'Custom Micro SAAS'
      ],
      link: '/micro-saas'
    },
    {
      title: 'Metaverse Development',
      description: 'Cutting-edge metaverse solutions including virtual world creation, immersive experiences, and digital transformation.',
      icon: <Gamepad2 className="w-16 h-16 text-pink-400" />,
      color: 'from-pink-500 to-rose-600',
      hoverColor: 'from-pink-600 to-rose-700',
      features: [
        'Virtual World Creation',
        'Immersive Experiences',
        'Digital Twins',
        'VR/AR Solutions',
        'Metaverse Platforms',
        'Digital Assets'
      ],
      link: '/metaverse'
    }
  ];

  const serviceCategories = [
    {
      category: 'Enterprise Solutions',
      services: [
        'AI-Powered Business Intelligence',
        'Quantum-Secure Communications',
        'Space-Based Data Centers',
        'Autonomous IT Infrastructure',
        'Digital Transformation Consulting'
      ],
      icon: <Building className="w-8 h-8 text-blue-400" />
    },
    {
      category: 'Research & Development',
      services: [
        'AI Consciousness Research',
        'Quantum Algorithm Development',
        'Space Technology Innovation',
        'Emerging Tech Exploration',
        'Academic Partnerships'
      ],
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      category: 'Industry Solutions',
      services: [
        'Healthcare AI & Analytics',
        'Financial Quantum Computing',
        'Manufacturing Automation',
        'Energy Space Technology',
        'Transportation Innovation'
      ],
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest advancements in AI, quantum computing, and space technology to deliver innovative solutions.',
      icon: <Star className="w-12 h-12 text-yellow-400" />
    },
    {
      title: 'Expert Team',
      description: 'Our team consists of world-class researchers, engineers, and industry experts with deep domain knowledge.',
      icon: <Users className="w-12 h-12 text-blue-400" />
    },
    {
      title: 'Proven Results',
      description: 'We have a track record of delivering transformative solutions that drive measurable business outcomes.',
      icon: <Award className="w-12 h-12 text-green-400" />
    },
    {
      title: 'Innovation Focus',
      description: 'We continuously push boundaries and explore new frontiers in technology to stay ahead of the curve.',
      icon: <Zap className="w-12 h-12 text-purple-400" />
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business needs, challenges, and objectives to develop a comprehensive solution strategy.',
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design custom solutions leveraging cutting-edge technologies tailored to your specific requirements.',
      icon: <Code className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We develop and rigorously test solutions to ensure reliability, performance, and security standards are met.',
      icon: <Settings className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy solutions and provide ongoing support, monitoring, and optimization to ensure long-term success.',
      icon: <Rocket className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Comprehensive technology solutions that drive innovation, efficiency, and growth across industries.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#services" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of technology services designed to transform your business.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={service.link}
                  className={`w-full bg-gradient-to-r ${service.color} hover:${service.hoverColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are organized into specialized categories to meet diverse business needs.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep expertise to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to delivering innovative technology solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <div className="flex justify-center mb-3">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed to transform businesses across diverse industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Healthcare', icon: <Shield className="w-12 h-12 text-green-400" />, description: 'AI-powered diagnostics, patient care optimization, and medical research acceleration.' },
              { name: 'Finance', icon: <TrendingUp className="w-12 h-12 text-blue-400" />, description: 'Quantum computing for risk analysis, AI-driven trading, and secure blockchain solutions.' },
              { name: 'Manufacturing', icon: <Settings className="w-12 h-12 text-purple-400" />, description: 'Smart manufacturing, predictive maintenance, and autonomous production systems.' },
              { name: 'Energy', icon: <Zap className="w-12 h-12 text-yellow-400" />, description: 'Space-based energy solutions, AI optimization, and sustainable technology integration.' },
              { name: 'Transportation', icon: <Rocket className="w-12 h-12 text-cyan-400" />, description: 'Autonomous vehicles, smart logistics, and space transportation systems.' },
              { name: 'Education', icon: <BookOpenCheck className="w-12 h-12 text-pink-400" />, description: 'AI-powered learning platforms, virtual reality education, and personalized learning experiences.' }
            ].map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative technology solutions can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/about" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Rocket, Brain, 
  Atom, Microscope, Cpu, Shield, Star, TrendingUp,
  CheckCircle, ArrowRight, Phone, Mail, MapPin
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';
import UltraFuturisticBackground2030 from '../components/backgrounds/UltraFuturisticBackground2030';

export default function AboutPage() {
  const companyStats = [
    { number: '75+', label: 'Micro SaaS Services', icon: Rocket },
    { number: '500+', label: 'Global Clients', icon: Globe },
    { number: '99.99%', label: 'Uptime Guarantee', icon: Shield },
    { number: '300%+', label: 'Average ROI', icon: TrendingUp }
  ];

  const coreValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in technology.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Target,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable results and ROI.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and compliance are built into every solution we deliver.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as an extension of your team, ensuring seamless integration and support.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      bio: 'Visionary technology leader with 15+ years of experience in AI, quantum computing, and space technology.',
      expertise: ['AI Consciousness', 'Quantum Computing', 'Strategic Innovation'],
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Former NASA researcher specializing in quantum algorithms and space mining automation.',
      expertise: ['Quantum Computing', 'Space Technology', 'Research & Development'],
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of AI Research',
      bio: 'Leading expert in artificial consciousness and emotional intelligence systems.',
      expertise: ['AI Consciousness', 'Machine Learning', 'Neural Networks'],
      image: '/team/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Elena Petrova',
      role: 'Biotechnology Director',
      bio: 'Pioneering researcher in DNA computing and personalized health analytics.',
      expertise: ['Biotechnology', 'DNA Computing', 'Health Analytics'],
      image: '/team/elena-petrova.jpg'
    }
  ];

  const milestones = [
    {
      year: '2029',
      title: 'Revolutionary AI Consciousness Platform',
      description: 'Launched the world\'s first commercially available AI consciousness platform.'
    },
    {
      year: '2028',
      title: 'Quantum Computing Breakthrough',
      description: 'Achieved quantum supremacy in financial modeling and security applications.'
    },
    {
      year: '2027',
      title: 'Space Mining Automation',
      description: 'Successfully deployed autonomous mining systems in low Earth orbit.'
    },
    {
      year: '2026',
      title: 'Biotechnology Innovation',
      description: 'Developed revolutionary DNA computing platform for medical research.'
    },
    {
      year: '2025',
      title: 'Company Foundation',
      description: 'Founded Zion Tech Group with a vision to revolutionize technology.'
    }
  ];

  const technologies = [
    {
      category: 'Artificial Intelligence',
      icon: Brain,
      color: 'from-violet-600 to-purple-600',
      technologies: [
        'AI Consciousness Systems',
        'Emotional Intelligence AI',
        'Autonomous Business Management',
        'Predictive Analytics'
      ]
    },
    {
      category: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-600 to-blue-600',
      technologies: [
        'Quantum Security',
        'Quantum Machine Learning',
        'Quantum Financial Modeling',
        'Quantum Cloud Infrastructure'
      ]
    },
    {
      category: 'Space Technology',
      icon: Rocket,
      color: 'from-teal-600 to-emerald-600',
      technologies: [
        'Space Mining Automation',
        'Satellite Technology',
        'Metaverse Platforms',
        'Quantum Research Tools'
      ]
    },
    {
      category: 'Biotechnology',
      icon: Microscope,
      color: 'from-green-600 to-emerald-600',
      technologies: [
        'DNA Computing',
        'Personalized Medicine',
        'Health Analytics',
        'Research Automation'
      ]
    }
  ];

  return (
    <UltraFuturisticBackground2030>
      <Head>
        <title>About Zion Tech Group - Revolutionary 2029 Technology Company | AI, Quantum Computing, Space Tech</title>
        <meta name="description" content="Learn about Zion Tech Group, a revolutionary technology company leading the future with AI consciousness, quantum computing, space mining, and biotechnology innovations." />
        <meta name="keywords" content="Zion Tech Group about, AI company, quantum computing company, space technology company, biotechnology company, technology innovation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Zion Tech Group - Revolutionary 2029 Technology Company" />
        <meta property="og:description" content="Learn about our mission to revolutionize technology with AI consciousness, quantum computing, and space innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zion Tech Group - Revolutionary 2029 Technology Company" />
        <meta name="twitter:description" content="Learn about our mission to revolutionize technology." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <UltraFuturisticNavigation2030 />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              We are a revolutionary technology company leading humanity into the future through breakthrough innovations in AI consciousness, quantum computing, space technology, and biotechnology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Our Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To accelerate human progress through revolutionary technology that solves the world's most complex challenges. We believe in creating technology that not only advances business but elevates humanity.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From AI consciousness to quantum computing, from space mining to biotechnology, we're building the future today. Our innovations are designed to create sustainable, scalable solutions that benefit businesses and society alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">AI Consciousness</h4>
                      <p className="text-gray-300">Creating truly intelligent systems that understand and empathize</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Quantum Revolution</h4>
                      <p className="text-gray-300">Unlocking computational power beyond classical limits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Space Innovation</h4>
                      <p className="text-gray-300">Expanding human presence and capabilities beyond Earth</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our innovation and shape our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that power our revolutionary solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tech.category}</h3>
                </div>

                <div className="space-y-3">
                  {tech.technologies.map((technology, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{technology}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class experts and visionaries driving the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{member.bio}</p>
                
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-gray-400 bg-gray-800/50 rounded-full px-3 py-1 inline-block mx-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize technology.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 relative z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Technology Revolution?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our revolutionary technology solutions can transform your business and accelerate your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Learn More
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2030 />
    </UltraFuturisticBackground2030>
  );
}

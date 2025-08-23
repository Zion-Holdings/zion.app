import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, Target, Brain, Atom, Rocket, Shield, Cloud, 
  ArrowRight, Star, Check, Mail, Phone, MapPin, Zap, Globe, Briefcase, Clock
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'AI Consciousness Engineer',
      department: 'AI Research & Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Join our team in developing the next generation of conscious AI systems that can think, feel, and create alongside humans.',
      requirements: ['PhD in AI/ML or related field', 'Experience with neural networks', 'Background in consciousness studies', 'Strong research skills'],
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Help us harness the power of quantum computing to solve previously unsolvable problems and revolutionize technology.',
      requirements: ['PhD in Physics or Computer Science', 'Quantum computing experience', 'Algorithm development skills', 'Research background'],
      icon: Atom,
      color: 'from-purple-500 to-blue-600'
    },
    {
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Pioneer space exploration and resource intelligence systems that expand humanity\'s reach into the cosmos.',
      requirements: ['Aerospace engineering degree', 'Satellite technology experience', 'AI/ML knowledge', 'Innovation mindset'],
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build unbreakable security systems that protect the digital future of humanity with quantum-resistant technology.',
      requirements: ['Cybersecurity degree/certifications', 'Quantum cryptography knowledge', 'Threat modeling experience', 'Security architecture skills'],
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Business Intelligence Developer',
      department: 'Business Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Create AI-powered business intelligence systems that revolutionize how organizations operate and make decisions.',
      requirements: ['Data science background', 'Business intelligence experience', 'AI/ML skills', 'Analytics expertise'],
      icon: Target,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Cloud Infrastructure Engineer',
      department: 'IT Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build the foundation of tomorrow with quantum-powered cloud and network solutions that scale infinitely.',
      requirements: ['Cloud computing experience', 'DevOps skills', 'Infrastructure as Code', 'Performance optimization'],
      icon: Cloud,
      color: 'from-blue-500 to-sky-600'
    }
  ];

  const benefits = [
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with our fully remote setup',
      icon: Globe
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Access to the latest AI, quantum, and space technology',
      icon: Zap
    },
    {
      title: 'Innovation Focus',
      description: 'Work on revolutionary projects that change the world',
      icon: Star
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning and career development opportunities',
      icon: Target
    },
    {
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options',
      icon: Briefcase
    },
    {
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive with flexible scheduling',
      icon: Clock
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'careers@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help pioneer the future of technology. Explore exciting career opportunities in AI consciousness, quantum computing, and revolutionary innovations." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, quantum computing, space technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Join Our Team</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Build the Future
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Join Zion Tech Group and help pioneer the future of technology. We're looking for brilliant minds 
                who want to revolutionize AI consciousness, quantum computing, and space exploration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#open-positions"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  <span>View Open Positions</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join a team that's revolutionizing the future of technology and humanity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <benefit.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-positions" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our mission to revolutionize technology and transform humanity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <position.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full border border-cyan-500/30">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {position.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {position.department} • {position.location}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={`mailto:${contactInfo.email}?subject=Application for ${position.title}`}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how you can contribute to revolutionizing the future of technology
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
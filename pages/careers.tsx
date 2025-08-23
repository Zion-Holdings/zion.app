import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Cloud, 
  Target,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Star,
  CheckCircle,
  Zap,
  Globe,
  Award,
  BookOpen,
  Coffee,
  Gamepad2
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Research Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description: 'Lead research in AI consciousness and emotional intelligence systems',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with neural networks and deep learning',
        'Knowledge of consciousness research and cognitive science',
        'Strong Python and PyTorch skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Flexible work hours'],
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Quantum Computing Engineer',
      department: 'Quantum Technology',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $150K',
      description: 'Develop quantum algorithms and quantum-safe cryptographic solutions',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks',
        'Knowledge of quantum cryptography and algorithms',
        'Programming experience in Python, Qiskit, or similar'
      ],
      benefits: ['Health insurance', '401(k) matching', 'Professional development'],
      featured: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Space Technology Specialist',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90K - $140K',
      description: 'Develop satellite data processing and space resource intelligence platforms',
      requirements: [
        'BS/MS in Aerospace Engineering, Physics, or related field',
        'Experience with satellite systems and orbital mechanics',
        'Knowledge of remote sensing and data analysis',
        'Programming skills in Python, MATLAB, or similar'
      ],
      benefits: ['Remote work options', 'Flexible PTO', 'Learning budget'],
      featured: false,
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$110K - $170K',
      description: 'Design and implement quantum-safe security architectures',
      requirements: [
        'BS/MS in Computer Science, Cybersecurity, or related field',
        'Experience with security architecture and threat modeling',
        'Knowledge of quantum-resistant cryptography',
        'Certifications: CISSP, CISM, or similar'
      ],
      benefits: ['Competitive salary', 'Health benefits', 'Security clearance support'],
      featured: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$95K - $145K',
      description: 'Build and optimize multi-cloud infrastructure solutions',
      requirements: [
        'BS in Computer Science or related field',
        'Experience with AWS, Azure, and GCP',
        'Knowledge of Kubernetes and containerization',
        'DevOps and automation experience'
      ],
      benefits: ['Remote work', 'Flexible hours', 'Cloud certification support'],
      featured: false,
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80K - $130K',
      description: 'Build modern, responsive web applications with cutting-edge technologies',
      requirements: [
        'BS in Computer Science or related field',
        'Experience with React, Next.js, and TypeScript',
        'Knowledge of modern CSS and design systems',
        'Understanding of web performance and accessibility'
      ],
      benefits: ['Remote work', 'Flexible schedule', 'Latest tech tools'],
      featured: false,
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and explore uncharted territories in technology',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Growth mindset with ongoing education and skill development',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Collaboration',
      description: 'Team-based approach to solving complex problems',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Impact',
      description: 'Focus on creating meaningful change in the world',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Dental and vision coverage',
        'Mental health support',
        'Gym membership reimbursement'
      ],
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      category: 'Financial',
      items: [
        'Competitive salary',
        'Stock options and equity',
        '401(k) with company match',
        'Performance bonuses'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Flexible work hours',
        'Unlimited PTO',
        'Remote work options',
        'Flexible holidays'
      ],
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Growth & Development',
      items: [
        'Professional development budget',
        'Conference attendance',
        'Online learning platforms',
        'Mentorship programs'
      ],
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const culture = [
    {
      title: 'Innovation Lab',
      description: 'Dedicated time for exploring new ideas and technologies',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Knowledge Sharing',
      description: 'Regular tech talks, workshops, and knowledge exchange sessions',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Team Events',
      description: 'Virtual and in-person team building activities',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Recognition',
      description: 'Awards and recognition for outstanding contributions',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Join the <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Build the next generation of AI consciousness, quantum computing, and space technology. 
                Join a team of innovators pushing the boundaries of what's possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Why Work at Zion Tech Group?</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We're not just building technology—we're shaping the future of human-AI collaboration
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Pioneering the Future</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  At Zion Tech Group, you'll work on cutting-edge technologies that don't just solve today's 
                  problems—they create tomorrow's possibilities. From AI consciousness to quantum computing, 
                  every project pushes the boundaries of what's possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Work on revolutionary AI consciousness systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Develop quantum-safe cybersecurity solutions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Build space resource intelligence platforms</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To accelerate human progress through conscious AI, quantum computing, and autonomous 
                    systems that solve the world's most complex challenges.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-20"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and shape our culture
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-full mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Benefits & Perks</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We take care of our team so you can focus on building the future
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg mb-4`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{benefit.category}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A collaborative environment that fosters innovation and growth
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culture.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-full mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join our team of innovators and help build the future of technology
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {openPositions.filter(position => position.featured).map((position, index) => (
                <motion.article
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${position.color} rounded-xl`}>
                          <position.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                          <p className="text-cyan-400 font-medium">{position.department}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <p className="text-gray-300 mb-4">{position.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>{position.experience}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <DollarSign className="w-4 h-4" />
                            <span>{position.salary}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                      
                      <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {openPositions.filter(position => !position.featured).map((position, index) => (
                <motion.article
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${position.color} rounded-lg`}>
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{position.department}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {position.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                      {position.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-3 h-3" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <button className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                      <span>Apply</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Resume
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;
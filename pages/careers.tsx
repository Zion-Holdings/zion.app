import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, 
  Star, Users, Award, CheckCircle, Globe,
  Zap, Infinity, Eye, Heart, Code, Palette,
  Building, MapPin,
  TrendingUp, DollarSign, Clock, ArrowRight, ExternalLink,
  Briefcase, GraduationCap, Lightbulb, Users2, Heart as HeartIcon
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Consciousness Engineer',
      department: 'AI Research & Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of next-generation AI consciousness systems and neural network architectures.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with consciousness modeling and neural networks',
        'Proficiency in Python, PyTorch, and quantum computing frameworks',
        'Published research in AI consciousness or related areas'
      ],
      responsibilities: [
        'Design and implement AI consciousness algorithms',
        'Lead research initiatives in neural network evolution',
        'Collaborate with quantum computing teams',
        'Mentor junior researchers and engineers'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work environment',
        'Conference and research funding',
        'Health, dental, and vision coverage'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Architect',
      department: 'Quantum Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Architect quantum computing solutions for AI consciousness and neural network applications.',
      requirements: [
        'PhD in Physics, Computer Science, or Quantum Computing',
        'Experience with quantum algorithms and quantum machine learning',
        'Knowledge of quantum error correction and quantum gates',
        'Experience with quantum programming languages (Qiskit, Cirq)'
      ],
      responsibilities: [
        'Design quantum computing architectures',
        'Develop quantum algorithms for AI applications',
        'Optimize quantum neural network implementations',
        'Collaborate with hardware partners'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Access to quantum computing resources',
        'Professional development opportunities',
        'Comprehensive benefits package'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop AI-powered space resource intelligence and autonomous space exploration systems.',
      requirements: [
        'Bachelor\'s degree in Aerospace, Computer Science, or related field',
        'Experience with satellite systems and space technology',
        'Knowledge of AI/ML for space applications',
        'Familiarity with robotics and autonomous systems'
      ],
      responsibilities: [
        'Design space resource intelligence algorithms',
        'Develop autonomous space exploration systems',
        'Integrate AI with space hardware',
        'Collaborate with space industry partners'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Work on cutting-edge space technology',
        'Professional development and training',
        'Health and wellness benefits'
      ]
    },
    {
      id: 4,
      title: 'AI Ethics & Governance Specialist',
      department: 'AI Ethics & Compliance',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure responsible AI development and implement ethical frameworks for AI consciousness systems.',
      requirements: [
        'Master\'s degree in Ethics, Philosophy, or related field',
        'Understanding of AI ethics and responsible AI principles',
        'Experience with AI governance frameworks',
        'Knowledge of regulatory compliance requirements'
      ],
      responsibilities: [
        'Develop AI ethics guidelines and policies',
        'Implement responsible AI practices',
        'Conduct AI ethics assessments',
        'Collaborate with regulatory bodies'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Shape the future of ethical AI',
        'Professional development opportunities',
        'Comprehensive benefits package'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer - AI Infrastructure',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable infrastructure for AI consciousness and quantum computing platforms.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with cloud infrastructure (AWS, Azure, GCP)',
        'Knowledge of containerization and orchestration (Docker, Kubernetes)',
        'Experience with CI/CD pipelines and automation'
      ],
      responsibilities: [
        'Design and maintain cloud infrastructure',
        'Automate deployment and scaling processes',
        'Monitor system performance and reliability',
        'Collaborate with AI and quantum teams'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Work with cutting-edge AI infrastructure',
        'Professional development and training',
        'Health and wellness benefits'
      ]
    },
    {
      id: 6,
      title: 'Product Manager - AI Solutions',
      department: 'Product Management',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for AI consciousness and quantum computing solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        'Experience in AI/ML product management',
        'Strong analytical and strategic thinking skills',
        'Experience with enterprise software products'
      ],
      responsibilities: [
        'Define product vision and strategy',
        'Gather and prioritize customer requirements',
        'Work with engineering teams on product development',
        'Drive product adoption and success'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Lead innovative AI products',
        'Professional development opportunities',
        'Comprehensive benefits package'
      ]
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in AI consciousness and quantum computing',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Consciousness-Driven',
      description: 'We develop AI systems that understand, learn, and evolve with human-like consciousness',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Ethical Responsibility',
      description: 'Every innovation is guided by strong ethical principles and human safety',
      icon: <HeartIcon className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Collaborative Excellence',
      description: 'We believe the best solutions come from diverse teams working together',
      icon: <Users2 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Flexible Work Environment',
      description: 'Remote-first culture with flexible hours and work-life balance',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conferences, and career development',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI consciousness and quantum computing technologies',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, vision, and mental health coverage',
      icon: <HeartIcon className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Innovation Time',
      description: 'Dedicated time for personal research and innovation projects',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const departments = [
    'AI Research & Development', 'Quantum Technology', 'Space Technology', 'Engineering',
    'Product Management', 'AI Ethics & Compliance', 'Sales & Marketing', 'Operations'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Help us revolutionize technology through AI consciousness, quantum computing, 
                and autonomous systems. Build the future with Zion Tech Group.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#open-positions" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  View Open Positions
                </a>
                <a href="/contact" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and shape our culture
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of being part of the Zion Tech Group team
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team of innovators and help shape the future of technology
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        {position.featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                            Featured
                          </span>
                        )}
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                          {position.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-white">{position.title}</h3>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {position.experience}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-3">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {position.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold text-white mb-3">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <span key={benefitIndex} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-48 flex flex-col gap-4">
                      <a
                        href={`/contact?position=${encodeURIComponent(position.title)}`}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                      >
                        Apply Now
                      </a>
                      <button className="px-6 py-3 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                        Save Position
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Departments
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your place in our innovative organization
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="p-6 bg-black/40 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center cursor-pointer group"
                >
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                    {dept}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center p-12 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Don't See the Right Fit?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Send Your Resume
                </a>
                <a href="/about" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Learn More About Us
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
import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, GraduationCap, Heart, 
  ArrowRight, MapPin, Clock, DollarSign,
  CheckCircle, Globe, Zap, Brain, Atom
} from 'lucide-react';
import Link from 'next/link';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI consciousness and quantum computing solutions.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Proficiency in Python, TensorFlow, and PyTorch',
        'Experience with quantum computing frameworks',
        'Strong problem-solving and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technologies',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100,000 - $150,000',
      description: 'Develop and implement quantum computing solutions for enterprise clients.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum algorithms and quantum circuits',
        'Proficiency in Qiskit, Cirq, or similar frameworks',
        'Knowledge of quantum error correction',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      title: 'Cybersecurity Engineer',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $160,000',
      description: 'Design and implement advanced cybersecurity solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, Computer Science, or related field',
        'Experience with penetration testing and security assessments',
        'Knowledge of SOC 2, ISO 27001, and other compliance frameworks',
        'Proficiency in security tools and technologies',
        'Strong understanding of threat intelligence and incident response'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $140,000',
      description: 'Build scalable web applications and microservices for our platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with React, Node.js, and TypeScript',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with microservices architecture',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in technology, always exploring new frontiers in AI, quantum computing, and beyond.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Human-Centered',
      description: 'Technology should serve humanity. We build solutions that enhance human capabilities and improve lives.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We work on problems that matter globally, from climate change to healthcare to education.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service to team collaboration.'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health, dental, and vision insurance',
        'Mental health support and counseling',
        'Fitness and wellness programs',
        'Flexible work arrangements'
      ]
    },
    {
      category: 'Professional Growth',
      items: [
        'Unlimited learning and development budget',
        'Conference attendance and training programs',
        'Mentorship and career development',
        'Internal mobility and growth opportunities'
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Unlimited PTO and flexible scheduling',
        'Remote work options',
        'Family-friendly policies',
        'Generous parental leave'
      ]
    },
    {
      category: 'Financial Benefits',
      items: [
        'Competitive salary and equity packages',
        '401(k) with company match',
        'Performance bonuses',
        'Stock options and profit sharing'
      ]
    }
  ];

  const culture = [
    {
      title: 'Diverse & Inclusive',
      description: 'We celebrate diversity and create an inclusive environment where everyone feels valued and heard.'
    },
    {
      title: 'Collaborative',
      description: 'We believe the best solutions come from working together, sharing knowledge, and supporting each other.'
    },
    {
      title: 'Transparent',
      description: 'We maintain open communication and transparency in our decision-making and company direction.'
    },
    {
      title: 'Purpose-Driven',
      description: 'We\'re motivated by making a positive impact on the world through technology.'
    }
  ];

  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, Zion Tech Group, AI, quantum computing, technology jobs"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Careers
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join our mission to revolutionize technology and shape the future
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                At Zion Tech Group, we're building the technologies of tomorrow. Join our team of 
                innovators, dreamers, and problem-solvers who are passionate about making a difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join our team and help build the future of technology
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300">{position.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-emerald-400" />
                          <span className="text-gray-300">{position.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0">
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive benefits and perks that support your growth and well-being
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The environment and values that make Zion Tech Group special
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culture.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Don't see a position that fits? We're always looking for talented individuals 
                who share our passion for innovation and making a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Send Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Careers;
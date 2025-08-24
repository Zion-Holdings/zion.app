import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Rocket, Brain, 
  Atom, Microscope, Cpu, Shield, Star, TrendingUp,
  CheckCircle, ArrowRight, Phone, Mail, MapPin,
  Briefcase, GraduationCap, Heart, Zap, Lightbulb
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';
import UltraFuturisticBackground2030 from '../components/backgrounds/UltraFuturisticBackground2030';

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Consciousness Researcher',
      department: 'AI Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead research into artificial consciousness and emotional intelligence systems.',
      requirements: [
        'PhD in Computer Science, Neuroscience, or related field',
        'Experience with large language models and neural networks',
        'Background in consciousness studies or cognitive science',
        'Strong publication record in AI/ML conferences'
      ],
      responsibilities: [
        'Design and implement consciousness algorithms',
        'Lead research team of 5-8 researchers',
        'Publish findings in top-tier conferences',
        'Collaborate with external research partners'
      ],
      benefits: [
        'Competitive salary: $150,000 - $250,000',
        'Equity package',
        'Flexible work arrangements',
        'Conference and research budget'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Engineer',
      department: 'Quantum Computing',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum algorithms and quantum-classical hybrid systems.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or Mathematics',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum error correction',
        'Background in quantum algorithms'
      ],
      responsibilities: [
        'Implement quantum algorithms for financial modeling',
        'Optimize quantum-classical hybrid systems',
        'Contribute to quantum security protocols',
        'Work with quantum hardware partners'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Health, dental, and vision insurance',
        '401(k) with company match',
        'Professional development budget'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Systems Engineer',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and develop autonomous space mining and exploration systems.',
      requirements: [
        'BS/MS in Aerospace Engineering, Robotics, or related field',
        'Experience with autonomous systems and robotics',
        'Knowledge of space systems and orbital mechanics',
        'Background in control systems and AI'
      ],
      responsibilities: [
        'Design autonomous space mining systems',
        'Develop orbital mechanics algorithms',
        'Implement AI-driven decision making',
        'Coordinate with space industry partners'
      ],
      benefits: [
        'Competitive salary: $130,000 - $190,000',
        'Comprehensive benefits package',
        'Stock options',
        'Flexible work schedule'
      ]
    },
    {
      id: 4,
      title: 'Biotechnology Research Scientist',
      department: 'Biotechnology',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop DNA computing and personalized medicine solutions.',
      requirements: [
        'PhD in Molecular Biology, Biochemistry, or related field',
        'Experience with DNA sequencing and manipulation',
        'Background in computational biology',
        'Knowledge of machine learning applications in biology'
      ],
      responsibilities: [
        'Develop DNA computing platforms',
        'Research personalized medicine algorithms',
        'Collaborate with medical research institutions',
        'Publish research findings'
      ],
      benefits: [
        'Competitive salary: $110,000 - $170,000',
        'Health and wellness benefits',
        'Research publication bonuses',
        'Conference attendance support'
      ]
    },
    {
      id: 5,
      title: 'DevOps Automation Engineer',
      department: 'Enterprise IT',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build and maintain autonomous DevOps platforms and infrastructure.',
      requirements: [
        'BS in Computer Science or related field',
        'Experience with Kubernetes, Docker, and cloud platforms',
        'Knowledge of CI/CD pipelines and automation',
        'Background in Python, Go, or similar languages'
      ],
      responsibilities: [
        'Develop autonomous DevOps platforms',
        'Implement infrastructure as code',
        'Monitor and optimize system performance',
        'Collaborate with development teams'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Remote work flexibility',
        'Health insurance',
        'Professional certification support'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push boundaries and explore uncharted territories in technology.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great ideas come from diverse teams working together.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Impact-Driven',
      description: 'We measure success by the positive change we create.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in our work.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity packages and performance bonuses'
    },
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible schedules and time zones'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Unlimited learning budget, conference attendance, and skill development'
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Time',
      description: '20% time for personal projects and experimental research'
    },
    {
      icon: Star,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and leadership opportunities'
    }
  ];

  const culture = [
    {
      title: 'Diverse & Inclusive',
      description: 'We celebrate diversity and create an inclusive environment where everyone can thrive.',
      icon: Users
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and respect for personal time and boundaries.',
      icon: Heart
    },
    {
      title: 'Continuous Learning',
      description: 'Always growing, always learning. We invest in your development and curiosity.',
      icon: GraduationCap
    },
    {
      title: 'Impact & Purpose',
      description: 'Work on technologies that will shape the future of humanity.',
      icon: Target
    }
  ];

  return (
    <UltraFuturisticBackground2030>
      <Head>
        <title>Careers at Zion Tech Group - Join the Technology Revolution | AI, Quantum Computing, Space Tech</title>
        <meta name="description" content="Join Zion Tech Group and help build the future of technology. Explore career opportunities in AI consciousness, quantum computing, space technology, and biotechnology." />
        <meta name="keywords" content="Zion Tech Group careers, AI jobs, quantum computing jobs, space technology jobs, biotechnology jobs, technology careers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Careers at Zion Tech Group - Join the Technology Revolution" />
        <meta property="og:description" content="Join our team and help build the future of technology with AI consciousness, quantum computing, and space innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Zion Tech Group - Join the Technology Revolution" />
        <meta name="twitter:description" content="Join our team and help build the future of technology." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
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
                Join the Revolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Help us build the future of technology. Work on revolutionary AI consciousness, quantum computing, space mining, and biotechnology solutions that will transform humanity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Learn About Culture
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
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

      {/* Benefits Section */}
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
                Why Work With Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in taking care of our team so they can focus on changing the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
                Our Culture
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building more than technology - we're building a community of innovators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team of visionaries and help build the future of technology.
            </p>
          </motion.div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                  >
                    Apply Now
                  </motion.button>
                </div>

                <p className="text-gray-300 mb-6">{position.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Responsibilities</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-cyan-500/20">
                  <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Build the
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Future?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see the perfect role? We're always looking for exceptional talent. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Send Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Contact Recruiting
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>careers@ziontechgroup.com</span>
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

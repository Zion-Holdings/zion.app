import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Zap, Target, CheckCircle, ArrowRight, 
  Building, Globe, Star, Award, Briefcase, GraduationCap,
  Heart, Lightbulb, Shield, TrendingUp, MapPin, Clock
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions including machine learning models, NLP systems, and computer vision applications.',
      requirements: [
          'Advanced degree in Computer Science, AI, or related field',
          'Expertise in Python, TensorFlow, PyTorch',
          'Experience with large language models and AI deployment',
          'Strong background in machine learning algorithms'
      ],
      responsibilities: [
          'Design and implement AI solutions for enterprise clients',
          'Lead AI research and development initiatives',
          'Mentor junior AI engineers',
          'Collaborate with cross-functional teams'
      ]
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum computing solutions and algorithms for financial services, cryptography, and optimization problems.',
      requirements: [
          'PhD in Physics, Computer Science, or related field',
          'Experience with quantum programming languages (Qiskit, Cirq)',
          'Knowledge of quantum algorithms and quantum mechanics',
          'Background in quantum error correction'
      ],
      responsibilities: [
          'Design quantum algorithms for specific use cases',
          'Implement quantum solutions on various platforms',
          'Research quantum computing applications',
          'Collaborate with research institutions'
      ]
    },
    {
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop satellite technology, space communications, and space infrastructure solutions.',
      requirements: [
          'Degree in Aerospace Engineering, Physics, or related field',
          'Experience with satellite systems and space technology',
          'Knowledge of orbital mechanics and space communications',
          'Familiarity with space industry standards'
      ],
      responsibilities: [
          'Design satellite and space technology solutions',
          'Develop space communications protocols',
          'Work on space infrastructure projects',
          'Collaborate with space industry partners'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'IT Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain cloud infrastructure, CI/CD pipelines, and deployment automation systems.',
      requirements: [
          'Experience with AWS, Azure, or Google Cloud',
          'Proficiency in Docker, Kubernetes, Terraform',
          'Knowledge of CI/CD tools and practices',
          'Experience with monitoring and logging tools'
      ],
      responsibilities: [
          'Design and implement cloud infrastructure',
          'Automate deployment and scaling processes',
          'Monitor system performance and security',
          'Collaborate with development teams'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Micro SAAS',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build modern, responsive web applications using React, Next.js, and modern frontend technologies.',
      requirements: [
          'Proficiency in React, TypeScript, and modern JavaScript',
          'Experience with Next.js and modern CSS frameworks',
          'Knowledge of responsive design principles',
          'Understanding of web performance optimization'
      ],
      responsibilities: [
          'Develop user interfaces for web applications',
          'Implement responsive design and animations',
          'Optimize application performance',
          'Collaborate with design and backend teams'
      ]
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies',
      icon: <Lightbulb className="w-12 h-12 text-yellow-400" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: <Star className="w-12 h-12 text-blue-400" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives',
      icon: <Users className="w-12 h-12 text-green-400" />
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles',
      icon: <Shield className="w-12 h-12 text-purple-400" />
    },
    {
      title: 'Growth',
      description: 'We invest in continuous learning and personal development',
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />
    },
    {
      title: 'Impact',
      description: 'We create solutions that make a positive difference',
      icon: <Heart className="w-12 h-12 text-red-400" />
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Dental and vision coverage',
        'Mental health support',
        'Fitness program reimbursement'
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Flexible remote work options',
        'Unlimited paid time off',
        'Flexible scheduling',
        'Parental leave programs'
      ]
    },
    {
      category: 'Professional Development',
      items: [
        'Conference and training budgets',
        'Online learning platforms',
        'Mentorship programs',
        'Career advancement opportunities'
      ]
    },
    {
      category: 'Financial Benefits',
      items: [
        'Competitive salary packages',
        'Performance bonuses',
        'Stock options',
        '401(k) with company match'
      ]
    }
  ];

  const cultureHighlights = [
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere with our distributed team approach',
      icon: <Globe className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Innovation Labs',
      description: 'Dedicated time for research and experimental projects',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Learning Culture',
      description: 'Continuous education and skill development programs',
      icon: <GraduationCap className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Impact-Driven',
      description: 'Work on projects that solve real-world challenges',
      icon: <Target className="w-8 h-8 text-purple-400" />
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
            Join Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Build the future of technology with Zion Tech Group. Join a team of innovators, problem-solvers, and visionaries.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#positions" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#culture" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Explore Our Culture
            </a>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section id="culture" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes Zion Tech Group a unique place to work and grow.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureHighlights.map((highlight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits and unique perks.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {benefits.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help us build the future of technology.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{position.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.type}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </span>
                    </div>
                  </div>
                  <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                    Apply Now
                  </a>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
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

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Send Your Resume</span>
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
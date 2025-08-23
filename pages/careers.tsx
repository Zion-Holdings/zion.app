import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Globe, Award, Rocket, Shield, Brain, Heart, Target, Star, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      title: 'Innovation Culture',
      description: 'Work on cutting-edge technology that shapes the future',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning and career development opportunities',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Global Impact',
      description: 'Contribute to solutions that transform industries worldwide',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Competitive Benefits',
      description: 'Comprehensive health, wellness, and financial benefits',
      icon: <Award className="w-8 h-8" />
    }
  ];

  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead development of cutting-edge AI solutions and machine learning models',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and neural networks'
      ]
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Develop quantum algorithms and quantum-safe security solutions',
      requirements: [
        'PhD in Physics, Computer Science, or Quantum Computing',
        'Experience with quantum programming languages',
        'Knowledge of quantum cryptography and algorithms',
        'Research background in quantum information science'
      ]
    },
    {
      title: 'Cloud Infrastructure Engineer',
      department: 'Cloud & DevOps',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build scalable cloud infrastructure and automation solutions',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with AWS, Azure, or GCP',
        'Expertise in Kubernetes, Docker, and Terraform',
        'Experience with CI/CD pipelines and automation'
      ]
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Protect digital assets and ensure compliance with security standards',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '2+ years experience in security analysis',
        'Knowledge of SOC2, ISO 27001, and other frameworks',
        'Experience with security tools and incident response'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Build the future of technology with a team that's pioneering AI, quantum computing, and space technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Join Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's pushing the boundaries of what's possible with technology
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.4 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Company Culture Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Culture
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
              Our team members are passionate about technology and committed to making a positive impact 
              on the world through their work.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              We believe in empowering our employees to take ownership of their projects, 
              experiment with new ideas, and grow both personally and professionally.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Flexible work arrangements and remote options</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Continuous learning and skill development</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Collaborative and inclusive environment</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                <h4 className="text-xl font-bold text-white mb-2">Our Values</h4>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Innovation and creativity</li>
                  <li>• Excellence in everything we do</li>
                  <li>• Integrity and transparency</li>
                  <li>• Collaboration and teamwork</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Open Positions Section */}
      <div id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Open Positions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our team and help us build the future of technology
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="space-y-6"
        >
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 1.0 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium"
                >
                  Apply Now
                </Link>
              </div>
              <p className="text-gray-300 mb-4">{position.description}</p>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start space-x-3 text-gray-400">
                      <Star className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
            >
              Send Your Resume
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Heart, Globe, Brain, Shield, Cpu, Rocket } from 'lucide-react';
import Link from 'next/link';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build cutting-edge AI solutions for enterprise clients',
      requirements: ['5+ years ML/AI experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred'],
      icon: <Brain className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Research & Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Develop next-generation quantum computing solutions',
      requirements: ['PhD in Physics/Computer Science', 'Quantum algorithms experience', 'Qiskit/Cirq knowledge'],
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Design enterprise-grade security solutions',
      requirements: ['10+ years security experience', 'Zero Trust architecture', 'SOC 2/ISO 27001 expertise'],
      icon: <Shield className="w-8 h-8 text-red-400" />
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build scalable cloud infrastructure and automation',
      requirements: ['3+ years DevOps experience', 'AWS/Azure/GCP', 'Kubernetes, Docker'],
      icon: <Cpu className="w-8 h-8 text-green-400" />
    }
  ];

  const benefits = [
    'Competitive salary and equity', 'Remote-first culture', 'Health, dental, and vision insurance',
    '401(k) with company match', 'Unlimited PTO', 'Professional development budget',
    'Latest technology and tools', 'Flexible work hours'
  ];

  const values = [
    { title: 'Innovation', description: 'Pushing boundaries in technology', icon: <Rocket className="w-8 h-8 text-blue-400" /> },
    { title: 'Excellence', description: 'Delivering the highest quality solutions', icon: <Heart className="w-8 h-8 text-red-400" /> },
    { title: 'Collaboration', description: 'Working together to achieve greatness', icon: <Users className="w-8 h-8 text-green-400" /> },
    { title: 'Global Impact', description: 'Solving world-changing problems', icon: <Globe className="w-8 h-8 text-purple-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build the future with us. We're looking for passionate technologists who want to solve 
            the world's most challenging problems with cutting-edge AI, quantum computing, and cybersecurity.
          </p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">{benefit}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {position.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{position.title}</h3>
                    <p className="text-gray-400">{position.department} • {position.location}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {position.type}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Send Resume
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;
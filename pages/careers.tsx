import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Brain, Globe, Award, Zap, 
  Heart, Star, ArrowRight, CheckCircle, Briefcase
} from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai-research', name: 'AI Research' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'space-tech', name: 'Space Technology' },
    { id: 'sales', name: 'Sales & Business Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and neural networks',
        'Strong problem-solving and analytical skills'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum computing solutions.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum information theory',
        'Strong mathematical and theoretical background'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'space-tech',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and develop innovative space technology solutions and satellite systems.',
      requirements: [
        'Degree in Aerospace Engineering, Physics, or related field',
        'Experience with satellite design and space systems',
        'Knowledge of orbital mechanics and space environment',
        'Familiarity with space industry standards and regulations'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and cloud-based solutions.',
      requirements: [
        'Experience with React, Node.js, and cloud platforms',
        'Knowledge of modern web technologies and APIs',
        'Understanding of software architecture and design patterns',
        'Experience with DevOps and CI/CD practices'
      ]
    },
    {
      id: 5,
      title: 'Business Development Manager',
      department: 'sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth through strategic partnerships and client relationships.',
      requirements: [
        'Proven track record in B2B sales and business development',
        'Experience in technology or consulting industries',
        'Strong networking and relationship-building skills',
        'Understanding of emerging technologies and market trends'
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push boundaries and explore new technologies to solve complex problems.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'People Matter',
      description: 'Our team is our greatest asset, and we invest in their growth and well-being.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We create solutions that make a difference in the world.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    }
  ];

  const benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote work options',
    'Professional development and training programs',
    'Generous paid time off and holidays',
    '401(k) with company matching',
    'Modern technology and equipment',
    'Collaborative and inclusive work environment'
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <Layout>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team revolutionizing technology. Explore career opportunities in AI, quantum computing, and space technology." />
        <meta name="keywords" content="careers, jobs, Zion Tech Group, technology careers, AI jobs, quantum computing jobs" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and help revolutionize technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Head>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's revolutionizing technology through AI, quantum computing, 
            and space technology. Help us build the future.
          </p>
        </motion.div>

        {/* Company Culture */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Culture & Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 p-8 rounded-2xl border border-gray-600/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Job Openings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Open Positions</h2>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                        {departments.find(d => d.id === job.department)?.name}
                      </span>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`/contact?position=${encodeURIComponent(job.title)}`}
                    className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No Open Positions</h3>
              <p className="text-gray-500">
                We don't have any open positions in this department at the moment. 
                Check back later or send us your resume for future opportunities.
              </p>
            </div>
          )}
        </motion.div>

        {/* General Application */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
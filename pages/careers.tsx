import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Brain, Shield, Zap, Star, ArrowRight, MapPin, Clock, DollarSign, Heart, Award, Code, Cloud, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Lead AI model development and deployment for cutting-edge applications',
      requirements: ['Advanced ML/AI expertise', 'Python, TensorFlow, PyTorch', 'Cloud deployment experience'],
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Quantum Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100k - $150k',
      description: 'Research and develop quantum algorithms and quantum computing solutions',
      requirements: ['Quantum physics background', 'Qiskit/Cirq experience', 'Algorithm development'],
      icon: <Shield className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $140k',
      description: 'Build scalable web applications and APIs for our technology platforms',
      requirements: ['React, Node.js, TypeScript', 'Cloud infrastructure', 'API development'],
      icon: <Code className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $160k',
      description: 'Design and maintain cloud infrastructure and deployment pipelines',
      requirements: ['AWS/Azure/GCP', 'Kubernetes, Docker', 'CI/CD pipelines'],
      icon: <Cloud className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$95k - $145k',
      description: 'Analyze complex data sets and develop predictive models',
      requirements: ['Statistics, ML algorithms', 'Python, R, SQL', 'Data visualization'],
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $170k',
      description: 'Lead product strategy and development for AI and quantum technology products',
      requirements: ['Product management experience', 'AI/ML domain knowledge', 'Agile methodologies'],
      icon: <Target className="w-8 h-8 text-yellow-400" />
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options',
      icon: <DollarSign className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible schedules',
      icon: <MapPin className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage',
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning and career development',
      icon: <Rocket className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Innovation Time',
      description: '20% time for personal projects and research',
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Team Events',
      description: 'Regular team building and social activities',
      icon: <Users className="w-6 h-6 text-yellow-400" />
    }
  ];

  const values = [
    'Innovation at the forefront of technology',
    'Collaboration and knowledge sharing',
    'Excellence in everything we do',
    'Customer-centric solutions',
    'Ethical AI and responsible technology',
    'Continuous learning and growth'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Users className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Build the future of technology with AI, quantum computing, and space technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#open-positions" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 text-lg">
                View Open Positions
              </Button>
              <Button href="/contact" variant="outline" className="border-purple-500 text-purple-400 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
              >
                <Star className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer competitive benefits and a culture that fosters innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our team and help build the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="mb-4">
                    {position.icon}
                  </div>
                  <span className="inline-block bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">
                    {position.department}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{position.title}</h3>
                <p className="text-gray-400 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    {position.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                    {position.salary}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-3 h-3 text-purple-400 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/contact" className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss opportunities
            </p>
            <Button href="/contact" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-10 py-4 text-lg">
              Send Your Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
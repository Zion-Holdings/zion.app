import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Brain, Atom, Globe, ArrowRight, Star, Heart, Zap, Shield, Cpu, Database } from 'lucide-react';
import Link from 'next/link';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Consciousness Engineer',
      department: 'AI & Consciousness',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Lead the development of next-generation AI consciousness systems'
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'London, UK',
      type: 'Full-time',
      experience: '3+ years',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      description: 'Develop quantum algorithms and quantum-resistant solutions'
    },
    {
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Tokyo, Japan',
      type: 'Full-time',
      experience: '4+ years',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      description: 'Build innovative space exploration and resource intelligence systems'
    },
    {
      title: 'DevOps Automation Engineer',
      department: 'IT Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      description: 'Create autonomous DevOps platforms and automation systems'
    },
    {
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '6+ years',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Design next-generation cybersecurity solutions and zero-trust architectures'
    },
    {
      title: 'Data Science Lead',
      department: 'AI & Analytics',
      location: 'London, UK',
      type: 'Full-time',
      experience: '5+ years',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      description: 'Lead data science initiatives and AI-powered analytics platforms'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and equity packages',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible remote work options worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const values = [
    'Innovation at the core of everything we do',
    'Collaboration and teamwork across all departments',
    'Continuous learning and personal growth',
    'Work-life balance and employee well-being',
    'Diversity, equity, and inclusion',
    'Environmental responsibility and sustainability'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Join Our Users
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Careers at Zion Tech Group
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Join us in building the future of technology. We're looking for passionate, 
              innovative minds to help us revolutionize AI, quantum computing, and space technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#open-positions" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just building technology – we're building the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} mb-6`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 relative bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Company Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide our culture and drive our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our team of innovators and help us build the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${position.color}`}>
                      <position.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{position.title}</h3>
                  <p className="text-gray-400 mb-4">{position.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-300">
                      <span className="font-medium mr-2">Department:</span>
                      {position.department}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <span className="font-medium mr-2">Location:</span>
                      {position.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <span className="font-medium mr-2">Experience:</span>
                      {position.experience}
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/about" className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
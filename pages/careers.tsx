import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, Rocket, Zap, Globe, Award, Heart, Briefcase, Star } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'AI Consciousness Engineer',
      department: 'AI & Consciousness',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI consciousness team to develop next-generation AI systems with self-awareness and emotional intelligence.',
      skills: ['Machine Learning', 'Neural Networks', 'Python', 'AI Ethics', 'Quantum Computing']
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Work on cutting-edge quantum computing solutions and quantum-resistant cybersecurity systems.',
      skills: ['Quantum Computing', 'Quantum Algorithms', 'Python', 'Linear Algebra', 'Cryptography']
    },
    {
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop innovative space exploration and resource intelligence platforms.',
      skills: ['Satellite Technology', 'Space Systems', 'Python', 'Data Analytics', 'AI/ML']
    },
    {
      title: 'DevOps Automation Engineer',
      department: 'IT Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build autonomous DevOps platforms and infrastructure automation systems.',
      skills: ['DevOps', 'Kubernetes', 'Docker', 'Python', 'Infrastructure as Code']
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Remote First',
      description: 'Work from anywhere in the world with our distributed team.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation Culture',
      description: 'Be part of a team that pushes the boundaries of technology.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Continuous learning and advancement opportunities.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and supportive work environment.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                <span>Join Our Team</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Careers at
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Join our mission to revolutionize technology and shape the future. 
                We're looking for passionate innovators who want to make a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300">
                  Learn About Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the benefits of being part of our innovative team and 
                the opportunities that await you at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${benefit.color} bg-opacity-10 border border-opacity-30 h-full transition-all duration-300 group-hover:scale-105 group-hover:bg-opacity-20`}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore exciting opportunities to join our team and contribute to 
                groundbreaking technology solutions.
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
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-500/30">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl font-semibold text-white">{position.title}</h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-full">
                            {position.type}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center space-x-6 text-gray-400 mb-4">
                          <span className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{position.department}</span>
                          </span>
                          <span className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <span>{position.location}</span>
                          </span>
                          <span className="flex items-center space-x-2">
                            <Star className="w-4 h-4" />
                            <span>{position.experience}</span>
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {position.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Culture
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  At Zion Tech Group, we foster a culture of innovation, collaboration, 
                  and continuous learning. We believe in empowering our team members 
                  to think creatively and push boundaries.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our diverse team brings together experts from various fields, 
                  creating an environment where different perspectives drive innovation 
                  and breakthrough solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Join Our Team</h3>
                    <p className="text-gray-300 mb-6">
                      Be part of a team that's shaping the future of technology 
                      and making a real impact in the world.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                      Explore Opportunities
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                If you're passionate about technology and want to make a difference, 
                we'd love to hear from you. Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                  View All Positions
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300">
                  Contact HR Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Users, Target, Award, Globe, 
  TrendingUp, Shield, Zap, Rocket
} from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Zap
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results",
      icon: Target
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do",
      icon: Award
    },
    {
      title: "Global Impact",
      description: "Creating solutions that make a difference worldwide",
      icon: Globe
    }
  ];

  const team = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader with expertise in AI, quantum computing, and emerging technologies"
    },
    {
      name: "AI Team",
      role: "Machine Learning Engineers",
      description: "Experts in developing cutting-edge AI solutions and neural networks"
    },
    {
      name: "Quantum Team",
      role: "Quantum Computing Specialists",
      description: "Pioneers in quantum algorithms and quantum-safe cryptography"
    },
    {
      name: "Security Team",
      role: "Cybersecurity Experts",
      description: "Dedicated to protecting digital assets with advanced security solutions"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for autonomous business operations"
    },
    {
      year: "2021",
      title: "First AI Platform",
      description: "Launched our flagship AI-powered business intelligence platform"
    },
    {
      year: "2022",
      title: "Quantum Breakthrough",
      description: "Developed breakthrough quantum computing algorithms for financial modeling"
    },
    {
      year: "2023",
      title: "Enterprise Expansion",
      description: "Expanded services to serve Fortune 500 companies across multiple industries"
    },
    {
      year: "2024",
      title: "Space Technology",
      description: "Ventured into space technology with satellite communication solutions"
    },
    {
      year: "2025",
      title: "Global Leadership",
      description: "Recognized as a global leader in autonomous business technology"
    }
  ];

  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of autonomous business operations with cutting-edge AI, 
                quantum computing, and emerging technologies
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-gray-300 mb-6">
                  To revolutionize business operations through autonomous AI systems that continuously learn, 
                  adapt, and optimize, enabling organizations to achieve unprecedented efficiency and innovation.
                </p>
                <p className="text-lg text-gray-400">
                  We believe in a future where technology works seamlessly in the background, 
                  allowing humans to focus on creativity, strategy, and meaningful work.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-gray-300 mb-4">
                    To be the global leader in autonomous business technology, creating a world where 
                    every organization can operate with the efficiency and intelligence of a fully 
                    automated, AI-driven system.
                  </p>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Rocket className="w-5 h-5" />
                    <span className="font-semibold">Building the Future, Today</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                World-class experts dedicated to pushing the boundaries of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Key milestones in our mission to revolutionize business technology
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-black"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Whether you're looking to partner with us, join our team, or learn more about our technology, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get in Touch
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Careers
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
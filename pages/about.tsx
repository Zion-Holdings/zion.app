import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Zap, Target, Atom, Cpu, 
  Globe, Users, Phone, Mail, MapPin, ArrowRight, 
  Star, Sparkles, Lock, Cloud, Award, Heart,
  Building, ChartBar, Code, Database, Server,
  CheckCircle, TrendingUp, Lightbulb, Eye
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <CheckCircle className="w-8 h-8 text-cyan-400" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Building className="w-8 h-8 text-purple-400" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-8 h-8 text-green-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Users className="w-8 h-8 text-pink-400" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-400" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and novel approaches to solve complex business challenges.'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: 'Security & Trust',
      description: 'Security is embedded in everything we do. We build trust through transparent practices and robust security measures.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to understand your goals and deliver solutions that drive real business value.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: 'Continuous Growth',
      description: 'We never stop learning and evolving. Our team continuously enhances skills and knowledge to stay ahead of industry trends.'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Technology visionary with 15+ years of experience in AI, quantum computing, and enterprise solutions.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Enterprise Architecture']
    },
    {
      name: 'AI Research Team',
      role: 'AI & ML Specialists',
      description: 'Expert researchers and engineers pushing the boundaries of artificial intelligence and machine learning.',
      expertise: ['Deep Learning', 'NLP', 'Computer Vision', 'AI Ethics']
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing Experts',
      description: 'Specialists in quantum algorithms, quantum security, and emerging quantum technologies.',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation']
    },
    {
      name: 'Enterprise Team',
      role: 'Solution Architects',
      description: 'Experienced professionals designing and implementing enterprise-grade technology solutions.',
      expertise: ['Cloud Architecture', 'DevOps', 'Security', 'Integration']
    }
  ];

  return (
    <Layout>
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize cutting-edge technology and make advanced AI, quantum computing, and automation solutions accessible to businesses of all sizes. We believe that every organization deserves access to the tools that will define the future.
                </p>
                <p className="text-lg text-gray-300">
                  Through our innovative approach and deep technical expertise, we help companies transform their operations, enhance their competitive advantage, and prepare for the challenges of tomorrow.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-8 rounded-2xl border border-cyan-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Vision</h3>
                  <p className="text-gray-300 mb-4">
                    To be the leading force in the technological revolution, creating a world where:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      AI enhances human creativity and productivity
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      Quantum computing solves previously impossible problems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      Automation frees humans for meaningful work
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      Technology serves humanity's highest aspirations
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                By The Numbers
              </h2>
              <p className="text-xl text-gray-300">
                Our impact in numbers - delivering results that speak for themselves
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300">
                The principles that guide everything we do
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                >
                  <div className="flex items-center mb-4">
                    {value.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{value.title}</h3>
                  </div>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300">
                The brilliant minds behind our innovative solutions
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the hundreds of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
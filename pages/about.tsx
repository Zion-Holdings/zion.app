import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Heart, Award, Star, Globe, Rocket, Brain, Atom, Shield, 
  Cloud, Zap, TrendingUp, Lightbulb, CheckCircle, ArrowRight, Phone, Mail, 
  MapPin, Linkedin, Twitter, Github, Calendar, Users as UsersIcon, Building
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const companyStats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '50+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '10+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> }
  ];

  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to create cutting-edge solutions that drive business transformation.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve your goals and exceed expectations.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality & Security',
      description: 'We maintain the highest standards of quality and security in everything we deliver.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Perspective',
      description: 'We bring global insights and best practices to solve local challenges and opportunities.'
    }
  ];

  const services = [
    {
      category: 'Artificial Intelligence',
      description: 'Advanced AI solutions including machine learning, neural networks, and cognitive computing',
      icon: <Brain className="w-6 h-6" />,
      examples: ['AI Strategy', 'Machine Learning', 'Neural Networks', 'Cognitive Computing']
    },
    {
      category: 'Quantum Computing',
      description: 'Revolutionary quantum computing services for next-generation computational power',
      icon: <Atom className="w-6 h-6" />,
      examples: ['Quantum Infrastructure', 'Quantum AI', 'Quantum Security', 'Quantum Applications']
    },
    {
      category: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure',
      icon: <Shield className="w-6 h-6" />,
      examples: ['Threat Protection', 'Cloud Security', 'Compliance', 'Incident Response']
    },
    {
      category: 'Cloud Computing',
      description: 'Scalable cloud solutions for modern business needs and digital transformation',
      icon: <Cloud className="w-6 h-6" />,
      examples: ['Cloud Migration', 'Multi-Cloud', 'DevOps', 'Cost Optimization']
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Quantum Computing',
      experience: '15+ years',
      avatar: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Security Officer',
      expertise: 'Cybersecurity & Compliance',
      experience: '12+ years',
      avatar: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. James Kim',
      role: 'Head of Research',
      expertise: 'Quantum Physics & Computing',
      experience: '18+ years',
      avatar: '/team/james-kim.jpg'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Cloud Solutions',
      expertise: 'Cloud Architecture & DevOps',
      experience: '14+ years',
      avatar: '/team/lisa-thompson.jpg'
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to revolutionize technology services'
    },
    {
      year: '2016',
      title: 'AI Division Launch',
      description: 'Launched our artificial intelligence services division'
    },
    {
      year: '2018',
      title: 'Quantum Computing Initiative',
      description: 'Began research and development in quantum computing technologies'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients worldwide'
    },
    {
      year: '2022',
      title: 'Cybersecurity Excellence',
      description: 'Recognized as a leader in cybersecurity solutions'
    },
    {
      year: '2024',
      title: 'Future Technologies',
      description: 'Pioneering next-generation AI and quantum solutions'
    }
  ];

  const certifications = [
    'ISO 27001 Information Security Management',
    'SOC 2 Type II Compliance',
    'AWS Advanced Consulting Partner',
    'Microsoft Gold Partner',
    'Google Cloud Premier Partner',
    'CISSP Certified Team Members',
    'PMP Certified Project Managers'
  ];

  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and expertise in AI, quantum computing, cybersecurity, and cloud services. Discover our team and company story."
      keywords="about us, Zion Tech Group, company, team, mission, values, AI, quantum computing, cybersecurity, cloud services"
      canonicalUrl="https://ziontechgroup.com/about"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                About Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of technology with cutting-edge AI, quantum computing, 
              cybersecurity, and cloud solutions that transform businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                Our Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate digital transformation. We believe in making 
                advanced technology accessible and practical for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Through our expertise in AI, quantum computing, cybersecurity, and cloud services, 
                we help our clients navigate the complex technology landscape and achieve sustainable 
                competitive advantages in an ever-evolving digital world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto">
                <Rocket className="w-32 h-32 text-purple-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships 
              with clients, partners, and team members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in four core technology domains, each designed to address 
              critical business challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.category}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in 
              technology, business, and innovation to drive our company's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-300 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-2">{member.expertise}</p>
                <p className="text-gray-500 text-xs">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From our founding to today, discover the key milestones that have shaped 
              Zion Tech Group into a technology leader.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-6 h-6 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-3 z-10`}></div>
                  <div className={`w-5/12 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is recognized through industry certifications 
              and partnerships with leading technology providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20"
              >
                <Award className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-12 border border-purple-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Work with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the hundreds of organizations that trust Zion Tech Group to deliver 
                innovative technology solutions that drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  Start a Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
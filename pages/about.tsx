import React from 'react';
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Heart, Zap, Brain, 
  Rocket, Shield, Globe, Star, CheckCircle,
  Phone, Mail, MapPin, Clock, Building
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Building className="w-8 h-8" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-8 h-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8" /> }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      icon: <Rocket className="w-12 h-12" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the impact we create for our clients.',
      icon: <Target className="w-12 h-12" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client communication.',
      icon: <Award className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      icon: <Heart className="w-12 h-12" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Technology visionary with 15+ years of experience in AI, quantum computing, and enterprise solutions.',
      expertise: ['AI/ML', 'Quantum Computing', 'Enterprise Architecture', 'Strategic Planning']
    },
    {
      name: 'AI Research Team',
      role: 'AI Innovation Lab',
      description: 'Cutting-edge researchers pushing the boundaries of artificial intelligence and machine learning.',
      expertise: ['Deep Learning', 'NLP', 'Computer Vision', 'AI Ethics']
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing Division',
      description: 'Specialists in quantum algorithms, quantum security, and quantum-classical hybrid systems.',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation', 'Quantum Materials']
    },
    {
      name: 'Enterprise Solutions',
      role: 'Business Technology',
      description: 'Experts in digital transformation, process automation, and enterprise infrastructure.',
      expertise: ['Digital Transformation', 'Process Automation', 'Cloud Architecture', 'DevOps']
    }
  ];

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  About Zion Tech Group
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Company Overview */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    Revolutionizing Technology Since 2020
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Zion Tech Group emerged from a vision to democratize cutting-edge technology and make 
                    advanced AI, quantum computing, and automation accessible to businesses of all sizes. 
                    We believe that technology should empower, not intimidate.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Our journey began with a simple mission: to bridge the gap between emerging technologies 
                    and practical business applications. Today, we're proud to be at the forefront of the 
                    AI revolution, helping organizations transform their operations and achieve unprecedented growth.
                  </p>
                  <div className="flex items-center gap-4 text-cyan-400">
                    <Globe className="w-6 h-6" />
                    <span className="font-medium">Global reach with local expertise</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-3xl font-bold text-white">Z</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                      <p className="text-gray-300">Revolutionary Technology Solutions</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">2020</div>
                          <div className="text-gray-400">Founded</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">DE</div>
                          <div className="text-gray-400">Headquarters</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Our Impact in Numbers</h2>
                <p className="text-xl text-gray-300">Delivering results that speak for themselves</p>
              </motion.div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-cyan-400 mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <div className="flex items-center gap-4 mb-6">
                      <Target className="w-12 h-12 text-cyan-400" />
                      <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      To democratize cutting-edge technology and empower businesses with AI, quantum computing, 
                      and automation solutions that drive innovation, efficiency, and sustainable growth.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                    <div className="flex items-center gap-4 mb-6">
                      <Star className="w-12 h-12 text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      To be the global leader in AI-powered business transformation, creating a future where 
                      technology enhances human potential and drives positive change across all industries.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
                <p className="text-xl text-gray-300">The principles that guide everything we do</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
                <p className="text-xl text-gray-300">Passionate experts dedicated to your success</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-cyan-400 font-medium">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{member.description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3">Areas of Expertise:</h4>
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our revolutionary technology solutions can drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Today
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
};

export default AboutPage;
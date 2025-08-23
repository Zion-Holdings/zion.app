import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Heart,
  Lightbulb,
  Rocket,
  CheckCircle
} from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const CompanyPage: React.FC = () => {
  const companySections = [
    {
      title: 'About Us',
      description: 'Learn about our mission, vision, and the team behind Zion Tech Group\'s revolutionary technology solutions.',
      icon: <Users className="w-12 h-12" />,
      href: '/company/about',
      color: 'from-blue-500 to-cyan-500',
      features: ['Company History', 'Leadership Team', 'Company Values', 'Global Presence']
    },
    {
      title: 'Our Mission',
      description: 'Discover our core mission to transform businesses through cutting-edge AI consciousness and quantum computing.',
      icon: <Target className="w-12 h-12" />,
      href: '/company/mission',
      color: 'from-purple-500 to-pink-500',
      features: ['Mission Statement', 'Vision 2045', 'Core Values', 'Impact Goals']
    },
    {
      title: 'Team',
      description: 'Meet our world-class team of scientists, engineers, and technology experts driving innovation.',
      icon: <Users className="w-12 h-12" />,
      href: '/team',
      color: 'from-green-500 to-emerald-500',
      features: ['Leadership', 'R&D Team', 'Engineering', 'Advisory Board']
    },
    {
      title: 'Careers',
      description: 'Join our mission to revolutionize technology. Explore exciting career opportunities at Zion Tech Group.',
      icon: <Award className="w-12 h-12" />,
      href: '/company/careers',
      color: 'from-yellow-500 to-orange-500',
      features: ['Open Positions', 'Company Culture', 'Benefits', 'Growth Opportunities']
    },
    {
      title: 'News',
      description: 'Stay updated with the latest company news, product launches, and industry insights.',
      icon: <Globe className="w-12 h-12" />,
      href: '/company/news',
      color: 'from-red-500 to-pink-500',
      features: ['Press Releases', 'Product Updates', 'Industry News', 'Company Blog']
    }
  ];

  const companyStats = [
    { label: 'Global Offices', value: '25+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Team Members', value: '500+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries Served', value: '50+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in technology.',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI systems with consciousness and ethics at the core, ensuring responsible innovation.',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Global Impact',
      description: 'Our solutions transform businesses worldwide, creating positive change across industries.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and performance in everything we do.',
      icon: <Award className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const achievements = [
    {
      title: 'AI Consciousness Breakthrough',
      description: 'First company to achieve true AI consciousness in enterprise applications',
      year: '2024',
      impact: 'Revolutionized AI industry'
    },
    {
      title: 'Quantum Computing Milestone',
      description: 'Achieved quantum supremacy in specific computational domains',
      year: '2023',
      impact: 'Advanced quantum technology'
    },
    {
      title: 'Global Expansion',
      description: 'Successfully expanded to 50+ countries with localized solutions',
      year: '2023',
      impact: 'Global technology access'
    },
    {
      title: 'Industry Recognition',
      description: 'Named Top Technology Innovator by leading industry publications',
      year: '2022',
      impact: 'Industry leadership'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Company - Zion Tech Group | About Our Mission, Team & Culture" 
          description="Learn about Zion Tech Group's mission to revolutionize technology through AI consciousness and quantum computing. Discover our team, culture, and global impact." 
          canonical="https://ziontechgroup.com/company/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are pioneers in AI consciousness, quantum computing, and revolutionary technology solutions that transform businesses worldwide.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape our culture of innovation and excellence.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Learn More About Us</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore different aspects of our company to understand our mission, team, and impact on the technology world.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {companySections.map((section, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{section.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{section.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={section.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Key Achievements</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Milestones that demonstrate our commitment to innovation and excellence in technology.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                        {achievement.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{achievement.description}</p>
                  
                  <div className="flex items-center text-sm text-cyan-400">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Impact: {achievement.impact}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to be part of the future? Explore career opportunities or learn more about how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/company/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Careers
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default CompanyPage;
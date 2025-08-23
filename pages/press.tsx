import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Download, Mail, Phone, Globe, FileText, Image, 
  Users, Award, TrendingUp, Star, Zap, Heart, 
  Brain, Atom, Rocket, Shield, Calendar, ArrowRight
} from 'lucide-react';

const PressPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Breakthrough technology enables AI systems with genuine emotional intelligence and consciousness capabilities.',
      date: '2025-01-15',
      category: 'Product Launch',
      url: '/press/ai-consciousness-platform-launch'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough Achieved',
      excerpt: 'New quantum algorithms solve previously impossible computational problems in minutes rather than years.',
      date: '2025-01-10',
      category: 'Research',
      url: '/press/quantum-computing-breakthrough'
    },
    {
      id: 3,
      title: 'Global Expansion: New Offices in Silicon Valley, London, Tokyo',
      excerpt: 'Zion Tech Group expands global presence to better serve international clients and attract top talent.',
      date: '2024-12-20',
      category: 'Company News',
      url: '/press/global-expansion-announcement'
    },
    {
      id: 4,
      title: 'Partnership with Leading Universities for AI Research',
      excerpt: 'Strategic partnerships with MIT, Stanford, and Oxford to advance AI consciousness research.',
      date: '2024-12-15',
      category: 'Partnerships',
      url: '/press/university-partnerships'
    }
  ];

  const mediaAssets = [
    {
      name: 'Company Logo',
      description: 'High-resolution Zion Tech Group logo in various formats',
      formats: ['SVG', 'PNG', 'JPG'],
      size: '2.3 MB',
      icon: Image
    },
    {
      name: 'Executive Headshots',
      description: 'Professional photos of key leadership team members',
      formats: ['JPG', 'PNG'],
      size: '15.2 MB',
      icon: Users
    },
    {
      name: 'Product Screenshots',
      description: 'High-quality screenshots of our technology platforms',
      formats: ['PNG', 'JPG'],
      size: '8.7 MB',
      icon: Brain
    },
    {
      name: 'Company Fact Sheet',
      description: 'Comprehensive overview of Zion Tech Group',
      formats: ['PDF'],
      size: '1.1 MB',
      icon: FileText
    },
    {
      name: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      formats: ['PDF'],
      size: '3.4 MB',
      icon: Image
    },
    {
      name: 'Press Kit',
      description: 'Complete media kit with all assets and information',
      formats: ['ZIP'],
      size: '45.8 MB',
      icon: Download
    }
  ];

  const companyStats = [
    { number: '2024', label: 'Founded', icon: Calendar },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Zap },
    { number: '∞', label: 'Innovation Potential', icon: TrendingUp }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'kleber@ziontechgroup.com',
    phone: '+1-302-464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout 
      title="Press & Media - Zion Tech Group"
      description="Press releases, media kit, and company information for journalists and media professionals covering Zion Tech Group."
      canonicalUrl="https://ziontechgroup.com/press"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-pink-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6"
              >
                <FileText className="w-4 h-4 mr-2" />
                Press & Media
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Press & Media
                </span>
                <br />
                <span className="text-white">Resources</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Welcome to Zion Tech Group's press center. Find the latest news, media assets, 
                and company information for journalists and media professionals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                About Zion Tech Group
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Zion Tech Group is a revolutionary technology company pioneering the future with AI consciousness, 
                quantum computing, and space technology innovations. Founded in 2024, we're committed to 
                accelerating human progress through cutting-edge technology that solves humanity's greatest challenges.
              </motion.p>
            </motion.div>

            {/* Company Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Latest Press Releases
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Stay updated with our latest announcements, product launches, and company news
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {pressReleases.map((release) => (
                <motion.article
                  key={release.id}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">
                      {release.category}
                    </span>
                    <span className="text-gray-400 text-sm">{formatDate(release.date)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {release.excerpt}
                  </p>
                  
                  <a
                    href={release.url}
                    className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300"
                  >
                    <span>Read Full Release</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <a
                href="/news"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                View All News
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Media Assets */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Media Assets
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Download high-quality media assets for your coverage of Zion Tech Group
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mediaAssets.map((asset, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <asset.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{asset.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{asset.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Formats:</span>
                      <span className="text-orange-300">{asset.formats.join(', ')}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Size:</span>
                      <span className="text-orange-300">{asset.size}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Download Complete Press Kit
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Media Contact
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Get in touch with our press team for interviews, quotes, and additional information
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
            >
              {/* Contact Details */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6">Press Inquiries</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Press Email</h4>
                      <a href={`mailto:${contactInfo.pressEmail}`} className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
                        {contactInfo.pressEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <a href={`tel:${contactInfo.phone}`} className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Website</h4>
                      <a href={contactInfo.website} className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Company Information */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6">Company Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Address</h4>
                    <p className="text-gray-300">{contactInfo.address}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">General Inquiries</h4>
                    <a href={`mailto:${contactInfo.generalEmail}`} className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
                      {contactInfo.generalEmail}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Response Time</h4>
                    <p className="text-gray-300">We typically respond to press inquiries within 24 hours during business days.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Ready to Cover Our Story?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Whether you're writing about AI consciousness, quantum computing, or space technology, 
                we're here to provide the information and resources you need.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href={`mailto:${contactInfo.pressEmail}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Press Team
                </a>
                <a
                  href="/news"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Latest News
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PressPage;
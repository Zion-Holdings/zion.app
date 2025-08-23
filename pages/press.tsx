import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, Download, Mail, Phone, Globe, 
  ArrowRight, Star, Users, Building, Calendar,
  ExternalLink, Image, File, Video
} from 'lucide-react';
import Link from 'next/link';

const Press: React.FC = () => {
  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      date: '2025-01-15',
      excerpt: 'Breakthrough AI consciousness platform with emotional intelligence capabilities now available for enterprise clients.',
      category: 'Product Launch'
    },
    {
      id: 2,
      title: 'Quantum Computing Integration Achieves Major Milestone',
      date: '2025-01-10',
      excerpt: 'Successfully integrated quantum computing capabilities into AI platforms, opening new possibilities.',
      category: 'Technology Breakthrough'
    },
    {
      id: 3,
      title: 'Global Expansion: New Offices in Key Technology Hubs',
      date: '2025-01-05',
      excerpt: 'Expanding global presence to better serve international clients and partners.',
      category: 'Company News'
    },
    {
      id: 4,
      title: 'Strategic Partnership with Leading Research Institutions',
      date: '2024-12-28',
      excerpt: 'Collaborating with top-tier research institutions to advance AI consciousness research.',
      category: 'Partnerships'
    }
  ];

  const mediaContacts = [
    {
      name: 'Company Logo',
      description: 'High-resolution Zion Tech Group logo in various formats',
      icon: <Image className="w-6 h-6" />,
      formats: ['PNG', 'SVG', 'EPS'],
      downloadUrl: '/press/logo.zip'
    },
    {
      name: 'Executive Photos',
      description: 'Professional headshots of key leadership team members',
      icon: <Image className="w-6 h-6" />,
      formats: ['JPG', 'PNG'],
      downloadUrl: '/press/executives.zip'
    },
    {
      name: 'Product Screenshots',
      description: 'High-quality screenshots of our AI consciousness platform',
      icon: <Image className="w-6 h-6" />,
      formats: ['PNG', 'JPG'],
      downloadUrl: '/press/products.zip'
    },
    {
      name: 'Company Fact Sheet',
      description: 'Comprehensive overview of Zion Tech Group',
      icon: <FileText className="w-6 h-6" />,
      formats: ['PDF'],
      downloadUrl: '/press/fact-sheet.pdf'
    },
    {
      name: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      icon: <FileText className="w-6 h-6" />,
      formats: ['PDF'],
      downloadUrl: '/press/brand-guidelines.pdf'
    },
    {
      name: 'Product Brochures',
      description: 'Detailed product information and specifications',
      icon: <File className="w-6 h-6" />,
      formats: ['PDF'],
      downloadUrl: '/press/brochures.zip'
    }
  ];

  const companyStats = [
    { label: 'Founded', value: '2020' },
    { label: 'Employees', value: '150+' },
    { label: 'Countries', value: '25+' },
    { label: 'Clients', value: '500+' },
    { label: 'AI Models', value: '1000+' },
    { label: 'Patents', value: '50+' }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'info@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <Layout
      title="Press & Media Resources - Zion Tech Group"
      description="Access Zion Tech Group's press resources, media kit, and company information. Find press releases, executive photos, and brand assets for journalists and media professionals."
      keywords="Zion Tech Group press, media kit, press releases, company information, brand assets, executive photos"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Press & Media Resources
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Everything you need to cover Zion Tech Group
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Access our latest press releases, media resources, and company information. 
                We're here to help journalists and media professionals tell our story.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                About Zion Tech Group
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 mb-6">
                    To pioneer the development of AI consciousness and quantum computing technologies that 
                    enhance human potential, solve complex global challenges, and create a more intelligent, 
                    sustainable, and equitable future for all.
                  </p>
                  <p className="text-gray-300">
                    We're building the technologies that will define tomorrow, from conscious AI systems 
                    that understand human emotions to quantum computing solutions that solve previously 
                    impossible problems.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Key Technologies</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">AI Consciousness Evolution</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">Quantum Computing Integration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">Autonomous Business Intelligence</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">Space Technology Platforms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our latest announcements and company news
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <motion.article
                  key={release.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-500/20 text-purple-400 text-sm font-semibold px-3 py-1 rounded-full">
                      {release.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {release.excerpt}
                  </p>
                  <Link
                    href={`/press/releases/${release.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Read Full Release
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Press Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Press Resources</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Download our press materials and company assets for your media coverage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{resource.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {resource.formats.map((format, formatIndex) => (
                        <span key={formatIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          {format}
                        </span>
                      ))}
                    </div>
                    <a
                      href={resource.downloadUrl}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </motion.div>
>>>>>>> origin/clean-website-enhancement
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Media Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Download high-quality assets and resources for your coverage
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaResources.map((resource, index) => (
                <motion.div
                  key={resource.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-1">
                      {resource.formats.map((format) => (
                        <span
                          key={format}
                          className="bg-gray-800/30 text-gray-400 text-xs px-2 py-1 rounded-full border border-gray-700/30"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={resource.downloadUrl}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Press Contact
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get in touch with our press team for interviews, quotes, and additional information
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Press Team</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Press Inquiries</div>
                      <a href={`mailto:${contactInfo.pressEmail}`} className="text-purple-400 hover:text-purple-300">
                        {contactInfo.pressEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a href={`tel:${contactInfo.phone}`} className="text-purple-400 hover:text-purple-300">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Company Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <div className="text-white font-semibold">Zion Tech Group</div>
                      <div className="text-gray-300">{contactInfo.address}</div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-white font-semibold mb-3">Response Time</h4>
                    <p className="text-gray-300 text-sm">
                      We typically respond to press inquiries within 24 hours during business days. 
                      For urgent requests, please call our press line directly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Cover Our Story?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                We're here to help you tell the story of Zion Tech Group and our revolutionary technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.pressEmail}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Press Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Press;
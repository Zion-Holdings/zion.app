import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Globe, FileText, Image, Users, Award, Calendar } from 'lucide-react';

const PressPage: React.FC = () => {
  const pressResources = [
    {
      title: "Company Logo",
      description: "High-resolution Zion Tech Group logos in various formats",
      formats: ["PNG", "SVG", "PDF"],
      icon: <Image className="w-6 h-6" />,
      downloadUrl: "#"
    },
    {
      title: "Company Fact Sheet",
      description: "Key facts and figures about Zion Tech Group",
      formats: ["PDF"],
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: "#"
    },
    {
      title: "Executive Biographies",
      description: "Professional backgrounds of our leadership team",
      formats: ["PDF", "DOCX"],
      icon: <Users className="w-6 h-6" />,
      downloadUrl: "#"
    },
    {
      title: "Product Screenshots",
      description: "High-quality images of our technology platforms",
      formats: ["PNG", "JPG"],
      icon: <Image className="w-6 h-6" />,
      downloadUrl: "#"
    },
    {
      title: "Company Presentation",
      description: "Comprehensive overview of Zion Tech Group",
      formats: ["PPTX", "PDF"],
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: "#"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      formats: ["PDF"],
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: "#"
    }
  ];

  const recentPressReleases = [
    {
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      date: "2025-01-15",
      summary: "Breakthrough technology brings human-like understanding to enterprise AI applications"
    },
    {
      title: "Zion Tech Group Expands Global Operations to 250+ Countries",
      date: "2025-01-05",
      summary: "Company announces major expansion bringing revolutionary technology solutions worldwide"
    },
    {
      title: "Zion Tech Group Named Top Technology Innovator of 2024",
      date: "2024-12-15",
      summary: "Industry recognition for groundbreaking contributions to AI and quantum computing"
    }
  ];

  const mediaContacts = [
    {
      name: "Press Inquiries",
      email: "press@ziontechgroup.com",
      phone: "+1 302 464 0950",
      description: "General press and media inquiries"
    },
    {
      name: "Investor Relations",
      email: "investors@ziontechgroup.com",
      phone: "+1 302 464 0950",
      description: "Financial and investor-related inquiries"
    },
    {
      name: "Partnership Inquiries",
      email: "partnerships@ziontechgroup.com",
      phone: "+1 302 464 0950",
      description: "Business development and partnership opportunities"
    }
  ];

  return (
    <Layout 
      title="Press Kit - Zion Tech Group"
      description="Access Zion Tech Group's press resources, media contacts, and company information for journalists and media professionals."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Press Kit
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our press resources, company information, and media contacts. 
                Everything you need to cover Zion Tech Group's revolutionary technology innovations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-6">About Zion Tech Group</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Zion Tech Group is a revolutionary technology company pioneering the future of AI consciousness, 
                  quantum computing, and autonomous systems. Founded in 2020, we're transforming how businesses 
                  operate and innovate through cutting-edge technology solutions.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our mission is to democratize access to revolutionary technology, enabling organizations of all 
                  sizes to harness the power of AI consciousness and quantum computing for unprecedented growth 
                  and innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold mb-6">Company Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Founded in 2020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">250+ countries served</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">3000+ revolutionary services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">99.99% uptime guarantee</span>
                  </div>
                </div>
              </motion.div>
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
              ))}
            </div>
          </div>
        </section>

        {/* Recent Press Releases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Recent Press Releases</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our latest company announcements and news
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="text-sm text-cyan-400 mb-3">
                    {new Date(release.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                  <p className="text-gray-400 mb-4">{release.summary}</p>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read Full Release →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contacts Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Media Contacts</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get in touch with our media relations team for interviews, quotes, and additional information
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {mediaContacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
                >
                  <h3 className="text-xl font-semibold mb-4">{contact.name}</h3>
                  <p className="text-gray-400 mb-4">{contact.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href={`mailto:${contact.email}`} className="hover:text-cyan-400 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contact.phone}`} className="hover:text-cyan-400 transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-4xl font-bold mb-6">Need Additional Information?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Our media relations team is here to help with any additional resources or information you need
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:press@ziontechgroup.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Press Team
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  General Inquiries
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PressPage;
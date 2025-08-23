import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, Download, Calendar, Users, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Mail, Phone
} from 'lucide-react';

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      date: "2025-01-15",
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      summary: "Breakthrough technology brings emotional intelligence and self-awareness to artificial intelligence systems",
      category: "Product Launch",
      link: "/press/ai-consciousness-platform-launch"
    },
    {
      date: "2025-01-10",
      title: "Zion Tech Group Expands Global Operations to 200+ Countries",
      summary: "Company reaches major milestone in international expansion and service delivery",
      category: "Company News",
      link: "/press/global-expansion-200-countries"
    },
    {
      date: "2025-01-05",
      title: "Quantum Computing Breakthrough: Zion Tech Group Achieves 99.99% Uptime",
      summary: "Revolutionary quantum infrastructure sets new industry standards for reliability",
      category: "Technology",
      link: "/press/quantum-computing-uptime-breakthrough"
    },
    {
      date: "2024-12-20",
      title: "Zion Tech Group Named Top AI Innovation Company 2024",
      summary: "Industry recognition for pioneering work in artificial intelligence and consciousness systems",
      category: "Awards",
      link: "/press/top-ai-innovation-company-2024"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo",
      description: "High-resolution Zion Tech Group logos in various formats",
      format: "PNG, SVG, EPS",
      size: "2.5 MB",
      download: "/media-kit/zion-tech-group-logo.zip"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      format: "PDF",
      size: "8.7 MB",
      download: "/media-kit/zion-tech-group-brand-guidelines.pdf"
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of our revolutionary platforms",
      format: "PNG, JPG",
      size: "15.2 MB",
      download: "/media-kit/zion-tech-group-product-screenshots.zip"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of our leadership team",
      format: "JPG",
      size: "12.8 MB",
      download: "/media-kit/zion-tech-group-executive-headshots.zip"
    }
  ];

  const companyInfo = {
    name: "Zion Tech Group",
    founded: "2010",
    headquarters: "Delaware, United States",
    employees: "50+",
    industries: ["Artificial Intelligence", "Quantum Computing", "Space Technology", "Cybersecurity"],
    description: "Zion Tech Group is a revolutionary technology company pioneering the future with AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide."
  };

  const contactInfo = {
    pressEmail: "press@ziontechgroup.com",
    generalEmail: "info@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "Delaware, United States"
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Press & Media
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Press Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest news, press releases, and media resources from Zion Tech Group. 
                Discover our revolutionary technology innovations and company milestones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Information Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-6">{companyInfo.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Founded: <span className="text-white">{companyInfo.founded}</span></span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Headquarters: <span className="text-white">{companyInfo.headquarters}</span></span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Employees: <span className="text-white">{companyInfo.employees}</span></span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Industries</h3>
                  <div className="flex flex-wrap gap-2">
                    {companyInfo.industries.map((industry, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay informed about our latest innovations, company milestones, and industry breakthroughs.
              </p>
            </motion.div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                          {release.category}
                        </span>
                        <span className="text-gray-400 text-sm">{release.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{release.title}</h3>
                      <p className="text-gray-300">{release.summary}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Kit
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Download our official media resources including logos, brand guidelines, and product materials.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaKit.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span>Format: {item.format}</span>
                        <span>Size: {item.size}</span>
                      </div>
                    </div>
                    <Download className="w-6 h-6 text-cyan-400" />
                  </div>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Inquiries
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                For press inquiries, interview requests, or media partnerships, 
                our communications team is here to help.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Press Contact</h3>
                  <p className="text-cyan-400">{contactInfo.pressEmail}</p>
                </div>
                <div className="text-center">
                  <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">General Inquiries</h3>
                  <p className="text-cyan-400">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-300 mb-6">
                  We commit to responding to all media inquiries within 24 hours during business days.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Press Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PressPage;
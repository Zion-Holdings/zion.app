import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, Download, Calendar, Globe, Users, Target, Award, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Brain, Atom, Rocket, Cpu, Database,
  Mail, Phone, MapPin, ExternalLink
} from 'lucide-react';

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      date: "2025-01-15",
      summary: "Breakthrough technology enables human-like consciousness in AI systems, marking a new era in artificial intelligence.",
      category: "Product Launch",
      readMore: "/news/ai-consciousness-platform-launch"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough Achieves 1000+ Qubit Processing",
      date: "2025-01-10",
      summary: "Zion Tech Group's quantum platform reaches unprecedented processing power, enabling complex simulations and AI training.",
      category: "Technology Milestone",
      readMore: "/news/quantum-computing-breakthrough"
    },
    {
      id: 3,
      title: "Space Resource Intelligence Platform Successfully Maps Asteroid Belt",
      date: "2025-01-05",
      summary: "AI-powered space exploration platform completes comprehensive mapping of near-Earth asteroid resources.",
      category: "Space Technology",
      readMore: "/news/asteroid-belt-mapping-success"
    },
    {
      id: 4,
      title: "Zion Tech Group Expands Global Operations to 200+ Countries",
      date: "2024-12-20",
      summary: "Company reaches major milestone in global expansion, now serving clients across all continents.",
      category: "Business Growth",
      readMore: "/news/global-expansion-200-countries"
    }
  ];

  const mediaKit = {
    companyInfo: {
      name: "Zion Tech Group",
      founded: "2020",
      headquarters: "Middletown, Delaware, USA",
      employees: "60+",
      website: "https://ziontechgroup.com",
      description: "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions."
    },
    contactInfo: {
      press: "press@ziontechgroup.com",
      general: "info@ziontechgroup.com",
      phone: "+1 302 464 0950",
      address: "Middletown, Delaware, United States"
    },
    downloads: [
      {
        name: "Company Logo (PNG)",
        description: "High-resolution logo in PNG format",
        size: "2.1 MB",
        url: "/downloads/zion-tech-group-logo.png"
      },
      {
        name: "Company Logo (SVG)",
        description: "Vector logo in SVG format",
        size: "45 KB",
        url: "/downloads/zion-tech-group-logo.svg"
      },
      {
        name: "Brand Guidelines",
        description: "Complete brand identity and usage guidelines",
        size: "8.5 MB",
        url: "/downloads/zion-tech-group-brand-guidelines.pdf"
      },
      {
        name: "Executive Team Photos",
        description: "High-resolution photos of leadership team",
        size: "15.2 MB",
        url: "/downloads/zion-tech-group-executive-photos.zip"
      }
    ]
  };

  const awards = [
    {
      title: "AI Innovation Award 2024",
      organization: "Tech Innovation Summit",
      description: "Recognition for breakthrough AI consciousness technology",
      year: "2024"
    },
    {
      title: "Quantum Computing Excellence",
      organization: "Quantum Technology Association",
      description: "Outstanding achievement in quantum computing development",
      year: "2024"
    },
    {
      title: "Space Technology Pioneer",
      organization: "International Space Federation",
      description: "Innovation in space resource intelligence platforms",
      year: "2024"
    }
  ];

  const stats = [
    { number: "2000+", label: "Revolutionary Services", icon: Zap },
    { number: "99.99%", label: "Uptime Guarantee", icon: Star },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

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
                <Sparkles className="w-4 h-4 mr-2" />
                Press & Media
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Press Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest news, press releases, and media resources from Zion Tech Group. 
                Discover our revolutionary technology breakthroughs and company milestones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed about our latest announcements, product launches, and company milestones.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                      {release.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(release.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {release.summary}
                  </p>
                  
                  <a
                    href={release.readMore}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Kit
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download our official media resources, including logos, brand guidelines, and company information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Company Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Company Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Company Name</h4>
                    <p className="text-gray-300">{mediaKit.companyInfo.name}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Founded</h4>
                    <p className="text-gray-300">{mediaKit.companyInfo.founded}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Headquarters</h4>
                    <p className="text-gray-300">{mediaKit.companyInfo.headquarters}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Employees</h4>
                    <p className="text-gray-300">{mediaKit.companyInfo.employees}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Website</h4>
                    <a 
                      href={mediaKit.companyInfo.website} 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                    >
                      {mediaKit.companyInfo.website}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Description</h4>
                    <p className="text-gray-300">{mediaKit.companyInfo.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Press Contact</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Press Inquiries</h4>
                    <a 
                      href={`mailto:${mediaKit.contactInfo.press}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {mediaKit.contactInfo.press}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">General Inquiries</h4>
                    <a 
                      href={`mailto:${mediaKit.contactInfo.general}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {mediaKit.contactInfo.general}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone</h4>
                    <a 
                      href={`tel:${mediaKit.contactInfo.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {mediaKit.contactInfo.phone}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Address</h4>
                    <div className="text-gray-300 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      {mediaKit.contactInfo.address}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download our official media assets and brand resources for your coverage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaKit.downloads.map((download, index) => (
                <motion.div
                  key={download.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                    <Download className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    {download.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {download.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <span className="text-cyan-400 text-sm font-medium">
                      {download.size}
                    </span>
                  </div>
                  
                  <a
                    href={download.url}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Awards & Recognition
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Recognition of our innovative technology and industry leadership.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {award.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-medium mb-2">
                    {award.organization}
                  </p>
                  
                  <p className="text-gray-300 mb-4">
                    {award.description}
                  </p>
                  
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-medium">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                For press inquiries, media interviews, or additional information, our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${mediaKit.contactInfo.press}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Press Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  General Contact
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
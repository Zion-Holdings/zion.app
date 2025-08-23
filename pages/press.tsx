import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Play, Download, Mail, Phone, MapPin, Globe, Users, Target, 
  ArrowRight, Star, Check, Calendar, FileText, Image, Video, File
} from 'lucide-react';

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      date: '2025-01-15',
      summary: 'Breakthrough technology enables unprecedented human-AI collaboration and consciousness evolution.',
      category: 'Product Launch',
      href: '/press/ai-consciousness-platform-launch'
    },
    {
      title: 'Quantum Computing Breakthrough Achieved by Zion Tech Group',
      date: '2025-01-10',
      summary: 'Major milestone in quantum computing opens new possibilities for scientific research and business applications.',
      category: 'Technology Breakthrough',
      href: '/press/quantum-computing-breakthrough'
    },
    {
      title: 'Zion Tech Group Expands Space Technology Division',
      date: '2025-01-05',
      summary: 'New space resource intelligence and mining platforms expand humanity\'s reach into the cosmos.',
      category: 'Company Expansion',
      href: '/press/space-technology-expansion'
    },
    {
      title: 'Cybersecurity Innovation: Unbreakable Quantum Encryption',
      date: '2024-12-28',
      summary: 'Quantum-resistant security systems protect the digital future of humanity.',
      category: 'Security Innovation',
      href: '/press/quantum-encryption-breakthrough'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo',
      description: 'High-resolution Zion Tech Group logos in various formats',
      type: 'Logo',
      formats: ['SVG', 'PNG', 'JPG'],
      icon: Image,
      downloadUrl: '/press/logo-package.zip'
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of Zion Tech Group leadership team',
      type: 'Photos',
      formats: ['JPG', 'PNG'],
      icon: Image,
      downloadUrl: '/press/executive-photos.zip'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our technology platforms',
      type: 'Images',
      formats: ['PNG', 'JPG'],
      icon: Image,
      downloadUrl: '/press/product-screenshots.zip'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Comprehensive overview of Zion Tech Group and our mission',
      type: 'Document',
      formats: ['PDF'],
      icon: FileText,
      downloadUrl: '/press/fact-sheet.pdf'
    },
    {
      title: 'Technology Overview',
      description: 'Detailed information about our AI, quantum, and space technology solutions',
      type: 'Document',
      formats: ['PDF'],
      icon: FileText,
      downloadUrl: '/press/technology-overview.pdf'
    },
    {
      title: 'Press Kit',
      description: 'Complete press kit with all media resources and company information',
      type: 'Package',
      formats: ['ZIP'],
      icon: File,
      downloadUrl: '/press/complete-press-kit.zip'
    }
  ];

  const companyInfo = {
    name: 'Zion Tech Group',
    founded: '2020',
    headquarters: 'Middletown, Delaware',
    employees: '50+',
    mission: 'Pioneering the future of technology through revolutionary innovations',
    website: 'https://ziontechgroup.com',
    contact: {
      press: 'press@ziontechgroup.com',
      general: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  };

  const keyFacts = [
    'Leading innovator in AI consciousness technology',
    'Pioneering quantum computing solutions',
    'Advanced space resource intelligence platforms',
    'Revolutionary cybersecurity innovations',
    'AI-powered business transformation solutions',
    'Quantum cloud infrastructure development'
  ];

  return (
    <>
      <Head>
        <title>Press & Media - Zion Tech Group</title>
        <meta name="description" content="Press resources, media kits, and company information for journalists and media outlets. Access Zion Tech Group's latest news, executive photos, and company materials." />
        <meta name="keywords" content="press, media, press kit, company information, Zion Tech Group, AI technology, quantum computing" />
        <link rel="canonical" href="https://ziontechgroup.com/press" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <Play className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Press & Media Resources</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Press & Media
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Welcome to Zion Tech Group's press center. Find press releases, media resources, 
                company information, and everything you need to cover our revolutionary technology innovations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#press-releases"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  <span>View Press Releases</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="#media-resources"
                  className="inline-flex items-center space-x-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Download Resources</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Company Information */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pioneering the future of technology through revolutionary innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Company Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Company Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Company Name:</span>
                    <span className="text-white font-medium">{companyInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Founded:</span>
                    <span className="text-white font-medium">{companyInfo.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Headquarters:</span>
                    <span className="text-white font-medium">{companyInfo.headquarters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Employees:</span>
                    <span className="text-white font-medium">{companyInfo.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Website:</span>
                    <a href={companyInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      {companyInfo.website}
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Our Mission</h4>
                  <p className="text-gray-300 leading-relaxed">{companyInfo.mission}</p>
                </div>
              </motion.div>

              {/* Key Facts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Key Facts</h3>
                <div className="space-y-3">
                  {keyFacts.map((fact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Press Releases */}
        <div id="press-releases" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest announcements and breakthroughs
              </p>
            </motion.div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.article
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="group"
                >
                  <Link href={release.href} className="block">
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                              {release.category}
                            </span>
                            <div className="flex items-center space-x-1 text-gray-400 text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(release.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                            {release.title}
                          </h3>
                          
                          <p className="text-gray-300 leading-relaxed">
                            {release.summary}
                          </p>
                        </div>
                        
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="font-medium">Read More</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Media Resources */}
        <div id="media-resources" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Media Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download high-quality media resources for your coverage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <resource.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      {resource.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">Formats:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {resource.formats.map((format, formatIndex) => (
                          <span key={formatIndex} className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded border border-gray-700/50">
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href={resource.downloadUrl}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Media Inquiries
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For press inquiries, interviews, or additional information, please contact our media team
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Press Contact</h3>
                  <a href={`mailto:${companyInfo.contact.press}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {companyInfo.contact.press}
                  </a>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href={`tel:${companyInfo.contact.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{companyInfo.contact.address}</p>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PressPage;
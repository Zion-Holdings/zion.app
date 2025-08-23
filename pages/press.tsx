import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FileText, Download, Image, Video, Globe, 
  ArrowRight, ExternalLink, Calendar, Users, 
  Building, Award, Star, CheckCircle, Eye,
  Mail, Phone, MapPin, Linkedin, Twitter,
  Github, Youtube, Instagram
} from 'lucide-react';

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Evolution 2045 Platform',
      date: '2024-12-15',
      summary: 'Breakthrough AI platform achieves unprecedented levels of consciousness and emotional intelligence, setting new industry standards.',
      category: 'Product Launch',
      featured: true,
      href: '/press/ai-consciousness-evolution-2045-launch'
    },
    {
      id: 2,
      title: 'Zion Tech Group Secures $50M Series B Funding for Quantum Computing Expansion',
      date: '2024-12-10',
      summary: 'Investment will accelerate development of quantum-resistant cybersecurity solutions and expand global operations.',
      category: 'Funding',
      featured: true,
      href: '/press/series-b-funding-announcement'
    },
    {
      id: 3,
      title: 'Zion Tech Group Named Top 10 Most Innovative Companies by TechCrunch',
      date: '2024-12-05',
      summary: 'Recognition highlights company\'s groundbreaking work in AI consciousness, quantum computing, and space technology.',
      category: 'Awards',
      featured: false,
      href: '/press/techcrunch-innovation-award'
    },
    {
      id: 4,
      title: 'Zion Tech Group Partners with NASA for Space Resource Intelligence Initiative',
      date: '2024-11-28',
      summary: 'Strategic partnership to develop AI-powered space resource mapping and intelligence platforms.',
      category: 'Partnerships',
      featured: false,
      href: '/press/nasa-partnership-announcement'
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations with New European Headquarters',
      date: '2024-11-20',
      summary: 'New Amsterdam office to serve European market and strengthen international presence.',
      category: 'Company News',
      featured: false,
      href: '/press/european-expansion-announcement'
    },
    {
      id: 6,
      title: 'Zion Tech Group Releases Annual Impact Report: 2000+ Revolutionary Services Delivered',
      date: '2024-11-15',
      summary: 'Comprehensive report showcases company\'s global impact and commitment to technological innovation.',
      category: 'Reports',
      featured: false,
      href: '/press/annual-impact-report-2024'
    }
  ];

  const brandAssets = [
    {
      category: 'Logos',
      items: [
        { name: 'Primary Logo (PNG)', format: 'PNG', size: '2.1 MB', description: 'High-resolution primary logo with transparent background' },
        { name: 'Primary Logo (SVG)', format: 'SVG', size: '45 KB', description: 'Vector format logo for scalable use' },
        { name: 'Logo Stacked (PNG)', format: 'PNG', size: '1.8 MB', description: 'Stacked version of primary logo' },
        { name: 'Logo Icon Only (PNG)', format: 'PNG', size: '1.2 MB', description: 'Icon-only version for small spaces' }
      ]
    },
    {
      category: 'Brand Colors',
      items: [
        { name: 'Primary Blue', format: 'HEX', size: '#06b6d4', description: 'Main brand color for primary elements' },
        { name: 'Secondary Cyan', format: 'HEX', size: '#0891b2', description: 'Secondary brand color for accents' },
        { name: 'Accent Purple', format: 'HEX', size: '#8b5cf6', description: 'Accent color for highlights and special elements' },
        { name: 'Neutral Gray', format: 'HEX', size: '#1f2937', description: 'Neutral color for text and backgrounds' }
      ]
    },
    {
      category: 'Typography',
      items: [
        { name: 'Primary Font', format: 'Inter', size: 'Variable', description: 'Primary brand font family' },
        { name: 'Heading Font', format: 'Inter', size: 'Variable', description: 'Font for headings and titles' },
        { name: 'Body Font', format: 'Inter', size: 'Variable', description: 'Font for body text and content' }
      ]
    },
    {
      category: 'Imagery',
      items: [
        { name: 'Hero Images', format: 'JPG/PNG', size: 'Various', description: 'High-quality hero and banner images' },
        { name: 'Product Screenshots', format: 'PNG', size: 'Various', description: 'Screenshots of our technology platforms' },
        { name: 'Team Photos', format: 'JPG', size: 'Various', description: 'Professional team and leadership photos' },
        { name: 'Office Photos', format: 'JPG', size: 'Various', description: 'Modern office and workspace images' }
      ]
    }
  ];

  const mediaResources = [
    {
      icon: FileText,
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and information about Zion Tech Group',
      format: 'PDF',
      size: '2.3 MB',
      href: '/assets/fact-sheet.pdf'
    },
    {
      icon: Building,
      title: 'Company Overview',
      description: 'Comprehensive company overview and mission statement',
      format: 'PDF',
      size: '1.8 MB',
      href: '/assets/company-overview.pdf'
    },
    {
      icon: Users,
      title: 'Leadership Bios',
      description: 'Detailed biographies of our executive team',
      format: 'PDF',
      size: '3.1 MB',
      href: '/assets/leadership-bios.pdf'
    },
    {
      icon: Award,
      title: 'Awards & Recognition',
      description: 'Complete list of awards and industry recognition',
      format: 'PDF',
      size: '1.5 MB',
      href: '/assets/awards-recognition.pdf'
    }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'info@ziontechgroup.com',
    phone: '+1-302-464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    social: {
      linkedin: 'https://linkedin.com/company/zion-tech-group',
      twitter: 'https://twitter.com/ziontechgroup',
      github: 'https://github.com/ziontechgroup',
      youtube: 'https://youtube.com/@ziontechgroup'
    }
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
                Media Kit
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Welcome to the Zion Tech Group media kit. Find press releases, brand assets, company information, 
                and media resources to help you tell our story.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Press Releases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest news, announcements, and company developments.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pressReleases.filter(release => release.featured).map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                    <span className="text-sm text-gray-400">{release.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{release.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{release.summary}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{release.date}</span>
                    <Link
                      href={release.href}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">All Press Releases</h3>
              <div className="space-y-4">
                {pressReleases.map((release) => (
                  <motion.div
                    key={release.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-400">{release.date}</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                            {release.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{release.title}</h4>
                        <p className="text-gray-400 text-sm">{release.summary}</p>
                      </div>
                      <Link
                        href={release.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors ml-4"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Brand Assets</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download our official brand assets including logos, colors, typography, and imagery 
                for use in your media coverage and communications.
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {brandAssets.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                          <span className="text-sm text-gray-400">{item.format}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.size}</span>
                          <button className="inline-flex items-center px-3 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all duration-200 text-sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Media Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional resources to help journalists and media professionals cover Zion Tech Group.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mediaResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <resource.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{resource.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500">Format: {resource.format}</div>
                    <div className="text-sm text-gray-500">Size: {resource.size}</div>
                  </div>
                  <button className="inline-flex items-center w-full justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Media Contact</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our press team is available to help with media inquiries, interview requests, 
                and additional information needs.
              </p>
            </motion.div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Press Inquiries</div>
                        <div className="text-gray-400">{contactInfo.pressEmail}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">General Inquiries</div>
                        <div className="text-gray-400">{contactInfo.generalEmail}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Phone</div>
                        <div className="text-gray-400">{contactInfo.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                      <div>
                        <div className="text-white font-medium">Address</div>
                        <div className="text-gray-400">{contactInfo.address}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                  <div className="space-y-4">
                    <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </a>
                    <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5 mr-3" />
                      Twitter
                    </a>
                    <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </a>
                    <a href={contactInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <Youtube className="w-5 h-5 mr-3" />
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Additional Information?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Can't find what you're looking for? Our press team is here to help with 
                any additional information or interview requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.pressEmail}`}
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Press Team
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Users className="w-5 h-5 mr-2" />
                  General Contact
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PressPage;
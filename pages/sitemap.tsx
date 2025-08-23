import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Map, ArrowRight, ExternalLink, FileText, Users, 
  Zap, Shield, Brain, Atom, Rocket, Globe, Building,
  BookOpen, Video, Activity, Mail, Phone, MapPin
} from 'lucide-react';
import Link from 'next/link';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: <Building className="w-5 h-5" />,
      pages: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About", path: "/about", description: "Company information and history" },
        { name: "Services", path: "/services", description: "Our technology services" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" }
      ]
    },
    {
      category: "Technology Services",
      icon: <Zap className="w-5 h-5" />,
      pages: [
        { name: "AI Consciousness Evolution", path: "/ai-consciousness-evolution-2045", description: "AI consciousness platform" },
        { name: "Quantum AI Cognitive Platform", path: "/quantum-ai-cognitive-2045", description: "Quantum computing solutions" },
        { name: "Market Pricing", path: "/market-pricing", description: "Pricing strategy and analysis" },
        { name: "Services Advertising", path: "/services-advertising", description: "Marketing and advertising services" }
      ]
    },
    {
      category: "Company Information",
      icon: <Users className="w-5 h-5" />,
      pages: [
        { name: "Mission", path: "/mission", description: "Our mission and vision" },
        { name: "News", path: "/news", description: "Company news and updates" },
        { name: "Press", path: "/press", description: "Press releases and media" },
        { name: "Careers", path: "/careers", description: "Job opportunities" },
        { name: "Partners", path: "/partners", description: "Partnership information" },
        { name: "Investors", path: "/investors", description: "Investor relations" }
      ]
    },
    {
      category: "Resources & Content",
      icon: <BookOpen className="w-5 h-5" />,
      pages: [
        { name: "Blog", path: "/blog", description: "Articles and insights" },
        { name: "Case Studies", path: "/case-studies", description: "Client success stories" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Documentation", path: "/docs", description: "Technical documentation" }
      ]
    },
    {
      category: "Legal & Compliance",
      icon: <Shield className="w-5 h-5" />,
      pages: [
        { name: "Privacy Policy", path: "/privacy", description: "Data privacy information" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookies Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility commitment" },
        { name: "Security", path: "/security", description: "Security measures" }
      ]
    },
    {
      category: "Support & Information",
      icon: <Mail className="w-5 h-5" />,
      pages: [
        { name: "Support", path: "/support", description: "Customer support" },
        { name: "Get Started", path: "/get-started", description: "Getting started guide" },
        { name: "Pricing", path: "/pricing", description: "Service pricing" },
        { name: "System Status", path: "/status", description: "Service status and uptime" }
      ]
    }
  ];

  const quickLinks = [
    {
      name: "AI Consciousness Platform",
      path: "/ai-consciousness-evolution-2045",
      icon: <Brain className="w-5 h-5" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Quantum Computing",
      path: "/quantum-ai-cognitive-2045",
      icon: <Atom className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Cybersecurity",
      path: "/security",
      icon: <Shield className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Space Technology",
      path: "/services",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "kleber@ziontechgroup.com",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:kleber@ziontechgroup.com"
    },
    {
      label: "Phone",
      value: "+1 (555) 123-4567",
      icon: <Phone className="w-5 h-5" />,
      link: "tel:+15551234567"
    },
    {
      label: "Address",
      value: "123 Innovation Drive, Tech City, TC 12345",
      icon: <MapPin className="w-5 h-5" />,
      link: null
    }
  ];

  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Complete overview of all pages and sections on the Zion Tech Group website. Find what you're looking for quickly and easily."
      keywords="sitemap, website structure, navigation, Zion Tech Group, pages, sections"
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
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sitemap
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Complete website structure and navigation
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Explore all pages and sections of the Zion Tech Group website. 
                Find the information you need quickly and efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
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
                Quick Access
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Most popular and important pages
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {link.name}
                  </h3>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                    Visit Page
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Sitemap */}
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
                Complete Website Structure
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Organized by category for easy navigation
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {siteStructure.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        href={page.path}
                        className="group block bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-4 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {page.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                          {page.description}
                        </p>
                        <div className="text-purple-400 text-xs font-medium mt-2 group-hover:text-purple-300 transition-colors duration-300">
                          {page.path}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
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
                Contact Information
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get in touch with our team
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{contact.label}</h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 break-words"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 break-words">{contact.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
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
                Additional Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                External resources and additional information
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "XML Sitemap",
                  description: "Machine-readable sitemap for search engines",
                  path: "/sitemap.xml",
                  icon: <FileText className="w-6 h-6" />
                },
                {
                  name: "RSS Feed",
                  description: "Subscribe to our latest updates",
                  path: "/rss.xml",
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  name: "API Documentation",
                  description: "Technical API reference",
                  path: "/docs",
                  icon: <Zap className="w-6 h-6" />
                },
                {
                  name: "Status Page",
                  description: "Service status and uptime",
                  path: "/status",
                  icon: <Activity className="w-6 h-6" />
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {resource.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Our team is here to help you navigate our website and find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SitemapPage;
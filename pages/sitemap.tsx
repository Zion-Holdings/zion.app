import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Map, ArrowRight, ExternalLink, Home, Briefcase, Users, FileText, Settings, Search } from 'lucide-react';
import Link from 'next/link';

export default function Sitemap() {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: <Home className="w-5 h-5" />,
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About Us', href: '/about', description: 'Company information and mission' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities and company culture' }
      ]
    },
    {
      title: 'Services',
      icon: <Briefcase className="w-5 h-5" />,
      links: [
        { name: 'All Services', href: '/services', description: 'Complete overview of our services' },
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', description: 'Next-generation AI consciousness' },
        { name: 'Quantum Neural Network Platform 2045', href: '/quantum-neural-network-platform-2045', description: 'Quantum-powered neural networks' },
        { name: 'Space Technology', href: '/space-technology', description: 'Space exploration solutions' },
        { name: 'IT Services', href: '/it-services', description: 'Advanced IT infrastructure' },
        { name: 'Cybersecurity', href: '/security', description: 'Security solutions and services' }
      ]
    },
    {
      title: 'Technology Solutions',
      icon: <Settings className="w-5 h-5" />,
      links: [
        { name: 'AI & Consciousness', href: '/ai-services', description: 'Advanced AI consciousness solutions' },
        { name: 'Quantum Technology', href: '/quantum-services', description: 'Quantum computing solutions' },
        { name: 'Micro SAAS Platforms', href: '/micro-saas', description: 'Innovative software solutions' },
        { name: 'Business Solutions', href: '/business-solutions', description: 'Enterprise transformation' },
        { name: 'Industry Solutions', href: '/solutions', description: 'Industry-specific technology solutions' }
      ]
    },
    {
      title: 'Company & Resources',
      icon: <Users className="w-5 h-5" />,
      links: [
        { name: 'Our Mission', href: '/mission', description: 'Company mission and vision' },
        { name: 'Leadership Team', href: '/team', description: 'Meet our executive team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'News & Updates', href: '/news', description: 'Latest company news' },
        { name: 'Press Kit', href: '/press', description: 'Media resources and information' }
      ]
    },
    {
      title: 'Content & Learning',
      icon: <FileText className="w-5 h-5" />,
      links: [
        { name: 'Blog', href: '/blog', description: 'Technology insights and articles' },
        { name: 'Webinars', href: '/webinars', description: 'Educational webinars and events' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' },
        { name: 'Training', href: '/training', description: 'Professional development resources' },
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' }
      ]
    },
    {
      title: 'Support & Legal',
      icon: <Settings className="w-5 h-5" />,
      links: [
        { name: 'Support Center', href: '/support', description: 'Customer support and help' },
        { name: 'System Status', href: '/status', description: 'Platform status and uptime' },
        { name: 'Privacy Policy', href: '/privacy', description: 'Privacy and data protection' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
        { name: 'Accessibility', href: '/accessibility', description: 'Accessibility information' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/get-started', description: 'Begin your journey with us' },
    { name: 'Request Demo', href: '/demo', description: 'See our solutions in action' },
    { name: 'Get Quote', href: '/quote', description: 'Request pricing information' },
    { name: 'Contact Sales', href: '/contact', description: 'Speak with our sales team' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Map className="w-4 h-4" />
                <span>Site Navigation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Site
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Navigate our website easily with this comprehensive sitemap. 
                Find all pages, services, and resources organized by category.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Quick Access
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get to the most important pages quickly with these direct links.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={link.href}>
                    <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/50 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Sitemap Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Complete Site Structure
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our organized site structure to find exactly what you're looking for.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/30 h-full">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="group/link">
                          <Link href={link.href} className="block">
                            <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/30 transition-all duration-300 group-hover/link:bg-gray-800/50 group-hover/link:border-blue-500/30">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-white group-hover/link:text-blue-400 transition-colors duration-300">
                                  {link.name}
                                </h4>
                                <ExternalLink className="w-4 h-4 text-gray-500 group-hover/link:text-blue-400 transition-colors duration-300" />
                              </div>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                {link.description}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find more ways to explore and interact with our platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Search Functionality</h3>
                <p className="text-gray-300 leading-relaxed">
                  Use our powerful search to find specific content, services, or information 
                  across our entire platform.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Map className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Navigation Help</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our intuitive navigation system helps you find what you need quickly 
                  and efficiently.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Customer Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Can't find what you're looking for? Our support team is here to help 
                  guide you to the right resources.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help Finding Something?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                If you can't find what you're looking for in our sitemap, 
                our team is here to help guide you to the right resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                    Contact Support
                  </button>
                </Link>
                <Link href="/support">
                  <button className="px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300">
                    Visit Support Center
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
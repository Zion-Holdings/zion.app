import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Home, Search, Rocket, FileText, Users, Mail, Map, 
  ArrowRight, ExternalLink, ChevronRight, Globe, Building
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function SitemapPage() {
  const mainPages = [
    { href: '/', label: '🏠 Home', description: 'Main landing page with company overview and featured services' },
    { href: '/about', label: '👥 About Us', description: 'Company story, mission, values, and team information' },
    { href: '/services', label: '🚀 Services', description: 'Complete catalog of AI and technology services' },
    { href: '/explore', label: '🔍 Explore', description: 'Browse services by category and technology area' },
    { href: '/contact', label: '📧 Contact', description: 'Get in touch and start your project' }
  ];

  const serviceCategories = [
    { href: '/category/ai', label: '🧠 AI & Machine Learning', description: 'Artificial intelligence and machine learning solutions' },
    { href: '/category/quantum', label: '⚛️ Quantum Computing', description: 'Quantum computing and quantum AI applications' },
    { href: '/category/cybersecurity', label: '🛡️ Cybersecurity', description: 'Quantum-resistant security and threat detection' },
    { href: '/category/cloud', label: '☁️ Cloud & DevOps', description: 'Cloud infrastructure and DevOps automation' },
    { href: '/category/edge', label: '🌐 Edge Computing', description: 'Edge computing orchestration and IoT management' },
    { href: '/category/space', label: '🚀 Space Technology', description: 'Space exploration and resource optimization' },
    { href: '/category/biotech', label: '🧬 Biotechnology', description: 'Neural interfaces and biomedical innovations' },
    { href: '/category/blockchain', label: '⛓️ Blockchain', description: 'AI-powered blockchain governance and DeFi' },
    { href: '/category/automation', label: '⚡ Automation', description: 'Business process automation and AI agents' },
    { href: '/category/fintech', label: '💰 Financial Technology', description: 'Quantum financial trading and AI analytics' }
  ];

  const featuredServices = [
    { href: '/ai-business-intelligence', label: 'AI Business Intelligence', category: 'AI & ML' },
    { href: '/quantum-cybersecurity', label: 'Quantum Cybersecurity', category: 'Cybersecurity' },
    { href: '/edge-computing-orchestration', label: 'Edge Computing Orchestration', category: 'Edge Computing' },
    { href: '/space-technology', label: 'Space Technology Innovation', category: 'Space Technology' },
    { href: '/neural-interface', label: 'Neural Interface Development', category: 'Biotechnology' },
    { href: '/autonomous-devops', label: 'Autonomous DevOps', category: 'Cloud & DevOps' },
    { href: '/ai-customer-experience', label: 'AI Customer Experience', category: 'AI & ML' },
    { href: '/quantum-neural-networks', label: 'Quantum Neural Networks', category: 'Quantum Computing' }
  ];

  const resources = [
    { href: '/reports', label: '📊 Reports', description: 'Latest technology reports and insights' },
    { href: '/newsroom', label: '📰 Newsroom', description: 'Company updates and industry news' },
    { href: '/automation', label: '⚡ Automations', description: 'Automation tools and solutions' },
    { href: '/search', label: '🔎 Search', description: 'Search across all services and content' }
  ];

  const externalLinks = [
    { href: 'https://github.com/ai-factory', label: 'GitHub', description: 'Open source projects and code examples' },
    { href: 'https://docs.ziontechgroup.com', label: 'Documentation', description: 'Technical documentation and guides' },
    { href: 'https://status.ziontechgroup.com', label: 'System Status', description: 'Real-time system status and uptime' }
  ];

  const contactInfo = [
    { type: 'Phone', value: '+1 (302) 464-0950', action: 'tel:+13024640950' },
    { type: 'Email', value: 'kleber@ziontechgroup.com', action: 'mailto:kleber@ziontechgroup.com' },
    { type: 'Address', value: 'Middletown, DE', action: 'https://maps.google.com/?q=Middletown,DE' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category." />
        <meta property="og:title" content="Sitemap | Zion Tech Group" />
        <meta property="og:description" content="Complete website sitemap and navigation guide." />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>

      <SmartHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Site Map
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Navigate our comprehensive website and discover all the AI-powered technology solutions, 
              resources, and information available at Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#main-pages"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Site
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/search"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Search Site
                <Search className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Pages */}
      <section id="main-pages" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Main Pages
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Core pages that provide essential information about our company and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={page.href}
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {page.label}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{page.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Service Categories
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Browse our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={category.href}
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {category.label}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{category.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Featured Services
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Our most popular and innovative technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={service.href}
                  className="block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 truncate">
                      {service.label}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0" />
                  </div>
                  <p className="text-white/60 text-xs">{service.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Tools */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Resources & Tools
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Additional resources, tools, and information to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={resource.href}
                  className="block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {resource.label}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              External Resources
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Additional resources and tools hosted on external platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {externalLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {link.label}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{link.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Contact Information
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Get in touch with us for consultations, support, or to start your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
              >
                <h3 className="text-lg font-bold text-white mb-3">{contact.type}</h3>
                <a
                  href={contact.action}
                  target={contact.action.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Use our search functionality or contact us directly for assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Search Site
                <Search className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Contact Support
                <Mail className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SmartFooter />
    </div>
  );
}

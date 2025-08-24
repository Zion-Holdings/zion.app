import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, Award, 
  BookOpen, Phone, Globe, Code, Server, Target, Star, Zap
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainSections = [
    {
      title: 'Home',
      href: '/',
      icon: Brain,
      description: 'Main landing page with company overview'
    },
    {
      title: 'Services',
      href: '/services',
      icon: Rocket,
      description: 'Our comprehensive service offerings'
    },
    {
      title: 'About Us',
      href: '/about',
      icon: Users,
      description: 'Company information and team details'
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
      icon: Award,
      description: 'Our latest projects and achievements'
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: BookOpen,
      description: 'Industry insights and company updates'
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch with our experts'
    }
  ];

  const servicePages = [
    { name: 'AI & Machine Learning', href: '/services/ai-ml' },
    { name: 'Quantum Computing', href: '/services/quantum' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/services/cloud' },
    { name: 'Data Analytics', href: '/services/analytics' },
    { name: 'Digital Transformation', href: '/services/transformation' },
    { name: 'AI Autonomous Ecosystem', href: '/services/ai-autonomous' },
    { name: 'Quantum AI Neural Networks', href: '/services/quantum-ai' },
    { name: 'Space Resource Intelligence', href: '/services/space-intelligence' },
    { name: 'Autonomous DevOps', href: '/services/autonomous-devops' },
    { name: 'Edge Computing Orchestration', href: '/services/edge-computing' }
  ];

  const companyPages = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'News & Press', href: '/news' },
    { name: 'Company Values', href: '/values' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Company History', href: '/history' }
  ];

  const resourcePages = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Whitepapers', href: '/whitepapers' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support Center', href: '/support' },
    { name: 'Knowledge Base', href: '/knowledge-base' },
    { name: 'Tutorials', href: '/tutorials' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const specialPages = [
    { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
    { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform' },
    { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform' },
    { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' },
    { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
    { name: 'Technology Insights', href: '/technology-insights' },
    { name: 'Solutions Overview', href: '/solutions' },
    { name: 'Startup Tools', href: '/startup-tools' },
    { name: 'Trust & Security', href: '/trust' },
    { name: 'Site Health Monitor', href: '/site-health' }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website with all pages and sections organized for easy navigation." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Complete navigation structure of Zion Tech Group website. Find all pages, services, and resources organized for easy access.
            </p>
          </motion.div>

          {/* Main Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Globe className="w-8 h-8 text-cyan-400 mr-3" />
              Main Sections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <Link href={section.href} className="block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <section.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Rocket className="w-8 h-8 text-purple-400 mr-3" />
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicePages.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                >
                  <Link 
                    href={service.href}
                    className="block p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <span className="text-white/80 group-hover:text-purple-300 transition-colors duration-300">
                      {service.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Users className="w-8 h-8 text-green-400 mr-3" />
              Company
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {companyPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                >
                  <Link 
                    href={page.href}
                    className="block p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-green-500/30 transition-all duration-300 group"
                  >
                    <span className="text-white/80 group-hover:text-green-300 transition-colors duration-300">
                      {page.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="w-8 h-8 text-yellow-400 mr-3" />
              Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {resourcePages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                >
                  <Link 
                    href={page.href}
                    className="block p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-yellow-500/30 transition-all duration-300 group"
                  >
                    <span className="text-white/80 group-hover:text-yellow-300 transition-colors duration-300">
                      {page.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Shield className="w-8 h-8 text-red-400 mr-3" />
              Legal & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                >
                  <Link 
                    href={page.href}
                    className="block p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-red-500/30 transition-all duration-300 group"
                  >
                    <span className="text-white/80 group-hover:text-red-300 transition-colors duration-300">
                      {page.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Special Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Star className="w-8 h-8 text-pink-400 mr-3" />
              Special Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                >
                  <Link 
                    href={page.href}
                    className="block p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-pink-500/30 transition-all duration-300 group"
                  >
                    <span className="text-white/80 group-hover:text-pink-300 transition-colors duration-300">
                      {page.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center text-white/50 text-sm"
          >
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Total pages: {mainSections.length + servicePages.length + companyPages.length + resourcePages.length + legalPages.length + specialPages.length}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;

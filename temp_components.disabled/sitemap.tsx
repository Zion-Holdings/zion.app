import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  Award, BookOpen, Phone, Mail, MapPin, Twitter, Linkedin, 
  Github, ArrowUp, Heart, TrendingUp, BarChart3, Cloud, Network,
  FileText, Briefcase, Users2, Building, Zap, Star, CheckCircle
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function SitemapPage() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { name: 'Home', href: '/', description: 'Main landing page' },
    { name: 'About Us', href: '/about', description: 'Company information and mission' },
    { name: 'Services', href: '/services', description: 'All our technology services' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
    { name: 'Team', href: '/team', description: 'Meet our team' },
    { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
    { name: 'Pricing', href: '/pricing-2025', description: 'Service pricing information' }
  ];

  const serviceCategories = [
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: '/services/quantum-cybersecurity', description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: '/services/edge-computing', description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: '/services/space-technology', description: 'Space exploration and satellite tech' },
    { name: 'AI Customer Experience', href: '/services/ai-customer-experience', description: 'AI-powered customer solutions' },
    { name: 'Neural Interface Development', href: '/services/neural-interface', description: 'Brain-computer interface development' }
  ];

  const companyPages = [
    { name: 'Portfolio', href: '/portfolio', description: 'Our work and achievements' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'News & Press', href: '/news', description: 'Company news and press releases' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
  ];

  const resourcePages = [
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and case studies' },
    { name: 'Whitepapers', href: '/whitepapers', description: 'Technical whitepapers and research' },
    { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
    { name: 'API Reference', href: '/api', description: 'API documentation and reference' },
    { name: 'Support', href: '/support', description: 'Customer support and help' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' },
    { name: 'Security', href: '/security', description: 'Security information' },
    { name: 'Compliance', href: '/compliance', description: 'Compliance and certifications' }
  ];

  const specialPages = [
    { name: 'Comprehensive Services Showcase', href: '/comprehensive-2025-services-showcase', description: 'Complete service overview' },
    { name: 'Ultimate Futuristic Services', href: '/ultimate-futuristic-services-showcase-2025', description: 'Future-focused services' },
    { name: 'Technology Insights', href: '/technology-insights', description: 'Technology trends and insights' },
    { name: 'Solutions', href: '/solutions', description: 'Industry solutions' },
    { name: 'Startup Tools', href: '/startup-tools', description: 'Tools for startups' },
    { name: 'Tool Comparison', href: '/tool-comparison', description: 'Compare different tools' },
    { name: 'URL Shortener', href: '/url-shortener', description: 'URL shortening service' },
    { name: 'Website Performance Monitor', href: '/website-performance-monitor', description: 'Performance monitoring tool' },
    { name: 'WCAG Accessibility Scanner', href: '/wcag-accessibility-scanner', description: 'Accessibility compliance tool' },
    { name: 'Whitepaper Builder', href: '/whitepaper-builder', description: 'Whitepaper creation tool' },
    { name: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation', description: 'Compliance automation tool' },
    { name: 'Site Health', href: '/site-health', description: 'Website health monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Sitemap - Zion Tech Group | Complete Website Structure</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category." />
        <meta name="keywords" content="sitemap, website structure, Zion Tech Group, services, pages" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Complete overview of all pages, services, and resources available on the Zion Tech Group website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Main Pages</h2>
              </div>
              <div className="space-y-3">
                {mainPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                      {page.name}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {page.description}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Services</h2>
              </div>
              <div className="space-y-3">
                {serviceCategories.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200">
                      {service.name}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {service.description}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Company</h2>
              </div>
              <div className="space-y-3">
                {companyPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className="text-white font-medium group-hover:text-green-300 transition-colors duration-200">
                      {page.name}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {page.description}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Resources</h2>
              </div>
              <div className="space-y-3">
                {resourcePages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className="text-white font-medium group-hover:text-yellow-300 transition-colors duration-200">
                      {page.name}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {page.description}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Legal & Compliance</h2>
              </div>
              <div className="space-y-3">
                {legalPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className="text-white font-medium group-hover:text-red-300 transition-colors duration-200">
                      {page.name}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {page.description}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Special Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 lg:col-span-2 xl:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Special Pages & Tools</h2>
              </div>
              <div className="space-y-3">
                {specialPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className="text-white font-medium group-hover:text-indigo-300 transition-colors duration-200">
                      {page.name}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {page.description}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap | Zion Tech Group"
        description="Navigate through all pages and sections of the Zion Tech Group website"
        keywords="sitemap, website navigation, Zion Tech Group pages, site structure"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore all the pages and sections of our comprehensive technology marketplace platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-zion-cyan mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
                Main Pages
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Marketplace */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-zion-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Marketplace
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Browse Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Find Talent
                  </Link>
                </li>
                <li>
                  <Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Equipment & Resources
                  </Link>
                </li>
                <li>
                  <Link to="/create-profile" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Create Profile
                  </Link>
                </li>
                <li>
                  <Link to="/post-job" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Post a Job
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Services
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/cybersecurity-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    IT Onsite Services
                  </Link>
                </li>
                <li>
                  <Link to="/expanded-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Expanded Services
                  </Link>
                </li>
                <li>
                  <Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Green IT Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    AI & ML Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* User Dashboard */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                User Dashboard
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/dashboard" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <Link to="/messages" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Messages
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/admin/disputes" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Dispute Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Legal & Support
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Help Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Additional Resources */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Additional Resources
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/resources" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Resource Library
                  </Link>
                </li>
                <li>
                  <Link to="/tools" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Free Tools
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Events & Webinars
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Partner Network
                  </Link>
                </li>
                <li>
                  <Link to="/newsletter" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Newsletter Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                to="/faq" 
                className="bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
=======
import { motion } from 'framer-motion';
import { 
  Map, 
  Home, 
  Info, 
  Settings, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  Shield, 
  Cookie, 
  Globe,
  Brain,
  Cloud,
  Zap,
  Users
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Main landing page' },
    { name: 'About Us', href: '/about', icon: Info, description: 'Company information and mission' },
    { name: 'Services', href: '/services', icon: Settings, description: 'Overview of all services' },
    { name: 'Contact', href: '/contact', icon: MessageSquare, description: 'Get in touch with us' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support and resources' },
    { name: 'Request Quote', href: '/quote', icon: FileText, description: 'Get a custom quote' },
  ];

  const servicePages = [
    { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Machine Learning & AI Services' },
    { name: 'Cloud Infrastructure', href: '/services/cloud', icon: Cloud, description: 'AWS, Azure, GCP Solutions' },
    { name: 'Cybersecurity', href: '/services/security', icon: Shield, description: 'Security & Compliance' },
    { name: 'Digital Transformation', href: '/services/transformation', icon: Zap, description: 'Business Process Modernization' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection and privacy' },
    { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie, description: 'Cookie usage information' },
  ];

  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-md rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <IconComponent className="w-6 h-6 mr-3 text-cyan-400" />
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => {
          const PageIcon = page.icon;
          return (
            <Link
              key={page.name}
              to={page.href}
              className="group p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-cyan-400/50"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PageIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {page.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Map className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Website Sitemap</h1>
          <p className="text-xl text-gray-300">
            Complete overview of all pages and services available on Zion Tech Group
          </p>
        </motion.div>

        {/* Sitemap Content */}
        <div className="space-y-8">
          {renderPageSection('Main Pages', mainPages, Globe)}
          {renderPageSection('Services', servicePages, Settings)}
          {renderPageSection('Legal & Policies', legalPages, Shield)}
        </div>

        {/* Additional Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white/10 backdrop-blur-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-cyan-400" />
            About This Sitemap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">For Users</h3>
              <p className="text-sm">
                This sitemap provides a comprehensive overview of all available pages and services. 
                Use it to quickly navigate to the information you need or discover new features 
                and services offered by Zion Tech Group.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">For Search Engines</h3>
              <p className="text-sm">
                This page helps search engines understand the structure of our website and 
                index all our content properly. It also serves as a reference for web crawlers 
                to discover all available pages.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 backdrop-blur-md rounded-lg p-6 border border-cyan-400/30"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Need Help Finding Something?</h3>
            <p className="text-gray-300 mb-4">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/help"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Help Center
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
>>>>>>> main
  );
}
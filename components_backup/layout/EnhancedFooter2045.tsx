import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, ArrowUp,
  Brain, Atom, Shield, Target, Cpu, Database,
  Twitter, Linkedin, Github, Youtube, Facebook, Instagram
} from 'lucide-react';

const EnhancedFooter2045: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      services: [
        { name: "AI-Powered Business Intelligence", href: "/ai-powered-business-intelligence-platform" },
        { name: "Intelligent Customer Service AI", href: "/intelligent-customer-service-ai" },
        { name: "AI-Powered Marketing Automation", href: "/ai-powered-marketing-automation" },
        { name: "Intelligent Document Processing AI", href: "/intelligent-document-processing-ai" }
      ]
    },
    {
      title: "IT Infrastructure",
      icon: Cpu,
      services: [
        { name: "Quantum-Ready Cloud Infrastructure", href: "/quantum-ready-cloud-infrastructure" },
        { name: "Intelligent DevOps Automation", href: "/intelligent-devops-automation-platform" },
        { name: "Advanced Cybersecurity Intelligence", href: "/advanced-cybersecurity-intelligence" },
        { name: "Intelligent Data Management", href: "/intelligent-data-management-platform" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      icon: Target,
      services: [
        { name: "AI Customer Success Platform", href: "/ai-customer-success-platform" },
        { name: "Intelligent Project Management", href: "/intelligent-project-management-suite" },
        { name: "Smart Content Marketing", href: "/smart-content-marketing-automation" },
        { name: "Intelligent E-commerce Analytics", href: "/intelligent-ecommerce-analytics-platform" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/enhanced-services" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/ziontechgroup", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/ziontechgroup", color: "hover:text-blue-400" },
    { name: "GitHub", icon: Github, href: "https://github.com/ziontechgroup", color: "hover:text-gray-400" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@ziontechgroup", color: "hover:text-red-400" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/ziontechgroup", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/ziontechgroup", color: "hover:text-pink-400" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-white/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Atom className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="lg:col-span-1"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 hover:text-white transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Revolutionary Technology Solutions for the Future
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default EnhancedFooter2045;
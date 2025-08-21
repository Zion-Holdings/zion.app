import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Brain, Rocket, Shield, Cloud, 
  Zap, Atom, Building2, Star,
  ArrowRight, ExternalLink
} from 'lucide-react';

export default function EnhancedFooter() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      href: '/services?category=ai',
      icon: Brain,
      description: 'Advanced AI services and solutions',
      services: ['AI Content Generation', 'Machine Learning Models', 'Neural Networks', 'AI Automation']
    },
    {
      name: 'Quantum Computing',
      href: '/services?category=quantum',
      icon: Atom,
      description: 'Quantum-powered solutions',
      services: ['Quantum Algorithms', 'Quantum Security', 'Quantum Optimization', 'Quantum AI']
    },
    {
      name: 'Cybersecurity',
      href: '/services?category=security',
      icon: Shield,
      description: 'Next-gen security solutions',
      services: ['Threat Detection', 'Zero Trust Security', 'AI Security', 'Compliance Management']
    },
    {
      name: 'Cloud & Infrastructure',
      href: '/services?category=cloud',
      icon: Cloud,
      description: 'Scalable cloud solutions',
      services: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Multi-Cloud Management']
    },
    {
      name: 'Emerging Tech',
      href: '/services?category=emerging',
      icon: Rocket,
      description: 'Cutting-edge innovations',
      services: ['Blockchain Solutions', 'IoT Platforms', 'Edge Computing', 'Metaverse Development']
    },
    {
      name: 'Enterprise IT',
      href: '/services?category=enterprise',
      icon: Building2,
      description: 'Enterprise-grade solutions',
      services: ['Digital Transformation', 'Legacy Modernization', 'Data Analytics', 'Process Automation']
    }
  ];

  const quickLinks = [
    { name: 'Revolutionary Services', href: '/revolutionary-services-showcase', highlight: true },
    { name: 'All Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Market Pricing', href: '/market-pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' }
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                Z
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-sm text-gray-400">Revolutionary Technology Solutions</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Pioneering the future with 1000+ cutting-edge AI, quantum computing, and emerging technology services. 
              Achieve 1000% ROI with our revolutionary solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="text-sm">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-green-400" />
                <a href={contactInfo.website} className="text-sm" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Our Revolutionary Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategories.map((category) => (
                <div key={category.name} className="group">
                  <Link
                    href={category.href}
                    className="flex items-center space-x-3 mb-3 group-hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </span>
                  </Link>
                  <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                  <ul className="space-y-1">
                    {category.services.slice(0, 3).map((service) => (
                      <li key={service} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-2 text-sm transition-colors ${
                      link.highlight
                        ? 'text-cyan-400 hover:text-cyan-300 font-medium'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <ArrowRight className="w-3 h-3" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200 hover:scale-110"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-cyan-500/30 p-8 mb-12"
        >
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services. 
              Get started today and achieve 1000% ROI with cutting-edge AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Revolutionary Services Inquiry`}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. Revolutionary technology solutions for the future.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
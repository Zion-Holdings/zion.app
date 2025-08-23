import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, ArrowRight, 
  Facebook, Twitter, Linkedin, Github, Youtube, Instagram,
  Shield, Zap, Cpu, Brain, Rocket, Users, Award, Clock
} from 'lucide-react';

const EnhancedFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Innovative 2025 Showcase', href: '/innovative-2025-services-showcase' },
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: 'Cloud Infrastructure', href: '/cloud-platform' },
        { label: 'Data Analytics', href: '/data-analytics' },
        { label: 'Process Automation', href: '/process-automation' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Startup Solutions', href: '/startup-solutions' },
        { label: 'Government Solutions', href: '/government-solutions' },
        { label: 'Healthcare Solutions', href: '/healthcare-solutions' },
        { label: 'Financial Services', href: '/financial-solutions' },
        { label: 'Manufacturing AI', href: '/manufacturing-ai-solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Leadership', href: '/leadership' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Press', href: '/news' },
        { label: 'Partners', href: '/partners' },
        { label: 'Investors', href: '/investors' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Support', href: '/support' },
        { label: 'Training', href: '/training' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Clients Worldwide' },
    { icon: Award, number: '50+', label: 'Industry Awards' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Globe, number: '50+', label: 'Countries Served' }
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section with Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-sm text-cyan-400">Pioneering the Future</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We combine cutting-edge technology with proven expertise to deliver solutions that transform businesses and unlock human potential.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (800) ZION-TECH</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-gray-700/50 pt-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                Contact Us
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link href="/innovative-2025-services-showcase" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  View 2025 Services
                </Link>
                <Link href="/get-started" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  Get Started
                </Link>
                <Link href="/support" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  Support Center
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-300">
                <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                <div>Saturday: 10:00 AM - 4:00 PM EST</div>
                <div>Sunday: Closed</div>
                <div className="text-cyan-400 font-medium">24/7 Emergency Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 mb-12 border border-cyan-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with the Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on AI, quantum computing, cybersecurity, and emerging technologies delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700/50">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 group"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950/50 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>Made with ❤️ by Zion Tech Group</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter2025;
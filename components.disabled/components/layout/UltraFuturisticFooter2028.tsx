import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Shield, Cloud, Database, Code, BarChart3, 
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, Star, Zap, Sparkles
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Cutting-Edge Innovations',
    services: [
      { name: 'AI Quantum Financial Trading', href: '/ai-quantum-financial-trading-2028' },
      { name: 'Neural Interface Development', href: '/neural-interface-development-2028' },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure-2028' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai-2028' }
    ]
  },
  {
    title: '🎯 Practical Micro SAAS 2028',
    services: [
      { name: 'Autonomous AI Marketing Suite', href: '/autonomous-ai-marketing-suite-2028' },
      { name: 'AI Healthcare Companion Platform', href: '/ai-healthcare-companion-2028' },
      { name: 'Quantum Supply Chain Optimization', href: '/quantum-supply-chain-optimization-2028' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform-2028' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Tech 2028',
    services: [
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform-2028' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform-2028' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Support', href: '/support' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR Compliance', href: '/gdpr' },
  { name: 'Security', href: '/security' },
  { name: 'Accessibility', href: '/accessibility' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/company/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

const quickServices = [
  { name: 'AI Development', href: '/ai-development', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom, color: 'from-blue-500 to-cyan-500' },
  { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
  { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, color: 'from-indigo-500 to-purple-500' },
  { name: 'Data Analytics', href: '/data-analytics', icon: BarChart3, color: 'from-green-500 to-emerald-500' },
  { name: 'Web Development', href: '/web-development', icon: Code, color: 'from-yellow-500 to-orange-500' }
];

export default function UltraFuturisticFooter2028() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-purple-900/20 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-indigo-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-gray-400 text-sm">2028 Future Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative solutions that transform businesses and industries worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                  <span className="leading-relaxed">{contactInfo.address}</span>
                </div>
                <a href={contactInfo.website} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.website.replace('https://', '')}</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold mb-6 text-white">Our Revolutionary Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-lg font-medium text-purple-300">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href}
                            className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Services Grid */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center text-white">Quick Access to Our Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickServices.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Link
                    href={service.href}
                    className={`block w-full h-20 bg-gradient-to-r ${service.color} rounded-xl flex flex-col items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200`}
                  >
                    <service.icon className="w-6 h-6 text-white mb-1" />
                    <span className="text-white text-xs font-medium text-center">{service.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company & Legal Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Connect With Us</h4>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-200 hover:bg-gray-700`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest updates on our revolutionary services and technology breakthroughs.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Leading the future of technology since 2025</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>© 2028 Zion Tech Group. All rights reserved.</span>
                <span>•</span>
                <span>Made with ❤️ for the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
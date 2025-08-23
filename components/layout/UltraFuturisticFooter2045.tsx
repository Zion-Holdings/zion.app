import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, ExternalLink,
  Brain, Atom, Shield, Rocket, Cpu, Target, Sparkles,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github,
  Heart, Shield as ShieldIcon, Lock, Eye, Code, Server
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Services',
      items: [
        { name: 'Micro SAAS Solutions', href: '/services/micro-saas' },
        { name: 'IT Infrastructure & DevOps', href: '/services/it-infrastructure' },
        { name: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
        { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
        { name: 'Space Technology', href: '/services/space-technology' }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'Healthcare & Biotech', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing & Logistics', href: '/solutions/manufacturing' },
        { name: 'Retail & E-commerce', href: '/solutions/retail' },
        { name: 'Education & Training', href: '/solutions/education' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog & News', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Support Center', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const featuredServices = [
    {
      name: 'AI Content & SEO Suite',
      description: 'Automated content creation and SEO optimization',
      price: '$199/month',
      href: '/services/ai-content-seo-suite',
      icon: Brain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Cloud Infrastructure & DevOps',
      description: 'Complete cloud infrastructure management',
      price: '$599/month',
      href: '/services/cloud-infrastructure-devops',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cybersecurity Threat Detection',
      description: 'AI-powered threat detection and response',
      price: '$399/month',
      href: '/services/cybersecurity-threat-detection',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-blue-900/5 to-purple-900/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top Section - Featured Services */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Featured Revolutionary Services
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge AI, quantum computing, and autonomous solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.href} className="block">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Middle Section - Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 text-cyan-400 mr-3" />
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-6 text-lg">
              Ready to revolutionize your business with cutting-edge technology? Contact our experts today.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="text-lg">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-lg">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-lg">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                <Globe className="w-5 h-5 text-cyan-400" />
                <a href={contactInfo.website} className="text-lg" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="w-6 h-6 text-cyan-400 mr-3" />
              Connect With Us
            </h3>
            <p className="text-gray-400 mb-6 text-lg">
              Follow us for the latest updates on revolutionary technology and industry insights.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Get the latest insights on AI, quantum computing, and revolutionary technology.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Divider & Copyright */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <ShieldIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">Enterprise-grade security & compliance</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-cyan-300 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          href="/contact"
          className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </motion.div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;
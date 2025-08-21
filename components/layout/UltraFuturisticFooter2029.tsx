import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Phone, Mail, MapPin, Globe2, Twitter, Linkedin, 
  Facebook, Instagram, Youtube, Github, ArrowRight,
  Heart, Star, CheckCircle, Users, Briefcase, BookOpen,
  MessageCircle, TrendingUp, DollarSign, Home
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028-2029 Futuristic Innovations',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform' },
      { name: 'Quantum Time Manipulation Platform', href: '/quantum-time-manipulation-platform' },
      { name: 'Space Quantum Communication Network', href: '/space-quantum-communication-network' },
      { name: 'AI Autonomous Business Orchestrator', href: '/ai-autonomous-business-orchestrator' }
    ]
  },
  {
    title: '🤖 Advanced AI & Autonomous Systems',
    services: [
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creative Intelligence Suite', href: '/ai-creative-intelligence-suite' },
      { name: 'AI Predictive Innovation Platform', href: '/ai-predictive-innovation-platform' },
      { name: 'AI Autonomous Cybersecurity Platform', href: '/ai-autonomous-cybersecurity' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Technology',
    services: [
      { name: 'Quantum Biological Computing Platform', href: '/quantum-biological-computing' },
      { name: 'Quantum Energy Optimization Platform', href: '/quantum-energy-optimization' },
      { name: 'Quantum Metaverse Platform', href: '/quantum-metaverse-platform' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: '2028 Showcase', href: '/2028-services-showcase', icon: Rocket },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
];

export default function UltraFuturisticFooter2029() {
  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Rocket className="w-9 h-9 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-lg text-cyan-400 font-medium">2029 Future Technology</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Leading the future of technology with revolutionary AI, quantum computing, and space technology solutions. 
              Transform your business with cutting-edge innovations that define tomorrow.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="h-5 w-5" />
                <a href={`tel:${contactInfo.mobile}`} className="text-lg">{contactInfo.mobile}</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
                <a href={`mailto:${contactInfo.email}`} className="text-lg">{contactInfo.email}</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Globe2 className="h-5 w-5" />
                <a href={contactInfo.website} className="text-lg">{contactInfo.website}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Zap className="h-5 w-5 text-cyan-400" />
              <span>Quick Links</span>
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>{link.name}</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Star className="h-5 w-5 text-cyan-400" />
              <span>Featured Services</span>
            </h4>
            <div className="space-y-3">
              {serviceCategories.slice(0, 2).map((category) => (
                <div key={category.title} className="mb-4">
                  <h5 className="text-sm font-medium text-cyan-400 mb-2">{category.title}</h5>
                  <div className="space-y-2">
                    {category.services.slice(0, 2).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-white text-center mb-12 flex items-center justify-center space-x-3">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            <span>Our Revolutionary Services</span>
            <Sparkles className="h-6 w-6 text-cyan-400" />
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-xl border border-gray-700/50 bg-gray-800/20 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300">
                  <h5 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-200">
                    {category.title}
                  </h5>
                  <div className="space-y-2">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 font-medium">Follow us:</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200 w-64"
              />
            </div>
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="h-4 w-4 text-red-400" />
              <span>Made with passion by Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024-2029 Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="/contact"
            className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-200 group"
          >
            <MessageCircle className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-200" />
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}
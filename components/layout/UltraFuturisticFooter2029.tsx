import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye, 
  CircuitBoard, Satellite, Dna, Beaker, TestTube,
  Truck, Plane, Ship, Train, Bus, ArrowRight,
  Phone, Mail, MapPin, ExternalLink, Github, 
  Linkedin, Twitter, Facebook, Instagram, Youtube
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 Revolutionary Innovations',
    services: [
      { name: 'Neural Interface Platform', href: '/neural-interface-platform-2029' },
      { name: 'Quantum Biotech Synthesis', href: '/quantum-biotech-synthesis-2029' },
      { name: 'Autonomous Space Mining', href: '/autonomous-space-mining-2029' },
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol-2029' }
    ]
  },
  {
    title: '🧠 AI & Consciousness',
    services: [
      { name: 'AI Climate Prediction', href: '/ai-climate-prediction-2029' },
      { name: 'AI Healthcare Diagnosis', href: '/ai-healthcare-diagnosis-2029' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-2029' },
      { name: 'AI Business Automation', href: '/ai-business-automation-2029' }
    ]
  },
  {
    title: '⚛️ Quantum Technology',
    services: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-2029' },
      { name: 'Quantum Robotics Platform', href: '/quantum-robotics-2029' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization-2029' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot-platform-2029' }
    ]
  },
  {
    title: '🏙️ Smart Cities',
    services: [
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai-2029' },
      { name: 'Smart City Infrastructure', href: '/smart-city-infrastructure-management-2029' },
      { name: 'Digital Twin Manufacturing', href: '/digital-twin-manufacturing-platform-2029' },
      { name: 'IoT Energy Management', href: '/iot-energy-management-system-2029' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Support', href: '/support', icon: MessageCircle },
  { name: 'Terms', href: '/terms', icon: Scale }
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-400' },
  { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
];

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/mission' },
      { name: 'Leadership Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press & Media', href: '/press' },
      { name: 'Partnerships', href: '/partnerships' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SAAS', href: '/micro-saas' },
      { name: 'Quantum Computing', href: '/quantum-computing' },
      { name: 'Cybersecurity', href: '/security' },
      { name: 'Consulting', href: '/consulting' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/support' },
      { name: 'Status Page', href: '/status' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Training', href: '/training' },
      { name: 'Feedback', href: '/feedback' }
    ]
  }
];

export default function UltraFuturisticFooter2029() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-12">
            {/* Company Info & Contact */}
            <div className="lg:col-span-2 xl:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </div>
                    <div className="text-sm text-gray-400">2029 Revolutionary Technology</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  Leading the future of technology with revolutionary AI, quantum computing, and innovative solutions. 
                  We transform businesses through cutting-edge technology and unparalleled expertise.
                </p>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                    <a href={contactInfo.website} className="hover:text-cyan-400">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white border-b border-purple-500/30 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Service Categories Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-purple-500/30"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-12">
              Our Revolutionary Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-gray-900/70"
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">{category.title.split(' ')[0]}</span>
                  </h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-purple-500/30"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead of the Future
              </h3>
              <p className="text-gray-400 mb-8">
                Get the latest updates on revolutionary technology, AI breakthroughs, and quantum computing advancements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/30 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. Leading the future of technology.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
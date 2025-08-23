import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Globe,
  ArrowRight,
  Zap,
  Star,
  Shield,
  Brain,
  Atom,
  Rocket,
  Cloud,
  Lock,
  Network,
  FileText,
  GraduationCap,
  DollarSign,
  Satellite,
  Cpu,
  Truck,
  Heart,
  Building,
  Users,
  Target,
  Briefcase,
  MessageCircle,
  Home,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const UltraFuturisticFooter2047: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Business Orchestrator', href: '/ai-autonomous-business-orchestrator', icon: Brain, description: 'Fully autonomous AI business operations' },
        { name: 'AI Autonomous Financial Advisor', href: '/ai-autonomous-financial-advisor', icon: DollarSign, description: 'Autonomous financial planning and investment' },
        { name: 'AI Autonomous Healthcare Diagnostic', href: '/ai-autonomous-healthcare-diagnostic', icon: Shield, description: 'Autonomous medical diagnosis system' },
        { name: 'AI Autonomous Legal Assistant', href: '/ai-autonomous-legal-assistant', icon: FileText, description: 'Autonomous legal research and analysis' },
        { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', icon: Rocket, description: 'Autonomous content creation and publishing' }
      ]
    },
    {
      title: 'Quantum Technology',
      items: [
        { name: 'Quantum Edge Computing Network', href: '/quantum-edge-computing-network', icon: Network, description: 'Quantum-powered edge computing infrastructure' },
        { name: 'Quantum Cloud Hybrid Platform', href: '/quantum-cloud-hybrid-platform', icon: Cloud, description: 'Quantum computing integrated with hybrid cloud' },
        { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence', icon: Target, description: 'Quantum-powered CRM with AI intelligence' },
        { name: 'Quantum AI Cybersecurity Sentinel', href: '/quantum-ai-cybersecurity-sentinel', icon: Lock, description: 'Quantum-powered AI security system' }
      ]
    },
    {
      title: 'IT Infrastructure',
      items: [
        { name: 'Autonomous DevOps Orchestrator', href: '/autonomous-devops-orchestrator', icon: Zap, description: 'Autonomous DevOps pipeline management' },
        { name: 'Quantum Edge Computing Network', href: '/quantum-edge-computing-network', icon: Network, description: 'Quantum-powered edge computing' },
        { name: 'Autonomous Edge Computing Network', href: '/autonomous-edge-computing-network', icon: Cpu, description: 'Self-managing edge computing network' },
        { name: 'Zero Trust Quantum Network', href: '/zero-trust-quantum-network', icon: Shield, description: 'Quantum-secured zero trust network' }
      ]
    },
    {
      title: 'Business Solutions',
      items: [
        { name: 'Autonomous E-commerce Optimizer', href: '/autonomous-ecommerce-optimizer', icon: Truck, description: 'Autonomous e-commerce optimization' },
        { name: 'AI Autonomous Business Orchestrator', href: '/ai-autonomous-business-orchestrator', icon: Building, description: 'Autonomous business operations' },
        { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence', icon: Target, description: 'Quantum-powered CRM platform' },
        { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', icon: Rocket, description: 'Autonomous content creation' }
      ]
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-cyan-400' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Careers', href: '/careers', icon: GraduationCap }
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/10 via-transparent to-pink-900/10" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-20 w-1 h-1 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-32 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">🚀</div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Revolutionary Technology Solutions 2047</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of technology with revolutionary AI consciousness, 
              quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                {section.title === 'AI & Autonomous Systems' && <Brain className="w-5 h-5 text-purple-400" />}
                {section.title === 'Quantum Technology' && <Atom className="w-5 h-5 text-blue-400" />}
                {section.title === 'IT Infrastructure' && <Cpu className="w-5 h-5 text-cyan-400" />}
                {section.title === 'Business Solutions' && <Target className="w-5 h-5 text-emerald-400" />}
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      href={item.href}
                      className="group flex items-start space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                      <div>
                        <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                          {item.name}
                        </span>
                        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links & Social */}
        <div className="border-t border-gray-800/50 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-gray-600/50`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800/50 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Future Technology
            </h4>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, quantum computing, and autonomous systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-pink-400" />
              <span>Made with cutting-edge technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2047;
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
  Home
} from 'lucide-react';

const UltraFuturisticFooter2046: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      items: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain },
        { name: 'Quantum Technology', href: '/services?category=quantum', icon: Atom },
        { name: 'IT Infrastructure', href: '/services?category=it-infrastructure', icon: Cpu },
        { name: 'Micro SAAS Solutions', href: '/services?category=micro-saas', icon: Rocket },
        { name: 'Space Technology', href: '/services?category=space-tech', icon: Satellite },
        { name: 'Advanced Computing', href: '/services?category=advanced-computing', icon: Cpu }
      ]
    },
    {
      title: 'Featured Services',
      items: [
        { name: 'AI Autonomous Business Orchestrator', href: '/ai-autonomous-business-orchestrator', icon: Brain },
        { name: 'Quantum AI Cybersecurity Sentinel', href: '/quantum-ai-cybersecurity-sentinel', icon: Shield },
        { name: 'Quantum Cloud Hybrid Platform', href: '/quantum-cloud-hybrid-platform', icon: Cloud },
        { name: 'Autonomous Edge Computing Network', href: '/autonomous-edge-computing-network', icon: Network },
        { name: 'Zero Trust Quantum Network', href: '/zero-trust-quantum-network', icon: Lock },
        { name: 'Autonomous Content Creation Suite', href: '/autonomous-content-creation-suite', icon: FileText }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Mission', href: '/mission', icon: Target },
        { name: 'Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageCircle }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Globe },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Support', href: '/support', icon: MessageCircle }
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
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, color: 'hover:text-cyan-400' },
    { name: 'GitHub', href: 'https://github.com', icon: Github, color: 'hover:text-gray-400' },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube, color: 'hover:text-red-400' }
  ];

  return (
    <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions 2046</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed max-w-md"
              >
                Pioneering the future of technology with cutting-edge AI consciousness, quantum computing, 
                and autonomous systems that transform businesses worldwide.
              </motion.p>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated with the Future
                </h3>
                <p className="text-gray-300 mb-6">
                  Get the latest insights on revolutionary technology, AI consciousness, and quantum computing breakthroughs.
                </p>
              </div>

              <form className="space-y-4">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white border-b border-cyan-500/30 pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        <item.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-cyan-500/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-sm">Made with</span>
                <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
                <span className="text-sm">for the future</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Gradient Bar */}
        <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2046;
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
  Star,
  Shield,
  Zap,
  Brain,
  Atom,
  Rocket,
  Heart,
  Award,
  Users,
  Building,
  Target,
  BookOpen,
  Code,
  MessageCircle,
  Calendar,
  Lightbulb,
  TrendingUp,
  Sparkles,
  BarChart3
} from 'lucide-react';

const UltraFuturisticFooter2048: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Revolutionary Services',
      items: [
        { label: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform-2045', icon: Brain },
        { label: 'Quantum Edge Computing', href: '/quantum-edge-computing-orchestrator', icon: Atom },
        { label: 'Autonomous Business AI', href: '/ai-autonomous-business-orchestrator', icon: Rocket },
        { label: 'Quantum Secure Cloud', href: '/quantum-secure-cloud-hybrid-platform', icon: Shield },
        { label: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-evolution-platform', icon: Heart },
        { label: 'Autonomous DevOps', href: '/autonomous-devops-intelligence-platform', icon: Code }
      ]
    },
    {
      title: 'Innovative Solutions',
      items: [
        { label: 'Healthcare AI', href: '/ai-autonomous-healthcare-diagnostics-platform', icon: Heart },
        { label: 'Financial Trading AI', href: '/ai-autonomous-financial-trading-orchestrator', icon: TrendingUp },
        { label: 'Supply Chain AI', href: '/ai-autonomous-supply-chain-orchestrator', icon: Zap },
        { label: 'Legal Contract AI', href: '/ai-autonomous-legal-contract-analyzer', icon: Shield },
        { label: 'Creative Content AI', href: '/ai-autonomous-creative-content-orchestrator', icon: Sparkles },
        { label: 'Customer Success AI', href: '/ai-autonomous-customer-success-platform', icon: Users }
      ]
    },
    {
      title: 'Micro SAAS Platforms',
      items: [
        { label: 'Quantum Communication Hub', href: '/quantum-secure-communication-hub', icon: MessageCircle },
        { label: 'HR Intelligence Suite', href: '/autonomous-hr-intelligence-suite', icon: Users },
        { label: 'Financial Analytics', href: '/quantum-financial-analytics-platform', icon: TrendingUp },
        { label: 'Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator', icon: Target },
        { label: 'Network Intelligence', href: '/autonomous-network-intelligence-system', icon: Globe },
        { label: 'Data Center Automation', href: '/quantum-data-center-automation-platform', icon: Building }
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        { label: 'About Zion Tech Group', href: '/about', icon: Building },
        { label: 'Our Revolutionary Team', href: '/team', icon: Users },
        { label: 'Join Our Mission', href: '/careers', icon: Award },
        { label: 'Knowledge Base', href: '/resources', icon: BookOpen },
        { label: 'Case Studies', href: '/resources/case-studies', icon: BarChart3 },
        { label: 'API Documentation', href: '/resources/api', icon: Code }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 302 464 0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '364 E Main St STE 1008 Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'https://ziontechgroup.com',
      href: 'https://ziontechgroup.com'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' }
  ];

  const stats = [
    { number: '5000+', label: 'Innovative Services', icon: Star },
    { number: '99.99%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'AI Support Available', icon: Brain },
    { number: '200+', label: 'Enterprise Clients', icon: Building }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-purple-900/5 to-pink-900/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>{section.title}</span>
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors duration-200 group"
                      >
                        <item.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                        <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact & Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                <span>Get In Touch</span>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-300 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <contact.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="text-white font-medium">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Globe className="w-6 h-6 text-cyan-400" />
                <span>Connect & Stay Updated</span>
              </h3>
              
              {/* Social Links */}
              <div className="space-y-4">
                <div className="text-sm text-gray-400">Follow our revolutionary journey</div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40"
                    >
                      <social.icon className="w-6 h-6 text-cyan-400" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <div className="text-sm text-gray-400">Get the latest revolutionary insights</div>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-cyan-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Atom className="w-5 h-5 text-cyan-400" />
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-300 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-cyan-300 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Revolutionary Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-6"
          >
            <div className="text-sm text-gray-500">
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </div>
            <div className="flex items-center justify-center space-x-2 mt-2 text-xs text-gray-600">
              <Star className="w-3 h-3 text-cyan-400" />
              <span>Revolutionary 2045 Technology</span>
              <Star className="w-3 h-3 text-cyan-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2048;
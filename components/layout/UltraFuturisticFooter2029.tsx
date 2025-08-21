import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Phone, Mail, MapPin, ArrowRight, Star, TrendingUp,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Github, MessageCircle, Twitch, BookOpen, Heart
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '2029 AI & Consciousness',
    services: [
      { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation-platform' },
      { name: 'Autonomous AI Corporation', href: '/autonomous-ai-corporation-platform' },
      { name: 'AI Reality Augmentation', href: '/ai-reality-augmentation-platform' },
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface' }
    ]
  },
  {
    title: '2029 Space & Colonization',
    services: [
      { name: 'Mars Colonization Automation', href: '/mars-colonization-automation-platform' },
      { name: 'Interplanetary Communication', href: '/interplanetary-communication-network' },
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Space Habitat Design', href: '/space-habitat-design-platform' }
    ]
  },
  {
    title: 'Advanced AI Solutions',
    services: [
      { name: 'AI Customer Service', href: '/ai-customer-service-automation' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Content Creation', href: '/ai-content-creation-suite' },
      { name: 'AI Healthcare Diagnosis', href: '/ai-healthcare-diagnosis-platform' }
    ]
  },
  {
    title: 'Blockchain & Web3',
    services: [
      { name: 'Supply Chain Transparency', href: '/blockchain-supply-chain-transparency' },
      { name: 'Smart Contract Automation', href: '/smart-contract-automation' },
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization' },
      { name: 'NFT Marketplace Platform', href: '/nft-marketplace-platform' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press & Media', href: '/press' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Investor Relations', href: '/investors' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Developer Tools', href: '/dev-tools' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' }
];

const supportLinks = [
  { name: 'Help Center', href: '/help' },
  { name: 'Contact Support', href: '/support' },
  { name: 'Status Page', href: '/status' },
  { name: 'System Requirements', href: '/requirements' },
  { name: 'Training', href: '/training' },
  { name: 'Community', href: '/community' }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Discord', href: '#', icon: MessageCircle },
  { name: 'Medium', href: '#', icon: BookOpen }
];

const UltraFuturisticFooter2029: React.FC = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur opacity-30"></div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-gray-400">2029 Future Technology Solutions</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-300 leading-relaxed max-w-md"
              >
                Pioneering the future with cutting-edge AI, quantum computing, and space technology solutions. 
                We're building tomorrow's innovations today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-pink-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Service Categories Grid */}
            <div className="grid grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-white border-b border-purple-500/30 pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          href={service.href}
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-900/50 hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © 2024 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-purple-400 transition-colors duration-200 ml-2">
                Privacy Policy
              </Link> | 
              <Link href="/terms" className="hover:text-purple-400 transition-colors duration-200 ml-2">
                Terms of Service
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm">Trusted by 10,000+ companies worldwide</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Neon Border Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-60" />
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2029;
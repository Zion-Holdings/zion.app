import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Zap, Sparkles, 
  Brain, Atom, Rocket, Shield, Target, Microscope,
  Star, TrendingUp, Users, Award, Briefcase,
  BookOpen, Heart, Leaf, Sun, Moon,
  Wind, Droplets, Mountain, Code, Wrench, Smartphone,
  BarChart3, Eye, Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic, Keyboard,
  Mouse, CircuitBoard, Satellite, Dna, Microchip,
  Telescope, Beaker, TestTube, Syringe, Pill, Stethoscope,
  HeartPulse, Activity, Lightbulb, Flame, Battery, Power,
  Wifi, Bluetooth, Radio, Antenna, Signal, Compass,
  Navigation, Map, Globe2, Github, Twitter, Linkedin,
  Facebook, Instagram, Youtube, Twitch, MessageCircle, Slack
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: '🚀 Core Services',
    links: [
      { name: 'AI Consciousness & Evolution', href: '/services/ai-consciousness' },
      { name: 'Quantum & Emerging Tech', href: '/services/quantum-tech' },
      { name: 'Space & Metaverse Tech', href: '/services/space-tech' },
      { name: 'Enterprise IT Solutions', href: '/services/enterprise-it' },
      { name: 'Innovative Micro SAAS', href: '/services/micro-saas' },
      { name: 'Research & Development', href: '/services/research-development' }
    ]
  },
  {
    title: '💎 2034 Innovations',
    links: [
      { name: 'AI Consciousness Platform', href: '/ai-consciousness-evolution-platform' },
      { name: 'Quantum DNA Computing', href: '/quantum-dna-computing-platform' },
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development-platform' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'Neural Interface Platform', href: '/neural-interface-development-platform' }
    ]
  },
  {
    title: '🏢 Company',
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
    title: '📚 Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Blog & News', href: '/news' },
      { name: 'Video Tutorials', href: '/tutorials' }
    ]
  },
  {
    title: '🔗 Quick Links',
    links: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact Sales', href: '/contact-sales' },
      { name: 'Support Center', href: '/support' },
      { name: 'Status Page', href: '/status' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' }
    ]
  },
  {
    title: '📞 Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/contact-support' },
      { name: 'Developer Support', href: '/developer-support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Feedback', href: '/feedback' }
    ]
  }
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Zion-Holdings', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/zion-tech-group', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'hover:text-red-400' },
  { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/ziontechgroup', color: 'hover:text-purple-400' }
];

export default function UltraFuturisticFooter2034() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent_50%)] animate-pulse delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="mr-2">{section.title.split(' ')[0]}</span>
                  <span className="text-cyan-400">{section.title.split(' ').slice(1).join(' ')}</span>
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Middle Section - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800/50 pt-12 mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Company Description */}
              <div className="max-w-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-sm text-gray-400">2034 Innovation Hub</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We're pioneers building the future, one breakthrough innovation at a time. 
                  From AI consciousness to space mining automation, we're creating the technologies 
                  that will define the next decade and beyond.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href={`tel:${contactInfo.mobile}`} className="text-sm">{contactInfo.mobile}</a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-sm">{contactInfo.email}</a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    <Globe className="w-4 h-4 text-green-400" />
                    <a href={contactInfo.website} className="text-sm">{contactInfo.website}</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800/50 pt-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-white mb-3">Follow Our Journey</h3>
                <p className="text-gray-400 text-sm">Stay connected with the latest innovations and updates</p>
              </div>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800/50 pt-8 mb-8"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Stay Ahead of the Curve</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive insights into emerging technologies, 
                industry trends, and early access to our latest innovations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full sm:w-auto px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 bg-gray-900/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Zion Tech Group. All rights reserved. 
                  Building the future, one innovation at a time.
                </p>
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
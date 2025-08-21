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
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-400' }
];

const UltraFuturisticFooter2034: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/95 border-t border-cyan-500/30 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <span>{section.title.split(' ')[0]}</span>
                <span className="text-sm font-medium text-gray-300">{section.title.split(' ').slice(1).join(' ')}</span>
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-cyan-500/30 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  Zion Tech Group
                </h3>
                <p className="text-gray-400 text-lg">
                  Leading the future of technology with revolutionary AI consciousness, quantum computing, and space technology innovations.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span>{contactInfo.address}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-5 h-5 text-green-400" />
                  <a href={contactInfo.website} className="hover:text-green-400 transition-colors duration-300">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links & Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/5 border border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest updates on our revolutionary technologies and innovations.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">for the future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2034;

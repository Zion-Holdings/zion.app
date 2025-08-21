import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Phone, Mail, MapPin, Globe2, Twitter, Linkedin, 
  Facebook, Instagram, Youtube, Github, MessageCircle,
  ArrowRight, Star, CheckCircle, Users, Briefcase,
  BookOpen, Cpu, Database, Cloud, Lock, ShieldCheck,
  Heart
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: '🚀 2029 Technology Services',
    links: [
      { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation-platform' },
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface' },
      { name: 'Mars Colonization Automation', href: '/mars-colonization-automation-platform' },
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Quantum Space Propulsion', href: '/quantum-space-propulsion-system' },
      { name: 'Space Elevator Automation', href: '/space-elevator-automation-platform' }
    ]
  },
  {
    title: '🧠 AI & Machine Learning',
    links: [
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Engine', href: '/ai-creativity-engine-platform' },
      { name: 'Autonomous AI Corporation', href: '/autonomous-ai-corporation-platform' },
      { name: 'AI Reality Augmentation', href: '/ai-reality-augmentation-platform' },
      { name: 'AI Autonomous Decision', href: '/ai-autonomous-decision-platform' },
      { name: 'AI Predictive Intelligence', href: '/ai-predictive-intelligence-platform' }
    ]
  },
  {
    title: '⚛️ Quantum Computing',
    links: [
      { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-hybrid-computing' },
      { name: 'Quantum Cryptography', href: '/quantum-cryptography-platform' },
      { name: 'Quantum Time Manipulation', href: '/quantum-time-manipulation-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Quantum Data Analytics', href: '/quantum-data-analytics-platform' },
      { name: 'Quantum AI Optimization', href: '/quantum-ai-optimization-platform' }
    ]
  },
  {
    title: '🏠 Space Technology',
    links: [
      { name: 'Space Habitat Design', href: '/space-habitat-design-platform' },
      { name: 'Space Energy Harvesting', href: '/space-energy-harvesting-platform' },
      { name: 'Orbital Manufacturing', href: '/orbital-manufacturing-automation' },
      { name: 'Space Resource Processing', href: '/space-resource-processing-automation' },
      { name: 'Quantum Life Support', href: '/quantum-life-support-systems' },
      { name: 'Space Agriculture', href: '/space-agriculture-automation-platform' }
    ]
  },
  {
    title: '💼 Business & IT Solutions',
    links: [
      { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence-platform' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Autonomous Supply Chain', href: '/autonomous-supply-chain-platform' },
      { name: 'Autonomous Customer Experience', href: '/autonomous-customer-experience-platform' },
      { name: 'Autonomous Cybersecurity', href: '/autonomous-cybersecurity-platform' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-platform' }
    ]
  },
  {
    title: '🔒 Security & Intelligence',
    links: [
      { name: 'Quantum Space Security', href: '/quantum-space-security-platform' },
      { name: 'Space Threat Intelligence', href: '/space-threat-intelligence-platform' },
      { name: 'AI Threat Detection', href: '/ai-threat-detection-platform' },
      { name: 'Quantum Encryption', href: '/quantum-encryption-platform' },
      { name: 'Autonomous Security Response', href: '/autonomous-security-response' },
      { name: 'Cyber Threat Intelligence', href: '/cyber-threat-intelligence' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Rocket },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-services', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },
  { name: 'Space Tech', href: '/space-technology', icon: Globe },
  { name: 'Business IT', href: '/it-services', icon: Cpu },
  { name: 'Pricing', href: '/pricing', icon: Star },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

const UltraFuturisticFooter2029: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-500/20 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/3 via-indigo-500/3 to-purple-500/3" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              style={{
                top: `${(i * 7) % 100}%`,
                left: '0',
                right: '0',
                transform: `translateX(${Math.sin(i * 0.5) * 30}px)`
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                  <Rocket className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-25"></div>
              </div>
              <div className="text-left">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
                <p className="text-lg text-cyan-400 font-medium">2029 Future Technology</p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Pioneering the future with revolutionary AI consciousness simulation, quantum brain-computer interfaces, 
              and autonomous space colonization platforms. Transform your business with technology that was once science fiction.
            </motion.p>
          </div>

          {/* Enhanced Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white border-b border-cyan-500/30 pb-2">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Quick Links & Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white border-b border-cyan-500/30 pb-3">
                Quick Navigation
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white border-b border-cyan-500/30 pb-3">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-medium">{contactInfo.mobile}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Address</p>
                    <p className="font-medium">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-indigo-500/30">
                    <Globe2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Website</p>
                    <p className="font-medium">{contactInfo.website}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-cyan-500/20 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Join the revolution with our cutting-edge 2029 technology services. 
                From AI consciousness simulation to autonomous space colonization, 
                we're building the future today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <Star className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Follow Our Journey</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-slate-800/50 border border-cyan-500/30 rounded-xl flex items-center justify-center text-slate-400 ${social.color} hover:border-cyan-500/60 transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-cyan-500/20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span>&copy; 2029 Zion Tech Group. All rights reserved.</span>
                <div className="flex items-center space-x-4">
                  <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                    Terms of Service
                  </Link>
                  <Link href="/support" className="hover:text-cyan-400 transition-colors duration-300">
                    Support
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-sm">Made with</span>
                <Heart className="w-4 h-4 text-pink-400 fill-current" />
                <span className="text-sm">for the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2029;
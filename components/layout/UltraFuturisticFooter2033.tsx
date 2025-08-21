import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Rocket, Brain, Atom, Globe, 
  Zap, Sparkles, Shield, Microscope, DollarSign, 
  Home, Users, Briefcase, BookOpen, MessageCircle, 
  Star, TrendingUp, Target, Layers, Cpu, Database, 
  Cloud, Lock, ShieldCheck, Earth, Factory, Car, 
  Building, GraduationCap, Scale, Palette, Camera, 
  Video, Music, Gamepad2, Heart, Leaf, Sun, Moon, 
  Wind, Droplets, Mountain, Code, Wrench, Smartphone, 
  BarChart3, Eye, Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic, Keyboard, 
  Mouse, Github, Twitter, Linkedin, Facebook, Instagram,
  Youtube, Twitch, Slack, Figma
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' },
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Biotech DNA Computing', href: '/biotech-dna-computing-platform' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Photonic Computing', href: '/photonic-computing-infrastructure' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'AI IT Operations Center', href: '/ai-it-operations-center' }
    ]
  },
  {
    title: '🌌 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Metaverse Development', href: '/metaverse-development-platform' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' }
    ]
  }
];

const quickLinks = [
  { name: 'Market Pricing', href: '/market-pricing', icon: DollarSign },
  { name: 'Enhanced Services', href: '/enhanced-services-showcase', icon: Star },
  { name: 'Revolutionary 2026', href: '/revolutionary-2026-services', icon: Rocket },
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Zap },
  { name: 'Innovative 2027', href: '/revolutionary-2027-services-showcase', icon: Sparkles },
  { name: 'Cutting Edge 2028', href: '/cutting-edge-2028-micro-saas', icon: Target },
  { name: 'Futuristic 2029', href: '/futuristic-2028-innovations', icon: Globe },
  { name: 'Space Technology', href: '/space-technology', icon: Rocket },
  { name: 'Quantum Services', href: '/quantum-services', icon: Atom },
  { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield }
];

const resources = [
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Code },
  { name: 'Developer Tools', href: '/dev-tools', icon: Wrench },
  { name: 'SDKs & Libraries', href: '/sdks', icon: Layers },
  { name: 'Tutorials', href: '/tutorials', icon: GraduationCap },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
  { name: 'White Papers', href: '/white-papers', icon: BookOpen }
];

const company = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Our Team', href: '/team', icon: Building },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'Press', href: '/press', icon: MessageCircle },
  { name: 'Partners', href: '/partners', icon: Users },
  { name: 'Investors', href: '/investors', icon: TrendingUp },
  { name: 'Legal', href: '/legal', icon: Scale },
  { name: 'Privacy', href: '/privacy', icon: Lock }
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
];

const UltraFuturisticFooter2033: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Logo and Company */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-slate-400 text-sm">Revolutionizing Technology Since 2024</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                  Leading provider of cutting-edge AI, quantum computing, and next-generation technology solutions. 
                  Empowering businesses with revolutionary innovations for the future.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Service Categories */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">
                  Service Categories
                </h4>
                <div className="space-y-4">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="group">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-4 h-4 text-white" />
                        </div>
                        <h5 className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                          {category.title}
                        </h5>
                      </div>
                      <div className="ml-11 space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links & Resources */}
            <div className="space-y-8">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">
                  Quick Links
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
                    >
                      <link.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">
                  Resources
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="flex items-center space-x-2 text-sm text-slate-400 hover:text-purple-400 transition-colors group"
                    >
                      <resource.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                      <span>{resource.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-slate-700/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-slate-400 text-sm">
                <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">
                  Revolutionizing technology with AI, quantum computing, and next-generation solutions.
                </p>
              </div>

              {/* Additional Links */}
              <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/support" className="hover:text-cyan-400 transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-40 left-40 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse delay-2000" />
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2033;
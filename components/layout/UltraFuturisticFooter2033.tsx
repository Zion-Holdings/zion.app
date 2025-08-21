import React from 'react';
import Link from 'next/link';
import { 
<<<<<<< HEAD
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
=======
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Cpu, Target, Microscope, Shield, Zap, Sparkles,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, Star, CheckCircle, TrendingUp
>>>>>>> f7bfc0d3552431cee410405e21b269affb3b9539
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
<<<<<<< HEAD
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
=======
    title: 'AI Services',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform-2033' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform-2033' },
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite-2033' },
      { name: 'AI Customer Success', href: '/ai-customer-success-automation-2033' }
    ]
  },
  {
    title: 'Quantum Technology',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway-2033' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2033' },
      { name: 'Quantum Secure Communication', href: '/quantum-secure-communication-platform-2033' },
      { name: 'Biotech DNA Computing', href: '/biotech-dna-computing-platform-2033' }
    ]
  },
  {
    title: 'Enterprise IT',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform-2033' },
      { name: 'Zero Trust Security', href: '/zero-trust-network-architecture-2033' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration-2033' },
      { name: 'AI IT Operations', href: '/ai-powered-it-operations-center-2033' }
    ]
  },
  {
    title: 'Micro SAAS',
    services: [
      { name: 'AI Sales Automation', href: '/ai-sales-automation-platform-2033' },
      { name: 'Content Generation', href: '/ai-content-generation-automation-2033' },
      { name: 'Blockchain Supply Chain', href: '/blockchain-supply-chain-transparency-2033' },
      { name: 'IoT Edge Orchestration', href: '/iot-edge-computing-orchestration-2033' }
>>>>>>> f7bfc0d3552431cee410405e21b269affb3b9539
    ]
  }
];

<<<<<<< HEAD
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
=======
const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Support', href: '/support' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' }
>>>>>>> f7bfc0d3552431cee410405e21b269affb3b9539
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
];

const UltraFuturisticFooter2033: React.FC = () => {
  return (
<<<<<<< HEAD
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
=======
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
                <p className="text-sm text-gray-400">Leading the Future of Technology</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Pioneering the next generation of AI, quantum computing, and enterprise technology solutions. 
              We're building the future, one innovation at a time.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">500+ Customers</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">1000% Growth</span>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">{contactInfo.mobile}</p>
                </div>
              </a>
              
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{contactInfo.email}</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="font-medium">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                {category.title === 'AI Services' && <Brain className="w-5 h-5 text-cyan-400" />}
                {category.title === 'Quantum Technology' && <Atom className="w-5 h-5 text-blue-400" />}
                {category.title === 'Enterprise IT' && <Cpu className="w-5 h-5 text-purple-400" />}
                {category.title === 'Micro SAAS' && <Target className="w-5 h-5 text-green-400" />}
                <span>{category.title}</span>
              </h3>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
>>>>>>> f7bfc0d3552431cee410405e21b269affb3b9539
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-40 left-40 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse delay-2000" />
        </div>
      </div>
=======
        
        {/* Company & Legal Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Links & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm">Get the latest insights on AI, quantum computing, and emerging technologies.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Globe className="w-4 h-4" />
              <span>© 2025 Zion Tech Group. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for the future</span>
              <span>•</span>
              <span>Powered by AI & Quantum Computing</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
>>>>>>> f7bfc0d3552431cee410405e21b269affb3b9539
    </footer>
  );
};

<<<<<<< HEAD
export default UltraFuturisticFooter2033;
=======
export default UltraFuturisticFooter2033;
>>>>>>> f7bfc0d3552431cee410405e21b269affb3b9539

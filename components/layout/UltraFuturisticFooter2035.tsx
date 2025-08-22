import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare,
<<<<<<< HEAD
  ArrowUp, ExternalLink
=======
  Building, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2,
  Palette, Music, Film, BookOpenCheck, HelpCircle, FileText, Video, Headphones
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
<<<<<<< HEAD
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    links: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', featured: true },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', featured: true },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },
=======
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' },
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
<<<<<<< HEAD
    description: 'Breakthrough quantum and space technologies',
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
=======
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' }
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
    ]
  },
  {
    title: 'Enterprise IT',
<<<<<<< HEAD
    description: 'Advanced enterprise infrastructure solutions',
=======
    icon: <Shield className="w-5 h-5 text-purple-400" />,
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
<<<<<<< HEAD
      { name: 'Quantum Networking', href: '/quantum-networking' }
    ]
  },
  {
    title: 'Solutions',
    description: 'Industry-specific technology solutions',
=======
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <Building className="w-5 h-5 text-orange-400" />,
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
<<<<<<< HEAD
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' }
=======
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' }
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
    ]
  },
  {
    title: 'Resources',
<<<<<<< HEAD
    description: 'Documentation, support, and learning',
=======
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Developer Resources', href: '/developer-resources' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
<<<<<<< HEAD
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' }
=======
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press & Media', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Newsletter', href: '/newsletter' },
  { name: 'Events', href: '/events' }
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
<<<<<<< HEAD
  { name: 'Security', href: '/security' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
];

export default function UltraFuturisticFooter2035() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-cyan-500/20 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2 xl:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Innovation • Intelligence • Impact</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Transforming businesses with cutting-edge AI, quantum computing, and innovative micro SAAS solutions. 
                We help organizations achieve exponential growth through intelligent automation and breakthrough technologies.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  {contactInfo.mobile}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  {contactInfo.email}
                </a>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
=======
  { name: 'Security', href: '/security' },
  { name: 'GDPR Compliance', href: '/gdpr' },
  { name: 'Accessibility', href: '/accessibility' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
];

export default function UltraFuturisticFooter2035() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Futuristic Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 border-b border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  {section.icon}
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-cyan-300/70 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Middle Section - Company Info */}
        <div className="py-12 border-b border-cyan-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400/70">Future Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading the future of technology with revolutionary AI, quantum computing, and autonomous systems. 
                We deliver cutting-edge solutions that transform businesses and drive innovation across industries.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:col-span-2">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={`flex items-center text-sm transition-colors ${
                            link.featured 
                              ? 'text-cyan-400 hover:text-cyan-300 font-medium' 
                              : 'text-gray-400 hover:text-cyan-400'
                          }`}
                        >
                          {link.featured && <Star className="w-3 h-3 mr-2 text-cyan-400" />}
                          {link.name}
                          {link.featured && <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full border border-cyan-500/30">Featured</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-t border-gray-800">
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/ultimate-2025-micro-saas-showcase" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Micro SAAS Services</Link></li>
                <li><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Solutions</Link></li>
                <li><Link href="/quantum-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Quantum Tech</Link></li>
                <li><Link href="/enterprise-it" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Enterprise IT</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Help Center</Link></li>
                <li><Link href="/docs" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Documentation</Link></li>
                <li><Link href="/training" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Training</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="py-12 border-t border-gray-800">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Innovation</h3>
              <p className="text-gray-400 mb-6">
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-black/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors">Privacy</a> | 
                <a href="/terms" className="ml-2 hover:text-cyan-400 transition-colors">Terms</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Made with ❤️ by Zion Tech Group</span>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
=======
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-cyan-300/70 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-sm text-gray-300">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">{contactInfo.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
              <p className="mt-1">Revolutionizing technology, one innovation at a time.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-200"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowRight className="w-4 h-4 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href="/contact"
          className="group w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
>>>>>>> 6eaec95c935ece2e9c42b7494df87be6f0b6b978
      </div>
    </footer>
  );
}
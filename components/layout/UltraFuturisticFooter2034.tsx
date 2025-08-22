'use client';

import Link from 'next/link';
import {
  Brain, Atom, Server, Package, Satellite, Bot, Briefcase, Factory,
  Rocket, Target, BookOpen, Users, Phone, Mail, MapPin, Globe,
  Zap, Search, Cpu, Gem, Car, Cloud, Settings, HardDrive, 
  Code, Lock, Wifi, BarChart, Megaphone, Headphones, UserCheck, 
  Calculator, Calendar, Stethoscope, CreditCard, ShoppingCart, 
  GraduationCap, Building2, Truck, Eye, View, BarChart3, FileText, 
  MessageSquare, Sparkles, Heart, Activity, Palette, Network, 
  Lightbulb, Cog, Code2, TestTube, GitBranch, TrendingUp,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Handshake
} from 'lucide-react';

export default function UltraFuturisticFooter2034() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'text-cyan-400',
      links: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
        { name: 'Emotional Intelligence Training', href: '/ai-emotional-intelligence-training' },
        { name: 'Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
        { name: 'Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
        { name: 'Content Personalization Engine', href: '/ai-content-personalization-engine' },
        { name: 'Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
        { name: 'AI Ethics Governance Framework', href: '/ai-ethics-governance-framework' },
        { name: 'AI Creativity Studio', href: '/ai-creativity-studio' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'text-purple-400',
      links: [
        { name: 'Space Resource Mining', href: '/space-resource-mining' },
        { name: 'Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface' },
        { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
        { name: 'Autonomous Vehicles', href: '/autonomous-vehicles' },
        { name: 'Quantum Computing Solutions', href: '/quantum-computing-solutions' },
        { name: 'Metaverse Development', href: '/metaverse-development' }
      ]
    },
    {
      title: 'Enterprise IT',
      icon: Server,
      color: 'text-green-400',
      links: [
        { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
        { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' },
        { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
        { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
        { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
        { name: 'Quantum Networking', href: '/quantum-networking' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Package,
      color: 'text-blue-400',
      links: [
        { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
        { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
        { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' },
        { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
        { name: 'Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' },
        { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
        { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform' },
        { name: 'Smart CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: Rocket },
    { name: 'Pricing', href: '/revolutionary-2025-pricing', icon: Target },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Documentation', href: '/docs', icon: Code },
    { name: 'Support', href: '/support', icon: Headphones }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'News', href: '/news', icon: Megaphone },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Privacy Policy', href: '/privacy', icon: Lock }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-cyan-300">Future Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future with cutting-edge AI, quantum computing, and innovative micro SAAS solutions. 
              We transform businesses through intelligent technology that adapts and evolves.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className={`w-5 h-5 ${section.color}`} />
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links & Company */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-cyan-500/20">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-purple-400" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Mail className="w-5 h-5 text-green-400" />
              <span>Stay Updated</span>
            </h4>
            <p className="text-gray-400 text-sm">
              Get the latest insights on AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="mt-1">Pioneering the future of technology.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`p-2 bg-gray-800/50 hover:bg-gray-700/50 border border-cyan-500/20 hover:border-cyan-400/40 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-cyan-500/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs text-gray-500">
              <div>
                <span className="inline-flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>99.9% Uptime</span>
                </span>
              </div>
              <div>
                <span className="inline-flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>24/7 Support</span>
                </span>
              </div>
              <div>
                <span className="inline-flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>AI-Powered</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

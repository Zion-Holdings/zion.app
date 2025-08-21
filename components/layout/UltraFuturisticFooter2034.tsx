import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, 
  Youtube, Github, ArrowRight, Star,
  Shield, Rocket, Brain, Atom, DollarSign,
  Users, FileText, HelpCircle, Settings,
  TrendingUp, Award, CheckCircle, Clock,
  Globe as GlobeIcon, Cpu, Database, Lock,
  Target, BookOpen, Heart, Lightbulb
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    services: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory' },
      { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Leadership Team', href: '/leadership', description: 'Meet our executives' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
  { name: 'Investors', href: '/investors', description: 'Investment information' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-docs', description: 'Developer documentation' },
  { name: 'Training', href: '/training', description: 'Skill development programs' },
  { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
  { name: 'Community Forum', href: '/community', description: 'Connect with users' }
];

const resourceLinks = [
  { name: 'Blog', href: '/blog', description: 'Industry insights and updates' },
  { name: 'Whitepapers', href: '/whitepapers', description: 'Research and analysis' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Webinars', href: '/webinars', description: 'Educational content' },
  { name: 'Training Materials', href: '/training', description: 'Learning resources' },
  { name: 'Research Papers', href: '/research', description: 'Academic publications' }
];

const solutionLinks = [
  { name: 'Healthcare Solutions', href: '/healthcare-solutions', description: 'Medical technology innovations' },
  { name: 'Financial Services', href: '/financial-solutions', description: 'Fintech and banking solutions' },
  { name: 'Manufacturing', href: '/manufacturing-solutions', description: 'Industry 4.0 automation' },
  { name: 'Retail & E-commerce', href: '/retail-solutions', description: 'Digital commerce platforms' },
  { name: 'Education Technology', href: '/education-solutions', description: 'Learning management systems' },
  { name: 'Government & Defense', href: '/government-solutions', description: 'Public sector technology' },
  { name: 'Energy & Utilities', href: '/energy-solutions', description: 'Smart grid and sustainability' },
  { name: 'Transportation & Logistics', href: '/transportation-solutions', description: 'Supply chain optimization' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
];

const quickStats = [
  { number: '500+', label: 'Services Delivered', icon: Star },
  { number: '1000+', label: 'Happy Clients', icon: Users },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  { number: '24/7', label: 'Expert Support', icon: Clock }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
                Transform your business with our innovative services and stay ahead of the competition.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="flex items-center justify-center mb-2 text-cyan-400">
                      <stat.icon className="w-4 h-4" />
                    </div>
                    <div className="text-lg font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.website}</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                </div>
                <div className="space-y-2">
                  {category.services.slice(0, 6).map((service, serviceIndex) => (
                    <Link key={serviceIndex} href={service.href}>
                      <div className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        {service.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                Company
              </h4>
              <div className="space-y-2">
                {companyLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <div className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                      {link.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-cyan-400" />
                Support
              </h4>
              <div className="space-y-2">
                {supportLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <div className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                      {link.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Resources
              </h4>
              <div className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <div className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                      {link.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Solutions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                Solutions
              </h4>
              <div className="space-y-2">
                {solutionLinks.slice(0, 6).map((link, index) => (
                  <Link key={index} href={link.href}>
                    <div className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                      {link.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400">
                © 2025 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                  Terms of Service
                </Link>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>by Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

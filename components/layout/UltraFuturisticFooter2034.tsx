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
  Sparkles, Crown, Infinity, Target, Eye,
  MessageCircle, Calendar, ExternalLink,
  Building, Code
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    services: [
      { name: 'AI Consciousness Evolution Pro', href: '/ai-consciousness-evolution-pro', isNew: true },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', isHot: true },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', isNew: true }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    services: [
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', isPremium: true },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform', isNew: true },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', isHot: true },
      { name: 'Space Mining Platform', href: '/space-mining-platform', isPremium: true },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', isNew: true }
    ]
  },
  {
    title: '🏢 Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    services: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-pro', isNew: true },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-pro', isHot: true },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', isNew: true },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', isNew: true },
      { name: 'Quantum Data Center Platform', href: '/quantum-data-center-platform', isPremium: true }
    ]
  },
  {
    title: '💻 Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    services: [
      { name: 'AI Content Factory Enterprise', href: '/ai-content-factory-enterprise', isNew: true },
      { name: 'Quantum CRM Suite Enterprise', href: '/quantum-crm-suite-enterprise', isHot: true },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', isNew: true },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', isNew: true },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', isPremium: true }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision', icon: <Users className="w-4 h-4" /> },
  { name: 'Careers', href: '/careers', description: 'Join our team', icon: <Award className="w-4 h-4" /> },
  { name: 'News & Updates', href: '/news', description: 'Latest company news', icon: <FileText className="w-4 h-4" /> },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories', icon: <TrendingUp className="w-4 h-4" /> },
  { name: 'Resources', href: '/resources', description: 'Whitepapers and guides', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Blog', href: '/blog', description: 'Industry insights', icon: <FileText className="w-4 h-4" /> }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', description: 'Technical guides', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api-docs', description: 'Developer documentation', icon: <Code className="w-4 h-4" /> },
  { name: 'Status Page', href: '/status', description: 'Service status and uptime', icon: <Eye className="w-4 h-4" /> },
  { name: 'Training', href: '/training', description: 'Learn to use our platforms', icon: <Users className="w-4 h-4" /> },
  { name: 'Community', href: '/community', description: 'Connect with other users', icon: <Globe className="w-4 h-4" /> }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
];

const quickActions = [
  { name: 'Get Quote', href: '/contact', icon: <DollarSign className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Book Demo', href: '/contact', icon: <Calendar className="w-4 h-4" />, color: 'from-blue-500 to-cyan-600' },
  { name: 'Live Chat', href: '/contact', icon: <MessageCircle className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' }
];

const getBadgeStyle = (service: any) => {
  if (service.isPremium) return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black';
  if (service.isHot) return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
  if (service.isNew) return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
  return '';
};

const getBadgeText = (service: any) => {
  if (service.isPremium) return 'Premium';
  if (service.isHot) return 'Hot';
  if (service.isNew) return 'New';
  return '';
};

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Pioneering the future of autonomous technology and AI-driven innovation. 
                We deliver cutting-edge solutions that transform businesses and accelerate growth.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${action.color} text-white hover:scale-105 transition-all duration-200 flex items-center space-x-2`}
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  {category.icon}
                  <h4 className="text-lg font-semibold text-white">{category.title.replace(/^[^\s]+ /, '')}</h4>
                </div>
                <div className="space-y-2">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {service.name}
                      </span>
                      {getBadgeText(service) && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getBadgeStyle(service)}`}>
                          {getBadgeText(service)}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-800/50">
            {/* Company Links */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Building className="w-5 h-5 text-cyan-400" />
                <span>Company</span>
              </h5>
              <div className="space-y-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    {link.icon}
                    <div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-purple-400" />
                <span>Support</span>
              </h5>
              <div className="space-y-2">
                {supportLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    {link.icon}
                    <div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-400" />
                <span>Connect</span>
              </h5>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-700/50 hover:border-cyan-500/50 hover:scale-110 transition-all duration-200 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h6 className="text-sm font-medium text-white mb-3">Stay Updated</h6>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3 text-green-400" />
                <span>SOC2 Compliant</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Lock className="w-3 h-3 text-blue-400" />
                <span>ISO 27001</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 text-cyan-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

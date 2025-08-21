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
  Target, BookOpen, Heart, Lightbulb,
  Sparkles, ArrowUpRight, ChevronRight
} from 'lucide-react';

const footerSections = [
  {
    title: 'Innovative Services',
    links: [
      { name: 'AI & Consciousness', href: '/ai-services' },
      { name: 'Quantum & Emerging Tech', href: '/quantum-services' },
      { name: 'Enterprise IT', href: '/enterprise-it' },
      { name: 'Micro SAAS', href: '/micro-saas' },
      { name: 'Healthcare & Biotech', href: '/healthcare-biotech' },
      { name: 'Finance & Trading', href: '/finance-trading' },
      { name: 'Creativity & Design', href: '/creativity-design' },
      { name: 'Transportation & Mobility', href: '/transportation-mobility' }
    ]
  },
  {
    title: 'Featured Solutions',
    links: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory' },
      { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence' },
      { name: 'Autonomous Decision Engine', href: '/autonomous-decision-engine' },
      { name: 'Quantum Logistics Optimizer', href: '/quantum-logistics-optimizer' },
      { name: 'AI Cybersecurity Sentinel', href: '/ai-cybersecurity-sentinel' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development' }
    ]
  },
  {
    title: 'Emerging Technologies',
    links: [
      { name: 'Quantum Computing', href: '/quantum-services' },
      { name: 'Brain-Computer Interface', href: '/quantum-brain-computer-interface' },
      { name: 'Autonomous Vehicles', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Swarm Robotics', href: '/swarm-robotics-intelligence' },
      { name: 'Space Mining', href: '/quantum-space-mining' },
      { name: 'Quantum Materials', href: '/quantum-materials-discovery' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization' }
    ]
  },
  {
    title: 'Enterprise Solutions',
    links: [
      { name: 'Zero Trust Security', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
      { name: 'Infrastructure Monitoring', href: '/infrastructure-drift-detector' },
      { name: 'Incident Automation', href: '/incident-automation-suite' },
      { name: 'Vendor Risk Management', href: '/vendor-risk-automation' },
      { name: 'SOC2 Compliance', href: '/soc2-evidence-automation' }
    ]
  },
  {
    title: 'Business Solutions',
    links: [
      { name: 'Content Automation', href: '/ai-autonomous-content-factory' },
      { name: 'CRM Intelligence', href: '/quantum-crm-intelligence' },
      { name: 'Decision Automation', href: '/autonomous-decision-engine' },
      { name: 'Supply Chain Optimization', href: '/quantum-logistics-optimizer' },
      { name: 'Financial Intelligence', href: '/ai-financial-risk' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation' },
      { name: 'Sales Automation', href: '/ai-sales-automation' }
    ]
  },
  {
    title: 'Industry Solutions',
    links: [
      { name: 'Healthcare AI', href: '/ai-healthcare-diagnostics' },
      { name: 'Biotech Research', href: '/ai-biotech-research' },
      { name: 'Financial Trading', href: '/quantum-financial-trading' },
      { name: 'Education Technology', href: '/ai-education-personalization' },
      { name: 'Creative AI', href: '/ai-creativity-studio' },
      { name: 'Space Technology', href: '/space-technology-ai-platform' },
      { name: 'Robotics & Automation', href: '/quantum-robotics-platform' },
      { name: 'Energy Management', href: '/quantum-energy-optimization' }
    ]
  }
];

const quickLinks = [
  { name: 'All Services Showcase', href: '/innovative-micro-saas-showcase' },
  { name: 'Pricing Plans', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Blog & Insights', href: '/blog' },
  { name: 'Support Center', href: '/support' },
  { name: 'Contact Sales', href: '/contact' },
  { name: 'Careers', href: '/careers' }
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
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'User community' }
];

const resourceLinks = [
  { name: 'Blog', href: '/blog', description: 'Industry insights' },
  { name: 'Whitepapers', href: '/whitepapers', description: 'Research and analysis' },
  { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
  { name: 'Events', href: '/events', description: 'Upcoming events' },
  { name: 'Research', href: '/research', description: 'Technology research' },
  { name: 'Publications', href: '/publications', description: 'Company publications' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
  { name: 'Terms of Service', href: '/terms', description: 'Service terms' },
  { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' },
  { name: 'Security', href: '/security', description: 'Security measures' },
  { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-400' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-400' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
];

const quickActions = [
  { name: 'Get Started', href: '/contact', icon: <Rocket className="w-4 h-4" />, color: 'from-cyan-500 to-blue-600' },
  { name: 'View Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' },
  { name: 'Book Demo', href: '/demo', icon: <Settings className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" />, color: 'from-orange-500 to-red-600' }
];

export default function UltraFuturisticFooter2034() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black border-t border-gray-800/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25"></div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Leading the future with cutting-edge AI, quantum computing, and emerging technologies that transform businesses and accelerate innovation worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4" />
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
                    className={`p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <Link key={action.name} href={action.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${action.color} text-white px-4 py-3 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full flex items-center justify-center gap-2`}
                    >
                      {action.icon}
                      {action.name}
                    </motion.button>
                  </Link>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">Get the latest insights on emerging technologies and AI breakthroughs.</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center gap-2"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
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

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
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

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
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

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Legal</h4>
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
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">Revolutionizing technology, one breakthrough at a time.</p>
              </div>

              {/* Bottom Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sitemap
                </Link>
                <Link href="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Accessibility
                </Link>
                <Link href="/sustainability" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sustainability
                </Link>
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  Back to Top
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

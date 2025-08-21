import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare
} from 'lucide-react';

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { name: 'AI & Consciousness', href: '/ai-services' },
      { name: 'Quantum & Emerging Tech', href: '/quantum-services' },
      { name: 'Enterprise IT', href: '/enterprise-it' },
      { name: 'Micro SAAS', href: '/micro-saas' },
      { name: 'Space & Metaverse', href: '/space-tech' },
      { name: 'All Services', href: '/comprehensive-services-showcase-2025' }
    ]
  },
  solutions: {
    title: 'Solutions',
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Solutions', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: '/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Press', href: '/news' },
      { name: 'Partners', href: '/partners' },
      { name: 'Investors', href: '/investors' }
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' }
    ]
  },
  support: {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support Center', href: '/support' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Developer Resources', href: '/developer-resources' },
      { name: 'Status Page', href: '/status' },
      { name: 'Security', href: '/security' }
    ]
  }
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    links: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' }
    ]
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    links: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' }
    ]
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    links: [
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform' },
      { name: 'Project Management', href: '/intelligent-project-management-suite' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation' },
      { name: 'Customer Service AI', href: '/ai-customer-service' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Leadership Team', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Press', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Locations', href: '/locations' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Diversity & Inclusion', href: '/diversity-inclusion' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-documentation' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog & News', href: '/blog' },
  { name: 'Support Center', href: '/support' },
  { name: 'Training & Certification', href: '/training' },
  { name: 'Community Forum', href: '/community' },
  { name: 'Developer Resources', href: '/developer-resources' },
  { name: 'Research & Development', href: '/research-development' },
  { name: 'White Papers', href: '/white-papers' }
];

const solutionLinks = [
  { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
  { name: 'Financial Services', href: '/financial-solutions' },
  { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
  { name: 'Retail Technology', href: '/retail-technology-solutions' },
  { name: 'Education Technology', href: '/education-technology-solutions' },
  { name: 'Government Solutions', href: '/government-technology-solutions' },
  { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
  { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' },
  { name: 'Real Estate Technology', href: '/real-estate-technology-solutions' },
  { name: 'Entertainment & Media', href: '/entertainment-media-solutions' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: '📘' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: '📺' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '💻' }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI consciousness, quantum computing, space technology, and emerging technology solutions. 
                Transform your business with our innovative services.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{footerLinks.services.title}</h4>
              <ul className="space-y-2">
                {footerLinks.services.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{footerLinks.solutions.title}</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{footerLinks.company.title}</h4>
              <ul className="space-y-2">
                {footerLinks.company.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{footerLinks.resources.title}</h4>
              <ul className="space-y-2 mb-6">
                {footerLinks.resources.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold text-white mb-4">{footerLinks.support.title}</h4>
              <ul className="space-y-2">
                {footerLinks.support.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Latest Innovations</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest updates on our revolutionary technology solutions, industry insights, and breakthrough innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</Link> | 
                <Link href="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>Made with ❤️ by Zion Tech Group</span>
                <div className="flex items-center gap-2">
                  <span>Powered by</span>
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></div>
                  <span className="text-cyan-400">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

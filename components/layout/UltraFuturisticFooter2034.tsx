import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'AI & Consciousness',
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },
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
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ]
  },
  {
    title: 'Enterprise IT',
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Quantum Networking', href: '/quantum-networking' }
    ]
  },
  {
    title: 'Micro SAAS',
    links: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' }
    ]
  },
  {
    title: 'Resources',
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
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Discord', href: 'https://discord.gg/ziontechgroup', icon: MessageCircle },
  { name: 'Slack', href: 'https://ziontechgroup.slack.com', icon: MessageSquare }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pioneering the future of technology with revolutionary AI, quantum computing, and emerging technology solutions that transform businesses and accelerate innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 group">
                <Github className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 group">
                <Youtube className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* AI & Technology Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span>AI & Technology</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Consciousness Platform</a></li>
              <li><a href="/ai-autonomous-research-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Autonomous Research AI</a></li>
              <li><a href="/ai-emotional-intelligence-training" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Emotional Intelligence AI</a></li>
              <li><a href="/ai-predictive-maintenance-platform" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Predictive Maintenance</a></li>
              <li><a href="/ai-content-personalization-engine" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Content Personalization</a></li>
              <li><a href="/ai-autonomous-ecosystem-manager" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Autonomous Ecosystem</a></li>
              <li><a href="/ai-ethics-governance-framework" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Ethics & Governance</a></li>
              <li><a href="/ai-creativity-studio" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Creativity Studio</a></li>
            </ul>
          </div>

          {/* Quantum & Emerging Tech */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Atom className="w-5 h-5 text-purple-400" />
              <span>Quantum & Emerging</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/space-resource-mining-platform" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Space Resource Mining</a></li>
              <li><a href="/brain-computer-interface-platform" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Brain-Computer Interface</a></li>
              <li><a href="/quantum-materials-discovery-platform" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Quantum Materials</a></li>
              <li><a href="/autonomous-vehicle-ai-platform" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Autonomous Vehicles</a></li>
              <li><a href="/quantum-bio-computing-platform" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Quantum Bio-Computing</a></li>
              <li><a href="/quantum-energy-platform" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Quantum Energy</a></li>
              <li><a href="/metaverse-ai-development-platform" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Metaverse Development</a></li>
              <li><a href="/quantum-networking" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Quantum Networking</a></li>
            </ul>
          </div>

          {/* Enterprise IT & Infrastructure */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Enterprise IT</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/quantum-secure-cloud-infrastructure" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Quantum-Secure Cloud</a></li>
              <li><a href="/autonomous-it-operations-center" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Autonomous IT Operations</a></li>
              <li><a href="/edge-computing-orchestration-platform" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Edge Computing</a></li>
              <li><a href="/blockchain-infrastructure-platform" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Blockchain Infrastructure</a></li>
              <li><a href="/ai-powered-devops-platform" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">AI-Powered DevOps</a></li>
              <li><a href="/zero-trust-security-platform" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Zero Trust Security</a></li>
              <li><a href="/quantum-networking" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Quantum Networking</a></li>
              <li><a href="/advanced-it-infrastructure-services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Advanced Infrastructure</a></li>
            </ul>
          </div>
        </div>

        {/* Additional Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Micro SAAS Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Rocket className="w-5 h-5 text-green-400" />
              <span>Micro SAAS Solutions</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/ai-customer-success-platform" className="text-gray-300 hover:text-green-400 transition-colors text-sm">AI Customer Success</a></li>
              <li><a href="/intelligent-supply-chain-optimization" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Supply Chain Optimization</a></li>
              <li><a href="/ai-financial-planning-platform" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Financial Planning AI</a></li>
              <li><a href="/intelligent-hr-analytics-platform" className="text-gray-300 hover:text-green-400 transition-colors text-sm">HR Analytics Platform</a></li>
              <li><a href="/ai-sales-intelligence-platform" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Sales Intelligence AI</a></li>
              <li><a href="/ai-powered-decision-engine" className="text-gray-300 hover:text-green-400 transition-colors text-sm">AI Decision Engine</a></li>
              <li><a href="/intelligent-content-automation-platform" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Content Automation</a></li>
              <li><a href="/smart-crm-intelligence-suite" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Smart CRM Suite</a></li>
            </ul>
          </div>

          {/* Business Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Target className="w-5 h-5 text-orange-400" />
              <span>Business Solutions</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/ai-business-intelligence-suite" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Business Intelligence</a></li>
              <li><a href="/ai-marketing-automation-platform" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Marketing Automation</a></li>
              <li><a href="/ai-sales-intelligence-platform" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Sales Intelligence</a></li>
              <li><a href="/ai-customer-service-platform" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Customer Service AI</a></li>
              <li><a href="/ai-hr-recruitment-platform" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">HR & Recruitment</a></li>
              <li><a href="/ai-project-management-suite" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Project Management</a></li>
              <li><a href="/ai-financial-analytics-platform" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Financial Analytics</a></li>
              <li><a href="/innovative-business-solutions" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">All Business Solutions</a></li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-pink-400" />
              <span>Resources & Support</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/docs" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">Documentation</a></li>
              <li><a href="/api-documentation" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">API Reference</a></li>
              <li><a href="/case-studies" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">Case Studies</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">Blog & News</a></li>
              <li><a href="/support" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">Support Center</a></li>
              <li><a href="/training" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">Training & Certification</a></li>
              <li><a href="/community" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">Community Forum</a></li>
              <li><a href="/developer-resources" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">Developer Resources</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information & Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>Contact Information</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">https://ziontechgroup.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Quick Links</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="/comprehensive-services-showcase-2025" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">All Services</a>
              <a href="/revolutionary-2025-services-showcase" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">2025 Services</a>
              <a href="/revolutionary-2026-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">2026 Services</a>
              <a href="/ultimate-2026-services-showcase" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Ultimate 2026</a>
              <a href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Pricing</a>
              <a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About Us</a>
              <a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</a>
              <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. Pioneering the future of technology.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookies</a>
              <a href="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-32 bg-gradient-to-b from-cyan-500/20 to-transparent" />
        <div className="absolute top-1/3 right-1/6 w-2 h-24 bg-gradient-to-b from-blue-500/20 to-transparent" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-400/20 rounded-full animate-pulse delay-1000" />
      </div>
    </footer>
  );
}

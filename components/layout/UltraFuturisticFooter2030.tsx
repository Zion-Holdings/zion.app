import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, 
  Rocket, Shield, Cpu, Target, Microscope, Users,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, Heart, Star, Award, CheckCircle
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 AI & Consciousness',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotion-intelligence-platform' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Learning Accelerator', href: '/quantum-learning-accelerator' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' }
    ]
  },
  {
    title: '🧬 Biotech & DNA Computing',
    services: [
      { name: 'DNA Computing Platform', href: '/biotech-dna-computing-platform' },
      { name: 'Personalized Nutrition', href: '/biotech-personalized-nutrition' },
      { name: 'Predictive Health Analytics', href: '/ai-predictive-health-analytics' },
      { name: 'Research Automation', href: '/advanced-research-automation' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'AI Enterprise Security', href: '/ai-powered-enterprise-security' },
      { name: 'Intelligent Data Governance', href: '/intelligent-data-governance' }
    ]
  },
  {
    title: '🌌 Space & Metaverse Tech',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Metaverse Digital Reality', href: '/metaverse-digital-reality-platform' },
      { name: 'Quantum Research Platform', href: '/quantum-research-platform' },
      { name: 'AI Research Assistant', href: '/ai-research-assistant' }
    ]
  },
  {
    title: '🎯 Innovative Micro SAAS',
    services: [
      { name: 'AI Emotion Marketing', href: '/ai-emotion-based-marketing' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' },
      { name: 'LLM Gateway', href: '/llm-gateway' },
      { name: 'API Observability', href: '/api-observability-starter' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
];

const companyInfo = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
  { name: 'Status', href: '/status' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized'
];

export default function UltraFuturisticFooter2030() {
  return (
    <footer className="bg-gradient-to-br from-black via-purple-900/20 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">2030 Future Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies. 
                Transforming businesses through innovative solutions and intelligent automation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <a href={contactInfo.website} className="hover:text-purple-400 transition-colors">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span>Our Services</span>
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {serviceCategories.slice(0, 3).map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="text-sm font-medium text-purple-300">{category.title}</h5>
                    <div className="space-y-1">
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}
                          className="block text-xs text-gray-400 hover:text-purple-300 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <h5 className="text-sm font-medium text-cyan-300">Company</h5>
                {companyInfo.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-xs text-gray-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & Certifications */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>Connect & Trust</span>
              </h4>
              
              {/* Social Links */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-green-300">Follow Us</h5>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/40"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-green-300 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Certifications</span>
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Made with passion for innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>5.0/5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
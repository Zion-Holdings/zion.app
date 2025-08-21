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
      { name: 'IT Operations Center', href: '/autonomous-it-operations-center' },
      { name: 'Enterprise Security', href: '/ai-powered-enterprise-security' },
      { name: 'Data Governance', href: '/intelligent-data-governance' }
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

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-400' },
  { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
];

export default function UltraFuturisticFooter2030() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-purple-900/20 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-gray-400 font-mono">2030 Future Technology</span>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Pioneering the future with AI consciousness, quantum computing, and space technology. 
                Transform your business with cutting-edge solutions that define the next decade.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-purple-400">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href={contactInfo.website} className="hover:text-blue-400">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="mr-2">{category.title.split(' ')[0]}</span>
                  {category.title.split(' ').slice(1).join(' ')}
                </h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link
                        href={service.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap items-center space-x-6 mb-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 text-gray-400 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-blue-400" />
                <span>Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-20 w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
}
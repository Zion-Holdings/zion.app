import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, 
  Rocket, Brain, Atom, Shield, Target, Zap,
  Twitter, Linkedin, Facebook, Instagram, Youtube,
  Github, MessageCircle, Twitch, MessageSquare, BookOpen,
  Users, Briefcase, Star, TrendingUp, Layers, Cpu, Database, 
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car, 
  GraduationCap, Scale, Building, Factory, Camera,
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets,
  Code, Handshake
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Cutting-Edge',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'Quantum Time Manipulation', href: '/quantum-time-manipulation' },
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform' }
    ]
  },
  {
    title: '🎯 Business Solutions',
    services: [
      { name: 'AI Customer Success', href: '/ai-customer-success-automation' },
      { name: 'AI Content Marketing', href: '/ai-content-marketing-automation' },
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-system' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai' }
    ]
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    services: [
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite' },
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Careers', href: '/careers', icon: TrendingUp },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: Star },
  { name: 'Press', href: '/press', icon: MessageCircle }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Cpu },
  { name: 'Training', href: '/training', icon: GraduationCap },
  { name: 'Support', href: '/support', icon: ShieldCheck },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Partners', href: '/partners', icon: Handshake }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'GDPR', href: '/gdpr' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  	{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
  { name: 'Discord', href: 'https://discord.gg/ziontechgroup', icon: MessageCircle, color: 'hover:text-indigo-500' },
  { name: 'Medium', href: 'https://medium.com/@ziontechgroup', icon: BookOpen, color: 'hover:text-gray-600' }
];

export default function UltraFuturisticFooter2028() {
  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-purple-500/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-purple-300">2028 Future Technology</p>
              </div>
            </div>
            
            <p className="text-purple-200 mb-6 leading-relaxed">
              Leading the future with cutting-edge AI, quantum computing, and innovative technology solutions. 
              Transforming businesses through intelligent automation and next-generation infrastructure.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-200">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Globe className="w-4 h-4 text-purple-400" />
                <a href={contactInfo.website} className="text-sm hover:text-white transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              🚀 Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-3">
                  <h4 className="font-medium text-purple-300">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-sm text-purple-200 hover:text-white transition-colors hover:underline"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              Quick Links
            </h3>
            
            {/* Company Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-medium text-white mb-3">Stay Updated</h4>
              <p className="text-sm text-purple-200 mb-3">
                Get the latest insights on future technology and AI innovations.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-purple-300">
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-purple-300 hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/contact"
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 group"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
}
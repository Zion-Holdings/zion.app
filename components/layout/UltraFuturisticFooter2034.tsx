import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  ArrowRight, Zap, Brain, Atom, Shield, Rocket,
  Palette, Microscope, Cpu, Database, Lock, BarChart3,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Star, Award, Users, Clock, Heart, Lightbulb
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
    description: 'Revolutionary AI consciousness and emotional intelligence solutions',
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network-platform' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio-platform' },
      { name: 'AI Education Platform', href: '/ai-education-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Cutting-edge quantum computing and breakthrough technologies',
    links: [
      { name: 'Quantum Computing as a Service', href: '/quantum-computing-as-a-service' },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise solutions and infrastructure',
    links: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-architecture' },
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration-platform' },
      { name: 'AI Data Pipeline', href: '/ai-powered-data-pipeline-platform' },
      { name: 'Quantum Communication', href: '/quantum-secure-communication-platform' }
    ]
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    links: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'AI Content Generation', href: '/ai-content-generation-platform' },
      { name: 'AI Customer Service', href: '/ai-customer-service-automation' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Project Management', href: '/ai-project-management-suite' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform' }
    ]
  }
];

const quickLinks = [
  { name: 'All Services', href: '/comprehensive-services-showcase-2025' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Support', href: '/support' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Leading the future of technology with revolutionary AI consciousness, quantum computing, and innovative enterprise solutions that transform businesses and advance humanity.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.website}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                {section.title === 'AI & Consciousness' && <Brain className="w-5 h-5 text-cyan-400" />}
                {section.title === 'Quantum & Emerging Tech' && <Atom className="w-5 h-5 text-blue-400" />}
                {section.title === 'Enterprise IT' && <Shield className="w-5 h-5 text-purple-400" />}
                {section.title === 'Micro SAAS' && <Rocket className="w-5 h-5 text-green-400" />}
                <span>{section.title}</span>
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {section.description}
              </p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Middle Section - Quick Links & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <span>Quick Links</span>
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>Connect With Us</span>
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Stats & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-sm text-gray-400">Services Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="flex flex-wrap items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Industry Leader 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Trusted by Fortune 500</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-3000"></div>
    </footer>
  );
}

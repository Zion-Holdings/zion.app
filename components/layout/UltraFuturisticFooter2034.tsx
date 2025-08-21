import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Cpu, Target, Microscope, Shield, Zap, Sparkles,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, Star, CheckCircle, TrendingUp,
  ShieldCheck, Users, Briefcase, BookOpen,
  Database, Cloud, Lock, Home, Building, DollarSign, 
  FileText, MessageSquare, MessageCircle, Newspaper, 
  Handshake, LifeBuoy, Activity, Crown, Award, Heart, Infinity,
  Globe2, Zap2, Palette, Layers, Server, Network, Smartphone
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI 2034',
    icon: Brain,
    color: 'from-violet-600 via-purple-700 to-indigo-800',
    description: 'Next-generation AI consciousness and autonomous systems',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform-2034' },
      { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence-2034' },
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform-2034' },
      { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite-2034' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech 2034',
    icon: Atom,
    color: 'from-indigo-600 via-blue-700 to-cyan-800',
    description: 'Quantum computing and cutting-edge innovations',
    services: [
      { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-hybrid-computing-2034' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2034' },
      { name: 'Quantum Data Analytics', href: '/quantum-data-analytics-platform-2034' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform-2034' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions 2034',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-700 to-teal-800',
    description: 'Advanced enterprise infrastructure and operations',
    services: [
      { name: 'AI IT Operations Center', href: '/ai-powered-it-operations-center-2034' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture-2034' },
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform-2034' },
      { name: 'Autonomous Business Process Automation', href: '/autonomous-business-process-automation-2034' }
    ]
  },
  {
    title: '🌌 Space & Metaverse Tech 2034',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-700 to-green-800',
    description: 'Space technology and metaverse development',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform-2034' },
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform-2034' },
      { name: 'Quantum Edge Computing', href: '/quantum-edge-computing-platform-2034' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Status', href: '/status', icon: Activity }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Building },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'News & Updates', href: '/news', icon: Newspaper },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Support', href: '/support', icon: LifeBuoy }
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:bg-blue-600' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:bg-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:bg-blue-700' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:bg-pink-600' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:bg-red-600' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:bg-gray-700' }
];

const certifications = [
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'SOC 2 Type II', description: 'Security, Availability, Processing Integrity' },
  { name: 'GDPR Compliant', description: 'Data Protection & Privacy' },
  { name: 'HIPAA Compliant', description: 'Healthcare Data Security' }
];

const achievements = [
  { icon: Star, text: '500%+ ROI Guaranteed', color: 'text-yellow-400' },
  { icon: TrendingUp, text: 'Industry Leader 2024', color: 'text-green-400' },
  { icon: Award, text: 'Best Innovation Platform', color: 'text-purple-400' },
  { icon: Crown, text: 'Customer Excellence Award', color: 'text-blue-400' }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-purple-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">2034 Innovation Leader</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading the future of technology with cutting-edge AI, quantum computing, and space technology solutions. 
              Empowering businesses to achieve unprecedented growth and innovation.
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                  <span className="text-sm text-gray-300">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <span>Our Services</span>
            </h3>
            
            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <category.icon className={`w-4 h-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                    <h4 className="text-sm font-medium text-purple-300">{category.title}</h4>
                  </div>
                  <div className="ml-6 space-y-2">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-purple-300 transition-colors duration-200"
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
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-400" />
              <span>Quick Links</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors duration-200 group"
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Company Links */}
            <div className="pt-4 border-t border-purple-500/20">
              <h4 className="text-sm font-medium text-purple-300 mb-3">Company</h4>
              <div className="space-y-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors duration-200 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              <span>Contact Us</span>
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.website}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-purple-500/20">
                <h4 className="text-sm font-medium text-purple-300 mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="pt-4 border-t border-purple-500/20">
                <h4 className="text-sm font-medium text-purple-300 mb-3">Certifications</h4>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-green-400" />
                      <div>
                        <span className="text-sm font-medium text-white">{cert.name}</span>
                        <p className="text-xs text-gray-500">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
              <Link href="/privacy" className="hover:text-purple-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-purple-300 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-purple-300 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Star className="w-4 h-4" />
                <span className="text-sm">500%+ ROI Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Industry Leader 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl shadow-purple-500/25 cursor-pointer"
        >
          <Link href="/contact" className="flex items-center space-x-2">
            <MessageCircle className="w-6 h-6" />
            <span className="hidden sm:block font-medium">Get Started</span>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
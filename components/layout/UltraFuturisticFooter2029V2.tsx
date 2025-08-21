import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye, 
  Phone, Mail, MapPin, ExternalLink, ArrowRight
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 Revolutionary AI Services',
    services: [
      { name: 'AI Business Predictor Pro', href: '/ai-business-predictor-pro' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro' },
      { name: 'AI Customer Experience Platform', href: '/ai-customer-experience-platform' },
      { name: 'AI Marketing Automation Platform', href: '/ai-marketing-automation-platform' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    services: [
      { name: 'Quantum Secure Communication', href: '/quantum-secure-communication-enterprise' },
      { name: 'Quantum Computing as a Service', href: '/quantum-computing-as-a-service' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-enterprise' },
      { name: 'Quantum Internet Gateway', href: '/quantum-internet-gateway-enterprise' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    services: [
      { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform' },
      { name: 'Intelligent Data Governance', href: '/intelligent-data-governance-platform' },
      { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform-enterprise' },
      { name: 'Intelligent HR Management', href: '/intelligent-hr-talent-management' }
    ]
  },
  {
    title: '🌌 Space & Advanced Tech',
    services: [
      { name: 'Space Mining Operations', href: '/space-mining-operations-platform' },
      { name: 'Fusion Energy Management', href: '/fusion-energy-management-platform' },
      { name: 'Synthetic Biology Platform', href: '/synthetic-biology-platform-enterprise' },
      { name: 'Quantum AI Consciousness', href: '/quantum-ai-consciousness-platform' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: ExternalLink },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: ExternalLink },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: ExternalLink }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' }
];

export default function UltraFuturisticFooter2029V2() {
  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-purple-500/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 xl:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-xl flex items-center justify-center">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-purple-300">2029 Revolutionary Technology</p>
                </div>
              </div>
              
              <p className="text-purple-200 mb-6 leading-relaxed">
                Leading provider of revolutionary 2029 technology services including AI consciousness, 
                quantum computing, space mining, and advanced biotechnology. Transform your business 
                with cutting-edge solutions.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-200">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-200">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-200">{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={category.title} className="xl:col-span-1">
                <h4 className="text-lg font-semibold text-purple-200 mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-purple-300 hover:text-purple-200 transition-colors duration-200 text-sm hover:underline"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <h4 className="text-lg font-semibold text-purple-200 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors duration-200 text-sm hover:underline group"
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <div className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 border border-purple-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-purple-200 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-purple-300 mb-6 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary AI, quantum computing, and space technology solutions. 
                Get started today and experience unprecedented growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    Get Started Today
                    <ArrowRight className="inline ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-purple-500/50 text-purple-200 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-purple-300 text-sm">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-purple-400 text-sm">
              <span>Powered by</span>
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Rocket className="h-3 w-3 text-white" />
              </div>
              <span>Revolutionary Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-full shadow-2xl shadow-purple-500/50 flex items-center justify-center text-white hover:shadow-purple-500/75 transition-all duration-300"
          >
            <MessageCircle className="h-8 w-8" />
          </motion.button>
        </Link>
      </div>
    </footer>
  );
}
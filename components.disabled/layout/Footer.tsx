import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, ArrowRight, Sparkles, 
  Rocket, Brain, Shield, Factory, Globe2, Zap, 
  Building2, FlaskConical, Leaf, Car, Truck, 
  Microscope, GraduationCap, ShieldCheck, Cloud, 
  Cpu, Database, Lock, Smartphone, Palette, Search, 
  MessageSquare, FileText, Calendar, CreditCard, BarChart3, 
  Code, BookOpen, Activity, Settings, Star, Users, 
  ChevronRight, Play, Check, Twitter, Linkedin, Facebook, 
  Instagram, Youtube, Github
} from 'lucide-react';
import Button from '../ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Revolutionary Services',
      links: [
        { name: 'Quantum AI Platform', href: '/quantum-ai-cognitive' },
        { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Metaverse Platform', href: '/metaverse-platform' },
        { name: 'Biomedical AI', href: '/biomedical-ai' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Quantum Computing', href: '/solutions/quantum' },
        { name: 'AI & Machine Learning', href: '/solutions/ai' },
        { name: 'Autonomous Systems', href: '/solutions/autonomous' },
        { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
        { name: 'Space Technology', href: '/solutions/space' },
        { name: 'Metaverse & VR/AR', href: '/solutions/metaverse' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Support Center', href: '/support' },
        { name: 'API Reference', href: '/api' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Sales', href: '/contact' },
        { name: 'Partnerships', href: '/partnerships' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Investor Relations', href: '/investors' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl opacity-50 blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </div>
              <span className="text-2xl font-bold gradient-text-blue group-hover:from-cursor-blue group-hover:to-cursor-accent transition-all duration-300">
                Zion Tech
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              The world&apos;s most advanced autonomous innovation hub delivering cutting-edge technology solutions, 
              intelligent automation systems, and the future of cloud-native AI infrastructure.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-2 text-cursor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.554.554l1.122 2.226A2 2 0 0010.28 7H13a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
                <span>Mobile: +1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-2 text-cursor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>E-mail: kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-2 text-cursor-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Address: 364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 bg-cursor-light hover:bg-cursor-blue rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cursor-blue/25"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

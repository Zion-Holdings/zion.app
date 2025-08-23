import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Globe,
  ArrowRight,
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Sparkles,
  Star,
  Cpu,
  Database,
  Lock,
  BarChart3,
  Lightbulb,
  Settings,
  HelpCircle,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI & Consciousness', href: '/services?category=ai-ml', icon: Brain },
        { label: 'Quantum Technology', href: '/services?category=quantum', icon: Atom },
        { label: 'Space Technology', href: '/services?category=space-tech', icon: Rocket },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: Shield },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud },
        { label: 'Business Intelligence', href: '/services?category=business-intelligence', icon: BarChart3 }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Healthcare', href: '/healthcare-ai-solutions', icon: Users },
        { label: 'Financial Services', href: '/financial-solutions', icon: BarChart3 },
        { label: 'Manufacturing', href: '/manufacturing-ai-solutions', icon: Settings },
        { label: 'Retail & E-commerce', href: '/retail-technology-solutions', icon: Target },
        { label: 'Education', href: '/education-technology-solutions', icon: BookOpen },
        { label: 'Government', href: '/government-technology-solutions', icon: Users }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog', icon: FileText },
        { label: 'Webinars', href: '/webinars', icon: Video },
        { label: 'Documentation', href: '/docs', icon: Code },
        { label: 'Case Studies', href: '/case-studies', icon: Star },
        { label: 'White Papers', href: '/white-papers', icon: FileText },
        { label: 'API Reference', href: '/api-docs', icon: Code }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about', icon: Users },
        { label: 'Mission', href: '/mission', icon: Target },
        { label: 'Careers', href: '/careers', icon: Users },
        { label: 'Partners', href: '/partners', icon: Users },
        { label: 'Investors', href: '/investors', icon: BarChart3 },
        { label: 'Contact', href: '/contact', icon: MailIcon }
      ]
    }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
    { label: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' }
  ];

  const quickLinks = [
    { label: 'Get Started', href: '/get-started', icon: Sparkles },
    { label: 'Request Quote', href: '/quote', icon: Target },
    { label: 'Support', href: '/support', icon: HelpCircle },
    { label: 'Status', href: '/status', icon: Lightbulb }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-purple-900/20 to-black border-t border-cyan-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-cyan-300/70">Revolutionary 2045</div>
                </div>
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                Experience the future of technology with our cutting-edge micro SAAS services, 
                AI consciousness platforms, and quantum-powered solutions that operate autonomously 
                with unprecedented intelligence and efficiency.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70 hover:text-cyan-400 transition-colors duration-200">
                  <PhoneIcon className="w-4 h-4" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70 hover:text-cyan-400 transition-colors duration-200">
                  <MailIcon className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <span>{section.title}</span>
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-white/70 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <link.icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-200" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Middle Section - Quick Links & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-cyan-500/20">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                  >
                    <link.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-white/90 group-hover:text-white transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="py-8 border-t border-cyan-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Revolutionary</span> Technology
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI consciousness, quantum computing, space technology, 
                and autonomous systems that are shaping the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. 
              <span className="ml-2 text-cyan-400">Revolutionary 2045 Technology Solutions</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;
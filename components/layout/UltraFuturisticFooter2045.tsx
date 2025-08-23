import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Star,
  Sparkles,
  Brain,
  Atom,
  Shield,
  Target,
  Server,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Users,
  Building,
  MessageCircle,
  Award,
  FileText,
  Video,
  Heart,
  DollarSign,
  GraduationCap,
  ShoppingBag,
  Handshake,
  Lock,
  Key,
  ShieldCheck,
  BrainCircuit,
  BookOpen,
  Rocket
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Autonomous Services', href: '/services?category=ai-autonomous', icon: BrainCircuit },
        { label: 'Quantum Technology', href: '/services?category=quantum', icon: Atom },
        { label: 'Cybersecurity & Zero-Trust', href: '/services?category=cybersecurity', icon: ShieldCheck },
        { label: 'Micro SAAS Solutions', href: '/services?category=micro-saas', icon: Target },
        { label: 'IT Infrastructure', href: '/services?category=it-infrastructure', icon: Server },
        { label: 'Edge Computing', href: '/services?category=edge-computing', icon: Network },
        { label: 'DevOps & Automation', href: '/services?category=devops', icon: Code },
        { label: 'Data & Analytics', href: '/services?category=data-analytics', icon: BarChart3 }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Financial Services', href: '/solutions/financial-services', icon: DollarSign },
        { label: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
        { label: 'Manufacturing', href: '/solutions/manufacturing', icon: Server },
        { label: 'Retail & E-commerce', href: '/solutions/retail-ecommerce', icon: ShoppingBag },
        { label: 'Government', href: '/solutions/government', icon: Building },
        { label: 'Education', href: '/solutions/education', icon: GraduationCap }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', href: '/docs', icon: FileText },
        { label: 'Blog', href: '/blog', icon: FileText },
        { label: 'Webinars', href: '/webinars', icon: Video },
        { label: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { label: 'White Papers', href: '/white-papers', icon: FileText },
        { label: 'API Reference', href: '/api-docs', icon: Code }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about', icon: Users },
        { label: 'Team', href: '/team', icon: Users },
        { label: 'Careers', href: '/careers', icon: Award },
        { label: 'Partners', href: '/partners', icon: Handshake },
        { label: 'News', href: '/news', icon: FileText },
        { label: 'Contact', href: '/contact', icon: MessageCircle }
      ]
    }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-cyan-400' },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
    { label: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' }
  ];

  const quickLinks = [
    { label: 'Get Started', href: '/get-started', icon: Rocket },
    { label: 'Pricing', href: '/pricing', icon: DollarSign },
    { label: 'Support', href: '/support', icon: MessageCircle },
    { label: 'Status', href: '/status', icon: BarChart3 }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: -1,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-16 h-16 border border-purple-400/10 rounded-lg"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 50, 0],
            rotate: [0, -180, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: -1,
            ease: "linear"
          }}
          className="absolute bottom-32 right-32 w-12 h-12 border border-cyan-400/10 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative AI, quantum technology, and micro SAAS solutions. 
              Empowering businesses with cutting-edge technology for the future.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Globe className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === 'Services' && <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />}
                {section.title === 'Solutions' && <Lightbulb className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title === 'Resources' && <BookOpen className="w-5 h-5 mr-2 text-green-400" />}
                {section.title === 'Company' && <Building className="w-5 h-5 mr-2 text-orange-400" />}
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      href={item.href}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <item.icon className="w-4 h-4 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="border-t border-gray-800/50 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h4 className="text-lg font-semibold text-white mb-3">Quick Actions</h4>
              <div className="flex flex-wrap gap-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 text-center sm:text-right">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-300 ${social.color} hover:border-cyan-400/40 transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;
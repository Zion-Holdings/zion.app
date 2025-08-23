import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Target, Atom, Shield, DollarSign, BarChart3, 
  Globe, Grid, Heart, Cpu, Cloud, Network, TrendingUp, 
  Building, Users, Award, Mail, Phone, MapPin, ArrowRight,
  Star, Zap, Eye, Infinity, Sparkles, Lock, Code, Server,
  Layers, Globe2, Clock, CheckCircle, Zap as ZapIcon,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github,
  ExternalLink, ChevronUp
} from 'lucide-react';

interface FooterSection {
  title: string;
  items: {
    name: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
    badge?: string;
    external?: boolean;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Revolutionary Services 2046',
    items: [
      {
        name: 'All Services',
        href: '/services',
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4" />
      },
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-platform-2046',
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        badge: 'Featured'
      },
      {
        name: 'Quantum AI Neural Networks',
        href: '/quantum-ai-neural-network-platform-2046',
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className="w-4 h-4" />,
        badge: 'Featured'
      },
      {
        name: 'AI Business Intelligence',
        href: '/autonomous-ai-business-intelligence-platform-2046',
        description: 'AI-powered business intelligence',
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-intelligence-platform-2046',
        description: 'Quantum-resistant security',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    title: 'Technology Solutions',
    items: [
      {
        name: 'AI & Consciousness',
        href: '/ai-services',
        description: 'Advanced AI consciousness solutions',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Quantum Technology',
        href: '/quantum-services',
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'IT Infrastructure',
        href: '/it-services',
        description: 'Advanced IT infrastructure solutions',
        icon: <Cpu className="w-4 h-4" />
      },
      {
        name: 'Business Solutions',
        href: '/business-solutions',
        description: 'Enterprise business solutions',
        icon: <Target className="w-4 h-4" />
      },
      {
        name: 'Cloud & DevOps',
        href: '/cloud-devops',
        description: 'Cloud infrastructure and automation',
        icon: <Cloud className="w-4 h-4" />
      }
    ]
  },
  {
    title: 'Company',
    items: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Our story and mission',
        icon: <Building className="w-4 h-4" />
      },
      {
        name: 'Our Team',
        href: '/team',
        description: 'Meet our experts',
        icon: <Users className="w-4 h-4" />
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Award className="w-4 h-4" />
      },
      {
        name: 'News & Updates',
        href: '/news',
        description: 'Latest developments',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories',
        icon: <Star className="w-4 h-4" />
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation',
        icon: <Code className="w-4 h-4" />
      },
      {
        name: 'API Reference',
        href: '/api',
        description: 'API documentation',
        icon: <Server className="w-4 h-4" />
      },
      {
        name: 'Blog',
        href: '/blog',
        description: 'Insights and updates',
        icon: <Globe className="w-4 h-4" />
      },
      {
        name: 'Support Center',
        href: '/support',
        description: 'Help and support',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'Community',
        href: '/community',
        description: 'Join our community',
        icon: <Users className="w-4 h-4" />
      }
    ]
  }
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const UltraFuturisticFooter2046: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                <div className="text-sm text-cyan-400 font-semibold">2046</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneering the future with revolutionary AI consciousness, quantum technology, and autonomous systems. 
              We're building tomorrow's solutions today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
                  <span>Visit Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                {section.title.includes('2046') && (
                  <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                    New
                  </span>
                )}
                <span>{section.title.replace(' 2046', '')}</span>
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section - Features */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group 2046?</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Experience the future of technology with our revolutionary AI consciousness, quantum computing, and autonomous systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Brain className="w-8 h-8" />, title: 'AI Consciousness', description: 'True artificial consciousness evolution' },
              { icon: <Atom className="w-8 h-8" />, title: 'Quantum Technology', description: 'Next-generation quantum computing' },
              { icon: <Shield className="w-8 h-8" />, title: 'Advanced Security', description: 'Quantum-resistant cybersecurity' },
              { icon: <Rocket className="w-8 h-8" />, title: 'Innovation First', description: 'Pioneering future technologies' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-500"></div>
    </footer>
  );
};

export default UltraFuturisticFooter2046;
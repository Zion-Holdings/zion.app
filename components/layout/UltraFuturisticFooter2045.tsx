import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Atom,
  Rocket,
  Shield,
  Globe,
  Cpu,
  Database,
  Target,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  Lightbulb,
  Code,
  Palette,
  Layers,
  Grid,
  BarChart3,
  Settings,
  HelpCircle,
  FileText,
  Video,
  BookOpen,
  GraduationCap,
  Heart,
  Infinity,
  Eye,
  Heart as HeartIcon,
  Cloud,
  Handshake
} from 'lucide-react';

// Footer sections data
const footerSections = [
  {
    title: 'Services',
    items: [
      { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain },
      { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom },
      { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: Shield },
      { label: 'Space Technology', href: '/services?category=space', icon: Rocket },
      { label: 'Enterprise Solutions', href: '/services?category=enterprise', icon: Target },
      { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud }
    ]
  },
  {
    title: 'Solutions',
    items: [
      { label: 'Industry Solutions', href: '/solutions', icon: Target },
      { label: 'Startup Solutions', href: '/solutions/startup', icon: Rocket },
      { label: 'Government Solutions', href: '/solutions/government', icon: Shield },
      { label: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
      { label: 'Financial Solutions', href: '/solutions/financial', icon: TrendingUp },
      { label: 'Education Solutions', href: '/solutions/education', icon: GraduationCap }
    ]
  },
  {
    title: 'Resources',
    items: [
      { label: 'White Papers', href: '/white-papers', icon: FileText },
      { label: 'Webinars', href: '/webinars', icon: Video },
      { label: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { label: 'Documentation', href: '/docs', icon: BookOpen },
      { label: 'API Reference', href: '/api', icon: Code },
      { label: 'Training', href: '/training', icon: GraduationCap }
    ]
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '/about', icon: Users },
      { label: 'Our Mission', href: '/mission', icon: Target },
      { label: 'Team', href: '/team', icon: Users },
      { label: 'Careers', href: '/careers', icon: Award },
      { label: 'News', href: '/news', icon: FileText },
      { label: 'Partners', href: '/partners', icon: Handshake }
    ]
  }
];

// Contact information
const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: Mail, label: 'Email Us', value: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: MapPin, label: 'Visit Us', value: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
];

// Social media links
const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub', color: 'hover:text-gray-400' },
  { icon: Youtube, href: 'https://youtube.com/ziontechgroup', label: 'YouTube', color: 'hover:text-red-400' },
  { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram', color: 'hover:text-pink-400' }
];

// Quick stats
const quickStats = [
  { number: '500+', label: 'Global Clients', icon: Globe, color: 'text-cyan-400' },
  { number: '99.9%', label: 'Uptime', icon: CheckCircle, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Clock, color: 'text-blue-400' },
  { number: '2045', label: 'Technology', icon: Sparkles, color: 'text-purple-400' }
];

// Newsletter signup component
const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setEmail('');
    setIsLoading(false);
  }, [email]);

  if (isSubscribed) {
    return (
      <motion.div
        className="text-center p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-white mb-2">Thank you for subscribing!</h3>
        <p className="text-green-300">You'll receive our latest insights and updates.</p>
      </motion.div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
        <p className="text-cyan-300">Get the latest insights on AI, quantum computing, and emerging technologies.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
            required
            aria-label="Email address for newsletter"
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Subscribe to newsletter"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Subscribing...
            </div>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Subscribe Now
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </motion.button>
      </form>
      
      <p className="text-xs text-cyan-300/70 text-center mt-3">
        By subscribing, you agree to our privacy policy and terms of service.
      </p>
    </div>
  );
};

const UltraFuturisticFooter2045: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = useCallback((title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  }, [expandedSection]);

  // Memoize footer sections to prevent unnecessary re-renders
  const memoizedFooterSections = useMemo(() => footerSections, []);

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          {/* Top Section with Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-cyan-400/70 text-sm">Revolutionary Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 bg-white/5 rounded-lg border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                    <div className="text-lg font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:pl-8">
              <NewsletterSignup />
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {memoizedFooterSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  {section.title}
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="lg:hidden p-1 hover:bg-white/10 rounded transition-colors"
                    aria-label={`Toggle ${section.title} section`}
                  >
                    <ArrowRight className={`w-4 h-4 transition-transform ${expandedSection === section.title ? 'rotate-90' : ''}`} />
                  </button>
                </h3>
                
                <div className={`space-y-3 ${expandedSection === section.title ? 'block' : 'hidden lg:block'}`}>
                  {section.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors duration-200 group"
                      >
                        <item.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact & Social Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 pt-8 border-t border-white/10">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors duration-200 group"
                    aria-label={`${contact.label}: ${contact.value}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <contact.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-medium text-white">{contact.label}</div>
                      <div className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 group border border-white/10 hover:border-cyan-500/30"
                    aria-label={`Visit our ${social.label} page`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <social.icon className={`w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform ${social.color}`} />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved. | 
                  <Link href="/privacy" className="hover:text-cyan-300 transition-colors ml-1">
                    Privacy Policy
                  </Link>
                  {' | '}
                  <Link href="/terms" className="hover:text-cyan-300 transition-colors">
                    Terms of Service
                  </Link>
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <HeartIcon className="w-4 h-4 text-red-400" />
                <span>Made with cutting-edge technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;
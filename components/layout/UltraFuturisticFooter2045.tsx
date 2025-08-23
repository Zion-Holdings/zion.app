import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Facebook,
  Instagram,
  ArrowRight,
  Star,
  Shield,
  Heart,
  Brain,
  Atom,
  Rocket,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  HelpCircle,
  MessageCircle,
  Calendar,
  Award,
  Lightbulb,
  TrendingUp,
  BarChart3,
  Settings,
  Grid,
  Layers,
  Palette,
  Eye,
  Infinity,
  Sparkles
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Footer sections with organized links
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { label: 'Quantum Computing', href: '/services?category=quantum', icon: <Atom className="w-4 h-4" /> },
        { label: 'Space Technology', href: '/services?category=space-tech', icon: <Rocket className="w-4 h-4" /> },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Edge Computing', href: '/services?category=edge', icon: <Grid className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
        { label: 'Startup Solutions', href: '/solutions/startup', icon: <Rocket className="w-4 h-4" /> },
        { label: 'Government Solutions', href: '/solutions/government', icon: <Shield className="w-4 h-4" /> },
        { label: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Heart className="w-4 h-4" /> },
        { label: 'Financial Solutions', href: '/solutions/financial', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/resources/documentation', icon: <FileText className="w-4 h-4" /> },
        { label: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> },
        { label: 'Case Studies', href: '/resources/case-studies', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'API Reference', href: '/resources/api', icon: <Code className="w-4 h-4" /> },
        { label: 'Training', href: '/training', icon: <Award className="w-4 h-4" /> },
        { label: 'Blog', href: '/blog', icon: <BookOpen className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { label: 'Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
        { label: 'Team', href: '/team', icon: <Users className="w-4 h-4" /> },
        { label: 'Careers', href: '/careers', icon: <Award className="w-4 h-4" /> },
        { label: 'News', href: '/news', icon: <FileText className="w-4 h-4" /> },
        { label: 'Contact', href: '/contact', icon: <MessageCircle className="w-4 h-4" /> }
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-400' },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-400' },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' },
    { label: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-400' },
    { label: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-500' },
    { label: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-400' }
  ];

  // Contact information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Footer animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Company Info */}
            <motion.div className="lg:col-span-2" variants={sectionVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-xl opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with innovative AI, quantum computing, and space technology solutions. 
                Empowering enterprises to transform and thrive in the digital age.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={sectionVariants}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                      >
                        <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          {link.icon}
                        </span>
                        <span className="hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="py-8 border-t border-cyan-500/20"
          variants={sectionVariants}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stay Updated with Future Technology
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, space technology, and more. 
              Join our newsletter for exclusive updates and early access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="py-6 border-t border-cyan-500/20"
          variants={sectionVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>for the future</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
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
            <Link href="/sitemap" className="hover:text-cyan-400 transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          href="/contact"
          className="group relative p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        </Link>
      </motion.div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;
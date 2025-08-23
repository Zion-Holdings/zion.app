import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play, FileText, ArrowUp, HelpCircle,
  Home, Info, Briefcase, BookOpen, Calendar, MessageCircle, ShieldCheck, Building, Heart as HeartIcon,
  Target as TargetIcon, Star as StarIcon, Lightbulb, Wrench, Cog, BarChart, PieChart, DollarSign, Monitor
} from 'lucide-react';

const EnhancedFooter2025: React.FC = () => {
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
        { name: 'AI & Machine Learning', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Technology', href: '/quantum-services', icon: <Atom className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cloud & Infrastructure', href: '/it-services', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Business Intelligence', href: '/data-analytics', icon: <BarChart className="w-4 h-4" /> },
        { name: 'DevOps & Automation', href: '/devops-automation', icon: <Code className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/space-tech', icon: <Rocket className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <HeartIcon className="w-4 h-4" /> },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Cog className="w-4 h-4" /> },
        { name: 'Retail Solutions', href: '/retail-technology-solutions', icon: <Target className="w-4 h-4" /> },
        { name: 'Government Solutions', href: '/government-technology-solutions', icon: <ShieldCheck className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Info className="w-4 h-4" /> },
        { name: 'Our Mission', href: '/mission', icon: <TargetIcon className="w-4 h-4" /> },
        { name: 'Leadership Team', href: '/leadership', icon: <Users className="w-4 h-4" /> },
        { name: 'Company Culture', href: '/culture', icon: <HeartIcon className="w-4 h-4" /> },
        { name: 'Our Values', href: '/values', icon: <StarIcon className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'News & Press', href: '/press', icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
        { name: 'Blog & Articles', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <BarChart className="w-4 h-4" /> },
        { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
        { name: 'Webinars', href: '/webinars', icon: <Calendar className="w-4 h-4" /> },
        { name: 'Events', href: '/events-webinars', icon: <Calendar className="w-4 h-4" /> },
        { name: 'Training', href: '/training', icon: <Lightbulb className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/get-started', icon: <ArrowRight className="w-4 h-4" /> },
    { name: 'Contact Sales', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" /> },
    { name: 'Status Page', href: '/status', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Developer Resources', href: '/developer-resources', icon: <Code className="w-4 h-4" /> }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-blue-900/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-blue-900/10 opacity-20" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="lg:col-span-1" variants={fadeInUp}>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp}>
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                  {section.title === 'Services' && <Rocket className="w-5 h-5 text-cyan-400 mr-2" />}
                  {section.title === 'Solutions' && <Target className="w-5 h-5 text-cyan-400 mr-2" />}
                  {section.title === 'Company' && <Building className="w-5 h-5 text-cyan-400 mr-2" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-cyan-400 mr-2" />}
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-300 transition-colors duration-200 group"
                      >
                        {link.icon}
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Links & Social */}
          <motion.div 
            className="mt-16 pt-8 border-t border-cyan-500/20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-300 transition-colors duration-200 group"
                    >
                      {link.icon}
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-300 transition-all duration-200 hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                  Stay Updated
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest insights on technology trends and innovations.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-cyan-500/20 bg-black/50 backdrop-blur-sm"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with the Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get insights on AI, quantum computing, cybersecurity, and emerging technologies delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-200"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Subscribe to newsletter"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700/50">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950/50 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" aria-label="Security status indicator"></div>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" aria-label="Performance status indicator"></div>
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>Made with ❤️ by Zion Tech Group</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" aria-label="Company status indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter2025;
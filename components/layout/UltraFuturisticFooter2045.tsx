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
  Zap,
  Brain,
  Atom,
  Shield,
  Rocket,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Star,
  Sparkles,
  Globe,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  Server,
  TrendingUp,
  Newspaper,
  GraduationCap,
  Briefcase,
  Heart
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { label: 'IT Infrastructure', href: '/services?category=it-infrastructure', icon: <Server className="w-4 h-4" /> },
        { label: 'Micro SAAS', href: '/services?category=micro-saas', icon: <Target className="w-4 h-4" /> },
        { label: 'Quantum Technology', href: '/services?category=quantum', icon: <Atom className="w-4 h-4" /> },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
        { label: 'Startup Solutions', href: '/solutions/startup', icon: <Rocket className="w-4 h-4" /> },
        { label: 'Government Solutions', href: '/solutions/government', icon: <Shield className="w-4 h-4" /> },
        { label: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Heart className="w-4 h-4" /> },
        { label: 'Financial Solutions', href: '/solutions/financial', icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Blog', href: '/blog', icon: <Newspaper className="w-4 h-4" /> },
        { label: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> },
        { label: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
        { label: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> },
        { label: 'Training', href: '/training', icon: <GraduationCap className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { label: 'Our Team', href: '/team', icon: <Users className="w-4 h-4" /> },
        { label: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
        { label: 'News & Blog', href: '/blog', icon: <Newspaper className="w-4 h-4" /> },
        { label: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { label: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800/50 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,212,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.05),transparent_50%)]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'gridMove 30s linear infinite'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25"
              >
                <Zap className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transform your business with cutting-edge AI, IT infrastructure, and micro SAAS solutions. 
              Experience the future of technology with autonomous intelligence and quantum computing.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800/50 pt-12 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with the Latest Technology Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on AI, quantum computing, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Security
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </footer>
  );
};

export default UltraFuturisticFooter2045;
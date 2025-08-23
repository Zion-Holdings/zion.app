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
  ArrowRight,
  Zap,
  Brain,
  Atom,
  Shield,
  Rocket,
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
  Eye,
  Heart,
  Infinity,
  TrendingUp,
  Palette,
  Layers,
  Grid,
  BarChart3,
  Settings,
  HelpCircle,
  MessageCircle,
  Calendar,
  Award,
  Lightbulb,
  Play,
  DollarSign,
  GraduationCap,
  Network,
  ShoppingCart,
  Monitor,
  Lock,
  Server,
  Globe2,
  Newspaper,
  PhoneCall,
  ArrowUp,
  Briefcase
} from 'lucide-react';

const UltraFuturisticFooter2046: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'IT Infrastructure', href: '/it-infrastructure' },
        { label: 'Micro SAAS Solutions', href: '/micro-saas' },
        { label: 'Emerging Technologies', href: '/emerging-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: 'Cloud Services', href: '/cloud-services' }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Healthcare', href: '/healthcare-solutions' },
        { label: 'Finance', href: '/finance-solutions' },
        { label: 'Manufacturing', href: '/manufacturing-solutions' },
        { label: 'Retail', href: '/retail-solutions' },
        { label: 'Education', href: '/education-solutions' },
        { label: 'Government', href: '/government-solutions' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Leadership', href: '/leadership' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Press', href: '/press' },
        { label: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Blog', href: '/blog' },
        { label: 'Training', href: '/training' },
        { label: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses with cutting-edge AI, quantum computing, and next-generation IT infrastructure. 
                Experience the future of technology with our innovative solutions.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <PhoneCall className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  {section.title === 'Services' && <Briefcase className="w-5 h-5 mr-2 text-cyan-400" />}
                  {section.title === 'Solutions' && <Target className="w-5 h-5 mr-2 text-green-400" />}
                  {section.title === 'Company' && <Building className="w-5 h-5 mr-2 text-purple-400" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 mr-2 text-orange-400" />}
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-8 border-t border-cyan-400/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with the Future
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2025 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-cyan-400 ml-2">Privacy Policy</Link> | 
                <Link href="/terms" className="hover:text-cyan-400 ml-2">Terms of Service</Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 border border-cyan-400/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/40 transition-all duration-200 hover:scale-110 z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2046;
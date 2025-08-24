import React from 'react';
import Link from 'next/link';
import { Zap, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Facebook, Instagram, Youtube, ArrowUp, Shield, Cpu, Bot, Cloud, BarChart3, Palette, Code, BookOpen, Activity, Smartphone, MessageSquare, FileText, Calendar, CreditCard, TrendingUp, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Play, Star, Users, Globe as GlobeIcon, Lock as LockIcon, Zap as ZapIcon } from 'lucide-react';

const footerSections = [
  {
    title: 'Micro SaaS Services',
    description: '55+ Real Micro SaaS Services for Modern Businesses',
    links: [
      { name: 'AI Content Generator Pro', href: 'https://ziontechgroup.com/ai-content-generator', price: '$49/month' },
      { name: 'Cloud Cost Optimizer', href: 'https://ziontechgroup.com/cloud-cost-optimizer', price: '$99/month' },
      { name: 'AI Market Research', href: 'https://ziontechgroup.com/ai-market-research', price: '$79/month' },
      { name: 'AI Customer Service', href: 'https://ziontechgroup.com/ai-customer-service', price: '$89/month' },
      { name: 'AI Financial Advisor', href: 'https://ziontechgroup.com/ai-financial-advisor', price: '$129/month' },
      { name: 'View All Services', href: '/micro-saas', price: '55+ Services' },
    ]
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scalable Solutions for Large Organizations',
    links: [
      { name: 'AI-Powered Automation', href: '/services?category=ai', price: 'Custom Pricing' },
      { name: 'Cloud Infrastructure', href: '/services?category=cloud', price: 'Custom Pricing' },
      { name: 'Security & Compliance', href: '/services?category=security', price: 'Custom Pricing' },
      { name: 'Data Analytics', href: '/services?category=analytics', price: 'Custom Pricing' },
      { name: 'DevOps & CI/CD', href: '/services?category=devops', price: 'Custom Pricing' },
      { name: 'Digital Transformation', href: '/services?category=transformation', price: 'Custom Pricing' },
    ]
  },
  {
    title: 'Resources & Support',
    description: 'Knowledge Base and Learning Resources',
    links: [
      { name: 'Documentation', href: '/docs', price: 'Free' },
      { name: 'API Reference', href: '/docs/api', price: 'Free' },
      { name: 'Blog & Insights', href: '/blog', price: 'Free' },
      { name: 'Case Studies', href: '/case-studies', price: 'Free' },
      { name: 'Video Tutorials', href: '/tutorials', price: 'Free' },
      { name: 'Community Forum', href: '/community', price: 'Free' },
    ]
  },
  {
    title: 'Company',
    description: 'About Zion Tech Group',
    links: [
      { name: 'Our Story', href: '/about', price: 'Free' },
      { name: 'Leadership Team', href: '/about/team', price: 'Free' },
      { name: 'Careers', href: '/careers', price: 'Free' },
      { name: 'Press & Media', href: '/press', price: 'Free' },
      { name: 'Partnerships', href: '/partnerships', price: 'Free' },
      { name: 'Investor Relations', href: '/investors', price: 'Free' },
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
];

export default function FuturisticFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-blue-500/20 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-pulse" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20 rounded-lg animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-cyan-500/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  {index === 0 && <Cpu className="w-4 h-4 text-white" />}
                  {index === 1 && <Building className="w-4 h-4 text-white" />}
                  {index === 2 && <BookOpen className="w-4 h-4 text-white" />}
                  {index === 3 && <Users className="w-4 h-4 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <p className="text-sm text-blue-300/60 leading-relaxed">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="group-hover:text-blue-300 transition-colors duration-200">
                        {link.name}
                      </span>
                      <span className="text-xs text-blue-400/60 font-mono">
                        {link.price}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-blue-500/20 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-blue-300/60">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering businesses with cutting-edge AI solutions and real micro SaaS services. 
                Transform your operations with our intelligent automation platform.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href="https://ziontechgroup.com" className="text-sm">ziontechgroup.com</a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Platform Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">55+</div>
                  <div className="text-xs text-blue-300/60">Micro SaaS Services</div>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-xs text-purple-300/60">Uptime Guarantee</div>
                </div>
                <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">14</div>
                  <div className="text-xs text-green-300/60">Day Free Trial</div>
                </div>
                <div className="text-center p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-400">24/7</div>
                  <div className="text-xs text-orange-300/60">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Copyright & Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 z-40"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>

      {/* Floating action button with contact info */}
      <div className="fixed bottom-8 left-8 z-40">
        <div className="group relative">
          <button className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110">
            <MessageSquare className="w-6 h-6 mx-auto" />
          </button>
          
          {/* Contact tooltip */}
          <div className="absolute bottom-full left-0 mb-2 w-64 bg-black/90 backdrop-blur-xl border border-green-500/20 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="text-sm text-white space-y-1">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-green-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="text-xs text-green-300/60 mt-2">
                Available 24/7 for support
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
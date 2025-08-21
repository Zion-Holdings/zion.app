import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Zap, Sparkles, Shield, 
  Phone, Mail, MapPin, Globe, ArrowRight,
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github,
  CheckCircle, Award, Star, Crown, Gem,
  Heart, ShieldCheck, Users, Briefcase, BookOpen,
  Target, Microscope, Cpu, Database, Cloud,
  Lock, Calculator, Video
} from 'lucide-react';

const UltraFuturisticFooter2034: React.FC = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const footerSections = [
    {
      title: '🧠 AI & Machine Learning',
      description: 'Intelligent automation and AI solutions',
      links: [
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: '$299/month' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', price: '$199/month' },
        { name: 'AI-Powered SEO Automation Pro', href: '/ai-powered-seo-automation-pro', price: '$179/month' },
        { name: 'AI-Powered Social Media Manager', href: '/ai-powered-social-media-manager', price: '$149/month' },
        { name: 'AI-Powered Email Marketing Automation', href: '/ai-powered-email-marketing-automation', price: '$129/month' },
        { name: 'AI-Powered Customer Support Automation', href: '/ai-powered-customer-support-automation', price: '$129/month' },
        { name: 'AI-Powered Project Management Pro', href: '/ai-powered-project-management-pro', price: '$199/month' }
      ]
    },
    {
      title: '⚛️ Quantum & Security',
      description: 'Next-generation security and quantum solutions',
      links: [
        { name: 'Quantum-Secure Communication Platform', href: '/quantum-secure-communication', price: '$499/month' },
        { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', price: '$399/month' },
        { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', price: '$799/month' },
        { name: 'Quantum-Secure Database Platform', href: '/quantum-secure-database-platform', price: '$899/month' },
        { name: 'AI-Powered Network Security', href: '/ai-powered-network-security', price: '$549/month' }
      ]
    },
    {
      title: '🖥️ Enterprise IT',
      description: 'Enterprise-grade IT infrastructure and operations',
      links: [
        { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', price: '$599/month' },
        { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', price: '$449/month' },
        { name: 'AI-Powered IT Operations Center', href: '/ai-powered-it-operations-center', price: '$699/month' },
        { name: 'AI-Powered API Management', href: '/ai-powered-api-management', price: '$349/month' },
        { name: 'Intelligent Cloud Cost Optimization', href: '/intelligent-cloud-cost-optimization', price: '$299/month' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: '2024 Services', href: '/services-2024', icon: Sparkles },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing-2033' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' },
    { name: 'Legal', href: '/legal' },
    { name: 'Privacy', href: '/privacy' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-cyan-400' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-500' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];

  const developerLinks = [
    { name: 'API Documentation', href: '/api-docs' },
    { name: 'Developer Portal', href: '/developer' },
    { name: 'SDKs & Libraries', href: '/sdk' },
    { name: 'Code Examples', href: '/examples' },
    { name: 'Community Forum', href: '/forum' },
    { name: 'GitHub Repositories', href: '/github' }
  ];

  const businessLinks = [
    { name: 'Business Solutions', href: '/business' },
    { name: 'Enterprise Plans', href: '/enterprise' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'ROI Calculator', href: '/roi-calculator', icon: Calculator },
    { name: 'Webinars', href: '/webinars', icon: Video },
    { name: 'White Papers', href: '/white-papers' }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: ShieldCheck, description: 'Information Security Management' },
    { name: 'SOC 2 Type II', icon: Award, description: 'Security & Availability Controls' },
    { name: 'GDPR Compliant', icon: Lock, description: 'Data Protection & Privacy' },
    { name: 'HIPAA Compliant', icon: Shield, description: 'Healthcare Data Security' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
      
      {/* Floating animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: 360
          }}
          transition={{
            duration: 8,
            repeat: -1,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: -1,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-20 border border-green-400/20"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: -1,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation • Intelligence • Impact</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative AI, IT, and quantum security solutions. 
              Transforming businesses through cutting-edge technology and intelligent automation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 hover:border-cyan-400 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                <p className="text-sm text-gray-400">{section.description}</p>
              </div>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block group hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm">
                        {link.name}
                      </span>
                      <span className="text-xs text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {link.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 text-cyan-400 mr-2" />
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  {link.icon && <link.icon className="w-4 h-4 text-cyan-400" />}
                  <span className="text-sm">{link.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Company
            </h4>
            <div className="space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Developers */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-green-400 mr-2" />
              Developers
            </h4>
            <div className="space-y-3">
              {developerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Briefcase className="w-5 h-5 text-yellow-400 mr-2" />
              Business
            </h4>
            <div className="space-y-3">
              {businessLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.icon && <link.icon className="w-4 h-4 text-yellow-400" />}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Certifications & Compliance</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-all duration-200">
                  <cert.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h5 className="font-semibold text-white mb-1">{cert.name}</h5>
                <p className="text-sm text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
              <span>by Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ArrowRight className="w-6 h-6 mx-auto rotate-[-90deg]" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2034;

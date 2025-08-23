import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Shield, Zap, Brain, Cpu, Code, Cloud,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageCircle, Clock, Building
} from 'lucide-react';

const UltraFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-data' },
        { name: 'IT Infrastructure', href: '/services?category=cloud-finops' },
        { name: 'Micro SAAS Solutions', href: '/services?category=developer-tools' },
        { name: 'Cybersecurity', href: '/services?category=cybersecurity' },
        { name: 'Observability', href: '/services?category=observability' },
        { name: 'View All Services', href: '/services' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions' },
        { name: 'AI Content Intelligence', href: '/services/ai-content-intelligence-platform' },
        { name: 'Cloud Cost Optimization', href: '/services/cloud-cost-optimization-platform' },
        { name: 'No-Code Automation', href: '/services/no-code-automation-platform' },
        { name: 'DevOps Automation', href: '/services/devops-automation-platform' },
        { name: 'Custom Development', href: '/contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Leadership Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & Media', href: '/press' },
        { name: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Support Center', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="relative bg-black/90 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of technology with innovative AI, IT infrastructure, and micro SAAS solutions that drive business transformation and accelerate human progress.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-xl backdrop-blur-sm"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Featured Services</h3>
            <p className="text-gray-300">Transform your business with our cutting-edge solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-black/20 rounded-lg border border-cyan-400/20">
              <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-semibold text-cyan-400 mb-2">AI Content Intelligence</h4>
              <p className="text-sm text-gray-300 mb-3">AI-powered content optimization and analytics</p>
              <div className="text-cyan-400 font-semibold">$499/month</div>
            </div>
            
            <div className="text-center p-4 bg-black/20 rounded-lg border border-purple-400/20">
              <Cloud className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold text-purple-400 mb-2">Cloud Cost Optimization</h4>
              <p className="text-sm text-gray-300 mb-3">AI-driven cloud cost management</p>
              <div className="text-purple-400 font-semibold">$399/month</div>
            </div>
            
            <div className="text-center p-4 bg-black/20 rounded-lg border border-green-400/20">
              <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-semibold text-green-400 mb-2">No-Code Automation</h4>
              <p className="text-sm text-gray-300 mb-3">Visual workflow automation platform</p>
              <div className="text-green-400 font-semibold">$299/month</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <div className="flex items-center space-x-4 mt-2 text-xs">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 border border-gray-700 hover:border-cyan-400/40"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Infrastructure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-purple-400" />
                <span>4.8/5 Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;
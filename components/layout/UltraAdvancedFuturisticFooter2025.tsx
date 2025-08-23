import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, 
  Shield, Zap, Brain, Rocket, Users, Target,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, MessageCircle, Clock,
  Award, Heart, Sparkles, Cpu, Cloud, Lock,
  Building, ChartBar, Code, Database, Server,
  GraduationCap
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'Core Services',
    icon: <Rocket className="w-5 h-5" />,
    links: [
      { name: 'AI & Machine Learning', href: '/ai-services', description: 'Revolutionary AI solutions' },
      { name: 'Quantum Computing', href: '/quantum-services', description: 'Next-gen computing power' },
      { name: 'IT Infrastructure', href: '/it-services', description: 'Enterprise-grade solutions' },
      { name: 'Micro SAAS', href: '/micro-saas', description: 'Business automation tools' },
      { name: 'Business Automation', href: '/automation', description: 'Process optimization' },
      { name: 'Customer Success', href: '/customer-success', description: 'Growth automation' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <Building className="w-5 h-5" />,
    links: [
      { name: 'Healthcare AI', href: '/healthcare-manufacturing', description: 'Medical AI solutions' },
      { name: 'Manufacturing 4.0', href: '/healthcare-manufacturing', description: 'Smart manufacturing' },
      { name: 'Financial Services', href: '/finance-legal', description: 'AI-powered finance' },
      { name: 'Legal Tech', href: '/finance-legal', description: 'Legal document analysis' },
      { name: 'Creative Media', href: '/creative-media', description: 'AI creative tools' },
      { name: 'Education Tech', href: '/education-training', description: 'AI learning platforms' }
    ]
  },
  {
    title: 'Business Solutions',
    icon: <Target className="w-5 h-5" />,
    links: [
      { name: 'Marketing Automation', href: '/marketing-sales', description: 'AI-powered marketing' },
      { name: 'Sales Intelligence', href: '/marketing-sales', description: 'Sales optimization' },
      { name: 'HR Analytics', href: '/micro-saas', description: 'People analytics' },
      { name: 'Supply Chain AI', href: '/micro-saas', description: 'Supply chain optimization' },
      { name: 'Customer Analytics', href: '/customer-success', description: 'Customer insights' },
      { name: 'Business Intelligence', href: '/automation', description: 'Data-driven decisions' }
    ]
  },
  {
    title: 'Technology Stack',
    icon: <Cpu className="w-5 h-5" />,
    links: [
      { name: 'Cloud Infrastructure', href: '/it-services', description: 'Scalable cloud solutions' },
      { name: 'Edge Computing', href: '/it-services', description: 'Distributed computing' },
      { name: 'Cybersecurity', href: '/it-services', description: 'Advanced security' },
      { name: 'API Management', href: '/it-services', description: 'API lifecycle management' },
      { name: 'DevOps Automation', href: '/automation', description: 'CI/CD optimization' },
      { name: 'Data Analytics', href: '/automation', description: 'Big data insights' }
    ]
  },
  {
    title: 'Company',
    icon: <Building className="w-5 h-5" />,
    links: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Leadership', href: '/leadership', description: 'Meet our team' },
      { name: 'Careers', href: '/careers', description: 'Join us' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' },
      { name: 'News', href: '/news', description: 'Latest updates' },
      { name: 'Blog', href: '/blog', description: 'Insights' }
    ]
  },
  {
    title: 'Resources',
    icon: <GraduationCap className="w-5 h-5" />,
    links: [
      { name: 'Documentation', href: '/docs', description: 'Technical docs' },
      { name: 'API Reference', href: '/api', description: 'API docs' },
      { name: 'Developer Resources', href: '/developer-resources', description: 'Dev tools' },
      { name: 'White Papers', href: '/white-papers', description: 'Research' },
      { name: 'Webinars', href: '/webinars', description: 'Learn' },
      { name: 'Training', href: '/training', description: 'Skills' }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
];

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section - Contact & CTA */}
        <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-b border-gray-800/30">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Contact Information */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-white">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Let's discuss how our revolutionary AI and quantum solutions can drive your success.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-cyan-400">
                    <Phone className="w-5 h-5" />
                    <span className="text-lg font-medium">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center gap-3 text-purple-400">
                    <Mail className="w-5 h-5" />
                    <span className="text-lg font-medium">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-pink-400">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg font-medium">{contactInfo.address}</span>
                  </div>
                </motion.div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center lg:text-right space-y-6"
              >
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">
                    Get Started Today
                  </h4>
                  <p className="text-gray-300">
                    Schedule a consultation and discover the future of technology.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                  <Link
                    href={`tel:${contactInfo.mobile}`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Link>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                    <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  We are at the forefront of technological innovation, delivering cutting-edge AI, 
                  quantum computing, and micro SAAS solutions that transform businesses and drive 
                  unprecedented growth.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-2 bg-gray-800/50 rounded-lg text-gray-400 transition-all duration-200 hover:bg-gray-700/50 ${social.color} border border-gray-700/50 hover:border-gray-600/50`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Service Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-cyan-400">
                  {section.icon}
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                        <span className="text-sm">{link.name}</span>
                      </div>
                      <div className="text-xs text-gray-500 ml-3.5 mt-1">{link.description}</div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright & Links */}
        <div className="border-t border-gray-800/50 bg-black/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <p className="text-gray-400 text-sm">
                  © 2025 Zion Tech Group. All rights reserved. 
                  <span className="text-cyan-400 ml-2">Revolutionizing Technology</span>
                </p>
              </motion.div>

              {/* Bottom Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap items-center gap-6 text-sm"
              >
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Sitemap
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping delay-500"></div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;
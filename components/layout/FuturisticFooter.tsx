import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  Zap,
  Shield,
  Users,
  Award
} from 'lucide-react';

export default function FuturisticFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Automation', href: '/services#ai' },
        { name: 'Cloud Infrastructure', href: '/services#cloud' },
        { name: 'Security & Compliance', href: '/services#security' },
        { name: 'Data Analytics', href: '/services#analytics' },
        { name: 'DevOps & CI/CD', href: '/services#devops' },
        { name: 'Digital Transformation', href: '/services#digital' }
      ]
    },
    {
      title: 'Micro SaaS',
      links: [
        { name: 'Content & Marketing', href: '/micro-saas?category=Content+%26+Marketing' },
        { name: 'Development & DevOps', href: '/micro-saas?category=Development+%26+DevOps' },
        { name: 'Sales & CRM', href: '/micro-saas?category=Sales+%26+CRM' },
        { name: 'Analytics & Data', href: '/micro-saas?category=Analytics+%26+Data' },
        { name: 'AI & Machine Learning', href: '/micro-saas?category=AI+%26+Machine+Learning' },
        { name: 'Emerging Technologies', href: '/micro-saas?category=Emerging+Technologies' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & Media', href: '/press' },
        { name: 'Partnerships', href: '/partnerships' },
        { name: 'Investor Relations', href: '/investors' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Support Center', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  const stats = [
    { icon: Zap, value: '48+', label: 'Micro SaaS Services' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
    { icon: Award, value: '24/7', label: 'Support Available' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Stats Section */}
        <section className="py-16 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    Z
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                    <div className="text-sm text-cyan-400">Innovation Hub</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  The world's most advanced autonomous innovation hub delivering cutting-edge technology solutions, 
                  intelligent automation systems, and the future of cloud-native AI infrastructure.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>https://ziontechgroup.com</span>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-cyan-400 ml-2">Privacy Policy</Link> | 
                <Link href="/terms" className="hover:text-cyan-400 ml-2">Terms of Service</Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
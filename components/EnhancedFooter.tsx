import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Globe, Mail, Phone, MapPin, Twitter, Linkedin, 
  Github, Youtube, Facebook, Instagram, ArrowUp,
  Heart, Star, Zap, Users, Award, BookOpen
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Business Intelligence", href: "/ai-business-intelligence" },
        { name: "Quantum Cybersecurity", href: "/quantum-cybersecurity" },
        { name: "Edge Computing", href: "/edge-computing-orchestration" },
        { name: "Space Technology", href: "/space-technology" },
        { name: "Neural Interfaces", href: "/neural-interface" },
        { name: "View All Services", href: "/comprehensive-2025-services-showcase" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press & Media", href: "/press" },
        { name: "Partnerships", href: "/partners" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog & Insights", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Support Center", href: "/support" },
        { name: "Community", href: "/community" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR Compliance", href: "/gdpr" },
        { name: "Security", href: "/security" },
        { name: "Accessibility", href: "/accessibility" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter, color: "hover:text-blue-400" },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin, color: "hover:text-blue-600" },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github, color: "hover:text-gray-400" },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube, color: "hover:text-red-500" },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook, color: "hover:text-blue-500" },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram, color: "hover:text-pink-500" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      label: "Email us"
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      label: "Call us"
    },
    {
      icon: MapPin,
      text: "San Francisco, CA",
      href: "#",
      label: "Our location"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-white/10" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-white/60">Leading-edge technology solutions</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI, quantum computing, cybersecurity, 
              and digital transformation solutions that drive innovation and growth.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200 group"
                  aria-label={contact.label}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 p-2 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                    <contact.icon className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-white/10 p-2 flex items-center justify-center text-white/60 hover:text-white hover:bg-cyan-500/20 transition-all duration-200 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                {section.title === "Services" && <Zap className="w-4 h-4 mr-2 text-cyan-400" aria-hidden="true" />}
                {section.title === "Company" && <Users className="w-4 h-4 mr-2 text-cyan-400" aria-hidden="true" />}
                {section.title === "Resources" && <BookOpen className="w-4 h-4 mr-2 text-cyan-400" aria-hidden="true" />}
                {section.title === "Legal" && <Shield className="w-4 h-4 mr-2 text-cyan-400" aria-hidden="true" />}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-white/70 mb-6">
              Get the latest insights on AI, quantum computing, and technology innovation delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-white/60">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with <Heart className="w-4 h-4 inline text-red-400" aria-hidden="true" /> for innovation</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-white transition-colors duration-200">
                Cookies
              </Link>
              <Link href="/accessibility" className="text-white/60 hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 z-40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-6 h-6" aria-hidden="true" />
      </motion.button>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-r from-white/5 to-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Trusted by Industry Leaders</h4>
            <div className="flex items-center justify-center space-x-8 text-white/40">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
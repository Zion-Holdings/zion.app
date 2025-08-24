import React from 'react';
import { Link } from "react-router-dom";
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Brain, 
  Shield, 
  Cloud,
  Globe,
  Smartphone,
  BarChart3,
  ArrowRight,
  Star,
  Users,
  Award
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI & Machine Learning', href: '/services/ai', icon: Brain, description: 'Intelligent automation and analytics' },
    { name: 'Cloud Infrastructure', href: '/services/cloud', icon: Cloud, description: 'AWS, Azure, GCP solutions' },
    { name: 'Cybersecurity', href: '/services/security', icon: Shield, description: 'Security audits and implementation' },
    { name: 'Web Development', href: '/services/web', icon: Globe, description: 'Custom websites and applications' },
    { name: 'Mobile Apps', href: '/services/mobile', icon: Smartphone, description: 'iOS and Android development' },
    { name: 'Data Analytics', href: '/services/analytics', icon: BarChart3, description: 'Business intelligence solutions' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Request Quote', href: '/quote' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' }
  ];

  const companyInfo = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: 'Delaware, United States', href: '#' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. 
              From AI and cloud infrastructure to cybersecurity and custom development.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact) => (
                <a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center text-white/70 hover:text-cyan-400 transition-colors"
                >
                  <contact.icon className="w-4 h-4 mr-3 text-cyan-400" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-cyan-400/20 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <div className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-start text-white/70 hover:text-cyan-400 transition-colors group"
                >
                  <service.icon className="w-4 h-4 mr-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </div>
                    <div className="text-xs text-white/50">{service.description}</div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4 group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/70 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-6 mt-8">Company</h3>
            <div className="space-y-3">
              {companyInfo.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/70 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Stats */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-4 text-sm">
              Get the latest insights on technology trends and company updates.
            </p>
            
            {/* Newsletter Form */}
            <div className="mb-6">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Company Stats */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">500+</div>
                  <div className="text-white/60 text-sm">Projects Completed</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">50+</div>
                  <div className="text-white/60 text-sm">Team Members</div>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-purple-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">10+</div>
                  <div className="text-white/60 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
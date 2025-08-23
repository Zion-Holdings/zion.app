import React from 'react';
import Link from 'next/link';
import { 
  Brain, Rocket, Mail, Phone, MapPin, 
  ArrowRight, Github, Linkedin, Twitter, 
  Youtube, Instagram, Facebook, Atom, Building, Calendar
} from 'lucide-react';

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Consulting', href: '/services/ai-consulting' },
        { name: 'Machine Learning', href: '/services/machine-learning' },
        { name: 'Natural Language Processing', href: '/services/nlp' },
        { name: 'Computer Vision', href: '/services/computer-vision' },
        { name: 'Predictive Analytics', href: '/services/predictive-analytics' }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      services: [
        { name: 'Quantum Algorithms', href: '/services/quantum-algorithms' },
        { name: 'Quantum Security', href: '/services/quantum-security' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-ml' },
        { name: 'Quantum Optimization', href: '/services/quantum-optimization' }
      ]
    },
    {
      title: 'Space Technology',
      icon: Rocket,
      services: [
        { name: 'Satellite Systems', href: '/services/satellite-systems' },
        { name: 'Space Mining', href: '/services/space-mining' },
        { name: 'Interplanetary Communication', href: '/services/interplanetary-comm' },
        { name: 'Space Analytics', href: '/services/space-analytics' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      icon: Building,
      services: [
        { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'DevOps Automation', href: '/services/devops-automation' },
        { name: 'Data Management', href: '/services/data-management' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training Programs', href: '/training' }
  ];

  const supportLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support Center', href: '/support' },
    { name: 'Live Chat', href: '/chat' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'text-gray-400 hover:text-gray-300' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'YouTube', href: 'https://www.youtube.com/@ziontechgroup', icon: Youtube, color: 'text-red-400 hover:text-red-300' },
    { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram, color: 'text-pink-400 hover:text-pink-300' },
    { name: 'Facebook', href: 'https://www.facebook.com/ziontechgroup', icon: Facebook, color: 'text-blue-400 hover:text-blue-300' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 302 464 0950',
      href: 'tel:+13024640950',
      description: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: '24/7 Support Available'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '364 E Main St STE 1008',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Middletown, DE 19709'
    },
    {
      icon: Calendar,
      label: 'Business Hours',
      value: '9:00 AM - 6:00 PM EST',
      href: '#',
      description: 'Monday - Friday'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of technology with innovative AI, quantum computing, and space technology solutions that transform businesses and accelerate human progress.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-200 hover:scale-110 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Service Categories */}
                            {serviceCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white">{category.title}</h4>
                </div>
                
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Middle Section - Quick Links & Support */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-800/50">
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-cyan-400" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                Support
              </h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                Contact Info
              </h4>
              <div className="space-y-3">
                {contactInfo.map((contact) => (
                  <div key={contact.label} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-gray-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <contact.icon className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div>
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium block"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                      <p className="text-xs text-gray-500">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Zion Tech Group
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Email address for newsletter"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Revolutionary Technology Solutions</span>
              </div>
              
              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="flex flex-col gap-4">
            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Back to top"
            >
              <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
            </button>
            
            {/* Contact Button */}
            <a
              href="tel:+13024640950"
              className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              aria-label="Call us at +1 302 464 0950"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;
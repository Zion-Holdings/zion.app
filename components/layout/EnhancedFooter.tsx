import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  ArrowUp,
  Heart,
  Zap,
  Shield,
  Rocket,
  Brain,
  Atom,
  Globe,
  Clock,
  CheckCircle
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml' },
        { label: 'Quantum Computing', href: '/services?category=quantum' },
        { label: 'Space Technology', href: '/services?category=space-tech' },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity' },
        { label: 'Cloud & DevOps', href: '/services?category=cloud-devops' },
        { label: 'Business Solutions', href: '/services?category=business' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
        { label: 'News & Updates', href: '/news' },
        { label: 'Press Kit', href: '/press' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Blog', href: '/blog' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Training', href: '/training' },
        { label: 'Support', href: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Security', href: '/security' },
        { label: 'Compliance', href: '/compliance' },
        { label: 'Accessibility', href: '/accessibility' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/zion-tech-group',
      icon: <Linkedin className="w-5 h-5" />,
      description: 'Follow us on LinkedIn'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ziontechgroup',
      icon: <Twitter className="w-5 h-5" />,
      description: 'Follow us on Twitter'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Zion-Holdings',
      icon: <Github className="w-5 h-5" />,
      description: 'View our open source projects'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@ziontechgroup',
      icon: <Youtube className="w-5 h-5" />,
      description: 'Watch our videos'
    }
  ];

  const companyInfo = {
    name: 'Zion Tech Group',
    description: 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions.',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      label: '99.99% Uptime',
      description: 'Enterprise-grade reliability'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Global Support',
      description: '24/7 assistance worldwide'
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      label: 'SOC 2 Compliant',
      description: 'Enterprise security standards'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: '24/7 Monitoring',
      description: 'Continuous system oversight'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white" role="contentinfo" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                {companyInfo.name}
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {companyInfo.description}
            </p>

            {/* Company Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                    <div className="text-cyan-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{feature.label}</p>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="hover:underline"
                  aria-label={`Call us at ${companyInfo.phone}`}
                >
                  {companyInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="hover:underline"
                  aria-label={`Email us at ${companyInfo.email}`}
                >
                  {companyInfo.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <address className="not-italic">
                  {companyInfo.address}
                </address>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                      aria-label={`${link.label} - ${section.title}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI consciousness, quantum computing, and revolutionary technology solutions.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} {companyInfo.name}. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-400 hidden sm:inline" />
              <span className="hidden sm:inline">for the future</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/10"
                  aria-label={social.description}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Technology Badges */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-purple-400" />
              <span>AI Consciousness</span>
            </span>
            <span className="flex items-center space-x-2">
              <Atom className="w-4 h-4 text-blue-400" />
              <span>Quantum Computing</span>
            </span>
            <span className="flex items-center space-x-2">
              <Rocket className="w-4 h-4 text-pink-400" />
              <span>Space Technology</span>
            </span>
            <span className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-red-400" />
              <span>Cybersecurity</span>
            </span>
            <span className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Innovation</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Facebook,
  Instagram,
  Zap,
  Shield,
  Cpu,
  Brain,
  Rocket,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/', icon: Rocket },
    { name: 'Services', path: '/services', icon: Cpu },
    { name: 'AI Solutions', path: '/comprehensive-services', icon: Brain },
    { name: 'IT Services', path: '/it-onsite-services', icon: Shield },
    { name: 'Contact', path: '/contact', icon: Globe }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      services: [
        'AI-Powered CRM',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Machine Learning Models'
      ]
    },
    {
      title: 'Cybersecurity',
      services: [
        'Threat Intelligence',
        'Zero Trust Security',
        'Compliance Management',
        'Security Auditing',
        'Incident Response'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      services: [
        'Multi-Cloud Management',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Architecture',
        'Cost Optimization'
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-cyan-400' },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(138,43,226,0.1),transparent_50%)]"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-xl opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400 font-mono tracking-wider">
                    INNOVATION • INTELLIGENCE • IMPACT
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI solutions, IT services, and innovative technology services. 
                Empowering businesses with intelligent automation and digital transformation.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <address className="not-italic leading-relaxed">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </address>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Categories */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                Our Services
              </h4>
              <div className="space-y-4">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <h5 className="text-sm font-medium text-purple-400 mb-2">{category.title}</h5>
                    <ul className="space-y-1">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <span className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Connect With Us
              </h4>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <p className="text-sm text-gray-300 mb-3">
                  Stay updated with our latest innovations and AI breakthroughs
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-300 mb-3">Follow us on social media</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800/50 border border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all duration-300 ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Empowering the future through intelligent technology solutions
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Wave Effect */}
      <div className="energy-wave">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
      </div>
    </footer>
  );
};
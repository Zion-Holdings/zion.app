import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ArrowRight,
  Zap,
  Brain,
  Rocket,
  Shield,
  Cloud,
  RefreshCw,
  BarChart3,
  Globe,
  Lock,
  Building,
  BookOpen
} from 'lucide-react';

const EnhancedFuturisticFooter: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const services = [
    { name: 'AI & Machine Learning', href: '/ai-assistant', icon: <Brain className="w-4 h-4" /> },
    { name: 'Cybersecurity', href: '/security', icon: <Shield className="w-4 h-4" /> },
    { name: 'Cloud Platform', href: '/cloud-platform', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Automation', href: '/automation', icon: <RefreshCw className="w-4 h-4" /> },
    { name: 'Analytics', href: '/analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Micro SAAS', href: '/micro-saas', icon: <Star className="w-4 h-4" /> }
  ];

  const solutions = [
    { name: 'Quantum AI', href: '/quantum-ai', icon: <Brain className="w-4 h-4" /> },
    { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing', icon: <RefreshCw className="w-4 h-4" /> },
    { name: 'Biomedical Research', href: '/biomedical-ai', icon: <Brain className="w-4 h-4" /> },
    { name: 'Space Technology', href: '/space-technology', icon: <Rocket className="w-4 h-4" /> },
    { name: 'Smart Energy', href: '/smart-energy', icon: <Zap className="w-4 h-4" /> },
    { name: 'Autonomous Vehicles', href: '/autonomous-vehicles', icon: <Rocket className="w-4 h-4" /> }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Support', href: '/support' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="xl:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Zion Tech</div>
                  <div className="text-cyan-400 font-medium">Group</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading provider of revolutionary micro SAAS services, quantum AI solutions, and next-generation technology platforms. 
                Transforming businesses with cutting-edge innovation and unprecedented ROI.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-pink-400 mt-0.5" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href={contactInfo.website}
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        {service.icon}
                      </span>
                      <span className="text-sm">{service.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-purple-400" />
                Solutions
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li key={solution.name}>
                    <Link
                      href={solution.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        {solution.icon}
                      </span>
                      <span className="text-sm">{solution.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2 text-pink-400" />
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:text-pink-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-green-400" />
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:text-green-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <div className="flex items-center space-x-4">
                  {legal.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">SOC 2 Type II Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">99.99% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of companies already leveraging our revolutionary micro SAAS services. 
                Start your 21-day free trial today and experience unprecedented ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=Footer CTA - Get Started`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
                <a
                  href={contactInfo.website}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFuturisticFooter;
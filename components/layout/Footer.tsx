import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Zap, 
  Sparkles, 
  Shield, 
  Rocket,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Home,
  Info,
  Briefcase,
  Target,
  BookOpen,
  Building,
  HelpCircle,
  Users,
  FileText,
  Star,
  DollarSign,
  BarChart3,
  Rocket as RocketIcon,
  Brain,
  Atom,
  Cpu,
  Cloud,
  Shield as ShieldIcon
} from 'lucide-react';

const Footer: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Solutions', href: '/solutions', icon: Target },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Users }
  ];

  const services = [
    { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain },
    { name: 'Quantum Technology', href: '/quantum-services', icon: Atom },
    { name: 'Space Technology', href: '/space-technology', icon: RocketIcon },
    { name: 'IT Solutions', href: '/it-services', icon: Cpu },
    { name: 'Cybersecurity', href: '/security', icon: ShieldIcon },
    { name: 'Cloud & Infrastructure', href: '/cloud-platform', icon: Cloud },
    { name: 'View All Services', href: '/services', icon: Briefcase }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase', icon: Building },
    { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: Users },
    { name: 'Financial Solutions', href: '/financial-solutions', icon: DollarSign },
    { name: 'Government Solutions', href: '/government-technology-solutions', icon: Shield },
    { name: 'Manufacturing Solutions', href: '/manufacturing-ai-solutions', icon: Target },
    { name: 'Retail Solutions', href: '/retail-technology-solutions', icon: Users },
    { name: 'View All Solutions', href: '/solutions', icon: Target }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
    { name: 'White Papers', href: '/white-papers', icon: FileText },
    { name: 'Webinars', href: '/webinars', icon: Users },
    { name: 'Training', href: '/training', icon: Users },
    { name: 'API Documentation', href: '/api-docs', icon: FileText }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Investors', href: '/investors', icon: DollarSign },
    { name: 'News', href: '/news', icon: FileText },
    { name: 'Events', href: '/events', icon: Users },
    { name: 'Contact', href: '/contact', icon: Users }
  ];

  const support = [
    { name: 'Support Center', href: '/support', icon: HelpCircle },
    { name: 'Contact Us', href: '/contact', icon: Users },
    { name: 'Status Page', href: '/status', icon: Shield },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'API Documentation', href: '/api-docs', icon: FileText },
    { name: 'Help & FAQ', href: '/support', icon: HelpCircle }
  ];

  const showcase = [
    { name: '2026 Services', href: '/revolutionary-2026-services', icon: Rocket },
    { name: 'Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', icon: Zap },
    { name: 'Ultimate 2035', href: '/ultimate-2035-futuristic-services-showcase', icon: Sparkles },
    { name: 'Market Pricing', href: '/market-pricing', icon: BarChart3 },
    { name: 'Revolutionary 2026', href: '/revolutionary-2026-pricing', icon: Star },
    { name: 'All Showcases', href: '/comprehensive-services-showcase-2025', icon: Star }
  ];

  const socialLinks = [
    { name: 'X (Twitter)', href: '/social/twitter', icon: Twitter },
    { name: 'LinkedIn', href: '/social/linkedin', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'Facebook', href: '/social/facebook', icon: Facebook },
    { name: 'Instagram', href: '/social/instagram', icon: Instagram },
    { name: 'YouTube', href: '/social/youtube', icon: Youtube }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Shield },
    { name: 'Accessibility', href: '/accessibility-scanner', icon: Users }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                <div className="text-sm text-gray-400">Revolutionary Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Pioneering the future of technology with innovative solutions that drive business transformation.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-cyan-400" />
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center text-sm"
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-cyan-400" />
              Solutions
            </h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link 
                    href={solution.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center text-sm"
                  >
                    <solution.icon className="w-4 h-4 mr-2" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center text-sm"
                  >
                    <resource.icon className="w-4 h-4 mr-2" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center text-sm"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-cyan-400" />
              Support
            </h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center text-sm"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Showcase & Pricing */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              Showcase
            </h3>
            <ul className="space-y-2">
              {showcase.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center text-sm"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              {legal.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center"
                >
                  <item.icon className="w-4 h-4 mr-1" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved. 
              <span className="mx-2">•</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
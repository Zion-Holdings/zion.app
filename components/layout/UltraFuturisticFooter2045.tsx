import React from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Globe, 
  Facebook, Twitter, Linkedin, Youtube, Github,
  ArrowUp, Shield, Rocket, Brain
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const serviceCategories = [
    {
      title: 'AI & Consciousness',
      services: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
        { name: 'Quantum AI Research', href: '/quantum-ai-research-development-2025' },
        { name: 'Autonomous AI Systems', href: '/autonomous-ai-research-development-2025' }
      ]
    },
    {
      title: 'Quantum Technology',
      services: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Quantum Security', href: '/quantum-security' },
        { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion-platform' }
      ]
    },
    {
      title: 'Space Technology',
      services: [
        { name: 'Space Mining', href: '/space-mining-automation-platform' },
        { name: 'Space Intelligence', href: '/space-resource-intelligence-platform' },
        { name: 'Space Commercialization', href: '/space-technology-commercialization-2025' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      services: [
        { name: 'Cloud Infrastructure', href: '/next-generation-cloud-native-architecture-2025' },
        { name: 'Cybersecurity', href: '/autonomous-cybersecurity-defense-2025' },
        { name: 'DevOps Automation', href: '/autonomous-devops-orchestration-2025' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Revolutionary technology solutions for the future. We specialize in AI consciousness, 
              quantum computing, and space technology that transforms businesses and propels humanity forward.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure & Compliant</span>
              <Brain className="w-4 h-4 text-blue-400" />
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;
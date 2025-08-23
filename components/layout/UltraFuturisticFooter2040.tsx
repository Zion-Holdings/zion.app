import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, ArrowRight, ExternalLink
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Revolutionary Services 2043',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Consciousness Evolution 2043', href: '/ai-consciousness-evolution-2043', featured: true },
      { name: 'Quantum AI Neural Network 2043', href: '/quantum-ai-neural-2043', featured: true },
      { name: 'AI Business Intelligence 2043', href: '/ai-business-intelligence-2043', featured: true },
      { name: 'Quantum Cybersecurity 2043', href: '/quantum-cybersecurity-2043', featured: true },
      { name: 'Autonomous Customer Success 2043', href: '/autonomous-customer-success-2043', featured: true },
      { name: 'Quantum Cloud Infrastructure 2043', href: '/quantum-cloud-infrastructure-2043' },
      { name: 'Autonomous DevOps Platform 2043', href: '/autonomous-devops-2043' },
      { name: 'AI Healthcare Platform 2043', href: '/ai-healthcare-platform-2043' },
      { name: 'Quantum Financial Trading 2043', href: '/quantum-financial-trading-2043' },
      { name: 'Autonomous Supply Chain 2043', href: '/autonomous-supply-chain-2043' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Consciousness Evolution 2043', href: '/ai-consciousness-evolution-2043' },
      { name: 'Quantum AI Neural Network 2043', href: '/quantum-ai-neural-2043' },
      { name: 'Autonomous AI Research 2043', href: '/autonomous-ai-research-2043' },
      { name: 'AI Content Personalization 2043', href: '/ai-content-personalization-2043' },
      { name: 'AI Ethics & Governance 2043', href: '/ai-ethics-governance-2043' },
      { name: 'AI Autonomous Ecosystem 2043', href: '/ai-autonomous-ecosystem-2043' },
      { name: 'AI Predictive Maintenance 2043', href: '/ai-predictive-maintenance-2043' },
      { name: 'AI Customer Success 2043', href: '/ai-customer-success-2043' },
      { name: 'AI Business Intelligence 2043', href: '/ai-business-intelligence-2043' },
      { name: 'AI Marketing Automation 2043', href: '/ai-marketing-automation-2043' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Cloud Infrastructure 2043', href: '/quantum-cloud-infrastructure-2043' },
      { name: 'Quantum Database Platform 2043', href: '/quantum-database-2043' },
      { name: 'Quantum Edge Computing 2043', href: '/quantum-edge-computing-2043' },
      { name: 'Quantum API Gateway 2043', href: '/quantum-api-gateway-2043' },
      { name: 'Quantum Cybersecurity 2043', href: '/quantum-cybersecurity-2043' },
      { name: 'Quantum Internet Security 2043', href: '/quantum-internet-security-2043' },
      { name: 'Quantum Financial Trading 2043', href: '/quantum-financial-trading-2043' },
      { name: 'Quantum Neural Network 2043', href: '/quantum-ai-neural-2043' }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Services', href: '/services' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Support', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

const UltraFuturisticFooter2040: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${section.color} p-2`}>
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <p className="text-sm text-gray-400">{section.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block text-sm transition-colors duration-200 group ${
                      link.featured 
                        ? 'text-cyan-400 hover:text-cyan-300' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{link.name}</span>
                      {link.featured && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          Featured
                        </span>
                      )}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact & Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3">
                <Brain className="w-full h-full text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-sm text-gray-400">Revolutionary 2040-2041 Technology</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            
            <div className="space-y-4">
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-2">
                  <Phone className="w-full h-full text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </div>
                </div>
              </a>

              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-2">
                  <Mail className="w-full h-full text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </div>
                </div>
              </a>

              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-2">
                  <Globe className="w-full h-full text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Website</div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    {contactInfo.website.replace('https://', '')}
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 p-2">
                  <MapPin className="w-full h-full text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="text-white font-medium">
                    {contactInfo.address}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Services</h4>
            <div className="space-y-2">
              <Link href="/services" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">All Services</Link>
              <Link href="/ai-services" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link>
              <Link href="/quantum-services" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Quantum Services</Link>
              <Link href="/it-services" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h4>
            <div className="space-y-2">
              <Link href="/solutions" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Business Solutions</Link>
              <Link href="/enterprise-solutions" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Enterprise</Link>
              <Link href="/emerging-tech" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Emerging Tech</Link>
              <Link href="/space-technology" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Space Tech</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
              <Link href="/careers" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Careers</Link>
              <Link href="/news" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">News</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              <Link href="/blog" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="/whitepapers" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Whitepapers</Link>
              <Link href="/webinars" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Webinars</Link>
              <Link href="/support" className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors">Support</Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Zion Tech Group. All rights reserved. Revolutionary 2040-2041 Technology.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-2 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-cyan-500/25"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-full h-full" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;
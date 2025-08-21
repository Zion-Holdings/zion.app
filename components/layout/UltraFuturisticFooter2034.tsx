import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Zap, Sparkles, Shield, 
  Phone, Mail, MapPin, Globe, ArrowRight,
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github,
  CheckCircle, Award, Star, Crown, Gem,
  Heart, ShieldCheck, Users, Briefcase, BookOpen,
  Target, Microscope, Cpu, Database, Cloud, Lock,
  Home, Building, DollarSign, FileText, MessageSquare, MessageCircle, Newspaper, Handshake, LifeBuoy, Activity,
  BarChart, Code, Settings, HelpCircle, Calendar, CreditCard, ShoppingCart, Gift, Award as AwardIcon,
  Zap as ZapIcon, Target as TargetIcon, Microscope as MicroscopeIcon, Star as StarIcon,
  Calculator, Video
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services',
    icon: Brain,
    services: [
      { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: '$299/month' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', price: '$199/month' },
      { name: 'AI Email Marketing Automation', href: '/ai-email-marketing-automation', price: '$79/month' },
      { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: '$89/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: Atom,
    services: [
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', price: '$599/month' },
      { name: 'Quantum-Secure Database Platform', href: '/quantum-secure-database-platform', price: '$899/month' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', price: '$399/month' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: Cpu,
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', price: '$799/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', price: '$599/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', price: '$449/month' },
      { name: 'AI-Powered IT Operations Center', href: '/ai-powered-it-operations-center', price: '$699/month' }
    ]
  },
  {
    title: '🔌 API & Development Tools',
    icon: Code,
    services: [
      { name: 'AI-Powered API Management', href: '/ai-powered-api-management', price: '$349/month' },
      { name: 'AI-Powered Project Management Pro', href: '/ai-project-management-pro', price: '$179/month' },
      { name: 'AI-Powered Customer Support Automation', href: '/ai-customer-support-automation', price: '$129/month' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: '2024 Services', href: '/services-2024', icon: Sparkles },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing-2033', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'Blog', href: '/blog', icon: MessageSquare },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Status', href: '/status', icon: Activity }
];

const developerLinks = [
  { name: 'Documentation', href: '/docs', icon: FileText },
  { name: 'API Reference', href: '/api', icon: Code },
  { name: 'SDKs & Libraries', href: '/sdk', icon: Code },
  { name: 'Code Examples', href: '/examples', icon: Code },
  { name: 'Developer Blog', href: '/dev-blog', icon: MessageSquare },
  { name: 'Community', href: '/community', icon: Users }
];

const businessLinks = [
  { name: 'Enterprise', href: '/enterprise', icon: Building },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'ROI Calculator', href: '/roi-calculator', icon: Calculator },
  { name: 'White Papers', href: '/white-papers', icon: FileText },
  { name: 'Webinars', href: '/webinars', icon: Video }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized',
  'Quantum Security Certified',
  'AI Ethics Compliant'
];

const UltraFuturisticFooter2034: React.FC = () => {
  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Company info and contact */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-25"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md">
                Leading the future of technology with revolutionary AI services, quantum computing solutions, and enterprise-grade IT infrastructure. 
                Empowering businesses to thrive in the digital age.
              </p>

              {/* Contact information */}
              <div className="space-y-3">
                <a 
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center text-gray-300 hover:text-cyan-300 transition-colors group"
                >
                  <Phone className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>{contactInfo.mobile}</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-gray-300 hover:text-cyan-300 transition-colors group"
                >
                  <Mail className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/50 border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-all duration-200 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
                Our Services
              </h4>
              <div className="space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="mb-4">
                    <h5 className="text-sm font-medium text-cyan-300 mb-2">{category.title}</h5>
                    <div className="space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-sm text-gray-400 hover:text-cyan-300 transition-colors group"
                        >
                          <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                            <span>{service.name}</span>
                            <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-cyan-400" />
                Quick Links
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center text-sm text-gray-400 hover:text-cyan-300 transition-colors group"
                  >
                    <link.icon className="w-4 h-4 mr-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-white mb-6 mt-8 flex items-center">
                <Users className="w-5 h-5 mr-2 text-cyan-400" />
                Company
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center text-sm text-gray-400 hover:text-cyan-300 transition-colors group"
                  >
                    <link.icon className="w-4 h-4 mr-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications and trust indicators */}
        <div className="py-8 border-t border-cyan-500/20">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6">
              <span className="text-sm text-gray-400">Trusted by enterprises worldwide:</span>
              <div className="flex items-center space-x-4">
                {certifications.slice(0, 4).map((cert) => (
                  <div key={cert} className="flex items-center text-xs text-cyan-300">
                    <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex items-center space-x-2">
                {socialLinks.slice(0, 3).map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-cyan-500/20">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-cyan-300 transition-colors">Security</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
              <span>by Zion Tech Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: -1,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: -1,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: -1,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2034;
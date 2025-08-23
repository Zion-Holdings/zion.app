import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, ArrowRight, 
  Facebook, Twitter, Linkedin, Github, Youtube,
  Heart, Shield, Users, Award, TrendingUp,
  Star, Brain, Atom, Rocket, Cloud, Shield as ShieldIcon,
  Building, Target, BookOpen, Lightbulb, Sparkles,
  ChevronUp, ExternalLink, Zap, Eye, Layers,
  Crown, BarChart3, Settings, ShoppingBag, FileText,
  Video, Handshake, Cpu, Infinity, Code, Briefcase
} from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

interface FooterLink {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  neonColor?: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
  icon?: React.ReactNode;
  neonColor?: string;
}

const footerSections: FooterSection[] = [
  {
    title: 'Core Services',
    icon: <Star className="w-5 h-5" />,
    neonColor: 'shadow-cyan-400/50',
    links: [
      { 
        label: 'AI & Machine Learning', 
        href: '/services?category=ai-ml', 
        description: 'Advanced AI solutions', 
        icon: <Brain className="w-4 h-4" />,
        neonColor: 'shadow-purple-400/50'
      },
      { 
        label: 'Quantum Computing', 
        href: '/services?category=quantum', 
        description: 'Next-gen quantum tech', 
        icon: <Atom className="w-4 h-4" />,
        neonColor: 'shadow-blue-400/50'
      },
      { 
        label: 'Space Technology', 
        href: '/services?category=space-tech', 
        description: 'Innovative space solutions', 
        icon: <Rocket className="w-4 h-4" />,
        neonColor: 'shadow-pink-400/50'
      },
      { 
        label: 'Cybersecurity', 
        href: '/services?category=cybersecurity', 
        description: 'Enterprise security', 
        icon: <ShieldIcon className="w-4 h-4" />,
        neonColor: 'shadow-green-400/50'
      },
      { 
        label: 'Cloud Solutions', 
        href: '/services?category=cloud', 
        description: 'Scalable cloud infrastructure', 
        icon: <Cloud className="w-4 h-4" />,
        neonColor: 'shadow-cyan-400/50'
      },
      { 
        label: 'AI Consciousness', 
        href: '/services?category=ai-consciousness', 
        description: 'Revolutionary conscious AI', 
        icon: <Eye className="w-4 h-4" />,
        neonColor: 'shadow-purple-400/50'
      },
      { 
        label: 'View All Services', 
        href: '/services', 
        description: 'Complete service portfolio',
        icon: <ArrowRight className="w-4 h-4" />
      }
    ]
  },
  {
    title: 'Enterprise Solutions',
    icon: <Building className="w-5 h-5" />,
    neonColor: 'shadow-indigo-400/50',
    links: [
      { 
        label: 'Enterprise AI Platform', 
        href: '/quantum-enterprise-ai-platform', 
        description: 'Quantum-enhanced AI',
        icon: <Brain className="w-4 h-4" />,
        neonColor: 'shadow-purple-400/50'
      },
      { 
        label: 'Autonomous Security', 
        href: '/autonomous-enterprise-security-suite', 
        description: 'Self-defending enterprise',
        icon: <Shield className="w-4 h-4" />,
        neonColor: 'shadow-green-400/50'
      },
      { 
        label: 'Quantum Cloud', 
        href: '/quantum-cloud-infrastructure-platform', 
        description: 'Next-gen cloud infrastructure',
        icon: <Cloud className="w-4 h-4" />,
        neonColor: 'shadow-blue-400/50'
      },
      { 
        label: 'Enterprise Automation', 
        href: '/ai-powered-enterprise-automation-suite', 
        description: 'Intelligent automation',
        icon: <Zap className="w-4 h-4" />,
        neonColor: 'shadow-yellow-400/50'
      },
      { 
        label: 'Data Analytics', 
        href: '/quantum-data-analytics-platform', 
        description: 'Quantum-powered insights',
        icon: <BarChart3 className="w-4 h-4" />,
        neonColor: 'shadow-cyan-400/50'
      },
      { 
        label: 'Resource Management', 
        href: '/autonomous-enterprise-resource-manager', 
        description: 'Self-optimizing resources',
        icon: <Settings className="w-4 h-4" />,
        neonColor: 'shadow-orange-400/50'
      }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <Target className="w-5 h-5" />,
    neonColor: 'shadow-green-400/50',
    links: [
      { 
        label: 'Healthcare', 
        href: '/healthcare-solutions', 
        description: 'Medical technology',
        icon: <Shield className="w-4 h-4" />,
        neonColor: 'shadow-green-400/50'
      },
      { 
        label: 'Finance', 
        href: '/financial-solutions', 
        description: 'Fintech solutions',
        icon: <BarChart3 className="w-4 h-4" />,
        neonColor: 'shadow-blue-400/50'
      },
      { 
        label: 'Manufacturing', 
        href: '/manufacturing-ai-solutions', 
        description: 'Industry 4.0',
        icon: <Settings className="w-4 h-4" />,
        neonColor: 'shadow-orange-400/50'
      },
      { 
        label: 'Retail', 
        href: '/retail-technology-solutions', 
        description: 'E-commerce tech',
        icon: <ShoppingBag className="w-4 h-4" />,
        neonColor: 'shadow-purple-400/50'
      },
      { 
        label: 'Government', 
        href: '/government-technology-solutions', 
        description: 'Public sector',
        icon: <Building className="w-4 h-4" />,
        neonColor: 'shadow-indigo-400/50'
      },
      { 
        label: 'Education', 
        href: '/education-technology-solutions', 
        description: 'EdTech solutions',
        icon: <BookOpen className="w-4 h-4" />,
        neonColor: 'shadow-cyan-400/50'
      }
    ]
  },
  {
    title: 'Innovations & Research',
    icon: <Lightbulb className="w-5 h-5" />,
    neonColor: 'shadow-yellow-400/50',
    links: [
      { 
        label: 'Quantum AI', 
        href: '/quantum-ai', 
        description: 'AI powered by quantum computing',
        icon: <Atom className="w-4 h-4" />,
        neonColor: 'shadow-blue-400/50'
      },
      { 
        label: 'Space Tech', 
        href: '/space-technology', 
        description: 'Space exploration technology',
        icon: <Rocket className="w-4 h-4" />,
        neonColor: 'shadow-pink-400/50'
      },
      { 
        label: 'Brain-Computer Interface', 
        href: '/brain-computer-interface-2040', 
        description: 'Neural interface tech',
        icon: <Cpu className="w-4 h-4" />,
        neonColor: 'shadow-cyan-400/50'
      },
      { 
        label: 'Metaverse Platform', 
        href: '/metaverse-platform', 
        description: 'Virtual reality solutions',
        icon: <Layers className="w-4 h-4" />,
        neonColor: 'shadow-purple-400/50'
      },
      { 
        label: 'Research & Development', 
        href: '/research-development', 
        description: 'Cutting-edge research',
        icon: <Lightbulb className="w-4 h-4" />,
        neonColor: 'shadow-yellow-400/50'
      },
      { 
        label: 'Innovation Lab', 
        href: '/innovation-lab', 
        description: 'Experimental projects',
        icon: <Sparkles className="w-4 h-4" />,
        neonColor: 'shadow-pink-400/50'
      }
    ]
  },
  {
    title: 'Resources & Support',
    icon: <BookOpen className="w-5 h-5" />,
    neonColor: 'shadow-purple-400/50',
    links: [
      { 
        label: 'Blog', 
        href: '/blog', 
        description: 'Industry insights',
        icon: <FileText className="w-4 h-4" />,
        neonColor: 'shadow-blue-400/50'
      },
      { 
        label: 'Whitepapers', 
        href: '/white-papers', 
        description: 'In-depth research',
        icon: <FileText className="w-4 h-4" />,
        neonColor: 'shadow-indigo-400/50'
      },
      { 
        label: 'Webinars', 
        href: '/webinars', 
        description: 'Educational content',
        icon: <Video className="w-4 h-4" />,
        neonColor: 'shadow-purple-400/50'
      },
      { 
        label: 'Documentation', 
        href: '/docs', 
        description: 'Technical guides',
        icon: <Code className="w-4 h-4" />,
        neonColor: 'shadow-cyan-400/50'
      },
      { 
        label: 'API Reference', 
        href: '/api-documentation', 
        description: 'Developer resources',
        icon: <Code className="w-4 h-4" />,
        neonColor: 'shadow-green-400/50'
      },
      { 
        label: 'Support Center', 
        href: '/support', 
        description: 'Help & assistance',
        icon: <Phone className="w-4 h-4" />,
        neonColor: 'shadow-orange-400/50'
      }
    ]
  },
  {
    title: 'Company',
    icon: <Users className="w-5 h-5" />,
    neonColor: 'shadow-indigo-400/50',
    links: [
      { 
        label: 'About Us', 
        href: '/about', 
        description: 'Our mission and values',
        icon: <Users className="w-4 h-4" />,
        neonColor: 'shadow-cyan-400/50'
      },
      { 
        label: 'Leadership', 
        href: '/about#leadership', 
        description: 'Meet our team',
        icon: <Crown className="w-4 h-4" />,
        neonColor: 'shadow-yellow-400/50'
      },
      { 
        label: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Briefcase className="w-4 h-4" />,
        neonColor: 'shadow-green-400/50'
      },
      { 
        label: 'News & Updates', 
        href: '/news', 
        description: 'Latest company news',
        icon: <FileText className="w-4 h-4" />,
        neonColor: 'shadow-blue-400/50'
      },
      { 
        label: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories',
        icon: <BarChart3 className="w-4 h-4" />,
        neonColor: 'shadow-purple-400/50'
      },
      { 
        label: 'Partners', 
        href: '/partners', 
        description: 'Strategic partnerships',
        icon: <Handshake className="w-4 h-4" />,
        neonColor: 'shadow-orange-400/50'
      }
    ]
  }
];

const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/company/ziontechgroup', 
    icon: <Linkedin className="w-5 h-5" />, 
    neonColor: 'shadow-blue-400/50',
    external: true
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/ziontechgroup', 
    icon: <Twitter className="w-5 h-5" />, 
    neonColor: 'shadow-cyan-400/50',
    external: true
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/Zion-Holdings', 
    icon: <Github className="w-5 h-5" />, 
    neonColor: 'shadow-purple-400/50',
    external: true
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/@ziontechgroup', 
    icon: <Youtube className="w-5 h-5" />, 
    neonColor: 'shadow-red-400/50',
    external: true
  }
];

const UltraFuturisticFooter2040: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show scroll-to-top button when scrolled down
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-cyan-400/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 border border-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 border border-purple-400/10 rounded-lg animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-400/30"
                  style={{
                    boxShadow: section.neonColor ? `0 0 15px ${section.neonColor}` : 'none',
                  }}>
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                    >
                      {link.icon && (
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-6 h-6 rounded-md bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                            link.neonColor ? 'ring-1 ring-cyan-400/30' : ''
                          }`}
                            style={{
                              boxShadow: link.neonColor ? `0 0 10px ${link.neonColor}` : 'none',
                            }}>
                            {link.icon}
                          </div>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                            {link.label}
                          </span>
                          {link.external && (
                            <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                          )}
                        </div>
                        {link.description && (
                          <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors duration-300">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-cyan-400/30 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                  }}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium">Innovation 2040</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/contact">
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center space-x-2">
                      Get Started Today
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Social Links & Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-110"
                      style={{
                        boxShadow: social.neonColor ? `0 0 15px ${social.neonColor}` : 'none',
                      }}
                    >
                      <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest insights on AI, quantum computing, and space technology
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-400/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>for the future</span>
              <Infinity className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg shadow-cyan-500/25 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
            style={{
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
            }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default UltraFuturisticFooter2040;
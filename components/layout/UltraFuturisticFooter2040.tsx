import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Zap, Globe, Lock, Phone, Mail, MapPin,
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, BarChart3,
  Code, Smartphone, Server, Users, Award, TrendingUp, BookOpen,
  FileText, GraduationCap, Headphones, MessageCircle, ExternalLink
} from 'lucide-react';

const UltraFuturisticFooter2040: React.FC = () => {
  const footerSections = [
    {
      title: 'Revolutionary Services',
      items: [
        {
          label: 'AI & Consciousness',
          href: '/ai-services',
          icon: Brain,
          description: 'Advanced AI solutions'
        },
        {
          label: 'Quantum Computing',
          href: '/quantum-computing',
          icon: Atom,
          description: 'Next-gen quantum solutions'
        },
        {
          label: 'Space Technology',
          href: '/space-tech',
          icon: Globe,
          description: 'Innovative space solutions'
        },
        {
          label: 'Autonomous Systems',
          href: '/autonomous-systems',
          icon: Cpu,
          description: 'Self-operating platforms'
        }
      ]
    },
    {
      title: 'Enterprise Solutions',
      items: [
        {
          label: 'IT Infrastructure',
          href: '/it-services',
          icon: Server,
          description: 'Enterprise IT solutions'
        },
        {
          label: 'Cloud Platform',
          href: '/cloud-platform',
          icon: Cloud,
          description: 'Scalable cloud solutions'
        },
        {
          label: 'Cybersecurity',
          href: '/cybersecurity',
          icon: Shield,
          description: 'Advanced security solutions'
        },
        {
          label: 'Data Analytics',
          href: '/data-analytics',
          icon: BarChart3,
          description: 'Business intelligence'
        }
      ]
    },
    {
      title: 'Innovation & Research',
      items: [
        {
          label: 'Micro SAAS',
          href: '/micro-saas',
          icon: Rocket,
          description: 'Innovative micro services'
        },
        {
          label: 'DevOps Automation',
          href: '/devops-automation',
          icon: Code,
          description: 'Development automation'
        },
        {
          label: 'Mobile & Web',
          href: '/mobile-web-solutions',
          icon: Smartphone,
          description: 'Digital experience solutions'
        },
        {
          label: 'AI Research',
          href: '/ai-research',
          icon: Brain,
          description: 'Cutting-edge AI research'
        }
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        {
          label: 'About Us',
          href: '/about',
          icon: Users,
          description: 'Our story and mission'
        },
        {
          label: 'Blog & Insights',
          href: '/blog',
          icon: BookOpen,
          description: 'Latest technology insights'
        },
        {
          label: 'Case Studies',
          href: '/case-studies',
          icon: FileText,
          description: 'Success stories'
        },
        {
          label: 'Documentation',
          href: '/docs',
          icon: FileText,
          description: 'Technical resources'
        }
      ]
    }
  ];

  const additionalLinks = [
    {
      title: 'Support & Training',
      items: [
        { label: 'Help Center', href: '/help' },
        { label: 'Training Programs', href: '/training' },
        { label: 'API Documentation', href: '/api-docs' },
        { label: 'Developer Resources', href: '/developer' }
      ]
    },
    {
      title: 'Legal & Compliance',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Security', href: '/security' },
        { label: 'Compliance', href: '/compliance' }
      ]
    },
    {
      title: 'Partnerships',
      items: [
        { label: 'Partner Program', href: '/partners' },
        { label: 'Reseller Program', href: '/resellers' },
        { label: 'Technology Partners', href: '/tech-partners' },
        { label: 'Become a Partner', href: '/become-partner' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '💻' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative bg-black/95 border-t border-cyan-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          {/* Top Section with Logo and Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-gray-400 text-sm">Revolutionary Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <span className="max-w-xs">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Get in Touch</h4>
              <p className="text-gray-400">
                Ready to transform your business? Contact us for a consultation on our revolutionary technology solutions.
              </p>
              
              <div className="space-y-4">
                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>Contact Us</span>
                    </span>
                  </button>
                </Link>
                
                <Link href="/get-started">
                  <button className="w-full px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    <span className="flex items-center justify-center space-x-2">
                      <ArrowRight className="w-5 h-5" />
                      <span>Get Started</span>
                    </span>
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-400">Industry Leader 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-400">Enterprise Security</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white border-b border-cyan-500/30 pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-start space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300">
                            <item.icon className="w-3 h-3 text-cyan-400" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium group-hover:text-cyan-400 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500 group-hover:text-cyan-300 transition-colors">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {additionalLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white border-b border-cyan-500/30 pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-cyan-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Innovation Leader 2025</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;
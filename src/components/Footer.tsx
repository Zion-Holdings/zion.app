import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Users, 
  Globe, 
  Zap,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Lock,
  Cpu,
  Network,
  BarChart3,
  Palette,
  Smartphone,
  Server,
  Wifi,
  Target,
  Lightbulb,
  TrendingUp,
  Briefcase,
  FileText,
  MessageCircle,
  Settings,
  UserPlus,
  Star,
  Award,
  Clock,
  ShieldCheck,
  Zap as Lightning,
  Globe as World,
  Heart,
  Eye,
  Users as Team,
  BookOpen,
  Video,
  Headphones,
  HelpCircle,
  MessageSquare,
  Calendar,
  Mail as Email,
  Phone as PhoneIcon,
  Sparkles,
  Bot,
  CpuIcon,
  Globe2,
  Layers,
  EyeIcon,
  NetworkIcon,
  ZapIcon
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI Services',
      icon: Brain,
      links: [
        { name: 'AI Content Generation', href: '/ai-services-showcase', icon: Bot, description: 'GPT-4 powered content creation', badge: 'Popular' },
        { name: 'AI Business Intelligence', href: '/ai-services-showcase', icon: BarChart3, description: 'Predictive analytics & insights', badge: 'New' },
        { name: 'AI Customer Support', href: '/ai-services-showcase', icon: MessageCircle, description: 'Automated customer service', badge: 'Featured' },
        { name: 'AI Recruitment Platform', href: '/ai-services-showcase', icon: Users, description: 'Intelligent hiring solutions', badge: 'Popular' },
        { name: 'Quantum AI Platform', href: '/ai-services-showcase', icon: CpuIcon, description: 'Quantum computing + AI', badge: 'Premium' },
        { name: 'AI Ethics & Governance', href: '/ai-services-showcase', icon: ShieldCheck, description: 'Responsible AI development', badge: 'Enterprise' }
      ]
    },
    {
      title: 'IT Solutions',
      icon: Server,
      links: [
        { name: 'Edge Computing Platform', href: '/services', icon: Globe2, description: 'Distributed edge computing', badge: 'New' },
        { name: 'DevOps Automation', href: '/services', icon: ZapIcon, description: 'CI/CD & infrastructure automation', badge: 'Popular' },
        { name: 'API Gateway Management', href: '/services', icon: NetworkIcon, description: 'Enterprise API management', badge: 'Enterprise' },
        { name: 'Cloud-Native Development', href: '/services', icon: Cloud, description: 'Microservices & containers', badge: 'Premium' },
        { name: 'Low-Code Platform', href: '/services', icon: Layers, description: 'Visual development platform', badge: 'Featured' },
        { name: 'PWA Builder', href: '/services', icon: Smartphone, description: 'Progressive web apps', badge: 'New' }
      ]
    },
    {
      title: 'Development',
      icon: Code,
      links: [
        { name: 'Web Development', href: '/services', icon: Globe, description: 'Modern web applications', badge: 'Popular' },
        { name: 'Mobile Development', href: '/services', icon: Smartphone, description: 'iOS & Android apps', badge: 'Featured' },
        { name: 'Metaverse Development', href: '/services', icon: EyeIcon, description: 'VR/AR & 3D worlds', badge: 'New' },
        { name: 'Blockchain Development', href: '/services', icon: Lock, description: 'DeFi & smart contracts', badge: 'Premium' },
        { name: 'IoT Development', href: '/services', icon: Wifi, description: 'Connected devices', badge: 'Enterprise' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      links: [
        { name: 'Cyber Threat Detection', href: '/services', icon: ShieldCheck, description: 'AI-powered security', badge: 'Premium' },
        { name: 'Blockchain Identity', href: '/services', icon: Lock, description: 'Decentralized verification', badge: 'New' },
        { name: 'Managed SOC', href: '/services', icon: EyeIcon, description: '24/7 security monitoring', badge: 'Enterprise' },
        { name: 'Compliance & Audit', href: '/services', icon: Award, description: 'Regulatory compliance', badge: 'Featured' }
      ]
    },
    {
      title: 'Enterprise',
      icon: Building,
      links: [
        { name: 'Digital Transformation', href: '/enterprise-solutions', icon: TrendingUp, description: 'Business modernization', badge: 'Enterprise' },
        { name: 'Legacy System Migration', href: '/enterprise-solutions', icon: Server, description: 'System modernization', badge: 'Premium' },
        { name: 'Cloud Migration', href: '/enterprise-solutions', icon: Cloud, description: 'Cloud infrastructure', badge: 'Popular' },
        { name: 'Data Center Solutions', href: '/enterprise-solutions', icon: Database, description: 'Infrastructure optimization', badge: 'Featured' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      links: [
        { name: 'About Us', href: '/about', icon: Team, description: 'Our story & mission' },
        { name: 'Our Team', href: '/about', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
        { name: 'News', href: '/news', icon: MessageSquare, description: 'Company updates' },
        { name: 'Press Kit', href: '/press', icon: FileText, description: 'Media resources' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Support Center', href: '/support', icon: HelpCircle },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'API Reference', href: '/api', icon: Code },
    { name: 'Status Page', href: '/status', icon: CheckCircle },
    { name: 'Security', href: '/security', icon: Shield }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video, color: 'hover:text-red-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-zion-blue-dark border-t border-zion-cyan/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-10 right-1/3 w-0.5 h-0.5 bg-zion-cyan rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-20 left-1/2 w-0.5 h-0.5 bg-zion-cyan rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-zion-cyan rounded-xl blur-xl opacity-60"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-zion-cyan/70 text-sm font-medium">Innovation • Intelligence • Impact</p>
              </div>
            </div>
            
            <p className="text-zion-cyan/80 text-sm leading-relaxed mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, IT solutions, and digital transformation expertise. 
              We deliver innovative technology solutions that drive growth and competitive advantage.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-cyan/80 hover:text-zion-cyan transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-cyan/80 hover:text-zion-cyan transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-cyan/80 hover:text-zion-cyan transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-zion-cyan/10 text-zion-cyan/70 ${social.color} hover:bg-zion-cyan/20 transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Service Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors duration-300">
                        <link.icon className="w-3 h-3 text-zion-cyan" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-zion-cyan/80 group-hover:text-zion-cyan transition-colors duration-300 font-medium">
                            {link.name}
                          </span>
                          {'badge' in link && link.badge && (
                            <span className={`px-2 py-1 text-xs rounded-full font-bold ${
                              link.badge === 'New' ? 'bg-green-500 text-white' :
                              link.badge === 'Popular' ? 'bg-zion-cyan text-white' :
                              link.badge === 'Featured' ? 'bg-purple-500 text-white' :
                              link.badge === 'Premium' ? 'bg-yellow-500 text-white' :
                              'bg-blue-500 text-white'
                            }`}>
                              {link.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zion-cyan/60 mt-1">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Links & Newsletter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-zion-cyan/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-zion-cyan" />
                <span>Quick Links</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-2 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                  >
                    <link.icon className="w-4 h-4 text-zion-cyan/70 group-hover:text-zion-cyan transition-colors duration-300" />
                    <span className="text-sm text-zion-cyan/80 group-hover:text-zion-cyan transition-colors duration-300">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-zion-cyan" />
                <span>Stay Updated</span>
              </h4>
              <p className="text-zion-cyan/70 text-sm mb-4">
                Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/30">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-zion-cyan/20"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-cyan/60">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-zion-cyan/60">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-sm">by Zion Tech Group</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
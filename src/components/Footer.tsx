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
  Phone as PhoneIcon
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Core Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services-showcase', icon: Brain, description: 'Advanced AI solutions' },
        { name: 'Cybersecurity', href: '/services', icon: Shield, description: 'Threat protection & compliance' },
        { name: 'Cloud Solutions', href: '/services', icon: Cloud, description: 'Quantum cloud infrastructure' },
        { name: 'Web Development', href: '/services', icon: Code, description: 'Modern web applications' },
        { name: 'Mobile Development', href: '/services', icon: Smartphone, description: 'iOS & Android apps' },
        { name: 'Data Analytics', href: '/analytics', icon: BarChart3, description: 'Business intelligence' }
      ]
    },
    {
      title: 'Specialized Services',
      links: [
        { name: 'DevOps & Automation', href: '/services', icon: Server, description: 'CI/CD & infrastructure' },
        { name: 'IoT Solutions', href: '/services', icon: Wifi, description: 'Connected devices' },
        { name: 'Digital Marketing', href: '/services', icon: Target, description: 'SEO, PPC & social media' },
        { name: 'IT Consulting', href: '/services', icon: Lightbulb, description: 'Strategic planning' },
        { name: 'Software Testing', href: '/services', icon: Cpu, description: 'QA & quality assurance' },
        { name: 'Blockchain', href: '/services', icon: Lock, description: 'DeFi & smart contracts' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building, description: 'Large-scale business' },
        { name: 'Startup Solutions', href: '/services', icon: TrendingUp, description: 'Growth-focused services' },
        { name: 'Government Solutions', href: '/services', icon: Shield, description: 'Public sector technology' },
        { name: 'Healthcare Solutions', href: '/services', icon: Heart, description: 'Medical technology' },
        { name: 'Financial Solutions', href: '/services', icon: BarChart3, description: 'Fintech & banking' },
        { name: 'Education Solutions', href: '/services', icon: BookOpen, description: 'EdTech platforms' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users, description: 'Our story & mission' },
        { name: 'Our Team', href: '/about', icon: Team, description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Users, description: 'Strategic partnerships' },
        { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch' },
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical guides' },
        { name: 'Case Studies', href: '/case-studies', icon: Eye, description: 'Success stories' },
        { name: 'Webinars', href: '/webinars', icon: Video, description: 'Live sessions' },
        { name: 'Support Center', href: '/support', icon: HelpCircle, description: 'Help & assistance' },
        { name: 'Community', href: '/community', icon: Users, description: 'Developer community' },
        { name: 'Newsletter', href: '/newsletter', icon: Mail, description: 'Stay updated' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-300' }
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-zion-cyan/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                  <div className="text-zion-cyan text-sm">Quantum Innovation</div>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Transforming businesses through cutting-edge technology solutions. 
                We specialize in AI, cybersecurity, cloud computing, and digital transformation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-glass-morphism hover:bg-glass-morphism-strong text-zion-slate-light ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                                  <h3 className="text-lg font-semibold text-white mb-4">
                    <span>{section.title}</span>
                  </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="group flex items-start space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                      >
                        <div className="w-5 h-5 rounded-md bg-zion-cyan/10 flex items-center justify-center group-hover:bg-zion-cyan/20 transition-all duration-300 mt-0.5">
                          <link.icon className="w-3 h-3 text-zion-cyan" />
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-zion-cyan transition-colors duration-300">
                            {link.name}
                          </div>
                          <div className="text-xs text-zion-slate-light/70 group-hover:text-zion-slate-light/90 transition-colors duration-300">
                            {link.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-16 p-8 rounded-2xl bg-glass-morphism-strong backdrop-blur-xl border border-zion-cyan/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-zion-slate-light mb-6">
                Get the latest insights on technology trends, AI developments, and industry news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-zion-cyan/20 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-cyan/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <div className="flex items-center space-x-4">
                  <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">Privacy Policy</Link>
                  <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">Terms of Service</Link>
                  <Link to="/sitemap" className="hover:text-zion-cyan transition-colors duration-300">Sitemap</Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-zion-slate-light">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-zion-cyan" />
                  <span className="text-xs">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-zion-cyan" />
                  <span className="text-xs">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-zion-cyan" />
                  <span className="text-xs">5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
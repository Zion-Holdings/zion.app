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
  CheckCircle
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/ai-services-showcase', icon: Brain },
        { name: 'Cybersecurity', href: '/services', icon: Shield },
        { name: 'Cloud Solutions', href: '/services', icon: Cloud },
        { name: 'Digital Transformation', href: '/services', icon: Rocket },
        { name: 'All Services', href: '/all-services', icon: Zap }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/about', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Contact', href: '/contact', icon: Phone }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog', icon: Brain },
        { name: 'Documentation', href: '/docs', icon: Brain },
        { name: 'Case Studies', href: '/case-studies', icon: Brain },
        { name: 'Webinars', href: '/webinars', icon: Brain },
        { name: 'Support', href: '/support', icon: Phone }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/enterprise-solutions', icon: Building },
        { name: 'Startups', href: '/startup-solutions', icon: Rocket },
        { name: 'Healthcare', href: '/healthcare-solutions', icon: Shield },
        { name: 'Finance', href: '/finance-solutions', icon: Shield },
        { name: 'Education', href: '/education-solutions', icon: Brain }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
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
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-zion-purple/5 to-zion-blue/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple blur-lg opacity-50" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-zion-cyan font-semibold">Quantum Innovation</p>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Pioneering the future with cutting-edge AI solutions, quantum computing, and innovative digital transformation services that empower businesses to thrive in the digital age.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
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
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-glass-morphism hover:bg-glass-morphism-strong text-zion-slate-light hover:text-zion-cyan transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 group"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-16 p-8 glass-morphism rounded-2xl border border-zion-cyan/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">
                Stay Ahead with Quantum Insights
              </h3>
              <p className="text-zion-slate-light mb-6">
                Get the latest updates on AI breakthroughs, quantum computing advances, and digital transformation strategies delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-glass-morphism border border-zion-cyan/20 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-neon">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-green" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-green" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-green" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-green" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-cyan/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-zion-slate-light text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-zion-slate-light">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="hover:text-zion-cyan transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Energy Waves */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 64"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34, 221, 210, 0.3)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,32 Q300,16 600,32 T1200,32 L1200,64 L0,64 Z"
            fill="url(#footerWaveGradient)"
            animate={{
              d: [
                "M0,32 Q300,16 600,32 T1200,32 L1200,64 L0,64 Z",
                "M0,32 Q300,48 600,32 T1200,32 L1200,64 L0,64 Z",
                "M0,32 Q300,16 600,32 T1200,32 L1200,64 L0,64 Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </footer>
  );
};
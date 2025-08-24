import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook,
  ArrowUp,
  Shield,
  Users,
  Award,
  Clock
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/ai-services" },
        { name: "IT Support", href: "/it-onsite-services" },
        { name: "Development", href: "/development-services" },
        { name: "Consulting", href: "/consulting" },
        { name: "Cloud Solutions", href: "/cloud-services" }
      ]
    },
    {
      title: "Talent",
      links: [
        { name: "Find Experts", href: "/talent" },
        { name: "Hire AI Specialists", href: "/ai-talent" },
        { name: "Developer Network", href: "/developers" },
        { name: "Freelance Platform", href: "/freelance" },
        { name: "Enterprise Teams", href: "/enterprise-talent" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Community", href: "/community" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "#", color: "hover:text-gray-400" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:text-blue-600" }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Company info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech</span>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed max-w-md">
              Empowering businesses with cutting-edge AI solutions, global talent networks, and innovative technology services. Building the future, one connection at a time.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>hello@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>Global Network</span>
              </div>
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
              <Shield className="w-8 h-8 text-zion-cyan" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
            <p className="text-sm text-zion-slate-light">Bank-level encryption</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
              <Users className="w-8 h-8 text-zion-purple" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">10K+ Users</h4>
            <p className="text-sm text-zion-slate-light">Trusted worldwide</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
              <Award className="w-8 h-8 text-zion-cyan" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">ISO Certified</h4>
            <p className="text-sm text-zion-slate-light">Quality standards</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
              <Clock className="w-8 h-8 text-zion-purple" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
            <p className="text-sm text-zion-slate-light">Always available</p>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="border-t border-zion-purple/20 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center text-zion-slate-light border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white shadow-lg shadow-zion-purple/30 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
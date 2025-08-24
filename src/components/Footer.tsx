import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram,
  Zap,
  Shield,
  Users,
  Code,
  Brain,
  Cloud,
  Database,
  Lock,
  TrendingUp,
  Star
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission", href: "/about#mission" },
        { name: "Team", href: "/about#team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "IT Services", href: "/services" },
        { name: "AI Solutions", href: "/services#ai" },
        { name: "Micro SAAS", href: "/micro-saas-services" },
        { name: "Cloud Migration", href: "/services#cloud" },
        { name: "Cybersecurity", href: "/services#security" }
      ]
    },
    {
      title: "Marketplace",
      links: [
        { name: "Browse Services", href: "/marketplace" },
        { name: "Find Talent", href: "/talent" },
        { name: "Equipment", href: "/equipment" },
        { name: "Categories", href: "/categories" },
        { name: "Featured", href: "/marketplace?featured=true" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Support", href: "/contact" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Status", href: "/status" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-zion-cyan" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for business automation"
    },
    {
      icon: <Shield className="w-6 h-6 text-zion-purple" />,
      title: "Enterprise Security",
      description: "Military-grade cybersecurity and data protection"
    },
    {
      icon: <Users className="w-6 h-6 text-zion-cyan" />,
      title: "Expert Team",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <Code className="w-6 h-6 text-zion-purple" />,
      title: "Custom Development",
      description: "Tailored solutions for your unique business needs"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section - Company Info & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-zion-slate-light text-sm">Innovating Tomorrow, Today</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light leading-relaxed max-w-md">
              Leading provider of innovative AI, IT, and micro SAAS solutions. We help businesses 
              transform their operations with cutting-edge technology and expert guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-zion-purple/20 border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/30 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-zion-slate-light text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 mb-12 backdrop-blur-md"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get insights on AI, IT solutions, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8 border-t border-zion-purple/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm mb-2">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs">
                Empowering businesses with innovative technology solutions
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-40" />
    </footer>
  );
}
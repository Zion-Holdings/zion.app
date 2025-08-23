import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Sparkles, Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, Youtube,
  ArrowUp, Heart, Zap, Shield, Cpu, Rocket
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const serviceCategories = [
    { name: 'AI Services', href: '/ai-services', icon: Cpu },
    { name: 'IT Services', href: '/it-services', icon: Shield },
    { name: 'Quantum Computing', href: '/quantum-services', icon: Zap },
    { name: 'Space Technology', href: '/space-technology', icon: Rocket },
    { name: 'Biotech AI', href: '/biotech-ai', icon: Cpu },
    { name: 'Autonomous Systems', href: '/autonomous-manufacturing', icon: Rocket }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation at Light Speed</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge micro SAAS solutions. 
              From quantum computing to autonomous systems, we're revolutionizing industries.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors duration-300">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-purple-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceCategories.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block flex items-center space-x-2"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-pink-400" />
              Connect With Us
            </h4>
            
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-4">
                Ready to transform your business? Get in touch with our experts.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get Started Today
              </motion.a>
            </div>

            <div>
              <h5 className="text-sm font-medium text-gray-300 mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-white/10 to-white/5 hover:from-cyan-500/20 hover:to-purple-500/20 border border-white/20 hover:border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Services', value: '200+', color: 'from-cyan-400 to-blue-500' },
            { label: 'Customers', value: '10K+', color: 'from-purple-400 to-pink-500' },
            { label: 'Uptime', value: '99.99%', color: 'from-green-400 to-emerald-500' },
            { label: 'ROI', value: '800%+', color: 'from-yellow-400 to-orange-500' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on emerging technologies, industry trends, and innovation updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Zion Tech Group. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>in Delaware, USA</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default EnhancedFooter;
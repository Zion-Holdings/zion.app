import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  ArrowUp,
  Heart,
  Shield,
  Users,
  Zap,
  Star
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    { name: 'AI Services', href: '/all-services?category=AI Services' },
    { name: 'Micro SAAS', href: '/all-services?category=Micro SAAS' },
    { name: 'IT Solutions', href: '/all-services?category=IT Services' },
    { name: 'Cybersecurity', href: '/all-services?category=Security' },
    { name: 'Cloud Migration', href: '/all-services?category=Cloud' },
    { name: 'Business Automation', href: '/all-services?category=Automation' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Training', href: '/training' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security with SOC 2 compliance' },
    { icon: Users, title: '24/7 Support', description: 'Round-the-clock expert assistance' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed and performance' },
    { icon: Star, title: '99.9% Uptime', description: 'Reliable service you can count on' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-zion-dark via-zion-dark/95 to-zion-primary/10 border-t border-zion-primary/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-zion-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-zion-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-primary to-zion-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Zion Tech Group</div>
                  <div className="text-sm text-zion-light/60">Innovation at Your Fingertips</div>
                </div>
              </div>
              
              <p className="text-zion-light/70 mb-6 leading-relaxed">
                Transforming businesses with cutting-edge AI, micro SAAS, and IT solutions. 
                We help organizations of all sizes achieve digital transformation and competitive advantage.
              </p>

              {/* Features */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-lg flex items-center justify-center border border-zion-primary/30">
                      <feature.icon className="w-4 h-4 text-zion-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{feature.title}</div>
                      <div className="text-xs text-zion-light/60">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {serviceCategories.map((category, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={category.href}
                      className="text-zion-light/70 hover:text-zion-primary transition-colors duration-300 text-sm"
                    >
                      {category.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="text-zion-light/70 hover:text-zion-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.href}
                        className="text-zion-light/70 hover:text-zion-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
                <ul className="space-y-3">
                  {legalLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.href}
                        className="text-zion-light/70 hover:text-zion-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="mt-16 pt-8 border-t border-zion-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-lg flex items-center justify-center border border-zion-primary/30">
                      <Phone className="w-5 h-5 text-zion-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-zion-light/60">Phone</div>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-white hover:text-zion-primary transition-colors duration-300 font-medium"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-lg flex items-center justify-center border border-zion-primary/30">
                      <Mail className="w-5 h-5 text-zion-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-zion-light/60">Email</div>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-white hover:text-zion-primary transition-colors duration-300 font-medium"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-lg flex items-center justify-center border border-zion-primary/30">
                      <MapPin className="w-5 h-5 text-zion-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-zion-light/60">Address</div>
                      <div className="text-white font-medium">{contactInfo.address}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-lg flex items-center justify-center border border-zion-primary/30">
                      <Globe className="w-5 h-5 text-zion-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-zion-light/60">Website</div>
                      <a 
                        href={contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-zion-primary transition-colors duration-300 font-medium"
                      >
                        {contactInfo.website.replace('https://', '')}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links & Newsletter */}
              <div className="space-y-8">
                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-xl flex items-center justify-center border border-zion-primary/30 hover:border-zion-primary/60 hover:scale-110 transition-all duration-300 group"
                      >
                        <social.icon className="w-5 h-5 text-zion-primary group-hover:text-white transition-colors duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                  <p className="text-zion-light/70 text-sm mb-4">
                    Get the latest insights on technology trends and business solutions.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-zion-dark/60 border border-zion-primary/30 rounded-lg text-white placeholder-zion-light/50 focus:outline-none focus:border-zion-primary focus:ring-2 focus:ring-zion-primary/20 transition-all duration-300"
                    />
                    <button className="px-6 py-2 bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-zion-light/60 text-sm">
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
                <span>•</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for our clients</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-zion-light/60">
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>SOC 2 Type II Compliant</span>
                <span>•</span>
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 text-white rounded-full shadow-2xl shadow-zion-primary/25 flex items-center justify-center transition-all duration-300 z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
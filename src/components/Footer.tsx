
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Globe,
  Zap,
  Brain,
  Code,
  Shield
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Machine Learning", href: "/services?category=ai" },
        { name: "IT Services", href: "/services?category=it" },
        { name: "Micro SAAS", href: "/services?category=saas" },
        { name: "Cybersecurity", href: "/services?category=security" },
        { name: "Cloud Solutions", href: "/services?category=cloud" },
        { name: "Data Analytics", href: "/services?category=analytics" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise AI", href: "/solutions/enterprise-ai" },
        { name: "Digital Transformation", href: "/solutions/digital-transformation" },
        { name: "Smart Automation", href: "/solutions/automation" },
        { name: "IoT Integration", href: "/solutions/iot" },
        { name: "Blockchain Services", href: "/solutions/blockchain" },
        { name: "Quantum Computing", href: "/solutions/quantum" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "News & Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Status Page", href: "/status" },
        { name: "Contact Support", href: "/support" },
        { name: "Training", href: "/training" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-500 rounded-full blur-sm"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">Z</span>
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                  <div className="text-sm text-cyan-400">Future Technology</div>
                </div>
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, advanced IT infrastructure, 
                and innovative micro SAAS solutions that transform businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                {section.title === "Services" && <Zap className="w-4 h-4 text-cyan-400" />}
                {section.title === "Solutions" && <Brain className="w-4 h-4 text-purple-400" />}
                {section.title === "Company" && <Code className="w-4 h-4 text-green-400" />}
                {section.title === "Support" && <Shield className="w-4 h-4 text-orange-400" />}
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest insights on AI, technology trends, 
              and exclusive updates from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </motion.div>

            {/* Back to Top */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-gray-800/30"
          >
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Accessibility
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </footer>
  );
};

export default Footer;
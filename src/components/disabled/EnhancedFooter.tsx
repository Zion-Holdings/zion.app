import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Globe, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                ZION TECH GROUP
              </motion.span>
            </div>
            <p className="text-zion-slate-light mb-4 max-w-xs">
              The world's leading technology company specializing in AI, cloud infrastructure, 
              cybersecurity, and digital transformation solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Twitter"
                title="Twitter"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Facebook"
                title="Facebook"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Instagram"
                title="Instagram"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="GitHub"
                title="GitHub"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </motion.a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-4">
              Get the latest insights on AI, cloud technology, and digital transformation trends.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm mb-2">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-zion-slate-light">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zion-cyan" />
                  364 E Main St STE 1008, Middletown DE 19709
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-zion-cyan" />
                  +1 302 464 0950
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-zion-cyan" />
                  kleber@ziontechgroup.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              </div>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-8 pt-6 border-t border-zion-blue-light/30">
          <div className="text-center">
            <h4 className="text-zion-cyan font-semibold mb-3">Our Core Services</h4>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-zion-slate-light">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                AI & Machine Learning
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Cloud & Infrastructure
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Cybersecurity
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Digital Transformation
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                Blockchain & Web3
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default EnhancedFooter;
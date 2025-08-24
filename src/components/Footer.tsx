import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-xs leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence, 
              connecting businesses with top-tier tech talent and cutting-edge solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light">
                <Mail className="w-4 h-4 mr-3 text-zion-cyan" />
                <span>hello@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <Phone className="w-4 h-4 mr-3 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <MapPin className="w-4 h-4 mr-3 text-zion-cyan" />
                <span>Global Network</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Tech Talent
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Green IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Stay Connected</h3>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Get the latest updates on tech trends, AI innovations, and marketplace opportunities.
            </p>
            <FooterNewsletter />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-blue-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering the future through technology and innovation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
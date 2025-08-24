import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Globe, Shield, Code, Building, Brain, Settings, BarChart3, Bot } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark border-t border-zion-purple/30 pt-16 pb-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-zion-purple/10 to-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-zion-blue/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  ZION TECH GROUP
                </span>
              </div>
              <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
                The world's leading technology marketplace dedicated to AI, innovation, and digital transformation. 
                We connect businesses with cutting-edge solutions and expert talent.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Phone className="h-4 w-4 text-zion-cyan" />
                  <a href="tel:+13024640950" className="hover:text-zion-cyan">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Mail className="h-4 w-4 text-zion-cyan" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start gap-3 text-zion-slate-light">
                  <MapPin className="h-4 w-4 text-zion-cyan mt-0.5" />
                  <span>
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-cyan hover:text-white transition-all duration-300 rounded-lg hover:scale-110"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-cyan hover:text-white transition-all duration-300 rounded-lg hover:scale-110"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-cyan hover:text-white transition-all duration-300 rounded-lg hover:scale-110"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-cyan hover:text-white transition-all duration-300 rounded-lg hover:scale-110"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-cyan hover:text-white transition-all duration-300 rounded-lg hover:scale-110"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-zion-cyan" />
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services?category=AI Services" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <Brain className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span>AI Services</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services?category=IT Services" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <Settings className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span>IT Services</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services?category=Micro SAAS" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <Building className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span>Micro SAAS</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services?category=Development" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <Code className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span>Development</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services?category=Analytics" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <BarChart3 className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span>Analytics</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services?category=Security" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <Shield className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span>Security</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-zion-cyan" />
              Marketplace
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/marketplace" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Products</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Services</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/talent" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Talent</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Equipment</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/categories" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Categories</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/green-it" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Green IT</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Building className="h-5 w-5 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>About Us</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Blog</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/partners" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Partners</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Careers</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Contact</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                  <span>Sitemap</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">Stay Updated with Zion Tech</h3>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Get the latest insights on AI technology, business innovation, and exclusive marketplace opportunities. 
                Join thousands of tech professionals staying ahead of the curve.
              </p>
            </div>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering businesses through AI and technology innovation
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
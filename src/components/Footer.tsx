import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Phone, Mail, MapPin, Sparkles, Zap, Shield, Brain, Code, Database, BarChart3, Link as LinkIcon, UserCheck } from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate border-t border-zion-blue-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zion-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-zion-cyan/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-12 pb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's premier marketplace for high-tech and artificial intelligence solutions. 
              We connect businesses with cutting-edge technology services and innovative AI platforms.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Onsite Support
                </Link>
              </li>
              <li>
                <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Talent Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-zion-cyan" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas-services?category=AI" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Brain className="h-4 w-4 mr-2 text-zion-purple-light" />
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=IT" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Database className="h-4 w-4 mr-2 text-zion-purple-light" />
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Development" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Code className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Development
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Security" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Security
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Workflow className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-zion-blue-light">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated with Zion Tech</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI technology, business automation, and innovative solutions 
              delivered directly to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1 opacity-80">
                Empowering businesses with cutting-edge technology solutions
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
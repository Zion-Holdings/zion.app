import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Zap, Brain, Shield, Globe, Code, TrendingUp, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark border-t border-zion-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-xs leading-relaxed">
              The world's first comprehensive marketplace dedicated to high-tech and artificial intelligence solutions. 
              Transforming businesses through innovative micro SAAS services and cutting-edge technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-zion-slate-light">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-zion-cyan flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
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
              <Zap className="h-5 w-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  IT & AI Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Global Onsite Services
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Tech Equipment
                </Link>
              </li>
              <li>
                <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Zion Hire AI
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-zion-purple" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Talent Directory
                </Link>
              </li>
              <li>
                <Link to="/match" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Matcher
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Developer Tools
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Community Hub
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Building className="h-5 w-5 mr-2 text-zion-blue" />
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sitemap
                </Link>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Stay Updated</h4>
              <p className="text-zion-slate-light text-sm mb-4">
                Get the latest insights on AI, tech trends, and marketplace opportunities.
              </p>
              <FooterNewsletter />
            </div>
          </div>
        </div>

        {/* Service Categories Quick Links */}
        <div className="border-t border-zion-blue-light pt-8 mb-8">
          <h3 className="text-white font-semibold mb-6 text-center text-lg">Our Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <Link to="/micro-saas-services?category=AI" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Brain className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">AI Services</span>
            </Link>
            <Link to="/micro-saas-services?category=IT" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Shield className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">IT Solutions</span>
            </Link>
            <Link to="/micro-saas-services?category=Development" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Code className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Development</span>
            </Link>
            <Link to="/micro-saas-services?category=Analytics" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <TrendingUp className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Analytics</span>
            </Link>
            <Link to="/micro-saas-services?category=Security" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Shield className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Security</span>
            </Link>
            <Link to="/micro-saas-services?category=Automation" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Zap className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Automation</span>
            </Link>
            <Link to="/micro-saas-services?category=Integration" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Globe className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Integration</span>
            </Link>
            <Link to="/micro-saas-services?category=Consulting" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Users className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Consulting</span>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-blue-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Sitemap
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors"
              >
                Main Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
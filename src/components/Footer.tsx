import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
              <Badge variant="secondary" className="ml-3 bg-green-500/20 text-green-400 text-xs">
                Tech Group
              </Badge>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-xs leading-relaxed">
              The world's first comprehensive marketplace dedicated to high-tech, artificial intelligence, and innovative business solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan mt-0.5" />
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-purple/10"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-purple/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-purple/10"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-purple/10"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-purple/10"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services & Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <span className="w-8 h-0.5 bg-zion-cyan mr-3"></span>
              Services & Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Micro SAAS Solutions
                  <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-400 text-xs">New</Badge>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=security" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Business Automation
                </Link>
              </li>
              <li>
                <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Global IT Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <span className="w-8 h-0.5 bg-zion-purple mr-3"></span>
              Marketplace
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Products & Solutions
                </Link>
              </li>
              <li>
                <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  AI & Tech Talent
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Hardware & Equipment
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Zion Hire AI
                  <Badge variant="secondary" className="ml-2 bg-zion-purple/20 text-zion-purple-light text-xs">AI</Badge>
                </Link>
              </li>
              <li>
                <Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Green IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <span className="w-8 h-0.5 bg-zion-cyan mr-3"></span>
              Company & Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-blue-light pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-xl">Stay Updated with Zion Tech Group</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, technology trends, marketplace opportunities, and exclusive offers delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-blue-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering businesses with innovative technology solutions since 2024
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Support
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
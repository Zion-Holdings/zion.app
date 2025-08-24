import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Sparkles, Brain, Shield, Cloud, Users, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark border-t border-zion-purple/30 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">ZION TECH GROUP</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's first comprehensive marketplace dedicated to high-tech and artificial intelligence solutions. 
              We connect businesses with cutting-edge AI tools, cybersecurity services, and innovative tech solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-zion-cyan" />
              Marketplace
            </h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Green IT</Link></li>
            </ul>
          </div>

          {/* AI & Tech Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-zion-cyan" />
              AI & Tech Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/services/ai-content-generation" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">AI Content Generation</Link></li>
              <li><Link to="/services/ai-code-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">AI Code Assistant</Link></li>
              <li><Link to="/services/ai-threat-detection" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">AI Threat Detection</Link></li>
              <li><Link to="/services/multi-cloud-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Multi-Cloud Management</Link></li>
              <li><Link to="/services/ai-crm" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">AI-Powered CRM</Link></li>
              <li><Link to="/pricing" className="text-zion-cyan font-semibold hover:text-zion-cyan-light transition-colors duration-300">View All Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 backdrop-blur-sm rounded-lg p-8 border border-zion-purple/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated with Zion Tech</h3>
              <p className="text-zion-cyan/80 max-w-2xl mx-auto">
                Get the latest news on AI technology, marketplace opportunities, and exclusive insights delivered to your inbox.
              </p>
            </div>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-purple/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light/70 text-xs mt-1">
                Empowering businesses with AI-powered solutions since 2024
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="/pricing" className="text-zion-cyan hover:text-zion-cyan-light text-sm font-semibold transition-colors duration-300">Pricing</Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark border-t border-zion-purple/20 pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION TECH GROUP</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's premier marketplace for cutting-edge technology, AI solutions, and innovative micro SAAS services. 
              Connecting businesses with top-tier tech talent and transformative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan mt-0.5" />
                <span className="max-w-xs">
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
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
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
              <Zap className="h-5 w-5 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/category/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI & Machine Learning
              </Link></li>
              <li><Link to="/category/cloud-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Cloud & Infrastructure
              </Link></li>
              <li><Link to="/category/security-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Cybersecurity
              </Link></li>
              <li><Link to="/category/data-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Data & Analytics
              </Link></li>
              <li><Link to="/category/development-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Development Services
              </Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                IT Onsite Services
              </Link></li>
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-zion-cyan" />
              Marketplace
            </h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Products
              </Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Talent
              </Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Equipment
              </Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Categories
              </Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI Assistant
              </Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Green IT
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                About Us
              </Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Blog
              </Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Partners
              </Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Careers
              </Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact
              </Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Request Quote
              </Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-zion-purple/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-zion-cyan" />
              Stay Updated
            </h3>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Get the latest insights on AI technology, marketplace opportunities, and industry trends delivered to your inbox.
            </p>
          </div>
          <FooterNewsletter />
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zion-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
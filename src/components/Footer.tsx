import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-4 max-w-xs">
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-zion-slate-light text-sm">
                <Phone className="h-4 w-4 mr-2 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light text-sm">
                <Mail className="h-4 w-4 mr-2 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-zion-slate-light text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-zion-cyan flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
            
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

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
              <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
              Marketplace
            </h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Products
              </Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Services
              </Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Talent
              </Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Equipment
              </Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Categories
              </Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Green IT
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
              <span className="w-2 h-2 bg-zion-purple rounded-full mr-2"></span>
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                About Us
              </Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Blog
              </Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Partners
              </Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Careers
              </Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact
              </Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Sitemap
              </Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
              <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
              Stay Connected
            </h3>
            <p className="text-zion-slate-light mb-4">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          {/* Additional links */}
          <div className="mt-6 pt-4 border-t border-zion-blue-light/30">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-zion-slate-light">
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors">
                Main Website
              </a>
              <Link to="/request-quote" className="hover:text-zion-cyan transition-colors">
                Request Quote
              </Link>
              <Link to="/it-onsite-services" className="hover:text-zion-cyan transition-colors">
                IT Onsite Services
              </Link>
              <Link to="/zion-hire-ai" className="hover:text-zion-cyan transition-colors">
                Zion Hire AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
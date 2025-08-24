import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md text-lg">
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <a href="mailto:commercial@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  commercial@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
              <li><Link to="/match" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Community</Link></li>
              <li><Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Developer Portal</Link></li>
              <li><Link to="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">API Documentation</Link></li>
              <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-blue-light pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-xl">Subscribe to our newsletter</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-blue-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
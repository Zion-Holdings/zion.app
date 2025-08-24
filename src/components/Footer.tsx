import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION TECH GROUP</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions. 
              Offering 33+ specialized services across 12 categories to transform businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">All 33+ Services</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">AI & Machine Learning (6)</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Cybersecurity (4)</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Cloud Computing (5)</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Data Analytics (4)</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Blockchain & DeFi (2)</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">IoT & Edge Computing (2)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Our Team</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Our Mission</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Technology Innovation</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Get Free Quote</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">24/7 Support</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Technical Documentation</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">API Integration</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Training & Workshops</Link></li>
            </ul>
            
            <div className="mb-4">
              <h4 className="text-white font-medium mb-3">Stay Updated</h4>
              <p className="text-zion-slate-light text-sm mb-3">
                Get the latest insights on AI, emerging technologies, and digital transformation trends.
              </p>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-zion-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-20 pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-zion-slate-light text-sm mb-2">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mb-2">
                Empowering the future of technology and AI with 33+ innovative services
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-zion-slate-light">
                <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                <span>ISO 27001 Certified</span>
                <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
                <span>24/7 Global Support</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors hover:scale-105 transform">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors hover:scale-105 transform">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors hover:scale-105 transform">Cookie Policy</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors hover:scale-105 transform">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
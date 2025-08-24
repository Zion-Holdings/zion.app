import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zion-blue-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 text-sm leading-relaxed">
              Empowering businesses with cutting-edge AI, IT solutions, and innovative technology services. 
              Your trusted partner in digital transformation and technological advancement.
            </p>
            
            {/* Contact Info */}
            <div className="mb-6 space-y-2 text-sm">
              <p className="text-zion-slate-light">
                <span className="font-semibold text-zion-cyan">Phone:</span> +1 302 464 0950
              </p>
              <p className="text-zion-slate-light">
                <span className="font-semibold text-zion-cyan">Email:</span> kleber@ziontechgroup.com
              </p>
              <p className="text-zion-slate-light">
                <span className="font-semibold text-zion-cyan">Address:</span> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
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

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/comprehensive-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-zion-slate-light">AI & Machine Learning</span>
              </li>
              <li>
                <span className="text-zion-slate-light">Cybersecurity</span>
              </li>
              <li>
                <span className="text-zion-slate-light">Cloud & DevOps</span>
              </li>
              <li>
                <span className="text-zion-slate-light">Data & Analytics</span>
              </li>
              <li>
                <span className="text-zion-slate-light">Digital Transformation</span>
              </li>
              <li>
                <span className="text-zion-slate-light">IoT & Edge Computing</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-4 text-sm">
              Subscribe to our newsletter for the latest tech insights and service updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-zion-blue-light border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zion-purple/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
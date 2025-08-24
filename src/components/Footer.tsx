// FooterNewsletter component removed - not available
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
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION TECH GROUP</span>
              <p className="text-sm text-zion-slate-light mt-1">Future Technology Group</p>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              Leading the future of technology with innovative AI autonomous systems, quantum computing infrastructure, and revolutionary micro SAAS solutions that transform businesses and industries.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-zion-cyan mt-0.5" />
                <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/services/ai-autonomous-systems" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">AI & Autonomous Systems</Link></li>
              <li><Link to="/services/quantum-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Quantum Technology</Link></li>
              <li><Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">IT Infrastructure</Link></li>
              <li><Link to="/services/micro-saas-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Micro SAAS Solutions</Link></li>
              <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Cybersecurity</Link></li>
              <li><Link to="/services/industry-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Industry Solutions</Link></li>
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Marketplace</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Solutions
            </h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Enterprise Solutions</Link></li>
              <li><Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Healthcare Solutions</Link></li>
              <li><Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Financial Solutions</Link></li>
              <li><Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Manufacturing Solutions</Link></li>
              <li><Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Retail Solutions</Link></li>
              <li><Link to="/solutions/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Government Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">About Us</Link></li>
              <li><Link to="/mission" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Our Mission</Link></li>
              <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Team</Link></li>
              <li><Link to="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Leadership</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Careers</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Partners</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Additional Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Resources
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Blog & Articles</Link>
              <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Documentation</Link>
              <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Case Studies</Link>
              <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">White Papers</Link>
              <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Webinars</Link>
              <Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Training</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/get-started" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Get Started</Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Contact Sales</Link>
              <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Support</Link>
              <Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Status Page</Link>
              <Link to="/developer-resources" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Developer Resources</Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">Sitemap</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Stay Updated
            </h4>
            <p className="text-zion-slate-light text-sm mb-4">
              Get the latest insights on technology trends and innovations.
            </p>
            {/* FooterNewsletter component removed - not available */}
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
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
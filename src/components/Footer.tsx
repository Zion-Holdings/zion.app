import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-1/4 w-1 h-full bg-gradient-to-t from-transparent via-zion-purple to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-1 h-full bg-gradient-to-t from-transparent via-zion-cyan to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-lg text-lg leading-relaxed">
              Leading provider of innovative IT solutions, AI services, and comprehensive tech services. 
              Empowering businesses with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/comprehensive-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>AI Services</span>
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>Cybersecurity</span>
                </Link>
              </li>
              <li>
                <Link to="/services-pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>IT Onsite Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Support & Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>Contact Support</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2">
                  <span>Blog & News</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <FooterNewsletter />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-6 bg-zion-blue-light/20 rounded-lg border border-zion-blue-light/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-zion-cyan" />
            </div>
            <div>
              <p className="text-zion-slate-light text-sm">Phone</p>
              <p className="text-white font-medium">+1 302 464 0950</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-zion-cyan" />
            </div>
            <div>
              <p className="text-zion-slate-light text-sm">Email</p>
              <p className="text-white font-medium">kleber@ziontechgroup.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-zion-cyan" />
            </div>
            <div>
              <p className="text-zion-slate-light text-sm">Address</p>
              <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';

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
                <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/cloud-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/data-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/blockchain" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link to="/iot-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  IoT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Developer Portal
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-blue-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zion-slate-light text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Cookies
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

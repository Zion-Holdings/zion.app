import { FooterNewsletter } from "@/components/FooterNewsletter";
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  Globe,
  Shield,
  Users,
  Zap,
  Brain,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/20 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's leading marketplace for AI-powered micro SAAS solutions, enterprise IT services, and cutting-edge technology innovations. 
              Connecting businesses with the future of technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Globe className="w-4 h-4" />
                <span>https://ziontechgroup.com</span>
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

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Services</Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS Tools</Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Development</Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Consulting</Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud Migration</Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite IT Support</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Brain className="w-5 h-5 mr-2 text-zion-purple" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Find Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Marketplace</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Hiring</Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog & News</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-purple/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 mr-2 text-zion-cyan" />
              Stay Updated
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI technology, micro SAAS trends, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering businesses with AI-driven solutions since 2024
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-zion-purple/10">
          <div className="flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-xs opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SOC2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-zion-cyan" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-zion-purple" />
              <span>Global Services</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-yellow-400" />
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
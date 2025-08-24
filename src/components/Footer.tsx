<<<<<<< HEAD
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-4 max-w-xs">
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
            </p>
=======
// FooterNewsletter component removed for now
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-8 right-8 p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connecting global talent, services, and innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
              </a>
            </div>
          </div>

<<<<<<< HEAD
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Onsite Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Developer Portal</Link></li>
              <li><Link to="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">API Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-zion-slate-light mb-4">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
=======
          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Green IT</Link></li>
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">AI Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Sitemap</Link></li>
              <li><Link to="/press" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Updates</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Support</Link></li>
              <li><Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">System Status</Link></li>
              <li><Link to="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">API Docs</Link></li>
            </ul>
            
            <div className="mb-4">
              <h4 className="text-white font-medium mb-3">Stay Updated</h4>
              <p className="text-zion-slate-light text-sm mb-3">
                Get the latest news on tech, AI, and marketplace opportunities.
              </p>
              {/* FooterNewsletter component removed for now */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering the future of technology and AI
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Accessibility</Link>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
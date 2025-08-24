<<<<<<< HEAD
// FooterNewsletter component removed for now
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ChevronUp } from "lucide-react";
=======
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
<<<<<<< HEAD
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

=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8">
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
<<<<<<< HEAD
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connecting global talent, services, and innovation.
=======
            <div className="mb-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION TECH GROUP</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md text-lg">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. Connecting talent, services, and innovation globally.
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
<<<<<<< HEAD
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
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
=======
              <div className="flex items-center text-zion-slate-light">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>Global Operations</span>
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-full"
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-full"
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-full"
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-full"
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
<<<<<<< HEAD
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
=======
                href="https://github.com/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-full"
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

<<<<<<< HEAD
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">All Services</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Cloud Computing</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Web Development</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Mobile Development</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Data Analytics</Link></li>
=======
          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Hiring</Link></li>
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
<<<<<<< HEAD
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Our Team</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Our Mission</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Get Quote</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Case Studies</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Careers</Link></li>
            </ul>
          </div>

          {/* Support & Updates */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Updates</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Support</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">System Status</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">API Docs</Link></li>
            </ul>
            
            <div className="mb-4">
              <h4 className="text-white font-medium mb-3">Stay Updated</h4>
              <p className="text-zion-slate-light text-sm mb-3">
                Get the latest news on tech, AI, and marketplace opportunities.
              </p>
              {/* FooterNewsletter component removed for now */}
=======
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Connected</h3>
            <p className="text-zion-slate-light mb-4">
              Get the latest updates on tech innovations, AI breakthroughs, and marketplace opportunities.
            </p>
            <FooterNewsletter />
            
            {/* Quick Actions */}
            <div className="mt-6 space-y-3">
              <Link 
                to="/request-quote" 
                className="inline-block w-full text-center bg-zion-purple hover:bg-zion-purple/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Request Quote
              </Link>
              <Link 
                to="/talent/apply" 
                className="inline-block w-full text-center border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Join as Talent
              </Link>
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
<<<<<<< HEAD
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering the future of technology and AI
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
=======
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm mb-2">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs">
                Empowering the future through technology and innovation
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
>>>>>>> 90bccc39f24 (Enhance website header, footer, and navigation with improved UX and Zion Tech Group branding)
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
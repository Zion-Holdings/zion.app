import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Globe, Clock, Shield, Users, Zap, Code, Building } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,113,242,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md text-lg leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connecting businesses with cutting-edge technology solutions and top-tier talent.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-5 w-5 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan">+1 302 464 0950</a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-5 w-5 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light">
                <MapPin className="h-5 w-5 text-zion-cyan mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Globe className="h-5 w-5 text-zion-cyan" />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                  ziontechgroup.com
                </a>
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

          {/* Marketplace Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-zion-cyan" />
              Marketplace
            </h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/services-showcase" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services Showcase</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
              <li><Link to="/ai-content-generator" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Content Generator</Link></li>
              <li><Link to="/cybersecurity-assessment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Building className="h-5 w-5 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-zion-cyan" />
              Stay Connected
            </h3>
            <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
              Stay updated with the latest news on tech, AI, and marketplace opportunities. 
              Get exclusive insights and early access to new features.
            </p>
            <FooterNewsletter />
            
            {/* Business Hours */}
            <div className="mt-6 p-4 bg-zion-purple/10 rounded-lg border border-zion-purple/20">
              <div className="flex items-center gap-2 text-zion-cyan mb-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Business Hours</span>
              </div>
              <p className="text-zion-slate-light text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                Sat: 10:00 AM - 4:00 PM EST<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-12 p-6 bg-zion-purple/5 rounded-xl border border-zion-purple/20">
          <h3 className="text-white font-semibold mb-4 text-lg text-center">Our Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "AI & Machine Learning", icon: "🤖", count: "50+" },
              { name: "Cybersecurity", icon: "🔒", count: "30+" },
              { name: "Cloud Services", icon: "☁️", count: "40+" },
              { name: "Web Development", icon: "💻", count: "60+" },
              { name: "Mobile Apps", icon: "📱", count: "35+" },
              { name: "Data Analytics", icon: "📊", count: "25+" },
              { name: "DevOps", icon: "⚙️", count: "20+" },
              { name: "UI/UX Design", icon: "🎨", count: "30+" },
              { name: "Blockchain", icon: "⛓️", count: "15+" },
              { name: "IoT Solutions", icon: "🌐", count: "20+" },
              { name: "VR/AR", icon: "🥽", count: "10+" },
              { name: "Consulting", icon: "💡", count: "45+" }
            ].map((category, index) => (
              <div key={index} className="text-center p-3 bg-zion-blue-dark/50 rounded-lg hover:bg-zion-purple/20 transition-colors">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-zion-slate-light text-xs font-medium">{category.name}</div>
                <div className="text-zion-cyan text-xs">{category.count} services</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering businesses with cutting-edge technology solutions
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact Us</Link>
              <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
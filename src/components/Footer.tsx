import React from 'react';
import { Phone, Mail, MapPin, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const contactInfo = [
    {
      label: "Phone",
      value: "+1 302 464 0950",
      href: "tel:+13024640950",
      icon: <Phone className="h-5 w-5" />
    },
    {
      label: "Email",
      value: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      icon: <Mail className="h-5 w-5" />
    },
    {
      label: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="h-5 w-5" />,
      color: "hover:text-sky-400"
    },
    {
      name: "GitHub",
      href: "https://github.com/ziontechgroup",
      icon: <Github className="h-5 w-5" />,
      color: "hover:text-gray-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate border-t border-zion-blue-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zion-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-zion-cyan/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-12 pb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's premier marketplace for high-tech and artificial intelligence solutions. 
              We connect businesses with cutting-edge technology services and innovative AI platforms.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-zion-slate-dark/50 border border-zion-slate-light/20 text-zion-slate-light ${social.color} transition-all duration-300 hover:border-zion-cyan/50 hover:bg-zion-slate-dark/70`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS Services</a></li>
              <li><a href="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</a></li>
              <li><a href="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</a></li>
              <li><a href="/development" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Development</a></li>
              <li><a href="/consulting" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise</a></li>
              <li><a href="/startups" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Startups</a></li>
              <li><a href="/small-business" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Small Business</a></li>
              <li><a href="/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Government</a></li>
              <li><a href="/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</a></li>
              <li><a href="/press" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Press</a></li>
              <li><a href="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-slate-light/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-xl mb-3">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, technology trends, and marketplace opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-1 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-slate-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zion-slate-light text-sm">
              © 2024 ZION TECH GROUP. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group relative p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-110">
          <Sparkles className="h-6 w-6 text-white" />
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-zion-slate-dark text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Get AI Solutions
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zion-slate-dark"></div>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
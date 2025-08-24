import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Globe, Clock, Shield, Users, Zap, Code, Building } from "lucide-react";

const footerSections = [
  {
    title: "Marketplace",
    links: [
      { label: "Browse Services", path: "/services" },
      { label: "Find Talent", path: "/talent" },
      { label: "Services Showcase", path: "/services-showcase" },
      { label: "Equipment Catalog", path: "/equipment" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Our Mission", path: "/mission" },
      { label: "Team", path: "/team" },
      { label: "Careers", path: "/careers" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", path: "/help" },
      { label: "Contact Support", path: "/support" },
      { label: "Documentation", path: "/docs" },
      { label: "Status", path: "/status" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Cookie Policy", path: "/cookies" },
      { label: "GDPR", path: "/gdpr" }
    ]
  }
];

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
              {[
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/ziontechgroup" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/zion-tech-group" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/ziontechgroup" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/ziontechgroup" },
                { icon: Github, label: "GitHub", href: "https://github.com/ziontechgroup" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Support */}
        <div className="mb-12 p-6 bg-zion-purple/5 rounded-xl border border-zion-purple/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            </div>
            
            {/* Business Hours */}
            <div className="p-4 bg-zion-purple/10 rounded-lg border border-zion-purple/20">
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

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
    </footer>
  );
}
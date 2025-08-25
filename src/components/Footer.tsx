import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, ArrowRight, Globe, Twitter, Linkedin, Github, Youtube, Facebook, Instagram } from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Marketplace",
      links: [
        { name: "Products", path: "/marketplace" },
        { name: "Services", path: "/services" },
        { name: "Micro SAAS", path: "/micro-saas-services" },
        { name: "Pricing", path: "/pricing" },
        { name: "Talent", path: "/talent" },
        { name: "Equipment", path: "/equipment" },
        { name: "Categories", path: "/categories" },
        { name: "Green IT", path: "/green-it" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Partners", path: "/partners" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
        { name: "Sitemap", path: "/sitemap" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "AI & Machine Learning", path: "/ai-services" },
        { name: "Enterprise Solutions", path: "/enterprise-solutions" },
        { name: "Cloud & DevOps", path: "/cloud-devops-solutions" },
        { name: "Digital Transformation", path: "/digital-transformation" },
        { name: "IT Onsite Services", path: "/it-onsite-services" },
        { name: "Micro SAAS Development", path: "/micro-saas-services" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Documentation", path: "/docs" },
        { name: "API Reference", path: "/api" },
        { name: "Status Page", path: "/status" },
        { name: "Contact Support", path: "/contact" },
        { name: "Community", path: "/community" },
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/ziontechgroup" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/ziontechgroup" },
    { name: "GitHub", icon: Github, href: "https://github.com/ziontechgroup" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@ziontechgroup" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/ziontechgroup" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/ziontechgroup" },
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                    ZION
                  </span>
                  <p className="text-xs text-zion-slate-light">Tech Group</p>
                </div>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-8 leading-relaxed max-w-md">
              Transforming businesses through innovative micro SAAS solutions, 
              cutting-edge IT services, and advanced AI technologies. We're your 
              partner in digital transformation and technological advancement.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/20 transition-colors">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/20 transition-colors">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              
              <div className="flex items-start gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/20 transition-colors mt-0.5">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                </div>
                <span className="max-w-xs">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-blue-light pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-zion-slate-light mb-8">
              Get the latest insights on technology trends, AI developments, and business innovation.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-blue-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-zion-slate-light">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-blue-light/10 hover:bg-zion-cyan/20 border border-zion-blue-light/20 hover:border-zion-cyan/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-200 group"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
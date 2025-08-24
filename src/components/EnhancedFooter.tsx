import React from 'react';
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
  ArrowRight,
  Sparkles,
  Shield,
  Users,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
      <Sparkles className="w-5 h-5 mr-2 text-zion-cyan" />
      {title}
    </h3>
    {children}
  </div>
);

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 group flex items-center"
    >
      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      {children}
    </Link>
  </li>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-zion-cyan/10"
    aria-label={label}
    title={label}
  >
    {icon}
  </a>
);

const ContactInfo: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <div className="flex items-start space-x-3 mb-3">
    <div className="text-zion-cyan mt-1">
      {icon}
    </div>
    <div className="text-zion-slate-light text-sm">
      {children}
    </div>
  </div>
);

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 pb-8">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  ZION
                </span>
              </div>
              <p className="text-zion-slate-light mb-4 max-w-xs leading-relaxed">
                The world's first free marketplace dedicated to high-tech and artificial intelligence. 
                Connecting businesses with verified technology experts worldwide.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <ContactInfo icon={<Mail className="w-4 h-4" />}>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </ContactInfo>
              
              <ContactInfo icon={<Phone className="w-4 h-4" />}>
                <a 
                  href="tel:+13024640950" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  +1 (302) 464-0950
                </a>
              </ContactInfo>
              
              <ContactInfo icon={<MapPin className="w-4 h-4" />}>
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </ContactInfo>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <SocialLink 
                href="https://twitter.com/lovable_dev" 
                icon={<Twitter className="h-5 w-5" />} 
                label="Twitter"
              />
              <SocialLink 
                href="https://www.linkedin.com/company/zion-marketplace" 
                icon={<Linkedin className="h-5 w-5" />} 
                label="LinkedIn"
              />
              <SocialLink 
                href="https://www.facebook.com/zionmarketplace" 
                icon={<Facebook className="h-5 w-5" />} 
                label="Facebook"
              />
              <SocialLink 
                href="https://instagram.com" 
                icon={<Instagram className="h-5 w-5" />} 
                label="Instagram"
              />
              <SocialLink 
                href="https://github.com" 
                icon={<Github className="h-5 w-5" />} 
                label="GitHub"
              />
            </div>
          </div>

          {/* Marketplace */}
          <FooterSection title="Marketplace">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Marketplace</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link to="/comprehensive-services" className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                    Comprehensive Services
                  </Link>
                </li>
                <li>
                  <Link to="/talent" className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                    AI Experts
                  </Link>
                </li>
                <li>
                  <Link to="/equipment" className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                    Hardware & Equipment
                  </Link>
                </li>
                <li>
                  <Link to="/it-onsite-services" className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                    Onsite Services
                  </Link>
                </li>
              </ul>
            </div>
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company">
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/blog">Blog & News</FooterLink>
              <FooterLink to="/partners">Partners</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/sitemap">Sitemap</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </ul>
          </FooterSection>

          {/* Newsletter & Support */}
          <FooterSection title="Stay Connected">
            <p className="text-zion-slate-light mb-4 leading-relaxed">
              Get the latest updates on tech trends, AI breakthroughs, and marketplace opportunities. 
              Stay ahead of the curve with our expert insights.
            </p>
            <FooterNewsletter />
            
            {/* Quick stats */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm text-zion-slate-light">
                <Users className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>10,000+ Verified Experts</span>
              </div>
              <div className="flex items-center text-sm text-zion-slate-light">
                <Globe className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>150+ Countries Served</span>
              </div>
              <div className="flex items-center text-sm text-zion-slate-light">
                <Zap className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </FooterSection>
        </div>

        {/* Divider */}
        <div className="border-t border-zion-blue-light/30" />

        {/* Bottom section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-zion-slate-light">
                <Shield className="w-4 h-4 text-zion-cyan" />
                <span className="text-xs">SSL Secured</span>
              </div>
            </div>

            {/* Additional links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Help Center
              </Link>
              <Link to="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                API Documentation
              </Link>
              <Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                System Status
              </Link>
              <Link to="/feedback" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Feedback
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center space-x-6 text-xs text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>PCI DSS Level 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue"></div>
    </footer>
  );
}
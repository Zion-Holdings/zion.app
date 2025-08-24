import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Phone, Mail, MapPin, Sparkles, Zap, Shield, Brain, Code, Database, BarChart3, Link as LinkIcon, UserCheck, MessageSquare } from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Marketplace",
      links: [
        { name: "Products", href: "/marketplace" },
        { name: "Services", href: "/services" },
        { name: "Talent", href: "/talent" },
        { name: "Equipment", href: "/equipment" },
        { name: "Categories", href: "/categories" },
        { name: "Green IT", href: "/green-it" }
      ]
    },
    {
      title: "Micro SAAS Services",
      links: [
        { name: "AI & ML Solutions", href: "/micro-saas-services" },
        { name: "Business Tools", href: "/micro-saas-services" },
        { name: "Security Services", href: "/micro-saas-services" },
        { name: "Analytics Platform", href: "/micro-saas-services" },
        { name: "Marketing Tools", href: "/micro-saas-services" },
        { name: "Productivity Apps", href: "/micro-saas-services" }
      ]
    },
    {
      title: "Enterprise",
      links: [
        { name: "White-label Solutions", href: "/enterprise" },
        { name: "API Integration", href: "/developers" },
        { name: "Consulting Services", href: "/services" },
        { name: "Onsite Support", href: "/it-onsite-services" },
        { name: "Custom Development", href: "/services" },
        { name: "Training Programs", href: "/services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Partners", href: "/partners" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Sitemap", href: "/sitemap" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-zion-cyan" />,
      label: "Phone",
      value: "+1 302 464 0950",
      href: "tel:+13024640950"
    },
    {
      icon: <Mail className="h-5 w-5 text-zion-purple-light" />,
      label: "Email",
      value: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-zion-blue-light" />,
      label: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/lovable_dev",
      icon: <Twitter className="h-5 w-5" />,
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/zion-marketplace",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:text-blue-600"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/zionmarketplace",
      icon: <Facebook className="h-5 w-5" />,
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <Instagram className="h-5 w-5" />,
      color: "hover:text-pink-500"
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <Github className="h-5 w-5" />,
      color: "hover:text-gray-400"
    }
  ];

  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark border-t border-zion-blue-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  ZION
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse"></div>
              </div>
              <Badge className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan">
                <Sparkles className="h-3 w-3 mr-1" />
                Tech Group
              </Badge>
            </div>
            
            <p className="text-zion-slate-light text-lg leading-relaxed max-w-lg">
              The world's first comprehensive marketplace dedicated to high-tech and artificial intelligence. 
              We connect businesses with cutting-edge solutions, expert talent, and innovative micro SAAS services.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors group"
                  >
                    {contact.icon}
                    <div>
                      <div className="text-sm text-zion-slate-light">{contact.label}</div>
                      <div className="text-white group-hover:text-zion-cyan transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">Stay Updated</h3>
              <p className="text-zion-slate-light mb-4">
                Get the latest insights on AI, technology trends, and marketplace opportunities delivered to your inbox.
              </p>
            </div>
=======
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
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Onsite Support
                </Link>
              </li>
              <li>
                <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Talent Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-zion-cyan" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas-services?category=AI" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Brain className="h-4 w-4 mr-2 text-zion-purple-light" />
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=IT" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Database className="h-4 w-4 mr-2 text-zion-purple-light" />
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Development" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Code className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Development
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Security" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Security
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Workflow className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-zion-blue-light">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated with Zion Tech</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI technology, business automation, and innovative solutions 
              delivered directly to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1 opacity-80">
                Empowering businesses with cutting-edge technology solutions
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl shadow-zion-cyan/30 hover:shadow-zion-purple/30 transition-all duration-300 transform hover:scale-110 group"
          title="Get in touch with us"
        >
          <div className="relative">
            <MessageSquare className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
          </div>
        </Link>
      </div>
    </footer>
  );
}

// Badge component for the footer
function Badge({ children, className = "", ...props }: any) {
  return (
    <span 
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
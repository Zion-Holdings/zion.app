import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Zap, Shield, BarChart3, Users, Building, Globe, Star, MessageSquare } from "lucide-react";
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
            <FooterNewsletter />
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-zion-slate-light transition-colors ${social.color}`}
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                {section.title === "Micro SAAS Services" && <Sparkles className="h-4 w-4 text-zion-purple-light" />}
                {section.title === "Enterprise" && <Building className="h-4 w-4 text-zion-blue-light" />}
                {section.title === "Marketplace" && <Globe className="h-4 w-4 text-zion-cyan" />}
                {section.title === "Company" && <Star className="h-4 w-4 text-zion-purple-light" />}
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering businesses with innovative technology solutions
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Support
              </Link>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors"
              >
                Contact Sales
              </a>
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
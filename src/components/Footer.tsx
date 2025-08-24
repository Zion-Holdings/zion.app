import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Zap, Brain, Cloud, Shield, Users, Code, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Marketplace",
      links: [
        { label: "AI & ML Services", href: "/micro-saas-services" },
        { label: "IT Services", href: "/services" },
        { label: "Cloud Solutions", href: "/services" },
        { label: "Cybersecurity", href: "/services" },
        { label: "DevOps Automation", href: "/services" },
        { label: "Data Analytics", href: "/services" },
      ]
    },
    {
      title: "Talent & Resources",
      links: [
        { label: "AI Engineers", href: "/talent" },
        { label: "Data Scientists", href: "/talent" },
        { label: "DevOps Specialists", href: "/talent" },
        { label: "Full-Stack Developers", href: "/talent" },
        { label: "Equipment & Tools", href: "/equipment" },
        { label: "Learning Resources", href: "/blog" },
      ]
    },
    {
      title: "Enterprise",
      links: [
        { label: "Custom Solutions", href: "/enterprise" },
        { label: "White-Label Platform", href: "/enterprise" },
        { label: "API Access", href: "/developers" },
        { label: "Dedicated Support", href: "/enterprise" },
        { label: "Security & Compliance", href: "/services" },
        { label: "Migration Services", href: "/services" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog & Insights", href: "/blog" },
        { label: "Partners", href: "/partners" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Sitemap", href: "/sitemap" },
      ]
    }
  ];

  const contactInfo = {
    email: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <footer className="relative bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark border-t border-zion-purple/30 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-16 pb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's first comprehensive marketplace dedicated to high-tech and artificial intelligence. 
              Connecting businesses with cutting-edge AI services, IT solutions, and top tech talent.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-sm">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                {section.title === "Marketplace" && <Globe className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Talent & Resources" && <Users className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Enterprise" && <Building className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Company" && <Code className="h-5 w-5 text-zion-cyan" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-purple/20 pt-8 pb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, technology trends, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-purple/20 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light/70 text-xs mt-1">
                Empowering businesses through innovative AI and technology solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Contact Support
              </Link>
              <a 
                href={contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="border-t border-zion-purple/20 pt-8 pb-8">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-2xl p-6 text-center">
            <h4 className="text-xl font-semibold text-white mb-3">
              Ready to Transform Your Business?
            </h4>
            <p className="text-zion-slate-light mb-4 max-w-2xl mx-auto">
              Get in touch with our team to discuss your AI and technology needs. 
              We're here to help you leverage the power of artificial intelligence and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send Message
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
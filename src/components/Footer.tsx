import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      services: [
        { name: "Custom AI Development", link: "/services?category=ai-services" },
        { name: "ML Model Training", link: "/services?category=ai-services" },
        { name: "AI Strategy Consulting", link: "/services?category=ai-services" },
        { name: "Natural Language Processing", link: "/services?category=ai-services" }
      ]
    },
    {
      title: "IT Infrastructure",
      services: [
        { name: "Cloud Migration", link: "/services?category=it-services" },
        { name: "DevOps Implementation", link: "/services?category=it-services" },
        { name: "Cybersecurity Services", link: "/services?category=cybersecurity" },
        { name: "Network Architecture", link: "/services?category=it-services" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      services: [
        { name: "Business Process Automation", link: "/services?category=saas-solutions" },
        { name: "Custom CRM Development", link: "/services?category=saas-solutions" },
        { name: "BI Dashboard Creation", link: "/services?category=saas-solutions" },
        { name: "Workflow Management", link: "/services?category=saas-solutions" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Marketplace", link: "/marketplace" },
    { name: "Talent Directory", link: "/talent" },
    { name: "Equipment Catalog", link: "/equipment" },
    { name: "Community Hub", link: "/community" },
    { name: "AI Matcher", link: "/match" },
    { name: "Zion Hire AI", link: "/zion-hire-ai" },
    { name: "IT Onsite Services", link: "/it-onsite-services" },
    { name: "Request Quote", link: "/request-quote" }
  ];

  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Blog & Insights", link: "/blog" },
    { name: "Partners", link: "/partners" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
    { name: "Sitemap", link: "/sitemap" },
    { name: "Green IT", link: "/green-it" },
    { name: "Developer Portal", link: "/developers" }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
              <Badge variant="secondary" className="ml-3 bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                Enterprise Ready
              </Badge>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md text-lg leading-relaxed">
              The world's leading marketplace for high-tech and artificial intelligence solutions. 
              Connecting businesses with cutting-edge technology, expert talent, and innovative services.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:underline">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-zion-slate-light">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
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

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
            <div className="space-y-4">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-zion-cyan font-medium mb-2 text-sm uppercase tracking-wide">
                    {category.title}
                  </h4>
                  <ul className="space-y-1">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          to={service.link} 
                          className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                        >
                          <ArrowRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Stay Updated</h4>
              <p className="text-zion-slate-light text-sm mb-3">
                Get the latest insights on tech, AI, and marketplace opportunities.
              </p>
              <FooterNewsletter />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering businesses through innovative technology solutions
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
                Contact Support
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
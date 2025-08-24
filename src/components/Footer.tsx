import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Shield, Cloud, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI Services",
      services: [
        { name: "AI Content Generator", href: "/ai-content-generator" },
        { name: "AI Talent Matching", href: "/match" },
        { name: "AI Model Training", href: "/ai-training" },
        { name: "AI Chatbot Builder", href: "/chatbot-builder" },
        { name: "AI-Powered Testing", href: "/ai-testing" },
        { name: "AI Legal Assistant", href: "/legal-ai" },
        { name: "AI Translation Service", href: "/ai-translation" },
        { name: "AI Financial Advisor", href: "/financial-ai" },
        { name: "AI Design Assistant", href: "/design-ai" }
      ]
    },
    {
      title: "Security & Compliance",
      services: [
        { name: "Cybersecurity Suite", href: "/cybersecurity-suite" },
        { name: "Data Privacy Compliance", href: "/privacy-compliance" },
        { name: "Security Audits", href: "/security-audits" },
        { name: "Penetration Testing", href: "/penetration-testing" },
        { name: "Compliance Reporting", href: "/compliance" }
      ]
    },
    {
      title: "Cloud & DevOps",
      services: [
        { name: "Cloud Cost Optimizer", href: "/cloud-optimizer" },
        { name: "DevOps Automation", href: "/devops-platform" },
        { name: "API Gateway", href: "/api-gateway" },
        { name: "Infrastructure as Code", href: "/infrastructure" },
        { name: "Container Management", href: "/containers" }
      ]
    },
    {
      title: "Business Solutions",
      services: [
        { name: "Data Analytics Platform", href: "/analytics-platform" },
        { name: "Customer Success Platform", href: "/customer-success" },
        { name: "AI-Powered HR Suite", href: "/hr-suite" },
        { name: "Project Management", href: "/dashboard/projects" },
        { name: "Enterprise Solutions", href: "/enterprise" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-zion-blue-dark via-zion-slate to-zion-slate-dark border-t border-zion-purple/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-zion-cyan animate-pulse" />
                <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  ZION TECH GROUP
                </span>
              </div>
              <p className="text-zion-slate-light mb-6 max-w-xs leading-relaxed">
                The world's leading marketplace for AI, technology, and innovation. 
                Connecting businesses with cutting-edge solutions and top-tier talent.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan mt-1 flex-shrink-0" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
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

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                {category.title === "AI Services" && <Brain className="h-5 w-5 text-zion-cyan" />}
                {category.title === "Security & Compliance" && <Shield className="h-5 w-5 text-zion-cyan" />}
                {category.title === "Cloud & DevOps" && <Cloud className="h-5 w-5 text-zion-cyan" />}
                {category.title === "Business Solutions" && <Zap className="h-5 w-5 text-zion-cyan" />}
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      to={service.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-purple/30 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated with Zion Tech</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, technology trends, and marketplace opportunities. 
              Join thousands of tech professionals staying ahead of the curve.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-purple/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering innovation through technology and AI
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Sitemap
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Contact Us
              </Link>
              <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan animate-pulse"></div>
    </footer>
  );
}
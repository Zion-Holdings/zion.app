import React from 'react';
import { Link } from 'react-router-dom';
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
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Monitor,
  Link as LinkIcon,
  PenTool,
  Globe,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Chatbots",
      icon: <Brain className="w-4 h-4" />,
      link: "/all-services?category=AI Services",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-4 h-4" />,
      link: "/all-services?category=Security",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Management",
      icon: <Cloud className="w-4 h-4" />,
      link: "/all-services?category=IT Services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DevOps & Automation",
      icon: <Code className="w-4 h-4" />,
      link: "/all-services?category=Automation",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-4 h-4" />,
      link: "/all-services?category=Analytics",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "IoT & Edge Computing",
      icon: <Monitor className="w-4 h-4" />,
      link: "/all-services?category=IT Services",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const quickLinks = [
    { name: "Marketplace", href: "/marketplace" },
    { name: "Talent Directory", href: "/talent" },
    { name: "Equipment", href: "/equipment" },
    { name: "Community", href: "/community" },
    { name: "Blog", href: "/blog" },
    { name: "Partners", href: "/partners" }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Sitemap", href: "/sitemap" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "Developer Portal", href: "/developers" },
    { name: "Status Page", href: "/status" },
    { name: "Support Tickets", href: "/support" }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue border-t border-zion-blue-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION
              </span>
              <Badge className="ml-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                Tech Group
              </Badge>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-xs leading-relaxed">
              The world's first comprehensive marketplace dedicated to high-tech, artificial intelligence, 
              and cutting-edge technology solutions. Transform your business with our innovative services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </address>
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
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              Our Services
            </h3>
            <div className="space-y-3">
              {serviceCategories.map((service) => (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  <div className={`p-1.5 rounded-md bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-200`}>
                    {service.icon}
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {service.title}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/micro-saas-services"
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-zion-blue-light/30">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest updates on new services, tech insights, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/50 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-blue-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="border-zion-cyan/30 text-zion-cyan text-xs">
                  <Globe className="w-3 h-3 mr-1" />
                  Global Services
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-zion-slate-light">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Terms
                </Link>
                <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
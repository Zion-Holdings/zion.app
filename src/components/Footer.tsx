import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Zap, Brain, Cloud, Shield, Rocket, Globe, Building, Users, BarChart3, Palette, Code, Server, Wifi, Lock, Database, ArrowRight, ExternalLink, Heart, Star, TrendingUp, Target, Lightbulb, Shield as ShieldIcon, Cloud as CloudIcon, Rocket as RocketIcon, Globe as GlobeIcon, Building as BuildingIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, Palette as PaletteIcon, Code as CodeIcon, Server as ServerIcon, Wifi as WifiIcon, Lock as LockIcon, Database as DatabaseIcon } from 'lucide-react';
import { FooterNewsletter } from "@/components/FooterNewsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceCategories = [
    {
      title: "Core Services",
      services: [
        { name: "Micro SAAS Services", path: "/micro-saas-services", icon: <Zap className="w-4 h-4" /> },
        { name: "AI & Machine Learning", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
        { name: "Cloud & DevOps", path: "/cloud-devops-solutions", icon: <Cloud className="w-4 h-4" /> },
        { name: "Cybersecurity", path: "/advanced-services", icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      title: "Advanced Solutions",
      services: [
        { name: "Emerging Tech", path: "/emerging-tech-services", icon: <Rocket className="w-4 h-4" /> },
        { name: "Industry Solutions", path: "/industry-solutions", icon: <Building className="w-4 h-4" /> },
        { name: "Digital Transformation", path: "/digital-transformation", icon: <Globe className="w-4 h-4" /> },
        { name: "Enterprise Solutions", path: "/enterprise-solutions", icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      title: "Specialized Services",
      services: [
        { name: "AI Business Solutions", path: "/ai-business-solutions", icon: <Brain className="w-4 h-4" /> },
        { name: "Green IT Solutions", path: "/green-it", icon: <Palette className="w-4 h-4" /> },
        { name: "Data Analytics", path: "/analytics", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Custom Development", path: "/services", icon: <Code className="w-4 h-4" /> }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Partners", path: "/partners" },
    { name: "Blog", path: "/blog" },
    { name: "News", path: "/blog" },
    { name: "Press Kit", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const supportLinks = [
    { name: "Help Center", path: "/help" },
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Status Page", path: "/status" },
    { name: "Community", path: "/community" },
    { name: "Training", path: "/training" },
    { name: "Support Tickets", path: "/support" },
    { name: "Live Chat", path: "/chat" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Compliance", path: "/compliance" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Sitemap", path: "/sitemap" }
  ];

  const marketplaceLinks = [
    { name: "Products", path: "/marketplace" },
    { name: "Services", path: "/services" },
    { name: "Talent", path: "/talent" },
    { name: "Equipment", path: "/equipment" },
    { name: "Categories", path: "/categories" },
    { name: "Pricing", path: "/pricing" },
    { name: "Request Quote", path: "/request-quote" },
    { name: "Become a Partner", path: "/partners" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-zion-blue-dark via-black to-zion-blue-dark border-t border-zion-cyan/20 pt-20 pb-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-zion-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-zion-cyan/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg shadow-zion-cyan/25">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent">ZION</span>
                  <div className="text-xs text-zion-slate-light font-medium">Tech Group</div>
                </div>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed text-sm">
              Transforming businesses through innovative micro SAAS solutions, 
              cutting-edge IT services, and advanced AI technologies. 
              We empower organizations to thrive in the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <Mail className="w-4 h-4 text-zion-cyan group-hover:text-zion-cyan-light transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <Phone className="w-4 h-4 text-zion-cyan group-hover:text-zion-cyan-light transition-colors" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors text-sm">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan mt-0.5" />
                <span className="max-w-xs text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.344C1 18.4 1.595 19 2.328 19h15.34c.734 0 1.332-.6 1.332-1.328V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                {category.title === "Core Services" && <Zap className="w-5 h-5 text-zion-cyan" />}
                {category.title === "Advanced Solutions" && <Rocket className="w-5 h-5 text-zion-cyan" />}
                {category.title === "Specialized Services" && <Palette className="w-5 h-5 text-zion-cyan" />}
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      to={service.path} 
                      className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors text-sm group"
                    >
                      <span className="text-zion-cyan/60 group-hover:text-zion-cyan transition-colors">
                        {service.icon}
                      </span>
                      {service.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Building className="w-5 h-5 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-4 text-lg mt-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-zion-cyan" />
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-zion-cyan" />
              Marketplace
            </h3>
            <ul className="space-y-2">
              {marketplaceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-4 text-lg mt-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-zion-cyan" />
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-16">
          <FooterNewsletter />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Made with <Heart className="w-4 h-4 inline text-red-400" /> in Delaware</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors text-sm group"
              >
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
                Back to Top
              </button>
              
              <div className="flex items-center space-x-2 text-zion-slate-light">
                <span className="text-xs">Powered by</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-medium">Zion Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
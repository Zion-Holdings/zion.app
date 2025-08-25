import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Zap, Brain, Cloud, Shield, Database, Cpu, Network, Eye, Leaf, Heart, Calendar, ShoppingCart, Building, Factory, Store, Truck, GraduationCap, FileText, BarChart3, Users, CreditCard, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Globe, Bot, Settings, ArrowRight, Star, Users2, Rocket, Award, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Code } from 'lucide-react';
import { FooterNewsletter } from "@/components/FooterNewsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "Core Services",
      services: [
        { name: "Micro SAAS Solutions", path: "/micro-saas-services", icon: <Zap className="w-4 h-4" /> },
        { name: "AI & Machine Learning", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
        { name: "Cloud & DevOps", path: "/cloud-devops", icon: <Cloud className="w-4 h-4" /> },
        { name: "Cybersecurity", path: "/cybersecurity", icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      title: "Emerging Tech",
      services: [
        { name: "Blockchain Solutions", path: "/blockchain", icon: <Database className="w-4 h-4" /> },
        { name: "IoT & Edge Computing", path: "/iot-edge", icon: <Network className="w-4 h-4" /> },
        { name: "AR/VR & Immersive", path: "/immersive-tech", icon: <Eye className="w-4 h-4" /> },
        { name: "Quantum Computing", path: "/quantum", icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      title: "Industry Solutions",
      services: [
        { name: "Healthcare Tech", path: "/healthcare-tech", icon: <Heart className="w-4 h-4" /> },
        { name: "Financial Technology", path: "/fintech", icon: <CreditCard className="w-4 h-4" /> },
        { name: "Manufacturing 4.0", path: "/manufacturing", icon: <Factory className="w-4 h-4" /> },
        { name: "Retail Technology", path: "/retail-tech", icon: <Store className="w-4 h-4" /> }
      ]
    },
    {
      title: "Business Tools",
      services: [
        { name: "Event Management", path: "/event-tech", icon: <Calendar className="w-4 h-4" /> },
        { name: "Supply Chain", path: "/supply-chain", icon: <ShoppingCart className="w-4 h-4" /> },
        { name: "Education Tech", path: "/edtech", icon: <GraduationCap className="w-4 h-4" /> },
        { name: "Transportation", path: "/transportation", icon: <Truck className="w-4 h-4" /> }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about", icon: <Building className="w-4 h-4" /> },
    { name: "Our Team", path: "/team", icon: <Users2 className="w-4 h-4" /> },
    { name: "Careers", path: "/careers", icon: <Rocket className="w-4 h-4" /> },
    { name: "Partners", path: "/partners", icon: <Award className="w-4 h-4" /> },
    { name: "Blog", path: "/blog", icon: <FileText className="w-4 h-4" /> },
    { name: "Press", path: "/press", icon: <MessageSquare className="w-4 h-4" /> }
  ];

  const supportLinks = [
    { name: "Help Center", path: "/help", icon: <Settings className="w-4 h-4" /> },
    { name: "Documentation", path: "/docs", icon: <BookOpen className="w-4 h-4" /> },
    { name: "API Reference", path: "/api", icon: <Code className="w-4 h-4" /> },
    { name: "Status Page", path: "/status", icon: <Activity className="w-4 h-4" /> },
    { name: "Contact Support", path: "/contact", icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-zion-blue-dark via-black to-zion-blue-dark border-t border-zion-cyan/20 pt-20 pb-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,229,255,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(0,229,255,0.05),transparent_70%)] animate-float"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                    ZION TECH GROUP
                  </span>
                  <p className="text-sm text-zion-slate-light -mt-1">Innovation • Technology • Future</p>
                </div>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-8 leading-relaxed max-w-md">
              Transforming businesses through innovative micro SAAS solutions, 
              cutting-edge IT services, and advanced AI technologies. 
              We're building the future, one solution at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors duration-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light group">
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors duration-300 mt-0.5">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                </div>
                <span className="max-w-xs">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { name: "Twitter", icon: "twitter", href: "#" },
                { name: "LinkedIn", icon: "linkedin", href: "#" },
                { name: "GitHub", icon: "github", href: "#" },
                { name: "YouTube", icon: "youtube", href: "#" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-10 h-10 bg-zion-cyan/10 hover:bg-zion-cyan/20 border border-zion-cyan/20 hover:border-zion-cyan/40 rounded-lg flex items-center justify-center text-zion-cyan hover:text-zion-cyan-light transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-zion-cyan to-zion-purple rounded-full"></div>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li key={service.path}>
                    <Link 
                      to={service.path} 
                      className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-all duration-300 group"
                    >
                      <div className="text-zion-cyan group-hover:scale-110 transition-transform duration-200">
                        {service.icon}
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Building className="w-5 h-5 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <ShieldIcon className="w-5 h-5 text-zion-cyan" />
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <GlobeIcon className="w-5 h-5 text-zion-cyan" />
              Stay Updated
            </h3>
            <p className="text-zion-slate-light mb-4">
              Get the latest insights on emerging technologies, industry trends, and innovation updates.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zion-cyan/30 to-transparent mb-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-6">
            <p className="text-zion-slate-light text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-zion-cyan">
              <Star className="w-4 h-4" />
              <span className="text-sm">Innovation Excellence</span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/30 hover:shadow-zion-cyan/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

// Social Media Icons Component
const SocialIcon = ({ name }: { name: string }) => {
  const icons = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.344C1 18.4 1.595 19 2.328 19h15.34c.734 0 1.332-.6 1.332-1.328V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
    )
  };

  return icons[name as keyof typeof icons] || null;
};

export default Footer;
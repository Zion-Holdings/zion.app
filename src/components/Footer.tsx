import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Zap, Brain, Server, Cloud, Shield, Users, FileText, Target, Rocket, Globe, Code, Database, Settings, Wrench, Cpu, Network, Lock, Key, EyeOff, ShieldCheck, RefreshCw, Laptop, Smartphone, Router, HardDrive, Eye, Heart, Truck, CreditCard, BookOpen, Calendar, BarChart3, TrendingUp, PieChart, Activity, MessageSquare, Camera, Video, Music, Palette, Layers, Grid, Layout, Monitor, Display, Projector, Printer, Scanner, Fax, Copier, Archive, Folder, File, Document, Spreadsheet, Presentation, Chart, Graph, Analytics, Report, Dashboard, Clock, Timer, Stopwatch, Hourglass, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarWeek, CalendarMonth, CalendarYear, Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Factory, Handshake, Briefcase, Leaf } from 'lucide-react';
import { FooterNewsletter } from "@/components/FooterNewsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "Micro SAAS Solutions",
      services: [
        { name: "Productivity Tools", path: "/micro-saas-services", icon: <Target className="w-4 h-4" /> },
        { name: "AI-Powered Apps", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
        { name: "Business Software", path: "/micro-saas-services", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Industry Solutions", path: "/industry-solutions", icon: <Factory className="w-4 h-4" /> }
      ]
    },
    {
      title: "IT & Infrastructure",
      services: [
        { name: "Onsite IT Services", path: "/it-onsite-services", icon: <Server className="w-4 h-4" /> },
        { name: "Cloud Solutions", path: "/cloud-devops-solutions", icon: <Cloud className="w-4 h-4" /> },
        { name: "Cybersecurity", path: "/it-onsite-services", icon: <Shield className="w-4 h-4" /> },
        { name: "Network Infrastructure", path: "/it-onsite-services", icon: <Network className="w-4 h-4" /> }
      ]
    },
    {
      title: "AI & Innovation",
      services: [
        { name: "Machine Learning", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
        { name: "Computer Vision", path: "/ai-services", icon: <Eye className="w-4 h-4" /> },
        { name: "Natural Language Processing", path: "/ai-services", icon: <MessageSquare className="w-4 h-4" /> },
        { name: "Predictive Analytics", path: "/ai-services", icon: <TrendingUp className="w-4 h-4" /> }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about", icon: <Users className="w-4 h-4" /> },
    { name: "Blog & Insights", path: "/blog", icon: <FileText className="w-4 h-4" /> },
    { name: "Partners", path: "/partners", icon: <Handshake className="w-4 h-4" /> },
    { name: "Careers", path: "/careers", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Sitemap", path: "/sitemap", icon: <Grid className="w-4 h-4" /> }
  ];

  const resources = [
    { name: "Documentation", path: "/developers", icon: <Code className="w-4 h-4" /> },
    { name: "API Reference", path: "/developers", icon: <Database className="w-4 h-4" /> },
    { name: "Support Center", path: "/contact", icon: <Settings className="w-4 h-4" /> },
    { name: "Community", path: "/community", icon: <Users className="w-4 h-4" /> },
    { name: "Green IT", path: "/green-it", icon: <Leaf className="w-4 h-4" /> },
    { name: "Privacy Policy", path: "/privacy", icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 border-t border-slate-700/50 pt-16 pb-12 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_50%,rgba(0,229,255,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(0,229,255,0.1)_50%)] bg-[length:100px_100px]"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  ZION
                </span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Transforming businesses through innovative micro SAAS solutions, 
                cutting-edge IT services, and advanced AI technologies. 
                We're building the future, one solution at a time.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="max-w-xs">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-slate-800 rounded-lg">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-slate-800 rounded-lg">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.344C1 18.4 1.595 19 2.328 19h15.34c.734 0 1.332-.6 1.332-1.328V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-slate-800 rounded-lg">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                {category.title === "Micro SAAS Solutions" && <Zap className="w-5 h-5 text-cyan-400" />}
                {category.title === "IT & Infrastructure" && <Server className="w-5 h-5 text-blue-400" />}
                {category.title === "AI & Innovation" && <Brain className="w-5 h-5 text-purple-400" />}
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      to={service.path} 
                      className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company & Resources */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors duration-300 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                <Code className="w-5 h-5 text-yellow-400" />
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      to={resource.path} 
                      className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors duration-300 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </span>
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights on AI, technology trends, 
                and innovative business solutions. Be the first to know about new features and updates.
              </p>
            </div>
            <FooterNewsletter />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved. 
              <span className="ml-2 text-cyan-400">Building the future, one solution at a time.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
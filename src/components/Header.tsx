import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Zap, Brain, Server, Code, Shield, Cloud, Database, Users, Settings, Globe, Rocket, Star, Target, TrendingUp, BarChart3, MessageSquare, Eye, Heart, Truck, CreditCard, BookOpen, Calendar, FileText, Video, Music, Camera, Palette, Layers, Wifi, ShieldCheck, RefreshCw, Cpu, Network, Settings2, Cog, Tool, Hammer, Screwdriver, Drill, Saw, Paintbrush, Palette as PaletteIcon, Brush, PenTool, Vector, Grid, Layout, Monitor, Display, Projector, Printer, Scanner, Fax, Copier, Archive, Folder, File, Document, Spreadsheet, Presentation, Chart, Graph, Analytics, Report, Dashboard, Clock, Timer, Stopwatch, Hourglass, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarWeek, CalendarMonth, CalendarYear, Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Handshake, Briefcase } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const services = [
    {
      name: "Micro SAAS Services",
      path: "/micro-saas-services",
      icon: <Zap className="w-4 h-4" />,
      description: "Affordable software solutions"
    },
    {
      name: "AI Services",
      path: "/ai-services",
      icon: <Brain className="w-4 h-4" />,
      description: "Artificial intelligence solutions"
    },
    {
      name: "IT Onsite Services",
      path: "/it-onsite-services",
      icon: <Server className="w-4 h-4" />,
      description: "Professional IT support"
    },
    {
      name: "Cloud Solutions",
      path: "/cloud-devops-solutions",
      icon: <Cloud className="w-4 h-4" />,
      description: "Cloud infrastructure & DevOps"
    },
    {
      name: "Digital Transformation",
      path: "/digital-transformation",
      icon: <Rocket className="w-4 h-4" />,
      description: "Business transformation services"
    },
    {
      name: "Industry Solutions",
      path: "/industry-solutions",
      icon: <Target className="w-4 h-4" />,
      description: "Industry-specific solutions"
    }
  ];

  const company = [
    { name: "About Us", path: "/about", icon: <Users className="w-4 h-4" /> },
    { name: "Blog", path: "/blog", icon: <FileText className="w-4 h-4" /> },
    { name: "Partners", path: "/partners", icon: <Handshake className="w-4 h-4" /> },
    { name: "Careers", path: "/careers", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                      >
                        <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center space-x-1">
                <span>Company</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="space-y-2">
                    {company.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                      >
                        <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/pricing" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive('/pricing') 
                  ? 'text-purple-400 bg-purple-400/10 border border-purple-400/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Pricing
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
            >
              Sign In
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Services
              </div>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block px-8 py-3 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </div>
              {company.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-8 py-3 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/pricing" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                isActive('/pricing') 
                  ? 'text-purple-400 bg-purple-400/10 border border-purple-400/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            <div className="pt-4 space-y-3">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
              >
                Sign In
              </Button>
              <Button 
                size="sm"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
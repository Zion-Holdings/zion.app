import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Zap, Brain, Shield, Server, Cloud, Rocket, Target, Users,
  FileText, Handshake, Briefcase, MessageSquare
} from 'lucide-react';

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
      name: "IT Services",
      path: "/it-services",
      icon: <Shield className="w-4 h-4" />,
      description: "Comprehensive IT infrastructure and security solutions"
    },
    {
      name: "IT Services Comprehensive",
      path: "/it-services-comprehensive",
      icon: <Server className="w-4 h-4" />,
      description: "Detailed IT services with pricing and expertise"
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
      name: "Cybersecurity",
      path: "/cybersecurity",
      icon: <Shield className="w-4 h-4" />,
      description: "Advanced security solutions"
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
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    All Services
                  </Link>
                  <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Micro SAAS Services
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI & Machine Learning
                  </Link>
                  <Link to="/enterprise-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Enterprise Solutions
                  </Link>
                  <Link to="/cloud-devops-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cloud & DevOps
                  </Link>
                  <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Digital Transformation
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/marketplace" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Marketplace
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive,
  Globe,
  TrendingUp
} from "lucide-react";

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Home
      </NavLink>
      
      {/* Services Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <Zap className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isServicesOpen && (
          <div
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Content Tools</Link></li>
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Marketing Automation</Link></li>
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Business Tools</Link></li>
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Customer Support</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud Migration</Link></li>
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">DevOps</Link></li>
                    <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Support</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link 
                  to="/enhanced-services" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Solutions Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <Brain className="w-4 h-4" />
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isSolutionsOpen && (
          <div
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Talent
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Find Experts</Link></li>
                    <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Hiring</Link></li>
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Skill Matching</Link></li>
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Project Teams</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2" />
                    Resources
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Hardware</Link></li>
                    <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Marketplace</Link></li>
                    <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
                    <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link 
                  to="/request-quote" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  Get Custom Quote
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Link to="/blog" className="text-zion-slate-light hover:text-white transition-colors">
        Blog
      </Link>
      
      <Link to="/about" className="text-zion-slate-light hover:text-white transition-colors">
        About Us
      </Link>
      
      <Link to="/partners" className="text-zion-slate-light hover:text-white transition-colors">
        Partners
      </Link>
      
      <Link to="/contact" className="text-zion-slate-light hover:text-white transition-colors">
        Contact
      </Link>
      
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground",
            "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1"
          )
        }
      >
        Get Started
      </NavLink>
    </nav>
  );
}

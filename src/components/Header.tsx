import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={closeMobileMenu}>
              <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                activeDropdown === 'services' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="py-2">
                  <div className="grid grid-cols-2 gap-1">
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
                    <Link to="/emerging-tech-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Emerging Tech
                    </Link>
                    <Link to="/ai-business-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Business Solutions
                    </Link>
                    <Link to="/industry-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Industry Solutions
                    </Link>
                    <Link to="/it-onsite-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      IT Onsite Services
                    </Link>
                    <Link to="/green-it" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Green IT
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                onClick={() => toggleDropdown('company')}
              >
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                activeDropdown === 'company' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="py-2">
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Careers
                  </Link>
                  <Link to="/partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Partners
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                activeDropdown === 'resources' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="py-2">
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FAQ
                  </Link>
                  <Link to="/help-center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Help Center
                  </Link>
                  <Link to="/white-papers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    White Papers
                  </Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>

            {/* Marketplace */}
            <Link to="/marketplace" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Marketplace
            </Link>

            {/* Talent */}
            <Link to="/talent" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Talent
            </Link>

            {/* Pricing */}
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="pl-4 space-y-1">
                    <Link to="/micro-saas-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                      Micro SAAS Services
                    </Link>
                    <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                      AI & Machine Learning
                    </Link>
                    <Link to="/enterprise-solutions" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                      Enterprise Solutions
                    </Link>
                    <Link to="/cloud-devops-solutions" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                      Cloud & DevOps
                    </Link>
                    <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                      Digital Transformation
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                About
              </Link>
              <Link to="/marketplace" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                Marketplace
              </Link>
              <Link to="/talent" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                Talent
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                Pricing
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                Contact
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                Blog
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Link to="/login" className="block w-full text-center px-3 py-2 text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md" onClick={closeMobileMenu}>
                  Sign In
                </Link>
                <Link to="/signup" className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md" onClick={closeMobileMenu}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
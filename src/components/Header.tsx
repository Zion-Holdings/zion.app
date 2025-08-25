import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = {
    services: {
      label: 'Services',
      items: [
        { label: 'Micro SAAS Services', path: '/micro-saas-services' },
        { label: 'AI & Machine Learning', path: '/ai-services' },
        { label: 'Enterprise Solutions', path: '/enterprise-solutions' },
        { label: 'Cloud & DevOps', path: '/cloud-devops-solutions' },
        { label: 'Digital Transformation', path: '/digital-transformation' },
        { label: 'IT Onsite Services', path: '/it-onsite-services' },
        { label: 'Green IT Solutions', path: '/green-it' },
        { label: 'Space Technology', path: '/space-tech' },
        { label: 'Quantum Computing', path: '/quantum-services' },
        { label: 'Research & Development', path: '/research-development' }
      ]
    },
    solutions: {
      label: 'Solutions',
      items: [
        { label: 'AI Autonomous Systems', path: '/ai-autonomous-systems' },
        { label: 'AI Business Intelligence', path: '/ai-business-intelligence' },
        { label: 'AI Content Creation', path: '/ai-content-creation' },
        { label: 'AI Code Generation', path: '/ai-code-generation' },
        { label: 'AI Compliance Automation', path: '/ai-compliance-automation' },
        { label: 'AI Computer Vision', path: '/ai-computer-vision' },
        { label: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution' },
        { label: 'AI Healthcare Solutions', path: '/ai-healthcare-solutions' },
        { label: 'AI Legal Solutions', path: '/ai-legal-solutions' },
        { label: 'AI Manufacturing', path: '/ai-manufacturing' }
      ]
    },
    marketplace: {
      label: 'Marketplace',
      items: [
        { label: 'Products', path: '/marketplace' },
        { label: 'Talent', path: '/talent' },
        { label: 'Equipment', path: '/equipment' },
        { label: 'Categories', path: '/categories' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'Request Quote', path: '/request-quote' }
      ]
    },
    company: {
      label: 'Company',
      items: [
        { label: 'About Us', path: '/about' },
        { label: 'Blog', path: '/blog' },
        { label: 'News', path: '/news' },
        { label: 'Events', path: '/events' },
        { label: 'Webinars', path: '/webinars' },
        { label: 'White Papers', path: '/white-papers' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Partners', path: '/partners' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact', path: '/contact' }
      ]
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {Object.entries(navigationItems).map(([key, section]) => (
              <div key={key} className="relative group">
                <button 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                  onClick={() => toggleDropdown(key)}
                >
                  {section.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {section.items.map((item, index) => (
                      <Link 
                        key={index}
                        to={item.path} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
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
              {Object.entries(navigationItems).map(([key, section]) => (
                <div key={key} className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md flex justify-between items-center"
                  >
                    {section.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === key && (
                    <div className="pl-4 space-y-1">
                      {section.items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
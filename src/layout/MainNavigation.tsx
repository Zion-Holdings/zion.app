
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function MainNavigation() {
  const location = useLocation();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);

  const baseLinks = [
    { key: 'home', href: '/', name: 'Home' },
    { key: 'about', href: '/about', name: 'About' },
    { key: 'contact', href: '/contact', name: 'Contact' }
  ];

  return (
    <nav className="navbar ml-6 hidden md:flex">
      <ul className="flex items-center gap-1">
        {baseLinks.map((link) => (
          <li key={link.key}>
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                location.pathname === link.href
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
        
        {/* Services Dropdown */}
        <li className="relative">
          <button
            onClick={() => {
              setIsServicesDropdownOpen(!isServicesDropdownOpen);
              setIsHelpDropdownOpen(false);
            }}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname.startsWith('/ai-services') || 
              location.pathname.startsWith('/cybersecurity') || 
              location.pathname.startsWith('/expanded-services') ||
              location.pathname.startsWith('/green-it') ||
              location.pathname.startsWith('/comprehensive-services')
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Services
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isServicesDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-2">
                <Link to="/ai-services" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsServicesDropdownOpen(false)}>AI Services</Link>
                <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsServicesDropdownOpen(false)}>Cybersecurity</Link>
                <Link to="/expanded-services" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsServicesDropdownOpen(false)}>IT Services</Link>
                <Link to="/green-it" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsServicesDropdownOpen(false)}>Green IT</Link>
                <Link to="/comprehensive-services" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsServicesDropdownOpen(false)}>Comprehensive Services</Link>
                <Link to="/services-comparison" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsServicesDropdownOpen(false)}>Compare Services</Link>
              </div>
            </div>
          )}
        </li>

        {/* Help Dropdown */}
        <li className="relative">
          <button
            onClick={() => {
              setIsHelpDropdownOpen(!isHelpDropdownOpen);
              setIsServicesDropdownOpen(false);
            }}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname.startsWith('/help') || 
              location.pathname.startsWith('/faq') || 
              location.pathname.startsWith('/request-quote')
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Help
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isHelpDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-2">
                <Link to="/help" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsHelpDropdownOpen(false)}>Help Center</Link>
                <Link to="/faq" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsHelpDropdownOpen(false)}>FAQ</Link>
                <Link to="/request-quote" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsHelpDropdownOpen(false)}>Request Quote</Link>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

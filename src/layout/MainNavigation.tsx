
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function MainNavigation() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const baseLinks = [
    { key: 'home', href: '/', name: 'Home' },
    { key: 'about', href: '/about', name: 'About' },
    { key: 'services', href: '/services', name: 'Services' },
    { key: 'help', href: '/help', name: 'Help' }
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
        
        <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname.startsWith('/marketplace') || location.pathname.startsWith('/categories')
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Marketplace
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-2">
                <Link to="/ai-services" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsDropdownOpen(false)}>AI Services</Link>
                <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsDropdownOpen(false)}>Cybersecurity</Link>
                <Link to="/expanded-services" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsDropdownOpen(false)}>IT Services</Link>
                <Link to="/green-it" className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan" onClick={() => setIsDropdownOpen(false)}>Green IT</Link>
              </div>
            </div>
          )}
        </li>
        
        <li>
          <Link
            to="/contact"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname === '/contact'
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

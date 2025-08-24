import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mobileMenuItems = [
  { name: 'Services', icon: <Briefcase className="w-5 h-5" />, href: '/services' },
  { name: 'Talent', icon: <Users className="w-5 h-5" />, href: '/talent' },
  { name: 'Equipment', icon: <HardDrive className="w-5 h-5" />, href: '/equipment' },
  { name: 'Innovation', icon: <Lightbulb className="w-5 h-5" />, href: '/category/innovation' },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="p-2 text-white hover:bg-zion-blue-dark"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-zion-blue-dark shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-blue-light">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMenu}
                className="p-2 text-white hover:bg-zion-blue"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Search bar */}
            <div className="p-6 border-b border-zion-blue-light">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Menu items */}
            <nav className="p-6">
              <ul className="space-y-4">
                {mobileMenuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-zion-blue transition-colors duration-200"
                    >
                      <div className="text-zion-cyan">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Auth buttons */}
            <div className="p-6 border-t border-zion-blue-light space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              >
                <Link to="/signup" onClick={closeMenu}>
                  <User className="w-4 h-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
              >
                <Link to="/login" onClick={closeMenu}>
                  Log In
                </Link>
              </Button>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zion-blue-light">
              <div className="text-center text-zion-slate-light text-sm">
                <p>© 2024 Zion Tech Group</p>
                <p className="mt-1">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
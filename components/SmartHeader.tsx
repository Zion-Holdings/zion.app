import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { mainNavigation, socialLinks, contactInfo } from '../utils/navigationConfig';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50 ${className}`}>
          <div className="py-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem: React.FC<{ item: any }> = ({ item }) => (
  <Link 
    href={item.href}
    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-cyan-500/10 transition-colors border-b border-white/5 last:border-b-0"
  >
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium">{item.label}</div>
        {item.description && (
          <div className="text-sm text-white/60 mt-1">{item.description}</div>
        )}
      </div>
      {item.status && (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          item.status === 'active' ? 'bg-green-500/20 text-green-300' :
          item.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
          'bg-blue-500/20 text-blue-300'
        }`}>
          {item.status}
        </span>
      )}
    </div>
  </Link>
);

export default function SmartHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            {mainNavigation.main.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu
              trigger={
                <div className="text-white/80 hover:text-white transition-colors font-medium cursor-pointer">
                  🚀 Services
                </div>
              }
            >
              <div className="p-4">
                <h3 className="text-white font-semibold mb-3 text-lg">Our Services</h3>
                <div className="grid grid-cols-1 gap-2">
                  {mainNavigation.services.map((category) => (
                    <div key={category.id} className="mb-4">
                      <h4 className="text-cyan-300 font-medium mb-2">{category.name}</h4>
                      <div className="space-y-1">
                        {category.items.map((service) => (
                          <DropdownItem key={service.id} item={service} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu
              trigger={
                <div className="text-white/80 hover:text-white transition-colors font-medium cursor-pointer">
                  📚 Resources
                </div>
              }
            >
              <div className="p-4">
                <h3 className="text-white font-semibold mb-3 text-lg">Resources</h3>
                <div className="space-y-1">
                  {mainNavigation.resources.map((item) => (
                    <DropdownItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </DropdownMenu>

            {/* Company Dropdown */}
            <DropdownMenu
              trigger={
                <div className="text-white/80 hover:text-white transition-colors font-medium cursor-pointer">
                  🏢 Company
                </div>
              }
            >
              <div className="p-4">
                <h3 className="text-white font-semibold mb-3 text-lg">About Zion Tech Group</h3>
                <div className="space-y-1">
                  {mainNavigation.company.map((item) => (
                    <DropdownItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </DropdownMenu>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              📞 {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              ✉️ {contactInfo.email}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden bg-black/95 border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Main Navigation */}
              {mainNavigation.main.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block px-3 py-2 text-white/80 hover:text-white hover:bg-cyan-500/10 transition-colors rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Services Section */}
              <div className="px-3 py-2">
                <div className="text-cyan-300 font-medium mb-2">🚀 Services</div>
                {mainNavigation.services.map((category) => (
                  <div key={category.id} className="ml-4 mb-3">
                    <div className="text-white/70 font-medium mb-1">{category.name}</div>
                    {category.items.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        className="block ml-4 px-3 py-1 text-white/60 hover:text-white hover:bg-cyan-500/10 transition-colors rounded text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Resources Section */}
              <div className="px-3 py-2">
                <div className="text-cyan-300 font-medium mb-2">📚 Resources</div>
                {mainNavigation.resources.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block ml-4 px-3 py-1 text-white/60 hover:text-white hover:bg-cyan-500/10 transition-colors rounded text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Company Section */}
              <div className="px-3 py-2">
                <div className="text-cyan-300 font-medium mb-2">🏢 Company</div>
                {mainNavigation.company.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block ml-4 px-3 py-1 text-white/60 hover:text-white hover:bg-cyan-500/10 transition-colors rounded text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="px-3 py-2 border-t border-white/10 mt-4">
                <div className="text-cyan-300 font-medium mb-2">📞 Contact</div>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="block ml-4 px-3 py-1 text-white/60 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block ml-4 px-3 py-1 text-white/60 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
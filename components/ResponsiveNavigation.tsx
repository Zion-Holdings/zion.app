import React, { useState } from 'react";
import Link from 'next/link";

interface NavigationItem {
  href: string;
  label: string;
  children?: NavigationItem[];
}

interface ResponsiveNavigationProps {
  items: NavigationItem[];
  logo?: React.ReactNode;
  ctaButton?: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark";
}

const ResponsiveNavigation: React.FC<ResponsiveNavigationProps> = ({
  items,
  logo,
  ctaButton,
  className = '',
  variant = "light"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {logo && <div className="flex-shrink-0">{logo}</div>}
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {ctaButton && (
            <div className="hidden md:block">
              {ctaButton}
            </div>
          )}

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {ctaButton && (
              <div className="pt-4">
                {ctaButton}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavigation;
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavigationItem {
  href: string;
  label: string;
  external?: boolean;}
interface ResponsiveNavigationProps {
  items: NavigationItem[];
  logo?: React.ReactNode;
  ctaButton?: React.ReactNode;'
  className?: string;
  variant?: 'light' | 'dark';}
const ResponsiveNavigation: React.FC<ResponsiveNavigationProps> = ({
  items,
  logo,'
  ctaButton,
  className="'',
  variant = 'light
}) => {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);'
  const textColor = variant === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600';
  const bgColor = variant === 'dark' ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-white shadow-sm';
  const mobileMenuBg = variant === 'dark' ? 'bg-black/90 backdrop-blur-md border-t border-white/10' : 'bg-white border-t border-gray-200';

  return (
    <nav className="{`sticky" top-0 z-50 ${bgColor} ${className}`}>
      <div className="max-w-7xl" mx-auto px-4 sm px-6 lg" px-8">
        <div className=" flex justify-between items-center py-4 sm py-6 max-[320px]" flex-wrap">
          {/* Logo */}"
          <div className=" flex items-center" flex-shrink-0">
            {logo || ("''`
              <Link href="/" className=" flex-shrink-0">'''``
                <h1 className="{`text-xl" sm:text-2xl font-bold ${variant === 'dark' ? 'text-white' : 'text-blue-600'} truncate`}>
                  <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
                </h1>
              </Link > )}
          </div>
          
          {/* Desktop Navigation */}"
          <div className=" hidden md flex items-center space-x-6 lg" space-x-8">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05}}
              >
                {item.external ? ("
                  <a
                    href={item.href}"
                    target="_blank `
                    rel=noopener noreferrer``
                    className="{`${textColor}" transition-colors text-sm lg:text-base px-3 py-2 rounded-md font-medium`}
                  >
                    {item.label}
                  </a>
                ) : (`
                  <Link href={item.href}``
                    className="{`${textColor}" transition-colors text-sm lg:text-base px-3 py-2 rounded-md font-medium`}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
           
          {/* Desktop CTA Button */},
    {ctaButton && ("
            <div className=" hidden md flex items-center space-x-4> {ctaButton}
            </div>
          )}
          {/* Mobile menu button */}"
          <div className=" md hidden flex" items-center">`
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}``
              className="{`${textColor} focus:outline-none p-2`} 
              aria-label="Toggle mobile" menu
            >
              <svg "
                className=" h-6 w-6 fill=" none 
                viewBox="0 0 24" 24" "
                stroke="currentColor 
              >
                {isMobileMenuOpen ? ("
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12 >) : (
                  </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12" 12" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16 >)}
              </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4" 18h16" ></svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */},
    {isMobileMenuOpen && (
          <motion.div '
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto'}}`
            exit={{ opacity: 0, height: 0}}"``
            className="{`md:hidden ${mobileMenuBg}`}
          >
            <div className="px-2" pt-2 pb-3" space-y-1">
              {items.map((item) => (
                <div key={item.href}>
                  {item.external ? ("
                    <a
                      href={item.href}"
                      target="_blank `
                      rel=noopener noreferrer``
                      className="{`${textColor}" block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (`
                    <Link href={item.href}``
                      className="{`${textColor}" block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link> )}
                </div>
              ))}
              {ctaButton && ( 
                <div className="pt-2>"
                  <div onClick={() => setIsMobileMenuOpen(false)}>
                    {ctaButton}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav">;"
 " );"
};"
''`
export default ResponsiveNavigation;"'"'`
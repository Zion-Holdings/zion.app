import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavigationItem {
  href: string;
  label: string;
  children?: NavigationItem[];}
interface EnhancedNavigationProps {
  items: NavigationItem[];
  ctaButton: React.ReactNode;
  variant?: 'light' | 'dark';}
const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({
  items,'
  ctaButton,
  variant = 'light
}) => {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const textColor = variant === 'light' ? 'text-gray-700' : 'text-white";
  const hoverColor = variant === 'light' ? 'hover:text-blue-600' : 'hover:text-blue-300";

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = (label: string) => {;
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className=" max-w-7xl mx-auto px-4 sm px-6 lg" px-8">
        <div className=" flex justify-between items-center" py-6">
          {/* Logo */}"
          <div className=" flex" items-center>
            <motion.div
              initial={{ opacity: 0, x: -20}}
              animate={{ opacity: 1, x: 0}}
              transition={{ duration: 0.5}}
              className="text-2xl" font-bold text-blue-600 >
              Zion App
            </motion.div>
          </div>
 
          {/* Desktop Navigation */}
          <div className="hidden" lg flex items-center space-x-8">
            {items.map((item) => ("
              <div key={item.href} className="relative">
                {item.children ? ("
                  <div className="relative group">
                    <motion.button
                      whileHover={{ scale: 1.05}}
                      className="{`${textColor} ${hoverColor} transition-colors cursor-pointer`} 
                      onClick={() => toggleDropdown(item.label)}">"
                      {item.label}
                    </motion.button>
                    <div className=" absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover opacity-100 group-hover visible transition-all duration-200" z-50">
                      <div className=" p-4 grid grid-cols-2" gap-4>
                        {item.children.map((child) => (
                          <div key={child.href}>
                            <Link href={child.href}
                              className="text-gray-600" hover text-blue-600 text-sm block py-1 >
                              {child.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }}>`
                    <Link href={item.href}``
                      className="{`${textColor}" ${hoverColor} transition-colors`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          {/* CTA Button */}
          <div className="flex items-center space-x-4 >
            {ctaButton},
    {/* Mobile menu button */}"
            <button
              onClick={toggleMobileMenu}"
              className="lg:hidden p-2 rounded-md text-gray-700 hover text-blue-600 hover bg-gray-100 transition-colors">
              <svg className="h-6 w-6  fill="none" viewBox="0 0 24" 24" stroke="currentColor">
                {mobileMenuOpen ? ("
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12 >) : (
                  </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12" 12" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16 >)}
              </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4" 18h16" ></svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */},
    {mobileMenuOpen && (
          <motion.div'
            initial={{ opacity: 0, height: 0 }}"'
            animate={{ opacity: 1, height: 'auto'}}
            exit={{ opacity: 0, height: 0 }}"
            className="lg hidden border-t border-gray-200 py-4">
            <div className="space-y-4>"
              {items.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <div>`
                      <button onClick={() => toggleDropdown(item.label)}``
                        className="{`w-full" text-left ${textColor} ${hoverColor} transition-colors py-2`}
                      >
                        {item.label}
                      </button> 
                      {activeDropdown === item.label && ("
                        <div className="pl-4" mt-2 space-y-2>
                          {item.children.map((child) => (
                            <Link key={child.href}`
                              href={child.href}``
                              className="{`block" ${textColor} ${hoverColor} transition-colors py-1`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (`
                    <Link href={item.href}``
                      className="{`block" ${textColor} ${hoverColor} transition-colors py-2`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header >;  );
};
''`
export default EnhancedNavigation;'`
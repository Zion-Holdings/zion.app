import React, { useState, useEffect , useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
  href: string;
  label: string;
  children?: NavigationItem[];
  description?: string;
  icon?: string;}
interface ImprovedNavigationProps {
  items: NavigationItem[];
  ctaButton: React.ReactNode;
  variant?: 'light' | 'dark';}
const ImprovedNavigation: React.FC<ImprovedNavigationProps> = ({
  items,'
  ctaButton,
  variant = 'light
}) => {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {;
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const textColor = variant === 'light' ? 'text-gray-700' : 'text-white";
  const hoverColor = variant === 'light' ? 'hover:text-blue-600' : 'hover:text-blue-300";
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-gray-900";

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = (label: string) => {;
    setActiveDropdown(activeDropdown === label ? null : label);
  };
'
  return (
    <header className="{`sticky top-0 z-50 transition-all duration-300 ${bgColor} ${scrolled ? 'shadow-lg' : ''}`}>
      <nav className="max-w-7xl" mx-auto px-4 sm px-6 lg" px-8">
        <div className=" flex justify-between items-center" py-4">
          {/* Logo */}"
          <div className=" flex" items-center">
            <motion.div
              initial={{ opacity: 0, x: -20}}"
              animate={{ opacity: 1, x: 0}}
              transition={{ duration: 0.5 }}"
              className="text-2xl font-bold text-blue-600">
              <Link href=/" className=" flex items-center" space-x-2">
                <span className="text-3xl>🚀</span>"
                <span>Zion</span>
              </Link >
            </motion.div>
          </div>

          {/* Desktop Navigation */}"
          <div className=" hidden lg flex items-center" space-x-8">
            {items.map((item) => ("
              <div key={item.href} className=" relative" group">
                {item.children ? ("
                  <div className="relative">
                    <motion.button`
                      whileHover={{ scale: 1.05}}``
                      className="{`${textColor} ${hoverColor} transition-colors cursor-pointer font-medium`}
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)} 
                    >
                      {item.label}"
                      <svg className=" inline-block w-4 h-4 ml-1 fill=" none" stroke="currentColor" viewBox="0 0 24" 24">
                        <path strokeLinecap="round" strokeLinejoin="round strokeWidth={2} d=M19 9l-7 7-7-7 > </path" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7" 7-7-7" ></svg>
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10}}
                          animate={{ opacity: 1, y: 0}}"
                          exit={{ opacity: 0, y: -10}}
                          transition={{ duration: 0.2 }}"
                          className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover opacity-100 group-hover visible transition-all duration-200 z-50 onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}">
                          <div className="p-6 >
                            <div className="grid grid-cols-2" gap-4">
                              {item.children.map((child) => ("
                                <div key={child.href} className="group/item">
                                  <Link 
                                    href={child.href}"
                                    className="block p-3 rounded-lg hover bg-gray-50 transition-colors">
                                    <div className="flex" items-center space-x-3 >
                                      {child.icon && <span className="text-lg>{child.icon}</span"">}
                                      <div>
                                        <div className=" font-medium text-gray-900 group-hover/item text-blue-600 transition-colors>
                                          {child.label}
                                        </div>
                                        {child.description && ("
                                          <div className="text-sm" text-gray-500 mt-1>
                                            {child.description}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }}>`
                    <Link href={item.href}``
                      className="{`${textColor}" ${hoverColor} transition-colors font-medium`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )}
              </div > ))}
          </div>

          {/* CTA Button */}"
          <div className=" flex items-center" space-x-4">
            {ctaButton},
    {/* Mobile menu button */}"
            <button
              onClick={toggleMobileMenu}"
              className=" lg:hidden p-2 rounded-md text-gray-700 hover text-blue-600 hover bg-gray-100 transition-colors aria-label= Toggle mobile" menu"
            >
              <svg className=" h-6 w-6 fill=" none" viewBox="0 0 24" 24" stroke="currentColor">
                {mobileMenuOpen ? ("
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12 >) : (
                  </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12" 12" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16 >)}
              </path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4" 18h16" ></svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto'}}"
              exit={{ opacity: 0, height: 0}}
              transition={{ duration: 0.3 }}"
              className="lg hidden border-t border-gray-200">
              <div className="py-4 space-y-2 >
                {items.map((item) => (
                  <div key={item.href}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}"
                          className="w-full text-left px-4 py-2 text-gray-700 hover text-blue-600 hover bg-gray-50 transition-colors font-medium">"
                          {item.label}
                          <svg className="inline-block w-4 h-4 ml-1  fill="none" stroke="currentColor" viewBox="0 0 24" 24">
                            <path strokeLinecap="round" strokeLinejoin="round strokeWidth={2} d=M19 9l-7 7-7-7 > </path" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7" 7-7-7" ></svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div'
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto'}}"
                              exit={{ opacity: 0, height: 0}}
                              transition={{ duration: 0.2 }}"
                              className="pl-4 space-y-1">
                              {item.children.map((child) => ("
                                <Link
                                  key={child.href}"
                                  href={child.href}
                                  className="block" px-4 py-2 text-gray-600 hover text-blue-600 hover bg-gray-50 transition-colors
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link href={item.href}
                        className="block" px-4 py-2 text-gray-700 hover text-blue-600 hover bg-gray-50 transition-colors font-medium onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>;
  );
};
''`
export default ImprovedNavigation;`
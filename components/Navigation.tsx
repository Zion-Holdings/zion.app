import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/', current: router.pathname === '/' },
    { name: 'Services', href: '/services', current: router.pathname === '/services' },
    { name: 'Automation', href: '/automation', current: router.pathname.startsWith('/automation') },
    { name: 'Reports', href: '/reports', current: router.pathname.startsWith('/reports') },
    { name: 'About', href: '/about', current: router.pathname === '/about' },
  ];

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                bolt.new.zion.app
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isCurrentPage(item.href)
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link
                href="/automation/service-factory-dashboard.html"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Factory Dashboard
              </Link>
              <Link
                href="/services"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isCurrentPage(item.href)
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">AI</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">AI Service Factory</div>
                <div className="text-sm font-medium text-gray-500">Automated Service Creation</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/automation/service-factory-dashboard.html"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Factory Dashboard
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: '🏢' },
        { name: 'Our Team', href: '/team', icon: '👥' },
        { name: 'Careers', href: '/careers', icon: '💼' },
        { name: 'Case Studies', href: '/case-studies', icon: '📊' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: '🤖' },
        { name: 'Autonomous Systems', href: '/ai-autonomous-systems', icon: '🚀' },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: '⚛️' },
        { name: 'Research & Development', href: '/research-development', icon: '🔬' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog', icon: '📝' },
        { name: 'Resources', href: '/resources', icon: '📚' },
        { name: 'Documentation', href: '/docs', icon: '📖' },
        { name: 'Sitemap', href: '/sitemap', icon: '🗺️' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact', icon: '📞' },
        { name: 'Privacy Policy', href: '/privacy', icon: '🔒' },
        { name: 'Terms of Service', href: '/terms', icon: '📋' },
        { name: 'Cookie Policy', href: '/cookies', icon: '🍪' },
      ]
    }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg"
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
            {navigationSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Need Help?</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
import React, { ReactNode } from 'react';

interface EnhancedLayoutProps {
  children: ReactNode;
}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="font-semibold text-lg">IT Equipment Marketplace</a>
          <nav className="space-x-4 text-sm">
            <a href="/products" className="hover:text-blue-600">Products</a>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="border-t bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} IT Equipment Marketplace
        </div>
      </footer>
    </div>
  );
}
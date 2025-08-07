import { ReactNode } from "react";

interface InteractiveNavigationProps {
  children?: ReactNode;
  className?: string;
}

export default function InteractiveNavigation({ 
  children, 
  className = "bg-white shadow-lg" 
}: InteractiveNavigationProps) {
  return (
    <nav className={className}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-bold text-gray-800">Zion Tech</a>
            <div className="hidden md:flex space-x-6">
              <a href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
}

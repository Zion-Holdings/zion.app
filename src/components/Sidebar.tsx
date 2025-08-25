import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={`w-64 bg-gray-800 p-6 ${className}`}>
      <nav className="space-y-4">
        <Link to="/" className="block text-white hover:text-cyan-400">Home</Link>
        <Link to="/services" className="block text-white hover:text-cyan-400">Services</Link>
        <Link to="/about" className="block text-white hover:text-cyan-400">About</Link>
        <Link to="/contact" className="block text-white hover:text-cyan-400">Contact</Link>
        <Link to="/faq" className="block text-white hover:text-cyan-400">FAQ</Link>
        <Link to="/help" className="block text-white hover:text-cyan-400">Help</Link>
      </nav>
    </aside>
  );
}
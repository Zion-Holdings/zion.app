import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogIn } from 'lucide-react';

export function UserMenu() {
  // For now, we'll show a simple login button
  // In a real app, this would check authentication state
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        className="flex items-center gap-2 px-4 py-2 text-white hover:text-zion-cyan transition-colors"
      >
        <LogIn className="w-4 h-4" />
        <span className="hidden sm:inline">Login</span>
      </Link>
    </div>
  );
}
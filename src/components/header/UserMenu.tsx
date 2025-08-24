import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { User, LogOut, Settings, UserPlus } from 'lucide-react';

export function UserMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center space-x-3">
        <Link to="/login">
          <Button variant="ghost" size="sm" className="text-zion-cyan hover:bg-zion-cyan/10">
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
            <UserPlus className="w-4 h-4 mr-2" />
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-zion-cyan hover:bg-zion-cyan/10"
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        <User className="w-4 h-4 mr-2" />
        {user.name || user.email}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50">
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-2 text-zion-slate-light hover:bg-zion-blue hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="w-4 h-4 mr-3" />
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-zion-slate-light hover:bg-zion-blue hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
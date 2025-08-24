import React from 'react';
import { Link } from 'react-router-dom';

export const UserMenu: React.FC = () => {
  return (
    <div className="relative">
      <button className="flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors">
        <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">
          <span className="text-zion-slate-dark font-semibold">U</span>
        </div>
        <span>User</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg shadow-lg py-2 hidden group-hover:block">
        <Link to="/profile" className="block px-4 py-2 text-white hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors">
          Profile
        </Link>
        <Link to="/settings" className="block px-4 py-2 text-white hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors">
          Settings
        </Link>
        <button className="block w-full text-left px-4 py-2 text-white hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors">
          Sign Out
        </button>
      </div>
    </div>
  );
};
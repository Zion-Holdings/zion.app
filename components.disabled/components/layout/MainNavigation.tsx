
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

interface MainNavigationProps {
  unreadCount?: number;
}

export function MainNavigation({ unreadCount = 0 }: MainNavigationProps) {
  return (
    <nav className="flex items-center space-x-4">
      {/* Main Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/marketplace"
          className="text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-lg hover:bg-zion-purple/10"
        >
          Marketplace
        </Link>
        <Link
          to="/services"
          className="text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-lg hover:bg-zion-purple/10"
        >
          Services
        </Link>
        <Link
          to="/talent"
          className="text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-lg hover:bg-zion-purple/10"
        >
          Talent
        </Link>
        <Link
          to="/equipment"
          className="text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-lg hover:bg-zion-purple/10"
        >
          Equipment
        </Link>
        <Link
          to="/green-it"
          className="text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-lg hover:bg-zion-purple/10"
        >
          Green IT
        </Link>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-2">
        {/* Notifications */}
        <Link
          to="/notifications"
          className="relative p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Link>

        {/* User Menu */}
        <div className="relative group">
          <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors">
            <User className="h-5 w-5" />
            <span className="hidden sm:block text-sm font-medium">User</span>
          </button>
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
              >
                Settings
              </Link>
              <hr className="border-zion-purple/20 my-2" />
              <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

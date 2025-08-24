import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export function UserMenu() {
  // For now, we'll show a simple login button
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        className="flex items-center px-3 py-2 text-sm bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark rounded-lg transition-colors font-medium"
      >
        <LogIn className="w-4 h-4 mr-2" />
        Login
      </Link>
    </div>
  );
}
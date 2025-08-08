import Link from 'next/link';
import { useAuth } from '../ui/AuthProvider';
import { useState } from 'react';

export default function EnhancedNavigation() {
  const { role, setRole } = useAuth();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const dashboardPath = role === 'client' ? '/dashboard/client' : '/dashboard/talent';

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-indigo-600" />
            Zion
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="relative">
            <button onClick={() => setIsExploreOpen((v) => !v)} className="button-hover px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-900">
              Explore
            </button>
            {isExploreOpen && (
              <div className="absolute mt-2 w-44 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg py-2">
                <Link href="/talent"><a className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Browse Talent</a></Link>
                <Link href="/jobs"><a className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Browse Jobs</a></Link>
              </div>
            )}
          </div>
          <Link href={dashboardPath}><a className="hover:underline">Dashboard</a></Link>
          <Link href="/messages"><a className="hover:underline">Messages</a></Link>
          {role === 'client' && (
            <Link href="/jobs/new"><a className="px-3 py-1 rounded-md bg-blue-600 text-white button-hover">Post a Job</a></Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button onClick={() => setIsUserOpen((v) => !v)} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600" aria-label="User Menu" />
            {isUserOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg py-2 text-sm">
                <Link href="/account"><a className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">My Account</a></Link>
                <Link href="/settings"><a className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Settings</a></Link>
                <div className="border-t border-gray-200 dark:border-gray-800 my-1" />
                <button onClick={() => setRole(role === 'client' ? 'talent' : 'client')} className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Switch to {role === 'client' ? 'Talent' : 'Client'}</button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
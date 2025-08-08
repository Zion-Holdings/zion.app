import Link from 'next/link';
import { useRole } from '../context/RoleContext';

export default function EnhancedNavigation() {
  const { role } = useRole();

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold">Zion</a>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/jobs/post"><a className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Post a Job</a></Link>
          <Link href="/talent"><a className="px-3 py-1.5 rounded-md bg-gray-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition">Browse Talent</a></Link>
          <Link href="/dashboard"><a className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">{role === 'client' ? 'Client Dashboard' : 'Talent Dashboard'}</a></Link>
        </div>
      </div>
    </nav>
  );
}
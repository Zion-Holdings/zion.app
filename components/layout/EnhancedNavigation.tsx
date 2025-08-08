import Link from 'next/link';
import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useUnreadNotificationsCount } from '../../hooks/useUnreadNotificationsCount';

export default function EnhancedNavigation() {
  const [isClient, setIsClient] = useState(false);
  const unread = useUnreadNotificationsCount();
  useEffect(() => setIsClient(true), []);

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold">Zion</a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/notifications">
            <a className="relative inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
              <Bell className="h-5 w-5" />
              {isClient && unread > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 px-1 text-xs font-bold text-white shadow">
                  {unread}
                </span>
              )}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
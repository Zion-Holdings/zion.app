import Link from 'next/link';
import React from 'react';

export default function EnhancedNavigation() {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
          <Link href="/summit"><a className="font-medium">Summit</a></Link>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}
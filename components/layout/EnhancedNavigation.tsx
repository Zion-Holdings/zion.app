import Link from 'next/link';
import dynamic from 'next/dynamic';

const Web3LoginButton = dynamic(() => import('../auth/Web3LoginButton'), { ssr: false });

export default function EnhancedNavigation() {
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
          <Link href="/settings/account"><a>Account</a></Link>
          <Web3LoginButton />
        </div>
      </div>
    </nav>
  );
}
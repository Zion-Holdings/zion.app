import Link from 'next/link';
import { useTenant } from '../multiverse/TenantProvider';

export default function EnhancedNavigation() {
  const { tenant } = useTenant();
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold flex items-center gap-2">
            {tenant?.logoUrl ? <img src={tenant.logoUrl} alt={tenant.name} className="w-6 h-6 rounded" /> : null}
            <span>{tenant?.name ?? 'Zion'}</span>
          </a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <span className="inline-flex items-center gap-1 text-xs">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent, #3b82f6)' }} />
            <span className="text-gray-500">{tenant?.subdomain ?? 'global'}</span>
          </span>
        </div>
      </div>
    </nav>
  );
}
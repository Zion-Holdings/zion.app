import Link from 'next/link';
import { useTenant } from '../../context/TenantContext';

export default function EnhancedNavigation() {
  const { tenant } = useTenant();
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold" style={{ color: tenant.primaryColor }}>
            {tenant.brandName}
          </a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          {tenant.navbarLinks?.map((l) => (
            <Link key={l.href} href={l.href}><a>{l.label}</a></Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
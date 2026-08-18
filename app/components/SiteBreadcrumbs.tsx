import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SiteBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function SiteBreadcrumbs({ items, className = '' }: SiteBreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className={`flex items-center gap-2 text-sm text-slate-400 ${className}`}>
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <span className="mx-2 text-slate-600">/</span>}
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="hover:text-purple-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

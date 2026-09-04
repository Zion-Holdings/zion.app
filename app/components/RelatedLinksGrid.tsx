import Link from 'next/link';

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
  category: string;
  icon?: string;
}

interface RelatedLinksGridProps {
  links: RelatedLink[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  Services: 'text-purple-300',
  Tools: 'text-blue-300',
  Solutions: 'text-emerald-300',
  Products: 'text-amber-300',
  Resources: 'text-rose-300',
  Company: 'text-cyan-300',
};

const CARD_BG =
  'bg-slate-900/60 border border-slate-700/60 backdrop-blur-sm';

export default function RelatedLinksGrid({
  links,
  title = 'Related Content',
  subtitle = 'Continue exploring our offerings to find the best fit for your needs.',
  className = '',
}: RelatedLinksGridProps) {
  return (
    <aside
      className={`related-links-grid my-12 ${className}`}
      aria-label="Recommended related content"
    >
      <nav className="container-page">
        <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
        {subtitle && (
          <p className="text-slate-400 text-sm mb-8 max-w-2xl">{subtitle}</p>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group block h-full rounded-xl border ${CARD_BG} p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-purple-500/10`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        CATEGORY_COLORS[link.category] || 'text-slate-400'
                      }`}
                    >
                      {link.category}
                    </span>
                    {link.icon && (
                      <span className="text-2xl" aria-hidden="true">
                        {link.icon}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-3">
                    {link.description}
                  </p>
                  <span className="mt-auto pt-4 text-xs text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

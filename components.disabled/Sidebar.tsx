import Link from 'next/link';
import { useMemo } from 'react';

interface NavLink {
  href: string;
  label: string;
}

export default function Sidebar() {
  const pageLinks: NavLink[] = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/automation', label: 'Automation' },
      { href: '/front', label: 'Front' },
      { href: '/main/front', label: 'Main / Front' },
      { href: '/newsroom', label: 'Newsroom' },
      { href: '/reports/ai-trends', label: 'Reports / AI Trends' },
      { href: '/reports/seo', label: 'Reports / SEO' },
      { href: '/site-health', label: 'Site Health' },
    ],
    []
  );

  const featureLinks: NavLink[] = useMemo(
    () => [
      { href: '/#features', label: 'Self‑Improving' },
      { href: '/#features', label: 'Repo Sync' },
      { href: '/#features', label: 'Zero Ops' },
      { href: '/#features', label: 'Safety‑First' },
      { href: '/#features', label: 'Scalable' },
      { href: '/#features', label: 'Observability' },
      { href: '/#features', label: 'Futuristic UI' },
      { href: '/#features', label: 'Cloud Automations' },
      { href: '/#features', label: 'Edge‑Optimized' },
    ],
    []
  );

  // Netlify Functions exposed under /.netlify/functions/<name>
  const serviceNames = useMemo(
    () => [
      'auto-scheduler',
      'autonomous-invention-orchestrator',
      'broken-image-scanner',
      'cloud_orchestrator',
      'continuous-front-runner',
      'continuous-orchestrator',
      'dead-code-audit',
      'fast-front-promoter',
      'fast-orchestrator',
      'feature-advertiser',
      'features-capabilities-benefits-advertiser',
      'media-og-and-optimize',
      'newsroom-auto-publisher',
      'readme-advertiser',
      'repo-radar-and-graph',
      'schedule-content-index',
      'schedule-homepage',
      'schedule-knowledge-graph',
      'schedule-site-health',
      'security-audit',
      'sitemap_runner',
      'ui-enhancer',
      'ultrafast-front-orchestrator',
      'ultrafast-orchestrator',
      'front-ads-promoter',
      'front-enhancer',
      'front-index-futurizer',
      'front-index-orchestrator',
      'front-index-scheduler',
      'front-maximizer',
      'frontpage-enhancer',
      'frontpage-scheduler',
      'home-visionary-expander',
      'homepage-advertiser-scheduler',
      'homepage-updater-scheduler',
      'homepage-updater',
      'homepage_advertiser',
      'hyper-front-index-accelerator',
      'innovation-lab',
      'link-and-health-scheduler',
      'maintenance-scheduler',
      'marketing-and-features-promo',
      'marketing-scheduler',
      'front-visionary-expander',
    ],
    []
  );

  const serviceLinks: NavLink[] = useMemo(
    () => serviceNames.map((name) => ({ href: `/.netlify/functions/${name}`, label: name })),
    [serviceNames]
  );

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-72 overflow-y-auto border-r border-white/10 bg-slate-950/90 px-4 py-6 backdrop-blur-md">
      <div className="mb-4 px-2 text-lg font-bold tracking-wide">
        <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Zion</span>
        <span className="ml-2 text-white/60">Navigation</span>
      </div>

      <nav className="space-y-6">
        <div>
          <div className="px-2 text-xs uppercase tracking-wider text-white/50">Pages</div>
          <ul className="mt-2 space-y-1">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="px-2 text-xs uppercase tracking-wider text-white/50">Features</div>
          <ul className="mt-2 space-y-1">
            {featureLinks.map((link, idx) => (
              <li key={`${link.label}-${idx}`}>
                <Link href={link.href}>
                  <a className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="px-2 text-xs uppercase tracking-wider text-white/50">Services</div>
          <ul className="mt-2 space-y-1">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="block truncate rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
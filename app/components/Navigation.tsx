'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  PRIMARY_NAV_LINKS,
  SOLUTION_LINKS,
  RESOURCE_LINKS,
  FEATURED_AI_SERVICE_LINKS,
  AI_LAB_LINKS,
  type NavigationLink,
} from '../constants/navigation';
import { CATEGORIES } from '../constants/categories';

const SITE_TITLE = 'Zion Tech Group';

const SERVICE_GRID = CATEGORIES.slice(0, 10);

const RESOURCE_GROUPS = [
  { title: 'Platform', items: RESOURCE_LINKS.filter((l) => ['Agent Monitoring', 'System Status'].includes(l.name)) },
  { title: 'Growth', items: [{ name: '🎯 Leads Control', href: '/leads', badge: 'New' }, { name: '📖 Blog', href: '/blog' }, { name: '📚 Academy', href: '/academy' }] },
  { title: 'Company', items: [{ name: '🤝 Partners', href: '/partners' }, { name: '❓ FAQ', href: '/faq' }, { name: 'ℹ️ About Us', href: '/about' }, { name: '💬 Help', href: '/help' }] },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [aiLabOpen, setAiLabOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setResourcesOpen(false);
    setAiLabOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobilePanelRef.current && !mobilePanelRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function isActive(href: string): boolean {
    if (href === '/') return pathname === '/';
    if (href.includes('?category=')) {
      const basePath = href.split('?category=')[0];
      return pathname?.startsWith(basePath) ?? false;
    }
    return pathname?.startsWith(href) ?? false;
  }

  function NavLink({ link, onClick }: { link: NavigationLink; onClick?: () => void }) {
    const active = isActive(link.href);
    return (
      <Link
        href={link.href}
        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          active
            ? 'text-purple-400 bg-purple-500/10'
            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
        }`}
        onClick={onClick}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <header id="site-navigation" className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Zion Tech Group home">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {SITE_TITLE}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <div className="relative">
            <button
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => { setServicesOpen(!servicesOpen); setSolutionsOpen(false); setResourcesOpen(false); }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[640px] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-4 z-50" role="menu">
                <div className="grid grid-cols-2 gap-3">
                  {SERVICE_GRID.map((category) => (
                    <Link
                      key={category.key}
                      href={`/services/?category=${category.key}`}
                      className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 hover:border-purple-500/40 hover:bg-slate-900 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-xl">{category.emoji}</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white">{category.label}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-slate-800 mt-3 pt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Explore all service categories</span>
                  <Link href="/services" className="text-sm font-semibold text-purple-300 hover:text-purple-200" onClick={() => setServicesOpen(false)}>
                    View full catalog →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => { setAiLabOpen(!aiLabOpen); setServicesOpen(false); setSolutionsOpen(false); setResourcesOpen(false); }}
              aria-expanded={aiLabOpen}
              aria-haspopup="true"
            >
              AI Lab ▾
            </button>
            {aiLabOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-4 z-50" role="menu">
                <div className="space-y-1">
                  {AI_LAB_LINKS.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800"
                      onClick={() => setAiLabOpen(false)}
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => { setSolutionsOpen(!solutionsOpen); setServicesOpen(false); setResourcesOpen(false); setAiLabOpen(false); }}
              aria-haspopup="true"
            >
              Solutions ▾
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50" role="menu">
                {SOLUTION_LINKS.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800"
                    onClick={() => setSolutionsOpen(false)}
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => { setResourcesOpen(!resourcesOpen); setServicesOpen(false); setSolutionsOpen(false); }}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources ▾
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-4 z-50" role="menu">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Resources</div>
                    <div className="space-y-1">
                      {RESOURCE_GROUPS.flatMap((group) => group.items).map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800"
                          onClick={() => setResourcesOpen(false)}
                          role="menuitem"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {PRIMARY_NAV_LINKS.filter(l => !['/', '/services', '/solutions', '/agents-monitoring', '/ai'].includes(l.href)).map((link, i) => (
            <NavLink key={i} link={link} />
          ))}

          <Link href="/agents-monitoring" className="relative ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/80 to-purple-600/80 text-xs font-semibold text-white hover:from-violet-500 hover:to-purple-500 transition-all flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            AI Agents
          </Link>

          <Link href="/contact" className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25">
            Get Free Consultation
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div ref={mobilePanelRef} className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {PRIMARY_NAV_LINKS.map((link, i) => (
            <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
          ))}
          <div className="border-t border-slate-800 pt-2 mt-2">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1 px-3">Solutions</div>
            {SOLUTION_LINKS.map((link, i) => (
              <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
            ))}
          </div>
          <div className="border-t border-slate-800 pt-2 mt-2">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1 px-3">Featured AI</div>
            {FEATURED_AI_SERVICE_LINKS.slice(0, 5).map((link, i) => (
              <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
            ))}
          </div>
          <div className="border-t border-slate-800 pt-2 mt-2">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1 px-3">AI Lab</div>
            {AI_LAB_LINKS.map((link, i) => (
              <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
            ))}
          </div>
          <div className="border-t border-slate-800 pt-2 mt-2">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1 px-3">Resources</div>
            {RESOURCE_LINKS.map((link, i) => (
              <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
            ))}
          </div>
          <div className="pt-3">
            <Link href="/agents-monitoring" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600/80 to-purple-600/80 text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              AI Agent Dashboard
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/contact" className="block text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

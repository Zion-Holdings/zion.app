'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { PRIMARY_NAV_LINKS, SOLUTION_LINKS, FEATURED_AI_SERVICE_LINKS, TOOLS_LINKS, NavigationLink } from '@/constants/navigation';

const SITE_TITLE = 'Zion Tech Group';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setToolsOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
    setMobileToolsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  function isActiveInGroup(href: string): boolean {
    if (href === '/') return pathname === '/';
    const base = href.split('?category=')[0];
    if (href !== base) return pathname?.startsWith(base) ?? false;
    return pathname?.startsWith(href) ?? false;
  }

  function DropdownButton({ label, open, onClick, className, active }: { label: string; open: boolean; onClick: () => void; className?: string; active?: boolean }) {
    return (
      <button
        className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${active ? 'text-purple-400' : 'text-slate-300 hover:text-white'} ${open ? 'text-purple-400 bg-purple-500/10' : ''} ${className || ''}`}
        onClick={onClick}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }

  function NavLink({ link, onClick }: { link: NavigationLink; onClick?: () => void }) {
    const active = isActive(link.href);
    return (
      <Link
        href={link.href}
        aria-current={active ? 'page' : undefined}
        className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          active
            ? 'text-purple-400 bg-purple-500/10'
            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
        }`}
        onClick={onClick}
      >
        {link.name}
        {active && (
          <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-purple-400" aria-hidden="true" />
        )}
      </Link>
    );
  }

  function MobileAccordionItem({ label, open, onClick, children }: { label: string; open: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
      <div className="border-b border-slate-800 last:border-b-0">
        <button
          className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
          onClick={onClick}
          aria-expanded={open}
        >
          {label}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="px-3 pb-3 space-y-1">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <header id="site-navigation" className={`sticky top-0 z-50 w-full border-b transition-all ${scrolled ? 'border-slate-800 bg-slate-950/95 backdrop-blur-2xl shadow-lg shadow-black/20' : 'border-slate-800/60 bg-slate-950/80 backdrop-blur-xl'}`}>
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Zion Tech Group home">
          <span className="flex flex-col leading-tight">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {SITE_TITLE}
            </span>
            <span className="hidden sm:block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              AI Delivery Studio
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <div className="relative">
            <DropdownButton label="Services" open={servicesOpen} onClick={() => { setServicesOpen(!servicesOpen); setSolutionsOpen(false); setToolsOpen(false); }} active={isActive('/services')} />
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[640px] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-4 z-50" role="menu">
                <div className="grid grid-cols-2 gap-3">
                  {FEATURED_AI_SERVICE_LINKS.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive(link.href) ? 'text-purple-300 bg-purple-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                      onClick={() => setServicesOpen(false)}
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-slate-800 mt-3 pt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Explore all service categories</span>
                  <Link href="/services/" className="text-sm font-semibold text-purple-300 hover:text-purple-200" onClick={() => setServicesOpen(false)}>
                    View full catalog →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <DropdownButton label="Solutions" open={solutionsOpen} onClick={() => { setSolutionsOpen(!solutionsOpen); setServicesOpen(false); setToolsOpen(false); }} active={isActive('/solutions')} />
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50" role="menu">
                {SOLUTION_LINKS.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(link.href) ? 'text-purple-300 bg-purple-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
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
            <DropdownButton label="Tools" open={toolsOpen} onClick={() => { setToolsOpen(!toolsOpen); setServicesOpen(false); setSolutionsOpen(false); }} active={isActive('/tools')} />
            {toolsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50" role="menu">
                {TOOLS_LINKS.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(link.href) ? 'text-purple-300 bg-purple-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                    onClick={() => setToolsOpen(false)}
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {PRIMARY_NAV_LINKS.filter(l => !['/', '/services', '/solutions', '/tools'].includes(l.href)).map((link, i) => (
            <NavLink key={i} link={link} />
          ))}

          <Link
            href="/search/"
            className="ml-2 inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-300 hover:border-purple-400/40 hover:text-white"
            aria-label="Open quick navigation search"
          >
            <span>Quick Find</span>
            <span className="hidden xl:inline rounded border border-slate-700 px-1.5 py-0.5 text-[10px] text-slate-400">Ctrl/⌘ K</span>
          </Link>

          <Link href="/agents-monitoring/" className="relative ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/80 to-purple-600/80 text-xs font-semibold text-white hover:from-violet-500 hover:to-purple-500 transition-all flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            AI Agents
          </Link>

          <Link href="/start-project/" className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold text-white hover:from-purple-500 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25">
            Start Project
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
        <div ref={mobilePanelRef} className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
          <MobileAccordionItem label="Services" open={mobileServicesOpen} onClick={() => { setMobileServicesOpen(!mobileServicesOpen); setMobileSolutionsOpen(false); setMobileToolsOpen(false); }}>
            {FEATURED_AI_SERVICE_LINKS.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={i}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? 'text-purple-300 bg-purple-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/services/" className="block rounded-lg px-3 py-2 text-sm font-semibold text-purple-300 hover:text-purple-200 mt-1" onClick={() => setMobileOpen(false)}>
              View full catalog →
            </Link>
          </MobileAccordionItem>

          <MobileAccordionItem label="Solutions" open={mobileSolutionsOpen} onClick={() => { setMobileSolutionsOpen(!mobileSolutionsOpen); setMobileServicesOpen(false); setMobileToolsOpen(false); }}>
            {SOLUTION_LINKS.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={i}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? 'text-purple-300 bg-purple-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </MobileAccordionItem>

          <MobileAccordionItem label="Tools" open={mobileToolsOpen} onClick={() => { setMobileToolsOpen(!mobileToolsOpen); setMobileServicesOpen(false); setMobileSolutionsOpen(false); }}>
            {TOOLS_LINKS.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={i}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? 'text-purple-300 bg-purple-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </MobileAccordionItem>

          <div className="px-4 py-2 space-y-1">
            {PRIMARY_NAV_LINKS.filter(l => !['/', '/services', '/solutions', '/tools'].includes(l.href)).map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={i}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active ? 'text-purple-400 bg-purple-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="p-4 pt-3 space-y-2">
            <Link href="/agents-monitoring/" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600/80 to-purple-600/80 text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              AI Agent Dashboard
            </Link>
            <Link href="/contact/" className="block text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

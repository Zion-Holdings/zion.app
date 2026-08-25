// app/components/HermesAdvertBanner.tsx
// Floating advertisement banner promoting Hermes Agent services
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const HERMES_ADVERT_BANNERS = [
  {
    bgColor: 'from-purple-900/40 via-fuchsia-900/30 to-pink-900/40',
    borderColor: 'border-purple-500/30',
    title: 'Deploy Autonomous AI Agents',
    subtitle: 'Hermes Agent by Nous Research — 24/7 autonomous operations for your business.',
    cta: 'Learn More',
    href: '/hermes-agents/',
  },
  {
    bgColor: 'from-indigo-900/40 via-purple-900/30 to-violet-900/40',
    borderColor: 'border-indigo-500/30',
    title: 'Build a Team of Specialist AI Bots',
    subtitle: 'Hermes Agent Bot Mode — named Bots with their own models, memory, and platform connections.',
    cta: 'Learn About Bot Mode',
    href: '/services/hermes-agent-bot-mode/',
  },
  {
    bgColor: 'from-violet-900/40 via-indigo-900/30 to-blue-900/40',
    borderColor: 'border-violet-500/30',
    title: 'Automate Your Growth Pipeline',
    subtitle: 'Hermes Growth Engine Agent — discover services, generate pages, send outreach, track leads 24/7.',
    cta: 'See Growth Engine',
    href: '/services/hermes-growth-engine-agent/',
  },
  {
    bgColor: 'from-fuchsia-900/40 via-pink-900/30 to-rose-900/40',
    borderColor: 'border-fuchsia-500/30',
    title: 'Connect to 6000+ MCP Servers',
    subtitle: 'Hermes Agent Plugin Development — extend with custom tools, hooks, and 1,000+ SaaS integrations.',
    cta: 'Build a Plugin',
    href: '/services/hermes-agent-plugin-development/',
  },
  {
    bgColor: 'from-blue-900/40 via-indigo-900/30 to-cyan-900/40',
    borderColor: 'border-blue-500/30',
    title: 'Master Hermes Agent',
    subtitle: 'Training & Certification — from installation to building specialist bot teams.',
    cta: 'Training Info',
    href: '/services/hermes-agent-training/',
  },
];

export default function HermesAdvertBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERMES_ADVERT_BANNERS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  const banner = HERMES_ADVERT_BANNERS[currentIndex];

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 hidden max-w-sm w-full sm:max-w-xs md:block bg-gradient-to-r ${banner.bgColor} border ${banner.borderColor} rounded-2xl p-4 shadow-2xl backdrop-blur-sm`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-white font-semibold text-sm mb-1">{banner.title}</h3>
          <p className="text-slate-300 text-xs leading-relaxed">{banner.subtitle}</p>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-slate-300 hover:text-white transition-colors shrink-0"
          aria-label="Dismiss banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-3 flex gap-2">
        <Link
          href={banner.href}
          className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all"
        >
          {banner.cta}
        </Link>
        {HERMES_ADVERT_BANNERS.length > 1 && (
          <div className="flex items-center gap-1">
            {HERMES_ADVERT_BANNERS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  i === currentIndex ? 'bg-purple-400 w-3' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

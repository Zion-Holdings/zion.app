import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import Link from 'next/link';

// Simple icons using inline SVG to avoid external assets
function StarIcon({ className = 'w-5 h-5 text-yellow-500' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
  );
}

function AppleBadge({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg bg-black text-white px-4 py-2 shadow hover:opacity-90">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.365 1.43c0 1.14-.42 2.18-1.26 3.11-.91 1.02-2.01 1.61-3.2 1.52-.12-1.02.37-2.12 1.21-3.06.86-.97 2.24-1.67 3.25-1.57-.01 0 .01 0 0 0zM20.51 17.14c-.45 1.05-1 2.03-1.66 2.93-.88 1.2-1.59 2.04-2.57 2.05-.97.02-1.28-.66-2.66-.66-1.38 0-1.72.64-2.69.68-1.09.04-1.93-1.02-2.82-2.22-1.54-2.1-2.73-5.93-1.14-8.52.79-1.27 2.2-2.08 3.73-2.1 1.16-.02 2.25.78 2.66.78.4 0 1.51-.96 2.85-.82.49.02 1.88.2 2.77 1.6-.07.05-1.65.97-1.63 2.88.02 2.3 2.06 3.07 2.09 3.08-.02.06-.39 1.36-1.93 1.62z" />
      </svg>
      <div className="leading-tight">
        <div className="text-[10px] uppercase opacity-80">Download on the</div>
        <div className="text-sm font-semibold">App Store</div>
      </div>
    </a>
  );
}

function GoogleBadge({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg bg-[#121212] text-white px-4 py-2 shadow hover:opacity-90">
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="100%" y1="0%">
            <stop offset="0%" stopColor="#00A0FF" />
            <stop offset="100%" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient id="g2" x1="100%" y1="0%">
            <stop offset="0%" stopColor="#FFE000" />
            <stop offset="100%" stopColor="#FFA000" />
          </linearGradient>
          <linearGradient id="g3" x1="100%" y1="0%">
            <stop offset="0%" stopColor="#FF3A44" />
            <stop offset="100%" stopColor="#C31162" />
          </linearGradient>
          <linearGradient id="g4" x1="100%" y1="0%">
            <stop offset="0%" stopColor="#32A071" />
            <stop offset="100%" stopColor="#00F076" />
          </linearGradient>
        </defs>
        <path d="M3.6 2.4c-.28.27-.44.66-.44 1.11v16.98c0 .45.16.83.44 1.1l.07.06 9.36-9.36v-.6L3.67 2.33 3.6 2.4z" fill="url(#g1)" />
        <path d="M16.2 15.99l-3.17-3.17v-.6l3.17-3.17.09.05 3.76 2.14c1.08.62 1.08 1.64 0 2.26l-3.76 2.14-.09.05z" fill="url(#g2)" />
        <path d="M16.29 15.94L13.03 12.68 3.6 22.11c.36.35.95.38 1.63 0l11.06-6.17z" fill="url(#g3)" />
        <path d="M16.29 9.06L5.23 2.89C4.55 2.5 3.96 2.54 3.6 2.89l9.43 9.43 3.26-3.26z" fill="url(#g4)" />
      </svg>
      <div className="leading-tight">
        <div className="text-[10px] uppercase opacity-80">Get it on</div>
        <div className="text-sm font-semibold">Google Play</div>
      </div>
    </a>
  );
}

function SmartBanner({ iosUrl, androidUrl, deepLink }: { iosUrl: string; androidUrl: string; deepLink: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = localStorage.getItem('smartBannerDismissed') === '1';
    if (dismissed) return;
    const ua = navigator.userAgent || '';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    if (isMobile) setVisible(true);
  }, []);

  if (!visible) return null;
  const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const storeUrl = isIOS ? iosUrl : androidUrl;

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-5xl">
        <div className="m-2 rounded-xl bg-white/95 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow flex items-center gap-3 px-4 py-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />
          <div className="flex-1">
            <div className="text-sm font-semibold">Zion App</div>
            <div className="text-xs opacity-70">Hire from anywhere. AI-match instantly.</div>
          </div>
          <div className="flex items-center gap-2">
            <a href={deepLink} className="text-xs px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Open</a>
            <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700">Install</a>
            <button
              aria-label="Dismiss"
              onClick={() => { localStorage.setItem('smartBannerDismissed', '1'); setVisible(false); }}
              className="text-xs px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.zion.app';
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';

const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';

const testimonials = [
  { name: 'Priya K.', role: 'Startup Founder', quote: 'We filled a remote role in 48 hours. The app made it effortless.' },
  { name: 'Marco V.', role: 'CTO', quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.' },
  { name: 'Amira H.', role: 'Project Lead', quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.' },
];

export default function MobileLaunchPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = useState('');

  // Auto-rotate testimonial index
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  const qrHref = useMemo(() => {
    const target = SITE_BASE_URL ? `${SITE_BASE_URL}/download` : (typeof window !== 'undefined' ? `${window.location.origin}/download` : '/download');
    const encoded = encodeURIComponent(target);
    return `https://chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setError(err?.message || 'Something went wrong.');
    }
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>Zion Mobile App — iOS & Android</title>
        <meta name="description" content="Hire from anywhere, AI-match instantly, and track milestones on the go with the Zion app." />
        <link rel="canonical" href="/download" />
        <meta property="og:title" content="Zion Mobile App" />
        <meta property="og:description" content="Hire from anywhere. AI-match instantly. Track milestones on the go." />
      </Head>

      <SmartBanner iosUrl={IOS_APP_URL} androidUrl={ANDROID_APP_URL} deepLink={DEEP_LINK_URL} />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Zion App</h1>
            <p className="mt-3 text-base md:text-lg opacity-90">Hire from anywhere, AI-match instantly, and track milestones on the go.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <AppleBadge href={IOS_APP_URL} />
              <GoogleBadge href={ANDROID_APP_URL} />
              <Link href="/open-app"><a className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10">Open app</a></Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Phone mockup */}
            <div className="relative h-96 w-48 md:h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200" />
              <div className="h-full w-full rounded-[2rem] overflow-hidden">
                <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col">
                  <div className="text-xs font-semibold">Zion</div>
                  <div className="mt-2 flex-1 rounded-xl bg-white shadow-inner p-3">
                    <div className="font-semibold">Instant AI Matches</div>
                    <div className="mt-2 text-xs text-gray-600">Top candidates matched to your role in seconds…</div>
                    <div className="mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-md bg-gray-100" />
                      <div className="h-10 rounded-md bg-gray-100" />
                      <div className="h-10 rounded-md bg-gray-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* QR code */}
        <div className="mt-8 flex items-center gap-4">
          <img src={qrHref} alt="QR code to download Zion app" className="h-28 w-28 rounded-lg bg-white/90 p-1 shadow" />
          <div className="text-sm opacity-90">
            Scan to open this page on your phone
            <div className="opacity-80">Or tap a store badge above</div>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <div className="text-lg font-semibold">Hire from anywhere</div>
          <p className="mt-2 text-sm opacity-80">Global talent network with timezone-aware availability.</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/40 dark:to-cyan-900/40" />
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <div className="text-lg font-semibold">AI-match instantly</div>
          <p className="mt-2 text-sm opacity-80">Smart matching surfaces top candidates in seconds.</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40" />
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <div className="text-lg font-semibold">Track milestones</div>
          <p className="mt-2 text-sm opacity-80">Manage deliverables, approvals, and progress on the go.</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40" />
        </div>
      </section>

      {/* Trust & Community */}
      <section className="mt-12">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
          <span className="text-sm opacity-80">4.9 average rating</span>
        </div>
        <h2 className="mt-2 text-xl font-semibold">Why people love the Zion app</h2>
        <div className="relative mt-4 overflow-hidden">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${idx * 100}%)`, width: `${testimonials.length * 100}%` }}>
            {testimonials.map((t) => (
              <div key={t.name} className="w-full md:w-1/3 flex-shrink-0 pr-4">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 h-full">
                  <p className="text-sm">“{t.quote}”</p>
                  <div className="mt-3 text-xs opacity-80">{t.name} • {t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email opt-in */}
      <section className="mt-12 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
        <h3 className="text-lg font-semibold">Get early access to new features</h3>
        <p className="mt-1 text-sm opacity-80">Join the list and we’ll let you know when new capabilities drop.</p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60"
          >
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>
        </form>
        {status === 'success' && <div className="mt-2 text-sm text-emerald-600">Thanks! You’re on the list.</div>}
        {status === 'error' && <div className="mt-2 text-sm text-rose-600">{error || 'Please try again later.'}</div>}
      </section>

      {/* Helper links */}
      <section className="mt-10 text-sm opacity-80">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/open-app"><a className="underline">Deep link: /open-app</a></Link>
          <span>•</span>
          <Link href="/download"><a className="underline">Shareable link: /download</a></Link>
        </div>
      </section>
    </EnhancedLayout>
  );
}
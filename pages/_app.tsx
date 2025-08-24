import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

function setCookie(name: string, value: string, days = 90) {
  try {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  } catch {}
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

async function recordReferralVisit(code: string) {
  try {
    await fetch('/api/referrals/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, event: 'visit', url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' }),
    });
  } catch {}
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const codeFromQuery = url.searchParams.get('partner') || url.searchParams.get('ref') || '';
    const existing = getCookie('ref_code') || localStorage.getItem('ref_code') || '';

    if (codeFromQuery && codeFromQuery !== existing) {
      localStorage.setItem('ref_code', codeFromQuery);
      setCookie('ref_code', codeFromQuery, 120);
      recordReferralVisit(codeFromQuery);
    }
  }, [router.asPath]);

  return (
    <EnhancedLayout>
      <Component {...pageProps} />
    </EnhancedLayout>
  );
}

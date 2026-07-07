import type { Metadata } from 'next';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/privacy') {
      window.location.replace('/privacy/');
    }
  }, []);
  return null;
}

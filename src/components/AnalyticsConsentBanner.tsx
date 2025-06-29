import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { safeStorage } from '@/utils/safeStorage';
import { initGA } from '@/lib/analytics';
import { initPostHog } from '@/lib/posthog';
import { setCookie, getCookie } from '@/utils/cookies';

const CONSENT_COOKIE_NAME = 'analyticsConsent';
const COOKIE_EXPIRATION_DAYS = 365;

export const AnalyticsConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    if (safeStorage.isAvailable) {
      consent = safeStorage.getItem(CONSENT_COOKIE_NAME);
    } else {
      consent = getCookie(CONSENT_COOKIE_NAME);
    }

    if (consent === 'granted') {
      initGA();
      initPostHog();
    } else if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const storeConsent = (consentValue: 'granted' | 'denied') => {
    if (safeStorage.isAvailable) {
      safeStorage.setItem(CONSENT_COOKIE_NAME, consentValue);
    } else {
      setCookie(CONSENT_COOKIE_NAME, consentValue, COOKIE_EXPIRATION_DAYS);
    }
    setShowBanner(false);
  };

  const accept = () => {
    storeConsent('granted');
    initGA();
    initPostHog();
  };

  const decline = () => {
    storeConsent('denied');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/90 text-gray-200 p-4 pb-6 md:p-6 text-sm flex flex-col md:flex-row items-start md:items-center gap-3">
      <p className="flex-1">
        We use analytics cookies to improve the site.{' '}
        <Link href="/privacy" className="underline">
          Learn more
        </Link>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={decline}
          className="px-3 py-1 rounded bg-muted text-foreground hover:bg-muted/90 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="px-3 py-1 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/90 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

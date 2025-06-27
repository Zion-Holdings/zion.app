import React, { useEffect, useState } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { initGA } from '@/lib/analytics';
import { initPostHog } from '@/lib/posthog';

export const AnalyticsConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = safeStorage.getItem('analyticsConsent');
    if (consent === 'granted') {
      initGA();
      initPostHog();
    } else if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const accept = () => {
    safeStorage.setItem('analyticsConsent', 'granted');
    setShowBanner(false);
    initGA();
    initPostHog();
  };

  const decline = () => {
    safeStorage.setItem('analyticsConsent', 'denied');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/90 text-gray-200 p-4 pb-6 md:p-6 text-sm flex flex-col md:flex-row items-start md:items-center gap-3">
      <p className="flex-1">
        We use analytics cookies to improve the site.{' '}
        <a href="/privacy" className="underline">
          Learn more
        </a>
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

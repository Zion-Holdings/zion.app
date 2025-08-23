import React, { useEffect, useState } from 'react';
import { SEO } from '@/components/SEO';
import { setCookie, getCookie } from '@/utils/cookies';
import { safeStorage } from '@/utils/safeStorage';

export default function PrivacySettings() {
  const [consent, setConsent] = useState<'granted' | 'denied' | null>(null);

  useEffect(() => {
    const stored = getCookie('analyticsConsent') || safeStorage.getItem('analyticsConsent');
    if (stored === 'granted' || stored === 'denied') {
      setConsent(stored as 'granted' | 'denied');
    } else {
      setConsent('denied');
    }
  }, []);

  const handleChange = (value: 'granted' | 'denied') => {
    setConsent(value);
    setCookie('analyticsConsent', value, 365);
    safeStorage.setItem('analyticsConsent', value);
  };

  return (
    <>
      <SEO title="Privacy Settings" description="Manage your privacy preferences" />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Privacy Settings</h1>
        <div className="space-y-4">
          <p>Control your analytics tracking preferences.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleChange('granted')}
              className={`px-3 py-1 rounded ${consent === 'granted' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}
            >
              Accept Analytics Cookies
            </button>
            <button
              onClick={() => handleChange('denied')}
              className={`px-3 py-1 rounded ${consent === 'denied' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}
            >
              Decline Analytics Cookies
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

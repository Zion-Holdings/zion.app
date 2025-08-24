import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

export type ConsentState = {
  analytics: boolean;
  ads: boolean;
};

interface ConsentContextValue {
  consent: ConsentState;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updateConsent: (state: ConsentState) => void;
}

const defaultState: ConsentState = { analytics: false, ads: false };

const ConsentContext = createContext<ConsentContextValue>({
  consent: defaultState,
  acceptAll: () => {},
  rejectNonEssential: () => {},
  updateConsent: () => {},
});

function loadAnalytics() {
  if (document.getElementById('ga-script')) return;
  const s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  s.async = true;
  s.id = 'ga-script';
  document.body.appendChild(s);
  const inline = document.createElement('script');
  inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');`;
  document.body.appendChild(inline);
}

function loadAds() {
  if (document.getElementById('ads-script')) return;
  const s = document.createElement('script');
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  s.async = true;
  s.id = 'ads-script';
  document.body.appendChild(s);
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(() => {
    const stored = Cookies.get('consent_preferences');
    return stored ? (JSON.parse(stored) as ConsentState) : defaultState;
  });

  useEffect(() => {
    Cookies.set('consent_preferences', JSON.stringify(consent), { expires: 365 });
  }, [consent]);

  useEffect(() => {
    if (consent.analytics) loadAnalytics();
    if (consent.ads) loadAds();
  }, [consent]);

  const acceptAll = () => setConsent({ analytics: true, ads: true });
  const rejectNonEssential = () => setConsent({ analytics: false, ads: false });
  const updateConsent = (state: ConsentState) => setConsent(state);

  return (
    <ConsentContext.Provider value={{ consent, acceptAll, rejectNonEssential, updateConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => useContext(ConsentContext);

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import { useConsent } from '@/context/ConsentContext';

export function CookieBanner() {
  const { acceptAll, rejectNonEssential } = useConsent();

  return (
    <CookieConsent
      location="bottom"
      cookieName="zion_consent_banner"
      declineButtonText="Reject Non-Essential"
      buttonText="Accept All"
      enableDeclineButton
      disableStyles
      containerClasses="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white p-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 z-50"
      buttonClasses="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
      declineButtonClasses="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
      onAccept={acceptAll}
      onDecline={rejectNonEssential}
    >
      <span className="mr-2">We use cookies to personalize content and ads.</span>
      <Link to="/privacy-settings" className="underline text-white">Settings</Link>
    </CookieConsent>
  );
}

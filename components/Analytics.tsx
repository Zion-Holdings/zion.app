import React from 'react';
import Script from 'next/script';

export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'ziontechgroup.com';
  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain={domain}
        src="https://plausible.io/js/script.js"
      />
    </>
  );
}
import React from 'react';
import Script from 'next/script';

export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'ziontechgroup.com';
  const disableAnalytics = process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === 'true';
  const noindex = process.env.NEXT_PUBLIC_NOINDEX === 'true';
  if (disableAnalytics || noindex) return null;
  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain={domain}
        src="https://plausible.io/js/script.js"
      />
      {/* Enable outbound link tracking */}
      <Script
        strategy="afterInteractive"
        data-domain={domain}
        src="https://plausible.io/js/script.outbound-links.js"
      />
    </>
  );
}
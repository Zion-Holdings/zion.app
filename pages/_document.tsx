import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group — Revolutionary Micro SaaS, AI and IT Services" />
        <meta property="og:description" content="Hundreds of real, productized services across AI, Cloud, Security, Observability and more. Transparent pricing and fast onboarding." />
        <meta property="og:image" content="https://ziontechgroup.com/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group — Revolutionary Micro SaaS, AI and IT Services" />
        <meta name="twitter:description" content="Hundreds of real, productized services across AI, Cloud, Security, Observability and more." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og.png" />
        <script defer data-domain="ziontechgroup.com" src="https://plausible.io/js/script.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Zion Tech Group",
                url: "https://ziontechgroup.com",
                logo: "https://ziontechgroup.com/logo.png",
                sameAs: [
                  "https://www.linkedin.com/company/zion-tech-group",
                  "https://github.com/Zion-Holdings",
                  "https://www.instagram.com/ziontechgroup",
                  "https://www.youtube.com/@ziontechgroup"
                ],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+13024640950",
                    email: "kleber@ziontechgroup.com",
                    contactType: "customer service",
                    areaServed: "US",
                    availableLanguage: ["English"]
                  }
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "364 E Main St STE 1008",
                  addressLocality: "Middletown",
                  addressRegion: "DE",
                  postalCode: "19709",
                  addressCountry: "US"
                }
              },
              null,
              2
            )
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Zion Tech Group",
                url: "https://ziontechgroup.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://ziontechgroup.com/services?search={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              null,
              2
            )
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
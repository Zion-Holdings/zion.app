import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function SwaggerDocs() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).SwaggerUIBundle) {
      (window as any).SwaggerUIBundle({
        url: '/openapi.yaml',
        dom_id: '#swagger-ui',
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Zion API Docs</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swagger-ui-dist@4/swagger-ui.css"
        />
      </Head>
      {/* Use next/script for external scripts */}
      <Script src="https://unpkg.com/swagger-ui-dist@4/swagger-ui-bundle.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/swagger-ui-dist@4/swagger-ui-standalone-preset.js" strategy="afterInteractive" />
      <div id="swagger-ui" className="min-h-screen" />
    </>
  );
}

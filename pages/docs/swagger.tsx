import { useEffect } from 'react';
import Head from 'next/head';

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
        <script src="https://unpkg.com/swagger-ui-dist@4/swagger-ui-bundle.js" />
        <script src="https://unpkg.com/swagger-ui-dist@4/swagger-ui-standalone-preset.js" />
      </Head>
      <div id="swagger-ui" className="min-h-screen" />
    </>
  );
}

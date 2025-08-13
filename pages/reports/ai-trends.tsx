import Head from 'next/head';

export default function AiTrendsReportPage() {
  return (
    <div>
      <Head>
        <title>AI Trends Radar — Reports</title>
        <meta httpEquiv="refresh" content="0;url=/reports/ai-trends/index.html" />
      </Head>
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold">AI Trends Radar</h1>
        <p className="text-white/70 mt-2">Redirecting to the static report…</p>
        <p className="mt-4">
          If you are not redirected automatically, open the static report:
          {' '}<a href="/reports/ai-trends/index.html" className="text-cyan-300 underline">/reports/ai-trends/index.html</a>
        </p>
      </main>
    </div>
  );
}

import { useEffect } from 'react';

export default function AiTrendsRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/ai-trends/index.html');
    }
  }, []);
  return null;
}
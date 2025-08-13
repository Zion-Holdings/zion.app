import Head from 'next/head';

export default function SeoReportPage() {
  return (
    <div>
      <Head>
        <title>AI SEO Auditor — Reports</title>
        <meta httpEquiv="refresh" content="0;url=/reports/seo/index.html" />
      
        <meta name="description" content="AI SEO Auditor — automatically suggested description." />
        <meta property="og:title" content="AI SEO Auditor" />
        <meta property="og:description" content="AI SEO Auditor — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold">AI SEO Auditor</h1>
        <p className="text-white/70 mt-2">Redirecting to the static report…</p>
        <p className="mt-4">
          If you are not redirected automatically, open the static report:
          {' '}<a href="/reports/seo/index.html" className="text-cyan-300 underline">/reports/seo/index.html</a>
        </p>
      </main>
    </div>
  );
}



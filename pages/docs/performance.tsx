import Head from 'next/head';

export default function PerformanceDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/PERFORMANCE.md" />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to Performance documentation…</p>
      </main>
    </>
  );
}


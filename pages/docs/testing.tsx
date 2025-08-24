import Head from 'next/head';

export default function TestingDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/TESTING.md" />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to Testing documentation…</p>
      </main>
    </>
  );
}


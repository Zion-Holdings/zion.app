import Head from 'next/head';

export default function SecurityDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/SECURITY.md" />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to Security documentation…</p>
      </main>
    </>
  );
}


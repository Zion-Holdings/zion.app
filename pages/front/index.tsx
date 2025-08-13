import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FrontIndexRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/main/front');
  }, [router]);
  return (
    <>
      <Head>
        <title>Front Systems Hub — Redirecting</title>
        <meta name="description" content="Redirecting to the Front Systems Hub for autonomous cloud automations." />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://ziontechgroup.com/front" />
        <meta property="og:title" content="Front Systems Hub" />
        <meta property="og:description" content="Explore the Front Systems Hub for autonomous cloud automations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
}
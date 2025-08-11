import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <Head>
        <title>Services — Zion</title>
        <meta name="description" content="Explore Zion services: autonomous automations, performance, a11y, SEO, and more." />
      </Head>
      <main className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-3 text-white/80">
          We offer autonomous cloud automations for code quality, performance, accessibility, and continuous content/SEO improvements.
        </p>
        <div className="mt-6">
          <Link href="/"><a className="text-cyan-300 hover:underline">Back to Home</a></Link>
        </div>
      </main>
    </div>
  );
}
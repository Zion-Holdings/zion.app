import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <Head>
        <title>Contact — Zion</title>
        <meta name="description" content="Contact Zion to learn more about autonomous cloud automations." />
      </Head>
      <main className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-3 text-white/80">
          Reach out at <a className="text-cyan-300 hover:underline" href="mailto:hello@zion.app">hello@zion.app</a>.
        </p>
        <div className="mt-6">
          <Link href="/"><a className="text-cyan-300 hover:underline">Back to Home</a></Link>
        </div>
      </main>
    </div>
  );
}
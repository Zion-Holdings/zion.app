import Head from 'next/head';

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <Head>
        <title>Contact — Zion Tech Group</title>
        <meta name="description" content="Get in touch to discuss autonomous cloud automations for your org." />
      
        <meta property="og:title" content="Contact" />
        <meta property="og:description" content="Contact — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-white/80">Tell us about your use‑case. We typically reply within 24 hours.</p>
      <form className="mt-6 grid gap-4" action="https://formspree.io/f/xyyqzqyp" method="POST">
        <input className="rounded-md border border-white/10 bg-white/5 p-3" name="name" placeholder="Your name" required />
        <input className="rounded-md border border-white/10 bg-white/5 p-3" type="email" name="email" placeholder="Your email" required />
        <textarea className="rounded-md border border-white/10 bg-white/5 p-3" name="message" placeholder="Your message" rows={6} required />
        <button className="mt-2 inline-flex items-center justify-center rounded-md bg-white/90 px-5 py-2 font-semibold text-slate-900 hover:bg-white" type="submit">Send</button>
      </form>
    </div>
  );
}

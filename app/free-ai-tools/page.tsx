import Link from 'next/link';

export const metadata = {
  title: 'Free AI Tools | Zion Tech Group',
  description: 'Free AI tools and resources from Zion Tech Group.',
  alternates: { canonical: '/free-ai-tools/' },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Free AI Tools</h1>
        <p className="mt-2 text-slate-300">Free AI tools and resources from Zion Tech Group.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Link href="/contact" className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6 text-violet-300 underline">Contact us</Link>
          <Link href="/services" className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6 text-violet-300 underline">All services</Link>
        </div>
      </div>
    </div>
  );
}

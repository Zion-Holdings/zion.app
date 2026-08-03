import Link from 'next/link';

export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Blog page from Zion Tech Group.',
};

export default function Page() {
  return (
    <div className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Blog</h1>
      <p className="mb-6 text-slate-300">Blog page from Zion Tech Group.</p>
            <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Overview</h2>
          <p className="text-slate-300">This page provides information about Blog.</p>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Next steps</h2>
          <p className="text-slate-300">Contact us to discuss your requirements.</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Contact us</Link>
        <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Our services</Link>
      </div>
    </div>
  );
}

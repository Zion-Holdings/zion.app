import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  description: 'Privacy policy for Zion Tech Group services, website, and communications.',
};

export default function Page() {
  return (
    <div className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
      <p className="mb-6 text-slate-300">This policy explains how we collect, use, and protect your information.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Data collection</h2>
          <p className="text-slate-300">We collect only the information needed to deliver services and improve the experience.</p>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Your rights</h2>
          <p className="text-slate-300">You may request access, correction, or deletion of your personal data at any time.</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Contact us</Link>
        <Link href="/" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Home</Link>
      </div>
    </div>
  );
}

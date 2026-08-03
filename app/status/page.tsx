import Link from 'next/link';

export const metadata = {
  title: 'Service Status | Zion Tech Group',
  description: 'Check the operational status of Zion Tech Group services and platform health.',
};

export default function Page() {
  return (
    <div className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Service Status</h1>
      <p className="mb-6 text-slate-300">Live operational status and incident history for core services.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Current status</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Website and blog: operational</li>
            <li>Email and outreach: operational</li>
            <li>Monitoring and alerts: active</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Support</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Contact support</li>
            <li>Open a ticket</li>
            <li>Escalation contacts</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Contact support</Link>
        <Link href="/" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Home</Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'IT & AI Services | Zion Tech Group',
  description: 'Managed IT, AI implementation, cybersecurity, cloud, and data analytics services.',
  alternates: { canonical: 'https://ziontechgroup.com/services/' },
  openGraph: { title: 'Zion Tech Group Services', url: 'https://ziontechgroup.com/services/' }
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="mb-6 text-slate-300">Production-ready AI and IT services with measurable outcomes.</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li>Managed IT</li>
        <li>AI Implementation</li>
        <li>Cybersecurity</li>
        <li>Cloud & Data</li>
      </ul>
      <div className="mt-8">
        <a href="/contact/" className="inline-block rounded bg-purple-600 px-4 py-2 font-semibold">Talk to us</a>
      </div>
    </main>
  );
}

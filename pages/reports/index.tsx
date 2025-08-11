import Link from 'next/link';

export default function ReportsIndex() {
  const items = [
    { href: '/reports/seo', label: 'SEO Audit' },
    { href: '/reports/ai-trends', label: 'AI Trends' },
    { href: '/reports/link-health', label: 'Link Health' },
  ];
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold">Reports</h1>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href}><a className="text-cyan-300 underline">{i.label}</a></Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
import Link from 'next/link';

export default function Services() {
  const items = [
    { href: '/services/ai-development', name: 'AI Development' },
    { href: '/services/cloud-services', name: 'Cloud & DevOps' },
    { href: '/services/data-analytics', name: 'Data & Analytics' },
    { href: '/services/blockchain', name: 'Blockchain' },
  ];
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Services</h1>
      <ul className="list-disc pl-5">
        {items.map((i) => (
          <li key={i.href}><Link href={i.href}><a className="text-indigo-600 hover:underline">{i.name}</a></Link></li>
        ))}
      </ul>
    </div>
  );
}
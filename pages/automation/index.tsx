import { useEffect, useState } from 'react';
import Link from 'next/link';

type AutomationItem = {
  id: string;
  title: string;
  description: string;
  schedule?: string;
  link?: string;
};

export default function AutomationsIndex() {
  const [items, setItems] = useState<AutomationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/automation-catalog.json');
        if (res.ok) {
          const data = await res.json();
          setItems(data.items || []);
          setLoading(false);
          return;
        }
      } catch (_) {}
      // Fallback minimal list
      setItems([
        { id: 'frontend-sync', title: 'Frontend Sync', description: 'Keeps UI consistent and links healthy.', link: '/automation' },
        { id: 'self-healing', title: 'Self-Healing CI', description: 'Auto-fixes linting and TypeScript errors via CI.' },
        { id: 'seo-growth', title: 'SEO & Growth Agents', description: 'Publishes content and optimizes SEO on schedule.' }
      ]);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Autonomous Cloud Automations</h1>
        <p className="text-sm opacity-80">These agents run in the cloud via scheduled workflows and commit improvements back to the repo.</p>
      </header>
      {loading ? (
        <div className="opacity-70">Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(item => (
            <div key={item.id} className="border rounded p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm opacity-80 mt-1">{item.description}</p>
              <div className="text-xs mt-2 opacity-70">{item.schedule || 'scheduled via GitHub Actions'}</div>
              {item.link && (
                <div className="mt-3"><Link href={item.link}><a className="text-blue-600">Open →</a></Link></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
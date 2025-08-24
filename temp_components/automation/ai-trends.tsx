import fs from 'fs';
import path from 'path';

export type Trend = {
  id: string;
  date: string;
  title: string;
  highlights: string[];
  summary: string;
  tags: string[];
};

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'data', 'ai-trends.json');
  let items: Trend[] = [];
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    items = JSON.parse(raw);
  } catch {}
  items.sort((a, b) => (a.date < b.date ? 1 : -1));
  return { props: { items } };
}

export default function AiTrendsPage({ items }: { items: Trend[] }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Trend Watch</h1>
      <p className="text-gray-600">Autonomously generated insights on AI, dev tools, and cloud trends.</p>
      <div className="grid grid-cols-1 gap-4">
        {items.map((t) => (
          <div key={t.id} className="border rounded p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-gray-500">{new Date(t.date).toLocaleDateString()}</div>
            </div>
            <div className="text-sm text-gray-700">{t.summary}</div>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {t.highlights.map((h, i) => (<li key={i}>{h}</li>))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {t.tags.map(tag => (<span key={tag} className="text-xs px-2 py-0.5 rounded bg-gray-100">{tag}</span>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
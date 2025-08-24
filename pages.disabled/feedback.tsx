import React from 'react';
import type { NextPage } from 'next';

type RoadmapStatus = 'planned' | 'in_progress' | 'shipped';

type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  votes: number;
  createdAt: string;
};

const columnMeta: { key: RoadmapStatus; title: string }[] = [
  { key: 'planned', title: 'Planned' },
  { key: 'in_progress', title: 'In Progress' },
  { key: 'shipped', title: 'Shipped' },
];

const FeedbackPage: NextPage = () => {
  const [items, setItems] = React.useState<RoadmapItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [form, setForm] = React.useState({ title: '', description: '' });

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/feedback');
      const data = await res.json();
      setItems(data.items || []);
    } catch (e: any) {
      setError(e?.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => { fetchItems(); }, []);

  const upvotedKey = (id: string) => `upvoted:${id}`;
  const hasUpvoted = (id: string) => typeof window !== 'undefined' && !!localStorage.getItem(upvotedKey(id));

  const upvote = async (id: string) => {
    if (hasUpvoted(id)) return;
    await fetch('/api/feedback', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, action: 'upvote' }) });
    localStorage.setItem(upvotedKey(id), '1');
    fetchItems();
  };

  const submitSuggestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description) return;
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setForm({ title: '', description: '' });
    fetchItems();
  };

  const onDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const onDrop = async (e: React.DragEvent, status: RoadmapStatus) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (!id) return;
    await fetch('/api/feedback', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'set_status', status })
    });
    fetchItems();
  };

  const onDragOver = (e: React.DragEvent) => e.preventDefault();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Public Roadmap</h1>
        <p className="opacity-80">Vote on features and submit suggestions. Drag cards across columns to update status.</p>
      </div>

      <form onSubmit={submitSuggestion} className="border border-gray-200 dark:border-gray-800 rounded p-4 space-y-3">
        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">
            <span className="block">Title</span>
            <input value={form.title} onChange={(e) => setForm(s => ({ ...s, title: e.target.value }))} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" placeholder="Your suggestion title" />
          </label>
          <label className="text-sm md:col-span-2">
            <span className="block">Description</span>
            <textarea value={form.description} onChange={(e) => setForm(s => ({ ...s, description: e.target.value }))} rows={3} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" placeholder="What would this help you achieve?" />
          </label>
        </div>
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Submit Suggestion</button>
      </form>

      {loading ? (
        <div>Loading…</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {columnMeta.map((col) => (
            <div key={col.key} className="rounded border border-gray-200 dark:border-gray-800">
              <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 font-medium">{col.title}</div>
              <div className="p-3 min-h-[200px]" onDrop={(e) => onDrop(e, col.key)} onDragOver={onDragOver}>
                {items.filter(i => i.status === col.key).sort((a,b)=>b.votes-a.votes).map((i) => (
                  <div key={i.id} draggable onDragStart={(e) => onDragStart(e, i.id)} className="mb-3 p-3 rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/30">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-medium">{i.title}</div>
                        <div className="text-sm opacity-80">{i.description}</div>
                      </div>
                      <button onClick={() => upvote(i.id)} disabled={hasUpvoted(i.id)} className={`text-sm px-2 py-1 rounded border ${hasUpvoted(i.id) ? 'opacity-60' : ''}`}>
                        ▲ {i.votes}
                      </button>
                    </div>
                  </div>
                ))}
                {items.filter(i => i.status === col.key).length === 0 && (
                  <div className="text-sm opacity-60">No items.</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="opacity-70 text-xs">Admin sync endpoint available at <code>/api/admin/feedback-sync</code> for automated ingestion from chats and reports.</div>
    </div>
  );
};

export default FeedbackPage;
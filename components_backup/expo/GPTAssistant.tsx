import { useState } from 'react';

export default function GPTAssistant() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  async function handleSummarize() {
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/events/expo/highlights');
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to summarize');
      setSummary(data.summary);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <div className="text-sm opacity-80">Prompt: Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends.</div>
      <button onClick={handleSummarize} disabled={loading} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black disabled:opacity-50">
        {loading ? 'Summarizing…' : 'Generate Summary'}
      </button>
      {error && <div className="text-sm text-red-600">{error}</div>}
      {summary && (
        <pre className="p-3 border rounded bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap text-sm">{summary}</pre>
      )}
    </div>
  );
}
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'md' | 'txt' | 'html';
  size: string;
  status: 'indexed' | 'processing' | 'pending';
}

export default function AutonomousRAGKnowledgeWorkspacePage() {
  const [query, setQuery] = useState('');
  const [documents, setDocuments] = useState<Document[]>([
    { id: 'D001', name: 'AI Services Overview.pdf', type: 'pdf', size: '2.4 MB', status: 'indexed' },
    { id: 'D002', name: 'Pricing Strategy 2026.md', type: 'md', size: '14 KB', status: 'indexed' },
    { id: 'D003', name: 'Security Whitepaper.pdf', type: 'pdf', size: '5.1 MB', status: 'indexed' },
    { id: 'D004', name: 'API Documentation.html', type: 'html', size: '890 KB', status: 'processing' },
    { id: 'D005', name: 'FAQ Database.txt', type: 'txt', size: '120 KB', status: 'pending' },
  ]);

  const [newDocName, setNewDocName] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim() || documents.filter((d) => d.status === 'indexed').length === 0) return [];
    const q = query.toLowerCase();
    return documents
      .filter((d) => d.status === 'indexed')
      .filter((d) => d.name.toLowerCase().includes(q))
      .map((d) => ({
        ...d,
        relevance: Math.min(98, 60 + Math.floor(Math.random() * 35)),
        excerpt: `Relevant content from ${d.name} matching "${query}"...`,
      }));
  }, [query, documents]);

  const indexedCount = documents.filter((d) => d.status === 'indexed').length;
  const coveragePercent = Math.round((indexedCount / documents.length) * 100);

  const addDocument = () => {
    if (!newDocName.trim()) return;
    const ext = newDocName.split('.').pop()?.toLowerCase() || 'txt';
    const type = ['pdf', 'md', 'txt', 'html'].includes(ext) ? ext : 'txt';
    setDocuments((prev) => [
      ...prev,
      {
        id: `D${String(prev.length + 1).padStart(3, '0')}`,
        name: newDocName.trim(),
        type: type as Document['type'],
        size: `${Math.floor(Math.random() * 500 + 10)} KB`,
        status: 'processing',
      },
    ]);
    setNewDocName('');
    // Simulate indexing
    setTimeout(() => {
      setDocuments((prev) =>
        prev.map((d, i) => (i === prev.length - 1 ? { ...d, status: 'indexed' as const } : d))
      );
    }, 2000);
  };

  const confidence = indexedCount > 0 ? Math.min(94, 55 + indexedCount * 8) : 0;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <Link href="/ai-lab" className="mb-4 inline-flex items-center text-sm text-purple-400 hover:text-purple-300">
          ← Back to AI Lab
        </Link>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-400">Knowledge Intelligence</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Autonomous RAG Knowledge Workspace</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Model document retrieval quality with deterministic citation confidence, source diversity, and answer safety scoring.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {/* Search */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Knowledge Search</h3>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a question about your documents..."
                className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none"
              />
              {searchResults.length > 0 && (
                <div className="mt-4 space-y-3">
                  {searchResults.map((r) => (
                    <div key={r.id} className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">{r.name}</span>
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">
                          {r.relevance}% match
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">{r.excerpt}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Documents */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Document Store</h3>
              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  value={newDocName}
                  onChange={(e) => setNewDocName(e.target.value)}
                  placeholder="Add document (e.g., guide.pdf)..."
                  className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none"
                />
                <button
                  onClick={addDocument}
                  className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500"
                >
                  Add
                </button>
              </div>
              <div className="mt-4 space-y-2">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-slate-700 px-1.5 py-0.5 text-[10px] font-bold uppercase text-slate-300">
                        {doc.type}
                      </span>
                      <span className="text-sm text-slate-200">{doc.name}</span>
                      <span className="text-xs text-slate-500">{doc.size}</span>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        doc.status === 'indexed'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : doc.status === 'processing'
                          ? 'bg-yellow-500/20 text-yellow-300'
                          : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-slate-900/80 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">Index Coverage</p>
              <p className="mt-3 text-5xl font-bold text-white">{coveragePercent}%</p>
              <p className="mt-1 text-sm text-slate-400">{indexedCount}/{documents.length} documents</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 transition-all"
                  style={{ width: `${coveragePercent}%` }}
                />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Answer Confidence</p>
              <p className="mt-2 text-3xl font-bold text-emerald-300">{confidence}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

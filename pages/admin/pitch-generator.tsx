import React, { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps } from 'next';
import { requireAdminRole } from '../../utils/auth';

export type Slide = {
  id: string;
  title: string;
  content: string;
  chart?: {
    type: 'bar' | 'funnel' | 'timeline';
    data: Array<{ label: string; value: number }>;
  };
};

type BuilderState = {
  mission: string;
  fundingStage: string;
  vision: string;
  roundType: 'Seed' | 'Series A' | 'Token Sale' | '';
  targetRaise: string;
  assets: File[];
};

function uid() {
  return Math.random().toString(36).slice(2);
}

function SlidePreview({ slide, isActive, onClick }: { slide: Slide; isActive: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`w-56 shrink-0 border rounded-md p-3 text-left bg-white/70 dark:bg-gray-900 ${isActive ? 'ring-2 ring-blue-500' : 'border-gray-200 dark:border-gray-800'}`}>
      <div className="font-semibold text-sm line-clamp-2">{slide.title || 'Untitled'}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mt-1 whitespace-pre-wrap">{slide.content || '—'}</div>
    </button>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;
};

export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({ mission: '', fundingStage: '', vision: '', roundType: '', targetRaise: '', assets: [] });
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
  const [history, setHistory] = useState<{ id: string; createdAt: string; version: string }[]>([]);

  const activeSlide = slides[activeIndex];

  const onAssetDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []);
    setBuilder((b) => ({ ...b, assets: [...b.assets, ...files] }));
  }, []);

  const prevent = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const operatorPrompt = useMemo(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []);

  const autoFetchMetrics = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();
      return data;
    } catch (e) {
      return {};
    } finally {
      setLoading(false);
    }
  }, []);

  const buildDeck = useCallback(async () => {
    setLoading(true);
    try {
      const metrics = await autoFetchMetrics();
      const res = await fetch('/api/admin/pitch/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operatorPrompt,
          inputs: builder,
          metrics,
        }),
      });
      const json = await res.json();
      const newSlides: Slide[] = json.slides || [];
      setSlides(newSlides);
      setActiveIndex(0);
      const v = json.version || `v${new Date().toISOString()}`;
      setVersionTag(v);
      setHistory((h) => [{ id: uid(), createdAt: new Date().toISOString(), version: v }, ...h]);
    } catch (e) {
      // noop
    } finally {
      setLoading(false);
    }
  }, [autoFetchMetrics, builder, operatorPrompt]);

  const rephraseSlide = useCallback(async (idx: number) => {
    if (!slides[idx]) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slide: slides[idx] }),
      });
      const json = await res.json();
      setSlides((arr) => arr.map((s, i) => (i === idx ? { ...s, title: json.title || s.title, content: json.content || s.content } : s)));
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [slides]);

  const addSlide = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' });
      const json = await res.json();
      setSlides((arr) => [...arr, { id: uid(), title: json.title || 'New Slide', content: json.content || '' }]);
      setActiveIndex(slides.length);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [slides.length]);

  const exportPdf = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/export', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides, format: 'pdf', version: versionTag }) });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `pitch-deck-${versionTag || 'draft'}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [slides, versionTag]);

  const exportGoogleSlides = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/export', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides, format: 'gslides', version: versionTag }) });
      const json = await res.json();
      if (json && json.url) {
        window.open(json.url, '_blank');
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [slides, versionTag]);

  const updateActiveSlide = (updates: Partial<Slide>) => {
    setSlides((arr) => arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s)));
  };

  const renderChartPreview = (slide: Slide) => {
    if (!slide.chart) return null;
    const { type, data } = slide.chart;
    return (
      <div className="mt-3">
        <div className="text-xs text-gray-500 dark:text-gray-400">Chart preview: {type}</div>
        <div className="flex gap-2 items-end h-24 mt-2">
          {type === 'bar' && data.map((d) => (
            <div key={d.label} className="bg-blue-500 w-6" style={{ height: `${Math.max(4, d.value)}px` }} title={`${d.label}: ${d.value}`} />
          ))}
          {type === 'funnel' && (
            <div className="w-full">
              <div className="flex flex-col gap-1">
                {data.map((d, idx) => (
                  <div key={d.label} className="bg-purple-500 text-white text-xs px-2 py-1" style={{ width: `${100 - idx * 12}%` }}>{d.label}: {d.value}</div>
                ))}
              </div>
            </div>
          )}
          {type === 'timeline' && (
            <div className="text-xs grid grid-cols-4 gap-2 w-full">
              {data.map((d) => (
                <div key={d.label} className="border p-1 rounded">
                  <div className="font-medium">{d.label}</div>
                  <div>{d.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <EnhancedLayout>
      <Head>
        <title>Pitch Generator - Admin</title>
      </Head>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Pitch Generator</h1>
          <div className="flex gap-2">
            <button onClick={buildDeck} disabled={loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Generate Deck</button>
            <button onClick={exportPdf} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-gray-900 text-white disabled:opacity-50">Download PDF</button>
            <button onClick={exportGoogleSlides} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50">Export to Google Slides</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Inputs</div>
              <label className="block text-sm mb-1">Company mission</label>
              <input value={builder.mission} onChange={(e) => setBuilder({ ...builder, mission: e.target.value })} className="w-full border rounded px-2 py-1 bg-transparent" />
              <label className="block text-sm mt-3 mb-1">Current funding stage</label>
              <input value={builder.fundingStage} onChange={(e) => setBuilder({ ...builder, fundingStage: e.target.value })} className="w-full border rounded px-2 py-1 bg-transparent" />
              <label className="block text-sm mt-3 mb-1">Vision/goals</label>
              <textarea value={builder.vision} onChange={(e) => setBuilder({ ...builder, vision: e.target.value })} className="w-full border rounded px-2 py-1 bg-transparent" rows={3} />
              <label className="block text-sm mt-3 mb-1">Round type</label>
              <select value={builder.roundType} onChange={(e) => setBuilder({ ...builder, roundType: e.target.value as any })} className="w-full border rounded px-2 py-1 bg-transparent">
                <option value="">Select</option>
                <option>Seed</option>
                <option>Series A</option>
                <option>Token Sale</option>
              </select>
              <label className="block text-sm mt-3 mb-1">Target raise amount</label>
              <input value={builder.targetRaise} onChange={(e) => setBuilder({ ...builder, targetRaise: e.target.value })} className="w-full border rounded px-2 py-1 bg-transparent" />

              <div onDrop={onAssetDrop} onDragOver={prevent} onDragEnter={prevent} className="mt-4 border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                Drag & drop logos, photos here
                <div className="text-xs mt-1">{builder.assets.length} file(s) added</div>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
                <li>Active users (30d)</li>
                <li>GMV, MRR, YoY growth</li>
                <li>Total completed projects</li>
                <li>Global reach</li>
                <li>Conversion funnel</li>
                <li>Notable clients or case studies</li>
              </ul>
            </div>

            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">History</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {versionTag || '—'}</div>
              <ul className="mt-2 space-y-1 text-sm">
                {history.map((h) => (
                  <li key={h.id} className="flex justify-between border rounded px-2 py-1">
                    <span>{h.version}</span>
                    <span className="text-gray-500 dark:text-gray-400">{new Date(h.createdAt).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="font-medium">Slides</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{slides.length} total</div>
              </div>
              <div className="mt-3 flex gap-3 overflow-x-auto py-2">
                {slides.map((s, i) => (
                  <SlidePreview key={s.id} slide={s} isActive={i === activeIndex} onClick={() => setActiveIndex(i)} />
                ))}
                <button onClick={addSlide} className="w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500">+ Add Slide</button>
              </div>
            </div>

            {activeSlide && (
              <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <input value={activeSlide.title} onChange={(e) => updateActiveSlide({ title: e.target.value })} className="font-semibold text-lg bg-transparent border-b focus:outline-none" />
                  <div className="flex gap-2">
                    <button onClick={() => rephraseSlide(activeIndex)} disabled={loading} className="px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50">Rephrase</button>
                  </div>
                </div>
                <textarea value={activeSlide.content} onChange={(e) => updateActiveSlide({ content: e.target.value })} className="w-full mt-3 border rounded px-2 py-1 bg-transparent" rows={10} />

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <button onClick={() => updateActiveSlide({ chart: { type: 'bar', data: [{ label: 'Q1', value: 20 }, { label: 'Q2', value: 40 }, { label: 'Q3', value: 60 }, { label: 'Q4', value: 80 }] } })} className="border rounded px-2 py-1">Bar Chart</button>
                  <button onClick={() => updateActiveSlide({ chart: { type: 'funnel', data: [{ label: 'Visitors', value: 100 }, { label: 'Signups', value: 40 }, { label: 'Projects', value: 15 }] } })} className="border rounded px-2 py-1">Funnel</button>
                  <button onClick={() => updateActiveSlide({ chart: { type: 'timeline', data: [{ label: 'MVP', value: 2023 }, { label: 'Seed', value: 2024 }, { label: 'Series A', value: 2025 }] } })} className="border rounded px-2 py-1">Timeline</button>
                </div>

                {renderChartPreview(activeSlide)}
              </div>
            )}
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}
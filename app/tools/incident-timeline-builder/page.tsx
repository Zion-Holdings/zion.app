'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';


export default function IncidentTimelineBuilder() {
  const timeRef = useRef<HTMLInputElement>(null);
  const eventRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('add');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const time = timeRef.current?.value || '';
      const event = eventRef.current?.value || '';
      if (!time || !event) return;
      const line = document.createElement('div');
      line.className = 'flex gap-3';
      const span = document.createElement('span');
      span.className = 'text-slate-400';
      span.textContent = time;
      const ev = document.createElement('span');
      ev.textContent = event;
      line.appendChild(span);
      line.appendChild(ev);
      out.appendChild(line);
      if (timeRef.current) timeRef.current.value = '';
      if (eventRef.current) eventRef.current.value = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Incident Timeline Builder</h1>
        <p className="mt-2 text-slate-400">Add timestamped events to create a clean incident timeline.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Timestamp</label>
              <input ref={timeRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="14:02" />
            </div>
            <div>
              <label className="block text-sm font-medium">Event</label>
              <input ref={eventRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="Alert fired for checkout latency" />
            </div>
            <button id="add" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Add Event</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Timeline</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[320px] whitespace-pre-wrap">No events yet.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

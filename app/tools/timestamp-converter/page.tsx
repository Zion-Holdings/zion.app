import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Timestamp Converter | Zion Tech Group',
  description: 'Convert Unix timestamps to human-readable dates and vice versa. Supports seconds and milliseconds.',
  openGraph: {
    title: 'Timestamp Converter | Zion Tech Group',
    description: 'Free online Unix timestamp converter — seconds, milliseconds, ISO 8601.',
    url: 'https://ziontechgroup.com/tools/timestamp-converter/',
    type: 'website',
  },
  alternates: { canonical: '/tools/timestamp-converter/' },
};

const SCRIPT = `
function tsToDate() {
  const ts = document.getElementById('ts').value;
  if (!ts) return;
  let num = parseInt(ts);
  if (ts.length === 10) num *= 1000;
  const d = new Date(num);
  if (isNaN(d.getTime())) {
    document.getElementById('result').textContent = 'Invalid timestamp';
    return;
  }
  document.getElementById('result').textContent = d.toISOString();
  document.getElementById('local').textContent = d.toLocaleString();
  document.getElementById('utc').textContent = d.toUTCString();
  document.getElementById('relative').textContent = getRelative(d);
}
function dateToTs() {
  const dateStr = document.getElementById('dateInput').value;
  if (!dateStr) return;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    document.getElementById('tsResult').textContent = 'Invalid date';
    return;
  }
  document.getElementById('tsResult').textContent = Math.floor(d.getTime() / 1000);
  document.getElementById('msResult').textContent = d.getTime();
}
function now() {
  const d = new Date();
  document.getElementById('ts').value = Math.floor(d.getTime() / 1000);
  tsToDate();
}
function getRelative(d) {
  const diff = Date.now() - d.getTime();
  const abs = Math.abs(diff);
  const mins = Math.floor(abs / 60000);
  const hrs = Math.floor(abs / 3600000);
  const days = Math.floor(abs / 86400000);
  if (mins < 1) return 'just now';
  if (mins < 60) return diff > 0 ? mins + ' min ago' : 'in ' + mins + ' min';
  if (hrs < 24) return diff > 0 ? hrs + ' hr ago' : 'in ' + hrs + ' hr';
  return diff > 0 ? days + ' days ago' : 'in ' + days + ' days';
}
`;

export default function TimestampConverterPage() {
  return (
    <StandardPage
      title="Timestamp Converter"
      subtitle="Convert between Unix timestamps, ISO 8601, and human-readable dates."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Timestamp Converter' },
      ]}
      actions={[
        { label: 'Back to Tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">Timestamp → Date</h2>
          <div className="flex gap-2 mb-4">
            <input id="ts" type="text" placeholder="Unix timestamp (e.g. 1700000000)"
              className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white font-mono"
              onInput="tsToDate()" />
            <button onClick="now()" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white text-sm font-medium">Now</button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-400">ISO 8601:</span><span id="result" className="text-slate-200 font-mono"></span></div>
            <div className="flex justify-between"><span className="text-slate-400">Local:</span><span id="local" className="text-slate-200 font-mono"></span></div>
            <div className="flex justify-between"><span className="text-slate-400">UTC:</span><span id="utc" className="text-slate-200 font-mono"></span></div>
            <div className="flex justify-between"><span className="text-slate-400">Relative:</span><span id="relative" className="text-indigo-400 font-mono"></span></div>
          </div>
        </div>

        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">Date → Timestamp</h2>
          <input id="dateInput" type="datetime-local"
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white font-mono mb-4"
            onInput="dateToTs()" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-400">Unix (seconds):</span><span id="tsResult" className="text-slate-200 font-mono"></span></div>
            <div className="flex justify-between"><span className="text-slate-400">Unix (ms):</span><span id="msResult" className="text-slate-200 font-mono"></span></div>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-3">Quick Reference</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><span className="text-indigo-400">Unix timestamp</span> — Seconds since Jan 1, 1970 00:00:00 UTC.</li>
            <li><span className="text-indigo-400">10 digits</span> = seconds, <span className="text-indigo-400">13 digits</span> = milliseconds.</li>
            <li><span className="text-indigo-400">ISO 8601</span> — YYYY-MM-DDTHH:mm:ss.sssZ (universal sortable format).</li>
          </ul>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
    </StandardPage>
  );
}

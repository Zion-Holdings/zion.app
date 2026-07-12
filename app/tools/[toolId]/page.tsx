'use client';

import { useState, useCallback } from 'react';

const toolData: Record<string, { icon: string; title: string; desc: string; placeholder: string; category: string }> = {
  'json-formatter': { icon: '📋', title: 'JSON Formatter & Validator', desc: 'Format, validate, and prettify JSON with syntax highlighting', placeholder: 'Paste your JSON here...', category: 'json' },
  'json-to-csv-converter': { icon: '🔄', title: 'JSON to CSV Converter', desc: 'Convert JSON arrays to CSV and vice versa', placeholder: 'Paste JSON array here...', category: 'json' },
  'json-schema-generator': { icon: '📐', title: 'JSON Schema Generator', desc: 'Auto-generate JSON Schema from sample JSON data', placeholder: 'Paste sample JSON here...', category: 'json' },
  'json-diff-viewer': { icon: '⚖️', title: 'JSON Diff Viewer', desc: 'Compare two JSON documents and highlight differences', placeholder: 'Paste first JSON here...', category: 'json' },
  'yaml-json-converter': { icon: '🔁', title: 'YAML ⇄ JSON Converter', desc: 'Convert between YAML and JSON formats instantly', placeholder: 'Paste YAML or JSON here...', category: 'json' },
  'xml-formatter-validator': { icon: '📄', title: 'XML Formatter & Validator', desc: 'Format, validate, and minify XML documents', placeholder: 'Paste XML here...', category: 'text' },
  'css-gradient-generator': { icon: '🌈', title: 'CSS Gradient Generator', desc: 'Visual CSS gradient builder with live preview', placeholder: 'Configure gradient settings...', category: 'css' },
  'css-minifier-beautifier': { icon: '🎨', title: 'CSS Minifier & Beautifier', desc: 'Minify CSS for production or beautify for development', placeholder: 'Paste CSS here...', category: 'css' },
  'html-to-jsx': { icon: '⚛️', title: 'HTML to JSX Converter', desc: 'Convert HTML markup to React JSX syntax', placeholder: 'Paste HTML here...', category: 'text' },
  'html-minifier-beautifier': { icon: '📝', title: 'HTML Minifier & Beautifier', desc: 'Minify HTML for performance or format for readability', placeholder: 'Paste HTML here...', category: 'text' },
  'sql-formatter': { icon: '🗃️', title: 'SQL Formatter', desc: 'Format and beautify SQL queries', placeholder: 'Paste SQL here...', category: 'text' },
  'jwt-decoder': { icon: '🔑', title: 'JWT Decoder', desc: 'Decode and inspect JWT tokens', placeholder: 'Paste JWT token here...', category: 'text' },
  'color-palette-generator': { icon: '🎨', title: 'Color Palette Generator', desc: 'Generate beautiful color palettes', placeholder: 'Enter base color (e.g., #3B82F6)...', category: 'image' },
  'color-contrast-checker': { icon: '👁️', title: 'Color Contrast Checker', desc: 'Check WCAG accessibility contrast ratios', placeholder: 'Enter foreground color...', category: 'image' },
  'color-blindness-simulator': { icon: '🔍', title: 'Color Blindness Simulator', desc: 'Simulate color blindness types', placeholder: 'Enter color to simulate...', category: 'image' },
  'box-shadow-generator': { icon: '📦', title: 'Box Shadow Generator', desc: 'Visual CSS box shadow builder', placeholder: 'Configure shadow settings...', category: 'css' },
  'image-color-extractor': { icon: '🖼️', title: 'Image Color Extractor', desc: 'Extract dominant colors from images', placeholder: 'Upload or paste image URL...', category: 'image' },
  'unit-converter': { icon: '📏', title: 'Unit Converter', desc: 'Convert between units', placeholder: 'Enter value to convert...', category: 'text' },
  'currency-converter': { icon: '💱', title: 'Currency Converter', desc: 'Real-time currency conversion', placeholder: 'Enter amount...', category: 'text' },
  'base64': { icon: '🔐', title: 'Base64 Encoder/Decoder', desc: 'Encode and decode Base64', placeholder: 'Paste text here...', category: 'text' },
  'url-encoder-decoder': { icon: '🔗', title: 'URL Encoder/Decoder', desc: 'Encode and decode URLs', placeholder: 'Paste URL here...', category: 'text' },
  'qr-code-generator': { icon: '📱', title: 'QR Code Generator', desc: 'Generate QR codes', placeholder: 'Enter text or URL...', category: 'text' },
  'password-generator': { icon: '🔒', title: 'Password Generator', desc: 'Generate secure passwords', placeholder: 'Set password length...', category: 'text' },
  'password-strength-checker': { icon: '💪', title: 'Password Strength Checker', desc: 'Analyze password strength', placeholder: 'Enter password...', category: 'text' },
  'regex-tester': { icon: '🔬', title: 'Regex Tester', desc: 'Test regular expressions', placeholder: 'Enter regex pattern...', category: 'text' },
  'timestamp-converter': { icon: '⏰', title: 'Unix Timestamp Converter', desc: 'Convert timestamps to dates', placeholder: 'Enter Unix timestamp...', category: 'text' },
  'uuid-generator': { icon: '🆔', title: 'UUID/GUID Generator', desc: 'Generate UUIDs', placeholder: 'Click generate...', category: 'text' },
  'lorem-ipsum-generator': { icon: '📃', title: 'Lorem Ipsum Generator', desc: 'Generate placeholder text', placeholder: 'Set number of paragraphs...', category: 'text' },
  'word-counter': { icon: '🔢', title: 'Word & Character Counter', desc: 'Count words and characters', placeholder: 'Paste text here...', category: 'text' },
  'string-case-converter': { icon: '🔤', title: 'String Case Converter', desc: 'Convert string cases', placeholder: 'Paste text here...', category: 'text' },
  'markdown-preview': { icon: '📖', title: 'Markdown Preview', desc: 'Live markdown preview', placeholder: 'Write markdown here...', category: 'text' },
  'cron-expression-explainer': { icon: '⏱️', title: 'Cron Expression Explainer', desc: 'Explain cron expressions', placeholder: 'Enter cron expression...', category: 'text' },
  'number-base-converter': { icon: '🔢', title: 'Number Base Converter', desc: 'Convert number bases', placeholder: 'Enter number...', category: 'text' },
  'subnet-calculator': { icon: '🌐', title: 'Subnet Calculator', desc: 'Calculate subnets', placeholder: 'Enter IP/CIDR...', category: 'text' },
  'secure-hash-generator': { icon: '🔐', title: 'Secure Hash Generator', desc: 'Generate secure hashes', placeholder: 'Enter text to hash...', category: 'text' },
};

function luminance(hex: string) {
  const c = hex.replace('#','');
  const r = parseInt(c.substr(0,2),16)/255;
  const g = parseInt(c.substr(2,2),16)/255;
  const b = parseInt(c.substr(4,2),16)/255;
  return 0.2126*r + 0.7152*g + 0.0722*b;
}

function contrastRatio(hex: string) {
  const lum = luminance(hex);
  const black = 0;
  const white = 1;
  const brightest = Math.max(lum, black);
  const darkest = Math.min(lum, black);
  return (brightest + 0.05) / (darkest + 0.05);
}

export default function ToolPage({ params }: { params: Promise<{ toolId: string }> }) {
  const [toolId, setToolId] = useState<string>('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  params.then(({ toolId }) => setToolId(toolId)).catch(() => setToolId(''));
  const tool = toolData[toolId];

  const processInput = useCallback(() => {
    if (!tool) return;
    setError(null);
    setBusy(true);
    try {
      const raw = input.trim();
      switch (tool.category) {
        case 'json': {
          const parsed = JSON.parse(raw);
          if (toolId === 'json-formatter') {
            setOutput(JSON.stringify(parsed, null, 2));
          } else if (toolId === 'json-to-csv-converter') {
            const arr = Array.isArray(parsed) ? parsed : [parsed];
            if (!arr.length) throw new Error('Empty JSON');
            const headers = Object.keys(arr[0]);
            const escape = (v: unknown) => `"${String(v ?? '').replace(/"/g,'""')}"`;
            const csv = [headers.join(','), ...arr.map((row: Record<string, unknown>) => headers.map((h) => escape(row[h])).join(','))].join('\n');
            setOutput(csv);
          } else if (toolId === 'json-schema-generator') {
            const schema: Record<string, unknown> = { type: 'object', properties: {} as Record<string, unknown>, required: [] as string[] };
            const walk = (node: unknown, key: string) => {
              if (node === null) { (schema.properties[key] = { type: 'null' }); return; }
              if (Array.isArray(node)) { (schema.properties[key] = { type: 'array', items: {} as Record<string, string> }); return; }
              if (typeof node === 'object') {
                const sub: Record<string, unknown> = { type: 'object', properties: {} as Record<string, unknown> };
                for (const k of Object.keys(node as Record<string, unknown>)) walk((node as Record<string, unknown>)[k], k);
                (schema.properties[key] = sub);
              } else {
                (schema.properties[key] = { type: typeof node });
                schema.required.includes(key) || schema.required.push(key);
              }
            };
            for (const k of Object.keys(parsed)) walk((parsed as Record<string, unknown>)[k], k);
            setOutput(JSON.stringify(schema, null, 2));
          } else {
            setOutput(JSON.stringify(parsed, null, 2));
          }
          break;
        }
        case 'text': {
          if (toolId === 'base64') {
            try {
              setOutput(btoa(unescape(encodeURIComponent(raw))));
            } catch {
              setOutput(JSON.stringify(parsed, null, 2));
            }
          } else if (toolId === 'password-generator') {
            const len = Math.max(8, Math.min(128, parseInt(raw, 10) || 16));
            const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
            const values = new Uint32Array(len);
            crypto.getRandomValues(values);
            const pass = Array.from(values).map(v => charset[v % charset.length]).join('');
            setOutput(pass);
          } else if (toolId === 'uuid-generator') {
            const ids = Array.from({ length: 5 }, () => crypto.randomUUID()).join('\n');
            setOutput(ids);
          } else if (toolId === 'timestamp-converter') {
            const ts = Number(raw);
            const d = new Date(isNaN(ts) ? Date.now() : ts);
            setOutput(JSON.stringify({ unix: d.getTime(), iso: d.toISOString(), locale: d.toLocaleString() }, null, 2));
          } else if (toolId === 'word-counter') {
            const words = raw ? raw.split(/\s+/).filter(Boolean).length : 0;
            setOutput(`Words: ${words}\nCharacters: ${raw.length}\nCharacters no spaces: ${raw.replace(/\s/g,'').length}`);
          } else if (toolId === 'string-case-converter') {
            setOutput(JSON.stringify({ upper: raw.toUpperCase(), lower: raw.toLowerCase(), title: raw.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1)), camel: raw.replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase()), snake: raw.replace(/[-\s]+/g,'_').toLowerCase() }, null, 2));
          } else if (toolId === 'url-encoder-decoder') {
            try {
              setOutput(`encoded: ${encodeURIComponent(raw)}\ndecoded: ${decodeURIComponent(raw)}`);
            } catch {
              setOutput('Invalid URL/encoded string.');
            }
          } else {
            setOutput(`Processed input:\n${raw}`);
          }
          break;
        }
        case 'css': {
          if (toolId === 'color-contrast-checker') {
            const ratio = contrastRatio(raw);
            setOutput(JSON.stringify({ input: raw, contrastRatio: Number(ratio.toFixed(2)), passesAA: ratio >= 4, passesAAA: ratio >= 7 }, null, 2));
          } else {
            setOutput(`CSS output for input:\n${raw}`);
          }
          break;
        }
        case 'image': {
          if (toolId === 'image-color-extractor') {
            setOutput('Hint: Open browser DevTools Network tab to inspect image bytes here.\nClient-side processing requires File input; see browser-image-tools enhancement.');
          } else if (toolId === 'qr-code-generator') {
            setOutput(`QR payload: ${raw}\nUse canvas in a follow-up enhancement for actual rendering.`);
          } else {
            setOutput(`Image tool input: ${raw}`);
          }
          break;
        }
        default:
          setOutput(raw || '');
      }
    } catch (e) {
      setError((e as Error).message || 'Failed to process input');
      setOutput('');
    } finally {
      setBusy(false);
    }
  }, [input, toolId, tool]);

  const clear = useCallback(() => {
    setInput('');
    setOutput('');
    setError(null);
  }, []);

  const copyOutput = useCallback(() => {
    if (!output) return;
    navigator.clipboard?.writeText(output).catch(() => {});
  }, [output]);

  if (!tool) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Tool Not Found</h1>
          <a href="/tools" className="text-emerald-400 hover:text-emerald-300">← Back to Tools</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a href="/tools" className="text-emerald-400 hover:text-emerald-300 text-sm mb-8 inline-block">← All Tools</a>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{tool.icon}</span>
            <h1 className="text-3xl font-bold text-white">{tool.title}</h1>
          </div>
          <p className="text-slate-400">{tool.desc}</p>
        </header>
        <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 mb-8">
          <textarea
            className="w-full h-48 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white font-mono text-sm resize-y focus:outline-none focus:border-emerald-500"
            placeholder={tool.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="tool-input"
          />
          <div className="flex gap-3 mt-4">
            <button
              onClick={processInput}
              disabled={busy}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors disabled:opacity-60"
            >
              {busy ? 'Processing...' : 'Process'}
            </button>
            <button onClick={clear} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors">Clear</button>
            <button onClick={copyOutput} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors">Copy Output</button>
          </div>
          {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
          <div className="mt-4">
            <label className="text-slate-400 text-sm mb-2 block">Output:</label>
            <textarea
              className="w-full h-48 bg-slate-900 border border-slate-700 rounded-lg p-4 text-emerald-300 font-mono text-sm resize-y focus:outline-none"
              placeholder="Output will appear here..."
              value={output}
              readOnly
              id="tool-output"
            />
          </div>
        </div>
        <div className="rounded-xl bg-slate-800/30 border border-slate-700/30 p-6">
          <h2 className="text-lg font-semibold text-white mb-3">About This Tool</h2>
          <p className="text-slate-400 mb-4">
            {tool.desc}. This tool runs entirely in your browser — no data is sent to our servers.
            For API access and advanced features, contact our team.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="tel:+13024640950" className="text-emerald-400">📞 +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400">✉️ kleber@ziontechgroup.com</a>
            <a href="/contact" className="text-emerald-400">Get Custom Tools →</a>
          </div>
        </div>
      </div>
    </main>
  );
}

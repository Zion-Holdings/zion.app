import React, { useMemo, useState } from 'react';
import {
  generateZionDocs,
  buildNotionMarkdownFromDocs,
  slugify,
} from '../utils/data/zionContent';

function CopyAnchorButton({ anchor }: { anchor: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        const url = `${window.location.origin}/docs#${anchor}`;
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="px-2 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
      aria-label={`Copy link to ${anchor}`}
    >
      {copied ? 'Copied' : 'Copy link'}
    </button>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
    >
      {copied ? 'Copied' : label}
    </button>
  );
}

export default function DocsPage() {
  const docs = useMemo(() => generateZionDocs(), []);
  const notion = useMemo(() => buildNotionMarkdownFromDocs(docs), [docs]);

  const sections = [
    docs.productOverview,
    docs.developerApi,
    docs.governanceGuide,
    docs.tokenomics,
    docs.team,
    docs.publicRoadmap,
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">
      <aside className="sticky top-20 self-start hidden lg:block">
        <div className="text-sm font-semibold mb-2">Table of contents</div>
        <ul className="space-y-1 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <article className="prose dark:prose-invert max-w-none">
        <h1>Zion OS Documentation</h1>
        {sections.map((s) => (
          <section key={s.id} id={slugify(s.title)}>
            <div className="flex items-center gap-3">
              <h2 className="m-0">{s.title}</h2>
              <CopyAnchorButton anchor={slugify(s.title)} />
            </div>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}

        <div className="not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">Notion Export</div>
            <CopyButton text={notion} label="Copy Markdown" />
          </div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">
{notion}
          </pre>
        </div>
      </article>
    </div>
  );
}
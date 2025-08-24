import Head from 'next/head';
import React, { useMemo, useState } from 'react';

type RoadmapInputs = {
  milestones: string;
  keywords: string;
  priorities: string;
};

type Stage = {
  id: number;
  name: string;
  theme: string;
  objective: string;
  highlights: string[];
  metrics: string[];
};

function generateStages({ milestones, keywords, priorities }: RoadmapInputs): Stage[] {
  const keywordList = keywords
    .split(/,|\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  const priorityList = priorities
    .split(/,|\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  const baseThemes = [
    'Foundations',
    'Trust Layer',
    'AI-Native Matching',
    'Reputation & Identity',
    'Payments & Escrow',
    'Marketplace Liquidity',
    'Sovereign Workflows',
    'Open Protocol Interfaces',
    'Governance & Ownership',
    'Global Scale',
  ];

  return baseThemes.map((theme, index) => {
    const id = index + 1;
    const name = `Zion v${id}`;

    const objective = `Advance ${theme.toLowerCase()} informed by: ${keywordList.join(', ') || 'core principles'}; focus: ${
      priorityList.join(', ') || 'execution and learning'
    }.`;

    const highlights: string[] = [
      index === 0 && 'Design system, domain model, and initial data architecture',
      index === 1 && 'Verifiable credentials, attestations, and dispute primitives',
      index === 2 && 'AI-assisted scoping, matching, and brief generation',
      index === 3 && 'Reputation graph, portable profiles, contribution proofs',
      index === 4 && 'Programmable escrow, milestone releases, stable on/off-ramps',
      index === 5 && 'Liquidity flywheel: supply activation, demand orchestration',
      index === 6 && 'Sovereign workspaces: contracts, IP, revenue share automations',
      index === 7 && 'Public APIs/SDKs, indexer services, client ecosystem',
      index === 8 && 'Progressive decentralization, contributor ownership, councils',
      index === 9 && 'Regionalization, localization, reliability, and performance',
    ]
      .filter(Boolean)
      .map((s) => String(s));

    const metrics: string[] = [
      'Weekly active contributors',
      'Verified engagements (intros, briefs, scopes)',
      'On-chain/escrow settlement volume',
      'Time-to-hire and time-to-pay',
      'Retention and NPS',
    ];

    return { id, name, theme, objective, highlights, metrics };
  });
}

function defaultOperatorPrompt(): string {
  return `You are Zion's Product Operator.

Inputs you will receive:
- milestones (string list)
- keywords (string list)
- priorities (string list)

Goals:
1) Produce a 10-stage roadmap labeled Zion v1 → v10
2) For each stage: theme, objective, 3-5 highlights, 3-5 measurable metrics
3) Ensure alignment with AI-native, trustless, talent-first, and sovereign tools ethos
4) Include explicit risks and validation signals per stage
5) Output concise, skimmable, exec-ready text

Format:
Zion v{n} — {theme}
Objective: ...
Highlights:
- ...
Metrics:
- ...
Risks:
- ...
Validation:
- ...
`;
}

export default function RoadmapPage(): JSX.Element {
  const [milestones, setMilestones] = useState('MVP live; First 50 users; First 10 paid engagements');
  const [keywords, setKeywords] = useState('AI-native, trustless, talent-first, sovereign tools');
  const [priorities, setPriorities] = useState('governance, scale, regional expansion');
  const [copied, setCopied] = useState(false);

  const stages = useMemo(
    () => generateStages({ milestones, keywords, priorities }),
    [milestones, keywords, priorities]
  );

  const operatorPrompt = useMemo(() => defaultOperatorPrompt(), []);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(operatorPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Head>
        <title>Zion Roadmap</title>
        <meta name="description" content="Zion 10-stage product evolution and roadmap generator." />
      </Head>
      <main className="min-h-screen bg-white text-gray-900">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Zion Roadmap</h1>
            <p className="mt-3 text-gray-700">Public-facing product evolution from v1 → v10 with a generator for operators.</p>
          </header>

          <section className="mb-10 grid gap-6 rounded-lg border border-gray-200 bg-gray-50 p-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold">Generator Inputs</h2>
              <p className="mt-1 text-sm text-gray-600">Tune the roadmap with current context and focus.</p>
            </div>
            <div className="md:col-span-2 grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Milestones achieved so far</label>
                <textarea
                  value={milestones}
                  onChange={(e) => setMilestones(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none"
                  placeholder="e.g., MVP live; 100 design partners; 1k weekly active contributors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vision keywords</label>
                <input
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none"
                  placeholder="e.g., AI-native, trustless, talent-first, sovereign tools"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Upcoming priorities</label>
                <input
                  value={priorities}
                  onChange={(e) => setPriorities(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none"
                  placeholder="e.g., governance, scale, regional expansion"
                />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Operator Prompt</h2>
              <button
                onClick={copyPrompt}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="whitespace-pre-wrap rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">{operatorPrompt}</pre>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Zion v1 → v10</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {stages.map((stage) => (
                <article key={stage.id} className="rounded-lg border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-lg font-bold">{stage.name} — {stage.theme}</h3>
                  <p className="mt-2 text-gray-700"><span className="font-semibold">Objective:</span> {stage.objective}</p>
                  <div className="mt-3">
                    <p className="font-semibold">Highlights</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      {stage.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="font-semibold">Metrics</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      {stage.metrics.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="font-semibold">Risks</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      <li>Scope creep; unclear ownership</li>
                      <li>Model hallucinations or bias affecting matches</li>
                      <li>Regulatory and payment-compliance variability</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="font-semibold">Validation</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      <li>Leading indicator movement on activation and retention</li>
                      <li>Faster time-to-hire and time-to-pay</li>
                      <li>Positive contributor NPS and dispute resolution rates</li>
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
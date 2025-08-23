import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

// Lightweight local state models (persist/storage can be added later)
export type FundingStage = 'pre-seed' | 'seed' | 'series-a' | 'public-token';

type DeckSectionKey =
  | 'vision'
  | 'market'
  | 'product'
  | 'team'
  | 'traction'
  | 'tokenomics'
  | 'timeline'
  | 'ask'
  | 'useOfFunds'
  | 'growthModel';

type Deck = {
  id: string;
  title: string;
  stage: FundingStage;
  style: 'Minimal' | 'Gradient' | 'Web3' | 'Corporate';
  sections: Record<DeckSectionKey, string>;
};

const defaultSections: Record<DeckSectionKey, string> = {
  vision: '',
  market: '',
  product: '',
  team: '',
  traction: '',
  tokenomics: '',
  timeline: '',
  ask: '',
  useOfFunds: '',
  growthModel: '',
};

const stageLabels: Record<FundingStage, string> = {
  'pre-seed': 'Pre-Seed / Friends & Family',
  seed: 'Seed / Strategic Angels',
  'series-a': 'Series A / Institutional',
  'public-token': 'Public Token Round (Fair launch, IDO, Airdrop)',
};

export default function FundraisingHub() {
  const [stage, setStage] = useState<FundingStage>('series-a');
  const [style, setStyle] = useState<'Minimal' | 'Gradient' | 'Web3' | 'Corporate'>('Minimal');
  const [decks, setDecks] = useState<Deck[]>([]);
  const [activeDeckId, setActiveDeckId] = useState<string | null>(null);
  const [operatorPrompt, setOperatorPrompt] = useState(
    'Create a fundraising deck for an AI talent protocol raising a $5M Series A. Include: vision, traction, use of funds, token utility, and multiverse growth model.'
  );
  const activeDeck = useMemo(() => decks.find(d => d.id === activeDeckId) || null, [decks, activeDeckId]);

  async function handleGenerateDeck() {
    const payload = { stage, style, operatorPrompt };
    try {
      const res = await fetch('/api/fundraising/generate-deck', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      const newDeck: Deck = {
        id: uuidv4(),
        title: data?.title || `Deck - ${stageLabels[stage]}`,
        stage,
        style,
        sections: { ...defaultSections, ...(data?.sections || {}) },
      };
      setDecks(prev => [newDeck, ...prev]);
      setActiveDeckId(newDeck.id);
    } catch (e) {
      const fallback: Deck = {
        id: uuidv4(),
        title: `Deck - ${stageLabels[stage]}`,
        stage,
        style,
        sections: {
          ...defaultSections,
          vision: 'Our vision is to build the canonical AI-native talent protocol.',
          traction: '10k waitlist, 50 design partners, $250k GMV in beta.',
          useOfFunds: '$5M to scale engineering, growth, and partnerships.',
          tokenomics: 'Utility token for staking credentials, access, and governance.',
          growthModel: 'Multiverse growth: network effects across talent, companies, and tools.',
        },
      };
      setDecks(prev => [fallback, ...prev]);
      setActiveDeckId(fallback.id);
    }
  }

  function handleSectionEdit(key: DeckSectionKey, value: string) {
    if (!activeDeck) return;
    setDecks(prev => prev.map(d => (d.id === activeDeck.id ? { ...d, sections: { ...d.sections, [key]: value } } : d)));
  }

  async function handleExport(format: 'pdf' | 'notion') {
    if (!activeDeck) return;
    await fetch('/api/fundraising/export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deck: activeDeck, format }),
    });
    alert(`Export requested: ${format.toUpperCase()}`);
  }

  async function handleUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    const form = new FormData();
    Array.from(files).forEach(f => form.append('files', f));
    await fetch('/api/fundraising/upload', { method: 'POST', body: form });
    alert('Uploaded to Deal Room');
  }

  async function handleCloseRound() {
    await fetch('/api/fundraising/close-round', { method: 'POST' });
    alert('Stakeholder updates sent');
  }

  return (
    <>
      <Head>
        <title>Fundraising | Zion</title>
      </Head>
      <div className="space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Fundraising</h1>
            <p className="text-sm text-gray-500">Generate decks, manage investor pipeline, and share updates</p>
          </div>
          <Link href="/capital"><a className="text-sm underline">Alias: /capital</a></Link>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30">
            <h2 className="font-medium mb-3">Funding Stage & Template</h2>
            <select
              className="w-full rounded border bg-transparent p-2"
              value={stage}
              onChange={e => setStage(e.target.value as FundingStage)}
            >
              <option value="pre-seed">{stageLabels['pre-seed']}</option>
              <option value="seed">{stageLabels['seed']}</option>
              <option value="series-a">{stageLabels['series-a']}</option>
              <option value="public-token">{stageLabels['public-token']}</option>
            </select>

            <label className="block text-sm mt-4 mb-1">Slide style</label>
            <select
              className="w-full rounded border bg-transparent p-2"
              value={style}
              onChange={e => setStyle(e.target.value as any)}
            >
              <option>Minimal</option>
              <option>Gradient</option>
              <option>Web3</option>
              <option>Corporate</option>
            </select>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30 lg:col-span-2">
            <h2 className="font-medium mb-3">Deck Generator (ZionGPT-enabled)</h2>
            <label className="block text-sm mb-1">Operator Prompt</label>
            <textarea
              className="w-full rounded border bg-transparent p-2 h-24"
              value={operatorPrompt}
              onChange={e => setOperatorPrompt(e.target.value)}
            />
            <div className="mt-3">
              <button className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black" onClick={handleGenerateDeck}>
                Generate Deck
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30">
            <h2 className="font-medium mb-3">Decks</h2>
            <ul className="space-y-2">
              {decks.map(deck => (
                <li key={deck.id}>
                  <button
                    className={`w-full text-left p-2 rounded border ${activeDeckId === deck.id ? 'border-black dark:border-white' : 'border-transparent'}`}
                    onClick={() => setActiveDeckId(deck.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{deck.title}</span>
                      <span className="text-xs text-gray-500">{stageLabels[deck.stage]}</span>
                    </div>
                    <div className="text-xs text-gray-500">Style: {deck.style}</div>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1.5 rounded border" onClick={() => handleExport('pdf')} disabled={!activeDeck}>Export PDF</button>
              <button className="px-3 py-1.5 rounded border" onClick={() => handleExport('notion')} disabled={!activeDeck}>Share to Notion</button>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30 lg:col-span-2">
            <h2 className="font-medium mb-3">Editable Sections</h2>
            {activeDeck ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(
                  [
                    ['vision', 'Vision'],
                    ['market', 'Market size'],
                    ['product', 'Product'],
                    ['team', 'Team'],
                    ['traction', 'Traction'],
                    ['tokenomics', 'Tokenomics'],
                    ['timeline', 'Timeline'],
                    ['ask', 'Ask'],
                    ['useOfFunds', 'Use of funds'],
                    ['growthModel', 'Multiverse growth model'],
                  ] as [DeckSectionKey, string][]
                ).map(([key, label]) => (
                  <div key={key}>
                    <label className="block text-xs mb-1 text-gray-500">{label}</label>
                    <textarea
                      className="w-full rounded border bg-transparent p-2 h-28"
                      value={activeDeck.sections[key]}
                      onChange={e => handleSectionEdit(key, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">Generate or select a deck to edit sections.</p>
            )}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30">
            <h2 className="font-medium mb-3">Deal Room Uploads</h2>
            <p className="text-xs text-gray-500 mb-2">Docs: SAFE, Pitch Deck, Metrics, Token Flow</p>
            <input type="file" multiple onChange={e => handleUpload(e.target.files)} />
          </div>

          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30">
            <h2 className="font-medium mb-3">Investor CRM</h2>
            <p className="text-xs text-gray-500">Pipeline by stage (placeholder)</p>
            <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
              <li>New: 8</li>
              <li>Contacted: 12</li>
              <li>Meetings: 5</li>
              <li>DD: 3</li>
              <li>Committed: 2</li>
            </ul>
            <button className="mt-3 px-3 py-1.5 rounded border" onClick={handleCloseRound}>Close round → send updates</button>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30">
            <h2 className="font-medium mb-3">Permissions</h2>
            <p className="text-sm">Core team only. Invite collaborators per round (placeholder).</p>
          </div>
        </section>
      </div>
    </>
  );
}
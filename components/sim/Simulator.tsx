import React, { useMemo, useState } from 'react';

export type ScenarioLens = 'UBI' | 'Token barter' | 'Reputation-only DAO' | 'Gift economies';
export type Roleplay = 'Talent' | 'Coordinator' | 'Nation-builder';
export type Sector = 'Health' | 'Creative' | 'Infrastructure' | 'Tech';

type Preferences = {
  scenario: ScenarioLens;
  role: Roleplay;
  region: string;
  sector: Sector;
};

type SimulationNode = { id: string; label: string; group: string };
type SimulationLink = { source: string; target: string; weight: number };

type SimulationOutput = {
  timeline: Array<{ t: number; decision: string; rationale: string }>;
  network: { nodes: SimulationNode[]; links: SimulationLink[] };
  dwi: number; // Decentralized Work Index
  summary: string;
};

function defaultPreferences(): Preferences {
  return {
    scenario: 'Reputation-only DAO',
    role: 'Talent',
    region: 'Global South',
    sector: 'Health',
  };
}

const presetPrompts = [
  {
    title: 'Distributed hospital under ZionOS',
    markdown: 'Simulate a world where job creation happens through DAO voting and token-free reputation points. Show me how a distributed hospital would run under ZionOS.',
  },
  {
    title: 'Gift economy with trust scores',
    markdown: 'Play as a talent in a gift economy built on trust scores and sovereign AI governance. What decisions must you make to survive and contribute?',
  },
];

export default function Simulator({ routeId }: { routeId: string }) {
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences());
  const [prompt, setPrompt] = useState<string>(presetPrompts[0].markdown);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<SimulationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scenarioOptions: ScenarioLens[] = ['UBI', 'Token barter', 'Reputation-only DAO', 'Gift economies'];
  const roleOptions: Roleplay[] = ['Talent', 'Coordinator', 'Nation-builder'];
  const sectorOptions: Sector[] = ['Health', 'Creative', 'Infrastructure', 'Tech'];

  async function runSimulation() {
    setIsRunning(true);
    setError(null);
    try {
      const res = await fetch('/api/sim/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences, prompt, routeId }),
      });
      if (!res.ok) throw new Error(`Simulation failed: ${res.status}`);
      const data: SimulationOutput = await res.json();
      setOutput(data);
    } catch (e: any) {
      setError(e.message || 'Unknown error');
    } finally {
      setIsRunning(false);
    }
  }

  function exportMarkdown() {
    if (!output) return;
    const md = `# ZionGPT Simulation Report\n\n- Route: ${routeId}\n- Scenario: ${preferences.scenario}\n- Role: ${preferences.role}\n- Region: ${preferences.region}\n- Sector: ${preferences.sector}\n- Decentralized Work Index: ${output.dwi}\n\n## Summary\n${output.summary}\n\n## Timeline\n${output.timeline
      .map((e) => `- T+${e.t}: ${e.decision} — ${e.rationale}`)
      .join('\n')}\n`;
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ziongpt-simulation-report.md';
    a.click();
    URL.revokeObjectURL(url);
  }

  async function pushProposal() {
    if (!output) return;
    await fetch('/api/sim/proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ preferences, output, routeId }),
    });
  }

  async function triggerGrant() {
    if (!output) return;
    await fetch('/api/sim/grant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ preferences, output, routeId }),
    });
  }

  const previewNetwork = useMemo(() => output?.network ?? { nodes: [], links: [] }, [output]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="lg:col-span-1 space-y-4">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h2 className="font-medium mb-2">Input Preferences</h2>
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm">Scenario lens</span>
              <select
                className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent p-2"
                value={preferences.scenario}
                onChange={(e) => setPreferences((p) => ({ ...p, scenario: e.target.value as ScenarioLens }))}
              >
                {scenarioOptions.map((o) => (
                  <option key={o} value={o} className="bg-white dark:bg-black">
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm">Roleplay</span>
              <select
                className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent p-2"
                value={preferences.role}
                onChange={(e) => setPreferences((p) => ({ ...p, role: e.target.value as Roleplay }))}
              >
                {roleOptions.map((o) => (
                  <option key={o} value={o} className="bg-white dark:bg-black">
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm">Region</span>
              <input
                className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent p-2"
                value={preferences.region}
                onChange={(e) => setPreferences((p) => ({ ...p, region: e.target.value }))}
                placeholder="e.g., Global South, NA, EU"
              />
            </label>
            <label className="block">
              <span className="text-sm">Sector</span>
              <select
                className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent p-2"
                value={preferences.sector}
                onChange={(e) => setPreferences((p) => ({ ...p, sector: e.target.value as Sector }))}
              >
                {sectorOptions.map((o) => (
                  <option key={o} value={o} className="bg-white dark:bg-black">
                    {o}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 space-y-3">
          <h2 className="font-medium">ZionGPT Simulator Prompts</h2>
          <div className="flex flex-wrap gap-2">
            {presetPrompts.map((p) => (
              <button
                key={p.title}
                onClick={() => setPrompt(p.markdown)}
                className="text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                {p.title}
              </button>
            ))}
          </div>
          <textarea
            className="w-full h-40 rounded border border-gray-300 dark:border-gray-700 bg-transparent p-2 text-sm"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="px-3 py-1.5 rounded bg-black text-white dark:bg-white dark:text-black disabled:opacity-50"
            >
              {isRunning ? 'Running…' : 'Play'}
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(prompt)}
              className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700"
            >
              Copy
            </button>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
      </section>

      <section className="lg:col-span-2 space-y-4">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h2 className="font-medium mb-2">Simulation Output</h2>
          {!output && <p className="text-sm text-gray-600">Run the simulator to see timeline, network, and index.</p>}
          {output && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Timeline of decisions</h3>
                <ol className="list-decimal ml-6 text-sm space-y-1">
                  {output.timeline.map((e) => (
                    <li key={e.t}>
                      <span className="font-medium">T+{e.t}:</span> {e.decision} —
                      <span className="text-gray-600"> {e.rationale}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-medium mb-2">Network visualizer</h3>
                <SimpleNetworkGraph nodes={previewNetwork.nodes} links={previewNetwork.links} />
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <div className="font-medium">Decentralized Work Index</div>
                  <div className="text-2xl font-semibold">{output.dwi}</div>
                </div>
                <div className="ml-auto flex gap-2">
                  <button onClick={exportMarkdown} className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700">
                    Export report
                  </button>
                  <button onClick={pushProposal} className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700">
                    Push to DAO
                  </button>
                  <button onClick={triggerGrant} className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700">
                    Trigger micro-grant
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h2 className="font-medium">Optional worlds</h2>
          <p className="text-sm text-gray-600">3D Unity/WebGL and RPG-style paths are planned. Leaderboard is invite-only.</p>
        </div>
      </section>
    </div>
  );
}

function SimpleNetworkGraph({
  nodes,
  links,
}: {
  nodes: SimulationNode[];
  links: SimulationLink[];
}) {
  // Place nodes on a circle for a lightweight, dependency-free layout
  const R = 120;
  const centerX = 200;
  const centerY = 140;
  const placed = nodes.map((n, i) => {
    const angle = (2 * Math.PI * i) / Math.max(1, nodes.length);
    return { ...n, x: centerX + R * Math.cos(angle), y: centerY + R * Math.sin(angle) } as any;
  });

  function nodeById(id: string) {
    return placed.find((n) => n.id === id) as any;
  }

  return (
    <svg viewBox="0 0 400 280" className="w-full border rounded bg-white dark:bg-black">
      {links.map((l, idx) => {
        const a = nodeById(l.source);
        const b = nodeById(l.target);
        if (!a || !b) return null;
        return (
          <line
            key={idx}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#94a3b8"
            strokeWidth={1 + l.weight}
            opacity={0.7}
          />
        );
      })}
      {placed.map((n: any) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={10} fill="#111827" />
          <text x={n.x + 12} y={n.y + 4} fontSize={10} className="fill-gray-900 dark:fill-gray-100">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
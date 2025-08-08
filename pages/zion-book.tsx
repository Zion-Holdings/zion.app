import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Book from '../components/ui/Book';
import uiEvolution from '../data/reports/ui-evolution/ui-evolution-analysis.json';
import responsiveReport from '../data/reports/responsive/responsive-analysis.json';

const ZionBookPage: NextPage = () => {
  const timeline = Array.isArray(uiEvolution.items)
    ? uiEvolution.items.slice(0, 12).map((it: any, idx: number) => ({
        date: `Milestone ${idx + 1}`,
        title: it.file?.split('/').pop() || 'UI Evolution',
        description: Array.isArray(it.issues) ? `Issues: ${it.issues.slice(0, 3).join(', ')}` : undefined,
      }))
    : [];

  const metrics = [
    { label: 'Analyzed Files', value: String(uiEvolution.filesAnalyzed || 0) },
    { label: 'Report Timestamp', value: uiEvolution.timestamp || '' },
    { label: 'Responsive Issues', value: String((responsiveReport?.items || []).length || 0) },
  ];

  const chapters = [
    {
      id: 'why',
      title: 'Chapter 1 — The Why',
      content: (
        <div>
          <h3 className="print-subtitle">Origin story</h3>
          <p>
            Zion began as a conviction: software can be a civilization protocol. The founder’s journey
            moved from startup habits to protocol thinking—prioritizing sovereignty, composability, and
            participation over proprietary lock-in.
          </p>
          <h3 className="print-subtitle">Vision: AI + Talent + Trust</h3>
          <ul className="list-disc pl-6">
            <li>AI: Intelligence as leverage and learning substrate.</li>
            <li>Talent: A networked labor market that routes opportunity.</li>
            <li>Trust: Cryptographic and social primitives for coordination.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'blueprint',
      title: 'Chapter 2 — The Blueprint',
      content: (
        <div>
          <h3 className="print-subtitle">Zion OS architecture</h3>
          <p>
            Zion OS integrates modules across marketplace, DAO governance, AI agents, token incentives,
            and an academy layer. Each surface is modular and API-first.
          </p>
          <h3 className="print-subtitle">Modules</h3>
          <ul className="list-disc pl-6">
            <li>Marketplace</li>
            <li>DAO</li>
            <li>AI</li>
            <li>Token</li>
            <li>Academy</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'constitution',
      title: 'Chapter 3 — Manifesto & Constitution',
      content: (
        <div>
          <h3 className="print-subtitle">Published values</h3>
          <ul className="list-disc pl-6">
            <li>Open coordination</li>
            <li>Composability over complexity</li>
            <li>Credible neutrality</li>
          </ul>
          <h3 className="print-subtitle">Founding principles</h3>
          <p>
            Align incentives, minimize rent-seeking, maximize learning velocity, and preserve user agency.
          </p>
        </div>
      ),
    },
    {
      id: 'design',
      title: 'Chapter 4 — Design Evolution',
      content: (
        <div>
          <h3 className="print-subtitle">Figma timeline</h3>
          <p>Auto-generated from UI evolution and responsive reports.</p>
          <h3 className="print-subtitle">Screenshots per module</h3>
          <p>Drop assets in <code>/public/book/</code> to include automatically.</p>
        </div>
      ),
    },
    {
      id: 'footprint',
      title: 'Chapter 5 — Global Footprint',
      content: (
        <div>
          <h3 className="print-subtitle">Multiverse map</h3>
          <p>Programmatic map placeholder. Integrate real data APIs as they become available.</p>
          <h3 className="print-subtitle">Talent reach + ecosystem metrics</h3>
          <p>Metrics summarized below.</p>
        </div>
      ),
    },
    {
      id: 'road-to-v10',
      title: 'Chapter 6 — Road to v10',
      content: (
        <div>
          <h3 className="print-subtitle">Roadmap</h3>
          <ul className="list-disc pl-6">
            <li>v8 → v9: stabilize interfaces</li>
            <li>v9 → v10: protocolization and DAO hardening</li>
          </ul>
          <h3 className="print-subtitle">DAO votes</h3>
          <p>Embed on-chain snapshots when available.</p>
          <h3 className="print-subtitle">Zion’s future as protocol, not platform</h3>
          <p>Interfaces remain open; clients compete on UX and services.</p>
        </div>
      ),
    },
  ];

  return (
    <Book
      title="Zion OS Book"
      subtitle="Civilization Protocol"
      quote={{ text: 'We didn’t build a startup. We built a civilization protocol.' }}
      chapters={chapters}
      timeline={timeline}
      metrics={metrics}
    />
  );
};

export default ZionBookPage;
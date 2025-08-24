import React, { useMemo, useState } from 'react';

export type LegalStructure = 'Cayman Foundation' | 'Swiss Verein' | 'US 501(c)(6)' | 'DAO-native Wrapper';

export default function CharterGenerator() {
  const [legalStructure, setLegalStructure] = useState<LegalStructure>('Cayman Foundation');
  const [protocolName, setProtocolName] = useState('Zion');
  const [tokenSymbol, setTokenSymbol] = useState('ZION$');
  const [includeContributorRules, setIncludeContributorRules] = useState(true);
  const [includeGrants, setIncludeGrants] = useState(true);
  const [includeDAOIntegration, setIncludeDAOIntegration] = useState(true);

  const charterText = useMemo(() => {
    const name = protocolName.trim() || 'Zion';
    const symbol = tokenSymbol.trim() || 'ZION$';

    const header = `${name} Foundation Charter`;
    const preamble = `This Charter establishes a legally-neutral foundation (the "Foundation") to steward the ${name} Protocol, an open, decentralized AI protocol dedicated to sovereignty, open knowledge, and verifiable trust.`;

    const registry = `1. Legal Neutrality and Registry\n- Structure: ${legalStructure}.\n- Purpose: Maintain global neutrality, operate outside the control of any single jurisdiction, and coordinate public-good infrastructure for the ${name} Protocol.\n- Scope: Non-custodial oversight, standard-setting, and community enablement.`;

    const mission = `2. Mission and Scope\n- Protect, evolve, and safeguard the ${name} Protocol as a public good.\n- Champion open knowledge, reproducible research, and transparent governance.\n- Promote sovereignty for users, developers, and nation/community DAOs.`;

    const neutrality = `3. Political and Jurisdictional Neutrality\n- The Foundation is non-partisan and non-sovereign.\n- No nation-state, corporation, or private actor may control governance outcomes.\n- All critical processes are transparent, documented, and reproducible.`;

    const treasury = `4. Treasury and Token Oversight\n- The Foundation monitors the on-chain treasury associated with ${symbol} for policy compliance and program execution.\n- The Foundation does not custody private keys for third parties and does not provide financial advice.\n- Treasury actions (grants, bounties, RFPs) are executed via on-chain governance with public reporting.`;

    const contributors = includeContributorRules
      ? `5. Contributor Program\n- Clear rules of engagement, IP posture: permissive, open-source first (e.g., Apache-2.0/MIT) unless otherwise required.\n- Conflict-of-interest and disclosures required for core stewards and grantees.\n- Security-first norms, responsible disclosure, and reproducible builds.`
      : '';

    const dao = includeDAOIntegration
      ? `6. DAO Integration\n- The Foundation recognizes the ${name} DAO as the canonical on-chain governance venue for protocol-level changes.\n- Nation/community DAOs may be delegated voting rights proportionally to stake and verified contribution.\n- Core Stewards are appointed via DAO ratification and subject to removal via DAO vote.`
      : '';

    const grants = includeGrants
      ? `7. Multiverse Grants and R&D\n- The Foundation may issue cross-multiverse grants across chains, rollups, and alternate compute realms.\n- Priority to public goods: safety tooling, evaluations, datasets, compute schedulers, agents, and interoperability.\n- Quarterly open calls with transparent selection criteria and milestone-based vesting.`
      : '';

    const governance = `8. Governance and Stewardship\n- Core Stewards: responsible for roadmap curation, risk management, and standards incubation.\n- Open Working Groups: domain-specific forums (safety, evals, infra, devrel).\n- Accountability: proposals, deliberation notes, and decisions published within 7 days.`;

    const transparency = `9. Transparency and Reporting\n- Quarterly reports: finances, grants, impact metrics, and roadmap updates.\n- On-chain dashboards: treasury flows, vote participation, and execution status.\n- Public archive: MOUs, audits, legal opinions (where permissible).`;

    const amendments = `10. Amendments\n- Amendable via DAO supermajority or Foundation supermajority plus DAO simple majority.\n- All amendments versioned and time-stamped on IPFS and Git repositories.`;

    const liability = `11. Limitations and Disclaimers\n- No warranties; the ${name} Protocol is experimental.\n- The Foundation does not offer securities and does not guarantee token value.\n- Jurisdictional compliance: local obligations remain with individual actors.`;

    return [header, '', preamble, '', registry, '', mission, '', neutrality, '', treasury, '', contributors, '', dao, '', grants, '', governance, '', transparency, '', amendments, '', liability]
      .filter(Boolean)
      .join('\n');
  }, [legalStructure, protocolName, tokenSymbol, includeContributorRules, includeGrants, includeDAOIntegration]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Charter Settings</h2>
          <label className="block text-sm">Protocol Name
            <input className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={protocolName} onChange={(e) => setProtocolName(e.target.value)} />
          </label>
          <label className="block text-sm">Token Symbol
            <input className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
          </label>
          <label className="block text-sm">Legal Structure
            <select className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={legalStructure} onChange={(e) => setLegalStructure(e.target.value as LegalStructure)}>
              <option value="Cayman Foundation">Cayman Foundation</option>
              <option value="Swiss Verein">Swiss Verein</option>
              <option value="US 501(c)(6)">US 501(c)(6)</option>
              <option value="DAO-native Wrapper">DAO-native legal wrapper (e.g., Otoco)</option>
            </select>
          </label>
          <div className="flex items-center gap-3">
            <input id="contrib" type="checkbox" checked={includeContributorRules} onChange={(e) => setIncludeContributorRules(e.target.checked)} />
            <label htmlFor="contrib" className="text-sm">Include contributor program rules</label>
          </div>
          <div className="flex items-center gap-3">
            <input id="dao" type="checkbox" checked={includeDAOIntegration} onChange={(e) => setIncludeDAOIntegration(e.target.checked)} />
            <label htmlFor="dao" className="text-sm">Include DAO integration</label>
          </div>
          <div className="flex items-center gap-3">
            <input id="grants" type="checkbox" checked={includeGrants} onChange={(e) => setIncludeGrants(e.target.checked)} />
            <label htmlFor="grants" className="text-sm">Include multiverse grants</label>
          </div>
        </div>
        <div className="space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Export</h2>
          <div className="flex gap-3">
            <button
              className="px-3 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700"
              onClick={() => {
                const blob = new Blob([charterText], { type: 'text/markdown;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${protocolName || 'zion'}-foundation-charter.md`;
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              Download .md
            </button>
            <button
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700"
              onClick={() => navigator.clipboard.writeText(charterText)}
            >
              Copy to clipboard
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Generated Charter Preview</h2>
        <textarea className="w-full h-96 rounded border border-gray-300 dark:border-gray-700 bg-transparent p-3 font-mono text-sm" value={charterText} readOnly />
      </div>
    </div>
  );
}
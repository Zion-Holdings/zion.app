export type WhitepaperEdition = 'investor' | 'developer' | 'full';

export type WhitepaperSection = {
  id: string;
  title: string;
  subtitle?: string;
  contentMd: string;
};

export const OPERATOR_PROMPT = `
You are Zion's Operator Agent. Auto-generate and maintain the Zion Protocol Whitepaper.
Keep editions in sync:
- Investor Edition: concise narrative, market sizing, business model, token economics and governance summary.
- Developer Edition: detailed architecture, modules, interfaces, contracts, AI stack, data schemas, and security model.
- Full: merge both with complete appendices.
Update quarterly, snap to the roadmap cadence (v1–v10). Ensure region policy tables and DAO parameters reflect on-chain config.
`;

const executiveSummary = `
Zion is an AI-native, talent-first economic protocol that coordinates work, capital, and reputation across a multiverse of sovereign deployments. It fuses AI agents, verifiable talent passports, and programmable markets to create a global operating system for trusted collaboration.

Why now: coordination costs are breaking institutions. AI expands capability but compresses trust. Zion aligns AI, talent, and value with on-chain transparency, minimax attack-surface governance, and credibly neutral settlements.

Ambition: AI + Talent + Trust. Zion turns skills into programmable assets, converts contributions into composable on-chain claims, and routes demand to the best available agents—human or AI—under enforceable rules.
`;

const architectureInvestor = `
- Zion OS Modules: Marketplace, AI, Token, DAO, Academy
- Multiverse: region-anchored deployments with shared standards and local policy levers
- ZionGPT Core: decentralized prompt/inference mesh with fallback to external APIs
`;

const architectureDeveloper = `
Zion OS Module Map
- Marketplace: Orders, Bounties, Escrow, Dispute, Review
- AI: Prompt registry, Model adapters, Fine-tune loop, Safety rails, Policy filters
- Token: Treasury, Rewards, Fees, Staking, Emissions controller
- DAO: Proposals (ZGP), Voting, Timelock, Emergency council (optional), Region quorums
- Academy: Curriculum, Credential issuance, Talent Passport minting

Multiverse Deployments
- Global standard: interfaces, schemas, ZGP process
- Local instances: configurable fee splits, quorum thresholds, KYC/credential policy, currency bridges
- Cross-instance settlement: IBC-like bridge with optimistic verification and challenge window

Decentralized GPT Layer (ZionGPT Core)
- Prompt DAGs with deterministic transforms and safety classifiers
- Model routing: on-platform inference (open models) with API fallback
- Attestations: prompt hash + output hash + evaluator scores recorded on-chain/off-chain store
`;

const tokenomics = `
ZION$ Roles
- Rewards: task completion, model contributions, governance participation
- Fees: marketplace fees, listing, dispute, premium inference
- Staking: reputation-weighted staking for providers, curators, evaluators

Distribution Model (illustrative)
- Community: 40%
- Grants & Ecosystem: 20%
- Treasury (DAO): 20%
- Founders & Team (4y vest, 1y cliff): 15%
- Strategic Partners/Market Makers (2y vest): 5%

Monetary Policy
- Emissions: decaying schedule with activity-based boosts tied to verified contribution
- Deflation: periodic buyback-and-burn from protocol fees; slash on bad behavior
- Inflation guards: governance bounded within preset bands, emergency pause

Governance Weighting
- Baseline: 1 ZION$ = 1 vote (liquid governance)
- Optional quadratic cap for community proposals
- Reputation overlays: Talent Passport tiers gate proposer rights and committee seats
`;

const governance = `
Proposal Types (ZGPs)
- Parameter change (fees, quorums, staking ratios)
- Treasury spend (grants, liquidity programs)
- Module upgrade (Marketplace, AI, Token, DAO, Academy)
- Region policy (KYC rules, credential standards, language packs)
- Emergency action (pause, kill-switch scope-limited)

Process
1. Draft (forum, 7 days)
2. Temperature check (off-chain snapshot, 3 days)
3. On-chain vote (7–14 days) with region-based quorum
4. Timelock (48–72h) and execution

DAO Mechanics
- Token house, Builder council (passport ≥ Tier 2), Reviewer committee (slashing authority for fraud)
- Emergency council (optional, 3-of-5 multisig) limited to pause/rollback within 72h

Region-based Quorum
- Global quorum: 8–12% of circulating ZION$
- Regional floor: each active region ≥ 2% participation or auto-extends voting
`;

const aiStack = `
Prompt Infrastructure
- Versioned prompt registry with typed variables, safety tags, and policy gates
- Prompt graphs: composable nodes for retrieval, tools, evaluators

Fine-tuning Loop
- Data: opted-in task transcripts, evaluator rubrics, red-team corpora
- Training: reproducible seeds, weight diff attestations, eval suite before promotion
- Incentives: ZION$ rewards for data providers, evaluators, and model maintainers

Inference
- On-platform: containerized open models (e.g., Llama, Mistral) with GPU pools
- Fallback: vendor APIs with cryptographic metering, output attestation, and spend caps
`;

const useCases = `
- Freelance Work: escrowed bounties, staged milestones, AI co-pilot, dispute resolution
- Incubator: rolling grants, KPI options, revenue-share templates
- GovTech: procurement bounties, document processing agents, verifiable audit trails
- Talent Passports: credential graph (skills, reputation, KYC), privacy-preserving proofs
`;

const roadmap = `
Zion v1–v10 (indicative)
- v1: Core Marketplace, basic ZION$, passport minting, snapshot governance
- v2: Staking, dispute module, evaluator marketplace
- v3: ZionGPT Core v1, prompt registry, API fallback
- v4: Region deployments alpha, fee splits, policy packs
- v5: Cross-instance bridge (optimistic), buyback-and-burn
- v6: Academy v1, credential standards, partner integrators
- v7: Advanced staking (slashing), quadratic overlays, emergency council opt-in
- v8: On-platform training v1, contributor rewards, eval suite
- v9: Sovereign infra tooling, air-gapped governance options
- v10: Full multiverse federation, public data commons

Expansion
- Regions: LATAM, MENA, EU, APAC
- Integrations: wallets, identity (OIDC/VC), payments, procurement APIs
- Sovereign Deployment: reproducible stacks for state/enterprise enclaves
`;

function mdSection(id: string, title: string, content: string, subtitle?: string): WhitepaperSection {
  return { id, title, subtitle, contentMd: content.trim() };
}

export function getWhitepaperSections(edition: WhitepaperEdition): WhitepaperSection[] {
  const common = [
    mdSection('exec', 'Executive Summary', executiveSummary),
    mdSection('architecture', 'System Architecture', `${architectureInvestor}\n\n${architectureDeveloper}`),
    mdSection('tokenomics', 'Tokenomics', tokenomics),
    mdSection('governance', 'Governance', governance),
    mdSection('ai', 'AI Stack', aiStack),
    mdSection('use-cases', 'Use Cases', useCases),
    mdSection('roadmap', 'Roadmap', roadmap),
  ];

  if (edition === 'investor') {
    return [
      mdSection('exec', 'Executive Summary', executiveSummary),
      mdSection('architecture', 'System Architecture (Investor)', architectureInvestor),
      mdSection('tokenomics', 'Tokenomics', tokenomics),
      mdSection('governance', 'Governance', governance),
      mdSection('use-cases', 'Use Cases', useCases),
      mdSection('roadmap', 'Roadmap', roadmap),
    ];
  }
  if (edition === 'developer') {
    return [
      mdSection('exec', 'Executive Summary', executiveSummary),
      mdSection('architecture', 'System Architecture (Developer)', architectureDeveloper),
      mdSection('ai', 'AI Stack', aiStack),
      mdSection('governance', 'Governance', governance),
      mdSection('tokenomics', 'Tokenomics', tokenomics),
      mdSection('roadmap', 'Roadmap', roadmap),
    ];
  }
  return common;
}
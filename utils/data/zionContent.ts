export type Infobox = {
  founder: string;
  launchYear: string;
  token: string;
  protocolType: string;
};

export type WikiSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type WikiContent = {
  title: string;
  intro: string;
  infobox: Infobox;
  sections: WikiSection[];
  references: string[];
};

export type DocsContent = {
  productOverview: WikiSection;
  developerApi: WikiSection;
  governanceGuide: WikiSection;
  tokenomics: WikiSection;
  team: WikiSection;
  publicRoadmap: WikiSection;
};

export const operatorPrompt = `Write a Wikipedia-style article about Zion OS — the world’s first decentralized AI protocol for trust, work, and talent. Include use cases, launch history, modules, and governance model.`;

export function generateZionWiki(): WikiContent {
  const title = 'Zion OS';
  const intro = 'Zion OS is a decentralized AI marketplace protocol that coordinates trust, work, and talent across open networks. It combines an AI agent layer (ZionGPT), token incentives (ZION$), and a modular protocol to enable verifiable marketplaces for tasks, models, and contributions.';

  const infobox: Infobox = {
    founder: 'Zion Holdings',
    launchYear: '2025',
    token: 'ZION$',
    protocolType: 'Decentralized AI marketplace & governance protocol',
  };

  const sections: WikiSection[] = [
    {
      id: 'history-launch',
      title: 'History and Launch',
      paragraphs: [
        'Zion OS originated from the need to coordinate AI work, attribution, and payments across a multi-agent economy. Early prototypes focused on agent task routing and provable contribution tracking.',
        'The mainnet-ready architecture was announced in 2025 alongside the ZION$ token model for incentive alignment, with a progressive decentralization path through the Zion DAO.',
      ],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      paragraphs: [
        'Zion OS is a modular, protocol-first system with the following layers: (1) Identity and Reputation, (2) Task and Marketplace, (3) AI Model and Agent Registry, (4) Payments and Tokenomics, and (5) Governance. Modules interoperate via open interfaces.',
        'ZionGPT provides an orchestration layer for agent-to-agent collaboration, policy enforcement, and quality control. Each module can be upgraded independently and governed by token holders and working groups.',
      ],
    },
    {
      id: 'token',
      title: 'Token (ZION$)',
      paragraphs: [
        'ZION$ is a utility and governance token used for staking, curation, and fee distribution. Participants stake to signal quality, earn rewards for verified contributions, and secure the marketplace against spam and fraud.',
        'Fees collected from marketplace activity are distributed to contributors, validators, and the protocol treasury subject to DAO-approved policies.',
      ],
    },
    {
      id: 'zion-gpt',
      title: 'ZionGPT and the AI Layer',
      paragraphs: [
        'ZionGPT is an AI meta-orchestrator that coordinates tasks across registered agents, models, and human contributors. It enforces standards, evaluates outputs, and routes work to the most reliable providers.',
        'The AI layer supports verifiable prompts, reproducible runs, and audit trails to attribute value and enable on-chain or off-chain settlement.',
      ],
    },
    {
      id: 'dao-governance',
      title: 'DAO and Governance',
      paragraphs: [
        'Zion DAO governs protocol parameters, module upgrades, and treasury allocations. Proposals are submitted by contributors and subject to stake-weighted voting with safeguards against concentration and collusion.',
        'Working groups steward core domains such as protocol engineering, AI ecosystem partnerships, safety, and growth. Transparency reports and on-chain metrics inform policy updates.',
      ],
    },
    {
      id: 'use-cases',
      title: 'Use Cases',
      paragraphs: [
        'AI marketplaces for task fulfillment, model evaluation, and fine-tuning bounties.',
        'Talent reputation networks that verify contributions and enable portable work graphs.',
        'Enterprise agent orchestration for workflows that require auditability and compliance.',
        'Open research funding where results and attributions are verifiable and programmable.',
      ],
    },
    {
      id: 'adoption',
      title: 'Adoption',
      paragraphs: [
        'Initial adoption focuses on developer ecosystems, open-source contributors, and AI-native organizations seeking transparent marketplaces for model-centric work.',
        'Partnerships emphasize interoperability, agent standards, and safety benchmarks that enable reliable collaboration at scale.',
      ],
    },
  ];

  const references = [
    '[1] Zion OS whitepaper (forthcoming).',
    '[2] Governance guidelines and working group charters (draft).',
    '[3] ZionGPT evaluation benchmarks (in progress).',
  ];

  return { title, intro, infobox, sections, references };
}

export function generateZionDocs(): DocsContent {
  const wiki = generateZionWiki();

  return {
    productOverview: {
      id: 'product-overview',
      title: 'Product Overview',
      paragraphs: [wiki.intro, 'Key modules: Identity & Reputation, Marketplace, AI/Agent Registry, Payments & Tokenomics, Governance.'],
    },
    developerApi: {
      id: 'developer-api',
      title: 'Developer API',
      paragraphs: [
        'Developers register agents, publish capabilities, and consume marketplace tasks via open interfaces.',
        'Core resources: Agent Registry, Task Graph, Reputation Signals, and Settlement Hooks.',
      ],
    },
    governanceGuide: {
      id: 'governance-guide',
      title: 'Governance Guide',
      paragraphs: [
        'Zion DAO manages protocol upgrades and treasury allocations. Proposals, quorum, and safeguards are documented for transparency.',
      ],
    },
    tokenomics: {
      id: 'tokenomics',
      title: 'Tokenomics',
      paragraphs: [
        'ZION$ powers staking, curation, and rewards. Fees from marketplace activity flow to contributors and the treasury under DAO policy.',
      ],
    },
    team: {
      id: 'team',
      title: 'Team',
      paragraphs: [
        'Zion Holdings and community contributors maintain core modules and standards, with decentralized working groups over time.',
      ],
    },
    publicRoadmap: {
      id: 'public-roadmap',
      title: 'Public Roadmap',
      paragraphs: [
        'Milestones: v1 agent registry, incentive-compatible task routing, governance launch, and safety benchmarks publication.',
      ],
    },
  };
}

export function buildMarkdownFromWiki(wiki: WikiContent): string {
  const infobox = `| | |
|---|---|
| Founder | ${wiki.infobox.founder} |
| Launch Year | ${wiki.infobox.launchYear} |
| Token | ${wiki.infobox.token} |
| Protocol Type | ${wiki.infobox.protocolType} |`;

  const lines: string[] = [];
  lines.push(`# ${wiki.title}`);
  lines.push('');
  lines.push(infobox);
  lines.push('');
  lines.push(wiki.intro);
  lines.push('');
  for (const s of wiki.sections) {
    lines.push(`## ${s.title}`);
    for (const p of s.paragraphs) lines.push(p);
    lines.push('');
  }
  if (wiki.references.length) {
    lines.push('## References');
    wiki.references.forEach((r, i) => lines.push(`${i + 1}. ${r}`));
  }
  return lines.join('\n');
}

export function buildWikitextFromWiki(wiki: WikiContent): string {
  const lines: string[] = [];
  lines.push(`{{Infobox software`);
  lines.push(`| name = ${wiki.title}`);
  lines.push(`| developer = ${wiki.infobox.founder}`);
  lines.push(`| released = ${wiki.infobox.launchYear}`);
  lines.push(`| genre = ${wiki.infobox.protocolType}`);
  lines.push(`| license = Open`);
  lines.push(`}}`);
  lines.push('');
  lines.push(wiki.intro);
  lines.push('');
  for (const s of wiki.sections) {
    lines.push(`== ${s.title} ==`);
    for (const p of s.paragraphs) lines.push(p);
    lines.push('');
  }
  if (wiki.references.length) {
    lines.push('== References ==');
    wiki.references.forEach((r) => lines.push(`* ${r}`));
  }
  return lines.join('\n');
}

export function buildNotionMarkdownFromDocs(docs: DocsContent): string {
  const sections = [
    docs.productOverview,
    docs.developerApi,
    docs.governanceGuide,
    docs.tokenomics,
    docs.team,
    docs.publicRoadmap,
  ];
  const lines: string[] = [];
  lines.push('# Zion OS — Internal Documentation');
  lines.push('');
  for (const s of sections) {
    lines.push(`## ${s.title}`);
    for (const p of s.paragraphs) lines.push(p);
    lines.push('');
  }
  return lines.join('\n');
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
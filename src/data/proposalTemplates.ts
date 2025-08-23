export interface ProposalTemplate {
  id: string;
  title: string;
  proposal_type: 'FEATURE' | 'BUDGET' | 'COMMUNITY_GRANT' | 'GENERAL';
  category: 'Governance' | 'Feature Proposals' | 'Treasury' | 'Protocol Upgrades';
  summary: string;
  motivation: string;
  specification: string;
  codeModule: string;
  votingOptions: string[];
  fundingNeeded?: string;
}

export const PROPOSAL_TEMPLATES: ProposalTemplate[] = [
  {
    id: 'ZGP-01',
    title: 'Amend Constitution',
    proposal_type: 'GENERAL',
    category: 'Governance',
    summary: 'Propose changes to the ZionDAO constitution.',
    motivation: 'Update core rules to reflect current ecosystem needs.',
    specification: 'Outline specific sections to modify and expected impact.',
    codeModule: 'dao/constitution.md',
    votingOptions: ['YES', 'NO', 'ABSTAIN']
  },
  {
    id: 'ZGP-02',
    title: 'Adjust Tokenomics',
    proposal_type: 'BUDGET',
    category: 'Governance',
    summary: 'Modify supply or distribution parameters of ZION$.',
    motivation: 'Maintain healthy economics and incentives.',
    specification: 'Detail token supply changes, vesting or burn mechanics.',
    codeModule: 'contracts/tokenomics.sol',
    votingOptions: ['FOR', 'AGAINST', 'ABSTAIN']
  },
  {
    id: 'ZGP-03',
    title: 'Update Voting Rules',
    proposal_type: 'GENERAL',
    category: 'Governance',
    summary: 'Change quorum, thresholds or voter eligibility.',
    motivation: 'Improve governance participation and fairness.',
    specification: 'Describe new voting parameters and enforcement.',
    codeModule: 'dao/voting.ts',
    votingOptions: ['APPROVE', 'REJECT', 'ABSTAIN']
  },
  {
    id: 'ZGP-04',
    title: 'Launch New Vertical',
    proposal_type: 'FEATURE',
    category: 'Feature Proposals',
    summary: 'Introduce a new product or market vertical.',
    motivation: 'Expand Zion ecosystem offerings.',
    specification: 'List deliverables and rollout timeline.',
    codeModule: 'apps/new-vertical/',
    votingOptions: ['YES', 'NO', 'ABSTAIN'],
    fundingNeeded: 'Specify budget if required.'
  },
  {
    id: 'ZGP-05',
    title: 'Deploy New Multiverse',
    proposal_type: 'FEATURE',
    category: 'Feature Proposals',
    summary: 'Spin up an additional multiverse instance.',
    motivation: 'Scale to new regions or communities.',
    specification: 'Describe infrastructure changes and config.',
    codeModule: 'infra/multiverse/',
    votingOptions: ['YES', 'NO', 'ABSTAIN']
  },
  {
    id: 'ZGP-06',
    title: 'Integrate New Payment Method',
    proposal_type: 'FEATURE',
    category: 'Feature Proposals',
    summary: 'Add support for an additional payment gateway.',
    motivation: 'Increase payment flexibility for users.',
    specification: 'Detail API integration steps and security checks.',
    codeModule: 'server/payments/',
    votingOptions: ['FOR', 'AGAINST', 'ABSTAIN']
  },
  {
    id: 'ZGP-07',
    title: 'Grant Proposal',
    proposal_type: 'COMMUNITY_GRANT',
    category: 'Treasury',
    summary: 'Request funding for a community initiative.',
    motivation: 'Support ecosystem growth and engagement.',
    specification: 'Explain milestones and success metrics.',
    codeModule: 'treasury/grants/',
    votingOptions: ['YES', 'NO', 'ABSTAIN'],
    fundingNeeded: 'Specify grant amount and token.'
  },
  {
    id: 'ZGP-08',
    title: 'Ecosystem Fund Disbursement',
    proposal_type: 'BUDGET',
    category: 'Treasury',
    summary: 'Allocate funds from the ecosystem treasury.',
    motivation: 'Finance strategic initiatives or partnerships.',
    specification: 'Detail recipients and distribution schedule.',
    codeModule: 'treasury/fund.ts',
    votingOptions: ['APPROVE', 'REJECT', 'ABSTAIN'],
    fundingNeeded: 'Outline total disbursement amount.'
  },
  {
    id: 'ZGP-09',
    title: 'Partnership Request',
    proposal_type: 'GENERAL',
    category: 'Treasury',
    summary: 'Seek DAO approval for a strategic partnership.',
    motivation: 'Leverage external resources or reach new users.',
    specification: 'Describe partnership terms and obligations.',
    codeModule: 'partnerships/',
    votingOptions: ['YES', 'NO', 'ABSTAIN']
  },
  {
    id: 'ZGP-10',
    title: 'ZionGPT Model Fork',
    proposal_type: 'FEATURE',
    category: 'Protocol Upgrades',
    summary: 'Create a specialized fork of the ZionGPT model.',
    motivation: 'Tailor capabilities for new domains.',
    specification: 'Provide training data requirements and hosting.',
    codeModule: 'ml/zion-gpt/',
    votingOptions: ['FOR', 'AGAINST', 'ABSTAIN']
  },
  {
    id: 'ZGP-11',
    title: 'Enable Cross-Chain Talent Sync',
    proposal_type: 'FEATURE',
    category: 'Protocol Upgrades',
    summary: 'Allow talent profiles to sync across chains.',
    motivation: 'Improve portability and visibility for users.',
    specification: 'Outline bridge contracts and data schema.',
    codeModule: 'contracts/cross-chain/',
    votingOptions: ['APPROVE', 'REJECT', 'ABSTAIN']
  },
  {
    id: 'ZGP-12',
    title: 'Upgrade Governance Engine',
    proposal_type: 'GENERAL',
    category: 'Protocol Upgrades',
    summary: 'Migrate to a new on-chain governance framework.',
    motivation: 'Increase security and modularity.',
    specification: 'Explain migration steps and backward compatibility.',
    codeModule: 'dao/governance-engine/',
    votingOptions: ['YES', 'NO', 'ABSTAIN']
  }
];

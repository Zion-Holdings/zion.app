export interface Investor {
  id: string;
  name: string;
  website: string;
  location: string;
  industries: string[];
  stages: string[];
  notableInvestments: string[];
}

export interface InvestorMatch {
  investor: Investor;
  score: number;
  reason: string;
}

const investors: Investor[] = [
  {
    id: 'inv1',
    name: 'A16Z Crypto',
    website: 'https://a16zcrypto.com',
    location: 'Global',
    industries: ['AI', 'Marketplace', 'Web3'],
    stages: ['Pre-seed', 'Seed', 'Series A', 'Token Sale'],
    notableInvestments: ['OpenAI', 'Dapper Labs']
  },
  {
    id: 'inv2',
    name: 'Sequoia Capital',
    website: 'https://www.sequoiacap.com',
    location: 'Global',
    industries: ['AI', 'Marketplace'],
    stages: ['Seed', 'Series A'],
    notableInvestments: ['Dropbox', 'Stripe']
  },
  {
    id: 'inv3',
    name: 'Initialized Capital',
    website: 'https://initialized.com',
    location: 'USA',
    industries: ['Marketplace', 'AI'],
    stages: ['Pre-seed', 'Seed'],
    notableInvestments: ['Coinbase', 'Instacart']
  },
  {
    id: 'inv4',
    name: 'Local Angels Network',
    website: 'https://angels.example.com',
    location: 'USA',
    industries: ['AI'],
    stages: ['Pre-seed', 'Seed'],
    notableInvestments: ['Example Startup']
  },
  {
    id: 'inv5',
    name: 'Web3 Growth Fund',
    website: 'https://web3fund.example.com',
    location: 'Global',
    industries: ['Web3', 'Marketplace'],
    stages: ['Seed', 'Token Sale'],
    notableInvestments: ['Uniswap']
  }
];

export async function getInvestorMatches(
  industry: string,
  location: string,
  stage: string,
  limit = 5
): Promise<InvestorMatch[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const filtered = investors.filter(inv => {
    const industryMatch = !industry || inv.industries.some(i =>
      i.toLowerCase().includes(industry.toLowerCase())
    );
    const locationMatch = !location ||
      inv.location.toLowerCase().includes(location.toLowerCase()) ||
      inv.location === 'Global';
    const stageMatch = !stage ||
      inv.stages.map(s => s.toLowerCase()).includes(stage.toLowerCase());
    return industryMatch && locationMatch && stageMatch;
  });

  return filtered.slice(0, limit).map(inv => ({
    investor: inv,
    score: Math.floor(Math.random() * 40) + 60,
    reason: `Invests in ${inv.industries.join(', ')} at ${inv.stages.join(', ')} stages`
  }));
}

export function generatePitchEmail(startup: string, investorName: string, summary: string): string {
  return `Hi ${investorName},\n\n${startup} here. ${summary}\n\nI believe our vision aligns with your investment focus. Looking forward to the opportunity to connect.\n\nBest regards,\n${startup} Team`;
}

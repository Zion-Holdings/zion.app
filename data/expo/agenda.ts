import type { AgendaItem } from '../../components/expo/AgendaTimeline';

export const agendaItems: AgendaItem[] = [
  { id: 'k1', time: '09:00', track: 'Global', title: 'Founder Keynote: The Zion Multiverse' , speaker: 'Zion Founder', replay: { provider: 'youtube', idOrCid: 'M7lc1UVf-VE' }},
  { id: 'd1', time: '10:00', track: 'DAO', title: 'DAO Governance: Nations as Networks', speaker: 'DAO Council' },
  { id: 'a1', time: '11:00', track: 'AI', title: 'AI Protocol Upgrades: Autonomous Cities' , speaker: 'Chief Scientist', replay: { provider: 'ipfs', idOrCid: 'bafybeigdyrzt...example' }},
  { id: 't1', time: '12:00', track: 'Talent', title: 'Global Talent Graph: Onchain Credentials', speaker: 'Head of Talent' }
];
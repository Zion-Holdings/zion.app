import type { NextApiRequest, NextApiResponse } from 'next';
import { readProposals, getProposalTally, computeProposalStatus, upsertProposal } from '../../../../utils/governanceStorage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  const proposals = readProposals();
  const proposal = proposals.find(p => p.id === id);
  if (!proposal) return res.status(404).json({ error: 'Not found' });

  const { tally, votes } = getProposalTally(id);
  const status = computeProposalStatus(proposal, votes);
  if (status !== proposal.status) {
    proposal.status = status;
    upsertProposal(proposal);
  }

  return res.status(200).json({ proposal, tally, votes });
}
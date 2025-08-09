import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
import { getProposalById } from '@/utils/zgp-storage';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query as { id: string };
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }
    if (!id) {
      res.status(400).json({ error: 'Missing id' });
      return;
    }
    const proposal = getProposalById(id);
    if (!proposal) {
      res.status(404).json({ error: 'Not Found' });
      return;
    }

    const latest = proposal.versions[proposal.latestVersion - 1];

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${proposal.proposalNumber}.pdf"`);

    const doc = new PDFDocument({ margin: 50 });
    doc.pipe(res);

    doc.fontSize(18).text(`${proposal.proposalNumber} — ${proposal.title}`, { underline: true });
    doc.moveDown();
    doc.fontSize(12).text(`Template: ${proposal.templateCode}`);
    doc.text(`Status: ${proposal.status}`);
    doc.text(`Created: ${proposal.versions[0].createdAt}`);
    doc.text(`Latest Version: v${proposal.latestVersion} @ ${latest.createdAt}`);
    if (proposal.votingResultUrl) doc.text(`Voting Result: ${proposal.votingResultUrl}`);

    doc.moveDown();
    doc.fontSize(14).text('Summary');
    doc.fontSize(12).text(latest.summary || '');

    doc.moveDown();
    doc.fontSize(14).text('Motivation');
    doc.fontSize(12).text(latest.motivation || '');

    doc.moveDown();
    doc.fontSize(14).text('Specification / Impact');
    doc.fontSize(12).text(latest.specificationImpact || '');

    doc.moveDown();
    doc.fontSize(14).text('Code/Module to be Affected');
    doc.fontSize(12).text(latest.codeModuleAffected || '');

    doc.moveDown();
    doc.fontSize(14).text('Voting Options');
    doc.fontSize(12).text((latest.votingOptions || []).join(', '));

    doc.moveDown();
    doc.fontSize(14).text('Funding Needed');
    const funding = latest.fundingNeeded;
    if (funding && typeof funding === 'object') {
      doc.fontSize(12).text(`${funding.amount} ${funding.currency}`);
    } else {
      doc.fontSize(12).text('None');
    }

    doc.end();
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
}
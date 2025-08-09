import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';

function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage();
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480,
    align: 'left',
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="zion-protocol-${edition}.pdf"`);

  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';

  doc.pipe(res);

  // Cover page
  doc.addPage();
  doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
  sections.forEach((s) => writeSection(doc, s.title, s.contentMd));

  // End
  doc.addPage();
  doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');

  doc.end();
}
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = String(req.query.name || 'Learner');
  const course = String(req.query.course || 'course');

  try {
    let PDFDocument: any = null;
    try {
      // @ts-ignore
      PDFDocument = (await import('pdfkit')).default || (await import('pdfkit'));
    } catch {}

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=zion-certificate-${course}.pdf`);

    if (PDFDocument) {
      const doc = new PDFDocument({ size: 'LETTER' });
      doc.pipe(res as any);

      doc.rect(30, 30, 552, 732).stroke('#1f2937');
      doc.fontSize(24).text('Zion Academy', { align: 'center', underline: true });
      doc.moveDown();
      doc.fontSize(18).text('Certificate of Completion', { align: 'center' });
      doc.moveDown();
      doc.fontSize(14).text(`This certifies that`, { align: 'center' });
      doc.moveDown(0.5);
      doc.fontSize(24).text(name, { align: 'center', bold: true });
      doc.moveDown(0.5);
      doc.fontSize(14).text(`has successfully completed`, { align: 'center' });
      doc.moveDown(0.5);
      doc.fontSize(18).text(course.replace(/-/g, ' '), { align: 'center' });
      doc.moveDown();
      doc.fontSize(10).fillColor('#6b7280').text('Add to your Zion profile to boost visibility in the talent directory.', { align: 'center' });

      doc.end();
      return;
    }

    // Minimal fallback PDF (very basic)
    const text = `Zion Academy Certificate\n\nRecipient: ${name}\nCourse: ${course}`;
    const content = `%PDF-1.3\n1 0 obj<<>>endobj\n2 0 obj<</Length 44>>stream\nBT /F1 24 Tf 72 720 Td (${escapePdf(text)}) Tj ET\nendstream endobj\n3 0 obj<</Type /Catalog /Pages 4 0 R>>endobj\n4 0 obj<</Type /Pages /Count 1 /Kids [5 0 R]>>endobj\n5 0 obj<</Type /Page /Parent 4 0 R /MediaBox [0 0 612 792] /Contents 2 0 R>>endobj\nxref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000051 00000 n \n0000000170 00000 n \n0000000216 00000 n \n0000000265 00000 n \ntrailer<</Root 3 0 R /Size 6>>\nstartxref\n318\n%%EOF`;

    res.send(Buffer.from(content, 'utf-8'));
  } catch (e) {
    res.status(500).json({ error: 'Failed to generate certificate' });
  }
}

function escapePdf(text: string) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}
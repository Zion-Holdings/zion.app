import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="one-pager.pdf"');
  const pdfPlaceholder = Buffer.from('%PDF-1.4\n1 0 obj\n

export default function One-pager.pdfPage() {
  return (
    <<>>\nendobj\ntrailer\n<<>>\n%%EOF');
  res.status(200).send(pdfPlaceholder);
}
  );
}
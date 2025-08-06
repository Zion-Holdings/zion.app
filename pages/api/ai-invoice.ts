import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      invoiceNumber,
      issueDate,
      dueDate,
      clientName,
      items,
      totalAmount
    } = req.body;

    // Simulate invoice processing
    const processedInvoice = {
      id: `INV-${Date.now()}`,
      invoiceNumber,
      issueDate,
      dueDate,
      clientName,
      items,
      totalAmount,
      status: 'processed',
      processedAt: new Date().toISOString()
    };

    return res.status(200).json({
      success: true,
      data: processedInvoice
    });
  } catch (error) {
    console.error('AI Invoice API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
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

    const invoiceData = {
      invoice: {
        id: 'inv-001',
        invoiceNumber: invoiceNumber || 'INV-2024-001',
        issueDate: issueDate || '2024-01-15',
        dueDate: dueDate || '2024-02-15',
        clientName: clientName || 'Client Corp',
        items: items || [
          {
            id: 1,
            description: 'Software Development Services',
            quantity: 1,
            unitPrice: 5000,
            total: 5000
          },
          {
            id: 2,
            description: 'Consulting Services',
            quantity: 10,
            unitPrice: 150,
            total: 1500
          }
        ],
        subtotal: 6500,
        tax: 650,
        totalAmount: totalAmount || 7150,
        status: 'pending',
        paymentTerms: 'Net 30'
      },
      summary: {
        totalInvoices: 1,
        totalAmount: 7150,
        pendingAmount: 7150,
        overdueAmount: 0
      }
    };

    res.status(200).json(invoiceData);
  } catch (error) {
    console.error('Error processing invoice request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
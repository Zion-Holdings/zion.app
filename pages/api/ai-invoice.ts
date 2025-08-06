import type { NextApiRequest, NextApiResponse } from 'next';

interface Invoice {
  id: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  client: string;
  items: InvoiceItem[];
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, invoiceData } = req.body;

    const invoiceResponse = {
      invoices: [
        {
          id: 'inv-001',
          invoiceNumber: 'INV-2024-001',
          issueDate: '2024-01-15',
          dueDate: '2024-02-15',
          amount: 2500.00,
          status: 'sent',
          client: 'ABC Corporation',
          items: [
            {
              id: 'item-1',
              description: 'Web Development Services',
              quantity: 40,
              unitPrice: 50.00,
              total: 2000.00
            },
            {
              id: 'item-2',
              description: 'Consulting Services',
              quantity: 10,
              unitPrice: 50.00,
              total: 500.00
            }
          ]
        }
      ],
      summary: {
        totalInvoices: 15,
        paidInvoices: 12,
        overdueInvoices: 2,
        totalAmount: 45000.00,
        averagePaymentTime: 28
      }
    };

    return res.status(200).json({
      success: true,
      data: invoiceResponse
    });
  } catch (error) {
    console.error('Error processing invoice request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
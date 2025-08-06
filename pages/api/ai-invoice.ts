import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const {
    invoiceNumber,
    issueDate,
    dueDate,
    clientName,
    clientEmail,
    items,
    totalAmount,
    taxRate,
    notes
  } = req.body;

  // Validate required fields
  if (!invoiceNumber || !clientName || !items || !totalAmount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Calculate tax and total
  const taxAmount = (totalAmount * (taxRate || 0)) / 100;
  const grandTotal = totalAmount + taxAmount;

  // Generate invoice HTML
  const invoiceHtml = `
    <div style="""""font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;""""">
      <div style="""""text-align: center; margin-bottom: 30px;""""">
        <h1 style="""""color: #333; margin-bottom: 10px;""""">INVOICE</h1>
        <p style="""""color: #666; margin: 0;""""">Invoice #${invoiceNumber}</p>
      </div>
      
      <div style="""""display: flex; justify-content: space-between; margin-bottom: 30px;""""">
        <div>
          <h3 style="""""color: #333; margin-bottom: 10px;""""">Bill To:</h3>
          <p style="""""margin: 5px 0;""""">${clientName}</p>
          ${clientEmail ? `<p style="""""margin: 5px 0;""""">${clientEmail}</p>` : ''}
        </div>
        <div style="""""text-align: right;""""">
          <p style="""""margin: 5px 0;"""""><strong>Issue Date:</strong> ${issueDate || new Date().toLocaleDateString()}</p>
          <p style="""""margin: 5px 0;"""""><strong>Due Date:</strong> ${dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
        </div>
      </div>
      
      <table style="""""width: 100%; border-collapse: collapse; margin-bottom: 20px;""""">
        <thead>
          <tr style="""""background-color: #f8f9fa;""""">
            <th style="""""border: 1px solid #ddd; padding: 12px; text-align: left;""""">Item</th>
            <th style="""""border: 1px solid #ddd; padding: 12px; text-align: right;""""">Quantity</th>
            <th style="""""border: 1px solid #ddd; padding: 12px; text-align: right;""""">Rate</th>
            <th style="""""border: 1px solid #ddd; padding: 12px; text-align: right;""""">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item: any) => `
            <tr>
              <td style="""""border: 1px solid #ddd; padding: 12px;""""">${item.description}</td>
              <td style="""""border: 1px solid #ddd; padding: 12px; text-align: right;""""">${item.quantity}</td>
              <td style="""""border: 1px solid #ddd; padding: 12px; text-align: right;""""">$${item.rate?.toFixed(2) || '0.00'}</td>
              <td style="""""border: 1px solid #ddd; padding: 12px; text-align: right;""""">$${((item.quantity || 1) * (item.rate || 0)).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <div style="""""text-align: right;""""">
        <p style="""""margin: 5px 0;"""""><strong>Subtotal:</strong> $${totalAmount.toFixed(2)}</p>
        <p style="""""margin: 5px 0;"""""><strong>Tax (${taxRate || 0}%):</strong> $${taxAmount.toFixed(2)}</p>
        <p style="""""margin: 5px 0; font-size: 18px;"""""><strong>Total:</strong> $${grandTotal.toFixed(2)}</p>
      </div>
      
      ${notes ? `
        <div style="""""margin-top: 30px;""""">
          <h3 style="""""color: #333; margin-bottom: 10px;""""">Notes:</h3>
          <p style="""""color: #666;""""">${notes}</p>
        </div>
      ` : ''}
    </div>
  `

  return res.status(200).json({
    success: true,
    invoiceHtml,
    invoiceData: {
      invoiceNumber,
      issueDate: issueDate || new Date().toLocaleDateString(),
      dueDate: dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      clientName,
      clientEmail,
      items,
      totalAmount,
      taxRate: taxRate || 0,
      taxAmount,
      grandTotal,
      notes
    }
  });
}
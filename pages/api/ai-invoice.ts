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
    clientAddress,
    companyName,
    companyEmail,
    companyAddress,
    items,
    subtotal,
    taxRate,
    taxAmount,
    total,
    notes,
    paymentTerms
  } = req.body;

  // Mock AI generation (replace with real AI integration as needed
  const invoice = `
    <div style="font-family: 'Arial', sans-serif; max-width: 800px; margin: auto; padding: 20px; background: white; color: #333;">
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #e0e0e0; padding-bottom: 20px;>
        </div><div>
          <h1 style="color: #2c3e50; margin: 0; font-size: 28px;>INVOICE</h1>
          <p style="color: #7f8c8d; margin: 5px 0; font-size: 14px;>Invoice #: ${invoiceNumber}</p>
          <p style="color: #7f8c8d; margin: 5px 0; font-size: 14px;>Issue Date: ${issueDate}</p>
          <p style="color: #7f8c8d; margin: 5px 0; font-size: 14px;>Due Date: ${dueDate}</p>
        </div>
        <div style="text-align: right;">
          <h2 style="color: #2c3e50; margin: 0; font-size: 20px;>${companyName}</h2>
          <p style="color: #7f8c8d; margin: 5px 0; font-size: 14px;>${companyEmail}</p>
          <p style="color: #7f8c8d; margin: 5px 0; font-size: 14px; white-space: pre-line;>${companyAddress}</p>
        </div>
      </div>

      <!-- Bill To -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #2c3e50; margin: 0 0 10px 0; font-size: 16px;>Bill To:</h3>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
          <p style="margin: 0; font-weight: bold; color: #2c3e50;>${clientName}</p>
          <p style="margin: 5px 0; color: #7f8c8d;>${clientEmail}</p>
          <p style="margin: 5px 0; color: #7f8c8d; white-space: pre-line;>${clientAddress}</p>
        </div>
      </div>

      <!-- Items Table -->
      <div style="margin-bottom: 30px;">
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #e0e0e0;">
          <thead>
            <tr style="background: #f8f9fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0; color: #2c3e50;>Description</th>
              <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e0e0e0; color: #2c3e50;>Quantity</th>
              <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e0e0e0; color: #2c3e50;>Unit Price</th>
              <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e0e0e0; color: #2c3e50;>Amount</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((item: any) => `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #2c3e50;>${item.description}</td>
                <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e0e0e0; color: #2c3e50;>${item.quantity}</td>
                <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e0e0e0; color: #2c3e50;>$${item.unitPrice.toFixed(2)}</td>
                <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e0e0e0; color: #2c3e50;>$${item.amount.toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Totals -->
      <div style="margin-bottom: 30px;>
        </div><div style="display: flex; justify-content: flex-end;">
          <div style="width: 300px;>
            </div><div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #7f8c8d;>Subtotal:</span>
              <span style="color: #2c3e50; font-weight: bold;>$${subtotal.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #7f8c8d;>Tax (${taxRate}%):</span>
              <span style="color: #2c3e50; font-weight: bold;>$${taxAmount.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 10px; border-top: 2px solid #e0e0e0; font-size: 18px; font-weight: bold;">
              <span style="color: #2c3e50;>Total:</span>
              <span style="color: #2c3e50;>$${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Terms -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #2c3e50; margin: 0 0 10px 0; font-size: 16px;>Payment Terms:</h3>
        <p style="color: #7f8c8d; margin: 0;>${paymentTerms}</p>
      </div>

      <!-- Notes -->
      ${notes ? `
        <div style="margin-bottom: 30px;">
          <h3 style="color: #2c3e50; margin: 0 0 10px 0; font-size: 16px;>Notes:</h3>
          <p style="color: #7f8c8d; margin: 0; white-space: pre-line;>${notes}</p>
        </div>
      ` : ''}

      <!-- Footer -->
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #7f8c8d; font-size: 12px;">
        <p style="margin: 0;>Thank you for your business!</p>
        <p style="margin: 5px 0;>Generated by Zion Marketplace AI Invoice Generator</p>
      </div>
    </div>
  `;

  res.status(200).json({ invoice });
} )
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    contractType,
    party1Name,
    party1Email,
    party2Name,
    party2Email,
    projectTitle,
    projectDescription,
    startDate,
    endDate,
    paymentAmount,
    paymentTerms,
    deliverables,
    terms,
    specialConditions
  } = req.body;

  // Mock AI generation (replace with real AI integration as needed
  const contract = `
    <div style="font-family: 'Times New Roman', serif; max-width: 800px; margin: auto; padding: 20px; line-height: 1.6;>
      </div><div style="text-align: center; margin-bottom: 30px;">
        <h1 style="font-size: 24px; margin-bottom: 10px; color: #333;>${contractType}</h1>
        <p style="font-size: 14px; color: #666;>Generated on ${new Date().toLocaleDateString()}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;>1. PARTIES</h2>
        <p><strong>Party 1:</strong> ${party1Name} (${party1Email})</p>
        <p><strong>Party 2:</strong> ${party2Name} (${party2Email})</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;>2. PROJECT DETAILS</h2>
        <p><strong>Project Title:</strong> ${projectTitle}</p>
        <p><strong>Project Description:</strong> ${projectDescription}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;>3. TERM</h2>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>End Date:</strong> ${endDate}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;>4. PAYMENT TERMS</h2>
        <p><strong>Payment Amount:</strong> ${paymentAmount}</p>
        <p><strong>Payment Terms:</strong> ${paymentTerms}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;>5. DELIVERABLES</h2>
        <p>${deliverables}</p>
      </div>

      ${terms ? `
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;>6. TERMS AND CONDITIONS</h2>
        <p>${terms}</p>
      </div>
      ` : ''}

      ${specialConditions ? `
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;>7. SPECIAL CONDITIONS</h2>
        <p>${specialConditions}</p>
      </div>
      ` : ''}

      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;>8. SIGNATURES</h2>
        <div style="display: flex; justify-content: space-between; margin-top: 40px;>
          </div><div style="text-align: center; width: 45%;">
            <div style="border-bottom: 1px solid #333; height: 40px; margin-bottom: 10px;></div>
            <p style="font-size: 14px; color: #666;>${party1Name}</p>
            <p style="font-size: 12px; color: #999;>Date: ________________</p>
          </div>
          <div style="text-align: center; width: 45%;>
            </div><div style="border-bottom: 1px solid #333; height: 40px; margin-bottom: 10px;></div>
            <p style="font-size: 14px; color: #666;>${party2Name}</p>
            <p style="font-size: 12px; color: #999;>Date: ________________</p>
          </div>
        </div>
      </div>

      <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666;>
        <p><strong>Disclaimer:</strong> This contract was generated using AI assistance. It is recommended to have this document reviewed by a legal professional before execution.</p>
      </div>
    </div>
  `;

  res.status(200).json({ contract });
} )
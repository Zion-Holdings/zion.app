import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

interface GenerateRequestBody {
  projectTitle?: string;
  clientName?: string;
  talentName?: string;
  deliverables?: string;
  milestones?: Array<{ description: string; amount: string }> | string;
  paymentStructure?: string;
  walletAddress?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    projectTitle = 'Project',
    clientName = 'Client',
    talentName = 'Talent',
    deliverables = '',
    milestones = [],
    paymentStructure = '',
    walletAddress = ''
  } = (req.body || {}) as GenerateRequestBody;

  const operatorPrompt = `Generate a professional, legally safe service contract for a freelance project between a client and a developer. Include deliverables, payment terms, IP transfer, confidentiality, termination, limitation of liability, dispute resolution, and governing law/jurisdiction. Use clear markdown headings and numbered clauses. Include signature lines for both parties and an optional on-chain wallet reference if provided.`;

  const inputSummary = `
Context:
- Project Title: ${projectTitle}
- Client: ${clientName}
- Talent: ${talentName}
- Deliverables: ${typeof deliverables === 'string' ? deliverables : JSON.stringify(deliverables)}
- Milestones: ${Array.isArray(milestones) ? milestones.map((m) => `${m.description} - ${m.amount}`).join('; ') : milestones}
- Payment Structure: ${paymentStructure}
- Wallet (optional): ${walletAddress || 'N/A'}

Please output in markdown. Start with the title and a short overview, then sections for Scope, Deliverables, Milestones & Payments, Change Requests, IP, Confidentiality, Warranties, Termination, Dispute Resolution, Jurisdiction, and Signatures.`;

  const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  try {
    if (!apiKey) {
      const fallback = `# ${projectTitle} — Services Agreement\n\n**Between** ${clientName} (\"Client\") and ${talentName} (\"Talent\").\n\n## Scope & Deliverables\n${deliverables || 'Describe deliverables here.'}\n\n## Milestones & Payments\n${Array.isArray(milestones) ? milestones.map((m, i) => `${i + 1}. ${m.description}: ${m.amount}`).join('\n') : milestones || 'Define milestones and amounts.'}\n\n${paymentStructure ? `### Payment Structure\n${paymentStructure}\n` : ''}**On-chain Wallet (optional):** ${walletAddress || 'N/A'}\n\n## IP & Ownership\nUpon full payment, Talent assigns to Client all IP rights in the deliverables, excluding pre-existing tools.\n\n## Confidentiality\nEach party will protect the other’s confidential information.\n\n## Termination\nEither party may terminate for material breach if not cured within 10 days of notice. Fees for accepted work remain due.\n\n## Limitation of Liability\nNo party is liable for indirect or consequential damages. Aggregate liability limited to fees paid.\n\n## Dispute Resolution & Jurisdiction\nDisputes will be resolved in good faith negotiations. Governing law: specify jurisdiction.\n\n## Signatures\nClient: ____________________\n\nTalent: ____________________\n\nDate: ____________________`;
      return res.status(200).json({ markdown: fallback, model: 'fallback' });
    }

    const client = new OpenAI({ apiKey });

    // Prefer Responses API for modern SDKs
    const response = await client.responses.create({
      model: 'gpt-4o-mini',
      input: [
        { role: 'system', content: operatorPrompt },
        { role: 'user', content: inputSummary }
      ] as any
    });

    const text = (response as any).output_text || '';

    if (!text) {
      throw new Error('Empty response');
    }

    return res.status(200).json({ markdown: text, model: response.model || 'gpt-4o-mini' });
  } catch (error: any) {
    console.error('Contract generation error', error);
    return res.status(200).json({
      markdown: `# ${projectTitle} — Services Agreement\n\n(Automatic fallback)\n\n**Between** ${clientName} and ${talentName}.\n\n- Deliverables: ${typeof deliverables === 'string' ? deliverables : JSON.stringify(deliverables)}\n- Milestones: ${Array.isArray(milestones) ? milestones.map((m) => `${m.description}: ${m.amount}`).join('; ') : milestones}\n- Payment: ${paymentStructure}\n- Wallet: ${walletAddress || 'N/A'}\n\nTerms: IP transfer upon payment; confidentiality; termination for breach; limitation of liability; dispute resolution; governing law.\n\nSignatures: ____________________`,
      model: 'fallback:error'
    });
  }
}
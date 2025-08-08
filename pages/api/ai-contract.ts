import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export type PaymentTerms =
  | {
      type: 'hourly';
      currency?: string;
      hourlyRate: number;
      weeklyHourCap?: number;
      paymentSchedule?: string; // e.g., weekly, bi-weekly, monthly, on invoice
    }
  | {
      type: 'fixed';
      currency?: string;
      totalAmount: number;
      milestoneSummary?: string; // optional free-text milestone breakdown
      paymentSchedule?: string; // e.g., 50% upfront, 50% on delivery
    };

export type ContractInput = {
  talentName: string;
  projectName: string;
  scopeSummary: string;
  startDate: string; // ISO date
  endDate: string; // ISO date
  payment: PaymentTerms;
  clauses: {
    nda: boolean;
    ipTransfer: boolean;
  };
  governingLaw?: string;
  revisionRounds?: number; // e.g., 2
};

export type ContractResponse = {
  contract: string;
  model: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContractResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing OPENAI_API_KEY' });
  }

  let input: ContractInput;
  try {
    input = req.body as ContractInput;
  } catch (err) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  // Basic validation
  if (!input || !input.talentName || !input.projectName || !input.scopeSummary || !input.startDate || !input.endDate || !input.payment) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const governingLaw = input.governingLaw || 'Delaware, USA';
  const revisionRounds = typeof input.revisionRounds === 'number' ? input.revisionRounds : 2;

  const paymentDescription = (() => {
    if (input.payment.type === 'hourly') {
      const currency = input.payment.currency || 'USD';
      const cap = input.payment.weeklyHourCap ? `, capped at ${input.payment.weeklyHourCap} hours per week` : '';
      const schedule = input.payment.paymentSchedule ? ` Payment schedule: ${input.payment.paymentSchedule}.` : '';
      return `Hourly at ${currency} ${input.payment.hourlyRate}${cap}.${schedule}`;
    }
    if (input.payment.type === 'fixed') {
      const currency = input.payment.currency || 'USD';
      const milestones = input.payment.milestoneSummary ? ` Milestones: ${input.payment.milestoneSummary}.` : '';
      const schedule = input.payment.paymentSchedule ? ` Payment schedule: ${input.payment.paymentSchedule}.` : '';
      return `Fixed fee of ${currency} ${input.payment.totalAmount}.${milestones}${schedule}`;
    }
    return '';
  })();

  const includeNda = input.clauses?.nda === true;
  const includeIp = input.clauses?.ipTransfer === true;

  const client = new OpenAI({ apiKey });
  const model = process.env.ZION_CONTRACTS_MODEL || 'gpt-4o';

  const systemPrompt = `You are an expert technology contracts lawyer. Draft a clear, concise, and professional services agreement between a client and independent contractor (talent). Use precise legal language, avoid unnecessary verbosity, and keep it practical for startups.

Formatting requirements:
- Title the document "Professional Services Agreement".
- Use clear section headings in ALL CAPS.
- Use numbered sections and subsections where appropriate.
- Include signature blocks for Client and Talent.
- Do not include instructions or placeholders in the output.
- Dates should be presented in a clear textual form (e.g., January 3, 2025).
`;

  const userPrompt = `Draft a contract with the following details:

Parties:
- Client: "Client" (company name not provided)
- Talent: ${input.talentName}

Project:
- Project Name: ${input.projectName}
- Scope Summary: ${input.scopeSummary}
- Term: Start ${new Date(input.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}, End ${new Date(input.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}

Payment Terms:
- ${paymentDescription}

Clauses to include:
- NDA (Confidentiality): ${includeNda ? 'Yes' : 'No'}
- IP Transfer (Work Made for Hire / Assignment): ${includeIp ? 'Yes' : 'No'}

Additional preferences:
- Governing Law: ${governingLaw}
- Included revision rounds for deliverables: ${revisionRounds}

Content guidance:
- Always include: SERVICES AND SCOPE, TERM AND TERMINATION, PAYMENT TERMS, TAXES, INDEPENDENT CONTRACTOR STATUS, ACCEPTANCE AND REVISIONS, WARRANTIES AND DISCLAIMERS, LIMITATION OF LIABILITY, INDEMNIFICATION, GOVERNING LAW AND DISPUTE RESOLUTION, NOTICES, MISCELLANEOUS, SIGNATURES.
- Only include Confidentiality/NDA and IP Assignment if requested above.
- Where appropriate, include practical, startup-friendly specifics (e.g., net payment terms, invoicing, late fees, reasonable use of names/logos in portfolio with consent).
- Keep it under 2,000 words.
`;

  try {
    const completion = await client.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.4,
      max_tokens: 2200,
    });

    const contract = completion.choices?.[0]?.message?.content?.trim() || '';
    if (!contract) {
      return res.status(502).json({ error: 'Empty response from model' });
    }

    return res.status(200).json({ contract, model });
  } catch (error: any) {
    const message = error?.message || 'OpenAI request failed';
    return res.status(500).json({ error: message });
  }
}
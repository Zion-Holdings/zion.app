import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Types for request payload
interface QuoteRequestPayload {
  talentId?: string;
  talentName?: string;
  requesterName: string;
  requesterEmail: string;
  projectOverview: string;
  timeline?: string;
  budgetRange?: string | number | { min?: number; max?: number; currency?: string };
}

interface NormalizedBudget {
  display: string; // e.g., "$1,000 - $2,000" or "$5,000+"
  currency: string; // e.g., "USD"
  min?: number; // cents or dollars? We store dollars as integer for simplicity
  max?: number;
}

interface AiAnalysisResult {
  summary?: string;
  projectType?: string;
}

function getEnv(name: string, options: { optional?: boolean } = {}): string | undefined {
  const value = process.env[name];
  if (!value && !options.optional) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function isValidEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function detectCurrencySymbol(input: string): { currency: string; symbol: string } {
  if (input.includes('€')) return { currency: 'EUR', symbol: '€' };
  if (input.includes('£')) return { currency: 'GBP', symbol: '£' };
  if (input.includes('₹')) return { currency: 'INR', symbol: '₹' };
  if (input.includes('¥')) return { currency: 'JPY', symbol: '¥' };
  return { currency: 'USD', symbol: '$' };
}

function parseHumanNumber(token: string): number | undefined {
  // Convert strings like "1k", "2.5K", "3m" to a number in dollars
  const trimmed = token.trim().toLowerCase().replace(/[,\s]/g, '');
  const match = trimmed.match(/^(\d+(?:\.\d+)?)([kmb])?$/);
  if (!match) {
    const asInt = parseInt(trimmed.replace(/[^0-9]/g, ''), 10);
    return Number.isFinite(asInt) ? asInt : undefined;
  }
  const value = parseFloat(match[1]);
  const suffix = match[2];
  const multipliers: Record<string, number> = { k: 1_000, m: 1_000_000, b: 1_000_000_000 };
  return suffix ? value * multipliers[suffix] : value;
}

function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}

function normalizeBudget(raw: QuoteRequestPayload['budgetRange']): NormalizedBudget | undefined {
  if (raw == null) return undefined;

  // Object form
  if (typeof raw === 'object' && !Array.isArray(raw)) {
    const currency = raw.currency || 'USD';
    const min = raw.min;
    const max = raw.max;
    if (min != null && max != null) {
      return {
        currency,
        min,
        max,
        display: `${formatCurrency(min, currency)} - ${formatCurrency(max, currency)}`,
      };
    }
    if (min != null && max == null) {
      return {
        currency,
        min,
        display: `${formatCurrency(min, currency)}+`,
      };
    }
    if (min == null && max != null) {
      return {
        currency,
        max,
        display: `Up to ${formatCurrency(max, currency)}`,
      };
    }
    return undefined;
  }

  // Numeric form
  if (typeof raw === 'number') {
    const currency = 'USD';
    return {
      currency,
      min: raw,
      display: `${formatCurrency(raw, currency)}+`,
    };
  }

  // String form
  if (typeof raw === 'string') {
    const { currency, symbol } = detectCurrencySymbol(raw);

    // Extract potential min/max tokens
    const normalized = raw.replace(/to|–|—|minus|upto|up to|between|and/gi, '-');
    const parts = normalized.split(/-|–|—/).map(p => p.trim()).filter(Boolean);

    if (parts.length === 1) {
      const value = parseHumanNumber(parts[0]);
      if (value != null) {
        return {
          currency,
          min: value,
          display: `${formatCurrency(value, currency)}+`,
        };
      }
      // Fallback: leave as-is
      return { currency, display: `${symbol}${raw.replace(/[^0-9kmb\.,\s]/gi, '').trim()}` };
    }

    if (parts.length >= 2) {
      const min = parseHumanNumber(parts[0]);
      const max = parseHumanNumber(parts[1]);
      if (min != null && max != null) {
        return {
          currency,
          min,
          max,
          display: `${formatCurrency(min, currency)} - ${formatCurrency(max, currency)}`,
        };
      }
      if (min != null && max == null) {
        return { currency, min, display: `${formatCurrency(min, currency)}+` };
      }
      if (min == null && max != null) {
        return { currency, max, display: `Up to ${formatCurrency(max, currency)}` };
      }
    }
  }

  return undefined;
}

async function analyzeWithOpenAI(projectOverview: string): Promise<AiAnalysisResult> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return {};

  try {
    const { default: OpenAI } = await import('openai');
    const openai = new OpenAI({ apiKey });

    const chat = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You summarize software project briefs and classify the project type. Keep summaries to 2-3 sentences. Return JSON {"summary":"...", "projectType":"..."}.',
        },
        { role: 'user', content: `Project Overview:\n${projectOverview}` },
      ],
      temperature: 0.2,
    });
    const content = chat.choices?.[0]?.message?.content || '{}';
    const jsonStartIdx = content.indexOf('{');
    const jsonEndIdx = content.lastIndexOf('}');
    const json = content.slice(jsonStartIdx, jsonEndIdx + 1);
    const parsed = JSON.parse(json);
    return { summary: parsed.summary, projectType: parsed.projectType };
  } catch (error) {
    return {};
  }
}

async function sendSlackNotification(webhookUrl: string, payload: any): Promise<void> {
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

async function maybeSendTalentEmail(params: {
  toEmail: string;
  summary?: string;
  talentName?: string;
  viewUrl?: string;
}): Promise<void> {
  const allow = process.env.TALENT_EMAIL_ALLOW === 'true';
  const resendKey = process.env.RESEND_API_KEY;
  const sender = process.env.TALENT_EMAIL_SENDER || 'no-reply@zion.ai';
  if (!allow || !resendKey) return;

  const subject = 'New Hire Request on Zion';
  const html = `<p>You have a new hire request${params.talentName ? ` for <b>${params.talentName}</b>` : ''}.</p><p>${params.summary || ''}</p>${params.viewUrl ? `<p><a href="${params.viewUrl}">View request</a></p>` : ''}`;

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({ from: sender, to: [params.toEmail], subject, html }),
    });
  } catch {
    // ignore
  }
}

async function insertQuoteRequest(
  supabase: SupabaseClient,
  data: {
    talent_id?: string;
    talent_name?: string;
    requester_name: string;
    requester_email: string;
    summary?: string;
    full_description: string;
    project_type?: string;
    timeline?: string;
    budget_display?: string;
    budget_currency?: string;
    budget_min?: number | null;
    budget_max?: number | null;
    status?: string;
  }
) {
  return await supabase.from('quote_requests').insert([{ ...data }]).select('id, created_at').single();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body: QuoteRequestPayload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // Validation
    const talentId = body.talentId || undefined;
    const talentName = body.talentName || undefined;
    const requesterName = (body.requesterName || '').trim();
    const requesterEmail = (body.requesterEmail || '').trim();
    const projectOverview = (body.projectOverview || '').trim();
    const timeline = (body.timeline || '').trim() || undefined;

    if (!requesterName) return res.status(400).json({ error: 'requesterName is required' });
    if (!requesterEmail || !isValidEmail(requesterEmail)) {
      return res.status(400).json({ error: 'Valid requesterEmail is required' });
    }
    if (!projectOverview) return res.status(400).json({ error: 'projectOverview is required' });

    const normalizedBudget = normalizeBudget(body.budgetRange);

    // AI summary/classification (optional)
    const ai = await analyzeWithOpenAI(projectOverview);

    // Supabase client (service role for server-side writes)
    const supabaseUrl = getEnv('NEXT_PUBLIC_SUPABASE_URL') as string;
    const supabaseServiceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY') as string;
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Insert
    const { data, error } = await insertQuoteRequest(supabase, {
      talent_id: talentId,
      talent_name: talentName,
      requester_name: requesterName,
      requester_email: requesterEmail,
      summary: ai.summary,
      full_description: projectOverview,
      project_type: ai.projectType,
      timeline,
      budget_display: normalizedBudget?.display,
      budget_currency: normalizedBudget?.currency,
      budget_min: normalizedBudget?.min ?? null,
      budget_max: normalizedBudget?.max ?? null,
      status: 'new',
    });

    if (error) {
      return res.status(500).json({ error: 'Failed to save request', details: error.message });
    }

    const requestId = (data as any)?.id;

    // Admin notification via Slack (optional)
    const adminWebhook = process.env.ADMIN_SLACK_WEBHOOK_URL;
    if (adminWebhook) {
      const adminText = [
        `New Hire Request on Zion`,
        talentName ? `Talent: ${talentName}${talentId ? ` (${talentId})` : ''}` : talentId ? `Talent ID: ${talentId}` : undefined,
        `Requester: ${requesterName} <${requesterEmail}>`,
        ai.summary ? `Summary: ${ai.summary}` : undefined,
        normalizedBudget?.display ? `Budget: ${normalizedBudget.display}` : undefined,
        timeline ? `Timeline: ${timeline}` : undefined,
        requestId ? `Request ID: ${requestId}` : undefined,
      ]
        .filter(Boolean)
        .join('\n');

      await sendSlackNotification(adminWebhook, { text: adminText });
    }

    // Talent email notification via Resend (optional)
    const talentEmail = process.env.TALENT_NOTIFICATION_EMAIL; // if a specific inbox receives for talent
    if (talentEmail) {
      await maybeSendTalentEmail({
        toEmail: talentEmail,
        summary: ai.summary,
        talentName,
        viewUrl: process.env.REQUEST_DASHBOARD_URL
          ? `${process.env.REQUEST_DASHBOARD_URL.replace(/\/$/, '')}/requests/${requestId}`
          : undefined,
      });
    }

    return res.status(200).json({
      status: 'ok',
      message: 'Thanks! Your request has been submitted. The talent will be in touch soon.',
      requestId,
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Unexpected error', details: err?.message || String(err) });
  }
}
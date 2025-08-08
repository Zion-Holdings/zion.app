// deno-lint-ignore-file no-explicit-any
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

interface QuoteRequestPayload {
  talentId?: string;
  talentName?: string;
  requesterName: string;
  requesterEmail: string;
  projectOverview: string;
  timeline?: string;
  budgetRange?: string | number | { min?: number; max?: number; currency?: string };
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
  try {
    // @ts-ignore - Deno Intl supports this in most regions
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  } catch {
    return `$${amount.toFixed(0)}`;
  }
}

function normalizeBudget(raw: QuoteRequestPayload['budgetRange']): { display: string; currency: string; min?: number; max?: number } | undefined {
  if (raw == null) return undefined;

  if (typeof raw === 'object' && !Array.isArray(raw)) {
    const currency = raw.currency || 'USD';
    const min = raw.min;
    const max = raw.max;
    if (min != null && max != null) return { currency, min, max, display: `${formatCurrency(min, currency)} - ${formatCurrency(max, currency)}` };
    if (min != null) return { currency, min, display: `${formatCurrency(min, currency)}+` };
    if (max != null) return { currency, max, display: `Up to ${formatCurrency(max, currency)}` };
    return undefined;
  }

  if (typeof raw === 'number') {
    const currency = 'USD';
    return { currency, min: raw, display: `${formatCurrency(raw, currency)}+` };
  }

  if (typeof raw === 'string') {
    const { currency, symbol } = detectCurrencySymbol(raw);
    const normalized = raw.replace(/to|–|—|minus|upto|up to|between|and/gi, '-');
    const parts = normalized.split(/-|–|—/).map(p => p.trim()).filter(Boolean);
    if (parts.length === 1) {
      const value = parseHumanNumber(parts[0]);
      if (value != null) return { currency, min: value, display: `${formatCurrency(value, currency)}+` };
      return { currency, display: `${symbol}${raw.replace(/[^0-9kmb\.,\s]/gi, '').trim()}` };
    }
    if (parts.length >= 2) {
      const min = parseHumanNumber(parts[0]);
      const max = parseHumanNumber(parts[1]);
      if (min != null && max != null) return { currency, min, max, display: `${formatCurrency(min, currency)} - ${formatCurrency(max, currency)}` };
      if (min != null) return { currency, min, display: `${formatCurrency(min, currency)}+` };
      if (max != null) return { currency, max, display: `Up to ${formatCurrency(max, currency)}` };
    }
  }
  return undefined;
}

async function analyzeWithOpenAI(projectOverview: string): Promise<{ summary?: string; projectType?: string }> {
  const apiKey = Deno.env.get('OPENAI_API_KEY');
  const model = Deno.env.get('OPENAI_MODEL') || 'gpt-4o-mini';
  if (!apiKey) return {};

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        input: [
          { role: 'system', content: 'You summarize software project briefs and classify the project type. Keep summaries to 2-3 sentences.' },
          { role: 'user', content: `Project Overview:\n${projectOverview}\n\nReturn JSON with keys summary and projectType.` },
        ],
        text_format: {
          type: 'json_schema',
          json_schema: {
            name: 'QuoteAnalysis',
            schema: {
              type: 'object',
              properties: { summary: { type: 'string' }, projectType: { type: 'string' } },
              required: ['summary', 'projectType'],
              additionalProperties: false,
            },
          },
        },
      }),
    });
    const json = await response.json();
    const outputText: string | undefined = json?.output_text;
    if (outputText) {
      const parsed = JSON.parse(outputText);
      return { summary: parsed.summary, projectType: parsed.projectType };
    }
  } catch (_) {}
  return {};
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });

  try {
    const body = (await req.json()) as QuoteRequestPayload;

    const requesterName = (body.requesterName || '').trim();
    const requesterEmail = (body.requesterEmail || '').trim();
    const projectOverview = (body.projectOverview || '').trim();
    const timeline = (body.timeline || '').trim() || undefined;

    if (!requesterName) return new Response(JSON.stringify({ error: 'requesterName is required' }), { status: 400 });
    if (!requesterEmail || !isValidEmail(requesterEmail)) return new Response(JSON.stringify({ error: 'Valid requesterEmail is required' }), { status: 400 });
    if (!projectOverview) return new Response(JSON.stringify({ error: 'projectOverview is required' }), { status: 400 });

    const budget = normalizeBudget(body.budgetRange);

    // AI summarize/classify (optional)
    const ai = await analyzeWithOpenAI(projectOverview);

    const supabaseUrl = Deno.env.get('SUPABASE_URL') || Deno.env.get('NEXT_PUBLIC_SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !supabaseKey) {
      return new Response(JSON.stringify({ error: 'Supabase configuration missing' }), { status: 500 });
    }
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('quote_requests')
      .insert([
        {
          talent_id: body.talentId,
          talent_name: body.talentName,
          requester_name: requesterName,
          requester_email: requesterEmail,
          summary: ai.summary,
          full_description: projectOverview,
          project_type: ai.projectType,
          timeline,
          budget_display: budget?.display,
          budget_currency: budget?.currency,
          budget_min: budget?.min ?? null,
          budget_max: budget?.max ?? null,
          status: 'new',
        },
      ])
      .select('id, created_at')
      .single();

    if (error) {
      return new Response(JSON.stringify({ error: 'Failed to save request', details: error.message }), { status: 500 });
    }

    const requestId = (data as any)?.id;
    const adminWebhook = Deno.env.get('ADMIN_SLACK_WEBHOOK_URL');
    if (adminWebhook) {
      const adminText = [
        `New Hire Request on Zion`,
        body.talentName ? `Talent: ${body.talentName}${body.talentId ? ` (${body.talentId})` : ''}` : body.talentId ? `Talent ID: ${body.talentId}` : undefined,
        `Requester: ${requesterName} <${requesterEmail}>`,
        ai.summary ? `Summary: ${ai.summary}` : undefined,
        budget?.display ? `Budget: ${budget.display}` : undefined,
        timeline ? `Timeline: ${timeline}` : undefined,
        requestId ? `Request ID: ${requestId}` : undefined,
      ]
        .filter(Boolean)
        .join('\n');

      await fetch(adminWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: adminText }),
      }).catch(() => {});
    }

    return new Response(
      JSON.stringify({ status: 'ok', message: 'Thanks! Your request has been submitted. The talent will be in touch soon.', requestId }),
      { status: 200 },
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Unexpected error', details: err?.message || String(err) }), { status: 500 });
  }
});
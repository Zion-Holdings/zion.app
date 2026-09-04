// app/api/ai-service-router/route.ts
// Proposal generator for AI Service Router
// - Accepts router event envelopes from the client
// - Returns stable, logged proposal objects without influencing client scoring
import type { NextRequest } from 'next/server';

type ActionType = 'route' | 'book' | 'proposal_request' | 'contact';

export interface ServiceRecord {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

export interface ServiceActionEnvelope {
  action: ServiceAction;
}

export interface ServiceAction {
  type: ActionType;
  service?: ServiceRecord;
  query?: string;
  matchedKeywords?: string[];
  score?: number;
  sourceRoute?: string;
}

export interface ProposalRecord {
  id: string;
  created_at: string;
  serviceId?: string;
  serviceTitle?: string;
  serviceHref?: string;
  query: string;
  matchedKeywords: string[];
  score?: number;
  type: ActionType;
  sourceRoute?: string;
  decisionReason?: string;
  proposal: ProposalPayload;
}

export interface ProposalPayload {
  heading: string;
  summary: string;
  nextSteps: string[];
  suggestedContactEmail?: string;
  suggestedContactPhone?: string;
  confidence: 'high' | 'medium' | 'low';
  generatedAt: string;
}

const DEFAULT_CONTACT_EMAIL = 'commercial@ziontechgroup.com';
const DEFAULT_CONTACT_PHONE = '+1 302 464 0950';

function buildHeading(action: ServiceAction): string {
  const { type, service } = action;
  switch (type) {
    case 'proposal_request':
      return 'Proposal request received';
    case 'book':
      return 'Session booking initiated';
    case 'contact':
      return 'Contact request logged';
    case 'route':
    default:
      return service?.title ? `${service.title} matched to request` : 'Service routing complete';
  }
}

function buildConfidence(score: number | undefined, matchedKeywordsLength: number): ProposalPayload['confidence'] {
  if (score && score >= 2 && matchedKeywordsLength >= 2) return 'high';
  if (score && score >= 1 && matchedKeywordsLength >= 1) return 'medium';
  return 'low';
}

function buildServiceSummary(service: ServiceRecord | undefined): string {
  if (!service?.description) {
    return service?.title ? `${service.title} was selected as the best match for your request.` : 'A matching service was identified from the catalog.';
  }
  const trimmed = service.description.trim().replace(/\.$/, '');
  return `${service.title}: ${trimmed}.`;
}

function buildRouteReason(service: ServiceRecord | undefined, matchedKeywords: string[], score: number | undefined): string {
  if (!service) return 'Services were evaluated against your request.';
  const keywordText = matchedKeywords.length ? `, including ${matchedKeywords.join(', ')}` : '';
  if (typeof score === 'number') {
    return `Selected because the match score was highest among evaluated services${keywordText}.`;
  }
  return `Selected based on keyword relevance${keywordText}.`;
}

function buildNextSteps(action: ServiceAction, service: ServiceRecord | undefined): string[] {
  const baseSteps = [
    'Review the matched service details in the router results.',
    'Confirm the fit before moving to a pricing conversation.',
  ];

  const serviceStep = service ? `View ${service.title} on the service page (${service.href}).` : 'Identify the preferred service before contacting sales.';

  switch (action.type) {
    case 'book':
      return ['The session booking will be confirmed by the sales team.', 'Use the contact email if you need to reschedule.'];
    case 'contact':
      return ['A contact request has been logged.', "Expect a response from the assigned specialist within the service's SLA."];
    case 'proposal_request':
    default:
      return [serviceStep, ...baseSteps];
  }
}

function buildProposalPayload(action: ServiceAction, service: ServiceRecord | undefined, query: string, matchedKeywords: string[], score: number | undefined): ProposalPayload {
  return {
    heading: buildHeading(action),
    summary: buildServiceSummary(service) + ' ' + buildRouteReason(service, matchedKeywords, score),
    nextSteps: buildNextSteps(action, service),
    suggestedContactEmail: DEFAULT_CONTACT_EMAIL,
    suggestedContactPhone: DEFAULT_CONTACT_PHONE,
    confidence: buildConfidence(score, matchedKeywords.length),
    generatedAt: new Date().toISOString(),
  };
}

function normalizeService(input: unknown | undefined): ServiceRecord | undefined {
  if (!input) return undefined;
  const source = typeof input === 'string' ? JSON.parse(input) as Partial<ServiceRecord> : (input as Partial<ServiceRecord>);
  if (!source?.id || !source?.title || !source?.href) return undefined;
  return {
    id: String(source.id),
    title: String(source.title),
    description: String(source.description ?? ''),
    category: String(source.category ?? ''),
    href: String(source.href),
      };
}

export async function POST(request: NextRequest): Promise<Response> {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const action: ServiceAction = typeof body === 'object' && body !== null && 'action' in body
    ? (body as ServiceActionEnvelope).action
    : { type: 'route' };

  if (!action || typeof action !== 'object') {
    return new Response(JSON.stringify({ error: 'Invalid action envelope.' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const allowedTypes: ActionType[] = ['route', 'book', 'proposal_request', 'contact'];
  const typeAllowed = allowedTypes.includes(action.type);
  const safeAction: ServiceAction = { ...action, type: typeAllowed ? action.type : 'route' };

  const service = safeAction.service ?? normalizeService((body as Record<string, unknown> | null)?.service);
  const query = typeof safeAction.query === 'string' ? safeAction.query : '';
  const matchedKeywords = Array.isArray(safeAction.matchedKeywords)
    ? safeAction.matchedKeywords.filter((entry): entry is string => typeof entry === 'string')
    : [];
  const sourceRoute = typeof safeAction.sourceRoute === 'string' ? safeAction.sourceRoute : undefined;
  const score = typeof safeAction.score === 'number' && Number.isFinite(safeAction.score)
    ? Math.max(0, Math.floor(safeAction.score))
    : undefined;

  const proposalPayload = buildProposalPayload(safeAction, service, query, matchedKeywords, score);
  const proposal: ProposalRecord = {
    id: `proposal_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    created_at: proposalPayload.generatedAt,
    serviceId: service?.id,
    serviceTitle: service?.title,
    serviceHref: service?.href,
    query,
    matchedKeywords,
    score,
    type: safeAction.type,
    sourceRoute,
    decisionReason: proposalPayload.summary,
    proposal: proposalPayload,
  };

  return new Response(JSON.stringify(proposal), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

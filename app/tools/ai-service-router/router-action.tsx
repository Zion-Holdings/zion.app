'use client';

import { useState } from 'react';

type ActionType = 'route' | 'book' | 'proposal_request' | 'contact';

interface ServiceFragment {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  href?: string;
  popular?: boolean;
  features?: string[];
}

interface ServiceRecord {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  popular?: boolean;
  features: string[];
}

interface Service extends ServiceRecord {
  _score?: number | null;
}

interface ScoredService extends Service {
  _score?: number | null;
}

interface ProposedResult {
  proposal?: {
    heading?: string;
    confidence?: 'high' | 'medium' | 'low';
    nextSteps?: string[];
    generatedAt?: string;
    suggestedContactEmail?: string;
    suggestedContactPhone?: string;
  };
}

function canonicalServiceId(service: ServiceRecord): string {
  const id = typeof service.id === 'string' && service.id.trim() ? service.id.trim() : service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return id;
}

function normalizeService(input: ServiceFragment | null | undefined): ServiceRecord | null {
  if (!input || typeof input !== 'object') return null;
  const source = input;
  const id = canonicalServiceId({ id: source.id ?? '', title: source.title ?? '', description: source.description ?? '', category: source.category ?? '', href: source.href ?? '', features: Array.isArray(source.features) ? source.features : [] } as ServiceRecord);
  if (!source.title || !source.href) return null;
  return {
    id,
    title: source.title,
    description: typeof source.description === 'string' ? source.description : '',
    category: typeof source.category === 'string' ? source.category : '',
    href: source.href,
    popular: typeof source.popular === 'boolean' ? source.popular : undefined,
    features: Array.isArray(source.features) ? source.features : [],
  };
}

function buildActionUrl(actionType: ActionType, service: ServiceRecord | null | undefined, query?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('/api/ai-service-router');
    }, 0);
  });
}

async function postAction(
  actionType: ActionType,
  service?: Service | null,
  queryText?: string,
  score?: number | null,
) {
  const endpoint = '/api/ai-service-router';
  const validService = normalizeService((service ?? null) as ServiceFragment | null);

  const payload = {
    action: {
      type: actionType,
      query: typeof queryText === 'string' && queryText.trim() ? queryText.trim() : undefined,
      matchedKeywords: [],
      sourceRoute: 'ai-service-router',
    },
    service: validService
      ? {
          id: validService.id,
          title: validService.title,
          description: validService.description,
          category: validService.category,
          href: validService.href,
        }
      : null,
    score: typeof score === 'number' && Number.isFinite(score) ? Math.max(0, score) : undefined,
  };

  if (validService?.id) {
    (payload.action as Record<string, unknown>).service = {
      id: validService.id,
      title: validService.title,
      description: validService.description,
      category: validService.category,
      href: validService.href,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    if (!response.ok) {
      const reason = await response.text().catch(() => '').then(str => str.trim());
      console.error(`proposal request failed: ${response.status}`, reason);
      return null;
    }

    const result = await response.json().catch(() => null);
    if (!result || typeof result !== 'object') {
      console.error('proposal response format unexpected');
      return null;
    }

    return result as Record<string, unknown>;
  } catch (error) {
    console.error('proposal request error', error);
    return null;
  }
}

export function ProposeBanner({ result }: { result: ProposedResult }) {
  const proposal = result.proposal;
  if (!proposal?.heading) return null;

  const confidenceLabel =
    proposal.confidence === 'high'
      ? 'High confidence'
      : proposal.confidence === 'medium'
        ? 'Medium confidence'
        : 'Low confidence';

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-5 text-slate-200">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-semibold text-white">{proposal.heading}</h3>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
          {confidenceLabel}
        </span>
      </div>
      {proposal.nextSteps && proposal.nextSteps.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {proposal.nextSteps.map((item, idx) => (
            <li key={`${item}-${idx}`} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-400" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {proposal.suggestedContactEmail || proposal.suggestedContactPhone ? (
        <p className="mt-3 text-xs text-slate-500">
          {proposal.suggestedContactEmail ? <>Proposals: {proposal.suggestedContactEmail}</> : null}
          {proposal.suggestedContactPhone && proposal.suggestedContactEmail ? ' · ' : null}
          {proposal.suggestedContactPhone ? <>Phone: {proposal.suggestedContactPhone}</> : null}
        </p>
      ) : null}
    </div>
  );
}

export function useRouterActions(initialQuery = '') {
  const [state, setState] = useState({
    running: false,
    saved: false,
    error: null as string | null,
    result: null as ProposedResult | null,
  });

  const reset = () =>
    setState({
      running: false,
      saved: false,
      error: null,
      result: null,
    });

  const run = async (
    actionType: ActionType,
    selected?: Service | null,
    queryText?: string,
    matchedKeywords?: string[],
    score?: number,
  ) => {
    setState((previous) => ({ ...previous, running: true, error: null }));

    const result = await postAction(actionType, selected, queryText, score);
    if (!result) {
      setState((previous) => ({
        ...previous,
        running: false,
        error: 'The router could not save this request. Try again or call us directly.',
      }));
      return;
    }

    const next: ProposedResult = {
      proposal: (result.proposal ?? result) as ProposedResult['proposal'],
    };

    setState((previous) => ({
      ...previous,
      running: false,
      saved: true,
      error: null,
      result: next,
    }));
  };

  return {
    state,
    run,
    reset,
  };
}

export function RouterActionFooter({
  query,
  selected,
  keywords,
  run,
  running,
  saved,
  error,
  result,
}: {
  query: string;
  selected?: Service;
  keywords?: string[];
  run: ReturnType<typeof useRouterActions>['run'];
  running: boolean;
  saved: boolean;
  error: string | null;
  result: ProposedResult | null;
}) {
  const hasSelection = typeof selected?.id === 'string' && selected.id.trim().length > 0;

  return (
    <div className="mt-6 space-y-3">
      {error ? <p className="text-center text-sm text-red-400">{error}</p> : null}
      {saved ? (
        <p className="text-center text-sm text-emerald-400">Request captured.</p>
      ) : null}
      {result ? (
        <ProposeBanner result={result} />
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            disabled={running || saved}
            onClick={() => run('book', selected, query, keywords)}
            className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-60"
          >
            {running ? 'Saving…' : 'Book an intro session'}
          </button>
          <button
            type="button"
            disabled={running || saved}
            onClick={() => run('proposal_request', selected, query, keywords)}
            className="rounded-xl bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-600 disabled:opacity-60"
          >
            {running ? 'Generating…' : 'Request proposal'}
          </button>
          <button
            type="button"
            disabled={running || saved || !hasSelection}
            onClick={() => run('contact', selected, query, keywords)}
            className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 disabled:opacity-60"
          >
            Contact specialist
          </button>
        </div>
      )}
    </div>
  );
}

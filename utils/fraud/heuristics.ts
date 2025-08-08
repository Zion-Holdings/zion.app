import { FraudEvent, HeuristicEvaluation, MonitoredSource } from './types';

const suspiciousLinkHosts = [
  'paypal.me',
  'cash.app',
  'venmo.com',
  'wa.me',
  't.me',
  'telegram.me',
  'whatsapp.com',
  'westernunion.com',
  'moneygram.com',
];

const suspiciousPhrases = [
  'whatsapp me',
  'telegram me',
  'contact me on whatsapp',
  'cashapp only',
  'crypto only',
  'send crypto',
  'wire transfer',
  'gift card',
  'western union',
  'off-platform payment',
  'outside payment',
  'pay outside',
  'pay me directly',
  'dm me on',
  'reach me on whatsapp',
  'skype me',
  'email me at',
];

const vagueScammyJobPhrases = [
  'easy work',
  'quick money',
  'no experience needed',
  'work from home and earn fast',
  'daily payouts',
  'earn $\\d+ per day',
];

function containsSuspiciousHost(text: string): boolean {
  const lower = text.toLowerCase();
  return suspiciousLinkHosts.some((host) => lower.includes(host));
}

function containsSuspiciousPhrase(text: string): string[] {
  const lower = text.toLowerCase();
  return suspiciousPhrases.filter((p) => lower.includes(p));
}

function containsVagueJobClaims(text: string): string[] {
  const lower = text.toLowerCase();
  const reasons: string[] = [];
  for (const pattern of vagueScammyJobPhrases) {
    const re = new RegExp(pattern, 'i');
    if (re.test(lower)) reasons.push(`job_vague_claim:"${pattern}"`);
  }
  return reasons;
}

export interface HeuristicDeps {
  countEventsByIp: (ip: string, source: MonitoredSource, withinMinutes: number) => Promise<number>;
}

export async function evaluateHeuristics(event: FraudEvent, deps: HeuristicDeps): Promise<HeuristicEvaluation> {
  const reasons: string[] = [];
  let severity: HeuristicEvaluation['severity'] = 'low';

  if (event.source === 'signup' && event.ipAddress) {
    const recent = await deps.countEventsByIp(event.ipAddress, 'signup', 10);
    if (recent >= 3) {
      reasons.push(`rapid_fire_signups_from_ip:${event.ipAddress}:${recent}in10m`);
      severity = recent >= 10 ? 'high' : 'medium';
    }
  }

  if ((event.source === 'message' || event.source === 'job_post' || event.source === 'quote' || event.source === 'review') && event.content) {
    if (containsSuspiciousHost(event.content)) {
      reasons.push('outside_payment_link_detected');
      severity = 'high';
    }
    const phrases = containsSuspiciousPhrase(event.content);
    if (phrases.length > 0) {
      reasons.push(...phrases.map((p) => `suspicious_phrase:"${p}"`));
      if (severity === 'low') severity = 'medium';
    }
  }

  if (event.source === 'job_post' && event.content) {
    const vague = containsVagueJobClaims(event.content);
    if (vague.length > 0) {
      reasons.push(...vague);
      if (severity === 'low') severity = 'medium';
    }
  }

  return {
    flagged: reasons.length > 0,
    reasons,
    severity,
  };
}
import axios from 'axios';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { WebhookEventType, WebhookListener } from './types';
import { getWebhookListeners, saveWebhookListeners } from './storage';

export function listListeners(userId: string): WebhookListener[] {
  return getWebhookListeners().filter((w) => w.userId === userId);
}

export function createListener(userId: string, url: string, events: WebhookEventType[], secret?: string): WebhookListener {
  const listener: WebhookListener = {
    id: uuidv4(),
    userId,
    url,
    secret,
    events,
    createdAt: new Date().toISOString(),
  };
  const all = getWebhookListeners();
  all.push(listener);
  saveWebhookListeners(all);
  return listener;
}

export function deleteListener(userId: string, listenerId: string): boolean {
  const all = getWebhookListeners();
  const filtered = all.filter((w) => !(w.userId === userId && w.id === listenerId));
  const changed = filtered.length !== all.length;
  if (changed) saveWebhookListeners(filtered);
  return changed;
}

export async function dispatchEvent(userId: string, event: WebhookEventType, payload: any): Promise<void> {
  const listeners = listListeners(userId).filter((l) => l.events.includes(event));
  await Promise.all(
    listeners.map(async (l) => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const body = JSON.stringify({ event, timestamp, payload });
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (l.secret) {
        const signature = crypto.createHmac('sha256', l.secret).update(body).digest('hex');
        headers['X-Zion-Signature'] = signature;
      }
      try {
        await axios.post(l.url, body, { headers });
      } catch {
        // ignore failures for now
      }
    })
  );
}

export async function testDispatch(userId: string, listenerId: string, event: WebhookEventType): Promise<boolean> {
  const listener = listListeners(userId).find((l) => l.id === listenerId);
  if (!listener) return false;
  const samplePayload = sampleEventPayload(event);
  try {
    await dispatchEvent(userId, event, samplePayload);
    const all = getWebhookListeners();
    const idx = all.findIndex((l) => l.id === listenerId);
    if (idx >= 0) {
      all[idx].lastTestAt = new Date().toISOString();
      saveWebhookListeners(all);
    }
    return true;
  } catch {
    return false;
  }
}

export function sampleEventPayload(event: WebhookEventType): any {
  switch (event) {
    case 'new_application':
      return { applicationId: 'app_123', jobId: 'job_abc', applicant: { name: 'Jane Doe', email: 'jane@example.com' } };
    case 'quote_received':
      return { quoteId: 'quote_456', jobId: 'job_abc', amountUsd: 2500 };
    case 'milestone_approved':
      return { milestoneId: 'ms_789', jobId: 'job_abc', approvedBy: 'demo-user' };
    case 'talent_hired':
      return { talentSlug: 'ava-chen', jobId: 'job_abc', startDate: new Date().toISOString().slice(0, 10) };
    default:
      return {};
  }
}
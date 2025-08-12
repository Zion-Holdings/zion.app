import { safeStorage } from '@/utils/safeStorage';

export interface FeedbackEntry {
  id: string;
  rating: number;
  comment?: string;
  screenshot?: string;
  url: string;
  userAgent?: string;
  createdAt: string;
}

const STORAGE_KEY = 'app_feedback';

export function getFeedback(): FeedbackEntry[] {
  const raw = safeStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as FeedbackEntry[];
  } catch {
    return [];
  }
}

export function saveFeedback(entry: Omit<FeedbackEntry, 'id' | 'createdAt'>): FeedbackEntry {
  const all = getFeedback();
  const newEntry: FeedbackEntry = {
    id: typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
    ...entry,
  };
  all.push(newEntry);
  safeStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return newEntry;
}

import axios from 'axios';

export async function postFeedback(entry: Omit<FeedbackEntry, 'id' | 'createdAt'>) {
  try {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
    const data = await res.json().catch(() => ({}));
    if (res.status !== 201) {
      throw new Error(data?.error || `Error ${res.status}: Failed to submit feedback`);
    }
    return data;
  } catch (err: any) {
    throw new Error(err.message || 'Failed to submit feedback');
  }
}

export function getFeedbackStats() {
  const all = getFeedback();
  if (all.length === 0) {
    return { count: 0, averageRating: 0 };
  }
  const total = all.reduce((sum, f) => sum + (f.rating || 0), 0);
  return { count: all.length, averageRating: total / all.length };
}

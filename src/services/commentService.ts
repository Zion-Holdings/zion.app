import { safeStorage } from '@/utils/safeStorage';

export interface CommentEntry {
  id: string;
  name: string;
  text: string;
  createdAt: string;
}

const STORAGE_KEY = 'blog_comments';

function getAll(): Record<string, CommentEntry[]> {
  const raw = safeStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Record<string, CommentEntry[]>;
  } catch {
    return {};
  }
}

function saveAll(data: Record<string, CommentEntry[]>) {
  safeStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getComments(slug: string): CommentEntry[] {
  const all = getAll();
  return all[slug] || [];
}

export function addComment(
  slug: string,
  entry: Omit<CommentEntry, 'id' | 'createdAt'>
): CommentEntry {
  const all = getAll();
  const newEntry: CommentEntry = {
    id:
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
    ...entry,
  };
  if (!all[slug]) all[slug] = [];
  all[slug].push(newEntry);
  saveAll(all);
  return newEntry;
}
